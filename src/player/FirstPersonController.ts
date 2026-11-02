import * as THREE from 'three';
import { Heightfield } from '../world/heightfield';
import { Collider } from '../world/Trees';

const EYE_HEIGHT = 1.68;
const WALK_SPEED = 4.6;
const SPRINT_MULT = 2.05;
const GRAVITY = 22;
const JUMP_SPEED = 5.4;
const BASE_FOV = 70;
const MENU_FOV = 58;

/**
 * Controlador en primera persona: pointer lock + WASD, gravedad,
 * colisión con el terreno (muestreo del heightfield) y con árboles/rocas,
 * y plataformas pisables del constructor (tarimas, escaleras, sótano).
 *
 * La cámara "siente" el movimiento: head-bob pronunciado al caminar que
 * se intensifica al correr, alabeo sutil, kick de FOV en sprint, dip al
 * aterrizar y respiración al quedarse quieto.
 */
export class FirstPersonController {
  readonly position: THREE.Vector3;
  enabled = false;
  /** Velocidad de caída con la que se tocó el suelo este frame (0 si no hubo aterrizaje). */
  landingSpeed = 0;

  // Estadísticas para las misiones.
  walkedDistance = 0;
  sprintDistance = 0;
  jumps = 0;

  private mYaw = Math.PI; // mirando hacia -Z... (yaw 0 mira a -Z; PI mira a +Z)
  private mPitch = 0;
  private readonly velocity = new THREE.Vector3();
  private grounded = true;
  private readonly keys = new Set<string>();
  private bobTime = 0;
  private bobAmount = 0;
  private idleTime = 0;
  private camDip = 0;
  private camDipVel = 0;

  /** Momento (s) de la última recogida con E, para el gesto de las manos. */
  lastPickup = -10;

  /** Altura máxima de paso para subir a una plataforma (m). */
  static readonly STEP_UP = 0.62;

  /**
   * Proveedor de suelo del constructor: (x, z, piesY) -> altura de la
   * plataforma pisable bajo los pies (o -Infinity si no hay ninguna
   * alcanzable). Permite caminar sobre tarimas, escaleras y el sótano.
   */
  private platformProvider: ((x: number, z: number, feetY: number) => number) | null = null;

  constructor(
    private readonly camera: THREE.PerspectiveCamera,
    private readonly field: Heightfield,
    private readonly colliders: Collider[],
    spawn: THREE.Vector3
  ) {
    this.position = spawn.clone();
    this.position.y = field.sampleHeight(spawn.x, spawn.z) + EYE_HEIGHT;
    this.mYaw = 0; // three: yaw 0 => cámara mira hacia -Z (ladera arriba)
    this.mPitch = 0.02;

    window.addEventListener('keydown', (e) => {
      if (e.code === 'Space') e.preventDefault();
      this.keys.add(e.code);
    });
    window.addEventListener('keyup', (e) => this.keys.delete(e.code));
    window.addEventListener('mousemove', (e) => {
      // La mirada funciona siempre que el puntero esté bloqueado, incluso
      // conduciendo (enabled = false) o en el menú (la cámara se impone).
      if (!document.pointerLockElement) return;
      this.mYaw -= e.movementX * 0.0021;
      this.mPitch -= e.movementY * 0.0021;
      const lim = Math.PI / 2 - 0.06;
      this.mPitch = THREE.MathUtils.clamp(this.mPitch, -lim, lim);
    });

    this.camera.fov = MENU_FOV;
    this.camera.updateProjectionMatrix();
    this.syncCamera();
  }

  get isGrounded(): boolean {
    return this.grounded;
  }

  get isSprinting(): boolean {
    return this.keys.has('ShiftLeft') || this.keys.has('ShiftRight');
  }

  /** Teclas pulsadas ahora mismo (para conducir). */
  get pressedKeys(): Set<string> {
    return this.keys;
  }

  /** Yaw de mirada (rad). 0 mira a -Z. */
  get yaw(): number {
    return this.mYaw;
  }

  set yaw(v: number) {
    this.mYaw = v;
  }

  /** Pitch de mirada (rad). */
  get pitch(): number {
    return this.mPitch;
  }

  set pitch(v: number) {
    this.mPitch = v;
  }

  /** Fase del head-bob (para las manos). */
  get bobPhase(): number {
    return this.bobTime;
  }

  /** Intensidad del head-bob (para las manos). */
  get bobIntensity(): number {
    return this.bobAmount;
  }

  /** Dirección horizontal de mirada (sin bob). */
  getViewDir(target: THREE.Vector3): THREE.Vector3 {
    return target.set(-Math.sin(this.mYaw), 0, -Math.cos(this.mYaw)).normalize();
  }

  /** Ajusta el yaw para mirar en una dirección dada (al subir al coche). */
  alignYawTo(dir: THREE.Vector3): void {
    this.mYaw = Math.atan2(-dir.x, -dir.z);
  }

  /** Envuelve un ángulo a (-PI, PI]. */
  wrapAngle(a: number): number {
    return Math.atan2(Math.sin(a), Math.cos(a));
  }

  /** Anula la velocidad (al bajar del coche). */
  zeroVelocity(): void {
    this.velocity.set(0, 0, 0);
    this.grounded = true;
  }

  /** Empujón vertical de cámara (impactos del hacha). */
  addImpulse(v: number): void {
    this.camDipVel += v;
  }

  /** Velocidad horizontal actual (m/s). */
  get horizontalSpeed(): number {
    return Math.hypot(this.velocity.x, this.velocity.z);
  }

  /** Orientación de vista actual (sin bob), para la transición del menú. */
  getViewQuaternion(target: THREE.Quaternion): THREE.Quaternion {
    return target.setFromEuler(new THREE.Euler(this.mPitch, this.mYaw, 0, 'YXZ'));
  }

  setPlatformProvider(fn: (x: number, z: number, feetY: number) => number): void {
    this.platformProvider = fn;
  }

  /** Instantánea de la posición y la mirada (para el sistema de guardado). */
  getSnapshot(): { x: number; y: number; z: number; yaw: number; pitch: number } {
    return {
      x: this.position.x,
      y: this.position.y,
      z: this.position.z,
      yaw: this.mYaw,
      pitch: this.mPitch
    };
  }

  /** Restaura posición y mirada de una partida guardada. */
  restoreSnapshot(s: { x: number; y: number; z: number; yaw: number; pitch: number }): void {
    this.position.set(s.x, s.y, s.z);
    this.mYaw = s.yaw;
    this.mPitch = THREE.MathUtils.clamp(s.pitch, -1.5, 1.5);
    this.velocity.set(0, 0, 0);
    this.grounded = true;
    this.syncCamera(0);
  }

  update(dt: number): void {
    this.landingSpeed = 0;
    // Dirección de movimiento en el plano XZ según el yaw.
    const forward = new THREE.Vector3(-Math.sin(this.mYaw), 0, -Math.cos(this.mYaw));
    const right = new THREE.Vector3(-forward.z, 0, forward.x);

    const input = new THREE.Vector3();
    if (this.enabled) {
      if (this.keys.has('KeyW') || this.keys.has('ArrowUp')) input.add(forward);
      if (this.keys.has('KeyS') || this.keys.has('ArrowDown')) input.sub(forward);
      if (this.keys.has('KeyD') || this.keys.has('ArrowRight')) input.add(right);
      if (this.keys.has('KeyA') || this.keys.has('ArrowLeft')) input.sub(right);
    }

    const sprinting = this.isSprinting;
    const targetSpeed = input.lengthSq() > 0 ? WALK_SPEED * (sprinting ? SPRINT_MULT : 1) : 0;
    if (input.lengthSq() > 0) input.normalize();

    // Aceleración/fricción horizontales (más ágil que antes).
    const accel = this.grounded ? 38 : 9;
    this.velocity.x = THREE.MathUtils.damp(this.velocity.x, input.x * targetSpeed, accel * 0.35, dt);
    this.velocity.z = THREE.MathUtils.damp(this.velocity.z, input.z * targetSpeed, accel * 0.35, dt);

    // Gravedad y salto.
    if (this.enabled && this.grounded && this.keys.has('Space')) {
      this.velocity.y = JUMP_SPEED;
      this.grounded = false;
      this.jumps++;
    }
    if (!this.grounded) this.velocity.y -= GRAVITY * dt;

    this.position.x += this.velocity.x * dt;
    this.position.z += this.velocity.z * dt;
    this.position.y += this.velocity.y * dt;

    // Estadísticas de desplazamiento.
    const hDist = Math.hypot(this.velocity.x, this.velocity.z) * dt;
    this.walkedDistance += hDist;
    if (sprinting && hDist > 0.008 && this.horizontalSpeed > WALK_SPEED * 1.1) {
      this.sprintDistance += hDist;
    }

    // Colisión con árboles y rocas: empuje horizontal (los colliders con
    // banda de altura sólo bloquean si los pies están dentro).
    const feetY = this.position.y - EYE_HEIGHT;
    for (const c of this.colliders) {
      if (c.minY !== undefined && (feetY < c.minY || feetY > (c.maxY ?? c.minY))) continue;
      const dx = this.position.x - c.x;
      const dz = this.position.z - c.z;
      const rr = c.r + 0.42;
      const d2 = dx * dx + dz * dz;
      if (d2 < rr * rr && d2 > 1e-6) {
        const d = Math.sqrt(d2);
        this.position.x = c.x + (dx / d) * rr;
        this.position.z = c.z + (dz / d) * rr;
      }
    }

    // Colisión con el terreno y con las plataformas del constructor:
    // sólo cuentan las superficies que están por debajo de los pies + un
    // paso (así no se teletransporta a una tarima que pasa por encima).
    const stepUp = FirstPersonController.STEP_UP;
    const terrainY = this.field.sampleHeight(this.position.x, this.position.z);
    let groundY = terrainY <= feetY + stepUp ? terrainY : -Infinity;
    if (this.platformProvider) {
      const pY = this.platformProvider(this.position.x, this.position.z, feetY);
      if (pY > groundY) groundY = pY;
    }
    if (groundY === -Infinity) groundY = terrainY; // red de seguridad
    const eyeGroundY = groundY + EYE_HEIGHT;
    if (this.position.y <= eyeGroundY) {
      if (!this.grounded && this.velocity.y < -3) this.landingSpeed = -this.velocity.y;
      this.position.y = eyeGroundY;
      this.velocity.y = 0;
      this.grounded = true;
    } else if (this.position.y > eyeGroundY + 0.05) {
      this.grounded = false;
    }

    this.syncCamera(dt);
  }

  private syncCamera(dt = 0): void {
    const hSpeed = this.horizontalSpeed;
    const sprinting = this.isSprinting && hSpeed > WALK_SPEED * 1.05;

    // --- Head-bob: pronunciado y ligado a la velocidad real ---
    const target = this.grounded ? THREE.MathUtils.clamp(hSpeed / WALK_SPEED, 0, 2.1) : 0;
    this.bobAmount = THREE.MathUtils.damp(this.bobAmount, target, 8, dt);
    const bobSpeed = 4.4 + hSpeed * 1.15;
    this.bobTime += dt * bobSpeed;

    const amp = this.bobAmount * this.bobAmount;
    const bobY = Math.sin(this.bobTime * 2) * 0.055 * amp;
    const bobX = Math.cos(this.bobTime) * 0.038 * amp;
    const roll = Math.sin(this.bobTime) * 0.016 * amp;

    // Respiración sutil al estar quieto.
    this.idleTime += dt;
    const breathe = Math.sin(this.idleTime * 1.35) * 0.007 * (1 - Math.min(this.bobAmount, 1));

    // --- Dip con muelle al aterrizar ---
    if (this.landingSpeed > 2.5) {
      this.camDipVel -= Math.min(this.landingSpeed * 1.35, 6.5);
    }
    if (dt > 0) {
      this.camDip += this.camDipVel * dt;
      this.camDipVel += (-this.camDip * 85 - this.camDipVel * 11) * dt;
      this.camDip = THREE.MathUtils.clamp(this.camDip, -0.45, 0.2);
    }
    const dip = -Math.abs(Math.min(this.camDip, 0)) - Math.max(this.camDip, 0) * 0.4;

    this.camera.position.set(
      this.position.x + bobX * Math.cos(this.mYaw),
      this.position.y + bobY + breathe + dip,
      this.position.z - bobX * Math.sin(this.mYaw)
    );
    this.camera.quaternion.setFromEuler(new THREE.Euler(this.mPitch, this.mYaw, roll, 'YXZ'));

    // --- FOV: kick al correr, se relaja al parar ---
    // (el estado vive en camera.fov para no pisar el FOV del menú)
    const targetFov = BASE_FOV + (sprinting ? 7 : 0) + THREE.MathUtils.clamp(hSpeed - WALK_SPEED, 0, 6) * 0.5;
    const newFov = dt > 0 ? THREE.MathUtils.damp(this.camera.fov, targetFov, 5, dt) : this.camera.fov;
    if (Math.abs(newFov - this.camera.fov) > 0.004) {
      this.camera.fov = newFov;
      this.camera.updateProjectionMatrix();
    }
  }
}
