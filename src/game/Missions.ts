import * as THREE from 'three';
import { SUMMIT } from '../world/heightfield';

/** Tipos de objetivo que puede tener una misión. */
export type MissionKind = 'walk' | 'sprint' | 'reach' | 'collect' | 'drone' | 'all';

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
  goal: number;
  kind: MissionKind;
  icon: string;
  poi?: MissionPOI;
  item?: ItemKind;
  /** Misiones que deben completarse antes de que ésta se active. */
  requires: string[];
}

/** Nº de misiones excluyendo la final. */
const TOTAL_MISSIONS = 11;

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
