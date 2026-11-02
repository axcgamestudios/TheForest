import * as THREE from 'three';
import { mulberry32, fbm2 } from './noise';

function makeCanvas(w: number, h: number): [HTMLCanvasElement, CanvasRenderingContext2D] {
  const c = document.createElement('canvas');
  c.width = w;
  c.height = h;
  const ctx = c.getContext('2d')!;
  return [c, ctx];
}

function toTexture(c: HTMLCanvasElement, srgb = true): THREE.CanvasTexture {
  const t = new THREE.CanvasTexture(c);
  if (srgb) t.colorSpace = THREE.SRGBColorSpace;
  t.anisotropy = 4;
  t.needsUpdate = true;
  return t;
}

/** Mata de pasto alto: abanico de hojas afiladas sobre fondo transparente. */
export function grassTuftTexture(): THREE.CanvasTexture {
  const [c, ctx] = makeCanvas(512, 512);
  const rng = mulberry32(4021);
  const W = 512;
  const H = 512;

  const blades = 34;
  for (let i = 0; i < blades; i++) {
    const bx = W * (0.5 + (rng() - 0.5) * 0.55);
    const by = H * (0.995 - rng() * 0.03);
    const lean = (rng() - 0.5) * 1.5;
    const len = H * (0.55 + rng() * 0.42);
    const width = 8 + rng() * 10;

    const tipX = bx + lean * len * 0.55;
    const tipY = by - len;
    const cpX = bx + lean * len * 0.18;
    const cpY = by - len * 0.55;

    // Gradiente: base oscura -> punta amarillenta cálida.
    const g = ctx.createLinearGradient(bx, by, tipX, tipY);
    const dry = rng();
    const baseCol = `rgb(${28 + dry * 10 | 0}, ${46 + dry * 10 | 0}, ${12 + dry * 5 | 0})`;
    const midCol = `rgb(${60 + dry * 32 | 0}, ${96 + dry * 26 | 0}, ${22 + dry * 10 | 0})`;
    const tipCol = `rgb(${118 + dry * 62 | 0}, ${140 + dry * 36 | 0}, ${44 + dry * 26 | 0})`;
    g.addColorStop(0, baseCol);
    g.addColorStop(0.55, midCol);
    g.addColorStop(1, tipCol);
    ctx.fillStyle = g;

    ctx.beginPath();
    ctx.moveTo(bx - width / 2, by);
    ctx.quadraticCurveTo(cpX - width / 2, cpY, tipX, tipY);
    ctx.quadraticCurveTo(cpX + width / 2, cpY, bx + width / 2, by);
    ctx.closePath();
    ctx.fill();
  }
  const t = toTexture(c);
  t.wrapS = THREE.ClampToEdgeWrapping;
  t.wrapT = THREE.ClampToEdgeWrapping;
  return t;
}

/** Racimo de hojas para copas de árboles (billboard con alpha). */
export function leafClusterTexture(): THREE.CanvasTexture {
  const [c, ctx] = makeCanvas(512, 512);
  const rng = mulberry32(7717);
  const cx = 256;
  const cy = 256;

  const leaves = 170;
  for (let i = 0; i < leaves; i++) {
    // Distribución con más densidad en el centro.
    const ang = rng() * Math.PI * 2;
    const rad = Math.pow(rng(), 0.6) * 215;
    const x = cx + Math.cos(ang) * rad;
    const y = cy + Math.sin(ang) * rad * 0.92;

    const hue = 82 + rng() * 26;
    const sat = 34 + rng() * 22;
    // Hojas exteriores más iluminadas, interiores en sombra.
    const edge = rad / 215;
    const light = 13 + rng() * 11 + edge * 12;
    ctx.fillStyle = `hsla(${hue}, ${sat}%, ${light}%, ${0.85 + rng() * 0.15})`;

    ctx.save();
    ctx.translate(x, y);
    ctx.rotate(rng() * Math.PI * 2);
    const lw = 12 + rng() * 15;
    const lh = 7 + rng() * 9;
    ctx.beginPath();
    ctx.ellipse(0, 0, lw, lh, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  }
  const t = toTexture(c);
  t.wrapS = THREE.ClampToEdgeWrapping;
  t.wrapT = THREE.ClampToEdgeWrapping;
  return t;
}

/** Corteza de árbol (tileable vertical). */
export function barkTexture(): THREE.CanvasTexture {
  const [c, ctx] = makeCanvas(256, 512);
  const rng = mulberry32(1379);

  ctx.fillStyle = '#4d4238';
  ctx.fillRect(0, 0, 256, 512);

  // Estrías verticales.
  for (let i = 0; i < 320; i++) {
    const x = rng() * 256;
    const y = rng() * 512;
    const len = 30 + rng() * 140;
    const w = 1.5 + rng() * 4.5;
    const shade = rng();
    const r = 45 + shade * 52;
    const g = 38 + shade * 46;
    const b = 30 + shade * 38;
    ctx.strokeStyle = `rgba(${r | 0}, ${g | 0}, ${b | 0}, ${0.35 + rng() * 0.45})`;
    ctx.lineWidth = w;
    ctx.beginPath();
    ctx.moveTo(x, y - len / 2);
    ctx.bezierCurveTo(x + (rng() - 0.5) * 10, y - len / 4, x + (rng() - 0.5) * 10, y + len / 4, x + (rng() - 0.5) * 6, y + len / 2);
    ctx.stroke();
  }
  // Grietas oscuras.
  for (let i = 0; i < 90; i++) {
    const x = rng() * 256;
    const y = rng() * 512;
    const len = 20 + rng() * 90;
    ctx.strokeStyle = `rgba(18, 14, 10, ${0.3 + rng() * 0.4})`;
    ctx.lineWidth = 1 + rng() * 2;
    ctx.beginPath();
    ctx.moveTo(x, y - len / 2);
    ctx.lineTo(x + (rng() - 0.5) * 8, y + len / 2);
    ctx.stroke();
  }
  const t = toTexture(c);
  t.wrapS = THREE.RepeatWrapping;
  t.wrapT = THREE.RepeatWrapping;
  return t;
}

/**
 * Grano de detalle para el terreno (lineal, no sRGB): ruido multi-octava +
 * moteado fino. Con MirroredRepeatWrapping tilea sin costuras visibles.
 */
export function groundDetailTexture(): THREE.CanvasTexture {
  const size = 512;
  const [c, ctx] = makeCanvas(size, size);
  const rng = mulberry32(6067);
  const img = ctx.createImageData(size, size);
  const d = img.data;

  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      let v =
        0.55 * fbm2(x * 0.028, y * 0.028, 4, 611) +
        0.30 * fbm2(x * 0.09, y * 0.09, 3, 733) +
        0.15 * fbm2(x * 0.24, y * 0.24, 2, 857);
      // Moteado: granos sueltos claros y oscuros.
      const r = rng();
      if (r < 0.015) v += 0.25;
      else if (r < 0.03) v -= 0.25;
      const g = Math.max(0, Math.min(255, Math.round((0.28 + v * 0.62) * 255)));
      const i = (y * size + x) * 4;
      d[i] = g;
      d[i + 1] = g;
      d[i + 2] = g;
      d[i + 3] = 255;
    }
  }
  ctx.putImageData(img, 0, 0);

  const t = new THREE.CanvasTexture(c);
  t.wrapS = THREE.MirroredRepeatWrapping;
  t.wrapT = THREE.MirroredRepeatWrapping;
  t.anisotropy = 8;
  t.needsUpdate = true;
  return t;
}

/**
 * Suelo de sendero pedregoso (como la foto de referencia): tierra compactada
 * con cientos de piedras incrustadas de forma irregular, gravilla y ramitas.
 * Devuelve albedo (sRGB) + mapa de altura (lineal) ALINEADOS para bump mapping.
 */
export function pathGroundTextures(): {
  albedo: THREE.CanvasTexture;
  bump: THREE.CanvasTexture;
} {
  const S = 1024;
  const [ca, a] = makeCanvas(S, S);
  const [cb, b] = makeCanvas(S, S);
  const rng = mulberry32(9182);

  // --- Base: arena/tierra compactada con grano y gravilla fina ---
  const imgA = a.createImageData(S, S);
  const imgB = b.createImageData(S, S);
  const da = imgA.data;
  const db = imgB.data;
  for (let y = 0; y < S; y++) {
    for (let x = 0; x < S; x++) {
      const n =
        0.55 * fbm2(x * 0.018, y * 0.018, 4, 921) +
        0.3 * fbm2(x * 0.065, y * 0.065, 3, 443) +
        0.15 * fbm2(x * 0.21, y * 0.21, 2, 887);
      let v = 150 + (n - 0.5) * 95 + (rng() - 0.5) * 18;
      let r = v;
      let g = v * 0.87;
      let bl = v * 0.7;
      const sp = rng();
      if (sp < 0.05) {
        // Gravilla oscura incrustada en la arena.
        const dk = 0.45 + rng() * 0.3;
        r *= dk;
        g *= dk;
        bl *= dk * 0.95;
      } else if (sp < 0.07) {
        // Granos de arena clara.
        r = Math.min(255, r * 1.35);
        g = Math.min(255, g * 1.28);
        bl = Math.min(255, bl * 1.2);
      }
      const i = (y * S + x) * 4;
      da[i] = r;
      da[i + 1] = g;
      da[i + 2] = bl;
      da[i + 3] = 255;
      const hv = 100 + (n - 0.5) * 30 + (rng() - 0.5) * 10;
      db[i] = hv;
      db[i + 1] = hv;
      db[i + 2] = hv;
      db[i + 3] = 255;
    }
  }
  a.putImageData(imgA, 0, 0);
  b.putImageData(imgB, 0, 0);

  // --- Piedras: grandes primero, pequeñas encima ---
  interface Stone {
    cx: number;
    cy: number;
    rx: number;
    ry: number;
    rot: number;
  }
  const stones: Stone[] = [];
  for (let i = 0; i < 440; i++) {
    let r = 4 + Math.pow(rng(), 2.1) * 32;
    if (rng() < 0.05) r *= 1.7;
    stones.push({
      cx: rng() * S,
      cy: rng() * S,
      rx: r,
      ry: r * (0.62 + rng() * 0.48),
      rot: rng() * Math.PI
    });
  }
  stones.sort((p, q) => q.rx - p.rx);

  for (const st of stones) {
    // Sombra de contacto bajo la piedra.
    a.save();
    a.translate(2.5, 3.5);
    blobPath(a, st, rng);
    a.fillStyle = 'rgba(25, 20, 15, 0.30)';
    a.fill();
    a.restore();

    // Cuerpo: gris azulado (algunas pardas), con gradiente sutil de luz.
    const g0 = 52 + rng() * 74;
    const warm = rng() < 0.22;
    const cr = warm ? g0 * 1.3 : g0 * (0.9 + rng() * 0.08);
    const cg = warm ? g0 * 1.06 : g0 * (0.97 + rng() * 0.06);
    const cbv = warm ? g0 * 0.76 : g0 * (1.04 + rng() * 0.1);
    const grad = a.createLinearGradient(st.cx - st.rx, st.cy - st.ry, st.cx + st.rx, st.cy + st.ry);
    grad.addColorStop(0, `rgb(${(cr * 1.22) | 0}, ${(cg * 1.22) | 0}, ${(cbv * 1.22) | 0})`);
    grad.addColorStop(1, `rgb(${(cr * 0.78) | 0}, ${(cg * 0.78) | 0}, ${(cbv * 0.78) | 0})`);
    blobPath(a, st, rng);
    a.fillStyle = grad;
    a.fill();
    a.strokeStyle = 'rgba(28, 24, 18, 0.35)';
    a.lineWidth = Math.max(1, st.rx * 0.12);
    a.stroke();

    // Motas de brillo en piedras grandes.
    if (st.rx > 11) {
      a.fillStyle = 'rgba(255, 250, 240, 0.22)';
      const nd = 2 + Math.floor(rng() * 3);
      for (let k = 0; k < nd; k++) {
        a.fillRect(
          st.cx + (rng() - 0.5) * st.rx,
          st.cy + (rng() - 0.5) * st.ry,
          1.5,
          1.5
        );
      }
    }

    // Altura: domo radial (composición "lighten" = máximo al solaparse).
    const peak = 150 + Math.min(1, st.rx / 30) * 85;
    const rg = b.createRadialGradient(st.cx, st.cy, st.rx * 0.1, st.cx, st.cy, Math.max(st.rx, st.ry));
    rg.addColorStop(0, `rgb(${peak | 0}, ${peak | 0}, ${peak | 0})`);
    rg.addColorStop(0.8, 'rgb(116, 116, 116)');
    rg.addColorStop(1, 'rgb(100, 100, 100)');
    b.globalCompositeOperation = 'lighten';
    blobPath(b, st, rng);
    b.fillStyle = rg;
    b.fill();
    b.globalCompositeOperation = 'source-over';
  }

  // --- Ramitas y pajitas secas ---
  for (let i = 0; i < 14; i++) {
    const x0 = rng() * S;
    const y0 = rng() * S;
    const len = 40 + rng() * 80;
    const ang = rng() * Math.PI * 2;
    const x1 = x0 + Math.cos(ang) * len;
    const y1 = y0 + Math.sin(ang) * len;
    const mx = (x0 + x1) / 2 + (rng() - 0.5) * 18;
    const my = (y0 + y1) / 2 + (rng() - 0.5) * 18;
    const w = 1.8 + rng() * 1.6;
    a.strokeStyle = `rgba(${(190 + rng() * 30) | 0}, ${(168 + rng() * 25) | 0}, ${(112 + rng() * 25) | 0}, 0.85)`;
    a.lineWidth = w;
    a.beginPath();
    a.moveTo(x0, y0);
    a.quadraticCurveTo(mx, my, x1, y1);
    a.stroke();
    b.globalCompositeOperation = 'lighten';
    b.strokeStyle = 'rgb(126, 126, 126)';
    b.lineWidth = w;
    b.beginPath();
    b.moveTo(x0, y0);
    b.quadraticCurveTo(mx, my, x1, y1);
    b.stroke();
    b.globalCompositeOperation = 'source-over';
  }

  const albedo = new THREE.CanvasTexture(ca);
  albedo.colorSpace = THREE.SRGBColorSpace;
  albedo.wrapS = THREE.MirroredRepeatWrapping;
  albedo.wrapT = THREE.MirroredRepeatWrapping;
  albedo.anisotropy = 8;
  albedo.needsUpdate = true;

  const bump = new THREE.CanvasTexture(cb);
  bump.wrapS = THREE.MirroredRepeatWrapping;
  bump.wrapT = THREE.MirroredRepeatWrapping;
  bump.anisotropy = 4;
  bump.needsUpdate = true;

  return { albedo, bump };
}

/** Contorno irregular de piedra (blob con vértices perturbados y curvas suaves). */
function blobPath(
  ctx: CanvasRenderingContext2D,
  st: { cx: number; cy: number; rx: number; ry: number; rot: number },
  rng: () => number
): void {
  const k = 9;
  const pts: [number, number][] = [];
  for (let i = 0; i < k; i++) {
    const a2 = (i / k) * Math.PI * 2;
    const wob = 1 + (rng() - 0.5) * 0.4;
    const px = Math.cos(a2) * st.rx * wob;
    const py = Math.sin(a2) * st.ry * wob;
    const xr = px * Math.cos(st.rot) - py * Math.sin(st.rot);
    const yr = px * Math.sin(st.rot) + py * Math.cos(st.rot);
    pts.push([st.cx + xr, st.cy + yr]);
  }
  ctx.beginPath();
  for (let i = 0; i <= k; i++) {
    const [x0, y0] = pts[i % k];
    const [x1, y1] = pts[(i + 1) % k];
    const mx = (x0 + x1) / 2;
    const my = (y0 + y1) / 2;
    if (i === 0) ctx.moveTo(mx, my);
    else ctx.quadraticCurveTo(x0, y0, mx, my);
  }
  ctx.closePath();
}

/**
 * Glifos alienígenas para el Marcador (emissive map): trazos angulares
 * rojo-naranja sobre negro, en bandas verticales, con venas tenues.
 */
export function markerGlyphTexture(): THREE.CanvasTexture {
  const [c, ctx] = makeCanvas(256, 512);
  const rng = mulberry32(66613);

  ctx.fillStyle = '#000000';
  ctx.fillRect(0, 0, 256, 512);

  // Venas largas y tenues.
  for (let i = 0; i < 7; i++) {
    const x0 = rng() * 256;
    ctx.strokeStyle = `rgba(180, 30, 15, ${0.18 + rng() * 0.15})`;
    ctx.lineWidth = 1 + rng() * 1.5;
    ctx.beginPath();
    ctx.moveTo(x0, 0);
    let x = x0;
    for (let y = 0; y <= 512; y += 32) {
      x += (rng() - 0.5) * 26;
      ctx.lineTo(x, y);
    }
    ctx.stroke();
  }

  // Glifos: símbolos angulares en columnas.
  const cols = [36, 92, 158, 220];
  for (const cx of cols) {
    let y = 14 + rng() * 30;
    while (y < 492) {
      const bright = rng() < 0.25;
      const a = bright ? 0.95 : 0.55 + rng() * 0.3;
      ctx.strokeStyle = bright
        ? `rgba(255, 120, 60, ${a})`
        : `rgba(235, 55, 25, ${a})`;
      ctx.lineWidth = bright ? 2.5 : 1.8;
      const s = 7 + rng() * 9;
      const segs = 2 + Math.floor(rng() * 3);
      ctx.beginPath();
      let px = cx + (rng() - 0.5) * 14;
      let py = y;
      ctx.moveTo(px, py);
      for (let k = 0; k < segs; k++) {
        const dir = Math.floor(rng() * 4);
        px += dir === 0 ? s : dir === 1 ? -s : (rng() - 0.5) * s;
        py += dir >= 2 ? s : s * 0.4;
        ctx.lineTo(px, py);
      }
      ctx.stroke();
      // Punto brillante ocasional.
      if (rng() < 0.3) {
        ctx.fillStyle = 'rgba(255, 160, 90, 0.9)';
        ctx.fillRect(cx + (rng() - 0.5) * 20, y + s / 2, 2.5, 2.5);
      }
      y += s + 10 + rng() * 22;
    }
  }

  const t = toTexture(c);
  t.wrapS = THREE.RepeatWrapping;
  t.wrapT = THREE.RepeatWrapping;
  return t;
}

/**
 * Bandas horizontales talladas con glifos para el Marcador (albedo, mate):
 * 8 bandas por tile, separadores oscuros y filas de símbolos grabados.
 */
export function markerBandTexture(): THREE.CanvasTexture {
  const [c, ctx] = makeCanvas(256, 512);
  const rng = mulberry32(60443);
  const BANDS = 8;
  const bh = 512 / BANDS;

  for (let b = 0; b < BANDS; b++) {
    const y0 = b * bh;
    // Cuerpo de la banda con leve gradiente (luz en el borde superior).
    const g = ctx.createLinearGradient(0, y0, 0, y0 + bh);
    g.addColorStop(0, '#2e2e33');
    g.addColorStop(0.12, '#242428');
    g.addColorStop(1, '#1d1d21');
    ctx.fillStyle = g;
    ctx.fillRect(0, y0, 256, bh);
    // Separador profundo.
    ctx.fillStyle = '#0e0e11';
    ctx.fillRect(0, y0 + bh - 4, 256, 4);

    // Fila de glifos grabados.
    let x = 6 + rng() * 10;
    const cy = y0 + bh * 0.52;
    while (x < 240) {
      const s = 5 + rng() * 7;
      ctx.strokeStyle = `rgba(88, 92, 98, ${0.55 + rng() * 0.35})`;
      ctx.lineWidth = 1.8;
      const segs = 2 + Math.floor(rng() * 3);
      ctx.beginPath();
      let px = x;
      let py = cy + (rng() - 0.5) * 8;
      ctx.moveTo(px, py);
      for (let k = 0; k < segs; k++) {
        const dir = Math.floor(rng() * 4);
        px += dir === 0 ? s : dir === 1 ? -s * 0.6 : s * 0.5;
        py += dir >= 2 ? (rng() < 0.5 ? s : -s) * 0.6 : s * 0.35;
        ctx.lineTo(px, py);
      }
      ctx.stroke();
      if (rng() < 0.2) {
        ctx.fillStyle = 'rgba(96, 100, 106, 0.7)';
        ctx.beginPath();
        ctx.arc(x + s, cy, 1.6, 0, Math.PI * 2);
        ctx.fill();
      }
      x += s + 8 + rng() * 12;
    }
  }

  const t = toTexture(c);
  t.wrapS = THREE.RepeatWrapping;
  t.wrapT = THREE.RepeatWrapping;
  return t;
}

/** Punto suave para partículas (polen/polvo). */
export function softDotTexture(): THREE.CanvasTexture {
  const [c, ctx] = makeCanvas(64, 64);
  const g = ctx.createRadialGradient(32, 32, 0, 32, 32, 30);
  g.addColorStop(0, 'rgba(255, 250, 225, 1)');
  g.addColorStop(0.4, 'rgba(255, 248, 215, 0.55)');
  g.addColorStop(1, 'rgba(255, 245, 200, 0)');
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, 64, 64);
  return toTexture(c);
}

/* ==========================================================================
 *  Texturas para coches, manos, hacha y cabañas (todo procedural)
 * ========================================================================== */

/** Pintura de carrocería: color base con nubes de tono y motas metálicas. */
export function carPaintTexture(color: number): THREE.CanvasTexture {
  const [c, ctx] = makeCanvas(256, 256);
  const base = new THREE.Color(color);
  const r = Math.round(base.r * 255);
  const g = Math.round(base.g * 255);
  const b = Math.round(base.b * 255);
  ctx.fillStyle = `rgb(${r},${g},${b})`;
  ctx.fillRect(0, 0, 256, 256);
  const rng = mulberry32(1337);
  // Nubes de tono (chapa ondulada).
  for (let i = 0; i < 26; i++) {
    const y = rng() * 256;
    const a = 0.02 + rng() * 0.04;
    const light = rng() > 0.5;
    ctx.strokeStyle = light
      ? `rgba(255,255,255,${a})`
      : `rgba(0,0,0,${a})`;
    ctx.lineWidth = 6 + rng() * 20;
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.bezierCurveTo(80, y + rng() * 14 - 7, 180, y + rng() * 14 - 7, 256, y);
    ctx.stroke();
  }
  // Motas metálicas.
  for (let i = 0; i < 900; i++) {
    const v = rng() > 0.5 ? 255 : 40;
    ctx.fillStyle = `rgba(${v},${v},${v},0.06)`;
    ctx.fillRect(rng() * 256, rng() * 256, 1.3, 1.3);
  }
  return toTexture(c);
}

/** Mapa de rugosidad de la pintura: brillo con grano fino (no sRGB). */
export function carPaintRough(): THREE.CanvasTexture {
  const [c, ctx] = makeCanvas(128, 128);
  const rng = mulberry32(4242);
  ctx.fillStyle = 'rgb(86,86,86)';
  ctx.fillRect(0, 0, 128, 128);
  for (let i = 0; i < 700; i++) {
    const v = 60 + Math.floor(rng() * 60);
    ctx.fillStyle = `rgba(${v},${v},${v},0.5)`;
    ctx.fillRect(rng() * 128, rng() * 128, 1, 1);
  }
  const t = toTexture(c, false);
  t.wrapS = THREE.RepeatWrapping;
  t.wrapT = THREE.RepeatWrapping;
  return t;
}

/** Neumático: goma oscura con ranuras diagonales y banda lateral. */
export function tireTreadTexture(): THREE.CanvasTexture {
  const [c, ctx] = makeCanvas(128, 128);
  ctx.fillStyle = '#191a1c';
  ctx.fillRect(0, 0, 128, 128);
  // Ranuras diagonales del rodadura.
  ctx.strokeStyle = '#0a0a0b';
  ctx.lineWidth = 7;
  for (let x = -128; x < 256; x += 18) {
    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x + 64, 128);
    ctx.stroke();
  }
  // Bloques entre ranuras (brillo sutil).
  ctx.strokeStyle = 'rgba(255,255,255,0.05)';
  ctx.lineWidth = 4;
  for (let x = -128; x < 256; x += 18) {
    ctx.beginPath();
    ctx.moveTo(x + 9, 0);
    ctx.lineTo(x + 73, 128);
    ctx.stroke();
  }
  const t = toTexture(c);
  t.wrapS = THREE.RepeatWrapping;
  t.wrapT = THREE.RepeatWrapping;
  t.repeat.set(3, 1);
  return t;
}

/**
 * Piel realista y cálida para las manos: tono saturado (no pálido), poros,
 * moteado, venas tenues, pliegues de nudillos y bordes sonrojados.
 */
export function skinTexture(): THREE.CanvasTexture {
  const [c, ctx] = makeCanvas(512, 512);
  const rng = mulberry32(97531);
  // Base cálida y saturada con gradiente radial (centro más claro, bordes
  // más morenos: combate el aspecto "pálido" a plena luz del día).
  const g = ctx.createRadialGradient(256, 240, 60, 256, 256, 320);
  g.addColorStop(0, '#c08463');
  g.addColorStop(0.55, '#b0714f');
  g.addColorStop(1, '#93543a');
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, 512, 512);

  // Moteado de la piel (manchas rojizas y amarronadas más presentes).
  for (let i = 0; i < 130; i++) {
    const x = rng() * 512;
    const y = rng() * 512;
    const r = 14 + rng() * 42;
    const warm = rng();
    const col = warm > 0.6
      ? `rgba(178,84,62,${0.05 + rng() * 0.08})`
      : warm > 0.25
        ? `rgba(134,70,46,${0.05 + rng() * 0.08})`
        : `rgba(214,140,102,${0.04 + rng() * 0.07})`;
    const rg = ctx.createRadialGradient(x, y, 0, x, y, r);
    rg.addColorStop(0, col);
    rg.addColorStop(1, 'rgba(0,0,0,0)');
    ctx.fillStyle = rg;
    ctx.fillRect(x - r, y - r, r * 2, r * 2);
  }

  // Venas tenues verdosas-azuladas.
  ctx.lineWidth = 1.6;
  for (let i = 0; i < 10; i++) {
    ctx.strokeStyle = `rgba(88,112,124,${0.06 + rng() * 0.06})`;
    ctx.beginPath();
    let x = rng() * 512;
    let y = rng() * 512;
    ctx.moveTo(x, y);
    for (let s = 0; s < 4; s++) {
      x += (rng() - 0.5) * 90;
      y += rng() * 60;
      ctx.quadraticCurveTo(x + 12, y - 18, x, y);
    }
    ctx.stroke();
  }

  // Poros (puntos finos oscuros y claros, más marcados).
  for (let i = 0; i < 4600; i++) {
    const dark = rng() > 0.35;
    ctx.fillStyle = dark
      ? `rgba(88,44,30,${0.07 + rng() * 0.1})`
      : `rgba(232,172,138,${0.05 + rng() * 0.07})`;
    ctx.fillRect(rng() * 512, rng() * 512, 1.4, 1.4);
  }

  // Vello fino (trazos cortos semitransparentes).
  ctx.lineWidth = 1;
  for (let i = 0; i < 700; i++) {
    const x = rng() * 512;
    const y = rng() * 512;
    const a = rng() * Math.PI * 2;
    ctx.strokeStyle = `rgba(96,58,38,${0.06 + rng() * 0.09})`;
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x + Math.cos(a) * 5, y + Math.sin(a) * 5);
    ctx.stroke();
  }

  // Pliegues de nudillos: trazos curvos en pares, más contrastados.
  for (let i = 0; i < 46; i++) {
    const x = rng() * 512;
    const y = rng() * 512;
    ctx.strokeStyle = `rgba(104,52,36,${0.14 + rng() * 0.12})`;
    ctx.lineWidth = 1.6;
    ctx.beginPath();
    ctx.arc(x, y, 5 + rng() * 5, 0.15 * Math.PI, 0.85 * Math.PI);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(x + 2, y + 8 + rng() * 4, 4 + rng() * 4, 0.1 * Math.PI, 0.9 * Math.PI);
    ctx.stroke();
  }

  // Sonrojo en los bordes (nudillos y falanges) más presente.
  const blush = 'rgba(196,80,58,0.10)';
  ctx.fillStyle = blush;
  ctx.fillRect(0, 0, 512, 34);
  ctx.fillRect(0, 478, 512, 34);
  ctx.fillRect(0, 0, 34, 512);
  ctx.fillRect(478, 0, 34, 512);

  const t = toTexture(c);
  t.wrapS = THREE.ClampToEdgeWrapping;
  t.wrapT = THREE.ClampToEdgeWrapping;
  return t;
}

/** Relieve de la piel (bump): poros hundidos y pliegues marcados. */
export function skinBumpTexture(): THREE.CanvasTexture {
  const [c, ctx] = makeCanvas(512, 512);
  const rng = mulberry32(22222);
  ctx.fillStyle = 'rgb(128,128,128)';
  ctx.fillRect(0, 0, 512, 512);
  // Poros hundidos.
  for (let i = 0; i < 2600; i++) {
    const v = 90 + Math.floor(rng() * 40);
    ctx.fillStyle = `rgb(${v},${v},${v})`;
    ctx.fillRect(rng() * 512, rng() * 512, 1.6, 1.6);
  }
  // Pliegues de nudillos (valles).
  for (let i = 0; i < 46; i++) {
    ctx.strokeStyle = `rgba(60,60,60,${0.35 + rng() * 0.25})`;
    ctx.lineWidth = 2.4;
    const x = rng() * 512;
    const y = rng() * 512;
    ctx.beginPath();
    ctx.arc(x, y, 6 + rng() * 6, 0.15 * Math.PI, 0.85 * Math.PI);
    ctx.stroke();
  }
  const t = toTexture(c, false);
  t.wrapS = THREE.ClampToEdgeWrapping;
  t.wrapT = THREE.ClampToEdgeWrapping;
  return t;
}

/** Veta de madera encerada para el mango del hacha (cálida y viva). */
export function axeWoodTexture(): THREE.CanvasTexture {
  const [c, ctx] = makeCanvas(256, 256);
  const rng = mulberry32(5533);
  ctx.fillStyle = '#a87844';
  ctx.fillRect(0, 0, 256, 256);
  // Vetas verticales onduladas.
  for (let i = 0; i < 30; i++) {
    const x = rng() * 256;
    const shade = 118 + rng() * 60;
    ctx.strokeStyle = `rgba(${shade + 40},${shade},${shade - 45},${0.25 + rng() * 0.35})`;
    ctx.lineWidth = 0.8 + rng() * 2.4;
    ctx.beginPath();
    ctx.moveTo(x, 0);
    let cx = x;
    for (let y = 0; y < 256; y += 32) {
      cx += (rng() - 0.5) * 7;
      ctx.lineTo(cx, y + 16);
    }
    ctx.stroke();
  }
  // Ojos de la madera (nudos).
  for (let i = 0; i < 4; i++) {
    const x = rng() * 256;
    const y = rng() * 256;
    const rg = ctx.createRadialGradient(x, y, 1, x, y, 7 + rng() * 5);
    rg.addColorStop(0, 'rgba(70,40,18,0.8)');
    rg.addColorStop(0.6, 'rgba(120,74,38,0.4)');
    rg.addColorStop(1, 'rgba(0,0,0,0)');
    ctx.fillStyle = rg;
    ctx.fillRect(x - 14, y - 14, 28, 28);
  }
  const t = toTexture(c);
  t.wrapS = THREE.RepeatWrapping;
  t.wrapT = THREE.RepeatWrapping;
  return t;
}

/** Cuero trenzado para la empuñadura del hacha. */
export function leatherTexture(): THREE.CanvasTexture {
  const [c, ctx] = makeCanvas(128, 128);
  const rng = mulberry32(8841);
  ctx.fillStyle = '#5c3a24';
  ctx.fillRect(0, 0, 128, 128);
  // Textura de poro de cuero + costura diagonal.
  for (let i = 0; i < 1500; i++) {
    const v = 60 + Math.floor(rng() * 50);
    ctx.fillStyle = `rgba(${v},${Math.floor(v * 0.62)},${Math.floor(v * 0.4)},0.4)`;
    ctx.fillRect(rng() * 128, rng() * 128, 1.4, 1.4);
  }
  ctx.strokeStyle = 'rgba(208,180,130,0.85)';
  ctx.lineWidth = 2;
  ctx.setLineDash([6, 5]);
  for (let x = -128; x < 256; x += 34) {
    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x + 128, 128);
    ctx.stroke();
  }
  ctx.setLineDash([]);
  return toTexture(c);
}

/** Acero cepillado para cabezas de herramientas (rayado fino). */
export function brushedSteelTexture(): THREE.CanvasTexture {
  const [c, ctx] = makeCanvas(128, 128);
  const rng = mulberry32(64064);
  ctx.fillStyle = 'rgb(168,172,178)';
  ctx.fillRect(0, 0, 128, 128);
  for (let i = 0; i < 700; i++) {
    const v = 120 + Math.floor(rng() * 90);
    ctx.strokeStyle = `rgba(${v},${v + 3},${v + 8},0.5)`;
    ctx.lineWidth = 0.7;
    const y = rng() * 128;
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(128, y + (rng() - 0.5) * 3);
    ctx.stroke();
  }
  const t = toTexture(c, false);
  t.wrapS = THREE.RepeatWrapping;
  t.wrapT = THREE.RepeatWrapping;
  return t;
}

/**
 * Atlas de materiales del pueblo (una sola textura, 3 bandas verticales):
 *  [0] madera de troncos y tablones · [1] tejas del techo · [2] piedra.
 * Cada geometría mapea su UV a su banda con atlasBand().
 */
export function cabinAtlasTexture(): THREE.CanvasTexture {
  const [c, ctx] = makeCanvas(1024, 1024);
  const rng = mulberry32(20240);
  const BAND = 341;

  // ---- Banda 0: madera clara (se tiñe con el color por vértice) ----
  for (let band = 0; band < 3; band++) {
    const y0 = band * BAND;
    ctx.save();
    ctx.translate(0, y0);
    ctx.beginPath();
    ctx.rect(0, 0, 1024, BAND);
    ctx.clip();

    if (band === 0) {
      ctx.fillStyle = '#d9cdb8';
      ctx.fillRect(0, 0, 1024, BAND);
      // Vetas verticales largas y suaves.
      for (let i = 0; i < 260; i++) {
        const x = rng() * 1024;
        const a = 0.06 + rng() * 0.16;
        ctx.strokeStyle = rng() > 0.5
          ? `rgba(150,120,82,${a})`
          : `rgba(236,226,204,${a * 0.8})`;
        ctx.lineWidth = 0.7 + rng() * 2.6;
        ctx.beginPath();
        ctx.moveTo(x, -6);
        let cx = x;
        for (let y = 0; y < BAND + 12; y += 26) {
          cx += (rng() - 0.5) * 9;
          ctx.lineTo(cx, y);
        }
        ctx.stroke();
      }
      // Nudos ocasionales.
      for (let i = 0; i < 9; i++) {
        const x = rng() * 1024;
        const y = rng() * BAND;
        const rg = ctx.createRadialGradient(x, y, 1, x, y, 9);
        rg.addColorStop(0, 'rgba(120,88,52,0.55)');
        rg.addColorStop(0.65, 'rgba(160,128,88,0.25)');
        rg.addColorStop(1, 'rgba(0,0,0,0)');
        ctx.fillStyle = rg;
        ctx.fillRect(x - 12, y - 12, 24, 24);
      }
      // Juntas verticales de tablones.
      for (let x = 0; x < 1024; x += 116) {
        ctx.fillStyle = 'rgba(96,72,44,0.35)';
        ctx.fillRect(x + rng() * 8, 0, 2.4, BAND);
      }
    }

    if (band === 1) {
      // ---- Banda 1: tejas de madera (cursos verticales en el atlas) ----
      ctx.fillStyle = '#cbb9a0';
      ctx.fillRect(0, 0, 1024, BAND);
      const course = 74;
      for (let x = 0; x < 1024; x += course) {
        // Sombra bajo el canto del curso.
        const g = ctx.createLinearGradient(x, 0, x + course, 0);
        g.addColorStop(0, 'rgba(74,52,32,0.34)');
        g.addColorStop(0.25, 'rgba(120,92,60,0.12)');
        g.addColorStop(0.9, 'rgba(255,244,224,0.10)');
        g.addColorStop(1, 'rgba(60,42,26,0.30)');
        ctx.fillStyle = g;
        ctx.fillRect(x, 0, course, BAND);
        ctx.fillStyle = 'rgba(70,48,30,0.4)';
        ctx.fillRect(x, 0, 2, BAND);
        // Escamas del curso con variación.
        for (let y = 0; y < BAND; y += 46) {
          const off = ((y / 46) % 2) * 23;
          ctx.fillStyle = `rgba(${150 + rng() * 40},${120 + rng() * 30},${86 + rng() * 24},0.18)`;
          ctx.beginPath();
          ctx.moveTo(x + 3, y + 44 + off * 0.2);
          ctx.quadraticCurveTo(x + course / 2, y + 30 + off * 0.2, x + course - 3, y + 44 + off * 0.2);
          ctx.lineTo(x + course - 3, y + 46);
          ctx.lineTo(x + 3, y + 46);
          ctx.closePath();
          ctx.fill();
        }
      }
    }

    if (band === 2) {
      // ---- Banda 2: piedra de mampostería ----
      ctx.fillStyle = '#b7b2a8';
      ctx.fillRect(0, 0, 1024, BAND);
      // Hiladas con juntas escalonadas.
      let y = 0;
      let row = 0;
      while (y < BAND) {
        const h = 52 + rng() * 34;
        let x = -20 + rng() * 30;
        while (x < 1024) {
          const w = 70 + rng() * 110;
          const tone = 158 + rng() * 56;
          ctx.fillStyle = `rgb(${tone},${tone - 6},${tone - 14})`;
          roundRect(ctx, x, y, w, h, 7);
          ctx.fill();
          // Sombra inferior/luz superior.
          ctx.strokeStyle = 'rgba(255,255,255,0.16)';
          ctx.lineWidth = 2;
          ctx.beginPath();
          ctx.moveTo(x + 6, y + 2);
          ctx.lineTo(x + w - 6, y + 2);
          ctx.stroke();
          ctx.strokeStyle = 'rgba(60,56,48,0.35)';
          ctx.beginPath();
          ctx.moveTo(x + 6, y + h - 2);
          ctx.lineTo(x + w - 6, y + h - 2);
          ctx.stroke();
          x += w + 6;
        }
        y += h + 6;
        row++;
      }
      // Manchas de musgo sutiles.
      for (let i = 0; i < 40; i++) {
        const x = rng() * 1024;
        const yy = rng() * BAND;
        const rg = ctx.createRadialGradient(x, yy, 1, x, yy, 10 + rng() * 22);
        rg.addColorStop(0, `rgba(108,124,72,${0.14 + rng() * 0.2})`);
        rg.addColorStop(1, 'rgba(0,0,0,0)');
        ctx.fillStyle = rg;
        ctx.fillRect(x - 34, yy - 34, 68, 68);
      }
    }
    ctx.restore();
  }

  const t = toTexture(c);
  t.wrapS = THREE.RepeatWrapping;
  t.wrapT = THREE.ClampToEdgeWrapping;
  return t;
}

/** Rectángulo redondeado (path) para canvas. */
function roundRect(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  w: number,
  h: number,
  r: number
): void {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.arcTo(x + w, y, x + w, y + h, r);
  ctx.arcTo(x + w, y + h, x, y + h, r);
  ctx.arcTo(x, y + h, x, y, r);
  ctx.arcTo(x, y, x + w, y, r);
  ctx.closePath();
}

/**
 * Remapea los UV de una geometría a una banda del atlas (0..2).
 * u se comprime para que el detalle no se estire demasiado en piezas largas.
 */
export function atlasBand(geo: THREE.BufferGeometry, band: number, uScale = 1): void {
  const uv = geo.attributes.uv as THREE.BufferAttribute;
  for (let i = 0; i < uv.count; i++) {
    const u = (uv.getX(i) * uScale) % 1;
    const v = (band + uv.getY(i)) / 3;
    uv.setXY(i, Math.abs(u), v);
  }
  uv.needsUpdate = true;
}

/** Ladrillo visto con juntas de mortero (para el constructor). */
export function brickTexture(): THREE.CanvasTexture {
  const [c, ctx] = makeCanvas(256, 256);
  const rng = mulberry32(91021);
  ctx.fillStyle = '#c8c2b4';
  ctx.fillRect(0, 0, 256, 256);
  const bh = 32;
  for (let row = 0; row * bh < 256; row++) {
    const off = (row % 2) * 32;
    for (let x = -64 + off; x < 256; x += 64) {
      const tone = 150 + rng() * 36;
      ctx.fillStyle = `rgb(${tone},${Math.floor(tone * 0.62)},${Math.floor(tone * 0.48)})`;
      roundRect(ctx, x + 2, row * bh + 2, 60, bh - 4, 3);
      ctx.fill();
      // Desigualdad por ladrillo.
      ctx.fillStyle = `rgba(0,0,0,${0.04 + rng() * 0.07})`;
      ctx.fillRect(x + 2, row * bh + bh - 8, 60, 4);
    }
  }
  const t = toTexture(c);
  t.wrapS = THREE.RepeatWrapping;
  t.wrapT = THREE.RepeatWrapping;
  return t;
}

/** Tablón de madera para el constructor (se tiñe con el color elegido). */
export function plankTexture(): THREE.CanvasTexture {
  const [c, ctx] = makeCanvas(256, 256);
  const rng = mulberry32(4477);
  ctx.fillStyle = '#d6cab2';
  ctx.fillRect(0, 0, 256, 256);
  for (let i = 0; i < 70; i++) {
    const x = rng() * 256;
    const a = 0.08 + rng() * 0.18;
    ctx.strokeStyle = rng() > 0.5 ? `rgba(142,112,74,${a})` : `rgba(240,232,212,${a})`;
    ctx.lineWidth = 0.8 + rng() * 2.2;
    ctx.beginPath();
    ctx.moveTo(x, -4);
    let cx = x;
    for (let y = 0; y < 260; y += 34) {
      cx += (rng() - 0.5) * 6;
      ctx.lineTo(cx, y);
    }
    ctx.stroke();
  }
  for (let x = 0; x < 260; x += 52) {
    ctx.fillStyle = 'rgba(90,66,40,0.3)';
    ctx.fillRect(x, 0, 2, 256);
  }
  const t = toTexture(c);
  t.wrapS = THREE.RepeatWrapping;
  t.wrapT = THREE.RepeatWrapping;
  return t;
}
