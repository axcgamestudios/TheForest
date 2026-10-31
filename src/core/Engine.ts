import * as THREE from 'three';
import { EffectComposer } from 'postprocessing';
import { Heightfield, SPAWN, SUMMIT } from '../world/heightfield';
import { createTerrain } from '../world/Terrain';
import { SkyEnv } from '../world/SkyEnv';
import { createGrass } from '../world/Grass';
import { createForest, Collider } from '../world/Trees';
import { createRocks, createLogs, Motes } from '../world/Details';
import { createLandmarks } from '../world/Landmarks';
import { Drone } from '../world/Drone';
import { FirstPersonController } from '../player/FirstPersonController';
import { createComposer } from '../fx/PostProcessing';
import { AudioSystem } from '../audio/AudioSystem';
import { shared } from './uniforms';
import { MissionManager } from '../game/Missions';
import { Collectibles } from '../game/Collectibles';
import { Hud } from '../ui/Hud';

type Progress = (fraction: number, label: string) => void;

export type EngineMode = 'menu' | 'transition' | 'play' | 'paused';

interface QualityPreset {
  grassCount: number;
  shadowMapSize: number;
  pixelRatioCap: number;
  grassShadows: boolean;
}

const PRESETS: Record<string, QualityPreset> = {
  low: { grassCount: 12000, shadowMapSize: 1024, pixelRatioCap: 1, grassShadows: false },
  med: { grassCount: 28000, shadowMapSize: 2048, pixelRatioCap: 1.5, grassShadows: true },
  high: { grassCount: 42000, shadowMapSize: 4096, pixelRatioCap: 2, grassShadows: true }
};

const MENU_FOV = 58;
const PLAY_FOV = 70;
/** Duración de la transición cinematográfica menú -> jugador (s). */
const TRANSITION_TIME = 1.25;

const tick = () => new Promise<void>((r) => setTimeout(r, 0));

export class Engine {
  readonly renderer: THREE.WebGLRenderer;
  readonly scene: THREE.Scene;
  readonly camera: THREE.PerspectiveCamera;
  readonly missions = new MissionManager();
  readonly qualityName: string;
  private readonly clock = new THREE.Clock();

  private field!: Heightfield;
  private sky!: SkyEnv;
  controller!: FirstPersonController;
  private composer!: EffectComposer;
  private motes!: Motes;
  audio!: AudioSystem;
  private drone!: Drone;
  collectibles!: Collectibles;
  private forestUpdate!: (camPos: THREE.Vector3) => void;
  private terrainUpdate!: (camPos: THREE.Vector3) => void;
  private readonly quality: QualityPreset;

  hud: Hud | null = null;
  mode: EngineMode = 'menu';
  private hadFirstPlay = false;

  // Transición menú -> juego.
  private transT = 0;
  private readonly transFromPos = new THREE.Vector3();
  private readonly transFromQuat = new THREE.Quaternion();
  private transFromFov = MENU_FOV;

  // Cámara cinematográfica del menú.
  private readonly cineLook = new THREE.Vector3();
  private readonly cineTarget = new THREE.Vector3();
  private readonly tmpQuat = new THREE.Quaternion();

  constructor(container: HTMLElement) {
    const q =
      new URLSearchParams(location.search).get('q') ??
      localStorage.getItem('tf-quality') ??
      'med';
    this.qualityName = q in PRESETS ? q : 'med';
    this.quality = PRESETS[this.qualityName];

    this.renderer = new THREE.WebGLRenderer({
      antialias: false,
      powerPreference: 'high-performance'
    });
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, this.quality.pixelRatioCap));
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    container.appendChild(this.renderer.domElement);

    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(
      MENU_FOV,
      window.innerWidth / window.innerHeight,
      0.1,
      2000
    );

    window.addEventListener('resize', () => {
      this.camera.aspect = window.innerWidth / window.innerHeight;
      this.camera.updateProjectionMatrix();
      this.renderer.setSize(window.innerWidth, window.innerHeight);
      this.composer?.setSize(window.innerWidth, window.innerHeight);
    });
  }

  /** Construye el mundo por pasos, cediendo al DOM para actualizar la carga. */
  async build(progress: Progress): Promise<void> {
    progress(0.05, 'Modelando el terreno…');
    await tick();
    this.field = new Heightfield();

    progress(0.22, 'Iluminando el cielo…');
    await tick();
    this.sky = new SkyEnv(this.renderer, this.scene, this.quality.shadowMapSize);

    progress(0.38, 'Extendiendo la ladera…');
    await tick();
    const terrain = await createTerrain(this.field);
    this.scene.add(terrain.group);
    this.terrainUpdate = terrain.update;

    progress(0.52, 'Sembrando el pasto…');
    await tick();
    const grass = createGrass(this.field, this.quality.grassCount);
    grass.receiveShadow = this.quality.grassShadows;
    this.scene.add(grass);

    progress(0.66, 'Plantando el bosque…');
    await tick();
    const forest = createForest(this.field, this.scene);
    const colliders = forest.colliders;
    this.forestUpdate = forest.update;

    progress(0.78, 'Colocando rocas y troncos…');
    await tick();
    createRocks(this.field, this.scene, colliders);
    createLogs(this.field, this.scene, colliders);
    await createLandmarks(this.field, this.scene, colliders);
    this.drone = new Drone(this.scene, this.field);
    this.motes = new Motes(this.scene);
    this.collectibles = new Collectibles(this.scene, this.field);

    progress(0.9, 'Afinando la luz…');
    await tick();
    this.controller = new FirstPersonController(this.camera, this.field, colliders, SPAWN);
    this.audio = new AudioSystem(this.field, this.controller);
    this.composer = createComposer(this.renderer, this.scene, this.camera);

    // Vista inicial cinematográfica + precompilación de shaders.
    this.updateCinematic(0);
    this.sky.followPlayer(this.camera.position);
    this.forestUpdate(this.camera.position);
    this.terrainUpdate(this.camera.position);
    await this.renderer.compileAsync(this.scene, this.camera);
    this.composer.render(0);

    progress(1, 'Listo');
  }

  /** El HUD lo registra main.ts tras construirse. */
  setHud(hud: Hud): void {
    this.hud = hud;
  }

  /** Arranca la transición al juego; se llama al pulsar JUGAR desde el menú. */
  beginPlay(): void {
    if (this.mode === 'paused') return; // reanudar no necesita transición
    this.mode = 'transition';
    this.transT = 0;
    this.transFromPos.copy(this.camera.position);
    this.transFromQuat.copy(this.camera.quaternion);
    this.transFromFov = this.camera.fov;
  }

  /** Bloqueo de puntero activo: habilita el control del jugador. */
  setPlaying(playing: boolean): void {
    if (playing) {
      if (this.mode === 'paused') {
        this.mode = 'play';
        this.controller.enabled = true;
        this.collectibles.setPlaying(true);
      }
      // En 'transition' el control se activa sola al llegar al final.
      this.audio.setMenu(false);
    } else {
      // Esc: pausa si ya se jugó, o vuelta al menú si aún no.
      this.mode = this.hadFirstPlay ? 'paused' : 'menu';
      if (this.mode === 'menu') this.updateCinematic(shared.uTime.value);
      this.controller.enabled = false;
      this.collectibles.setPlaying(false);
      this.audio.setMenu(true);
    }
  }

  /** Arranca el audio; debe invocarse desde un gesto del usuario (clic). */
  startAudio(): void {
    this.audio.start();
  }

  start(): void {
    this.clock.getDelta();
    this.renderer.setAnimationLoop(() => this.update());
  }

  get dronePosition(): THREE.Vector3 {
    return this.drone.position;
  }

  private update(): void {
    const dt = Math.min(this.clock.getDelta(), 0.05);
    const t = shared.uTime.value + dt;
    shared.uTime.value = t;

    switch (this.mode) {
      case 'menu':
        this.updateCinematic(t);
        break;

      case 'transition':
        this.updateTransition(dt);
        break;

      case 'play':
        this.controller.update(dt);
        this.updateGameplay(dt, t);
        break;

      case 'paused':
        // Mundo vivo pero jugador congelado.
        break;
    }

    // Ancla de los sistemas que siguen a la cámara (pasto, LOD, sombras).
    const anchor =
      this.mode === 'menu' || this.mode === 'transition' ? this.camera.position : this.controller.position;
    shared.uPlayer.value.set(anchor.x, anchor.z);
    this.sky.followPlayer(anchor);
    this.forestUpdate(anchor);
    this.terrainUpdate(anchor);
    this.motes.update(t, anchor, this.field);
    // El dron siempre patrulla la cumbre y reacciona al jugador.
    this.drone.update(dt, t, this.controller.position);
    this.audio.update(dt, t);

    this.composer.render(dt);
  }

  /** Órbita lenta sobre el valle con vista al sendero y a la efigie. */
  private updateCinematic(t: number): void {
    const cx = 6;
    const cz = 92;
    const r = 36;
    const a = t * 0.038 + 2.4;
    const px = cx + Math.cos(a) * r;
    const pz = cz + Math.sin(a) * r;
    const py = this.field.sampleHeight(px, pz) + 8.5 + Math.sin(t * 0.12) * 2.4;
    this.camera.position.set(px, py, pz);

    // La mirada se pasea entre el sendero/árboles héroe y la cumbre.
    const k = 0.5 + 0.5 * Math.sin(t * 0.05 + 1.2);
    const valleyY = this.field.sampleHeight(0, 55) + 5;
    const summitY = this.field.sampleHeight(SUMMIT.x, SUMMIT.z) + 13;
    this.cineTarget.set(
      THREE.MathUtils.lerp(0, SUMMIT.x, k),
      THREE.MathUtils.lerp(valleyY, summitY, k),
      THREE.MathUtils.lerp(55, SUMMIT.z, k)
    );
    this.camera.lookAt(this.cineTarget);

    if (Math.abs(this.camera.fov - MENU_FOV) > 0.01) {
      this.camera.fov = THREE.MathUtils.damp(this.camera.fov, MENU_FOV, 4, 1 / 60);
      this.camera.updateProjectionMatrix();
    }
    this.cineLook.copy(this.cineTarget);
  }

  /** Fundido cinematográfico: posición, orientación y FOV hacia el jugador. */
  private updateTransition(dt: number): void {
    this.transT += dt / TRANSITION_TIME;
    const k = THREE.MathUtils.smoothstep(Math.min(this.transT, 1), 0, 1);

    // Destino: cabeza del jugador con su vista actual.
    const eye = this.controller.position;
    this.controller.getViewQuaternion(this.tmpQuat);

    this.camera.position.lerpVectors(this.transFromPos, eye, k);
    this.camera.quaternion.slerpQuaternions(this.transFromQuat, this.tmpQuat, k);
    const fov = THREE.MathUtils.lerp(this.transFromFov, PLAY_FOV, k);
    if (Math.abs(fov - this.camera.fov) > 0.01) {
      this.camera.fov = fov;
      this.camera.updateProjectionMatrix();
    }

    if (this.transT >= 1) {
      this.mode = 'play';
      this.hadFirstPlay = true;
      this.controller.enabled = true;
      this.collectibles.setPlaying(true);
      this.controller.update(0); // sincroniza cámara exacta
    }
  }

  /** Misiones, coleccionables, HUD y eventos (sólo en juego). */
  private updateGameplay(dt: number, t: number): void {
    const p = this.controller.position;
    this.collectibles.update(dt, t, p);
    this.missions.update(
      {
        walked: this.controller.walkedDistance,
        sprinted: this.controller.sprintDistance,
        collected: this.collectibles.collected,
        playerPos: p
      },
      this.dronePosition
    );

    // Eventos -> sonido + avisos del HUD (un único consumidor).
    for (const ev of this.missions.completedEvents) {
      this.audio.playEvent('mission');
      this.hud?.toast('mission', ev.def.title, `Misión completada · +${ev.xp} XP`);
    }
    this.missions.completedEvents.length = 0;

    for (const def of this.missions.activatedEvents) {
      this.hud?.toast('new', 'Nueva misión', def.title);
    }
    this.missions.activatedEvents.length = 0;

    for (const lvl of this.missions.levelUpEvents) {
      this.audio.playEvent('level');
      this.hud?.toast('level', `¡Nivel ${lvl}!`, 'Sigue explorando el bosque');
    }
    this.missions.levelUpEvents.length = 0;

    for (const c of this.collectibles.collectedEvents) {
      this.audio.playEvent('pickup');
      this.hud?.toast(
        'item',
        c.kind === 'flower' ? 'Flor luminosa' : c.kind === 'crystal' ? 'Fragmento de cristal' : 'Reliquia antigua',
        c.remaining > 0 ? `Quedan ${c.remaining} de ${c.total}` : 'Colección completa'
      );
    }
    this.collectibles.collectedEvents.length = 0;

    this.hud?.update(dt);
  }
}
