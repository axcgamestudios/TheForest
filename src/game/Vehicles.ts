import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js';
import { Heightfield } from '../world/heightfield';
import { Collider } from '../world/Trees';
import { FirstPersonController } from '../player/FirstPersonController';
import { AudioSystem } from '../audio/AudioSystem';
import { carPaintTexture, carPaintRough, tireTreadTexture } from '../core/textures';

type CarType = 'pickup' | 'suv' | 'compact';

interface CarSpec {
  type: CarType;
  color: number;
  x: number;
  z: number;
  rotY: number;
  maxSpeed: number;
}

/**
 * Coches del pueblo, aparcados sobre carriles abiertos del valle para que
 * se puedan conducir sin chocar contra las casas al primer metro.
 */
const SPECS: CarSpec[] = [
  { type: 'pickup', color: 0xa63a2e, x: 54, z: 128, rotY: 0, maxSpeed: 16 },
  { type: 'suv', color: 0x3a5f8f, x: 62, z: 116, rotY: Math.PI / 2, maxSpeed: 14 },
  { type: 'compact', color: 0x6b7a45, x: 58, z: 142, rotY: 0, maxSpeed: 18 }
];

const WHEEL_R = 0.35;
const EYE = 1.68;

/** Materiales funcionales del coche (luces) que varían de día/noche. */
interface CarLights {
  head: THREE.MeshStandardMaterial;
  tail: THREE.MeshStandardMaterial;
  reverse: THREE.MeshStandardMaterial;
}

class Car {
  readonly group = new THREE.Group();
  readonly collider: Collider;
  readonly spec: CarSpec;
  readonly lights: CarLights;
  private readonly wheels: THREE.Mesh[] = [];
  private readonly steerPivots: THREE.Object3D[] = [];
  private readonly steerWheel: THREE.Object3D;
  private readonly seatLocal = new THREE.Vector3(-0.42, 1.06, 0.34);

  /** Estado dinámico. */
  v = 0;
  private steer = 0;
  private yaw: number;
  private pitch = 0;
  private roll = 0;
  private bodyBob = 0;
  private y = 0;
  private wheelSpin = 0;
  /** ¿Frenando ahora mismo? (para las luces de freno). */
  braking = false;

  constructor(
    spec: CarSpec,
    field: Heightfield,
    trimMat: THREE.MeshStandardMaterial,
    glassMat: THREE.MeshStandardMaterial,
    tireMat: THREE.MeshStandardMaterial,
    lightMat: THREE.MeshStandardMaterial,
    tailMat: THREE.MeshStandardMaterial,
    interiorMat: THREE.MeshStandardMaterial,
    reverseMat: THREE.MeshStandardMaterial,
    plateMat: THREE.MeshStandardMaterial
  ) {
    this.spec = spec;
    this.yaw = spec.rotY;
    this.y = field.sampleHeight(spec.x, spec.z) + 0.1;
    this.collider = { x: spec.x, z: spec.z, r: 1.3 };
    this.lights = {
      head: lightMat,
      tail: tailMat,
      reverse: reverseMat
    };
    this.steerWheel = this.build(
      trimMat,
      glassMat,
      tireMat,
      lightMat,
      tailMat,
      interiorMat,
      reverseMat,
      plateMat
    );
    this.group.position.set(spec.x, this.y, spec.z);
    this.group.rotation.y = this.yaw;
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
    return target.set(-1.7, 0, 0.25).applyMatrix4(this.group.matrixWorld);
  }

  /** Luz de noche de las luces de posición/emisivas. */
  setNight(n: number, driving: boolean): void {
    this.lights.head.emissiveIntensity = driving ? 0.35 + 3.4 * n : 0.2 * n;
    this.lights.tail.emissiveIntensity =
      0.22 * n + (driving ? (this.braking ? 2.6 : 0.7 * n) : 0);
    this.lights.reverse.emissiveIntensity = driving && this.v < -0.3 ? 1.8 : 0.05;
  }

  /**
   * Un paso de física de conducción estilo arcade:
   * - Colisiones que ATASCAN pero no atrapan: se sale del obstáculo y se
   *   anula la velocidad hacia él (sin rebote en bucle).
   * - Dirección asistida a baja velocidad para poder maniobrar.
   * Devuelve true si hubo choque fuerte (para el sonido).
   */
  drive(
    dt: number,
    throttle: number,
    steerInput: number,
    handbrake: boolean,
    field: Heightfield,
    colliders: Collider[]
  ): boolean {
    const maxV = this.spec.maxSpeed;
    this.braking = handbrake;

    // Aceleración / freno / reversa.
    if (handbrake) {
      this.v -= Math.sign(this.v) * Math.min(Math.abs(this.v), 20 * dt);
    } else if (throttle > 0) {
      this.v += (this.v < 0 ? 19 : 8.5) * dt * throttle;
    } else if (throttle < 0) {
      this.v -= (this.v > 0 ? 15 : 5.5) * dt * -throttle;
    }
    // Rodadura y aire.
    this.v -= this.v * 0.32 * dt + Math.sign(this.v) * 0.5 * dt;
    this.v = THREE.MathUtils.clamp(this.v, -6.5, maxV);

    // Dirección: el ángulo se cierra con la velocidad; a baja velocidad se
    // añade asistencia para girar incluso casi parado.
    const maxSteer = 0.55 * (1 - Math.min(Math.abs(this.v) / maxV, 1) * 0.55);
    this.steer = THREE.MathUtils.damp(this.steer, steerInput * maxSteer, 8, dt);
    const wheelBase = 2.8;
    let yawRate = (this.v / wheelBase) * Math.tan(this.steer);
    // Asistencia de maniobra por debajo de ~4 m/s (y deriva con el freno de mano).
    const lowSpeed = Math.max(0, 1 - Math.abs(this.v) / 4);
    yawRate +=
      this.steer * 1.5 * lowSpeed * Math.sign(this.v || 1) * (handbrake ? 1.5 : 1);
    this.yaw += yawRate * dt;

    // Avance.
    const fwd = this.forward;
    const p = this.group.position;
    p.x += fwd.x * this.v * dt;
    p.z += fwd.z * this.v * dt;

    // ---- Colisión contra árboles/rocas/edificios ----
    // Sonda en la dirección del movimiento (y una corta detrás para no
    // clavarse al quedar atrapado entre dos cosas).
    const dirSign = this.v >= 0 ? 1 : -1;
    let crashed = false;
    for (const probe of [dirSign * 1.95, dirSign * 1.15, -dirSign * 1.15]) {
      const px = p.x + fwd.x * probe;
      const pz = p.z + fwd.z * probe;
      for (const c of colliders) {
        if (c === this.collider) continue;
        const rr = c.r + 0.62;
        const dx = px - c.x;
        const dz = pz - c.z;
        const d2 = dx * dx + dz * dz;
        if (d2 < rr * rr) {
          const d = Math.max(Math.hypot(dx, dz), 0.001);
          // Empuja FUERA del obstáculo con un pequeño margen.
          const push = (rr - d) + 0.04;
          p.x += (dx / d) * push;
          p.z += (dz / d) * push;
          if (Math.abs(this.v) > 4.5) {
            crashed = true;
            // Choque fuerte: pequeño rebote para que se note.
            this.v = -this.v * 0.14;
          } else {
            // Rozón: se frena, sin rebote (evita quedar atrapado rebotando).
            this.v *= 0.22;
          }
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

    // Cabeceo/domingo de la carrocería con la aceleración.
    this.bodyBob = THREE.MathUtils.damp(this.bodyBob, THREE.MathUtils.clamp(-this.v * 0.006, -0.05, 0.035), 6, dt);

    p.y = this.y;
    this.group.rotation.set(this.pitch + this.bodyBob, this.yaw, this.roll, 'YXZ');

    // Ruedas: giro + dirección en las delanteras.
    this.wheelSpin += (this.v / WHEEL_R) * dt;
    for (const w of this.wheels) w.rotation.x = this.wheelSpin;
    for (const s of this.steerPivots) s.rotation.y = this.steer;
    // El volante del interior gira con la dirección.
    this.steerWheel.rotation.z = -this.steer * 2.6;

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

  /**
   * Carrocería completa: cuerpo redondeado, cabina con parabrisas
   * inclinado, pasos de rueda, parrilla, retrovisores, matrícula, escape,
   * faros/luces y habitáculo con volante que gira.
   */
  private build(
    trimMat: THREE.MeshStandardMaterial,
    glassMat: THREE.MeshStandardMaterial,
    tireMat: THREE.MeshStandardMaterial,
    lightMat: THREE.MeshStandardMaterial,
    tailMat: THREE.MeshStandardMaterial,
    interiorMat: THREE.MeshStandardMaterial,
    reverseMat: THREE.MeshStandardMaterial,
    plateMat: THREE.MeshStandardMaterial
  ): THREE.Object3D {
    const t = this.spec.type;
    const L = t === 'pickup' ? 4.9 : t === 'suv' ? 4.5 : 3.8; // largo
    const W = t === 'compact' ? 1.76 : 1.92; // ancho
    const bodyH = t === 'suv' ? 0.88 : 0.7; // alto del cuerpo
    const clearance = 0.44;
    const wheelBase = L * 0.6;
    const track = W * 0.86;

    // Pintura con veta metálica y motas (color por coche).
    const paint = new THREE.MeshStandardMaterial({
      map: carPaintTexture(this.spec.color),
      roughnessMap: carPaintRough(),
      roughness: 0.38,
      metalness: 0.55,
      envMapIntensity: 0.9
    });
    const darkPaint = new THREE.MeshStandardMaterial({
      map: carPaintTexture(
        new THREE.Color(this.spec.color).multiplyScalar(0.55).getHex()
      ),
      roughness: 0.6,
      metalness: 0.3
    });

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
    const rbox = (
      w: number,
      h: number,
      d: number,
      x: number,
      y: number,
      z: number,
      r: number,
      mat: THREE.Material
    ): THREE.Mesh => {
      const m = new THREE.Mesh(new RoundedBoxGeometry(w, h, d, 2, r), mat);
      m.position.set(x, y, z);
      return m;
    };

    const floorY = clearance + bodyH / 2;

    // ---- Carrocería inferior (redondeada) ----
    add(rbox(W, bodyH, L, 0, floorY, 0, 0.07, paint));

    // Falda inferior más oscura (bajos).
    add(rbox(W * 0.98, 0.2, L * 0.96, 0, clearance + 0.08, 0, 0.05, darkPaint));

    // ---- Capó y maletero ----
    const hoodLen = t === 'compact' ? 0.72 : 0.98;
    const hood = rbox(W * 0.94, 0.18, hoodLen, 0, clearance + bodyH + 0.07, L / 2 - hoodLen / 2 - 0.05, 0.05, paint);
    hood.rotation.x = -0.055;
    add(hood);
    add(rbox(W * 0.94, 0.16, 0.5, 0, clearance + bodyH + 0.055, -L / 2 + 0.3, 0.05, paint));

    // ---- Cabina ----
    const cabinH = t === 'suv' ? 0.8 : t === 'pickup' ? 0.66 : 0.62;
    const cabinZ = t === 'pickup' ? 0.4 : t === 'suv' ? -0.18 : -0.08;
    const cabinL = t === 'pickup' ? 1.55 : L * 0.5;
    const cabinW = W * 0.9;
    const cabY = clearance + bodyH + cabinH / 2 + 0.06;

    if (t === 'pickup') {
      // Cabina delantera + caja de carga con raíles.
      add(rbox(cabinW, cabinH, cabinL, 0, cabY, cabinZ, 0.09, paint));
      const bedY = clearance + bodyH + 0.22;
      add(rbox(W * 0.96, 0.5, L - cabinL - hoodLen - 0.4, 0, bedY, -L / 2 + (L - cabinL) / 2 - 0.05, 0.05, paint));
      // Raíles de la caja + portón trasero.
      for (const s of [-1, 1]) {
        add(box(0.09, 0.1, L - cabinL - hoodLen - 0.5, s * (W / 2 - 0.1), bedY + 0.3, -L / 2 + (L - cabinL) / 2 - 0.05, trimMat));
      }
      add(rbox(W * 0.9, 0.46, 0.08, 0, bedY + 0.02, -L / 2 + 0.07, 0.03, paint));
      add(box(W * 0.86, 0.04, 1.5, 0, clearance + 0.5, -L / 2 + 0.9, interiorMat), false);
    } else {
      // SUV / compacto: cabina continua con techo.
      add(rbox(cabinW, cabinH, cabinL, 0, cabY, cabinZ, 0.11, paint));
      add(rbox(cabinW * 0.94, 0.08, cabinL * 0.92, 0, cabY + cabinH / 2 + 0.02, cabinZ, 0.03, paint));
      // Portón trasero inclinado (compacto tipo hatchback).
      if (t === 'compact') {
        const hatch = rbox(cabinW * 0.9, cabinH * 0.95, 0.1, 0, cabY - 0.02, cabinZ - cabinL / 2 - 0.18, 0.03, paint);
        hatch.rotation.x = 0.28;
        add(hatch);
      }
      // Barras de techo del SUV.
      if (t === 'suv') {
        for (const s of [-1, 1]) {
          add(box(0.07, 0.06, cabinL * 0.7, s * cabinW * 0.32, cabY + cabinH / 2 + 0.08, cabinZ, trimMat), false);
        }
        add(box(cabinW * 0.7, 0.05, 0.07, 0, cabY + cabinH / 2 + 0.09, cabinZ + cabinL * 0.33, trimMat), false);
        add(box(cabinW * 0.7, 0.05, 0.07, 0, cabY + cabinH / 2 + 0.09, cabinZ - cabinL * 0.33, trimMat), false);
      }
    }

    // ---- Cristales ----
    // Parabrisas inclinado.
    const wsH = cabinH * 0.72;
    const wsZ = cabinZ + cabinL / 2 - 0.06;
    const wsY = cabY - cabinH * 0.04 + wsH / 2;
    const windshield = rbox(cabinW * 0.86, wsH, 0.05, 0, wsY, wsZ, 0.02, glassMat);
    windshield.rotation.x = -0.42;
    add(windshield, false);
    // Laterales (delante y detrás, con pilar B).
    for (const s of [-1, 1]) {
      const sideF = rbox(0.04, cabinH * 0.6, cabinL * 0.4, s * (cabinW / 2 + 0.005), cabY - cabinH * 0.05, cabinZ + cabinL * 0.14, 0.02, glassMat);
      add(sideF, false);
      const sideR = rbox(0.04, cabinH * 0.55, cabinL * 0.3, s * (cabinW / 2 + 0.005), cabY - cabinH * 0.07, cabinZ - cabinL * 0.22, 0.02, glassMat);
      add(sideR, false);
      // Luneta trasera.
    }
    const rearY = cabY - cabinH * 0.06;
    const rearGlass = rbox(cabinW * 0.8, cabinH * 0.58, 0.04, 0, rearY, cabinZ - cabinL / 2 + 0.03, 0.02, glassMat);
    rearGlass.rotation.x = t === 'compact' ? 0.3 : 0.18;
    add(rearGlass, false);

    // Líneas de puertas (surcos oscuros en el lateral).
    for (const s of [-1, 1]) {
      for (const dz of [cabinZ + cabinL * 0.04, cabinZ - cabinL * 0.34]) {
        add(box(0.015, cabinH * 0.82, 0.03, s * (W / 2 + 0.003), cabY - cabinH * 0.06, dz, darkPaint), false);
      }
    }

    // ---- Frontal: parrilla, parachoques, faros, matrícula ----
    const bumperF = rbox(W * 0.99, 0.24, 0.2, 0, clearance + 0.2, L / 2 + 0.06, 0.05, trimMat);
    add(bumperF);
    const grille = rbox(W * 0.6, 0.2, 0.06, 0, clearance + bodyH - 0.06, L / 2 + 0.015, 0.02, darkPaint);
    add(grille);
    for (let i = 0; i < 3; i++) {
      add(box(W * 0.54, 0.025, 0.075, 0, clearance + bodyH - 0.13 + i * 0.065, L / 2 + 0.02, trimMat), false);
    }
    for (const s of [-1, 1]) {
      // Carcasa del faro + lente emisiva.
      const housing = rbox(0.34, 0.16, 0.1, s * (W / 2 - 0.3), clearance + bodyH - 0.02, L / 2 - 0.02, 0.02, darkPaint);
      add(housing, false);
      const lens = rbox(0.28, 0.12, 0.06, s * (W / 2 - 0.3), clearance + bodyH - 0.02, L / 2 + 0.035, 0.02, lightMat);
      add(lens, false);
    }
    add(box(0.44, 0.13, 0.03, 0, clearance + 0.24, L / 2 + 0.17, plateMat), false);

    // ---- Trasera: parachoques, pilotos, matrícula, escape ----
    const bumperR = rbox(W * 0.99, 0.22, 0.18, 0, clearance + 0.18, -L / 2 - 0.06, 0.05, trimMat);
    add(bumperR);
    for (const s of [-1, 1]) {
      const lamp = rbox(0.3, 0.14, 0.06, s * (W / 2 - 0.28), clearance + bodyH - 0.04, -L / 2 - 0.035, 0.02, tailMat);
      add(lamp, false);
      // Luz de marcha atrás (blanca, junto al piloto).
      const rev = rbox(0.1, 0.08, 0.05, s * (W / 2 - 0.44), clearance + bodyH - 0.05, -L / 2 - 0.035, 0.015, reverseMat);
      add(rev, false);
    }
    add(box(0.4, 0.12, 0.03, 0, clearance + 0.22, -L / 2 - 0.16, plateMat), false);
    const exhaust = new THREE.Mesh(new THREE.CylinderGeometry(0.045, 0.05, 0.18, 10), trimMat);
    exhaust.rotation.x = Math.PI / 2;
    exhaust.position.set(W / 2 - 0.32, clearance + 0.06, -L / 2 - 0.1);
    add(exhaust, false);

    // ---- Retrovisores ----
    for (const s of [-1, 1]) {
      const arm = box(0.14, 0.03, 0.03, s * (W / 2 + 0.06), cabY + cabinH * 0.18, cabinZ + cabinL / 2 - 0.12, darkPaint);
      add(arm, false);
      const mir = box(0.03, 0.1, 0.16, s * (W / 2 + 0.13), cabY + cabinH * 0.2, cabinZ + cabinL / 2 - 0.12, darkPaint);
      add(mir, false);
    }

    // ---- Habitáculo ----
    // Tablero.
    add(rbox(W * 0.84, 0.22, 0.42, 0, cabY - cabinH * 0.36, cabinZ + cabinL / 2 - 0.32, 0.05, interiorMat), false);
    // Volante (gira con la dirección).
    const wheelParent = new THREE.Object3D();
    wheelParent.position.set(-0.42, cabY - cabinH * 0.2, cabinZ + cabinL / 2 - 0.52);
    wheelParent.rotation.x = -0.42;
    const rim = new THREE.Mesh(new THREE.TorusGeometry(0.165, 0.021, 8, 22), interiorMat);
    wheelParent.add(rim);
    for (let i = 0; i < 3; i++) {
      const a = (i / 3) * Math.PI * 2;
      const spoke = new THREE.Mesh(new THREE.BoxGeometry(0.028, 0.15, 0.02), interiorMat);
      spoke.position.set(Math.sin(a) * 0.075, -0.055, 0);
      spoke.rotation.z = a;
      wheelParent.add(spoke);
    }
    const hub = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.03, 0.025, 10), trimMat);
    hub.rotation.x = Math.PI / 2;
    wheelParent.add(hub);
    this.group.add(wheelParent);
    // Asientos con reposacabezas.
    for (const s of [-1, 1]) {
      const seat = rbox(0.52, 0.13, 0.5, s * 0.42, cabY - cabinH * 0.62, cabinZ - 0.06, 0.04, interiorMat);
      add(seat, false);
      const back = rbox(0.5, 0.55, 0.13, s * 0.42, cabY - cabinH * 0.28, cabinZ - 0.3, 0.05, interiorMat);
      back.rotation.x = 0.12;
      add(back, false);
      const head = rbox(0.26, 0.16, 0.1, s * 0.42, cabY + cabinH * 0.14, cabinZ - 0.33, 0.04, interiorMat);
      add(head, false);
    }
    // Palanca de cambios + freno de mano.
    add(box(0.04, 0.2, 0.04, -0.05, cabY - cabinH * 0.52, cabinZ - 0.1, trimMat), false);
    add(box(0.05, 0.16, 0.05, -0.62, cabY - cabinH * 0.54, cabinZ - 0.18, trimMat), false);

    // ---- Pasos de rueda (arco sobre cada neumático) ----
    const archGeo = new THREE.TorusGeometry(0.44, 0.075, 8, 14, Math.PI);
    for (const [sx, sz] of [
      [-1, 1],
      [1, 1],
      [-1, -1],
      [1, -1]
    ]) {
      const arch = new THREE.Mesh(archGeo, darkPaint);
      arch.position.set((sx * track) / 2, WHEEL_R + 0.06, (sz * wheelBase) / 2);
      arch.rotation.y = sz > 0 ? 0 : Math.PI;
      add(arch, false);
    }

    // ---- Ruedas: neumático con dibujo + llanta con 5 radios ----
    const wheelGeo = new THREE.CylinderGeometry(WHEEL_R, WHEEL_R, 0.26, 20);
    wheelGeo.rotateZ(Math.PI / 2);
    const treadTex = tireTreadTexture();
    const tireMatTread = new THREE.MeshStandardMaterial({
      map: treadTex,
      roughness: 0.95,
      metalness: 0
    });
    const hubGeo = new THREE.CylinderGeometry(0.16, 0.16, 0.27, 14);
    hubGeo.rotateZ(Math.PI / 2);
    for (const [sx, sz] of [
      [-1, 1],
      [1, 1],
      [-1, -1],
      [1, -1]
    ]) {
      const pivot = new THREE.Object3D();
      pivot.position.set((sx * track) / 2, WHEEL_R, (sz * wheelBase) / 2);
      const wheel = new THREE.Mesh(wheelGeo, tireMatTread);
      const hub = new THREE.Mesh(hubGeo, trimMat);
      wheel.add(hub);
      for (let i = 0; i < 5; i++) {
        const a = (i / 5) * Math.PI * 2;
        const spoke = new THREE.Mesh(new THREE.BoxGeometry(0.3, 0.05, 0.05), trimMat);
        spoke.rotation.x = a;
        spoke.position.set(0.135, 0, 0);
        spoke.translateX(0);
        hub.add(spoke);
      }
      const cap = new THREE.Mesh(new THREE.CylinderGeometry(0.055, 0.055, 0.29, 10), darkPaint);
      cap.rotation.z = Math.PI / 2;
      hub.add(cap);
      pivot.add(wheel);
      this.group.add(pivot);
      this.wheels.push(wheel);
      if (sz > 0) this.steerPivots.push(pivot);
    }

    return wheelParent;
  }
}

/**
 * Coches conducibles del valle: subir con F, conducir con WASD (W acelera,
 * S frena/reversa, A/D dirección, Espacio freno de mano) y bajar con F.
 * Cámara en el puesto del conductor con volante visible que gira. De noche
 * encienden los faros (emisivos + foco real sobre el coche conducido).
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
  /** Foco de faros para el coche conducido de noche. */
  private readonly headlights: THREE.SpotLight;
  private readonly headTarget = new THREE.Object3D();
  private crashCooldown = 0;
  private night = 0;

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

    const glassMat = new THREE.MeshStandardMaterial({
      color: 0x2e444d,
      roughness: 0.06,
      metalness: 0.8
    });
    const trimMat = new THREE.MeshStandardMaterial({ color: 0x322f2c, roughness: 0.55, metalness: 0.45 });
    const lightMat = new THREE.MeshStandardMaterial({
      color: 0xfff6d8,
      emissive: 0xffedb0,
      emissiveIntensity: 0.3,
      roughness: 0.25
    });
    const tailMat = new THREE.MeshStandardMaterial({
      color: 0x7a1414,
      emissive: 0xd02020,
      emissiveIntensity: 0.22,
      roughness: 0.3
    });
    const reverseMat = new THREE.MeshStandardMaterial({
      color: 0xf4f4f0,
      emissive: 0xffffff,
      emissiveIntensity: 0.05,
      roughness: 0.3
    });
    const interiorMat = new THREE.MeshStandardMaterial({ color: 0x4a4238, roughness: 0.9 });
    const plateMat = new THREE.MeshStandardMaterial({ color: 0xd9d4c2, roughness: 0.6 });

    for (const spec of SPECS) {
      const car = new Car(
        spec,
        field,
        trimMat,
        glassMat,
        new THREE.MeshStandardMaterial({ color: 0x1c1c1c, roughness: 0.95 }),
        lightMat,
        tailMat,
        interiorMat,
        reverseMat,
        plateMat
      );
      car.settle(field);
      scene.add(car.group);
      // Collider vivo: el jugador choca contra el coche aparcado.
      colliders.push(car.collider);
      this.cars.push(car);
    }

    // Foco compartido de faros (sólo se enciende al conducir de noche).
    this.headlights = new THREE.SpotLight(0xffeecc, 0, 42, 0.52, 0.45, 1.4);
    this.headlights.visible = false;
    scene.add(this.headlights);
    scene.add(this.headTarget);
    this.headlights.target = this.headTarget;
  }

  get isDriving(): boolean {
    return this.drivingCar !== null;
  }

  get speedKmh(): number {
    return this.drivingCar ? Math.abs(this.drivingCar.v) * 3.6 : 0;
  }

  /** ¿Condujo ya? (misión). */
  hasDriven = false;

  /** Factor de noche 0..1 (lo informa el ciclo día/noche). */
  setNight(n: number): void {
    this.night = n;
    for (const c of this.cars) c.setNight(n, c === this.drivingCar);
  }

  /** Posiciones de los coches para el sistema de guardado. */
  serialize(): { x: number; z: number; rotY: number; v: number }[] {
    return this.cars.map((c) => ({
      x: c.group.position.x,
      z: c.group.position.z,
      rotY: c.group.rotation.y,
      v: c.v
    }));
  }

  /** Restaura posiciones guardadas (fuera de la carretera no pasa nada). */
  apply(list: { x: number; z: number; rotY: number; v: number }[]): void {
    if (!Array.isArray(list)) return;
    this.cars.forEach((c, i) => {
      const d = list[i];
      if (!d) return;
      c.group.position.set(d.x, this.field.sampleHeight(d.x, d.z) + 0.12, d.z);
      c.group.rotation.set(0, d.rotY, 0);
      c.v = 0;
      c.collider.x = d.x;
      c.collider.z = d.z;
    });
  }

  /** Coche más cercano al jugador dentro de r (para el prompt F). */
  nearest(p: THREE.Vector3, r = 3.6): Car | null {
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
      this.headlights.visible = false;
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

    // Faros reales del coche conducido durante la noche.
    const lightsOn = this.night > 0.25;
    this.headlights.visible = lightsOn;
    if (lightsOn) {
      const intensity = 260 * this.night;
      this.headlights.intensity = intensity;
      this.headlights.position.copy(car.group.position);
      const fwd = car.forward;
      this.headlights.position.y += 0.75;
      this.headTarget.position.copy(car.group.position).addScaledVector(fwd, 20);
      this.headTarget.position.y = car.group.position.y + 0.2;
      this.headlights.target.updateMatrixWorld();
    }
  }
}
