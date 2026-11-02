import * as THREE from 'three';
import { Heightfield, SAWMILL } from './heightfield';
import { Collider } from './Trees';
import { mulberry32 } from '../core/noise';
import { cabinAtlasTexture, atlasBand } from '../core/textures';
import { SkyEnv } from './SkyEnv';

const TINT = {
  log: 0x8a6a48,
  darkWood: 0x5c452e,
  roof: 0x7d4436,
  stone: 0x9d968a,
  metal: 0xb9c1c6,
  brass: 0xc9a066,
  sign: 0xc9a066,
  shutter: 0x4f6b52,
  planter: 0x6b4a30
};

/** Banda del atlas: 0 madera · 1 tejas · 2 piedra. */
const BAND = { wood: 0, shingle: 1, stone: 2 } as const;

/** Atlas compartido del pueblo (perezoso). */
let atlas: THREE.CanvasTexture | null = null;
function townAtlas(): THREE.CanvasTexture {
  atlas ??= cabinAtlasTexture();
  return atlas;
}

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

/** Muro de troncos apilados entre dos puntos, con vetas y nudillos. */
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
    const g = new THREE.CylinderGeometry(0.2, 0.2, len + 0.5, 9, 1);
    g.rotateZ(Math.PI / 2);
    g.rotateY(-ang + Math.PI / 2);
    g.translate((x1 + x2) / 2, y, (z1 + z2) / 2);
    g.userData.tint = i % 2 === 0 ? TINT.log : 0x82613f;
    g.userData.band = BAND.wood;
    parts.push(g);
    if (rng() < 0.34) {
      const knot = new THREE.SphereGeometry(0.085, 6, 5);
      const t = rng();
      knot.translate(x1 + (x2 - x1) * t, y, z1 + (z2 - z1) * t);
      knot.userData.tint = TINT.darkWood;
      knot.userData.band = BAND.wood;
      parts.push(knot);
    }
  }
}

/** Ventana con marco, cristal, contraventanas y jardinera. */
function windowAt(
  parts: THREE.BufferGeometry[],
  glows: THREE.BufferGeometry[],
  x: number,
  z: number,
  rotY: number,
  y: number,
  planter: boolean
): void {
  const band = BAND.wood;
  const frame = new THREE.BoxGeometry(1.14, 1.26, 0.18);
  frame.rotateY(rotY);
  frame.translate(x, y + 1.5, z);
  frame.userData.tint = TINT.darkWood;
  frame.userData.band = band;
  parts.push(frame);

  // Cristal (tinte azulado; el "glow" nocturno se pone por delante).
  const glass = new THREE.BoxGeometry(0.96, 1.06, 0.06);
  glass.rotateY(rotY);
  glass.translate(x, y + 1.5, z);
  glass.userData.tint = 0x2b3a42;
  glass.userData.band = band;
  parts.push(glass);

  // Travesaños de la cruz.
  const cross = new THREE.BoxGeometry(0.08, 1.02, 0.1);
  cross.rotateY(rotY);
  cross.translate(x, y + 1.5, z);
  cross.userData.tint = TINT.darkWood;
  cross.userData.band = band;
  parts.push(cross);
  const sill = new THREE.BoxGeometry(1.2, 0.09, 0.22);
  sill.rotateY(rotY);
  sill.translate(x, y + 0.82, z);
  sill.userData.tint = TINT.darkWood;
  sill.userData.band = band;
  parts.push(sill);

  // Contraventanas entreabiertas.
  for (const s of [-1, 1]) {
    const shutter = new THREE.BoxGeometry(0.42, 1.14, 0.05);
    shutter.rotateY(rotY + s * 0.35);
    const ox = Math.cos(rotY) * s * 0.78 - Math.sin(rotY) * 0.06;
    const oz = -Math.sin(rotY) * s * 0.78 - Math.cos(rotY) * 0.06;
    shutter.translate(x + ox, y + 1.48, z + oz);
    shutter.userData.tint = s === 1 ? TINT.shutter : 0x5a7a5e;
    shutter.userData.band = band;
    parts.push(shutter);
  }

  // Jardinera con flores.
  if (planter) {
    const box = new THREE.BoxGeometry(1.0, 0.2, 0.24);
    box.rotateY(rotY);
    const px = Math.sin(rotY) * -0.16;
    const pz = Math.cos(rotY) * -0.16;
    box.translate(x + px, y + 0.68, z + pz);
    box.userData.tint = TINT.planter;
    box.userData.band = band;
    parts.push(box);
    for (let i = 0; i < 4; i++) {
      const bloom = new THREE.SphereGeometry(0.055, 6, 5);
      bloom.translate(
        x + px + Math.cos(rotY) * (i - 1.5) * 0.2,
        y + 0.82,
        z + pz - Math.sin(rotY) * (i - 1.5) * 0.2
      );
      bloom.userData.tint = [0xd8604f, 0xe8b23f, 0xc75f8e, 0xd8604f][i];
      bloom.userData.band = band;
      parts.push(bloom);
    }
  }

  // Panel cálido que se enciende de noche (1.4 cm por delante del cristal).
  const glow = new THREE.PlaneGeometry(0.96, 1.06);
  glow.rotateY(rotY + Math.PI);
  const gx = -Math.sin(rotY + Math.PI) * 0.07;
  const gz = -Math.cos(rotY + Math.PI) * 0.07;
  glow.translate(x + gx, y + 1.5, z + gz);
  glows.push(glow);
}

/** Puerta de madera con pomo de latón y farol al lado. */
function doorAt(
  parts: THREE.BufferGeometry[],
  x: number,
  z: number,
  rotY: number,
  y: number
): void {
  const door = new THREE.BoxGeometry(1.04, 2.1, 0.12);
  door.rotateY(rotY);
  door.translate(x, y + 1.07, z);
  door.userData.tint = 0x6d5238;
  door.userData.band = BAND.wood;
  parts.push(door);
  // Tablones verticales marcados.
  for (let i = 0; i < 3; i++) {
    const seam = new THREE.BoxGeometry(0.035, 2.0, 0.135);
    seam.rotateY(rotY);
    seam.translate(x + Math.cos(rotY) * (i - 1) * 0.28, y + 1.07, z - Math.sin(rotY) * (i - 1) * 0.28);
    seam.userData.tint = TINT.darkWood;
    seam.userData.band = BAND.wood;
    parts.push(seam);
  }
  const knob = new THREE.SphereGeometry(0.05, 6, 5);
  knob.translate(x + Math.cos(rotY) * 0.38, y + 1.02, z - Math.sin(rotY) * 0.38);
  knob.userData.tint = TINT.brass;
  knob.userData.band = BAND.wood;
  parts.push(knob);
  // Marco de la puerta.
  for (const s of [-1, 1]) {
    const jamb = new THREE.BoxGeometry(0.14, 2.16, 0.2);
    jamb.rotateY(rotY);
    jamb.translate(x + Math.cos(rotY) * s * 0.56, y + 1.08, z - Math.sin(rotY) * s * 0.56);
    jamb.userData.tint = TINT.darkWood;
    jamb.userData.band = BAND.wood;
    parts.push(jamb);
  }
}

/**
 * Techo a dos aguas con tejas escalonadas, caballete y frontones.
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
  const rise = 1.5;
  const halfW = w / 2 + overhang;
  const slopeLen = Math.hypot(halfW, rise);
  const theta = Math.atan2(rise, halfW);
  const cos = Math.cos(rotY);
  const sin = Math.sin(rotY);
  const at = (lx: number, ly: number, lz: number): [number, number, number] => [
    cx + sin * lz + cos * lx,
    y + ly,
    cz + cos * lz - sin * lx
  ];

  for (const side of [-1, 1]) {
    const g = new THREE.BoxGeometry(slopeLen, 0.14, d + overhang * 2);
    g.rotateZ(-side * theta);
    const [tx, ty, tz] = at((side * halfW) / 2, rise / 2 + 0.05, 0);
    g.translate(tx, ty, tz);
    g.userData.tint = TINT.roof;
    g.userData.band = BAND.shingle;
    parts.push(g);
  }
  const ridge = new THREE.BoxGeometry(0.3, 0.16, d + overhang * 2);
  const [rx, ry, rz] = at(0, rise + 0.02, 0);
  ridge.translate(rx, ry, rz);
  ridge.userData.tint = TINT.darkWood;
  ridge.userData.band = BAND.wood;
  parts.push(ridge);

  // Frontones de tablones en los dos extremos.
  for (const s of [-1, 1]) {
    const gable = new THREE.BoxGeometry(w - 0.15, rise - 0.12, 0.15);
    const [gx, gy, gz] = at(0, (rise - 0.12) / 2, s * (d / 2));
    gable.rotateY(rotY);
    gable.translate(gx, gy, gz);
    gable.userData.tint = 0x96703f;
    gable.userData.band = BAND.wood;
    parts.push(gable);
  }
}

/** Fusiona geometrías con color por pieza en una sola malle (con atlas). */
function mergeTinted(list: THREE.BufferGeometry[]): THREE.BufferGeometry {
  const positions: number[] = [];
  const normals: number[] = [];
  const uvs: number[] = [];
  const colors: number[] = [];
  const indices: number[] = [];
  let offset = 0;
  const c = new THREE.Color();

  for (const g of list) {
    atlasBand(g, (g.userData.band as number | undefined) ?? BAND.wood, 2.4);
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

function addMerged(scene: THREE.Scene, parts: THREE.BufferGeometry[]): THREE.Mesh {
  const mesh = new THREE.Mesh(
    mergeTinted(parts),
    new THREE.MeshStandardMaterial({
      vertexColors: true,
      map: townAtlas(),
      roughness: 0.86,
      metalness: 0.02
    })
  );
  mesh.castShadow = true;
  mesh.receiveShadow = true;
  scene.add(mesh);
  return mesh;
}

/** Malla fusionada de "cristales encendidos" (una por cabaña). */
function addWindowGlow(
  scene: THREE.Scene,
  glows: THREE.BufferGeometry[],
  sky: SkyEnv
): void {
  if (!glows.length) return;
  const merged = mergeTinted(glows);
  const mat = new THREE.MeshStandardMaterial({
    color: 0xf2e2b6,
    emissive: 0xffc46a,
    emissiveIntensity: 1.7,
    roughness: 0.9,
    side: THREE.DoubleSide
  });
  const mesh = new THREE.Mesh(merged, mat);
  scene.add(mesh);
  sky.registerNightMaterial(mat);
}

/** Farol de pared: caja pequeña + bolita emisiva registrada. */
function addLantern(
  scene: THREE.Scene,
  x: number,
  y: number,
  z: number,
  sky: SkyEnv
): void {
  const box = new THREE.Mesh(
    new THREE.BoxGeometry(0.14, 0.2, 0.14),
    new THREE.MeshStandardMaterial({ color: 0x3a3632, roughness: 0.8 })
  );
  box.position.set(x, y, z);
  scene.add(box);
  const mat = new THREE.MeshStandardMaterial({
    color: 0xffe9b0,
    emissive: 0xffd070,
    emissiveIntensity: 2.2,
    roughness: 0.5
  });
  const glow = new THREE.Mesh(new THREE.SphereGeometry(0.055, 8, 6), mat);
  glow.position.set(x, y - 0.01, z);
  scene.add(glow);
  sky.registerNightMaterial(mat);
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
  spec: CabinSpec,
  sky: SkyEnv
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
  const glows: THREE.BufferGeometry[] = [];

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

  // Extremos de troncos cruzados en las cuatro esquinas.
  for (const [px, pz] of [at(-hw, -hd), at(hw, -hd), at(-hw, hd), at(hw, hd)]) {
    for (let i = 0; i < 6; i++) {
      const cap = new THREE.CylinderGeometry(0.19, 0.19, 0.34, 8);
      cap.rotateZ((i % 2 === 0 ? 0.45 : -0.45) + Math.PI / 2);
      cap.rotateY(rotY);
      cap.translate(px + (rng() - 0.5) * 0.08, baseY + 0.24 + i * 0.42, pz + (rng() - 0.5) * 0.08);
      cap.userData.tint = i % 2 === 0 ? TINT.darkWood : TINT.log;
      cap.userData.band = BAND.wood;
      parts.push(cap);
    }
  }

  // Anillo de piedras del cimiento.
  for (let i = 0; i < Math.round(w * 2 + d * 2); i++) {
    const t = i / Math.round(w * 2 + d * 2);
    // Perímetro rectangular.
    const per = 2 * (w + d);
    let lx: number;
    let lz: number;
    const p = t * per;
    if (p < w) [lx, lz] = [p - w / 2, -d / 2];
    else if (p < w + d) [lx, lz] = [w / 2, p - w - d / 2];
    else if (p < 2 * w + d) [lx, lz] = [w / 2 - (p - w - d), d / 2];
    else [lx, lz] = [-w / 2, d / 2 - (p - 2 * w - d)];
    const [bx, bz] = at(lx, lz);
    const stone = new THREE.BoxGeometry(0.34, 0.3 + rng() * 0.14, 0.3);
    stone.rotateY(rng() * Math.PI);
    stone.translate(bx, baseY + 0.02, bz);
    stone.userData.tint = rng() > 0.5 ? TINT.stone : 0x8a857a;
    stone.userData.band = BAND.stone;
    parts.push(stone);
  }

  // Hueco visual de la puerta en el muro norte.
  const [dx, dz] = at(0, -hd - 0.03);
  doorAt(parts, dx, dz, rotY, baseY);
  addLantern(scene, dx + Math.cos(rotY) * 0.9, baseY + 2.2, dz - Math.sin(rotY) * 0.9, sky);

  // Ventanas: dos al sur (con jardinera), una al este.
  const [w1x, w1z] = at(-hw * 0.45, hd + 0.03);
  const [w2x, w2z] = at(hw * 0.45, hd + 0.03);
  windowAt(parts, glows, w1x, w1z, rotY, baseY, true);
  windowAt(parts, glows, w2x, w2z, rotY, baseY, false);
  const [w3x, w3z] = at(hw + 0.03, 0);
  windowAt(parts, glows, w3x, w3z, rotY + Math.PI / 2, baseY, false);

  gableRoof(parts, cx, cz, baseY + wallH, w, d, rotY);

  // Chimenea de piedra con remate y pastor de humo.
  const [chx, chz] = at(hw - 0.45, hd - 0.45);
  const chimney = new THREE.BoxGeometry(0.78, 3.9, 0.78);
  chimney.translate(chx, baseY + 1.95, chz);
  chimney.userData.tint = TINT.stone;
  chimney.userData.band = BAND.stone;
  parts.push(chimney);
  const cap = new THREE.BoxGeometry(0.98, 0.18, 0.98);
  cap.translate(chx, baseY + 3.92, chz);
  cap.userData.tint = TINT.darkWood;
  cap.userData.band = BAND.wood;
  parts.push(cap);

  // Porch: tarima + postes + techito + barandilla.
  if (spec.porch) {
    const [p1x, p1z] = at(-hw - 0.2, -hd - 1.55);
    const [p2x, p2z] = at(hw + 0.2, -hd - 1.55);
    const deck = new THREE.BoxGeometry(w + 0.8, 0.16, 1.8);
    deck.rotateY(rotY);
    deck.translate((p1x + p2x) / 2, baseY + 0.12, (p1z + p2z) / 2);
    deck.userData.tint = 0x74522f;
    deck.userData.band = BAND.wood;
    parts.push(deck);
    for (const s of [-1, 1]) {
      const [postX, postZ] = at(s * (hw - 0.1), -hd - 1.35);
      const post = new THREE.BoxGeometry(0.16, 2.5, 0.16);
      post.rotateY(rotY);
      post.translate(postX, baseY + 1.32, postZ);
      post.userData.tint = TINT.darkWood;
      post.userData.band = BAND.wood;
      parts.push(post);
    }
    const roof = new THREE.BoxGeometry(w + 1.0, 0.12, 2.15);
    roof.rotateX(-0.2);
    const [rcx, rcz] = at(0, -hd - 0.9);
    roof.rotateY(rotY);
    roof.translate(rcx, baseY + 2.66, rcz);
    roof.userData.tint = TINT.roof;
    roof.userData.band = BAND.shingle;
    parts.push(roof);
    // Barandilla del porch con balaustres torneados.
    for (const s of [-1, 1]) {
      const [r1x, r1z] = at(s * (hw + 0.1), -hd - 1.42);
      const [r2x, r2z] = at(s * (hw + 0.1), -hd - 0.42);
      const railTop = new THREE.BoxGeometry(0.09, 0.07, 1.05);
      railTop.rotateY(rotY);
      railTop.translate((r1x + r2x) / 2, baseY + 0.85, (r1z + r2z) / 2);
      railTop.userData.tint = TINT.darkWood;
      railTop.userData.band = BAND.wood;
      parts.push(railTop);
      for (let b = 0; b < 4; b++) {
        const t = (b + 0.5) / 4;
        const bal = new THREE.CylinderGeometry(0.03, 0.045, 0.72, 6);
        bal.translate(r1x + (r2x - r1x) * t, baseY + 0.44, r1z + (r2z - r1z) * t);
        bal.userData.tint = 0x74522f;
        bal.userData.band = BAND.wood;
        parts.push(bal);
      }
    }
    // Escalones.
    for (let i = 0; i < 2; i++) {
      const [stx, stz] = at(0, -hd - 1.9 - i * 0.42);
      const step = new THREE.BoxGeometry(1.6, 0.14, 0.45);
      step.rotateY(rotY);
      step.translate(stx, baseY + 0.05 - i * 0.14, stz);
      step.userData.tint = TINT.darkWood;
      step.userData.band = BAND.wood;
      parts.push(step);
    }
  }

  // Colisión del perímetro con hueco en la puerta (muro norte).
  wallColliders(colliders, nx1, nz1, nx2, nz2, 1);
  wallColliders(colliders, sx1, sz1, sx2, sz2);
  wallColliders(colliders, ox1, oz1, ox2, oz2);
  wallColliders(colliders, ex1, ez1, ex2, ez2);
  colliders.push({ x: chx, z: chz, r: 0.62 });

  addMerged(scene, parts);
  addWindowGlow(scene, glows, sky);

  // ---- Segundo piso opcional (casa grande) ----
  if (spec.secondFloor) {
    const parts2: THREE.BufferGeometry[] = [];
    const glows2: THREE.BufferGeometry[] = [];
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
    // Ventana al frente con barandilla de balcón.
    const [wx, wz] = at(0, -hd2 - 0.03);
    windowAt(parts2, glows2, wx, wz, rotY, y2, false);
    const railY = y2 + 0.02;
    for (let b = 0; b < 9; b++) {
      const lx = -1.4 + b * 0.35;
      const [bx, bz] = at(lx, -hd2 - 0.35);
      const bal = new THREE.CylinderGeometry(0.028, 0.04, 0.78, 6);
      bal.translate(bx, railY + 0.42, bz);
      bal.userData.tint = 0x74522f;
      bal.userData.band = BAND.wood;
      parts2.push(bal);
    }
    const [handLx, handLz] = at(-1.55, -hd2 - 0.35);
    const [handRx, handRz] = at(1.55, -hd2 - 0.35);
    const hand = new THREE.BoxGeometry(3.4, 0.08, 0.09);
    hand.rotateY(rotY);
    hand.translate((handLx + handRx) / 2, railY + 0.84, (handLz + handRz) / 2);
    hand.userData.tint = TINT.darkWood;
    hand.userData.band = BAND.wood;
    parts2.push(hand);

    gableRoof(parts2, cx, cz, y2 + h2, hw2 * 2, hd2 * 2, rotY);
    addMerged(scene, parts2);
    addWindowGlow(scene, glows2, sky);
  }
}

/**
 * Pueblo del valle: aserradero (tienda de madera), tres cabañas y una casa
 * de dos plantas con balcón, vallas y farolas que se encienden de noche.
 */
export function createStructures(
  scene: THREE.Scene,
  field: Heightfield,
  colliders: Collider[],
  sky: SkyEnv
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
      const post = new THREE.CylinderGeometry(0.17, 0.21, 3.2, 9);
      post.translate(cx + px, baseY + 1.6, cz + pz);
      post.userData.tint = TINT.log;
      post.userData.band = BAND.wood;
      parts.push(post);
      colliders.push({ x: cx + px, z: cz + pz, r: 0.42 });
    }
    for (let i = 0; i < 3; i++) {
      const pz = -3.0 + i * 3.2;
      const h = 3.4 - i * 0.3;
      const beam = new THREE.BoxGeometry(8.9, 0.18, 0.16);
      beam.translate(cx, baseY + h, cz + pz);
      beam.userData.tint = TINT.darkWood;
      beam.userData.band = BAND.wood;
      parts.push(beam);
      const panel = new THREE.BoxGeometry(9.6, 0.12, 3.6);
      panel.rotateX(Math.atan2(0.3, 3.2));
      panel.translate(cx, baseY + h - 0.15, cz + pz + 1.6);
      panel.userData.tint = TINT.roof;
      panel.userData.band = BAND.shingle;
      parts.push(panel);
    }

    // Mesa de sierra con disco y motor.
    const table = new THREE.BoxGeometry(3.0, 0.12, 1.1);
    table.translate(cx - 0.6, baseY + 1.02, cz - 0.8);
    table.userData.tint = TINT.darkWood;
    table.userData.band = BAND.wood;
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
      leg.userData.band = BAND.wood;
      parts.push(leg);
    }
    const sawDisc = new THREE.CylinderGeometry(0.42, 0.42, 0.035, 18);
    sawDisc.rotateX(Math.PI / 2);
    sawDisc.translate(cx - 0.6, baseY + 1.12, cz - 0.8);
    sawDisc.userData.tint = TINT.metal;
    sawDisc.userData.band = BAND.wood;
    parts.push(sawDisc);
    const motor = new THREE.BoxGeometry(0.6, 0.5, 0.7);
    motor.translate(cx - 0.6, baseY + 0.66, cz - 0.8);
    motor.userData.tint = 0x4a5548;
    motor.userData.band = BAND.wood;
    parts.push(motor);
    colliders.push({ x: cx - 0.6, z: cz - 0.8, r: 1.0 });

    // Pila de troncos piramidal.
    for (let row = 0; row < 3; row++) {
      for (let i = 0; i < 4 - row; i++) {
        const log = new THREE.CylinderGeometry(0.24, 0.24, 3.2, 9);
        log.rotateZ(Math.PI / 2);
        log.translate(cx + 2.0, baseY + 0.26 + row * 0.44, cz + 0.6 + i * 0.5 + row * 0.25);
        log.userData.tint = row % 2 === 0 ? 0x7a5c3c : 0x74522f;
        log.userData.band = BAND.wood;
        parts.push(log);
      }
    }
    colliders.push({ x: cx + 2.0, z: cz + 1.3, r: 1.6 });

    // Cartel del aserradero.
    const board = new THREE.BoxGeometry(2.8, 0.7, 0.08);
    board.translate(cx, baseY + 2.7, cz - 3.3);
    board.userData.tint = TINT.sign;
    board.userData.band = BAND.wood;
    parts.push(board);
    const boardTrim = new THREE.BoxGeometry(2.95, 0.82, 0.05);
    boardTrim.translate(cx, baseY + 2.7, cz - 3.32);
    boardTrim.userData.tint = TINT.darkWood;
    boardTrim.userData.band = BAND.wood;
    parts.push(boardTrim);

    addMerged(scene, parts);

    // Luz cálida de trabajo (encendida de noche).
    const lamp = new THREE.PointLight(0xffc36b, 22, 20, 2);
    lamp.position.set(cx, baseY + 3.1, cz);
    scene.add(lamp);
    sky.registerNightLight(lamp);
    const lampMat = new THREE.MeshStandardMaterial({
      color: 0xffe9b0,
      emissive: 0xffd070,
      emissiveIntensity: 2.4,
      roughness: 0.5
    });
    const lampGlow = new THREE.Mesh(new THREE.SphereGeometry(0.07, 8, 6), lampMat);
    lampGlow.position.set(cx, baseY + 3.2, cz);
    scene.add(lampGlow);
    sky.registerNightMaterial(lampMat);
  }

  // ---- Cabañas y casa grande ----
  cabin(scene, colliders, field, rng, { cx: 42, cz: 96, w: 4.6, d: 5.4, rotY: 0.35, porch: true }, sky);
  cabin(scene, colliders, field, rng, { cx: 70, cz: 136, w: 5.2, d: 4.4, rotY: -0.55, porch: true }, sky);
  cabin(scene, colliders, field, rng, { cx: 44, cz: 146, w: 4.0, d: 4.0, rotY: 0.15, porch: true }, sky);
  cabin(scene, colliders, field, rng, {
      cx: 70,
      cz: 100,
      w: 5.6,
      d: 5.0,
      rotY: -1.1,
      porch: false,
      secondFloor: true
    },
    sky
  );

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
        post.userData.band = BAND.wood;
        parts.push(post);
      }
      for (const hy of [0.45, 0.92]) {
        const rail = new THREE.BoxGeometry(len, 0.08, 0.07);
        rail.rotateY(-Math.atan2(x2 - x1, z2 - z1) + Math.PI / 2);
        const mx = (x1 + x2) / 2;
        const mz = (z1 + z2) / 2;
        rail.translate(mx, field.sampleHeight(mx, mz) + hy, mz);
        rail.userData.tint = TINT.log;
        rail.userData.band = BAND.wood;
        parts.push(rail);
      }
    };
    fence(30, 88, 24, 110);
    fence(18, 116, 18, 160);
    fence(18, 160, 52, 166);

    addMerged(scene, parts);

    // Farolas de madera con lámpara cálida (de noche iluminan de verdad).
    for (const [lx, lz] of [
      [38, 104],
      [60, 150],
      [64, 112]
    ]) {
      const y = field.sampleHeight(lx, lz);
      const lampParts: THREE.BufferGeometry[] = [];
      const pole = new THREE.CylinderGeometry(0.08, 0.11, 3.4, 8);
      pole.translate(lx, y + 1.7, lz);
      pole.userData.tint = TINT.darkWood;
      pole.userData.band = BAND.wood;
      lampParts.push(pole);
      const arm = new THREE.BoxGeometry(0.5, 0.07, 0.07);
      arm.translate(lx - 0.22, y + 3.32, lz);
      arm.userData.tint = TINT.darkWood;
      arm.userData.band = BAND.wood;
      lampParts.push(arm);
      const head = new THREE.BoxGeometry(0.42, 0.16, 0.42);
      head.translate(lx - 0.45, y + 3.26, lz);
      head.userData.tint = 0x3a3a3a;
      head.userData.band = BAND.wood;
      lampParts.push(head);
      addMerged(scene, lampParts);

      const mat = new THREE.MeshStandardMaterial({
        color: 0xffe9b0,
        emissive: 0xffd070,
        emissiveIntensity: 2.4,
        roughness: 0.5
      });
      const glow = new THREE.Mesh(new THREE.SphereGeometry(0.085, 8, 6), mat);
      glow.position.set(lx - 0.45, y + 3.14, lz);
      scene.add(glow);
      sky.registerNightMaterial(mat);
      const light = new THREE.PointLight(0xffd9a0, 13, 17, 2);
      light.position.set(lx - 0.45, y + 3.05, lz);
      scene.add(light);
      sky.registerNightLight(light);
      colliders.push({ x: lx, z: lz, r: 0.35 });
    }
  }
}
