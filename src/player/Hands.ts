import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js';
import { skinTexture, skinBumpTexture, axeWoodTexture, leatherTexture, brushedSteelTexture } from '../core/textures';

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

/** Materiales de piel y del hacha (compartidos entre ambas manos). */
function makeSkinMaterial(): THREE.MeshStandardMaterial {
  return new THREE.MeshStandardMaterial({
    map: skinTexture(),
    bumpMap: skinBumpTexture(),
    bumpScale: 0.05,
    roughness: 0.46,
    metalness: 0
  });
}

/**
 * Manos en primera persona, moldeadas por código (palma redondeada, dedos
 * con 3 falanges y pulgar oponible, uñas y nudillos) y animadas de forma
 * procedural: balanceo al caminar/correr, respiración, golpe de hacha
 * diagonal y gesto de alcanzar objetos. La mano derecha empuña el hacha.
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
    const skin = makeSkinMaterial();
    const nailMat = new THREE.MeshStandardMaterial({
      color: 0xd9ae9f,
      roughness: 0.24,
      metalness: 0.05
    });
    // Nudillos: MISMA piel texturizada, sólo un punto más rojiza (sin
    // aspecto de bolitas pálidas).
    const knuckleMat = new THREE.MeshStandardMaterial({
      map: skinTexture(),
      color: 0xc98a70,
      bumpMap: skinBumpTexture(),
      bumpScale: 0.04,
      roughness: 0.5
    });
    const sleeve = new THREE.MeshStandardMaterial({
      color: 0x3d4a33,
      roughness: 0.9,
      metalness: 0
    });

    this.right = this.buildHand(skin, nailMat, knuckleMat, sleeve, false);
    this.left = this.buildHand(skin, nailMat, knuckleMat, sleeve, true);

    // Reposo: manos bajas y relajadas, estilo "listero"; la derecha empuña
    // el hacha en diagonal, con la cabeza arriba a la derecha de la vista.
    this.right.root.position.set(0.27, -0.36, -0.52);
    this.right.root.rotation.set(-0.3, -0.18, 0.1);
    this.left.root.position.set(-0.24, -0.4, -0.46);
    this.left.root.rotation.set(-0.34, 0.22, -0.14);

    this.axe = this.buildAxe();
    // El hacha se acopla a la palma derecha: el mango sale hacia arriba
    // ligeramente adelantado, cabeza arriba, filo mirando al frente.
    this.axe.position.set(0.01, 0.02, 0.02);
    this.axe.rotation.set(0.36, -0.1, -0.18);
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
      { a: 0.8, b: 0.85, c: 0.8 }, // empuñando el hacha
      0.5,
      0.45
    );
    // Mano izquierda relajada: dedos semicerrados hacia dentro (natural,
    // no extendida en abanico).
    this.applyPose(this.left, { a: 0.42, b: 0.52, c: 0.46 }, 0.34, 0.3);

    this.right.root.position.set(
      0.27 + walkR * sprintMul * 0.6 + idleX,
      -0.36 + liftR * sprintMul + idleY,
      -0.52 + Math.max(walkR, 0) * 0.16 * sprintMul
    );
    this.left.root.position.set(
      -0.24 + walkL * sprintMul * 0.6 - idleX,
      -0.4 + liftL * sprintMul - idleY,
      -0.46 + Math.max(walkL, 0) * 0.16 * sprintMul
    );
    this.right.root.rotation.set(-0.3, -0.18, 0.1 + walkR * 0.35 * sprintMul);
    this.left.root.rotation.set(-0.34, 0.22, -0.14 + walkL * 0.35 * sprintMul);

    // --- Gesto de alcanzar (recoger con E): ambos brazos se extienden ---
    const sincePick = this.time - s.lastPickup;
    if (sincePick >= 0 && sincePick < 0.5) {
      const k = Math.sin((sincePick / 0.5) * Math.PI);
      this.left.root.position.z -= k * 0.18;
      this.left.root.position.y += k * 0.08;
      this.left.root.rotation.x += k * 0.5;
      this.right.root.position.z -= k * 0.08;
    }

    // --- Golpe de hacha diagonal (brazo derecho) ---
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

      this.right.root.position.y += ease * 0.26;
      this.right.root.position.x += ease * 0.05;
      this.right.root.position.z += ease * 0.12;
      // El brazo se arma hacia atrás-arriba y cae en diagonal.
      this.right.root.rotation.x -= raise * 0.85;
      this.right.root.rotation.y += raise * 0.16;
      this.right.root.rotation.z += ease * 0.38;
      // La mano izquierda acompaña al hacha con el doble grip en el armado.
      if (t < 0.5) {
        this.left.root.position.x += ease * 0.08;
        this.left.root.position.y += ease * 0.12;
        this.left.root.rotation.z += ease * 0.2;
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
   * Construye una mano: palma redondeada + 4 dedos de 3 falanges con
   * nudillos y uñas + pulgar de 2 falanges + muñequera.
   */
  private buildHand(
    skin: THREE.Material,
    nailMat: THREE.Material,
    knuckleMat: THREE.Material,
    sleeve: THREE.Material,
    mirror: boolean
  ): HandRig {
    const root = new THREE.Group();
    const palm = new THREE.Group();
    root.add(palm);

    // Palma: caja redondeada más estrecha hacia la muñeca.
    const palmMesh = new THREE.Mesh(new RoundedBoxGeometry(0.09, 0.108, 0.054, 3, 0.017), skin);
    palm.add(palmMesh);

    // Nudillos (volumen en el borde superior).
    const knuckles = new THREE.Mesh(new RoundedBoxGeometry(0.092, 0.032, 0.052, 2, 0.013), knuckleMat);
    knuckles.position.set(0, 0.052, 0);
    palm.add(knuckles);

    // Eminencia tenar (base del pulgar, hace de la palma algo "moldeada").
    const thenar = new THREE.Mesh(new THREE.SphereGeometry(0.031, 10, 8), skin);
    thenar.scale.set(1, 1.25, 0.62);
    thenar.position.set(mirror ? 0.04 : -0.04, 0.02, 0.018);
    palm.add(thenar);

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
    // Uña del pulgar.
    const thumbNail = new THREE.Mesh(new RoundedBoxGeometry(0.008, 0.013, 0.008, 1, 0.003), nailMat);
    thumbNail.position.set(mirror ? 0.03 : -0.03, 0.004, -0.013);
    thumbNail.rotation.z = mirror ? 0 : 0;
    thumbNail.rotation.x = Math.PI / 2;
    thumbMid.add(thumbNail);

    // Cuatro dedos: base (metacarpo) -> media -> punta, con nudillos y uñas.
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

      // Nudillos en las dos articulaciones (volumen + tono).
      for (const [pivot, r] of [
        [mid, 0.0115],
        [tip, 0.0095]
      ] as [THREE.Group, number][]) {
        const kn = new THREE.Mesh(new THREE.SphereGeometry(r, 8, 6), knuckleMat);
        kn.scale.set(0.9, 0.55, 0.75);
        kn.position.set(0, -0.001, -0.009);
        pivot.add(kn);
      }

      // Uña en el dorso de la punta.
      const nail = new THREE.Mesh(new RoundedBoxGeometry(0.0115, 0.009, 0.0125, 1, 0.003), nailMat);
      nail.position.set(0, l3 * 0.68, -0.009);
      tip.add(nail);

      fingers.push({ base, mid, tip });
    }

    // Manga de la chaqueta en la muñeca (dobladillo con borde).
    const cuff = new THREE.Mesh(new THREE.CylinderGeometry(0.052, 0.062, 0.08, 12), sleeve);
    cuff.position.y = -0.052;
    palm.add(cuff);
    const cuffEdge = new THREE.Mesh(new THREE.TorusGeometry(0.054, 0.008, 6, 12), knuckleMat);
    cuffEdge.position.y = -0.012;
    cuffEdge.rotation.x = Math.PI / 2;
    palm.add(cuffEdge);

    if (mirror) palm.rotation.y = Math.PI;

    return { root, palm, fingers, thumb: { base: thumbBase, mid: thumbMid } };
  }

  /**
   * Hacha de leñador: mango con veta y empuñadura de cuero, cabeza de acero
   * con perfil extruido, filo pulido brillante, cuña superior y estribo.
   */
  private buildAxe(): THREE.Group {
    const g = new THREE.Group();

    const woodTex = axeWoodTexture();
    const woodMat = new THREE.MeshStandardMaterial({
      map: woodTex,
      bumpMap: woodTex,
      bumpScale: 0.012,
      roughness: 0.62,
      metalness: 0.04
    });
    const leatherMat = new THREE.MeshStandardMaterial({
      map: leatherTexture(),
      roughness: 0.85
    });
    const steelMat = new THREE.MeshStandardMaterial({
      color: 0xc8ced6,
      roughnessMap: brushedSteelTexture(),
      roughness: 0.34,
      metalness: 0.92,
      envMapIntensity: 1.15
    });
    // Filo pulido: acero más claro y espejado para que "corte" a la vista.
    const edgeMat = new THREE.MeshStandardMaterial({
      color: 0xeef2f6,
      roughness: 0.12,
      metalness: 0.98,
      envMapIntensity: 1.6
    });

    // ---- Mango ligeramente curvado (dos tramos) ----
    const lower = new THREE.Mesh(new THREE.CylinderGeometry(0.017, 0.02, 0.36, 14), woodMat);
    lower.position.y = 0.18;
    lower.rotation.z = 0.02;
    g.add(lower);
    const upper = new THREE.Mesh(new THREE.CylinderGeometry(0.016, 0.017, 0.24, 14), woodMat);
    upper.position.y = 0.44;
    upper.rotation.z = -0.03;
    g.add(upper);

    // Empuñadura de cuero trenzado abajo.
    const grip = new THREE.Mesh(new THREE.CylinderGeometry(0.0205, 0.0215, 0.13, 14), leatherMat);
    grip.position.y = 0.075;
    g.add(grip);
    for (let i = 0; i < 3; i++) {
      const ring = new THREE.Mesh(new THREE.TorusGeometry(0.021, 0.0035, 8, 18), leatherMat);
      ring.position.y = 0.02 + i * 0.042;
      ring.rotation.x = Math.PI / 2;
      g.add(ring);
    }
    // Pomo del mango.
    const butt = new THREE.Mesh(new THREE.CylinderGeometry(0.021, 0.018, 0.02, 14), leatherMat);
    butt.position.y = 0.008;
    g.add(butt);

    // ---- Cabeza: perfil extruido con bisel (filo real) ----
    const s = new THREE.Shape();
    s.moveTo(0.055, -0.05);
    s.lineTo(0.055, 0.05);
    s.quadraticCurveTo(-0.02, 0.072, -0.078, 0.055);
    s.quadraticCurveTo(-0.152, 0.022, -0.176, 0.0);
    s.quadraticCurveTo(-0.168, -0.022, -0.152, -0.042);
    s.quadraticCurveTo(-0.07, -0.072, 0.055, -0.05);

    const headGeo = new THREE.ExtrudeGeometry(s, {
      depth: 0.03,
      bevelEnabled: true,
      bevelThickness: 0.008,
      bevelSize: 0.011,
      bevelSegments: 2,
      curveSegments: 10
    });
    // El perfil mira a -X; lo llevamos a -Z (frente del hacha) y centramos.
    headGeo.rotateY(Math.PI / 2);
    headGeo.translate(0.012, 0.52, -0.008);
    const head = new THREE.Mesh(headGeo, steelMat);
    g.add(head);

    // Filo pulido: tira fina pegada al borde de corte (lado -X del perfil).
    const edge = new THREE.Mesh(
      new THREE.BoxGeometry(0.012, 0.105, 0.026),
      edgeMat
    );
    edge.position.set(-0.152, 0.52, 0.007);
    edge.rotation.z = 0.42;
    g.add(edge);

    // Refuerzo del ojo (abrazadera de acero sobre el mango).
    const collar = new THREE.Mesh(new THREE.CylinderGeometry(0.024, 0.024, 0.045, 12), steelMat);
    collar.position.y = 0.5;
    g.add(collar);

    // Cuña de madera asomando por arriba del ojo.
    const wedge = new THREE.Mesh(new THREE.BoxGeometry(0.012, 0.03, 0.028), woodMat);
    wedge.position.y = 0.565;
    wedge.rotation.y = 0.3;
    g.add(wedge);

    return g;
  }
}
