import * as THREE from 'three';
import { Heightfield, SAWMILL } from './heightfield';
import { Collider } from './Trees';
import { mulberry32 } from '../core/noise';

const TINT = {
  log: 0x8a6a48,
  darkWood: 0x5c452e,
  roof: 0x6d3f30,
  stone: 0x8d8a80,
  glass: 0x2b3a42,
  metal: 0xb9c1c6,
  brass: 0xc9a066,
  sign: 0xc9a066
};

/** Colisiones en línea: aproxima un muro con círculos cada ~1.1 m. */
function wallColliders(
  colliders: Collider[],
  x1: number,
  z1: number,
  x2: number,
  z2: number,
  gapMiddle = 0
): void {
  const len = Math.hypot(x2 - x1, z2 - z1);
  const n = Math.max(2, Math.round(len / 1.1));
  const skipA = gapMiddle > 0 ? Math.floor((n - gapMiddle) / 2) : -1;
  const skipB = gapMiddle > 0 ? skipA + gapMiddle : -1;
  for (let i = 0; i < n; i++) {
    if (i >= skipA && i < skipB) continue;
    const t = i / (n - 1);
    colliders.push({ x: x1 + (x2 - x1) * t, z: z1 + (z2 - z1) * t, r: 0.55 });
  }
}

/** Muro de troncos apilados entre dos puntos, con nudillos ocasionales. */
function logWall(
  parts: THREE.BufferGeometry[],
  x1: number,
  z1: number,
  x2: number,
  z2: number,
  baseY: number,
  height: number,
  rng: () => number
): void {
  const len = Math.hypot(x2 - x1, z2 - z1);
  const logs = Math.max(3, Math.round(height / 0.42));
  const ang = Math.atan2(x2 - x1, z2 - z1);
  for (let i = 0; i < logs; i++) {
    const y = baseY + 0.21 + i * 0.42;
    const g = new THREE.CylinderGeometry(0.2, 0.2, len + 0.5, 7);
    g.rotateZ(Math.PI / 2);
    g.rotateY(-ang + Math.PI / 2);
    g.translate((x1 + x2) / 2, y, (z1 + z2) / 2);
    g.userData.tint = TINT.log;
    parts.push(g);
    if (rng() < 0.3) {
      const knot = new THREE.SphereGeometry(0.085, 6, 5);
      const t = rng();
      knot.translate(x1 + (x2 - x1) * t, y, z1 + (z2 - z1) * t);
      knot.userData.tint = TINT.darkWood;
      parts.push(knot);
    }
  }
}

/** Ventana con marco, cristal y travesaño. */
function windowAt(
  parts: THREE.BufferGeometry[],
  x: number,
  z: number,
  rotY: number,
  y: number
): void {
  const frame = new THREE.BoxGeometry(1.12, 1.22, 0.16);
  frame.rotateY(rotY);
  frame.translate(x, y + 1.5, z);
  frame.userData.tint = TINT.darkWood;
  parts.push(frame);
  const glass = new THREE.BoxGeometry(0.94, 1.04, 0.05);
  glass.rotateY(rotY);
  glass.translate(x, y + 1.5, z);
  glass.userData.tint = TINT.glass;
  parts.push(glass);
  const cross = new THREE.BoxGeometry(0.07, 1.0, 0.1);
  cross.rotateY(rotY);
  cross.translate(x, y + 1.5, z);
  cross.userData.tint = TINT.darkWood;
  parts.push(cross);
}

/** Puerta de madera con pomo de latón. */
function doorAt(
  parts: THREE.BufferGeometry[],
  x: number,
  z: number,
  rotY: number,
  y: number
): void {
  const door = new THREE.BoxGeometry(1.02, 2.08, 0.1);
  door.rotateY(rotY);
  door.translate(x, y + 1.06, z);
  door.userData.tint = TINT.darkWood;
  parts.push(door);
  const knob = new THREE.SphereGeometry(0.05, 6, 5);
  knob.translate(x + Math.cos(rotY) * 0.12, y + 1.02, z - Math.sin(rotY) * 0.12);
  knob.userData.tint = TINT.brass;
  parts.push(knob);
}

/**
 * Techo a dos aguas sobre una huella (cx, cz) de ancho w y fondo d,
 * girado rotY, apoyado a la altura y (tope de los muros).
 */
function gableRoof(
  parts: THREE.BufferGeometry[],
  cx: number,
  cz: number,
  y: number,
  w: number,
  d: number,
  rotY: number,
  overhang = 0.5
): void {
  const rise = 1.35;
  const halfW = w / 2 + overhang;
  const slopeLen = Math.hypot(halfW, rise);
  const theta = Math.atan2(rise, halfW);
  const cos = Math.cos(rotY);
  const sin = Math.sin(rotY);
  // local (lx, lz) -> mundo.
  const at = (lx: number, ly: number, lz: number): [number, number, number] => [
    cx + sin * lz + cos * lx,
    y + ly,
    cz + cos * lz - sin * lx
  ];

  for (const side of [-1, 1]) {
    const g = new THREE.BoxGeometry(slopeLen, 0.12, d + overhang * 2);
    g.rotateZ(-side * theta);
    const [tx, ty, tz] = at((side * halfW) / 2, rise / 2 + 0.05, 0);
    g.translate(tx, ty, tz);
    g.userData.tint = TINT.roof;
    parts.push(g);
  }
  const ridge = new THREE.BoxGeometry(0.26, 0.15, d + overhang * 2);
  const [rx, ry, rz] = at(0, rise + 0.02, 0);
  ridge.translate(rx, ry, rz);
  ridge.userData.tint = TINT.darkWood;
  parts.push(ridge);

  // Frontones de madera en los dos extremos.
  for (const s of [-1, 1]) {
    const gable = new THREE.BoxGeometry(w - 0.15, rise - 0.12, 0.15);
    const [gx, gy, gz] = at(0, (rise - 0.12) / 2, s * (d / 2));
    gable.rotateY(rotY);
    gable.translate(gx, gy, gz);
    gable.userData.tint = TINT.log;
    parts.push(gable);
  }
}

/** Fusiona geometrías con color por pieza (userData.tint) en una sola malla. */
function mergeTinted(list: THREE.BufferGeometry[]): THREE.BufferGeometry {
  const positions: number[] = [];
  const normals: number[] = [];
  const uvs: number[] = [];
  const colors: number[] = [];
  const indices: number[] = [];
  let offset = 0;
  const c = new THREE.Color();

  for (const g of list) {
    const p = g.attributes.position as THREE.BufferAttribute;
    const n = g.attributes.normal as THREE.BufferAttribute | undefined;
    const uv = g.attributes.uv as THREE.BufferAttribute | undefined;
    c.setHex((g.userData.tint as number | undefined) ?? TINT.log);
    for (let i = 0; i < p.count; i++) {
      positions.push(p.getX(i), p.getY(i), p.getZ(i));
      if (n) normals.push(n.getX(i), n.getY(i), n.getZ(i));
      else normals.push(0, 1, 0);
      if (uv) uvs.push(uv.getX(i), uv.getY(i));
      else uvs.push(0, 0);
      colors.push(c.r, c.g, c.b);
    }
    if (g.index) {
      for (let i = 0; i < g.index.count; i++) indices.push(g.index.getX(i) + offset);
    } else {
      for (let i = 0; i < p.count; i++) indices.push(i + offset);
    }
    offset += p.count;
    g.dispose();
  }

  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
  geo.setAttribute('normal', new THREE.Float32BufferAttribute(normals, 3));
  geo.setAttribute('uv', new THREE.Float32BufferAttribute(uvs, 2));
  geo.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
  geo.setIndex(indices);
  return geo;
}

function addMerged(scene: THREE.Scene, parts: THREE.BufferGeometry[]): void {
  const mesh = new THREE.Mesh(
    mergeTinted(parts),
    new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.85 })
  );
  mesh.castShadow = true;
  mesh.receiveShadow = true;
  scene.add(mesh);
}

interface CabinSpec {
  cx: number;
  cz: number;
  w: number;
  d: number;
  rotY: number;
  porch?: boolean;
  /** Segundo piso encima (casa grande). */
  secondFloor?: boolean;
}

/** Una cabaña de troncos: muros, techo, puerta, ventanas, chimenea y porch. */
function cabin(
  scene: THREE.Scene,
  colliders: Collider[],
  field: Heightfield,
  rng: () => number,
  spec: CabinSpec
): void {
  const { cx, cz, w, d, rotY } = spec;
  const cos = Math.cos(rotY);
  const sin = Math.sin(rotY);
  const at = (lx: number, lz: number): [number, number] => [
    cx + sin * lz + cos * lx,
    cz + cos * lz - sin * lx
  ];

  // Anclar a la esquina más baja del terreno.
  let baseY = Infinity;
  for (const sx of [-0.5, 0.5]) {
    for (const sz of [-0.5, 0.5]) {
      const [x, z] = at(sx * w, sz * d);
      baseY = Math.min(baseY, field.sampleHeight(x, z));
    }
  }
  baseY += 0.05;

  const hw = w / 2;
  const hd = d / 2;
  const wallH = 2.4;
  const parts: THREE.BufferGeometry[] = [];

  // Esquinas y muros en mundo.
  const [nx1, nz1] = at(-hw, -hd);
  const [nx2, nz2] = at(hw, -hd);
  const [sx1, sz1] = at(-hw, hd);
  const [sx2, sz2] = at(hw, hd);
  const [ox1, oz1] = at(-hw, -hd);
  const [ox2, oz2] = at(-hw, hd);
  const [ex1, ez1] = at(hw, -hd);
  const [ex2, ez2] = at(hw, hd);

  logWall(parts, nx1, nz1, nx2, nz2, baseY, wallH, rng);
  logWall(parts, sx1, sz1, sx2, sz2, baseY, wallH, rng);
  logWall(parts, ox1, oz1, ox2, oz2, baseY, wallH, rng);
  logWall(parts, ex1, ez1, ex2, ez2, baseY, wallH, rng);

  // Hueco visual de la puerta en el muro norte (marco más oscuro encima).
  const [dx, dz] = at(0, -hd - 0.03);
  doorAt(parts, dx, dz, rotY, baseY);

  // Ventanas: dos al sur, una al este.
  const [w1x, w1z] = at(-hw * 0.45, hd + 0.03);
  const [w2x, w2z] = at(hw * 0.45, hd + 0.03);
  windowAt(parts, w1x, w1z, rotY, baseY);
  windowAt(parts, w2x, w2z, rotY, baseY);
  const [w3x, w3z] = at(hw + 0.03, 0);
  windowAt(parts, w3x, w3z, rotY + Math.PI / 2, baseY);

  gableRoof(parts, cx, cz, baseY + wallH, w, d, rotY);

  // Chimenea de piedra en la esquina trasera-derecha.
  const [chx, chz] = at(hw - 0.4, hd - 0.4);
  const chimney = new THREE.BoxGeometry(0.72, 3.7, 0.72);
  chimney.translate(chx, baseY + 1.85, chz);
  chimney.userData.tint = TINT.stone;
  parts.push(chimney);
  const cap = new THREE.BoxGeometry(0.92, 0.16, 0.92);
  cap.translate(chx, baseY + 3.72, chz);
  cap.userData.tint = TINT.darkWood;
  parts.push(cap);

  // Porch: tarima + postes + techito.
  if (spec.porch) {
    const [p1x, p1z] = at(-hw - 0.2, -hd - 1.55);
    const [p2x, p2z] = at(hw + 0.2, -hd - 1.55);
    const deck = new THREE.BoxGeometry(w + 0.8, 0.16, 1.8);
    deck.rotateY(rotY);
    deck.translate((p1x + p2x) / 2, baseY + 0.12, (p1z + p2z) / 2);
    deck.userData.tint = TINT.darkWood;
    parts.push(deck);
    for (const s of [-1, 1]) {
      const [postX, postZ] = at(s * (hw - 0.1), -hd - 1.35);
      const post = new THREE.BoxGeometry(0.15, 2.45, 0.15);
      post.rotateY(rotY);
      post.translate(postX, baseY + 1.3, postZ);
      post.userData.tint = TINT.log;
      parts.push(post);
    }
    const roof = new THREE.BoxGeometry(w + 1.0, 0.1, 2.1);
    roof.rotateX(-0.18);
    const [rcx, rcz] = at(0, -hd - 0.9);
    roof.rotateY(rotY);
    roof.translate(rcx, baseY + 2.62, rcz);
    roof.userData.tint = TINT.roof;
    parts.push(roof);
    // Escalones.
    for (let i = 0; i < 2; i++) {
      const [stx, stz] = at(0, -hd - 1.9 - i * 0.42);
      const step = new THREE.BoxGeometry(1.5, 0.14, 0.45);
      step.rotateY(rotY);
      step.translate(stx, baseY + 0.05 - i * 0.14, stz);
      step.userData.tint = TINT.darkWood;
      parts.push(step);
    }
  }

  // Colisión del perímetro con hueco en la puerta (muro norte).
  wallColliders(colliders, nx1, nz1, nx2, nz2, 1);
  wallColliders(colliders, sx1, sz1, sx2, sz2);
  wallColliders(colliders, ox1, oz1, ox2, oz2);
  wallColliders(colliders, ex1, ez1, ex2, ez2);
  colliders.push({ x: chx, z: chz, r: 0.6 });

  addMerged(scene, parts);

  // ---- Segundo piso opcional (casa grande) ----
  if (spec.secondFloor) {
    const parts2: THREE.BufferGeometry[] = [];
    const hw2 = hw - 0.5;
    const hd2 = hd - 0.5;
    const y2 = baseY + wallH + 0.1;
    const h2 = 2.25;
    const corners: [number, number][] = [
      at(-hw2, -hd2),
      at(hw2, -hd2),
      at(hw2, hd2),
      at(-hw2, hd2)
    ];
    for (let i = 0; i < 4; i++) {
      const [x1, z1] = corners[i];
      const [x2, z2] = corners[(i + 1) % 4];
      logWall(parts2, x1, z1, x2, z2, y2, h2, rng);
      wallColliders(colliders, x1, z1, x2, z2);
    }
    // Ventana y balcón con barandal.
    const [wx, wz] = at(0, -hd2 - 0.03);
    windowAt(parts2, wx, wz, rotY, y2);
    for (let i = 0; i < 4; i++) {
      const [x1, z1] = corners[i];
      const [x2, z2] = corners[(i + 1) % 4];
      const rail = new THREE.BoxGeometry(Math.hypot(x2 - x1, z2 - z1) * 0.35, 0.09, 0.09);
      rail.rotateY(Math.atan2(x2 - x1, z2 - z1));
      const t = 0.5; // barandal al frente
      rail.translate(x1 + (x2 - x1) * t, y2 - 0.3, z1 + (z2 - z1) * t);
      rail.userData.tint = TINT.darkWood;
      parts2.push(rail);
    }
    gableRoof(parts2, cx, cz, y2 + h2, hw2 * 2, hd2 * 2, rotY);
    addMerged(scene, parts2);
  }
}

/**
 * Pueblo del valle: aserradero (tienda de madera), tres cabañas y una casa
 * de dos plantas con balcón, vallas y farolas. Todo con colisión sólida.
 */
export function createStructures(
  scene: THREE.Scene,
  field: Heightfield,
  colliders: Collider[]
): void {
  const rng = mulberry32(90210);

  // ---- Aserradero: nave abierta con techo a un agua, sierra y pila de troncos ----
  {
    const cx = SAWMILL.x;
    const cz = SAWMILL.z;
    const baseY = field.sampleHeight(cx, cz) + 0.05;
    const parts: THREE.BufferGeometry[] = [];

    // 6 postes + 3 vigas + techo escalonado a un agua.
    const posts: [number, number][] = [
      [-4.2, -3.0],
      [4.2, -3.0],
      [-4.2, 0.6],
      [4.2, 0.6],
      [-4.2, 3.4],
      [4.2, 3.4]
    ];
    for (const [px, pz] of posts) {
      const post = new THREE.CylinderGeometry(0.16, 0.2, 3.2, 8);
      post.translate(cx + px, baseY + 1.6, cz + pz);
      post.userData.tint = TINT.log;
      parts.push(post);
      colliders.push({ x: cx + px, z: cz + pz, r: 0.42 });
    }
    for (let i = 0; i < 3; i++) {
      const pz = -3.0 + i * 3.2;
      const h = 3.4 - i * 0.3;
      const beam = new THREE.BoxGeometry(8.9, 0.18, 0.15);
      beam.translate(cx, baseY + h, cz + pz);
      beam.userData.tint = TINT.darkWood;
      parts.push(beam);
      // Franja de techo entre viga i y i+1.
      const panel = new THREE.BoxGeometry(9.6, 0.1, 3.6);
      panel.rotateX(Math.atan2(0.3, 3.2));
      panel.translate(cx, baseY + h - 0.15, cz + pz + 1.6);
      panel.userData.tint = TINT.roof;
      parts.push(panel);
    }

    // Mesa de sierra con disco y motor.
    const table = new THREE.BoxGeometry(3.0, 0.12, 1.1);
    table.translate(cx - 0.6, baseY + 1.02, cz - 0.8);
    table.userData.tint = TINT.darkWood;
    parts.push(table);
    for (const [lx, lz] of [
      [-1.9, -1.2],
      [0.7, -1.2],
      [-1.9, -0.4],
      [0.7, -0.4]
    ]) {
      const leg = new THREE.BoxGeometry(0.12, 0.96, 0.12);
      leg.translate(cx - 0.6 + lx, baseY + 0.5, cz + lz);
      leg.userData.tint = TINT.darkWood;
      parts.push(leg);
    }
    const sawDisc = new THREE.CylinderGeometry(0.42, 0.42, 0.035, 18);
    sawDisc.rotateX(Math.PI / 2);
    sawDisc.translate(cx - 0.6, baseY + 1.12, cz - 0.8);
    sawDisc.userData.tint = TINT.metal;
    parts.push(sawDisc);
    const motor = new THREE.BoxGeometry(0.6, 0.5, 0.7);
    motor.translate(cx - 0.6, baseY + 0.66, cz - 0.8);
    motor.userData.tint = 0x4a5548;
    parts.push(motor);
    colliders.push({ x: cx - 0.6, z: cz - 0.8, r: 1.0 });

    // Pila de troncos piramidal.
    for (let row = 0; row < 3; row++) {
      for (let i = 0; i < 4 - row; i++) {
        const log = new THREE.CylinderGeometry(0.24, 0.24, 3.2, 8);
        log.rotateZ(Math.PI / 2);
        log.translate(cx + 2.0, baseY + 0.26 + row * 0.44, cz + 0.6 + i * 0.5 + row * 0.25);
        log.userData.tint = 0x7a5c3c;
        parts.push(log);
      }
    }
    colliders.push({ x: cx + 2.0, z: cz + 1.3, r: 1.6 });

    // Cartel del aserradero.
    const board = new THREE.BoxGeometry(2.8, 0.7, 0.08);
    board.translate(cx, baseY + 2.7, cz - 3.3);
    board.userData.tint = TINT.sign;
    parts.push(board);
    const boardTrim = new THREE.BoxGeometry(2.95, 0.82, 0.05);
    boardTrim.translate(cx, baseY + 2.7, cz - 3.32);
    boardTrim.userData.tint = TINT.darkWood;
    parts.push(boardTrim);

    // Luz cálida de trabajo (una sola luz puntual).
    const lamp = new THREE.PointLight(0xffc36b, 14, 18, 2);
    lamp.position.set(cx, baseY + 3.1, cz);
    scene.add(lamp);

    addMerged(scene, parts);
  }

  // ---- Cabañas y casa grande ----
  cabin(scene, colliders, field, rng, { cx: 42, cz: 96, w: 4.6, d: 5.4, rotY: 0.35, porch: true });
  cabin(scene, colliders, field, rng, { cx: 70, cz: 136, w: 5.2, d: 4.4, rotY: -0.55, porch: true });
  cabin(scene, colliders, field, rng, { cx: 44, cz: 146, w: 4.0, d: 4.0, rotY: 0.15, porch: true });
  cabin(scene, colliders, field, rng, {
    cx: 70,
    cz: 100,
    w: 5.6,
    d: 5.0,
    rotY: -1.1,
    porch: false,
    secondFloor: true
  });

  // ---- Vallas del claro y farolas ----
  {
    const parts: THREE.BufferGeometry[] = [];
    const fence = (x1: number, z1: number, x2: number, z2: number) => {
      const len = Math.hypot(x2 - x1, z2 - z1);
      const n = Math.max(1, Math.round(len / 2.2));
      for (let i = 0; i <= n; i++) {
        const t = i / n;
        const x = x1 + (x2 - x1) * t;
        const z = z1 + (z2 - z1) * t;
        const post = new THREE.BoxGeometry(0.12, 1.05, 0.12);
        post.translate(x, field.sampleHeight(x, z) + 0.5, z);
        post.userData.tint = TINT.darkWood;
        parts.push(post);
      }
      for (const hy of [0.45, 0.92]) {
        const rail = new THREE.BoxGeometry(len, 0.08, 0.07);
        rail.rotateY(-Math.atan2(x2 - x1, z2 - z1) + Math.PI / 2);
        const mx = (x1 + x2) / 2;
        const mz = (z1 + z2) / 2;
        rail.translate(mx, field.sampleHeight(mx, mz) + hy, mz);
        rail.userData.tint = TINT.log;
        parts.push(rail);
      }
    };
    fence(30, 88, 36, 160);
    fence(36, 160, 52, 166);

    // Farolas de madera con lámpara cálida emisiva.
    for (const [lx, lz] of [
      [38, 104],
      [60, 150]
    ]) {
      const y = field.sampleHeight(lx, lz);
      const pole = new THREE.CylinderGeometry(0.08, 0.11, 3.4, 7);
      pole.translate(lx, y + 1.7, lz);
      pole.userData.tint = TINT.darkWood;
      parts.push(pole);
      const head = new THREE.BoxGeometry(0.5, 0.22, 0.5);
      head.translate(lx, y + 3.42, lz);
      head.userData.tint = 0x3a3a3a;
      parts.push(head);
      const glow = new THREE.Mesh(
        new THREE.SphereGeometry(0.085, 8, 6),
        new THREE.MeshStandardMaterial({
          color: 0xffe9b0,
          emissive: 0xffd070,
          emissiveIntensity: 2.4,
          roughness: 0.5
        })
      );
      glow.position.set(lx, y + 3.28, lz);
      scene.add(glow);
      colliders.push({ x: lx, z: lz, r: 0.35 });
    }
    addMerged(scene, parts);
  }
}
