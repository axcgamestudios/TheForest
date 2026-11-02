import * as THREE from 'three';
import { Heightfield, WORLD_SIZE, VILLAGE, PLOT } from './heightfield';
import { barkTexture, leafClusterTexture } from '../core/textures';
import { mulberry32, fbm2 } from '../core/noise';
import { shared } from '../core/uniforms';
import { growSkeleton, meshSkeleton, MeshDetail, TreeParams } from './TreeGen';

export interface Collider {
  x: number;
  z: number;
  r: number;
  /**
   * Banda de altura opcional (metros de suelo del jugador): el collider
   * sólo bloquea si los pies están dentro. Se usa en el sótano del
   * constructor para no estorbar en la planta baja.
   */
  minY?: number;
  maxY?: number;
}

/** Golpes de hacha necesarios para talar un árbol. */
export const TREE_HITS = 3;
/** Segundos hasta que un árbol talado vuelve a crecer. */
const TREE_RESPAWN = 150;

/**
 * Niveles de detalle (estilo ez-tree). Cada árbol instanciado se asigna al
 * nivel que corresponde a su distancia a la cámara; el reparto se rehace
 * cuando el jugador se desplaza.
 */
const LODS: { dist: number; detail: MeshDetail; castShadow: boolean }[] = [
  { dist: 52, detail: {}, castShadow: true },
  {
    dist: 115,
    detail: { sectionStride: 2, segmentFactor: 0.65, leafStride: 2, leafScale: 1.25 },
    castShadow: false
  },
  {
    dist: Infinity,
    detail: {
      sectionStride: 3,
      segmentFactor: 0.4,
      leafStride: 3,
      leafScale: 1.4,
      singleBillboard: true
    },
    castShadow: false
  }
];

/** Parámetros de las variantes (esqueleto recursivo estilo ez-tree). */
function deciduousParams(seed: number, rng: () => number): TreeParams {
  return {
    seed,
    levels: 3,
    length: [8.5 + rng() * 3, 3.2 + rng() * 1.2, 2.6 + rng() * 0.8, 1.6 + rng() * 0.5],
    trunkRadius: 0.3 + rng() * 0.12,
    radiusFactor: [1, 0.8, 0.68, 0.6],
    angle: [0, 48 + rng() * 14, 54 + rng() * 12, 32 + rng() * 10],
    children: [4, 3, 3],
    start: [0, 0.38 + rng() * 0.12, 0.08, 0.12],
    taper: [0.7, 0.52, 0.62, 0.72],
    gnarliness: [0.045, 0.11, 0.18, 0.11],
    sections: [7, 5, 3, 2],
    segments: [6, 5, 4, 3],
    forceUp: 0.011 + rng() * 0.005,
    leaves: {
      countPerTip: 6,
      size: 1.15 + rng() * 0.35,
      sizeVariance: 0.45,
      angleDeg: 38 + rng() * 10
    }
  };
}

function deadParams(seed: number): TreeParams {
  return {
    seed,
    levels: 3,
    length: [8.5, 2.6, 1.9, 1.2],
    trunkRadius: 0.23,
    radiusFactor: [1, 0.7, 0.62, 0.55],
    angle: [0, 52, 56, 46],
    children: [3, 3, 2],
    start: [0, 0.45, 0.18, 0.2],
    taper: [0.78, 0.68, 0.7, 0.8],
    gnarliness: [0.11, 0.28, 0.34, 0.3],
    sections: [6, 4, 3, 2],
    segments: [6, 4, 3, 3],
    forceUp: 0.005,
    leaves: null
  };
}

interface Placement {
  matrix: THREE.Matrix4;
  color: THREE.Color;
  x: number;
  z: number;
  /** Desfase del umbral LOD por árbol: evita cambios en masa al cruzarlo. */
  lodBias: number;
  /** Árbol talado: la instancia no se dibuja hasta que reaparezca. */
  hidden: boolean;
  /** Collider del tronco (se encoge al quedar el tocón). */
  collider: Collider;
  variant: number;
  scale: number;
}

interface FallAnim {
  group: THREE.Group;
  axis: THREE.Vector3;
  t: number;
  placed: boolean;
  placement: Placement;
}

interface RespawnTimer {
  placement: Placement;
  stump: THREE.Mesh;
  at: number;
}

interface VariantMeshes {
  placements: Placement[];
  trunkLods: THREE.InstancedMesh[];
  foliageLods: (THREE.InstancedMesh | null)[];
}

/** Información de un árbol talado (para dar madera y avisos). */
export interface FellEvent {
  x: number;
  z: number;
  wood: number;
}

export interface ForestAPI {
  group: THREE.Group;
  colliders: Collider[];
  update: (camPos: THREE.Vector3, dt?: number, t?: number) => void;
  /** Árbol vivo más cercano a un punto (para apuntar con el hacha). */
  nearestTree: (p: THREE.Vector3, maxDist: number) => { placement: Placement; dist: number } | null;
  /** Tala un árbol concreto: animación de caída + tocón + reprogramado. */
  fellTree: (placement: Placement) => void;
  /** Eventos de caída terminada que el Engine drena. */
  fellEvents: FellEvent[];
}

/** Placement expuesto (Chopping guarda vida por árbol). */
export type { Placement as TreePlacement };

/**
 * Bosque procedural instanciado con LOD dinámico por distancia.
 */
export function createForest(
  field: Heightfield,
  scene: THREE.Scene
): ForestAPI {
  const group = new THREE.Group();
  const colliders: Collider[] = [];
  const rng = mulberry32(5150);

  const bark = new THREE.MeshStandardMaterial({
    map: barkTexture(),
    roughness: 0.92,
    metalness: 0
  });
  const deadBark = new THREE.MeshStandardMaterial({
    map: barkTexture(),
    color: 0x9a9186,
    roughness: 0.95,
    metalness: 0
  });
  const leaves = new THREE.MeshStandardMaterial({
    map: leafClusterTexture(),
    alphaTest: 0.4,
    side: THREE.DoubleSide,
    roughness: 0.85,
    metalness: 0
  });

  // Balanceo suave de las copas con el viento; las hojas se agitan más en
  // la punta (uv.y) como en ez-tree.
  leaves.onBeforeCompile = (shader) => {
    shader.uniforms.uTime = shared.uTime;
    shader.vertexShader = shader.vertexShader
      .replace(
        '#include <common>',
        `#include <common>
        uniform float uTime;`
      )
      .replace(
        '#include <begin_vertex>',
        `#include <begin_vertex>
        {
          #ifdef USE_INSTANCING
            vec3 fIp = instanceMatrix[3].xyz;
          #else
            vec3 fIp = vec3(0.0);
          #endif
          float fPh = fIp.x * 0.31 + fIp.z * 0.27;
          float fSw = sin(uTime * 1.05 + fPh) + 0.5 * sin(uTime * 2.3 + fPh * 1.7);
          float fAmp = 0.06 * smoothstep(1.5, 7.0, transformed.y);
          transformed.x += fSw * fAmp * 0.9;
          transformed.z += fSw * fAmp * 0.45;
          transformed.x += sin(uTime * 3.1 + fPh + position.y * 2.1) * 0.02 * (0.4 + 0.6 * uv.y);
        }`
      );
    shader.fragmentShader = shader.fragmentShader.replace(
      '#include <emissivemap_fragment>',
      `#include <emissivemap_fragment>
      totalEmissiveRadiance += diffuseColor.rgb * 0.12;`
    );
  };

  // Variantes: 3 frondosos + 1 seco. Un esqueleto por variante, mallado a
  // cada nivel de detalle.
  const variantGeos: {
    trunkRadius: number;
    lods: { trunk: THREE.BufferGeometry; leaves: THREE.BufferGeometry | null }[];
  }[] = [];

  for (let v = 0; v < 3; v++) {
    const vrng = mulberry32(2000 + v * 517);
    const params = deciduousParams(3000 + v * 131, vrng);
    const skeleton = growSkeleton(params);
    variantGeos.push({
      trunkRadius: params.trunkRadius,
      lods: LODS.map((l) => meshSkeleton(skeleton, l.detail))
    });
  }
  {
    const params = deadParams(4242);
    const skeleton = growSkeleton(params);
    variantGeos.push({
      trunkRadius: params.trunkRadius,
      lods: LODS.map((l) => meshSkeleton(skeleton, l.detail))
    });
  }

  // --- Dispersión ---
  const placedXZ: [number, number, number][] = []; // x, z, minSep
  const byVariant: Placement[][] = [[], [], [], []];

  const q = new THREE.Quaternion();
  const up = new THREE.Vector3(0, 1, 0);

  const tryPlace = (x: number, z: number, minSep: number): boolean => {
    const margin = WORLD_SIZE / 2 - 15;
    if (Math.abs(x) > margin || Math.abs(z) > margin) return false;
    const h = field.sampleHeight(x, z);
    if (h > 72) return false;
    if (field.sampleSlope(x, z) > 0.5) return false;
    if (field.distToPath(x, z) < 5) return false;
    if (field.sampleMask(x, z) < 0.2) return false;
    // Claro alrededor del punto de aparición.
    const dsx = x - 0;
    const dsz = z - 140;
    if (dsx * dsx + dsz * dsz < 15 * 15) return false;
    // Claro del pueblo (cabañas, aserradero y coches).
    const dvx = x - VILLAGE.x;
    const dvz = z - VILLAGE.z;
    if (dvx * dvx + dvz * dvz < VILLAGE.r * VILLAGE.r) return false;
    // Parcela del jugador (la casa se construye aquí).
    if (
      Math.abs(x - PLOT.x) < PLOT.half + 3 &&
      Math.abs(z - PLOT.z) < PLOT.half + 3
    ) {
      return false;
    }
    for (const [px, pz, ps] of placedXZ) {
      const dx = x - px;
      const dz = z - pz;
      const s = Math.max(minSep, ps);
      if (dx * dx + dz * dz < s * s) return false;
    }
    return true;
  };

  const place = (variant: number, x: number, z: number, scale: number, minSep: number) => {
    const y = field.sampleHeight(x, z) - 0.15;
    q.setFromAxisAngle(up, rng() * Math.PI * 2);
    const matrix = new THREE.Matrix4().compose(
      new THREE.Vector3(x, y, z),
      q,
      new THREE.Vector3(scale, scale, scale)
    );
    const w = rng();
    const color = new THREE.Color(
      0.85 + w * 0.3,
      0.9 + rng() * 0.18,
      0.8 + rng() * 0.25
    );
    const tr = variantGeos[variant].trunkRadius;
    const collider: Collider = { x, z, r: Math.max(0.4, tr * scale * 1.4) };
    byVariant[variant].push({
      matrix,
      color,
      x,
      z,
      lodBias: (rng() - 0.5) * 14,
      hidden: false,
      collider,
      variant,
      scale
    });
    placedXZ.push([x, z, minSep]);
    colliders.push(collider);
  };

  // Árboles "héroe" que replican la composición de la referencia.
  place(0, -22, 102, 1.65, 6); // gran árbol a la izquierda
  place(1, 26, 52, 1.45, 6); // árbol medio a la derecha
  place(3, -4, 62, 1.15, 6); // árbol seco al centro
  place(2, 17, 118, 1.35, 6); // árbol cercano a la derecha del sendero

  // Dispersión general: más denso ladera arriba y por parches de ruido.
  let attempts = 0;
  let placed = 0;
  const target = 150;
  while (placed < target && attempts < 6000) {
    attempts++;
    const x = (rng() * 2 - 1) * (WORLD_SIZE / 2 - 20);
    const z = (rng() * 2 - 1) * (WORLD_SIZE / 2 - 20);

    const density = fbm2(x * 0.008 + 50, z * 0.008 + 20, 3, 91);
    const upslope = THREE.MathUtils.clamp((170 - z) / 300, 0.25, 1);
    // En lo alto del cerro los árboles ralean (matorral disperso).
    const hh = field.sampleHeight(x, z);
    const highTaper = 1 - THREE.MathUtils.clamp((hh - 28) / 40, 0, 1) * 0.75;
    if (rng() > density * 1.4 * upslope * highTaper) continue;
    if (!tryPlace(x, z, 7)) continue;

    const isDead = rng() < 0.14;
    const variant = isDead ? 3 : Math.floor(rng() * 3);
    let scale = 0.8 + rng() * 0.75;
    if (hh > 35) scale *= 0.65;
    place(variant, x, z, scale, 7);
    placed++;
  }

  // --- Un InstancedMesh por variante y nivel; el reparto se hace en update ---
  const variants: VariantMeshes[] = [];
  for (let v = 0; v < 4; v++) {
    const list = byVariant[v];
    const geos = variantGeos[v];
    const trunkMat = v < 3 ? bark : deadBark;
    const trunkLods: THREE.InstancedMesh[] = [];
    const foliageLods: (THREE.InstancedMesh | null)[] = [];

    for (let l = 0; l < LODS.length; l++) {
      const trunkMesh = new THREE.InstancedMesh(geos.lods[l].trunk, trunkMat, list.length);
      trunkMesh.castShadow = LODS[l].castShadow;
      trunkMesh.receiveShadow = true;
      trunkMesh.frustumCulled = false;
      trunkMesh.count = 0;
      group.add(trunkMesh);
      trunkLods.push(trunkMesh);

      if (geos.lods[l].leaves) {
        const foliageMesh = new THREE.InstancedMesh(geos.lods[l].leaves!, leaves, list.length);
        foliageMesh.castShadow = LODS[l].castShadow;
        foliageMesh.receiveShadow = false;
        foliageMesh.frustumCulled = false;
        // Reservar el buffer de color de instancia desde el inicio para que
        // el programa del material no cambie al primer reparto.
        for (let i = 0; i < list.length; i++) foliageMesh.setColorAt(i, list[i].color);
        foliageMesh.count = 0;
        group.add(foliageMesh);
        foliageLods.push(foliageMesh);
      } else {
        foliageLods.push(null);
      }
    }
    variants.push({ placements: list, trunkLods, foliageLods });
  }

  // Reparto de instancias por distancia; se rehace al desplazarse el jugador.
  const lastCam = new THREE.Vector3(Infinity, 0, Infinity);
  const falls: FallAnim[] = [];
  const respawns: RespawnTimer[] = [];
  const fellEvents: FellEvent[] = [];
  let worldT = 0;

  const redistribute = (camPos: THREE.Vector3): void => {
    for (const variant of variants) {
      const counts = [0, 0, 0];
      for (const p of variant.placements) {
        if (p.hidden) continue;
        const d = Math.hypot(p.x - camPos.x, p.z - camPos.z) + p.lodBias;
        const level = d < LODS[0].dist ? 0 : d < LODS[1].dist ? 1 : 2;
        const i = counts[level]++;
        variant.trunkLods[level].setMatrixAt(i, p.matrix);
        const fol = variant.foliageLods[level];
        if (fol) {
          fol.setMatrixAt(i, p.matrix);
          fol.setColorAt(i, p.color);
        }
      }
      for (let l = 0; l < LODS.length; l++) {
        const trunk = variant.trunkLods[l];
        trunk.count = counts[l];
        trunk.instanceMatrix.needsUpdate = true;
        const fol = variant.foliageLods[l];
        if (fol) {
          fol.count = counts[l];
          fol.instanceMatrix.needsUpdate = true;
          if (fol.instanceColor) fol.instanceColor.needsUpdate = true;
        }
      }
    }
  };

  const update = (camPos: THREE.Vector3, dt = 0, t = 0): void => {
    worldT = t;
    if (camPos.distanceToSquared(lastCam) >= 36) {
      lastCam.copy(camPos);
      redistribute(camPos);
    }

    if (dt <= 0) return;

    // --- Caídas en curso: aceleran, golpean el suelo y dejan tocón ---
    for (let i = falls.length - 1; i >= 0; i--) {
      const f = falls[i];
      f.t += dt / 1.35;
      const k = Math.min(f.t, 1);
      // ease-in cuadrático: el tronco se acelera al caer.
      const ang = (k * k) * (Math.PI / 2 - 0.12);
      f.group.setRotationFromAxisAngle(f.axis, ang);
      if (!f.placed && f.t >= 0.94) {
        f.placed = true;
        // Tocón que queda en el sitio.
        const stump = new THREE.Mesh(
          new THREE.CylinderGeometry(0.32 * f.placement.scale, 0.4 * f.placement.scale, 0.55, 9),
          f.placement.variant < 3 ? bark : deadBark
        );
        stump.position.set(
          f.placement.x,
          field.sampleHeight(f.placement.x, f.placement.z) + 0.18,
          f.placement.z
        );
        stump.castShadow = true;
        stump.receiveShadow = true;
        scene.add(stump);
        f.placement.collider.r = 0.35;
        const wood = 4 + Math.floor(Math.random() * 3);
        fellEvents.push({ x: f.placement.x, z: f.placement.z, wood });
        respawns.push({ placement: f.placement, stump, at: worldT + TREE_RESPAWN });
      }
      if (f.t >= 1) {
        scene.remove(f.group);
        falls.splice(i, 1);
      }
    }

    // --- Árboles que reaparecen ---
    for (let i = respawns.length - 1; i >= 0; i--) {
      const r = respawns[i];
      if (worldT < r.at) continue;
      r.placement.hidden = false;
      r.placement.collider.r = Math.max(0.4, variantGeos[r.placement.variant].trunkRadius * r.placement.scale * 1.4);
      scene.remove(r.stump);
      r.stump.geometry.dispose();
      respawns.splice(i, 1);
      redistribute(lastCam);
    }
  };

  /** Árbol vivo más cercano (para apuntar con el hacha). */
  const nearestTree = (
    p: THREE.Vector3,
    maxDist: number
  ): { placement: Placement; dist: number } | null => {
    let best: { placement: Placement; dist: number } | null = null;
    for (const variant of variants) {
      for (const pl of variant.placements) {
        if (pl.hidden) continue;
        const d = Math.hypot(pl.x - p.x, pl.z - p.z);
        if (d < maxDist && (!best || d < best.dist)) {
          best = { placement: pl, dist: d };
        }
      }
    }
    return best;
  };

  /** Tala: clona la geometría LOD0 del árbol y lo anima cayendo. */
  const fellTree = (placement: Placement): void => {
    if (placement.hidden) return;
    placement.hidden = true;
    redistribute(lastCam);

    const geos = variantGeos[placement.variant];
    const g = new THREE.Group();
    const pos = new THREE.Vector3();
    const quat = new THREE.Quaternion();
    const scl = new THREE.Vector3();
    placement.matrix.decompose(pos, quat, scl);
    g.position.copy(pos);
    g.quaternion.copy(quat);
    g.scale.copy(scl);

    const trunkMesh = new THREE.Mesh(geos.lods[0].trunk, placement.variant < 3 ? bark : deadBark);
    trunkMesh.castShadow = true;
    g.add(trunkMesh);
    if (geos.lods[0].leaves) {
      const leafMesh = new THREE.Mesh(geos.lods[0].leaves!, leaves);
      g.add(leafMesh);
    }

    // Eje de caída horizontal, alejándose del jugador no hace falta:
    // basta un rumbo aleatorio estable.
    const dir = Math.random() * Math.PI * 2;
    const axis = new THREE.Vector3(Math.cos(dir), 0, -Math.sin(dir)).normalize();

    scene.add(g);
    falls.push({ group: g, axis, t: 0, placed: false, placement });
  };

  scene.add(group);
  return { group, colliders, update, nearestTree, fellTree, fellEvents };
}

/** Fusión manual de geometrías indexadas con position/normal/uv. */
export function mergeGeos(list: THREE.BufferGeometry[]): THREE.BufferGeometry {
  const positions: number[] = [];
  const normals: number[] = [];
  const uvs: number[] = [];
  const indices: number[] = [];
  let offset = 0;

  for (const g of list) {
    const p = g.attributes.position;
    const n = g.attributes.normal;
    const uv = g.attributes.uv as THREE.BufferAttribute | undefined;
    for (let i = 0; i < p.count; i++) {
      positions.push(p.getX(i), p.getY(i), p.getZ(i));
      normals.push(n.getX(i), n.getY(i), n.getZ(i));
      if (uv) uvs.push(uv.getX(i), uv.getY(i));
      else uvs.push(0, 0);
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
  geo.setIndex(indices);
  return geo;
}
