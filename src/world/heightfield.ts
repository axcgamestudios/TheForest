import * as THREE from 'three';
import { fbm2 } from '../core/noise';

/** Tamaño del mundo en metros (centrado en el origen). */
export const WORLD_SIZE = 600;
/** Resolución del campo de alturas (muestras por lado). */
export const FIELD_RES = 512;

/** Punto de aparición del jugador. */
export const SPAWN = new THREE.Vector3(0, 0, 140);

/** Sendero de tierra que serpentea ladera arriba hasta la cumbre (polilínea en XZ). */
const PATH: [number, number][] = [
  [14, 210], [6, 170], [0, 140], [8, 105], [-6, 70],
  [10, 30], [-4, -15], [-22, -60], [-38, -105],
  [-48, -128], [-42, -146], [-58, -160], [-70, -170]
];

/** Cumbre del cerro (torre de telecomunicaciones). */
export const SUMMIT = { x: -70, z: -170 };

/** Claro del pueblo del valle: los árboles evitan esta zona. */
export const VILLAGE = { x: 56, z: 122, r: 40 };

/** Parcela del jugador para construir su casa (16 × 16 m, sin árboles). */
export const PLOT = { x: 28, z: 124, half: 8 };

/** Aserradero: punto de venta de madera. */
export const SAWMILL = { x: 52, z: 118, r: 6 };

const HALF = WORLD_SIZE / 2;

/** Altura analítica del terreno en metros. */
export function terrainHeight(x: number, z: number): number {
  // Pendiente base: la ladera sube hacia -Z (norte).
  let h = (140 - z) * 0.055;

  // Colinas amplias y ondulación media.
  h += 10 * (fbm2(x * 0.004, z * 0.004, 4, 11) - 0.5) * 2;
  h += 3.0 * (fbm2(x * 0.018, z * 0.018, 4, 23) - 0.5) * 2;
  h += 0.5 * (fbm2(x * 0.09, z * 0.09, 3, 37) - 0.5) * 2;

  // Cerro principal: loma redondeada y herbosa (no pico alpino).
  h += hill(x, z, SUMMIT.x, SUMMIT.z, 178, 62, 1.25);
  // Hombro/estribación por donde sube el sendero (forma la cresta).
  h += hill(x, z, -18, -118, 110, 28, 1.5);
  // Loma menor a la derecha.
  h += hill(x, z, 150, -95, 75, 16, 1.6);

  // Casquete de la cumbre: garantiza que el Marcador corone el punto
  // más alto del cerro.
  const dsx = x - SUMMIT.x;
  const dsz = z - SUMMIT.z;
  const dSummit = Math.sqrt(dsx * dsx + dsz * dsz);
  if (dSummit < 14) {
    const t = 1 - dSummit / 14;
    h += 4.2 * t * t * (3 - 2 * t);
  }

  // Cordón de colinas boscosas de fondo en el borde del mundo.
  const rr = Math.sqrt(x * x + z * z);
  if (rr > 215) {
    const t = Math.min(1, (rr - 215) / 80);
    h += 26 * t * t * (3 - 2 * t) * (0.45 + 0.9 * fbm2(x * 0.007 + 9, z * 0.007 + 4, 3, 501));
  }

  return h;
}

function hill(x: number, z: number, cx: number, cz: number, radius: number, height: number, sharp: number): number {
  const dx = x - cx;
  const dz = z - cz;
  const d = Math.sqrt(dx * dx + dz * dz);
  if (d >= radius) return 0;
  const t = 1 - d / radius;
  // Ondulación suave, sin crestas afiladas.
  const ridge = 0.9 + 0.5 * (fbm2(x * 0.012, z * 0.012, 3, 77) - 0.5);
  return height * Math.pow(t, sharp) * ridge;
}

function distToPath(x: number, z: number): number {
  let best = Infinity;
  for (let i = 0; i < PATH.length - 1; i++) {
    const [ax, az] = PATH[i];
    const [bx, bz] = PATH[i + 1];
    const abx = bx - ax;
    const abz = bz - az;
    const len2 = abx * abx + abz * abz;
    let t = ((x - ax) * abx + (z - az) * abz) / len2;
    t = Math.max(0, Math.min(1, t));
    const px = ax + abx * t;
    const pz = az + abz * t;
    const dx = x - px;
    const dz = z - pz;
    const d = dx * dx + dz * dz;
    if (d < best) best = d;
  }
  return Math.sqrt(best);
}

/**
 * Campo de alturas precalculado + máscara de pasto.
 * La máscara vale 1 donde crece pasto y cae a 0 en sendero, roca y pendientes.
 */
export class Heightfield {
  readonly heights: Float32Array;
  readonly mask: Float32Array;
  readonly texture: THREE.DataTexture;

  constructor() {
    const n = FIELD_RES;
    this.heights = new Float32Array(n * n);
    this.mask = new Float32Array(n * n);

    const step = WORLD_SIZE / (n - 1);
    for (let iz = 0; iz < n; iz++) {
      const z = -HALF + iz * step;
      for (let ix = 0; ix < n; ix++) {
        const x = -HALF + ix * step;
        this.heights[iz * n + ix] = terrainHeight(x, z);
      }
    }

    // Máscara: pendiente (diferencias finitas), altura de roca y sendero.
    for (let iz = 0; iz < n; iz++) {
      const z = -HALF + iz * step;
      for (let ix = 0; ix < n; ix++) {
        const x = -HALF + ix * step;
        const i = iz * n + ix;
        const hx0 = this.heights[iz * n + Math.max(0, ix - 1)];
        const hx1 = this.heights[iz * n + Math.min(n - 1, ix + 1)];
        const hz0 = this.heights[Math.max(0, iz - 1) * n + ix];
        const hz1 = this.heights[Math.min(n - 1, iz + 1) * n + ix];
        const sx = (hx1 - hx0) / (2 * step);
        const sz = (hz1 - hz0) / (2 * step);
        const slope = Math.sqrt(sx * sx + sz * sz);

        const h = this.heights[i];
        let m = 1 - smooth(0.56, 0.88, slope);

        // En el cerro el pasto ralea con la altura, sin desaparecer del todo.
        m *= 1 - 0.3 * smooth(38, 70, h);

        // Calvas de tierra erosionada dispersas en la ladera.
        const ero = smooth(0.64, 0.85, fbm2(x * 0.045 + 13, z * 0.045 + 71, 3, 313)) * smooth(16, 32, h);
        m *= 1 - 0.75 * ero;

        // Sendero: angosto abajo, ancho y erosionado cuesta arriba.
        const wide = smooth(18, 45, h) * 1.5;
        const pd = distToPath(x, z);
        m *= smooth(0.7 + wide, 1.9 + wide * 2.2, pd);

        // Explanada pisoteada alrededor de la torre en la cumbre.
        const ds = Math.hypot(x - SUMMIT.x, z - SUMMIT.z);
        m *= smooth(5, 10, ds);

        this.mask[i] = m;
      }
    }

    // Textura RGBA16F: R = altura (m), G = máscara de pasto.
    const data = new Uint16Array(n * n * 4);
    for (let i = 0; i < n * n; i++) {
      data[i * 4 + 0] = THREE.DataUtils.toHalfFloat(this.heights[i]);
      data[i * 4 + 1] = THREE.DataUtils.toHalfFloat(this.mask[i]);
      data[i * 4 + 2] = 0;
      data[i * 4 + 3] = THREE.DataUtils.toHalfFloat(1);
    }
    const tex = new THREE.DataTexture(data, n, n, THREE.RGBAFormat, THREE.HalfFloatType);
    tex.magFilter = THREE.LinearFilter;
    tex.minFilter = THREE.LinearFilter;
    tex.wrapS = THREE.ClampToEdgeWrapping;
    tex.wrapT = THREE.ClampToEdgeWrapping;
    tex.needsUpdate = true;
    this.texture = tex;
  }

  /** Altura interpolada bilinealmente (para colisión del jugador, scatter, etc.). */
  sampleHeight(x: number, z: number): number {
    return this.bilinear(this.heights, x, z);
  }

  /**
   * Excava una zona rectangular del terreno (sótano de la parcela): baja
   * las muestras dentro del rect hasta una profundidad plana con borde
   * suavizado (feather), quita el pasto de la máscara y refresca la
   * textura para que el terreno, el pasto y las colisiones lo sigan.
   */
  carve(cx: number, cz: number, halfW: number, halfD: number, floorY: number, feather = 1.6): void {
    const n = FIELD_RES;
    const step = WORLD_SIZE / (n - 1);
    const x0 = Math.max(0, Math.floor((cx - halfW - feather + HALF) / step));
    const x1 = Math.min(n - 1, Math.ceil((cx + halfW + feather + HALF) / step));
    const z0 = Math.max(0, Math.floor((cz - halfD - feather + HALF) / step));
    const z1 = Math.min(n - 1, Math.ceil((cz + halfD + feather + HALF) / step));
    const data = this.texture.image.data as Uint16Array;

    for (let iz = z0; iz <= z1; iz++) {
      const z = -HALF + iz * step;
      for (let ix = x0; ix <= x1; ix++) {
        const x = -HALF + ix * step;
        const dx = Math.max(Math.abs(x - cx) - halfW, 0);
        const dz = Math.max(Math.abs(z - cz) - halfD, 0);
        const d = Math.hypot(dx, dz);
        if (d >= feather) continue;
        // 1 dentro del rect · 0 en el borde del feather.
        const t = d <= 0 ? 1 : 1 - d / feather;
        const s = t * t * (3 - 2 * t);
        const i = iz * n + ix;
        const orig = this.heights[i];
        const target = orig + (floorY - orig) * s;
        if (target < orig) this.heights[i] = target;
        // Sin pasto dentro de la excavación y su talud.
        if (s > 0.25) this.mask[i] = Math.min(this.mask[i], 1 - s);
        data[i * 4 + 0] = THREE.DataUtils.toHalfFloat(this.heights[i]);
        data[i * 4 + 1] = THREE.DataUtils.toHalfFloat(this.mask[i]);
      }
    }
    this.texture.needsUpdate = true;
  }

  /**
   * Excava una trinchera-rampa entre dos puntos (acceso al sótano): la
   * profundidad crece linealmente de 0 (entrada) a `depth` (fondo), con el
   * mismo suavizado y refresco de textura que carve().
   */
  carveRamp(
    x1: number, z1: number,
    x2: number, z2: number,
    halfW: number, depth: number, floorY: number, feather = 1.4
  ): void {
    const len = Math.hypot(x2 - x1, z2 - z1);
    if (len < 0.01) return;
    const nx = (x2 - x1) / len;
    const nz = (z2 - z1) / len;
    const pad = halfW + feather + 1;
    const minX = Math.min(x1, x2) - pad;
    const maxX = Math.max(x1, x2) + pad;
    const minZ = Math.min(z1, z2) - pad;
    const maxZ = Math.max(z1, z2) + pad;
    const n = FIELD_RES;
    const step = WORLD_SIZE / (n - 1);
    const ix0 = Math.max(0, Math.floor((minX + HALF) / step));
    const ix1 = Math.min(n - 1, Math.ceil((maxX + HALF) / step));
    const iz0 = Math.max(0, Math.floor((minZ + HALF) / step));
    const iz1 = Math.min(n - 1, Math.ceil((maxZ + HALF) / step));
    const data = this.texture.image.data as Uint16Array;

    for (let iz = iz0; iz <= iz1; iz++) {
      const z = -HALF + iz * step;
      for (let ix = ix0; ix <= ix1; ix++) {
        const x = -HALF + ix * step;
        // Proyección sobre la línea de la rampa.
        const t = THREE.MathUtils.clamp(((x - x1) * nx + (z - z1) * nz) / len, 0, 1);
        const px = x1 + (x2 - x1) * t;
        const pz = z1 + (z2 - z1) * t;
        const d = Math.hypot(x - px, z - pz);
        const lateral = Math.max(d - halfW, 0);
        if (lateral >= feather) continue;
        const lt = lateral <= 0 ? 1 : 1 - lateral / feather;
        const ls = lt * lt * (3 - 2 * lt);
        const depthHere = depth * t * ls;
        if (depthHere <= 0.001) continue;
        const i = iz * n + ix;
        const orig = this.heights[i];
        const target = Math.max(floorY, orig - depthHere);
        if (target < orig) this.heights[i] = target;
        if (depthHere > 0.5) this.mask[i] = Math.min(this.mask[i], 0.35);
        data[i * 4 + 0] = THREE.DataUtils.toHalfFloat(this.heights[i]);
        data[i * 4 + 1] = THREE.DataUtils.toHalfFloat(this.mask[i]);
      }
    }
    this.texture.needsUpdate = true;
  }

  /** Máscara de pasto interpolada (1 = pasto, 0 = tierra/roca). */
  sampleMask(x: number, z: number): number {
    return this.bilinear(this.mask, x, z);
  }

  /** Pendiente aproximada (magnitud del gradiente). */
  sampleSlope(x: number, z: number): number {
    const e = 1.2;
    const sx = (this.sampleHeight(x + e, z) - this.sampleHeight(x - e, z)) / (2 * e);
    const sz = (this.sampleHeight(x, z + e) - this.sampleHeight(x, z - e)) / (2 * e);
    return Math.sqrt(sx * sx + sz * sz);
  }

  distToPath(x: number, z: number): number {
    return distToPath(x, z);
  }

  private bilinear(arr: Float32Array, x: number, z: number): number {
    const n = FIELD_RES;
    const fx = THREE.MathUtils.clamp((x + HALF) / WORLD_SIZE, 0, 1) * (n - 1);
    const fz = THREE.MathUtils.clamp((z + HALF) / WORLD_SIZE, 0, 1) * (n - 1);
    const ix = Math.min(Math.floor(fx), n - 2);
    const iz = Math.min(Math.floor(fz), n - 2);
    const tx = fx - ix;
    const tz = fz - iz;
    const a = arr[iz * n + ix];
    const b = arr[iz * n + ix + 1];
    const c = arr[(iz + 1) * n + ix];
    const d = arr[(iz + 1) * n + ix + 1];
    return a + (b - a) * tx + (c - a) * tz + (a - b - c + d) * tx * tz;
  }
}

function smooth(a: number, b: number, t: number): number {
  const x = THREE.MathUtils.clamp((t - a) / (b - a), 0, 1);
  return x * x * (3 - 2 * x);
}
