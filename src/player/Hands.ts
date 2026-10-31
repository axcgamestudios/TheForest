import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js';

/** Curvatura por articulación de un dedo (0 = recto, 1 = cerrado). */
interface FingerCurl {
  a: number;
  b: number;
  c: number;
}

interface HandRig {
  root: THREE.Group;
  palm: THREE.Group;
  fingers: { base: THREE.Group; mid: THREE.Group; tip: THREE.Group }[];
  thumb: { base: THREE.Group; mid: THREE.Group };
}

/** Estado que las manos necesitan para animarse. */
export interface HandsState {
  /** Fase del head-bob del controlador (rad). */
  bobPhase: number;
  /** Intensidad del head-bob 0..~2. */
  bobIntensity: number;
  /** ¿Está corriendo? */
  sprinting: boolean;
  /** ¿Está en el suelo? */
  grounded: boolean;
  /** Momento de la última recogida con E (s), para el gesto de alcanzar. */
  lastPickup: number;
}

const skinTexture = (() => {
  let tex: THREE.CanvasTexture | null = null;
  return (): THREE.CanvasTexture => {
    if (tex) return tex;
    const c = document.createElement('canvas');
    c.width = c.height = 128;
    const ctx = c.getContext('2d')!;
    ctx.fillStyle = '#d9a184';
    ctx.fillRect(0, 0, 128, 128);
    // Poros y moteado sutil de la piel.
    for (let i = 0; i < 2600; i++) {
      const v = Math.random();
      ctx.fillStyle = `rgba(${v > 0.5 ? 150 : 225},${v > 0.5 ? 88 : 160},${v > 0.5 ? 66 : 135},0.05)`;
      ctx.fillRect(Math.random() * 128, Math.random() * 128, 1.5, 1.5);
    }
    // Vetas tenues.
    ctx.strokeStyle = 'rgba(178,110,86,0.10)';
    for (let i = 0; i < 22; i++) {
      ctx.beginPath();
      const y = Math.random() * 128;
      ctx.moveTo(0, y);
      ctx.bezierCurveTo(40, y + 8, 90, y - 10, 128, y + 4);
      ctx.stroke();
    }
    tex = new THREE.CanvasTexture(c);
    tex.colorSpace = THREE.SRGBColorSpace;
    return tex;
  };
})();

/**
 * Manos en primera persona, moldeadas por código (palma redondeada, dedos
 * con 3 falanges y pulgar oponible) y animadas de forma procedural:
 * balanceo al caminar/correr, respiración, golpe de hacha y gesto de
 * alcanzar objetos. La mano derecha empuña el hacha.
 */
export class Hands {
  readonly group = new THREE.Group();
  private readonly right: HandRig;
  private readonly left: HandRig;
  private readonly axe: THREE.Group;

  /** Estado del golpe de hacha: 0..1 (null = quieto). */
  private swingT = -1;
  private swingHitAt = 0.3;
  /** Callback disparado en el instante de impacto del golpe. */
  onSwingHit: (() => void) | null = null;
  onSwingStart: (() => void) | null = null;

  private time = 0;

  constructor(camera: THREE.PerspectiveCamera) {
    const skin = new THREE.MeshStandardMaterial({
      map: skinTexture(),
      color: 0xffffff,
      roughness: 0.62,
      metalness: 0
    });
    const sleeve = new THREE.MeshStandardMaterial({
      color: 0x3d4a33,
      roughness: 0.9,
      metalness: 0
    });

    this.right = this.buildHand(skin, sleeve, false);
    this.left = this.buildHand(skin, sleeve, true);

    // Reposo: derecha algo adelantada empuñando el hacha.
    this.right.root.position.set(0.24, -0.26, -0.46);
    this.right.root.rotation.set(-0.55, -0.32, 0.18);
    this.left.root.position.set(-0.26, -0.3, -0.42);
    this.left.root.rotation.set(-0.5, 0.35, -0.22);

    this.axe = this.buildAxe();
    // El hacha se acopla a la palma derecha apuntando hacia adelante-abajo.
    this.axe.position.set(0, 0.015, 0.02);
    this.axe.rotation.set(Math.PI / 2 + 0.25, 0, 0);
    this.right.palm.add(this.axe);

    this.group.add(this.right.root, this.left.root);
    this.group.traverse((o) => {
      o.frustumCulled = false;
      if (o instanceof THREE.Mesh) {
        o.castShadow = false;
        o.receiveShadow = false;
      }
    });
    this.group.visible = false;
    camera.add(this.group);
  }

  setVisible(v: boolean): void {
    this.group.visible = v;
  }

  get isSwinging(): boolean {
    return this.swingT >= 0;
  }

  /** Lanza un golpe de hacha; el callback onSwingHit se dispara al impactar. */
  swing(): void {
    if (this.swingT >= 0) return;
    this.swingT = 0;
    this.onSwingStart?.();
  }

  update(dt: number, s: HandsState): void {
    this.time += dt;
    const amp = Math.min(s.bobIntensity, 2.1);
    const a2 = amp * amp;

    // --- Respiración / sway en reposo ---
    const idleX = Math.sin(this.time * 1.35) * 0.006 * (1 - Math.min(amp, 1));
    const idleY = Math.cos(this.time * 1.1) * 0.005 * (1 - Math.min(amp, 1));

    // --- Balanceo al caminar: cada mano alterna con la pierna contraria ---
    const walkR = Math.sin(s.bobPhase) * 0.055 * a2;
    const walkL = -Math.sin(s.bobPhase) * 0.05 * a2;
    const liftR = Math.abs(Math.cos(s.bobPhase)) * 0.03 * a2;
    const liftL = Math.abs(Math.cos(s.bobPhase + Math.PI)) * 0.028 * a2;
    const sprintMul = s.sprinting ? 1.5 : 1;

    // Poses base.
    this.applyPose(
      this.right,
      { a: 0.78, b: 0.85, c: 0.8 }, // empuñando el hacha
      0.45,
      0.5
    );
    this.applyPose(this.left, { a: 0.22, b: 0.3, c: 0.26 }, 0.25, 0.35);

    this.right.root.position.set(
      0.24 + walkR * sprintMul * 0.6 + idleX,
      -0.26 + liftR * sprintMul + idleY,
      -0.46 + Math.max(walkR, 0) * 0.16 * sprintMul
    );
    this.left.root.position.set(
      -0.26 + walkL * sprintMul * 0.6 - idleX,
      -0.3 + liftL * sprintMul - idleY,
      -0.42 + Math.max(walkL, 0) * 0.16 * sprintMul
    );
    this.right.root.rotation.set(-0.55, -0.32, 0.18 + walkR * 0.35 * sprintMul);
    this.left.root.rotation.set(-0.5, 0.35, -0.22 + walkL * 0.35 * sprintMul);

    // --- Gesto de alcanzar (recoger con E): ambos brazos se extienden ---
    const sincePick = this.time - s.lastPickup;
    if (sincePick >= 0 && sincePick < 0.5) {
      const k = Math.sin((sincePick / 0.5) * Math.PI);
      this.left.root.position.z -= k * 0.16;
      this.left.root.position.y += k * 0.07;
      this.left.root.rotation.x += k * 0.5;
      this.right.root.position.z -= k * 0.08;
    }

    // --- Golpe de hacha (sólo el brazo derecho) ---
    if (this.swingT >= 0) {
      const prev = this.swingT;
      this.swingT += dt / 0.62;
      const t = Math.min(this.swingT, 1);
      // Fases: armado (0-0.42), golpe (0.42-0.62), recuperación (0.62-1).
      let wind: number;
      if (t < 0.42) wind = t / 0.42;
      else if (t < 0.62) wind = 1 - (t - 0.42) / 0.2;
      else wind = -((t - 0.62) / 0.38) * 0.6;
      const raise = t < 0.42 ? wind : Math.max(0, 1 - (t - 0.42) / 0.3);
      const ease = wind * wind * (3 - 2 * wind);

      this.right.root.position.y += ease * 0.22;
      this.right.root.position.z += ease * 0.1;
      this.right.root.rotation.x -= raise * 0.95;
      this.right.root.rotation.z -= ease * 0.5;
      // La mano izquierda acompaña al hacha con el doble grip en el armado.
      if (t < 0.5) {
        this.left.root.position.x += ease * 0.06;
        this.left.root.position.y += ease * 0.1;
      }

      // Impacto.
      if (prev < this.swingHitAt && this.swingT >= this.swingHitAt) {
        this.onSwingHit?.();
      }
      if (this.swingT >= 1) this.swingT = -1;
    }
  }

  /** Aplica la curvatura de dedos y la rotación de la muñeca. */
  private applyPose(hand: HandRig, curl: FingerCurl, thumb: number, spread: number): void {
    for (let i = 0; i < hand.fingers.length; i++) {
      const f = hand.fingers[i];
      const k = 1 - i * 0.06;
      f.base.rotation.x = curl.a * 1.15 * k;
      f.mid.rotation.x = curl.b * 1.25 * k;
      f.tip.rotation.x = curl.c * 1.1 * k;
      f.base.rotation.y = (i - 1.5) * spread * 0.16;
    }
    hand.thumb.base.rotation.z = -0.9 - thumb * 0.35;
    hand.thumb.mid.rotation.z = -0.5 - thumb * 0.6;
  }

  /**
   * Construye una mano: palma redondeada + 4 dedos de 3 falanges + pulgar
   * de 2, todos con pivotes en las articulaciones (para animar curl).
   */
  private buildHand(skin: THREE.Material, sleeve: THREE.Material, mirror: boolean): HandRig {
    const root = new THREE.Group();
    const palm = new THREE.Group();
    root.add(palm);

    // Palma: caja redondeada ligeramente más estrecha hacia la muñeca.
    const palmMesh = new THREE.Mesh(new RoundedBoxGeometry(0.088, 0.105, 0.052, 3, 0.016), skin);
    palm.add(palmMesh);

    // Nudillos (volumen sutil en el borde superior).
    const knuckles = new THREE.Mesh(new RoundedBoxGeometry(0.09, 0.03, 0.05, 2, 0.012), skin);
    knuckles.position.set(0, 0.052, 0);
    palm.add(knuckles);

    // Pulgar (a un lado, apuntando hacia la palma).
    const thumbBase = new THREE.Group();
    thumbBase.position.set(mirror ? 0.048 : -0.048, 0.012, 0.012);
    palm.add(thumbBase);
    const thumbSeg1 = new THREE.Mesh(new RoundedBoxGeometry(0.05, 0.024, 0.026, 2, 0.01), skin);
    thumbSeg1.position.x = mirror ? 0.026 : -0.026;
    thumbBase.add(thumbSeg1);
    const thumbMid = new THREE.Group();
    thumbMid.position.x = mirror ? 0.05 : -0.05;
    thumbBase.add(thumbMid);
    const thumbSeg2 = new THREE.Mesh(new RoundedBoxGeometry(0.042, 0.022, 0.024, 2, 0.009), skin);
    thumbSeg2.position.x = mirror ? 0.021 : -0.021;
    thumbMid.add(thumbSeg2);

    // Cuatro dedos: base (metacarpo) -> media -> punta.
    const fingers: HandRig['fingers'] = [];
    const lens = [0.052, 0.06, 0.056, 0.046];
    for (let i = 0; i < 4; i++) {
      const x = (i - 1.5) * 0.0215;
      const base = new THREE.Group();
      base.position.set(x, 0.068, 0);
      palm.add(base);

      const seg1 = new THREE.Mesh(
        new RoundedBoxGeometry(0.019, lens[i], 0.021, 2, 0.008),
        skin
      );
      seg1.position.y = lens[i] / 2;
      base.add(seg1);

      const mid = new THREE.Group();
      mid.position.y = lens[i];
      base.add(mid);
      const l2 = lens[i] * 0.62;
      const seg2 = new THREE.Mesh(new RoundedBoxGeometry(0.017, l2, 0.019, 2, 0.007), skin);
      seg2.position.y = l2 / 2;
      mid.add(seg2);

      const tip = new THREE.Group();
      tip.position.y = l2;
      mid.add(tip);
      const l3 = lens[i] * 0.5;
      const seg3 = new THREE.Mesh(new RoundedBoxGeometry(0.015, l3, 0.017, 2, 0.006), skin);
      seg3.position.y = l3 / 2;
      tip.add(seg3);

      fingers.push({ base, mid, tip });
    }

    // Manga de la chaqueta en la muñeca.
    const cuff = new THREE.Mesh(new THREE.CylinderGeometry(0.052, 0.06, 0.075, 10), sleeve);
    cuff.position.y = -0.05;
    palm.add(cuff);

    if (mirror) palm.rotation.y = Math.PI;

    return { root, palm, fingers, thumb: { base: thumbBase, mid: thumbMid } };
  }

  /** Hacha: mango de madera + cabeza de acero con filo. */
  private buildAxe(): THREE.Group {
    const g = new THREE.Group();
    const wood = new THREE.MeshStandardMaterial({ color: 0x8a6a44, roughness: 0.8 });
    const steel = new THREE.MeshStandardMaterial({
      color: 0xb9c1c6,
      roughness: 0.32,
      metalness: 0.85
    });

    const handle = new THREE.Mesh(new THREE.CylinderGeometry(0.014, 0.018, 0.52, 8), wood);
    handle.position.y = 0.26;
    g.add(handle);

    const head = new THREE.Group();
    head.position.y = 0.5;
    // Cabeza: bloque + filo biselado.
    const block = new THREE.Mesh(new RoundedBoxGeometry(0.05, 0.075, 0.11, 2, 0.01), steel);
    head.add(block);
    const blade = new THREE.Mesh(new THREE.BoxGeometry(0.014, 0.075, 0.115), steel);
    blade.position.z = -0.088;
    // Bisel del filo: escala en Z decreciente simulada con un segundo bloque.
    const edge = new THREE.Mesh(new THREE.BoxGeometry(0.006, 0.082, 0.05), steel);
    edge.position.z = -0.145;
    head.add(blade, edge);
    g.add(head);
    return g;
  }
}
