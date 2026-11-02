import { Engine } from '../core/Engine';
import { Economy } from './Economy';
import { HouseSave, PieceType, PieceStyle } from './Builder';

/**
 * Formato unificado de partida guardada (localStorage, clave tf-save-v2).
 */
export interface SaveData {
  v: 2;
  /** Hora del día 0..1. */
  t: number;
  /** Jugador: posición y mirada. */
  p: { x: number; y: number; z: number; yaw: number; pitch: number };
  /** Economía. */
  eco: { wood: number; money: number; sold: number };
  /** Progreso de misiones. */
  mis: { xp: number; level: number; done: string[]; progress: Record<string, number> };
  /** Casa del constructor (piezas, plantas, sótano). */
  house: HouseSave;
  /** Posiciones de los coches. */
  cars: { x: number; z: number; rotY: number; v: number }[];
  /** Marca de tiempo del guardado. */
  at: number;
}

const KEY = 'tf-save-v2';

/**
 * Sistema de guardado de la partida:
 * - Carga al arrancar (posición, hora, economía, misiones, casa, coches).
 * - Autoguardado cada 20 s de juego + al pausar y al cerrar la pestaña.
 * - Migra los guardados antiguos (economía y casa v1) la primera vez.
 * - Se puede borrar la partida desde el menú.
 */
export class SaveSystem {
  private lastAuto = 0;
  private saveTimer = 0;
  /** Se dispara al autoguardar (para el indicador del HUD). */
  onSaved: (() => void) | null = null;

  constructor(private readonly engine: Engine) {
    window.addEventListener('pagehide', () => this.saveNow());
    document.addEventListener('visibilitychange', () => {
      if (document.visibilityState === 'hidden') this.saveNow();
    });
  }

  /** ¿Hay partida guardada? */
  static exists(): boolean {
    try {
      return localStorage.getItem(KEY) !== null;
    } catch {
      return false;
    }
  }

  /** Lee (y valida) la partida guardada. */
  static read(): SaveData | null {
    try {
      const raw = localStorage.getItem(KEY);
      if (!raw) return null;
      const d = JSON.parse(raw) as SaveData;
      if (!d || typeof d !== 'object' || !d.p) return null;
      return d;
    } catch {
      return null;
    }
  }

  /** Restaura la partida en el Engine (llamar tras construir el mundo). */
  load(): boolean {
    const d = SaveSystem.read();
    if (d) {
      this.applyData(d);
      return true;
    }
    // Migración de guardados antiguos por primera vez.
    let migrated = false;
    const legacyEco = Economy.legacy();
    if (legacyEco && (legacyEco.wood > 0 || legacyEco.money !== 80 || legacyEco.sold > 0)) {
      this.engine.economy.apply(legacyEco);
      migrated = true;
    }
    try {
      const rawHouse = localStorage.getItem('tf-house-v1');
      if (rawHouse) {
        const list = JSON.parse(rawHouse) as {
          t: PieceType;
          p: [number, number, number];
          r: number;
          c: number;
          s: PieceStyle;
        }[];
        if (Array.isArray(list) && list.length) {
          this.engine.builder.applyLegacy(list);
          migrated = true;
        }
      }
    } catch {
      /* migración opcional */
    }
    return migrated;
  }

  private applyData(d: SaveData): void {
    const e = this.engine;
    e.controller.restoreSnapshot({
      x: d.p.x,
      y: d.p.y,
      z: d.p.z,
      yaw: d.p.yaw,
      pitch: d.p.pitch
    });
    e.sky.setTimeOfDay(d.t ?? 0.38);
    e.economy.apply(d.eco ?? {});
    e.missions.apply(d.mis ?? {});
    e.builder.apply(d.house ?? { pieces: [], floors: 0, basement: false });
    e.vehicles.apply(d.cars ?? []);
  }

  /** Marca el reloj de autoguardado (lo llama el Engine cada frame). */
  update(dt: number, playing: boolean): void {
    if (!playing) return;
    this.saveTimer += dt;
    if (this.saveTimer - this.lastAuto >= 20) {
      this.lastAuto = this.saveTimer;
      this.saveNow(true);
    }
  }

  /** Guarda ya (silencioso salvo autoguardado, que avisa al HUD). */
  saveNow(soft = false): void {
    try {
      const e = this.engine;
      const data: SaveData = {
        v: 2,
        t: e.sky.time,
        p: e.controller.getSnapshot(),
        eco: e.economy.serialize(),
        mis: e.missions.serialize(),
        house: e.builder.serialize(),
        cars: e.vehicles.serialize(),
        at: Date.now()
      };
      localStorage.setItem(KEY, JSON.stringify(data));
      if (soft) this.onSaved?.();
    } catch {
      /* sin persistencia */
    }
  }

  /** Borra la partida guardada (y los restos de claves antiguas). */
  static wipe(): void {
    try {
      localStorage.removeItem(KEY);
      localStorage.removeItem('tf-economy-v1');
      localStorage.removeItem('tf-house-v1');
    } catch {
      /* sin persistencia */
    }
  }
}

/** Utilidad para el HUD: icono del momento del día. */
export function dayIcon(time: number): string {
  if (time < 0.22 || time >= 0.82) return '🌙';
  if (time < 0.3) return '🌅';
  if (time < 0.72) return '☀️';
  return '🌇';
}
