import * as THREE from 'three';
import { MissionManager, MissionDef, ItemKind } from '../game/Missions';
import { Collectibles } from '../game/Collectibles';
import { FirstPersonController } from '../player/FirstPersonController';
import { Economy } from '../game/Economy';
import { Vehicles } from '../game/Vehicles';
import {
  Builder,
  PIECES,
  PIECE_ORDER,
  PALETTE,
  FLOOR_COSTS,
  BASEMENT_COST,
  levelName
} from '../game/Builder';
import { Chopping } from '../game/Chopping';
import { SAWMILL, PLOT } from '../world/heightfield';
import { CycleInfo } from '../world/SkyEnv';
import { dayIcon } from '../game/SaveSystem';

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
 * misiones activas, recursos (dinero y madera), prompt contextual
 * (recoger / conducir / construir / vender / talar), velocímetro al
 * conducir, barra de construcción y avisos emergentes.
 */
export class Hud {
  private readonly root: HTMLElement;
  private readonly compass: HTMLCanvasElement;
  private readonly ctx2d: CanvasRenderingContext2D;
  private readonly tracker: HTMLElement;
  private readonly prompt: HTMLElement;
  private readonly promptKey: HTMLElement;
  private readonly promptText: HTMLElement;
  private readonly xpFill: HTMLElement;
  private readonly xpLevel: HTMLElement;
  private readonly toasts: HTMLElement;
  private readonly resMoney: HTMLElement;
  private readonly resWood: HTMLElement;
  private readonly speedo: HTMLElement;
  private readonly speedVal: HTMLElement;
  private readonly buildbar: HTMLElement;
  private readonly clock: HTMLElement;
  private readonly saveDot: HTMLElement;

  private readonly tmpVec = new THREE.Vector3();
  private trackerRefresh = 0;
  private lastPrompt = '';
  private lastClock = '';
  private lastLevel = -1;
  private lastXpPct = -1;
  private lastMoney = -1;
  private lastWood = -1;

  constructor(
    private readonly missions: MissionManager,
    private readonly collectibles: Collectibles,
    private readonly controller: FirstPersonController,
    private readonly getDronePos: () => THREE.Vector3,
    private readonly camera: THREE.PerspectiveCamera,
    private readonly economy: Economy,
    private readonly vehicles: Vehicles,
    private readonly builder: Builder,
    private readonly chopping: Chopping
  ) {
    this.root = document.getElementById('hud')!;
    this.compass = document.getElementById('compass') as HTMLCanvasElement;
    this.ctx2d = this.compass.getContext('2d')!;
    this.tracker = document.getElementById('tracker')!;
    this.prompt = document.getElementById('prompt')!;
    this.promptKey = document.getElementById('promptKey')!;
    this.promptText = document.getElementById('promptText')!;
    this.xpFill = document.getElementById('xpFill')!;
    this.xpLevel = document.getElementById('xpLevel')!;
    this.toasts = document.getElementById('toasts')!;
    this.resMoney = document.getElementById('resMoney')!;
    this.resWood = document.getElementById('resWood')!;
    this.speedo = document.getElementById('speedo')!;
    this.speedVal = document.getElementById('speedVal')!;
    this.buildbar = document.getElementById('buildbar')!;
    this.clock = document.getElementById('clock')!;
    this.saveDot = document.getElementById('saveDot')!;

    this.resizeCompass();
    window.addEventListener('resize', () => this.resizeCompass());
  }

  /** Destello del indicador “partida guardada”. */
  flashSave(): void {
    this.saveDot.classList.remove('on');
    void this.saveDot.offsetWidth; // reinicia la animación
    this.saveDot.classList.add('on');
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
  toast(kind: 'mission' | 'new' | 'level' | 'item' | 'cash' | 'wood' | 'build', title: string, sub: string): void {
    const el = document.createElement('div');
    el.className = `toast toast-${kind}`;
    const icon =
      kind === 'mission'
        ? '✓'
        : kind === 'new'
          ? '◈'
          : kind === 'level'
            ? '★'
            : kind === 'cash'
              ? '💰'
              : kind === 'wood'
                ? '🪵'
                : kind === 'build'
                  ? '🔨'
                  : '+';
    el.innerHTML = `<span class="toast-ic">${icon}</span><div><div class="toast-t">${title}</div><div class="toast-s">${sub}</div></div>`;
    this.toasts.appendChild(el);
    while (this.toasts.children.length > 4) this.toasts.firstChild?.remove();
    setTimeout(() => {
      el.classList.add('out');
      setTimeout(() => el.remove(), 500);
    }, 4200);
  }

  update(dt: number, cycle: CycleInfo): void {
    this.drawCompass();

    // --- Reloj del ciclo día/noche ---
    const clockTxt = `${dayIcon(cycle.time)} ${cycle.clock}`;
    if (clockTxt !== this.lastClock) {
      this.lastClock = clockTxt;
      this.clock.textContent = clockTxt;
    }

    // --- Rastreador y barra de construcción (refresco a 4 Hz) ---
    this.trackerRefresh -= dt;
    if (this.trackerRefresh <= 0) {
      this.trackerRefresh = 0.25;
      this.renderTracker();
      this.renderBuildBar();
    }

    // --- Recursos: dinero y madera ---
    if (this.economy.money !== this.lastMoney) {
      this.lastMoney = this.economy.money;
      this.resMoney.textContent = `$${this.economy.money}`;
    }
    if (this.economy.wood !== this.lastWood) {
      this.lastWood = this.economy.wood;
      this.resWood.textContent = `${this.economy.wood}`;
    }

    // --- Velocímetro ---
    if (this.vehicles.isDriving) {
      this.speedo.classList.remove('hidden');
      this.speedVal.textContent = String(Math.round(this.vehicles.speedKmh));
    } else {
      this.speedo.classList.add('hidden');
    }

    // --- Prompt contextual (prioridad) ---
    let key = '';
    let label = '';
    if (this.vehicles.isDriving) {
      key = 'F';
      label = 'bajar del coche';
    } else if (this.vehicles.nearest(this.controller.position)) {
      key = 'F';
      label = 'subir al coche';
    } else if (this.economy.wood > 0 && this.nearSawmill()) {
      key = 'E';
      label = `vender ${this.economy.wood} de madera (+$${this.economy.wood * 5})`;
    } else {
      const near = this.collectibles.nearest;
      if (near) {
        key = 'E';
        label = `Recoger ${near.label}`;
      } else if (this.chopping.aimedTree()) {
        key = '🖱';
        label = 'Talar el árbol';
      }
    }
    const combo = key + label;
    if (combo !== this.lastPrompt) {
      this.lastPrompt = combo;
      if (key) {
        this.promptKey.textContent = key;
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

  private nearSawmill(): boolean {
    const p = this.controller.position;
    return Math.hypot(p.x - SAWMILL.x, p.z - SAWMILL.z) < SAWMILL.r + 2;
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

  /** Barra de construcción (visible sólo en modo construcción). */
  private renderBuildBar(): void {
    if (!this.builder.active) {
      this.buildbar.classList.add('hidden');
      return;
    }
    this.buildbar.classList.remove('hidden');

    if (this.builder.deleteMode) {
      this.buildbar.innerHTML = `
        <div class="bb-head">DEMOLER</div>
        <div class="bb-body">
          <span class="bb-sel">Cerca de ti · devuelve 50% del coste</span>
          <span class="bb-hint"><kbd>X</kbd> volver a construir · <kbd>B</kbd> salir</span>
        </div>`;
      return;
    }

    const sel = this.builder.selectedType;
    const style = this.builder.selectedStyle;
    const colorIdx = this.builder.selectedColor;
    const curLevel = this.builder.selectedLevel;
    const def = PIECES[sel];
    const extra = style === 'wood' ? 0 : style === 'stone' ? 10 : 6;
    const afford = this.economy.canAfford(def.wood, def.cash + extra);

    // --- Fila de niveles: comprados, actual y comprables ---
    const levels: string[] = [];
    // Sótano.
    if (this.builder.basement) {
      levels.push(
        `<span class="bb-lv${curLevel === -1 ? ' cur' : ''}${' own'}">🪨 Sótano</span>`
      );
    } else {
      levels.push(
        `<span class="bb-lv buy"><kbd>H</kbd> Sótano · 🪵${BASEMENT_COST.wood}+$${BASEMENT_COST.cash}</span>`
      );
    }
    // Planta baja + plantas compradas.
    for (let l = 0; l <= this.builder.floors; l++) {
      levels.push(
        `<span class="bb-lv${curLevel === l ? ' cur' : ''} own">${l === 0 ? '🏠 Baja' : `${l}ª planta`}</span>`
      );
    }
    // Siguiente planta comprable.
    if (this.builder.floors < FLOOR_COSTS.length) {
      const fc = FLOOR_COSTS[this.builder.floors];
      levels.push(
        `<span class="bb-lv buy"><kbd>G</kbd> ${levelName(this.builder.floors + 1)} · 🪵${fc.wood}+$${fc.cash}</span>`
      );
    }

    let pieces = '';
    PIECE_ORDER.forEach((t, i) => {
      const d = PIECES[t];
      pieces += `<span class="bb-piece${t === sel ? ' sel' : ''}"><b>${i + 1}</b>${d.icon} ${d.name}</span>`;
    });

    this.buildbar.innerHTML = `
      <div class="bb-head">CONSTRUIR · <kbd>Q</kbd>/<kbd>Z</kbd> nivel · <kbd>B</kbd> salir</div>
      <div class="bb-levels">${levels.join('')}</div>
      <div class="bb-pieces">${pieces}</div>
      <div class="bb-body">
        <span class="bb-sel">
          ${levelName(curLevel)} · ${def.name} ·
          <i class="${afford ? 'ok' : 'no'}">🪵 ${def.wood} + $${def.cash + extra}</i>
           · <kbd>T</kbd> ${style === 'wood' ? 'madera' : style === 'stone' ? 'piedra' : 'ladrillo'}
           · <kbd>Y</kbd> <i class="swatch" style="background:#${PALETTE[colorIdx].hex.toString(16).padStart(6, '0')}"></i>${PALETTE[colorIdx].name}
           · <kbd>R</kbd> rotar · <kbd>X</kbd> demoler
        </span>
      </div>`;
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
      } else if (def.kind === 'drive') {
        // Coche más cercano (uno fijo del pueblo como referencia).
        this.tmpVec.set(58, 0, 124);
        out.push({ pos: this.tmpVec.clone(), label: '🚗', color: '#a8e8c8' });
      } else if (def.kind === 'build') {
        this.tmpVec.set(PLOT.x, 0, PLOT.z);
        out.push({ pos: this.tmpVec.clone(), label: '🔨', color: '#e8c88f' });
      } else if (def.kind === 'sell') {
        this.tmpVec.set(SAWMILL.x, 0, SAWMILL.z);
        out.push({ pos: this.tmpVec.clone(), label: '💰', color: '#ffd98c' });
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
