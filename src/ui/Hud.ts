import * as THREE from 'three';
import { MissionManager, MissionDef, ItemKind } from '../game/Missions';
import { Collectibles } from '../game/Collectibles';
import { FirstPersonController } from '../player/FirstPersonController';

/** Rumbos dibujados en la cinta de la brújula. */
const CARDINALS: { a: number; label: string }[] = [
  { a: 0, label: 'N' },
  { a: 45, label: 'NE' },
  { a: 90, label: 'E' },
  { a: 135, label: 'SE' },
  { a: 180, label: 'S' },
  { a: 225, label: 'SO' },
  { a: 270, label: 'O' },
  { a: 315, label: 'NO' }
];

/** Semirango angular visible en la brújula (rad). */
const COMPASS_HALF_FOV = 1.05;

const ITEM_ICON: Record<ItemKind, string> = {
  flower: '🌸',
  crystal: '💠',
  relic: '⚱️'
};

/**
 * HUD durante el juego: brújula con marcadores de misión, rastreador de
 * misiones activas, prompt de recogida (E), barra de XP/nivel y avisos
 * emergentes (misiones, niveles, objetos).
 */
export class Hud {
  private readonly root: HTMLElement;
  private readonly compass: HTMLCanvasElement;
  private readonly ctx2d: CanvasRenderingContext2D;
  private readonly tracker: HTMLElement;
  private readonly prompt: HTMLElement;
  private readonly promptText: HTMLElement;
  private readonly xpFill: HTMLElement;
  private readonly xpLevel: HTMLElement;
  private readonly toasts: HTMLElement;

  private readonly tmpVec = new THREE.Vector3();
  private trackerRefresh = 0;
  private lastPromptLabel = '';
  private lastLevel = -1;
  private lastXpPct = -1;

  constructor(
    private readonly missions: MissionManager,
    private readonly collectibles: Collectibles,
    private readonly controller: FirstPersonController,
    private readonly getDronePos: () => THREE.Vector3,
    private readonly camera: THREE.PerspectiveCamera
  ) {
    this.root = document.getElementById('hud')!;
    this.compass = document.getElementById('compass') as HTMLCanvasElement;
    this.ctx2d = this.compass.getContext('2d')!;
    this.tracker = document.getElementById('tracker')!;
    this.prompt = document.getElementById('prompt')!;
    this.promptText = document.getElementById('promptText')!;
    this.xpFill = document.getElementById('xpFill')!;
    this.xpLevel = document.getElementById('xpLevel')!;
    this.toasts = document.getElementById('toasts')!;

    this.resizeCompass();
    window.addEventListener('resize', () => this.resizeCompass());
  }

  private resizeCompass(): void {
    const dpr = Math.min(window.devicePixelRatio, 2);
    const w = Math.min(560, Math.floor(window.innerWidth * 0.46));
    const h = 46;
    this.compass.width = Math.floor(w * dpr);
    this.compass.height = Math.floor(h * dpr);
    this.compass.style.width = `${w}px`;
    this.compass.style.height = `${h}px`;
    this.ctx2d.setTransform(dpr, 0, 0, dpr, 0, 0);
  }

  show(): void {
    this.root.classList.remove('hidden');
  }

  hide(): void {
    this.root.classList.add('hidden');
  }

  /** Aviso emergente a la derecha. */
  toast(kind: 'mission' | 'new' | 'level' | 'item', title: string, sub: string): void {
    const el = document.createElement('div');
    el.className = `toast toast-${kind}`;
    const icon =
      kind === 'mission' ? '✓' : kind === 'new' ? '◈' : kind === 'level' ? '★' : '+';
    el.innerHTML = `<span class="toast-ic">${icon}</span><div><div class="toast-t">${title}</div><div class="toast-s">${sub}</div></div>`;
    this.toasts.appendChild(el);
    while (this.toasts.children.length > 4) this.toasts.firstChild?.remove();
    setTimeout(() => {
      el.classList.add('out');
      setTimeout(() => el.remove(), 500);
    }, 4200);
  }

  update(dt: number): void {
    this.drawCompass();

    // --- Rastreador de misiones (refresco a 4 Hz, evita reflow constante) ---
    this.trackerRefresh -= dt;
    if (this.trackerRefresh <= 0) {
      this.trackerRefresh = 0.25;
      this.renderTracker();
    }

    // --- Prompt de recogida ---
    const near = this.collectibles.nearest;
    const label = near ? `Recoger ${near.label}` : '';
    if (label !== this.lastPromptLabel) {
      this.lastPromptLabel = label;
      if (label) {
        this.promptText.textContent = label;
        this.prompt.classList.remove('hidden');
      } else {
        this.prompt.classList.add('hidden');
      }
    }

    // --- XP / nivel ---
    const pct = Math.round(this.missions.levelProgress * 100);
    if (this.missions.levelNumber !== this.lastLevel || pct !== this.lastXpPct) {
      this.lastLevel = this.missions.levelNumber;
      this.lastXpPct = pct;
      this.xpLevel.textContent = `NV ${this.missions.levelNumber}`;
      this.xpFill.style.width = `${pct}%`;
    }
  }

  private renderTracker(): void {
    const act = this.missions.activeMissions;
    let html = `<div class="trk-head">MISIONES</div>`;
    if (!act.length) html += `<div class="trk-empty">Todo completado. ¡Bien hecho!</div>`;
    for (const { def, progress } of act) {
      const p = def.goal > 1 ? Math.min(progress / def.goal, 1) : 0;
      const count =
        def.goal > 1
          ? `<span class="trk-count">${Math.floor(progress)}/${def.goal}</span>`
          : '';
      html += `
        <div class="trk-item" data-m="${def.id}">
          <div class="trk-title"><span class="trk-ic">${def.icon}</span>${def.title}${count}</div>
          <div class="trk-bar"><div class="trk-fill" style="width:${Math.round(p * 100)}%"></div></div>
        </div>`;
    }
    this.tracker.innerHTML = html;
  }

  /** Marcadores de brújula según misiones activas. */
  private compassMarkers(): { pos: THREE.Vector3; label: string; color: string }[] {
    const out: { pos: THREE.Vector3; label: string; color: string }[] = [];
    for (const { def } of this.missions.activeMissions) {
      if (def.kind === 'reach' && def.poi) {
        this.tmpVec.set(def.poi.x, 0, def.poi.z);
        out.push({ pos: this.tmpVec.clone(), label: def.poi.label, color: '#ffd977' });
      } else if (def.kind === 'drone') {
        out.push({ pos: this.getDronePos().clone(), label: 'Dron', color: '#ff8f6b' });
      } else if (def.kind === 'collect' && def.item) {
        const p = this.collectibles.nearestOfKind(def.item);
        if (p) out.push({ pos: p.clone(), label: `${ITEM_ICON[def.item]}`, color: '#9fe8ff' });
      }
    }
    return out.slice(0, 4);
  }

  private drawCompass(): void {
    const ctx = this.ctx2d;
    const cw = parseFloat(this.compass.style.width);
    const ch = parseFloat(this.compass.style.height);
    ctx.clearRect(0, 0, cw, ch);

    // Rumbo: yaw 0 mira a -Z (definido como Norte).
    const dir = new THREE.Vector3();
    this.camera.getWorldDirection(dir);
    const heading = Math.atan2(dir.x, -dir.z);
    const px = this.controller.position;

    const cx = cw / 2;

    // Fondo de la cinta.
    const grad = ctx.createLinearGradient(0, 0, 0, ch);
    grad.addColorStop(0, 'rgba(8,14,8,0.0)');
    grad.addColorStop(0.35, 'rgba(8,14,8,0.55)');
    grad.addColorStop(1, 'rgba(8,14,8,0.0)');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, cw, ch);

    const angleToX = (bearing: number): number | null => {
      let rel = bearing - heading;
      rel = Math.atan2(Math.sin(rel), Math.cos(rel));
      if (Math.abs(rel) > COMPASS_HALF_FOV) return null;
      return cx + (rel / COMPASS_HALF_FOV) * (cw / 2 - 8);
    };

    // Marcas cada 15°.
    ctx.textAlign = 'center';
    for (let a = 0; a < 360; a += 15) {
      const rad = (a * Math.PI) / 180;
      const x = angleToX(rad);
      if (x === null) continue;
      const major = a % 45 === 0;
      ctx.fillStyle = major ? 'rgba(232,238,222,0.85)' : 'rgba(232,238,222,0.3)';
      ctx.fillRect(x - 0.5, major ? 10 : 14, major ? 1.5 : 1, major ? 8 : 4);
    }

    // Rumbos cardinales.
    ctx.font = '600 11px "Segoe UI", system-ui, sans-serif';
    for (const c of CARDINALS) {
      const x = angleToX((c.a * Math.PI) / 180);
      if (x === null) continue;
      ctx.fillStyle = c.label.length === 1 ? 'rgba(240,245,230,0.95)' : 'rgba(200,212,180,0.7)';
      ctx.fillText(c.label, x, 32);
    }

    // Marcadores de misión.
    ctx.font = '600 9px "Segoe UI", system-ui, sans-serif';
    for (const m of this.compassMarkers()) {
      const bearing = Math.atan2(m.pos.x - px.x, -(m.pos.z - px.z));
      let x = angleToX(bearing);
      // Si cae fuera, se pega al borde como indicador de dirección.
      let edge = false;
      if (x === null) {
        let rel = bearing - heading;
        rel = Math.atan2(Math.sin(rel), Math.cos(rel));
        x = rel > 0 ? cw - 10 : 10;
        edge = true;
      }
      const dist = Math.round(Math.hypot(m.pos.x - px.x, m.pos.z - px.z));

      ctx.fillStyle = m.color;
      ctx.beginPath();
      if (edge) {
        ctx.moveTo(x, 18 + (x > cx ? 3 : -3));
        ctx.lineTo(x - 5, 12);
        ctx.lineTo(x + 5, 12);
        ctx.closePath();
      } else {
        ctx.moveTo(x, 8);
        ctx.lineTo(x - 4.5, 15);
        ctx.lineTo(x, 22);
        ctx.lineTo(x + 4.5, 15);
        ctx.closePath();
      }
      ctx.fill();

      if (!edge) {
        ctx.fillStyle = 'rgba(240,245,230,0.85)';
        ctx.fillText(`${m.label} ${dist}m`, x, 44);
      }
    }

    // Aguja central.
    ctx.fillStyle = 'rgba(184,212,136,0.95)';
    ctx.fillRect(cx - 1, 6, 2, 10);
  }
}
