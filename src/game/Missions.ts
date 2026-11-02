import * as THREE from 'three';
import { SUMMIT } from '../world/heightfield';

/** Tipos de objetivo que puede tener una misión. */
export type MissionKind =
  | 'walk'
  | 'sprint'
  | 'reach'
  | 'collect'
  | 'drone'
  | 'chop'
  | 'drive'
  | 'build'
  | 'sell'
  | 'all';

export type ItemKind = 'flower' | 'crystal' | 'relic';

export interface MissionPOI {
  x: number;
  z: number;
  /** Radio de llegada en metros. */
  r: number;
  label: string;
}

export interface MissionDef {
  id: string;
  title: string;
  hint: string;
  xp: number;
  /** Recompensa en dinero del juego (además de la XP). */
  cash?: number;
  goal: number;
  kind: MissionKind;
  icon: string;
  poi?: MissionPOI;
  item?: ItemKind;
  /** Misiones que deben completarse antes de que ésta se active. */
  requires: string[];
}

/** Nº de misiones excluyendo la final. */
const TOTAL_MISSIONS = 15;

/** Catálogo de misiones (el orden importa para la activación por oleadas). */
export const MISSIONS: MissionDef[] = [
  {
    id: 'walk1',
    title: 'Primeros pasos',
    hint: 'Camina 80 m por el bosque',
    xp: 10,
    goal: 80,
    kind: 'walk',
    icon: '🥾',
    requires: []
  },
  {
    id: 'flower1',
    title: 'Botánico del bosque',
    hint: 'Recoge 8 flores luminosas con la tecla E',
    xp: 40,
    goal: 8,
    kind: 'collect',
    item: 'flower',
    icon: '🌸',
    requires: []
  },
  {
    id: 'chop1',
    title: 'Leñador del valle',
    hint: 'Tala 3 árboles con el hacha (clic izquierdo)',
    xp: 30,
    cash: 60,
    goal: 3,
    kind: 'chop',
    icon: '🪓',
    requires: []
  },
  {
    id: 'obelisk1',
    title: 'El claro del obelisco',
    hint: 'Sigue el sendero ladera arriba hasta el obelisco',
    xp: 30,
    goal: 1,
    kind: 'reach',
    poi: { x: -46, z: -127, r: 13, label: 'Obelisco' },
    icon: '🗿',
    requires: []
  },
  {
    id: 'rock1',
    title: 'La gran roca musgosa',
    hint: 'Encuentra la gran roca junto al sendero de abajo',
    xp: 15,
    goal: 1,
    kind: 'reach',
    poi: { x: -15, z: 118, r: 9, label: 'Roca' },
    icon: '🪨',
    requires: ['walk1']
  },
  {
    id: 'sprint1',
    title: 'Atleta del bosque',
    hint: 'Corre 300 m manteniendo Shift',
    xp: 30,
    goal: 300,
    kind: 'sprint',
    icon: '💨',
    requires: ['walk1']
  },
  {
    id: 'drive1',
    title: 'Conductor del bosque',
    hint: 'Sube a un coche del pueblo con F y conducelo',
    xp: 20,
    cash: 40,
    goal: 1,
    kind: 'drive',
    icon: '🚗',
    requires: ['walk1']
  },
  {
    id: 'summit1',
    title: 'Hacia la cumbre',
    hint: 'Alcanza la explanada de la cumbre del cerro',
    xp: 40,
    goal: 1,
    kind: 'reach',
    poi: { x: SUMMIT.x, z: SUMMIT.z, r: 16, label: 'Cumbre' },
    icon: '⛰️',
    requires: ['obelisk1']
  },
  {
    id: 'crystal1',
    title: 'Fragmentos de resonancia',
    hint: 'Recoge 5 fragmentos de cristal en la ladera alta',
    xp: 50,
    goal: 5,
    kind: 'collect',
    item: 'crystal',
    icon: '💠',
    requires: ['obelisk1']
  },
  {
    id: 'sell1',
    title: 'Comerciante de madera',
    hint: 'Vende 10 de madera en el aserradero (E junto a la sierra)',
    xp: 25,
    cash: 50,
    goal: 10,
    kind: 'sell',
    icon: '💰',
    requires: ['chop1']
  },
  {
    id: 'build1',
    title: 'Constructor novato',
    hint: 'Construye 5 piezas de tu casa con B',
    xp: 40,
    cash: 80,
    goal: 5,
    kind: 'build',
    icon: '🔨',
    requires: ['chop1']
  },
  {
    id: 'drone1',
    title: 'El ojo en el cielo',
    hint: 'Acércate al dron que patrulla sobre la cumbre',
    xp: 30,
    goal: 1,
    kind: 'drone',
    icon: '🛸',
    requires: ['summit1']
  },
  {
    id: 'marker1',
    title: 'La efigie del Marcador',
    hint: 'Contémplala desde menos de 10 m',
    xp: 50,
    goal: 1,
    kind: 'reach',
    poi: { x: SUMMIT.x, z: SUMMIT.z, r: 10, label: 'Efigie' },
    icon: '👁️',
    requires: ['summit1']
  },
  {
    id: 'relic1',
    title: 'Reliquias del antiguo',
    hint: 'Encuentra 3 reliquias escondidas por el cerro',
    xp: 60,
    goal: 3,
    kind: 'collect',
    item: 'relic',
    icon: '⚱️',
    requires: ['summit1']
  },
  {
    id: 'walk2',
    title: 'Explorador incansable',
    hint: 'Camina 2000 m en total',
    xp: 60,
    goal: 2000,
    kind: 'walk',
    icon: '🧭',
    requires: ['sprint1']
  },
  {
    id: 'final',
    title: 'Guardián del bosque',
    hint: 'Completa todas las demás misiones',
    xp: 100,
    goal: TOTAL_MISSIONS,
    kind: 'all',
    icon: '🌲',
    requires: []
  }
];

export interface MissionEvent {
  def: MissionDef;
  xp: number;
}

export interface MissionState {
  active: boolean;
  done: boolean;
  progress: number;
}

/** Estado que el juego reporta cada frame al gestor de misiones. */
export interface PlayerStats {
  walked: number;
  sprinted: number;
  collected: Record<ItemKind, number>;
  playerPos: THREE.Vector3;
  /** Árboles talados con el hacha. */
  chopped: number;
  /** ¿Ya condujo un coche? (1/0). */
  drove: number;
  /** Piezas de casa construidas. */
  built: number;
  /** Madera vendida en el aserradero. */
  sold: number;
}

/** XP necesaria por nivel. */
const XP_PER_LEVEL = 120;
/** Máximo de misiones activas a la vez. */
const MAX_ACTIVE = 4;

/**
 * Gestor de misiones: activa por oleadas (según requisitos), mide el
 * progreso cada frame, otorga XP y emite eventos que el HUD convierte en
 * avisos y sonidos.
 */
export class MissionManager {
  readonly defs = MISSIONS;
  private readonly state = new Map<string, MissionState>();
  private _xp = 0;
  private level = 1;

  /** Colas de eventos que el Engine drena cada frame (audio + HUD). */
  readonly completedEvents: MissionEvent[] = [];
  readonly activatedEvents: MissionDef[] = [];
  readonly levelUpEvents: number[] = [];

  constructor() {
    for (const def of MISSIONS) this.state.set(def.id, { active: false, done: false, progress: 0 });
    // Primera oleada.
    this.refreshActive();
  }

  get xp(): number {
    return this._xp;
  }

  get levelNumber(): number {
    return this.level;
  }

  /** Fracción [0,1] de progreso hacia el siguiente nivel. */
  get levelProgress(): number {
    return (this._xp % XP_PER_LEVEL) / XP_PER_LEVEL;
  }

  isActive(id: string): boolean {
    return this.state.get(id)?.active ?? false;
  }

  isDone(id: string): boolean {
    return this.state.get(id)?.done ?? false;
  }

  progressOf(id: string): number {
    return this.state.get(id)?.progress ?? 0;
  }

  /** Misiones activas con su progreso, para el HUD y la brújula. */
  get activeMissions(): { def: MissionDef; progress: number }[] {
    const out: { def: MissionDef; progress: number }[] = [];
    for (const def of MISSIONS) {
      const s = this.state.get(def.id)!;
      if (s.active && !s.done) out.push({ def, progress: s.progress });
    }
    return out;
  }

  /** Todas con estado, para el panel del menú. */
  get all(): { def: MissionDef; state: MissionState }[] {
    return MISSIONS.map((def) => ({ def, state: this.state.get(def.id)! }));
  }

  get totalDone(): number {
    let n = 0;
    for (const s of this.state.values()) if (s.done) n++;
    return n;
  }

  /** Instantánea serializable (para el sistema de guardado). */
  serialize(): { xp: number; level: number; done: string[]; progress: Record<string, number> } {
    const done: string[] = [];
    const progress: Record<string, number> = {};
    for (const def of MISSIONS) {
      const s = this.state.get(def.id)!;
      if (s.done) done.push(def.id);
      if (s.progress > 0) progress[def.id] = s.progress;
    }
    return { xp: this._xp, level: this.level, done, progress };
  }

  /** Restaura una partida (llamar antes de empezar a actualizar). */
  apply(s: { xp?: number; level?: number; done?: string[]; progress?: Record<string, number> }): void {
    this._xp = Math.max(0, Math.floor(s.xp ?? 0));
    this.level = Math.max(1, Math.floor(s.level ?? 1 + Math.floor(this._xp / XP_PER_LEVEL)));
    const done = new Set(s.done ?? []);
    for (const def of MISSIONS) {
      const st = this.state.get(def.id)!;
      st.done = done.has(def.id);
      st.active = false;
      st.progress = st.done ? def.goal : Math.min(s.progress?.[def.id] ?? 0, def.goal);
    }
    // Sin eventos de activación heredados del arranque en frío.
    this.activatedEvents.length = 0;
    this.completedEvents.length = 0;
    this.levelUpEvents.length = 0;
    this.refreshActive();
  }

  update(stats: PlayerStats, dronePos: THREE.Vector3): void {
    for (const def of MISSIONS) {
      const s = this.state.get(def.id)!;
      if (!s.active || s.done) continue;

      switch (def.kind) {
        case 'walk':
          s.progress = Math.min(stats.walked, def.goal);
          break;
        case 'sprint':
          s.progress = Math.min(stats.sprinted, def.goal);
          break;
        case 'collect':
          s.progress = Math.min(stats.collected[def.item!] ?? 0, def.goal);
          break;
        case 'reach':
          s.progress =
            Math.hypot(stats.playerPos.x - def.poi!.x, stats.playerPos.z - def.poi!.z) < def.poi!.r
              ? 1
              : 0;
          break;
        case 'drone':
          s.progress = stats.playerPos.distanceTo(dronePos) < 9 ? 1 : 0;
          break;
        case 'chop':
          s.progress = Math.min(stats.chopped, def.goal);
          break;
        case 'drive':
          s.progress = stats.drove >= 1 ? 1 : 0;
          break;
        case 'build':
          s.progress = Math.min(stats.built, def.goal);
          break;
        case 'sell':
          s.progress = Math.min(stats.sold, def.goal);
          break;
        case 'all':
          s.progress = this.totalDone;
          break;
      }

      if (s.progress >= def.goal) {
        s.done = true;
        s.active = false;
        this.addXp(def.xp);
        this.completedEvents.push({ def, xp: def.xp });
        this.refreshActive();
      }
    }
  }

  private addXp(amount: number): void {
    this._xp += amount;
    const newLevel = 1 + Math.floor(this._xp / XP_PER_LEVEL);
    if (newLevel > this.level) {
      this.level = newLevel;
      this.levelUpEvents.push(newLevel);
    }
  }

  /** Activa (hasta MAX_ACTIVE) misiones cuyos requisitos ya se cumplieron. */
  private refreshActive(): void {
    let activeCount = this.activeMissions.length;
    if (activeCount >= MAX_ACTIVE) return;

    for (const def of MISSIONS) {
      if (activeCount >= MAX_ACTIVE) break;
      const s = this.state.get(def.id)!;
      if (s.active || s.done) continue;
      // La misión final se activa cuando todas las demás están hechas.
      if (def.kind === 'all' && this.totalDone < TOTAL_MISSIONS) continue;
      if (!def.requires.every((r) => this.state.get(r)?.done)) continue;

      s.active = true;
      this.activatedEvents.push(def);
      activeCount++;
    }
  }
}
