import * as THREE from 'three';
import { Heightfield } from '../world/heightfield';
import { Collider } from '../world/Trees';
import { FirstPersonController } from '../player/FirstPersonController';
import { AudioSystem } from '../audio/AudioSystem';

type CarType = 'pickup' | 'suv' | 'compact';

interface CarSpec {
  type: CarType;
  color: number;
  x: number;
  z: number;
  rotY: number;
  maxSpeed: number;
}

const SPECS: CarSpec[] = [
  { type: 'pickup', color: 0xa63a2e, x: 58, z: 124, rotY: 2.6, maxSpeed: 16 },
  { type: 'suv', color: 0x3a5f8f, x: 38, z: 110, rotY: -1.4, maxSpeed: 14 },
  { type: 'compact', color: 0x6b7a45, x: 50, z: 152, rotY: 1.2, maxSpeed: 18 }
];

const WHEEL_R = 0.34;
const EYE = 1.68;

class Car {
  readonly group = new THREE.Group();
  readonly collider: Collider;
  readonly spec: CarSpec;
  private readonly wheels: THREE.Mesh[] = [];
  private readonly frontWheels: THREE.Object3D[] = [];
  private readonly steerPivots: THREE.Object3D[] = [];
  private readonly seatLocal = new THREE.Vector3(-0.4, 1.02, 0.3);

  /** Estado dinámico. */
  v = 0;
  private steer = 0;
  private yaw: number;
  private pitch = 0;
  private roll = 0;
  private y = 0;
  private wheelSpin = 0;

  constructor(
    spec: CarSpec,
    field: Heightfield,
    bodyMat: THREE.MeshStandardMaterial,
    glassMat: THREE.MeshStandardMaterial,
    tireMat: THREE.MeshStandardMaterial,
    trimMat: THREE.MeshStandardMaterial,
    lightMat: THREE.MeshStandardMaterial,
    tailMat: THREE.MeshStandardMaterial
  ) {
    this.spec = spec;
    this.yaw = spec.rotY;
    this.y = field.sampleHeight(spec.x, spec.z) + 0.1;
    this.collider = { x: spec.x, z: spec.z, r: 1.35 };
    this.build(bodyMat, glassMat, tireMat, trimMat, lightMat, tailMat);
    this.group.position.set(spec.x, this.y, spec.z);
    this.group.rotation.y = this.yaw;
  }

  private build(
    bodyMat: THREE.MeshStandardMaterial,
    glassMat: THREE.MeshStandardMaterial,
    tireMat: THREE.MeshStandardMaterial,
    trimMat: THREE.MeshStandardMaterial,
    lightMat: THREE.MeshStandardMaterial,
    tailMat: THREE.MeshStandardMaterial
  ): void {
    const t = this.spec.type;
    const L = t === 'pickup' ? 4.7 : t === 'suv' ? 4.4 : 3.7; // largo
    const W = t === 'compact' ? 1.72 : 1.86; // ancho
    const bodyH = t === 'suv' ? 0.85 : 0.68; // alto del cuerpo
    const clearance = 0.42;
    const wheelBase = L * 0.6;
    const track = W * 0.86;

    const add = (m: THREE.Mesh, cast = true): void => {
      m.castShadow = cast;
      m.receiveShadow = true;
      this.group.add(m);
    };
    const box = (
      w: number,
      h: number,
      d: number,
      x: number,
      y: number,
      z: number,
      mat: THREE.Material
    ): THREE.Mesh => {
      const m = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), mat);
      m.position.set(x, y, z);
      return m;
    };

    // Chasis bajo.
    add(box(W, bodyH, L, 0, clearance + bodyH / 2, 0, bodyMat));
    // Capó y cola más bajos.
    const hoodLen = t === 'compact' ? 0.7 : 0.95;
    add(box(W * 0.96, 0.16, hoodLen, 0, clearance + bodyH + 0.06, L / 2 - hoodLen / 2 - 0.04, bodyMat));
    add(box(W * 0.96, 0.14, 0.5, 0, clearance + bodyH + 0.05, -L / 2 + 0.28, bodyMat));

    if (t === 'pickup') {
      // Cabina delantera + caja de carga abierta.
      const cab = box(W, 0.62, 1.5, 0, clearance + bodyH + 0.28, 0.35, bodyMat);
      add(cab);
      const bed = box(W * 0.94, 0.42, 1.75, 0, clearance + bodyH + 0.16, -1.35, bodyMat);
      add(bed);
      const bedFloor = box(W * 0.86, 0.05, 1.6, 0, clearance + 0.5, -1.35, trimMat);
      add(bedFloor);
    } else {
      // SUV / compacto: cabina continua.
      const cabinH = t === 'suv' ? 0.78 : 0.68;
      const cabin = box(W * 0.92, cabinH, L * 0.52, 0, clearance + bodyH + cabinH / 2, t === 'suv' ? -0.25 : -0.1, bodyMat);
      add(cabin);
      // Pilares y techo.
      add(box(W * 0.84, 0.07, L * 0.48, 0, clearance + bodyH + cabinH + 0.03, t === 'suv' ? -0.25 : -0.1, bodyMat));
      // Cristales laterales y parabrisas (planos oscuros).
      const glassSide = new THREE.Mesh(new THREE.BoxGeometry(W * 0.93, cabinH * 0.6, L * 0.42), glassMat);
      glassSide.position.set(0, clearance + bodyH + cabinH / 2, t === 'suv' ? -0.25 : -0.1);
      add(glassSide, false);
      const windshield = new THREE.Mesh(new THREE.BoxGeometry(W * 0.8, cabinH * 0.62, 0.04), glassMat);
      windshield.position.set(0, clearance + bodyH + cabinH / 2, (t === 'suv' ? -0.25 : -0.1) + L * 0.26);
      windshield.rotation.x = -0.34;
      add(windshield, false);
    }

    // Parachoques, parrilla y faros.
    add(box(W * 0.98, 0.22, 0.18, 0, clearance + 0.18, L / 2 + 0.02, trimMat));
    add(box(W * 0.98, 0.2, 0.16, 0, clearance + 0.16, -L / 2 - 0.02, trimMat));
    for (const s of [-1, 1]) {
      const head = new THREE.Mesh(new THREE.BoxGeometry(0.3, 0.14, 0.06), lightMat);
      head.position.set(s * (W / 2 - 0.28), clearance + bodyH - 0.05, L / 2 + 0.03);
      add(head, false);
      const tail = new THREE.Mesh(new THREE.BoxGeometry(0.26, 0.12, 0.05), tailMat);
      tail.position.set(s * (W / 2 - 0.26), clearance + bodyH - 0.05, -L / 2 - 0.03);
      add(tail, false);
    }

    // Interior: tablero + volante + asientos (visible desde el puesto del conductor).
    const dash = box(W * 0.82, 0.24, 0.4, 0, 1.02, 0.85, trimMat);
    add(dash, false);
    const wheelParent = new THREE.Object3D();
    wheelParent.position.set(-0.4, 1.0, 0.62);
    wheelParent.rotation.x = -0.42;
    const rim = new THREE.Mesh(new THREE.TorusGeometry(0.17, 0.024, 8, 20), trimMat);
    wheelParent.add(rim);
    for (let i = 0; i < 3; i++) {
      const spoke = new THREE.Mesh(new THREE.BoxGeometry(0.03, 0.16, 0.02), trimMat);
      spoke.position.y = -0.08;
      spoke.rotation.z = (i / 3) * Math.PI * 2;
      spoke.position.set(Math.sin((i / 3) * Math.PI * 2) * 0.08, -0.06, 0);
      wheelParent.add(spoke);
    }
    this.group.add(wheelParent);
    for (const s of [-1, 1]) {
      const seat = box(0.52, 0.14, 0.5, s * 0.42, 0.82, -0.15, trimMat);
      add(seat, false);
      const back = box(0.52, 0.62, 0.14, s * 0.42, 1.14, -0.42, trimMat);
      add(back, false);
    }

    // Ruedas: cilindros con eje X; las delanteras en pivotes para girar.
    const wheelGeo = new THREE.CylinderGeometry(WHEEL_R, WHEEL_R, 0.26, 12);
    wheelGeo.rotateZ(Math.PI / 2);
    const hubGeo = new THREE.CylinderGeometry(0.13, 0.13, 0.28, 8);
    hubGeo.rotateZ(Math.PI / 2);
    for (const [sx, sz] of [
      [-1, 1],
      [1, 1],
      [-1, -1],
      [1, -1]
    ]) {
      const pivot = new THREE.Object3D();
      pivot.position.set((sx * track) / 2, WHEEL_R, (sz * wheelBase) / 2);
      const wheel = new THREE.Mesh(wheelGeo, tireMat);
      const hub = new THREE.Mesh(hubGeo, trimMat);
      wheel.add(hub);
      pivot.add(wheel);
      this.group.add(pivot);
      this.wheels.push(wheel);
      if (sz > 0) this.steerPivots.push(pivot);
    }
  }

  get position(): THREE.Vector3 {
    return this.group.position;
  }

  get forward(): THREE.Vector3 {
    return new THREE.Vector3(Math.sin(this.yaw), 0, Math.cos(this.yaw));
  }

  /** Distancia al coche para el prompt de entrar. */
  distanceTo(p: THREE.Vector3): number {
    return Math.hypot(this.group.position.x - p.x, this.group.position.z - p.z);
  }

  seatWorld(target: THREE.Vector3): THREE.Vector3 {
    return target.copy(this.seatLocal).applyMatrix4(this.group.matrixWorld);
  }

  /** Punto de bajada (lado izquierdo). */
  exitWorld(target: THREE.Vector3): THREE.Vector3 {
    return target.set(-1.6, 0, 0.2).applyMatrix4(this.group.matrixWorld);
  }

  /**
   * Un paso de física de conducción. Devuelve true si hubo choque fuerte
   * (para el sonido).
   */
  drive(dt: number, throttle: number, steerInput: number, brake: boolean, field: Heightfield, colliders: Collider[]): boolean {
    const maxV = this.spec.maxSpeed;

    // Aceleración / freno / reversa.
    if (brake) {
      this.v -= Math.sign(this.v) * Math.min(Math.abs(this.v), 16 * dt);
    } else if (throttle > 0) {
      this.v += (this.v < 0 ? 18 : 8.5) * dt * throttle;
    } else if (throttle < 0) {
      this.v -= (this.v > 0 ? 14 : 5.5) * dt * -throttle;
    }
    // Rodadura y aire.
    this.v -= this.v * 0.32 * dt + Math.sign(this.v) * 0.5 * dt;
    this.v = THREE.MathUtils.clamp(this.v, -6, maxV);

    // Dirección: menos ángulo a mayor velocidad.
    const maxSteer = 0.55 * (1 - Math.min(Math.abs(this.v) / maxV, 1) * 0.6);
    this.steer = THREE.MathUtils.damp(this.steer, steerInput * maxSteer, 8, dt);
    const wheelBase = 2.8;
    this.yaw += (this.v / wheelBase) * Math.tan(this.steer) * dt;

    // Avance.
    const fwd = this.forward;
    const p = this.group.position;
    p.x += fwd.x * this.v * dt;
    p.z += fwd.z * this.v * dt;

    // Colisión contra árboles/rocas/edificios (puntos delantero y trasero).
    let crashed = false;
    for (const probe of [1.9, -1.9]) {
      const px = p.x + fwd.x * probe;
      const pz = p.z + fwd.z * probe;
      for (const c of colliders) {
        if (c === this.collider) continue;
        const dx = px - c.x;
        const dz = pz - c.z;
        const rr = c.r + 0.7;
        if (dx * dx + dz * dz < rr * rr) {
          const d = Math.max(Math.hypot(dx, dz), 0.001);
          const push = rr - d;
          p.x += (dx / d) * push;
          p.z += (dz / d) * push;
          if (Math.abs(this.v) > 2.5) crashed = true;
          this.v *= -0.22;
          break;
        }
      }
    }
    // Límite del mundo.
    const lim = 286;
    p.x = THREE.MathUtils.clamp(p.x, -lim, lim);
    p.z = THREE.MathUtils.clamp(p.z, -lim, lim);

    // Terreno: altura y actitud (pitch/roll) muestreando las 4 ruedas.
    const track = 1.55;
    const right = new THREE.Vector3(fwd.z, 0, -fwd.x);
    const hAt = (ox: number, oz: number): number => field.sampleHeight(p.x + ox, p.z + oz);
    const hf = hAt(fwd.x * 1.4, fwd.z * 1.4);
    const hr = hAt(-fwd.x * 1.4, -fwd.z * 1.4);
    const hl = hAt(-right.x * 0.78, -right.z * 0.78);
    const hrr = hAt(right.x * 0.78, right.z * 0.78);
    const targetY = (hf + hr + hl + hrr) / 4 + 0.12;
    this.y = THREE.MathUtils.damp(this.y, targetY, 10, dt);
    const targetPitch = Math.atan2(hf - hr, 2.8);
    const targetRoll = Math.atan2(hl - hrr, 1.56);
    this.pitch = THREE.MathUtils.damp(this.pitch, targetPitch, 8, dt);
    this.roll = THREE.MathUtils.damp(this.roll, targetRoll, 8, dt);

    p.y = this.y;
    this.group.rotation.set(this.pitch, this.yaw, this.roll, 'YXZ');

    // Ruedas: giro + dirección en las delanteras.
    this.wheelSpin += (this.v / WHEEL_R) * dt;
    for (const w of this.wheels) w.rotation.x = this.wheelSpin;
    for (const s of this.steerPivots) s.rotation.y = this.steer;

    // Collider compartido (el jugador y otros coches chocan contra él).
    this.collider.x = p.x;
    this.collider.z = p.z;

    return crashed;
  }

  /** Coche aparcado: sólo sigue el terreno al inicio. */
  settle(field: Heightfield): void {
    const p = this.group.position;
    this.y = field.sampleHeight(p.x, p.z) + 0.12;
    p.y = this.y;
  }
}

/**
 * Coches conducibles del valle: subir con F, conducir con WASD (W acelera,
 * S frena/reversa, A/D dirección, Espacio freno de mano) y bajar con F.
 * Cámara en el puesto del conductor con volante visible.
 */
export class Vehicles {
  private readonly cars: Car[] = [];
  private drivingCar: Car | null = null;
  private readonly camera: THREE.PerspectiveCamera;
  private readonly controller: FirstPersonController;
  private readonly field: Heightfield;
  private readonly colliders: Collider[];
  private readonly audio: AudioSystem;
  private readonly tmp = new THREE.Vector3();
  private readonly tmpQ = new THREE.Quaternion();
  private readonly tmpE = new THREE.Euler(0, 0, 0, 'YXZ');
  private crashCooldown = 0;

  constructor(
    scene: THREE.Scene,
    field: Heightfield,
    colliders: Collider[],
    controller: FirstPersonController,
    camera: THREE.PerspectiveCamera,
    audio: AudioSystem
  ) {
    this.field = field;
    this.colliders = colliders;
    this.controller = controller;
    this.camera = camera;
    this.audio = audio;

    const bodyMat = new THREE.MeshStandardMaterial({ roughness: 0.45, metalness: 0.35 });
    const glassMat = new THREE.MeshStandardMaterial({
      color: 0x1d2a30,
      roughness: 0.06,
      metalness: 0.75
    });
    const tireMat = new THREE.MeshStandardMaterial({ color: 0x1c1c1c, roughness: 0.95 });
    const trimMat = new THREE.MeshStandardMaterial({ color: 0x2e2b28, roughness: 0.6, metalness: 0.4 });
    const lightMat = new THREE.MeshStandardMaterial({
      color: 0xfff6d8,
      emissive: 0xffedb0,
      emissiveIntensity: 1.6,
      roughness: 0.3
    });
    const tailMat = new THREE.MeshStandardMaterial({
      color: 0x7a1414,
      emissive: 0xd02020,
      emissiveIntensity: 1.2,
      roughness: 0.4
    });

    for (const spec of SPECS) {
      const car = new Car(
        spec,
        field,
        new THREE.MeshStandardMaterial({ color: spec.color, roughness: 0.42, metalness: 0.38 }),
        glassMat,
        tireMat,
        trimMat,
        lightMat,
        tailMat
      );
      void bodyMat;
      car.settle(field);
      scene.add(car.group);
      // Collider vivo: el jugador choca contra el coche aparcarlo.
      colliders.push(car.collider);
      this.cars.push(car);
    }
  }

  get isDriving(): boolean {
    return this.drivingCar !== null;
  }

  get speedKmh(): number {
    return this.drivingCar ? Math.abs(this.drivingCar.v) * 3.6 : 0;
  }

  /** ¿Condujo ya? (misión). */
  hasDriven = false;

  /** Coche más cercano al jugador dentro de r (para el prompt F). */
  nearest(p: THREE.Vector3, r = 3.4): Car | null {
    let best: Car | null = null;
    let bestD = r;
    for (const c of this.cars) {
      const d = c.distanceTo(p);
      if (d < bestD) {
        bestD = d;
        best = c;
      }
    }
    return best;
  }

  /** Subir o bajar del coche (tecla F). */
  toggleEnter(): boolean {
    if (this.drivingCar) {
      const car = this.drivingCar;
      car.exitWorld(this.tmp);
      this.controller.position.set(
        this.tmp.x,
        this.field.sampleHeight(this.tmp.x, this.tmp.z) + EYE,
        this.tmp.z
      );
      this.controller.zeroVelocity();
      this.drivingCar = null;
      this.audio.setEngine(false, 0);
      this.controller.enabled = true;
      this.controller.update(0); // resincroniza la cámara con el jugador
      return false;
    }

    const car = this.nearest(this.controller.position);
    if (!car) return false;
    this.drivingCar = car;
    this.controller.enabled = false;
    // Mirar hacia delante del coche al subirse.
    this.controller.alignYawTo(car.forward);
    this.audio.setEngine(true, 0);
    return true;
  }

  update(dt: number, keys: Set<string>): void {
    this.crashCooldown = Math.max(0, this.crashCooldown - dt);

    if (!this.drivingCar) return;
    const car = this.drivingCar;

    const throttle =
      keys.has('KeyW') || keys.has('ArrowUp')
        ? 1
        : keys.has('KeyS') || keys.has('ArrowDown')
          ? -1
          : 0;
    const steerInput =
      keys.has('KeyA') || keys.has('ArrowLeft')
        ? 1
        : keys.has('KeyD') || keys.has('ArrowRight')
          ? -1
          : 0;

    const crashed = car.drive(
      dt,
      throttle,
      steerInput,
      keys.has('Space'),
      this.field,
      this.colliders
    );
    if (crashed && this.crashCooldown <= 0) {
      this.crashCooldown = 0.5;
      this.audio.playEvent('chop');
    }
    if (Math.abs(car.v) > 2) this.hasDriven = true;

    // Motor: tono ligado a la velocidad.
    this.audio.setEngine(true, Math.min(Math.abs(car.v) / car.spec.maxSpeed, 1));

    // Cámara en el asiento, con mirada libre relativa al coche.
    car.seatWorld(this.tmp);
    this.camera.position.copy(this.tmp);
    const relYaw = this.controller.wrapAngle(this.controller.yaw - car.group.rotation.y);
    this.tmpE.set(this.controller.pitch, relYaw, 0);
    this.tmpQ.setFromEuler(this.tmpE);
    this.camera.quaternion.copy(car.group.quaternion).multiply(this.tmpQ);
    const targetFov = 70 + THREE.MathUtils.clamp(Math.abs(car.v) - 8, 0, 8) * 0.6;
    if (Math.abs(targetFov - this.camera.fov) > 0.05) {
      this.camera.fov = THREE.MathUtils.damp(this.camera.fov, targetFov, 4, dt);
      this.camera.updateProjectionMatrix();
    }
  }
}
