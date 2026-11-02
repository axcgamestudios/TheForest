import * as THREE from 'three';
import { Sky } from 'three/addons/objects/Sky.js';
import { shared } from '../core/uniforms';
import { CLOUD_GLSL, CLOUD_HEIGHT, CLOUD_SCALE } from '../core/cloudGlsl';
import { mulberry32 } from '../core/noise';
import { softDotTexture } from '../core/textures';

/** Duración de un día completo de juego (s reales). */
export const DAY_LENGTH = 480;

/** Estado del cielo que el HUD y el juego pueden consultar. */
export interface CycleInfo {
  /** Hora del día 0..1 (0 = medianoche, 0.5 = mediodía). */
  time: number;
  /** 0 = pleno día, 1 = plena noche. */
  night: number;
  /** Reloj legible "HH:MM". */
  clock: string;
}

/** Material emisivo que se enciende de noche (farolas, ventanas…). */
interface NightMat {
  mat: THREE.MeshStandardMaterial;
  base: number;
}

/** Luz puntual que se enciende de noche. */
interface NightLight {
  light: THREE.PointLight;
  base: number;
}

/**
 * Cielo procedural con CICLO DÍA/NOCHE completo: el sol recorre su arco de
 * este a oeste, la luz gira y cambia de color, al anochecer salen luna y
 * estrellas, las farolas y ventanas del pueblo se encienden y la niebla
 * adopta tonos de atardecer. El IBL se precalcula para día y noche.
 */
export class SkyEnv {
  readonly sunDir: THREE.Vector3;
  readonly sun: THREE.DirectionalLight;
  /** Disco solar brillante (para god rays); sigue al jugador. */
  readonly sunMesh: THREE.Mesh;

  private readonly renderer: THREE.WebGLRenderer;
  private readonly scene: THREE.Scene;
  private readonly sky: Sky;
  private readonly shadowExtent = 75;
  private clouds!: THREE.Mesh;

  // ---- Ciclo día/noche ----
  private timeOfDay = 0.38; // ~09:00 de la mañana
  private readonly moonDir = new THREE.Vector3();
  private moon!: THREE.Mesh;
  private moonGlow!: THREE.Sprite;
  private starsBright!: THREE.Points;
  private starsDim!: THREE.Points;
  private envDay: THREE.Texture;
  private envNight: THREE.Texture;
  private envIsNight = false;
  private readonly sunColor = new THREE.Color();
  private readonly moonColor = new THREE.Color(0x93a8cc);
  private readonly dayFog = new THREE.Color(0xc6ddf2);
  private readonly duskFog = new THREE.Color(0xd8a06c);
  private readonly nightFog = new THREE.Color(0x0b1322);
  private readonly tmpFog = new THREE.Color();
  private readonly nightMats: NightMat[] = [];
  private readonly nightLights: NightLight[] = [];
  /** Dirección de la luz activa (sol de día, luna de noche). */
  private readonly activeLightDir = new THREE.Vector3();
  private nightF = 0;

  constructor(renderer: THREE.WebGLRenderer, scene: THREE.Scene, shadowMapSize: number) {
    this.renderer = renderer;
    this.scene = scene;

    // Cielo.
    const sky = new Sky();
    sky.scale.setScalar(45000);
    const u = sky.material.uniforms;
    u.turbidity.value = 2.6;
    u.rayleigh.value = 1.3;
    u.mieCoefficient.value = 0.0042;
    u.mieDirectionalG.value = 0.82;
    this.sky = sky;

    // Dirección inicial del sol (se recalcula con el ciclo).
    this.sunDir = new THREE.Vector3(0.45, 0.72, 0.35).normalize();

    // ---- IBL precalculado para día y noche (intercambio al anochecer) ----
    const pmrem = new THREE.PMREMGenerator(renderer);
    this.envDay = this.bakeEnv(pmrem, 46);
    this.envNight = this.bakeEnv(pmrem, -22);
    scene.environment = this.envDay;
    scene.environmentIntensity = 0.45;
    pmrem.dispose();

    // El cielo también se dibuja como fondo.
    u.sunPosition.value.copy(this.sunDir);
    scene.add(sky);

    // Disco solar: esfera emisiva lejos en la dirección del sol (sin niebla
    // para que no se apague con la distancia). Los rayos volumétricos del
    // postproceso nacen de él.
    this.sunMesh = new THREE.Mesh(
      new THREE.SphereGeometry(34, 16, 12),
      new THREE.MeshBasicMaterial({ color: 0xfff3c9, fog: false })
    );
    this.sunMesh.frustumCulled = false;
    scene.add(this.sunMesh);

    // Luna con halo suave.
    this.moon = new THREE.Mesh(
      new THREE.SphereGeometry(23, 18, 14),
      new THREE.MeshBasicMaterial({ color: 0xe8edf4, fog: false })
    );
    this.moon.frustumCulled = false;
    scene.add(this.moon);
    this.moonGlow = new THREE.Sprite(
      new THREE.SpriteMaterial({
        map: softDotTexture(),
        color: 0xbfd0e8,
        transparent: true,
        opacity: 0.4,
        depthWrite: false,
        fog: false
      })
    );
    this.moonGlow.scale.setScalar(130);
    scene.add(this.moonGlow);

    this.createStars();
    this.createClouds(scene);

    // Niebla atmosférica (el color la anima el ciclo).
    scene.fog = new THREE.FogExp2(0xc6ddf2, 0.0012);

    // Sol direccional con sombras (de noche hace de luna).
    const sun = new THREE.DirectionalLight(0xfff1da, 3.6);
    sun.castShadow = true;
    sun.shadow.mapSize.set(shadowMapSize, shadowMapSize);
    const e = this.shadowExtent;
    sun.shadow.camera.left = -e;
    sun.shadow.camera.right = e;
    sun.shadow.camera.top = e;
    sun.shadow.camera.bottom = -e;
    sun.shadow.camera.near = 1;
    sun.shadow.camera.far = 450;
    sun.shadow.camera.updateProjectionMatrix();
    sun.shadow.bias = -0.00025;
    sun.shadow.normalBias = 0.15;
    scene.add(sun);
    scene.add(sun.target);
    this.sun = sun;

    // Posición inicial coherente con la hora.
    this.updateAstros(0);
  }

  /** Hornea un entorno PMREM con el sol a una altura dada (grados). */
  private bakeEnv(pmrem: THREE.PMREMGenerator, elevationDeg: number): THREE.Texture {
    const s = new Sky();
    s.scale.setScalar(45000);
    const u = s.material.uniforms;
    u.turbidity.value = 2.6;
    u.rayleigh.value = 1.3;
    u.mieCoefficient.value = 0.0042;
    u.mieDirectionalG.value = 0.82;
    const el = THREE.MathUtils.degToRad(elevationDeg);
    const az = THREE.MathUtils.degToRad(90);
    u.sunPosition.value.setFromSphericalCoords(1, Math.PI / 2 - el, az);
    const envScene = new THREE.Scene();
    envScene.add(s);
    const rt = pmrem.fromScene(envScene);
    s.geometry.dispose();
    (s.material as THREE.Material).dispose();
    return rt.texture;
  }

  /** Campo de estrellas (dos capas con brillos distintos). */
  private createStars(): void {
    const mk = (count: number, size: number, opacity: number): THREE.Points => {
      const rng = mulberry32(771 + count);
      const pos = new Float32Array(count * 3);
      const col = new Float32Array(count * 3);
      const c = new THREE.Color();
      for (let i = 0; i < count; i++) {
        // Hemisferio superior bien repartido.
        const t = rng() * Math.PI * 2;
        const p = Math.acos(1 - rng() * 0.92); // sesgo hacia arriba
        const r = 1650;
        pos[i * 3] = Math.sin(p) * Math.cos(t) * r;
        pos[i * 3 + 1] = Math.cos(p) * r;
        pos[i * 3 + 2] = Math.sin(p) * Math.sin(t) * r;
        // Tono: blanco, azulado o cálido.
        const k = rng();
        if (k > 0.85) c.setRGB(1, 0.82, 0.62);
        else if (k > 0.6) c.setRGB(0.72, 0.82, 1);
        else c.setRGB(1, 1, 1);
        col[i * 3] = c.r;
        col[i * 3 + 1] = c.g;
        col[i * 3 + 2] = c.b;
      }
      const geo = new THREE.BufferGeometry();
      geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
      geo.setAttribute('color', new THREE.BufferAttribute(col, 3));
      const mat = new THREE.PointsMaterial({
        size,
        sizeAttenuation: false,
        vertexColors: true,
        transparent: true,
        opacity,
        depthWrite: false,
        fog: false
      });
      const pts = new THREE.Points(geo, mat);
      pts.frustumCulled = false;
      pts.visible = false;
      this.scene.add(pts);
      return pts;
    };
    this.starsBright = mk(320, 2.4, 0.95);
    this.starsDim = mk(900, 1.25, 0.7);
  }

  /**
   * Domo de nubes cúmulo: fbm animado proyectado sobre un plano virtual.
   * Se oscurecen de noche con el uniform uDay.
   */
  private createClouds(scene: THREE.Scene): void {
    const geo = new THREE.SphereGeometry(1750, 48, 20, 0, Math.PI * 2, 0, Math.PI * 0.56);
    const mat = new THREE.ShaderMaterial({
      transparent: true,
      depthWrite: false,
      side: THREE.BackSide,
      uniforms: {
        uTime: shared.uTime,
        uSunDir: shared.uSunDir,
        uDay: shared.uDay
      },
      vertexShader: `
        varying vec3 vDir;
        void main() {
          vDir = position;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }`,
      fragmentShader: `
        uniform float uTime;
        uniform vec3 uSunDir;
        uniform float uDay;
        varying vec3 vDir;

        ${CLOUD_GLSL}

        void main() {
          vec3 dir = normalize(vDir);
          float hor = smoothstep(0.03, 0.18, dir.y);
          if (hor <= 0.002) discard;

          float tPlane = (${CLOUD_HEIGHT.toFixed(1)} - cameraPosition.y) / max(dir.y, 0.035);
          vec2 q = (cameraPosition.xz + dir.xz * tPlane) / ${CLOUD_SCALE.toFixed(1)};

          float alpha = cloudField(q, uTime, 0.14);
          alpha *= 0.8 + 0.35 * csnoise((q + csWind(uTime)) * 3.3 + 5.0);
          if (alpha <= 0.004) discard;

          vec2 sunOffs = normalize(uSunDir.xz + vec2(1e-4)) * 0.14;
          float dens = cloudField(q, uTime, 0.35);
          float densSun = cloudField(q + sunOffs, uTime, 0.35);
          float lit = clamp(0.95 + (dens - densSun) * 1.5, 0.7, 1.3);
          vec3 col = mix(vec3(0.62, 0.66, 0.74), vec3(1.12, 1.1, 1.05), clamp(lit, 0.0, 1.0));
          col += vec3(1.0, 0.95, 0.85) * max(lit - 1.0, 0.0);

          // Borde plateado alrededor del sol.
          col += vec3(0.35, 0.3, 0.22) * pow(max(dot(dir, uSunDir), 0.0), 12.0) * alpha;

          // Noche: las nubes se apagan y azulean a la luz de la luna.
          col *= mix(vec3(0.10, 0.13, 0.22), vec3(1.0), uDay);

          col = mix(vec3(0.85, 0.9, 0.97) * mix(0.35, 1.0, uDay), col, hor);

          gl_FragColor = vec4(col, alpha * hor * 0.94);
        }`
    });
    mat.fog = false;
    this.clouds = new THREE.Mesh(geo, mat);
    this.clouds.frustumCulled = false;
    this.clouds.renderOrder = 1;
    scene.add(this.clouds);
  }

  // ================= Ciclo día/noche =================

  /** Hora del día actual 0..1. */
  get time(): number {
    return this.timeOfDay;
  }

  /** Fija la hora (para cargar la partida). */
  setTimeOfDay(t: number): void {
    this.timeOfDay = ((t % 1) + 1) % 1;
    this.updateAstros(0);
  }

  get nightFactor(): number {
    return this.nightF;
  }

  /** Registra un material emisivo que se enciende al anochecer. */
  registerNightMaterial(mat: THREE.MeshStandardMaterial): void {
    this.nightMats.push({ mat, base: mat.emissiveIntensity });
  }

  /** Registra una luz puntual que se enciende al anochecer. */
  registerNightLight(light: THREE.PointLight): void {
    this.nightLights.push({ light, base: light.intensity });
  }

  /**
   * Avanza el ciclo: sol, luna, estrellas, luz, niebla, nubes y luces del
   * pueblo. `advance` = false sólo re-presenta (pausa).
   */
  updateCycle(dt: number, advance: boolean): CycleInfo {
    if (advance) this.timeOfDay = (this.timeOfDay + dt / DAY_LENGTH) % 1;
    const info = this.updateAstros(dt);
    return info;
  }

  /** Recalcula sol/luna/luces/niebla para la hora actual. */
  private updateAstros(dt: number): CycleInfo {
    const t = this.timeOfDay;
    const dayPhase = (t - 0.25) / 0.5; // 0 amanecer · 1 atardecer
    const elevRad = Math.sin((t - 0.25) * Math.PI * 2) * THREE.MathUtils.degToRad(62);
    // Azimut continuo: este -> sur -> oeste.
    const azim = (t - 0.5) * Math.PI * 2 + Math.PI;

    // Sol y luna (la luna va casi opuesta al sol).
    this.sunDir.setFromSphericalCoords(1, Math.PI / 2 - elevRad, azim).normalize();
    this.moonDir
      .setFromSphericalCoords(
        1,
        Math.PI / 2 - Math.sin((t + 0.5 - 0.25) * Math.PI * 2) * THREE.MathUtils.degToRad(48),
        azim + Math.PI * 0.92
      )
      .normalize();

    const elevDeg = THREE.MathUtils.radToDeg(elevRad);
    // 0 de día · 1 de noche (transición alrededor del horizonte).
    this.nightF = THREE.MathUtils.smoothstep(-elevDeg + 4, 0, 10);

    // Cielo del fondo.
    this.sky.material.uniforms.sunPosition.value.copy(this.sunDir);
    shared.uSunDir.value.copy(this.sunDir);
    shared.uDay.value = 1 - this.nightF * 0.94;

    // Disco solar: se hunde bajo el horizonte (los god rays se van solos).
    const sunUp = elevDeg > -4;
    this.sunMesh.visible = sunUp;
    // Se enrojece al acercarse al horizonte.
    const horizonGlow = 1 - THREE.MathUtils.clamp(Math.abs(elevDeg) / 18, 0, 1);
    this.sunColor.setHex(0xfff3c9).lerp(new THREE.Color(0xff7f3f), horizonGlow * 0.8);
    (this.sunMesh.material as THREE.MeshBasicMaterial).color.copy(this.sunColor);

    // Luna y estrellas.
    const nf = this.nightF;
    this.moon.visible = nf > 0.15;
    this.starsBright.visible = nf > 0.08;
    this.starsDim.visible = nf > 0.08;
    (this.starsBright.material as THREE.PointsMaterial).opacity = 0.95 * nf;
    (this.starsDim.material as THREE.PointsMaterial).opacity =
      0.7 * nf * (0.9 + 0.1 * Math.sin(shared.uTime.value * 1.7));

    // ---- Luz principal: sol de día, luna de noche ----
    if (nf < 0.5) {
      this.activeLightDir.copy(this.sunDir);
      this.sun.intensity = THREE.MathUtils.lerp(3.6, 0.04, nf / 0.5);
      this.sun.color.copy(this.sunColor).lerp(new THREE.Color(0xff9c66), horizonGlow * 0.5);
    } else {
      this.activeLightDir.copy(this.moonDir);
      this.sun.intensity = THREE.MathUtils.lerp(0.04, 0.34, (nf - 0.5) / 0.5);
      this.sun.color.copy(this.moonColor);
    }

    // IBL: intercambia el entorno día/noche en pleno crepúsculo (la
    // intensidad es mínima ahí, así el salto no se nota).
    const wantNightEnv = nf > 0.55;
    if (wantNightEnv !== this.envIsNight) {
      this.envIsNight = wantNightEnv;
      this.scene.environment = wantNightEnv ? this.envNight : this.envDay;
    }
    this.scene.environmentIntensity = THREE.MathUtils.lerp(0.5, 0.07, nf);

    // Niebla: día -> naranja de atardecer -> azul noche.
    this.tmpFog.copy(this.dayFog).lerp(this.nightFog, nf);
    this.tmpFog.lerp(this.duskFog, horizonGlow * (1 - nf) * 0.85);
    (this.scene.fog as THREE.FogExp2).color.copy(this.tmpFog);
    (this.scene.fog as THREE.FogExp2).density = 0.0012 + nf * 0.0007;

    // Farolas, ventanas y luces del pueblo: se encienden al anochecer.
    const lampOn = THREE.MathUtils.smoothstep(nf, 0.35, 0.8);
    for (const nm of this.nightMats) {
      nm.mat.emissiveIntensity = nm.base * (0.04 + lampOn);
    }
    for (const nl of this.nightLights) {
      nl.light.intensity = nl.base * lampOn;
    }

    // Reloj "HH:MM".
    const hours = t * 24;
    const hh = Math.floor(hours);
    const mm = Math.floor((hours - hh) * 60);
    const clock = `${String(hh).padStart(2, '0')}:${String(mm).padStart(2, '0')}`;

    void dt;
    void dayPhase;
    return { time: t, night: nf, clock };
  }

  /**
   * El volumen de sombras sigue al jugador, ajustado a la cuadrícula de
   * texels del shadow map. También ancla sol, luna y estrellas al jugador.
   */
  followPlayer(playerPos: THREE.Vector3): void {
    this.clouds.position.set(playerPos.x, 0, playerPos.z);
    // El disco del sol y la luna se mantienen fijos en dirección, pegados al
    // jugador; las estrellas igual.
    this.sunMesh.position.copy(playerPos).addScaledVector(this.sunDir, 1500);
    this.moon.position.copy(playerPos).addScaledVector(this.moonDir, 1500);
    this.moonGlow.position.copy(this.moon.position);
    (this.moonGlow.material as THREE.SpriteMaterial).opacity = 0.42 * this.nightF;
    this.starsBright.position.copy(playerPos);
    this.starsDim.position.copy(playerPos);

    const texel = (this.shadowExtent * 2) / this.sun.shadow.mapSize.x;

    const dir = this.activeLightDir;
    const up = Math.abs(dir.y) > 0.95 ? new THREE.Vector3(1, 0, 0) : new THREE.Vector3(0, 1, 0);
    const right = new THREE.Vector3().crossVectors(dir, up).normalize();
    const upv = new THREE.Vector3().crossVectors(right, dir).normalize();

    const tx = Math.round(playerPos.dot(right) / texel) * texel;
    const ty = Math.round(playerPos.dot(upv) / texel) * texel;
    const tz = playerPos.dot(dir);

    const snapped = new THREE.Vector3()
      .addScaledVector(right, tx)
      .addScaledVector(upv, ty)
      .addScaledVector(dir, tz);

    this.sun.target.position.copy(snapped);
    this.sun.position.copy(snapped).addScaledVector(dir, 220);
  }
}
