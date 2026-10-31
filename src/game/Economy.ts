/**
 * Economía del jugador: madera y dinero.
 * - La madera se consigue talando árboles con el hacha.
 * - El dinero llega por misiones y vendiendo madera en el aserradero.
 * - Se persiste en localStorage para conservar la partida casual.
 */
const SAVE_KEY = 'tf-economy-v1';

export interface EconomyEvent {
  kind: 'wood' | 'cash' | 'spend' | 'sell';
  amount: number;
}

export class Economy {
  private _wood = 0;
  private _money = 80;
  private _totalSold = 0;

  /** Eventos que el Engine drena cada frame (toasts + sonido). */
  readonly events: EconomyEvent[] = [];

  constructor() {
    try {
      const raw = localStorage.getItem(SAVE_KEY);
      if (raw) {
        const d = JSON.parse(raw) as { wood?: number; money?: number; sold?: number };
        this._wood = Math.max(0, Math.floor(d.wood ?? 0));
        this._money = Math.max(0, Math.floor(d.money ?? 80));
        this._totalSold = Math.max(0, Math.floor(d.sold ?? 0));
      }
    } catch {
      /* localStorage no disponible: jugamos sin persistencia */
    }
  }

  get wood(): number {
    return this._wood;
  }

  get money(): number {
    return this._money;
  }

  /** Madera vendida en total (para la misión de comerciante). */
  get totalSold(): number {
    return this._totalSold;
  }

  addWood(amount: number): void {
    if (amount <= 0) return;
    this._wood += amount;
    this.events.push({ kind: 'wood', amount });
    this.save();
  }

  addCash(amount: number): void {
    if (amount <= 0) return;
    this._money += amount;
    this.events.push({ kind: 'cash', amount });
    this.save();
  }

  /** Vende toda la madera a cambio de dinero (aserradero). */
  sellWood(pricePerUnit = 5): number {
    if (this._wood <= 0) return 0;
    const earned = this._wood * pricePerUnit;
    this._totalSold += this._wood;
    this._money += earned;
    this.events.push({ kind: 'sell', amount: earned });
    this._wood = 0;
    this.save();
    return earned;
  }

  /** ¿Se puede pagar un coste en madera + dinero? */
  canAfford(wood: number, money: number): boolean {
    return this._wood >= wood && this._money >= money;
  }

  /** Gasta materiales; devuelve false si no alcanza. */
  spend(wood: number, money: number): boolean {
    if (!this.canAfford(wood, money)) return false;
    this._wood -= wood;
    this._money -= money;
    if (wood > 0 || money > 0) this.events.push({ kind: 'spend', amount: money });
    this.save();
    return true;
  }

  private save(): void {
    try {
      localStorage.setItem(
        SAVE_KEY,
        JSON.stringify({ wood: this._wood, money: this._money, sold: this._totalSold })
      );
    } catch {
      /* sin persistencia */
    }
  }
}
