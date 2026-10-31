import * as THREE from 'three';
import { Heightfield } from '../world/heightfield';
import { Collider } from '../world/Trees';
import { FirstPersonController } from '../player/FirstPersonController';
import { Economy } from './Economy';

/** Tipos de pieza construibles. */
export type PieceType = 'floor' | 'wall' | 'door' | 'window' | 'roof';

/** Estilo de muro: madera o piedra. */
export type PieceStyle = 'wood' | 'stone';

export interface PieceDef {
  type: PieceType;
  name: string;
  icon: string;
  wood: number;
  cash: number;
}

/** Catálogo con costes (madera + dinero). */
export const PIECES: Record<PieceType, PieceDef> = {
  floor: { type: 'floor', name: 'Tarima', icon: '▦', wood: 2, cash: 8 },
  wall: { type: 'wall', name: 'Pared', icon: '▮', wood: 4, cash: 16 },
  door: { type: 'door', name: 'Pared con puerta', icon: '🚪', wood: 4, cash: 24 },
  window: { type: 'window', name: 'Pared con ventana', icon: '🪟', wood: 4, cash: 22 },
  roof: { type: 'roof', name: 'Techo', icon: '🏠', wood: 5, cash: 28 }
};

export const PIECE_ORDER: PieceType[] = ['floor', 'wall', 'door', 'window', 'roof'];

/** Paleta de colores para personalizar la casa. */
export const PALETTE: { name: string; hex: number }[] = [
  { name: 'Madera clara', hex: 0xa9825a },
  { name: 'Verde pino', hex: 0x5f7a52 },
  { name: 'Terracota', hex: 0xb3573f },
  { name: 'Blanco hueso', hex: 0xd8d3c3 },
  { name: 'Gris piedra', hex: 0x8d8d88 },
  { name: 'Azul noche', hex: 0x4f6378 },
  { name: 'Mostaza', hex: 0xc9a04e }
];

const SAVE_KEY = 'tf-house-v1';
const GRID = 0.5;
const WALL_H = 2.6;
const FLOOR_S = 2.4;
const WALL_L = 2.4;
const WALL_T = 0.18;

interface BuiltPiece {
  type: PieceType;
  pos: THREE.Vector3;
  rotY: number;
  colorIdx: number;
  style: PieceStyle;
  mesh: THREE.Group;
  colliders: Collider[];
}

/** Datos serializables de una pieza. */
interface PieceData {
  t: PieceType;
  p: [number, number, number];
  r: number;
  c: number;
  s: PieceStyle;
}

/**
 * Constructor de casas: modo edición con fantasma (B), piezas seleccionables
 * con 1-5, rotación con R, estilo con T, color con Y, colocar con clic
 * izquierdo, modo derribar con X (clic para recuperar la mitad del coste).
 * Todo se guarda en localStorage.
 */
export class Builder {
  /** ¿Modo construcción activo? */
  active = false;
  /** Modo derribar dentro del constructor. */
  deleteMode = false;
  /** Piezas colocadas en total (misión). */
  builtCount = 0;

  private currentType: PieceType = 'floor';
  private colorIdx = 0;
  private style: PieceStyle = 'wood';
  private userRot = 0;

  private readonly group = new THREE.Group();
  private readonly pieces: BuiltPiece[] = [];
  private readonly ghost: THREE.Group;
  private readonly ghostMats = {
    ok: new THREE.MeshBasicMaterial({
      color: 0x7fe07f,
      transparent: true,
      opacity: 0.45,
      depthWrite: false
    }),
    bad: new THREE.MeshBasicMaterial({
      color: 0xe06060,
      transparent: true,
      opacity: 0.45,
      depthWrite: false
    })
  };
  private readonly tmp = new THREE.Vector3();
  private readonly fwd = new THREE.Vector3();
  private ghostValid = false;

  constructor(
    scene: THREE.Scene,
    private readonly field: Heightfield,
    private readonly controller: FirstPersonController,
    private readonly economy: Economy,
    private readonly colliders: Collider[]
  ) {
    scene.add(this.group);
    this.ghost = this.buildPiece('floor', 0, 'wood', true);
    this.ghost.visible = false;
    scene.add(this.ghost);
    this.load();
  }

  get selectedType(): PieceType {
    return this.currentType;
  }

  get selectedColor(): number {
    return this.colorIdx;
  }

  get selectedStyle(): PieceStyle {
    return this.style;
  }

  toggle(): void {
    this.active = !this.active;
    this.deleteMode = false;
    this.ghost.visible = this.active;
    if (this.active) this.refreshGhost();
  }

  /** Selección por teclado: 1-5 piezas, X derribar, R rotar, T estilo, Y color. */
  onKey(code: string): void {
    if (!this.active) return;
    if (code.startsWith('Digit')) {
      const n = Number(code.slice(5)) - 1;
      if (n >= 0 && n < PIECE_ORDER.length) {
        this.currentType = PIECE_ORDER[n];
        this.deleteMode = false;
        this.refreshGhost();
      }
      return;
    }
    switch (code) {
      case 'KeyR':
        this.userRot = (this.userRot + Math.PI / 2) % (Math.PI * 2);
        this.refreshGhost();
        break;
      case 'KeyT':
        this.style = this.style === 'wood' ? 'stone' : 'wood';
        this.refreshGhost();
        break;
      case 'KeyY':
        this.colorIdx = (this.colorIdx + 1) % PALETTE.length;
        this.refreshGhost();
        break;
      case 'KeyX':
        this.deleteMode = !this.deleteMode;
        this.ghost.visible = this.active && !this.deleteMode;
        break;
    }
  }

  /** Clic izquierdo en modo construcción: colocar o derribar. */
  onClick(): void {
    if (!this.active) return;
    if (this.deleteMode) {
      this.tryDelete();
      return;
    }
    if (!this.ghostValid) return;
    const def = PIECES[this.currentType];
    const extra = this.style === 'stone' ? 10 : 0;
    if (!this.economy.spend(def.wood, def.cash + extra)) return;

    const pos = this.ghost.position.clone();
    const rotY = this.ghost.rotation.y;
    const mesh = this.buildPiece(this.currentType, this.colorIdx, this.style, false);
    mesh.position.copy(pos);
    mesh.rotation.y = rotY;
    this.group.add(mesh);

    const colliders = this.addColliders(this.currentType, pos, rotY);
    this.pieces.push({
      type: this.currentType,
      pos,
      rotY,
      colorIdx: this.colorIdx,
      style: this.style,
      mesh,
      colliders
    });
    this.builtCount++;
    this.save();
  }

  private tryDelete(): void {
    // Derriba la pieza más cercana al fantasma/jugador.
    const p = this.controller.position;
    let best = -1;
    let bestD = 3.2;
    for (let i = 0; i < this.pieces.length; i++) {
      const d = Math.hypot(
        this.pieces[i].pos.x - p.x,
        this.pieces[i].pos.z - p.z
      );
      if (d < bestD) {
        bestD = d;
        best = i;
      }
    }
    if (best < 0) return;
    const piece = this.pieces[best];
    const def = PIECES[piece.type];
    const extra = piece.style === 'stone' ? 10 : 0;
    // Devuelve la mitad del coste.
    this.economy.addWood(Math.ceil(def.wood / 2));
    this.economy.addCash(Math.ceil((def.cash + extra) / 2));

    this.group.remove(piece.mesh);
    for (const c of piece.colliders) {
      const idx = this.colliders.indexOf(c);
      if (idx >= 0) this.colliders.splice(idx, 1);
    }
    this.pieces.splice(best, 1);
    this.save();
  }

  update(): void {
    if (!this.active || this.deleteMode) return;
    this.refreshGhost();
  }

  /** Recoloca el fantasma delante del jugador, ajustado a la rejilla. */
  private refreshGhost(): void {
    // Reconstruir el fantasma si cambia la selección.
    if (this.ghost.userData.type !== this.currentType) {
      this.ghost.clear();
      const inner = this.buildPiece(this.currentType, this.colorIdx, this.style, true);
      this.ghost.add(...inner.children);
      this.ghost.userData.type = this.currentType;
    }

    this.controller.getViewDir(this.fwd);
    const p = this.controller.position;
    const dist = 3.6;
    let gx = p.x + this.fwd.x * dist;
    let gz = p.z + this.fwd.z * dist;
    gx = Math.round(gx / GRID) * GRID;
    gz = Math.round(gz / GRID) * GRID;

    // Altura: apoyo sobre el terreno o sobre piezas ya colocadas.
    let support = this.field.sampleHeight(gx, gz);
    for (const piece of this.pieces) {
      if (Math.abs(piece.pos.x - gx) < 1.35 && Math.abs(piece.pos.z - gz) < 1.35) {
        const top = piece.type === 'wall' || piece.type === 'door' || piece.type === 'window'
          ? piece.pos.y + WALL_H
          : piece.type === 'roof'
            ? piece.pos.y + 0.7
            : piece.pos.y + 0.2;
        if (top < p.y + 2.6 && top > support) support = top;
      }
    }

    // Orientación: mirada del jugador cuantizada + rotación manual.
    const yaw = Math.atan2(this.fwd.x, this.fwd.z);
    const snappedYaw = Math.round(yaw / (Math.PI / 2)) * (Math.PI / 2);

    this.ghost.position.set(gx, support, gz);
    this.ghost.rotation.set(0, snappedYaw + this.userRot, 0);

    const def = PIECES[this.currentType];
    const extra = this.style === 'stone' ? 10 : 0;
    const tooClose = Math.hypot(gx - p.x, gz - p.z) < 1.0;
    this.ghostValid = this.economy.canAfford(def.wood, def.cash + extra) && !tooClose;

    // El fantasma válido se precolorea con el color elegido; inválido en rojo.
    const mat = this.ghostValid ? this.ghostMats.ok : this.ghostMats.bad;
    if (this.ghostValid) {
      mat.color.setHex(PALETTE[this.colorIdx % PALETTE.length].hex).lerp(new THREE.Color(0xffffff), 0.25);
    }
    this.ghost.traverse((o) => {
      if (o instanceof THREE.Mesh) o.material = mat;
    });
  }

  /** Geometría de cada pieza (fantasma o sólida). */
  private buildPiece(type: PieceType, colorIdx: number, style: PieceStyle, ghost: boolean): THREE.Group {
    const g = new THREE.Group();
    const hex = PALETTE[colorIdx % PALETTE.length].hex;
    const isStone = style === 'stone';
    const wallMat = ghost
      ? this.ghostMats.ok
      : new THREE.MeshStandardMaterial({
          color: hex,
          roughness: isStone ? 0.92 : 0.78,
          metalness: 0
        });
    const trimMat = ghost
      ? this.ghostMats.ok
      : new THREE.MeshStandardMaterial({ color: 0x5c452e, roughness: 0.85 });
    const glassMat = ghost
      ? this.ghostMats.ok
      : new THREE.MeshStandardMaterial({
          color: 0x2b3a42,
          roughness: 0.08,
          metalness: 0.7
        });

    const add = (geo: THREE.BufferGeometry, mat: THREE.Material, x = 0, y = 0, z = 0): void => {
      const m = new THREE.Mesh(geo, mat);
      m.position.set(x, y, z);
      if (!ghost) {
        m.castShadow = true;
        m.receiveShadow = true;
      }
      g.add(m);
    };

    switch (type) {
      case 'floor': {
        // Tablones transversales sobre vigas.
        const deck = new THREE.BoxGeometry(FLOOR_S, 0.14, FLOOR_S);
        add(deck, wallMat, 0, 0.07, 0);
        for (const s of [-1, 1]) {
          add(new THREE.BoxGeometry(0.18, 0.12, FLOOR_S), trimMat, s * 0.9, 0.02, 0);
        }
        break;
      }
      case 'wall': {
        if (isStone) {
          // Muro de piedra: bloques irregulares.
          for (let row = 0; row < 6; row++) {
            const n = 4 - (row % 2);
            for (let i = 0; i < n; i++) {
              const w = WALL_L / n - 0.03;
              const block = new THREE.BoxGeometry(w, 0.42, WALL_T);
              add(
                block,
                wallMat,
                -WALL_L / 2 + (i + 0.5) * (WALL_L / n),
                0.22 + row * 0.44,
                0
              );
            }
          }
        } else {
          // Tablones verticales con travesaños.
          for (let i = 0; i < 6; i++) {
            const plank = new THREE.BoxGeometry(WALL_L / 6 - 0.02, WALL_H, WALL_T);
            add(plank, wallMat, -WALL_L / 2 + (i + 0.5) * (WALL_L / 6), WALL_H / 2, 0);
          }
          add(new THREE.BoxGeometry(WALL_L, 0.16, WALL_T + 0.04), trimMat, 0, 0.3, 0);
          add(new THREE.BoxGeometry(WALL_L, 0.16, WALL_T + 0.04), trimMat, 0, WALL_H - 0.3, 0);
        }
        break;
      }
      case 'door': {
        // Laterales + dintel; el hueco se puede cruzar.
        for (const s of [-1, 1]) {
          const side = new THREE.BoxGeometry(0.8, WALL_H, WALL_T);
          add(side, wallMat, s * 0.8, WALL_H / 2, 0);
        }
        add(new THREE.BoxGeometry(0.8, 0.55, WALL_T), wallMat, 0, WALL_H - 0.275, 0);
        // Hoja de puerta abierta (decorativa, a 30°).
        const door = new THREE.BoxGeometry(0.78, 2.0, 0.06);
        const dm = new THREE.Mesh(door, trimMat);
        dm.position.set(-0.4, 1.0, 0.42);
        dm.rotation.y = 0.55;
        dm.castShadow = !ghost;
        g.add(dm);
        break;
      }
      case 'window': {
        // Marco + cristal en el centro de la pared.
        add(new THREE.BoxGeometry(WALL_L, 0.7, WALL_T), wallMat, 0, 0.35, 0);
        add(new THREE.BoxGeometry(WALL_L, 0.6, WALL_T), wallMat, 0, WALL_H - 0.3, 0);
        for (const s of [-1, 1]) {
          add(new THREE.BoxGeometry(0.45, WALL_H, WALL_T), wallMat, s * 0.975, WALL_H / 2, 0);
        }
        add(new THREE.BoxGeometry(1.3, 1.25, 0.06), trimMat, 0, 1.32, 0);
        add(new THREE.BoxGeometry(1.14, 1.1, 0.05), glassMat, 0, 1.32, 0.01);
        add(new THREE.BoxGeometry(0.07, 1.1, 0.07), trimMat, 0, 1.32, 0.02);
        break;
      }
      case 'roof': {
        // Dos aguas de 2.4 m de fondo.
        const slopeLen = Math.hypot(1.35, 1.45);
        const theta = Math.atan2(1.35, 1.45);
        for (const s of [-1, 1]) {
          const slope = new THREE.BoxGeometry(slopeLen, 0.12, 2.6);
          const m = new THREE.Mesh(slope, wallMat);
          m.position.set((s * 1.45) / 2, 0.75, 0);
          m.rotation.z = -s * theta;
          m.castShadow = !ghost;
          m.receiveShadow = !ghost;
          g.add(m);
        }
        const ridge = new THREE.Mesh(new THREE.BoxGeometry(0.28, 0.16, 2.6), trimMat);
        ridge.position.y = 1.48;
        ridge.castShadow = !ghost;
        g.add(ridge);
        break;
      }
    }
    g.userData.type = type;
    return g;
  }

  /** Colliders sólidos de una pieza colocada. */
  private addColliders(type: PieceType, pos: THREE.Vector3, rotY: number): Collider[] {
    const out: Collider[] = [];
    const sin = Math.sin(rotY);
    const cos = Math.cos(rotY);
    const at = (lx: number, lz: number): [number, number] => [
      pos.x + sin * lz + cos * lx,
      pos.z + cos * lz - sin * lx
    ];
    const line = (lx1: number, lz1: number, lx2: number, lz2: number, r = 0.4): void => {
      const [x1, z1] = at(lx1, lz1);
      const [x2, z2] = at(lx2, lz2);
      const len = Math.hypot(x2 - x1, z2 - z1);
      const n = Math.max(1, Math.round(len / 0.9));
      for (let i = 0; i <= n; i++) {
        const t = i / n;
        const c = { x: x1 + (x2 - x1) * t, z: z1 + (z2 - z1) * t, r };
        out.push(c);
        this.colliders.push(c);
      }
    };

    switch (type) {
      case 'floor':
      case 'roof':
        break; // se pisa por encima
      case 'wall':
        line(-1.1, 0, 1.1, 0);
        break;
      case 'door':
        line(-1.15, 0, -0.45, 0);
        line(0.45, 0, 1.15, 0);
        break;
      case 'window':
        line(-1.15, 0, 1.1, 0);
        break;
    }
    return out;
  }

  /** Reconstruye las piezas guardadas (localStorage) al arrancar. */
  private load(): void {
    try {
      const raw = localStorage.getItem(SAVE_KEY);
      if (!raw) return;
      const list = JSON.parse(raw) as PieceData[];
      for (const d of list) {
        if (!PIECES[d.t]) continue;
        const mesh = this.buildPiece(d.t, d.c, d.s, false);
        mesh.position.set(d.p[0], d.p[1], d.p[2]);
        mesh.rotation.y = d.r;
        this.group.add(mesh);
        const pos = new THREE.Vector3(d.p[0], d.p[1], d.p[2]);
        const colliders = this.addColliders(d.t, pos, d.r);
        this.pieces.push({
          type: d.t,
          pos,
          rotY: d.r,
          colorIdx: d.c,
          style: d.s,
          mesh,
          colliders
        });
      }
    } catch {
      /* sin persistencia */
    }
  }

  private save(): void {
    try {
      const list: PieceData[] = this.pieces.map((p) => ({
        t: p.type,
        p: [p.pos.x, p.pos.y, p.pos.z] as [number, number, number],
        r: p.rotY,
        c: p.colorIdx,
        s: p.style
      }));
      localStorage.setItem(SAVE_KEY, JSON.stringify(list));
    } catch {
      /* sin persistencia */
    }
  }
}
