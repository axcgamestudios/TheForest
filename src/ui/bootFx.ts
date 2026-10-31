/**
 * Motion graphics de la pantalla de carga: bosque en silueta con parallax,
 * niebla que deriva, motas de polen, luciérnagas y rayos de luz tenues.
 * Todo en un canvas 2D barato que se detiene al terminar la carga.
 */
export interface BootFx {
  setProgress: (f: number) => void;
  stop: () => void;
}

interface Layer {
  color: string;
  trees: { x: number; h: number; w: number; lean: number }[];
  swaySpeed: number;
  swayAmp: number;
}

export function startBootFx(canvas: HTMLCanvasElement): BootFx {
  const ctx = canvas.getContext('2d')!;
  let raf = 0;
  let running = true;
  let progress = 0;
  let t = 0;
  let last = performance.now();

  const resize = (): void => {
    const dpr = Math.min(window.devicePixelRatio, 1.5);
    canvas.width = Math.floor(window.innerWidth * dpr);
    canvas.height = Math.floor(window.innerHeight * dpr);
    canvas.style.width = `${window.innerWidth}px`;
    canvas.style.height = `${window.innerHeight}px`;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  };
  resize();
  window.addEventListener('resize', resize);

  const W = (): number => window.innerWidth;
  const H = (): number => window.innerHeight;

  // --- Capas de siluetas de árboles (pino estilizado) ---
  const makeLayer = (seed: number, count: number, color: string, hMin: number, hMax: number): Layer => {
    let s = seed;
    const rnd = (): number => {
      s = (s * 16807) % 2147483647;
      return s / 2147483647;
    };
    const trees: Layer['trees'] = [];
    for (let i = 0; i < count; i++) {
      trees.push({
        x: (i / count) * 1.15 * W() + rnd() * 90 - 45,
        h: hMin + rnd() * (hMax - hMin),
        w: 0.32 + rnd() * 0.22,
        lean: (rnd() - 0.5) * 0.16
      });
    }
    return { color, trees, swaySpeed: 0.25 + rnd() * 0.3, swayAmp: 4 + rnd() * 6 };
  };

  let layers: Layer[] = [];
  const buildLayers = (): void => {
    layers = [
      makeLayer(1234, 26, '#0b1a0e', H() * 0.22, H() * 0.38),
      makeLayer(5678, 20, '#081309', H() * 0.32, H() * 0.5),
      makeLayer(9012, 14, '#050c06', H() * 0.45, H() * 0.68)
    ];
  };
  buildLayers();
  window.addEventListener('resize', buildLayers);

  // --- Partículas: polen (arriba) y luciérnagas (abajo) ---
  interface Mote {
    x: number;
    y: number;
    vx: number;
    vy: number;
    r: number;
    ph: number;
    fire: boolean;
  }
  const motes: Mote[] = [];
  for (let i = 0; i < 70; i++) {
    const fire = i > 46;
    motes.push({
      x: Math.random() * W(),
      y: fire ? H() * (0.55 + Math.random() * 0.4) : Math.random() * H() * 0.8,
      vx: (Math.random() - 0.5) * 14,
      vy: fire ? (Math.random() - 0.5) * 6 : -4 - Math.random() * 8,
      r: fire ? 1.6 + Math.random() * 1.8 : 0.8 + Math.random() * 1.6,
      ph: Math.random() * Math.PI * 2,
      fire
    });
  }

  // --- Bandas de niebla ---
  const fogBands = [
    { y: 0.62, h: 0.16, speed: 12, alpha: 0.05 },
    { y: 0.74, h: 0.2, speed: -8, alpha: 0.07 },
    { y: 0.5, h: 0.1, speed: 18, alpha: 0.04 }
  ];

  const frame = (now: number): void => {
    if (!running) return;
    const dt = Math.min((now - last) / 1000, 0.05);
    last = now;
    t += dt;

    const w = W();
    const h = H();

    // Cielo: gradiente de amanecer frío.
    const sky = ctx.createLinearGradient(0, 0, 0, h);
    sky.addColorStop(0, '#0d1f12');
    sky.addColorStop(0.45, '#112a16');
    sky.addColorStop(0.72, '#1b3a1e');
    sky.addColorStop(1, '#071009');
    ctx.fillStyle = sky;
    ctx.fillRect(0, 0, w, h);

    // Luna suave.
    const moonX = w * 0.78;
    const moonY = h * 0.18;
    const halo = ctx.createRadialGradient(moonX, moonY, 0, moonX, moonY, h * 0.3);
    halo.addColorStop(0, 'rgba(214,235,190,0.20)');
    halo.addColorStop(1, 'rgba(214,235,190,0)');
    ctx.fillStyle = halo;
    ctx.fillRect(0, 0, w, h);
    ctx.fillStyle = 'rgba(226,240,208,0.85)';
    ctx.beginPath();
    ctx.arc(moonX, moonY, h * 0.035, 0, Math.PI * 2);
    ctx.fill();

    // Rayos de luz tenues que barren lentamente.
    for (let i = 0; i < 3; i++) {
      const a = -0.9 + i * 0.28 + Math.sin(t * 0.11 + i * 2.1) * 0.05;
      const ox = w * (0.3 + i * 0.22);
      const len = h * 1.4;
      ctx.save();
      ctx.translate(ox, -h * 0.1);
      ctx.rotate(a);
      const ray = ctx.createLinearGradient(0, 0, 0, len);
      ray.addColorStop(0, 'rgba(196,226,160,0.055)');
      ray.addColorStop(1, 'rgba(196,226,160,0)');
      ctx.fillStyle = ray;
      ctx.fillRect(-w * 0.035, 0, w * 0.07, len);
      ctx.restore();
    }

    // Niebla que deriva.
    for (const f of fogBands) {
      const fy = h * f.y;
      const off = ((t * f.speed) % (w * 1.6)) - w * 0.3;
      const fg = ctx.createRadialGradient(off + w * 0.3, fy, 0, off + w * 0.3, fy, w * 0.75);
      fg.addColorStop(0, `rgba(178,204,160,${f.alpha})`);
      fg.addColorStop(1, 'rgba(178,204,160,0)');
      ctx.fillStyle = fg;
      ctx.fillRect(0, fy - h * f.h, w, h * f.h * 2);
    }

    // Árboles en silueta (de atrás hacia adelante), con vaivén sutil.
    for (let li = 0; li < layers.length; li++) {
      const layer = layers[li];
      const yBase = h * (0.66 + li * 0.11);
      ctx.fillStyle = layer.color;
      for (const tree of layer.trees) {
        const sway = Math.sin(t * layer.swaySpeed + tree.x * 0.01) * layer.swayAmp;
        const x = tree.x + sway;
        const th = tree.h;
        const tw = th * tree.w;

        // Trapecio de tronco + 3 niveles de copa.
        ctx.beginPath();
        ctx.moveTo(x - tw * 0.05, yBase);
        ctx.lineTo(x + tw * 0.05, yBase);
        ctx.lineTo(x + tw * 0.03 + tree.lean * th * 0.3, yBase - th);
        ctx.lineTo(x - tw * 0.03 + tree.lean * th * 0.3, yBase - th);
        ctx.closePath();
        ctx.fill();

        for (let tier = 0; tier < 3; tier++) {
          const tt = tier / 3;
          const cy = yBase - th * (0.3 + tt * 0.55);
          const cw2 = tw * (0.75 - tt * 0.42);
          const cTop = th * 0.2;
          ctx.beginPath();
          ctx.moveTo(x - cw2 + sway * 0.4 * tt, cy);
          ctx.lineTo(x + tree.lean * th * 0.3 + sway * 0.6, cy - cTop);
          ctx.lineTo(x + cw2 + sway * 0.4 * tt, cy);
          ctx.closePath();
          ctx.fill();
        }
      }
      // Suelo de la capa.
      ctx.fillRect(0, yBase, w, h - yBase + 4);
    }

    // Motas y luciérnagas.
    for (const m of motes) {
      m.x += (m.vx + Math.sin(t * 0.5 + m.ph) * 6) * dt;
      m.y += m.vy * dt;
      if (m.x < -20) m.x = w + 20;
      if (m.x > w + 20) m.x = -20;
      if (m.y < -20) m.y = h + 20;
      if (m.y > h + 20) m.y = -20;

      const tw = m.fire
        ? 0.35 + 0.65 * Math.max(0, Math.sin(t * 2.4 + m.ph * 3))
        : 0.5 + 0.5 * Math.sin(t * 1.3 + m.ph);
      const r = m.r * (m.fire ? 3.2 : 2.2);
      const g = ctx.createRadialGradient(m.x, m.y, 0, m.x, m.y, r);
      const col = m.fire
        ? `rgba(190,255,140,${0.75 * tw})`
        : `rgba(235,240,205,${0.4 * tw})`;
      g.addColorStop(0, col);
      g.addColorStop(1, 'rgba(0,0,0,0)');
      ctx.fillStyle = g;
      ctx.beginPath();
      ctx.arc(m.x, m.y, r, 0, Math.PI * 2);
      ctx.fill();
    }

    // Barra de progreso integrada abajo (reflejo del porcentaje central).
    if (progress > 0) {
      const bw = Math.min(w * 0.5, 460);
      const bx = (w - bw) / 2;
      const by = h - 34;
      ctx.fillStyle = 'rgba(255,255,255,0.08)';
      ctx.fillRect(bx, by, bw, 2);
      ctx.fillStyle = 'rgba(184,212,136,0.9)';
      ctx.fillRect(bx, by, bw * progress, 2);
    }

    raf = requestAnimationFrame(frame);
  };

  raf = requestAnimationFrame(frame);

  return {
    setProgress: (f: number): void => {
      progress = Math.max(0, Math.min(1, f));
    },
    stop: (): void => {
      running = false;
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
      window.removeEventListener('resize', buildLayers);
    }
  };
}
