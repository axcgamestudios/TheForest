import * as THREE from 'three';
import { Heightfield, PLOT } from '../world/heightfield';
import { Collider } from '../world/Trees';
import { FirstPersonController } from '../player/FirstPersonController';
import { Economy } from './Economy';
import { plankTexture, brickTexture } from '../core/textures';

/** Tipos de pieza construibles. */
export type PieceType = 'floor' | 'wall' | 'door' | 'window' | 'roof' | 'stairs';

/** Estilo de muro: madera, piedra o ladrillo. */
export type PieceStyle = 'wood' | 'stone' | 'brick';

export interface PieceDef {
  type: PieceType;
  name: string;
  icon: string;
  wood: number;
  cash: number;
}

/** Catálogo con costes (madera + dinero). Cada pared se compra POR SEPARADO. */
export const PIECES: Record<PieceType, PieceDef> = {
  floor: { type: 'floor', name: 'Tarima', icon: '▦', wood: 2, cash: 8 },
  wall: { type: 'wall', name: 'Pared', icon: '▮', wood: 4, cash: 16 },
  door: { type: 'door', name: 'Pared con puerta', icon: '🚪', wood: 4, cash: 24 },
  window: { type: 'window', name: 'Pared con ventana', icon: '🪟', wood: 4, cash: 22 },
  stairs: { type: 'stairs', name: 'Escalera', icon: '🪜', wood: 3, cash: 14 },
  roof: { type: 'roof', name: 'Techo', icon: '🏠', wood: 5, cash: 28 }
};

export const PIECE_ORDER: PieceType[] = ['floor', 'wall', 'door', 'window', 'stairs', 'roof'];

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

/** Plantas ampliables de la casa (índice = planta 1, 2, 3). */
export const FLOOR_COSTS: { wood: number; cash: number }[] = [
  { wood: 20, cash: 100 },
  { wood: 30, cash: 180 },
  { wood: 40, cash: 260 }
];

/** Coste del sótano (excavación + escalera de acceso incluidas). */
export const BASEMENT_COST = { wood: 30, cash: 150 };

/** Nombre legible de cada nivel (para el HUD). */
export function levelName(l: number): string {
  if (l < 0) return 'Sótano';
  if (l === 0) return 'Planta baja';
  return `${l}ª planta`;
}

const WALL_H = 2.6;
const BASE_DEPTH = 2.6;
const GRID = 0.5;
/** Excavación del sótano (rect interior de la parcela). */
const EXCAV = { cx: 28, cz: 121.5, halfW: 5, halfD: 4.5 };
/** Rampa de acceso: del borde sur de la parcela hasta el fondo del sótano. */
const RAMP = { x1: 28, z1: 125.6, x2: 28, z2: 132.8, halfW: 0.95 };
const MAX_FLOORS = 3;

interface BuiltPiece {
  type: PieceType;
  pos: THREE.Vector3;
  rotY: number;
  colorIdx: number;
  style: PieceStyle;
  level: number;
  mesh: THREE.Group;
  colliders: Collider[];
}

/** Datos serializables de la casa. */
export interface HouseSave {
  pieces: { t: PieceType; p: [number, number, number]; r: number; c: number; s: PieceStyle; l: number }[];
  floors: number;
  basement: boolean;
}

/** Aviso de compra para el HUD (lo drena el Engine). */
export interface BuilderNotice {
  ok: boolean;
  title: string;
  sub: string;
}

/** Textura del cartel de la parcela. */
function signTexture(): THREE.CanvasTexture {
  const c = document.createElement('canvas');
  c.width = 256;
  c.height = 160;
  const ctx = c.getContext('2d')!;
  ctx.fillStyle = '#5c452e';
  ctx.fillRect(0, 0, 256, 160);
  ctx.strokeStyle = '#8a6a48';
  ctx.lineWidth = 10;
  ctx.strokeRect(5, 5, 246, 150);
  ctx.fillStyle = '#f3e6c8';
  ctx.textAlign = 'center';
  ctx.font = 'bold 40px Georgia, serif';
  ctx.fillText('TU PARCELA', 128, 66);
  ctx.font = '24px Georgia, serif';
  ctx.fillStyle = '#d9c9a3';
  ctx.fillText('pulsa B para construir', 128, 108);
  ctx.font = '20px Georgia, serif';
  ctx.fillText('tu casa', 128, 136);
  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}

/**
 * Constructor de casas EN TU PARCELA, súper personalizable:
 * - Compras cada pared / puerta / ventana / tarima POR SEPARADO.
 * - Compras cuántas PLANTAS tiene tu casa (hasta 3 sobre rasante).
 * - Compras el SÓTANO: se excava el terreno de verdad (con rampa de
 *   acceso de piedra) y se construye un nivel bajo tierra.
 * - Estilo madera / piedra / ladrillo, 7 colores, rotación libre a 90°.
 * - Escaleras internas para subir entre plantas (se pisan de verdad).
 *
 * Controles: B modo · 1-6 pieza · Q/Z nivel · G comprar planta ·
 * H comprar sótano · R rotar · T estilo · Y color · X demoler.
 */
export class Builder {
  /** ¿Modo construcción activo? */
  active = false;
  /** Modo derribar dentro del constructor. */
  deleteMode = false;
  /** Piezas colocadas en total (misión). */
  builtCount = 0;

  /** Avisos de compra (toasts) que el Engine drena. */
  readonly notices: BuilderNotice[] = [];

  /** Plantas ampliadas compradas (0 = sólo planta baja). */
  floors = 0;
  /** ¿Tiene sótano comprado? */
  basement = false;

  private currentType: PieceType = 'floor';
  private colorIdx = 0;
  private style: PieceStyle = 'wood';
  private userRot = 0;
  /** Nivel activo: -1 sótano · 0 baja · 1..3 plantas. */
  private level = 0;

  /** Altura de referencia de la parcela (antes de excavar). */
  private readonly gradeY: number;
  private readonly group = new THREE.Group();
  private readonly pieces: BuiltPiece[] = [];
  private readonly ghost: THREE.Group;
  private readonly grid: THREE.GridHelper;
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
  private readonly fwd = new THREE.Vector3();
  private ghostValid = false;

  constructor(
    scene: THREE.Scene,
    private readonly field: Heightfield,
    private readonly controller: FirstPersonController,
    private readonly economy: Economy,
    private readonly colliders: Collider[],
    private readonly rebuildTerrain: (x: number, z: number, pad: number) => void
  ) {
    this.gradeY = this.field.sampleHeight(PLOT.x, PLOT.z);
    scene.add(this.group);

    // Cerca perimetral + cartel: la parcela es tuya desde el principio.
    this.buildFence(scene);

    // Rejilla de ayuda del nivel activo.
    this.grid = new THREE.GridHelper(PLOT.half * 2, 16, 0x9fe07f, 0x5a7a4a);
    (this.grid.material as THREE.Material).transparent = true;
    (this.grid.material as THREE.Material).opacity = 0.35;
    this.grid.visible = false;
    scene.add(this.grid);

    this.ghost = this.buildPiece('floor', 0, 'wood', true);
    this.ghost.visible = false;
    scene.add(this.ghost);

    // El jugador camina sobre tarimas, techos y escaleras del constructor.
    this.controller.setPlatformProvider(this.platformAt);
  }

  /** Altura base de un nivel (sótano excavado, baja a rasante, plantas arriba). */
  private levelBase(l: number): number {
    if (l < 0) return this.gradeY - BASE_DEPTH;
    return this.gradeY + l * WALL_H;
  }

  /** Niveles disponibles ahora mismo (comprados). */
  get levels(): number[] {
    const out: number[] = [];
    if (this.basement) out.push(-1);
    for (let l = 0; l <= this.floors; l++) out.push(l);
    return out;
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

  get selectedLevel(): number {
    return this.level;
  }

  toggle(): void {
    this.active = !this.active;
    this.deleteMode = false;
    this.ghost.visible = this.active;
    this.grid.visible = this.active;
    if (this.active) this.refreshGhost();
  }

  /** Selección por teclado dentro del modo construcción. */
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
        this.style = this.style === 'wood' ? 'stone' : this.style === 'stone' ? 'brick' : 'wood';
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
      case 'KeyQ':
        this.stepLevel(+1);
        break;
      case 'KeyZ':
        this.stepLevel(-1);
        break;
      case 'KeyG':
        this.buyFloor();
        break;
      case 'KeyH':
        this.buyBasement();
        break;
    }
  }

  /** Cambia de nivel activo entre los comprados. */
  private stepLevel(dir: number): void {
    const lv = this.levels;
    if (lv.length < 2) {
      this.notices.push({
        ok: false,
        title: 'Sin más niveles',
        sub: this.floors >= MAX_FLOORS && this.basement
          ? 'Ya tienes sótano y las 3 plantas'
          : `Compra con ${this.basement ? 'G (planta)' : 'H (sótano) · G (planta)'}`
      });
      return;
    }
    const i = lv.indexOf(this.level);
    const ni = THREE.MathUtils.clamp((i < 0 ? lv.length - 1 : i) + dir, 0, lv.length - 1);
    this.level = lv[ni];
    this.refreshGhost();
  }

  /** Compra la siguiente planta ampliada (G). */
  buyFloor(): void {
    if (!this.active) return;
    if (this.floors >= MAX_FLOORS) {
      this.notices.push({ ok: false, title: 'Límite alcanzado', sub: 'La casa ya tiene 3 plantas' });
      return;
    }
    const cost = FLOOR_COSTS[this.floors];
    if (!this.economy.spend(cost.wood, cost.cash)) {
      this.notices.push({
        ok: false,
        title: `Ampliar a ${levelName(this.floors + 1)}`,
        sub: `Necesitas 🪵 ${cost.wood} + $${cost.cash}`
      });
      return;
    }
    this.floors++;
    this.level = this.floors;
    this.refreshGhost();
    this.notices.push({
      ok: true,
      title: `¡${levelName(this.floors)} comprada!`,
      sub: 'Sube con Q y construye encima (tecla 6 para escaleras)'
    });
  }

  /** Compra el sótano: excava la parcela con rampa de acceso (H). */
  buyBasement(): void {
    if (!this.active) return;
    if (this.basement) {
      this.notices.push({ ok: false, title: 'Sótano ya construido', sub: 'Baja con Z para edificar en él' });
      return;
    }
    if (!this.economy.spend(BASEMENT_COST.wood, BASEMENT_COST.cash)) {
      this.notices.push({
        ok: false,
        title: 'Comprar sótano',
        sub: `Necesitas 🪵 ${BASEMENT_COST.wood} + $${BASEMENT_COST.cash}`
      });
      return;
    }
    this.excavate();
    this.level = -1;
    this.refreshGhost();
    this.notices.push({
      ok: true,
      title: '¡Sótano excavado!',
      sub: 'Baja por la rampa de piedra y construye bajo tierra (Z para bajar)'
    });
  }

  /** Excava el terreno de la parcela (idempotente). */
  private excavate(): void {
    if (this.basement) return;
    this.basement = true;
    const floorY = this.gradeY - BASE_DEPTH;
    this.field.carve(EXCAV.cx, EXCAV.cz, EXCAV.halfW, EXCAV.halfD, floorY, 1.6);
    this.field.carveRamp(RAMP.x1, RAMP.z1, RAMP.x2, RAMP.z2, RAMP.halfW, BASE_DEPTH, floorY, 1.4);
    this.rebuildTerrain(28, 124.5, 13);
    this.buildBasementKit();
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
    const extra = this.style === 'wood' ? 0 : this.style === 'stone' ? 10 : 6;
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
      level: this.level,
      mesh,
      colliders
    });
    this.builtCount++;
  }

  private tryDelete(): void {
    // Derriba la pieza más cercana al jugador.
    const p = this.controller.position;
    let best = -1;
    let bestD = 3.2;
    for (let i = 0; i < this.pieces.length; i++) {
      const d = Math.hypot(this.pieces[i].pos.x - p.x, this.pieces[i].pos.z - p.z);
      if (d < bestD) {
        bestD = d;
        best = i;
      }
    }
    if (best < 0) return;
    const piece = this.pieces[best];
    const def = PIECES[piece.type];
    const extra = piece.style === 'wood' ? 0 : piece.style === 'stone' ? 10 : 6;
    // Devuelve la mitad del coste.
    this.economy.addWood(Math.ceil(def.wood / 2));
    this.economy.addCash(Math.ceil((def.cash + extra) / 2));

    this.group.remove(piece.mesh);
    for (const c of piece.colliders) {
      const idx = this.colliders.indexOf(c);
      if (idx >= 0) this.colliders.splice(idx, 1);
    }
    this.pieces.splice(best, 1);
  }

  update(): void {
    if (!this.active || this.deleteMode) return;
    this.refreshGhost();
  }

  /** Recoloca el fantasma delante del jugador, ajustado a la rejilla del nivel. */
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

    // Altura FIJA por nivel (+ altura de muro para el techo).
    const base = this.levelBase(this.level);
    const y = this.currentType === 'roof' ? base + WALL_H : base;

    // Orientación: mirada del jugador cuantizada + rotación manual.
    const yaw = Math.atan2(this.fwd.x, this.fwd.z);
    const snappedYaw = Math.round(yaw / (Math.PI / 2)) * (Math.PI / 2);

    this.ghost.position.set(gx, y, gz);
    this.ghost.rotation.set(0, snappedYaw + this.userRot, 0);

    // Rejilla de ayuda a la altura del nivel activo.
    this.grid.position.set(PLOT.x, y + 0.02, PLOT.z);

    const def = PIECES[this.currentType];
    const extra = this.style === 'wood' ? 0 : this.style === 'stone' ? 10 : 6;
    const tooClose = Math.hypot(gx - p.x, gz - p.z) < 1.0;
    const inPlot =
      Math.abs(gx - PLOT.x) < PLOT.half - 0.55 && Math.abs(gz - PLOT.z) < PLOT.half - 0.55;
    // En el sótano sólo se puede edificar dentro de la excavación.
    const inPit =
      this.level >= 0 ||
      (Math.abs(gx - EXCAV.cx) < EXCAV.halfW - 0.45 && Math.abs(gz - EXCAV.cz) < EXCAV.halfD - 0.45);
    this.ghostValid =
      this.economy.canAfford(def.wood, def.cash + extra) && !tooClose && inPlot && inPit;

    // El fantasma válido se precolorea con el color elegido; inválido en rojo.
    const mat = this.ghostValid ? this.ghostMats.ok : this.ghostMats.bad;
    if (this.ghostValid) {
      mat.color.setHex(PALETTE[this.colorIdx % PALETTE.length].hex).lerp(new THREE.Color(0xffffff), 0.25);
    }
    this.ghost.traverse((o) => {
      if (o instanceof THREE.Mesh) o.material = mat;
    });
  }

  /**
   * Proveedor de superficies pisables para el controlador: tarimas, techos
   * (por la cumbrera) y escalones de las escaleras del constructor.
   */
  private readonly platformAt = (x: number, z: number, feetY: number): number => {
    let best = -Infinity;
    const stepUp = FirstPersonController.STEP_UP;
    for (const piece of this.pieces) {
      const dx = x - piece.pos.x;
      const dz = z - piece.pos.z;
      const c = Math.cos(piece.rotY);
      const s = Math.sin(piece.rotY);
      const lx = c * dx - s * dz;
      const lz = s * dx + c * dz;

      let top: number | null = null;
      if (piece.type === 'floor') {
        if (Math.abs(lx) <= 1.25 && Math.abs(lz) <= 1.25) top = piece.pos.y + 0.14;
      } else if (piece.type === 'roof') {
        if (Math.abs(lx) <= 1.5 && Math.abs(lz) <= 1.35) top = piece.pos.y + 1.5;
      } else if (piece.type === 'stairs') {
        if (Math.abs(lx) <= 0.7 && lz >= -1.3 && lz <= 1.3) {
          const i = THREE.MathUtils.clamp(Math.floor((lz + 1.2) / 0.3), 0, 7);
          top = piece.pos.y + (i + 1) * (WALL_H / 8);
        }
      }
      if (top !== null && top <= feetY + stepUp && top > best) best = top;
    }
    return best;
  };

  /** Geometría de cada pieza (fantasma o sólida). */
  private buildPiece(type: PieceType, colorIdx: number, style: PieceStyle, ghost: boolean): THREE.Group {
    const g = new THREE.Group();
    const hex = PALETTE[colorIdx % PALETTE.length].hex;
    const tex = !ghost && style === 'brick' ? brickTexture() : null;
    const wallMat = ghost
      ? this.ghostMats.ok
      : new THREE.MeshStandardMaterial({
          color: hex,
          ...(tex ? { map: tex } : {}),
          roughness: style === 'stone' ? 0.92 : style === 'brick' ? 0.85 : 0.78,
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

    const add = (
      geo: THREE.BufferGeometry,
      mat: THREE.Material,
      x = 0,
      y = 0,
      z = 0,
      skirt = false
    ): void => {
      const m = new THREE.Mesh(geo, mat);
      m.position.set(x, y, z);
      if (!ghost) {
        m.castShadow = true;
        m.receiveShadow = true;
      }
      void skirt;
      g.add(m);
    };
    // Faldón que tapa la junta pieza-terreno / pieza-tarima.
    const WALL_L = 2.4;
    const WALL_T = 0.18;
    const skirtMat = ghost ? this.ghostMats.ok : trimMat;
    const addWalled = (mat: THREE.Material): void => {
      add(new THREE.BoxGeometry(WALL_L + 0.02, 0.5, WALL_T + 0.02), skirtMat, 0, -0.24, 0);
      void mat;
    };

    switch (type) {
      case 'floor': {
        // Tablones transversales sobre vigas.
        add(new THREE.BoxGeometry(2.4, 0.14, 2.4), wallMat, 0, 0.07, 0);
        for (const s of [-1, 1]) {
          add(new THREE.BoxGeometry(0.18, 0.12, 2.4), trimMat, s * 0.9, 0.02, 0);
        }
        for (let i = 0; i < 4; i++) {
          add(new THREE.BoxGeometry(2.3, 0.02, 0.03), trimMat, 0, 0.145, -0.9 + i * 0.6);
        }
        break;
      }
      case 'wall': {
        if (style === 'stone') {
          // Muro de piedra: bloques irregulares.
          for (let row = 0; row < 6; row++) {
            const n = 4 - (row % 2);
            for (let i = 0; i < n; i++) {
              const w = WALL_L / n - 0.03;
              add(
                new THREE.BoxGeometry(w, 0.42, WALL_T),
                wallMat,
                -WALL_L / 2 + (i + 0.5) * (WALL_L / n),
                0.22 + row * 0.44,
                0
              );
            }
          }
        } else {
          // Tablones verticales (o ladrillo con textura) con travesaños.
          for (let i = 0; i < 6; i++) {
            add(
              new THREE.BoxGeometry(WALL_L / 6 - 0.02, WALL_H, WALL_T),
              wallMat,
              -WALL_L / 2 + (i + 0.5) * (WALL_L / 6),
              WALL_H / 2,
              0
            );
          }
          add(new THREE.BoxGeometry(WALL_L, 0.16, WALL_T + 0.04), trimMat, 0, 0.3, 0);
          add(new THREE.BoxGeometry(WALL_L, 0.16, WALL_T + 0.04), trimMat, 0, WALL_H - 0.3, 0);
        }
        addWalled(wallMat);
        break;
      }
      case 'door': {
        // Laterales + dintel; el hueco se puede cruzar.
        for (const s of [-1, 1]) {
          add(new THREE.BoxGeometry(0.8, WALL_H, WALL_T), wallMat, s * 0.8, WALL_H / 2, 0);
        }
        add(new THREE.BoxGeometry(0.8, 0.55, WALL_T), wallMat, 0, WALL_H - 0.275, 0);
        // Hoja de puerta abierta (decorativa, a 30°).
        const door = new THREE.Mesh(new THREE.BoxGeometry(0.78, 2.0, 0.06), trimMat);
        door.position.set(-0.4, 1.0, 0.42);
        door.rotation.y = 0.55;
        door.castShadow = !ghost;
        g.add(door);
        addWalled(wallMat);
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
        addWalled(wallMat);
        break;
      }
      case 'stairs': {
        // Escalera recta de 8 peldaños (2.6 m de alto, 2.4 m de fondo).
        const n = 8;
        const rise = WALL_H / n;
        const run = 2.4 / n;
        for (let i = 0; i < n; i++) {
          add(
            new THREE.BoxGeometry(1.3, rise + 0.05, run + 0.02),
            wallMat,
            0,
            (i + 1) * rise - (rise + 0.05) / 2,
            -1.2 + (i + 0.5) * run
          );
        }
        // Zanca lateral (viga inclinada decorativa).
        for (const s of [-1, 1]) {
          const zanca = new THREE.Mesh(new THREE.BoxGeometry(0.09, 0.14, 2.6), trimMat);
          zanca.position.set(s * 0.66, WALL_H / 2, 0);
          zanca.rotation.x = Math.atan2(WALL_H, 2.4) * -1 + 0;
          zanca.castShadow = !ghost;
          g.add(zanca);
        }
        break;
      }
      case 'roof': {
        // Dos aguas de 2.4 m de fondo.
        const slopeLen = Math.hypot(1.35, 1.45);
        const theta = Math.atan2(1.35, 1.45);
        for (const s of [-1, 1]) {
          const slope = new THREE.Mesh(new THREE.BoxGeometry(slopeLen, 0.12, 2.6), wallMat);
          slope.position.set((s * 1.45) / 2, 0.75, 0);
          slope.rotation.z = -s * theta;
          slope.castShadow = !ghost;
          slope.receiveShadow = !ghost;
          g.add(slope);
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

  /** Colliders sólidos de una pieza colocada (con banda de altura del nivel). */
  private addColliders(type: PieceType, pos: THREE.Vector3, rotY: number): Collider[] {
    const out: Collider[] = [];
    const base = pos.y;
    const minY = base - 0.5;
    const maxY = base + WALL_H - 0.06;
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
        const c = { x: x1 + (x2 - x1) * t, z: z1 + (z2 - z1) * t, r, minY, maxY };
        out.push(c);
        this.colliders.push(c);
      }
    };

    switch (type) {
      case 'floor':
      case 'roof':
      case 'stairs':
        break; // se pisa por encima (plataforma del controlador)
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

  // ================= Cerca, cartel y sótano =================

  /** Cerca perimetral de madera con hueco de entrada al sur + cartel. */
  private buildFence(scene: THREE.Scene): void {
    const g = new THREE.Group();
    const wood = new THREE.MeshStandardMaterial({
      map: plankTexture(),
      color: 0xb99a72,
      roughness: 0.85
    });
    const dark = new THREE.MeshStandardMaterial({ color: 0x5c452e, roughness: 0.9 });
    const y0 = this.gradeY;
    const h = PLOT.half;

    const postGeo = new THREE.BoxGeometry(0.14, 1.15, 0.14);
    const railGeo = new THREE.BoxGeometry(2.05, 0.07, 0.05);

    const side = (fx: number, fz: number, tx: number, tz: number, gapA?: number, gapB?: number): void => {
      const len = Math.hypot(tx - fx, tz - fz);
      const n = Math.max(2, Math.round(len / 2.05));
      const ux = (tx - fx) / len;
      const uz = (tz - fz) / len;
      const gA = gapA ?? -Infinity;
      const gB = gapB ?? Infinity;
      for (let i = 0; i < n; i++) {
        const d0 = (i / n) * len;
        const d1 = ((i + 1) / n) * len;
        const mid = (d0 + d1) / 2;
        // Hueco de entrada (en coordenadas de la cerca, no del mundo).
        if (mid > gA && mid < gB) continue;
        const px = fx + ux * d1;
        const pz = fz + uz * d1;
        const gy = this.field.sampleHeight(px, pz);
        const post = new THREE.Mesh(postGeo, dark);
        post.position.set(px, gy + 0.55, pz);
        post.rotation.y = Math.atan2(-uz, ux);
        post.castShadow = true;
        g.add(post);
        if (!(d1 > gA && d0 < gB)) {
          const rmx = fx + ux * mid;
          const rmz = fz + uz * mid;
          const rmy = this.field.sampleHeight(rmx, rmz);
          for (const ry of [0.42, 0.85]) {
            const rail = new THREE.Mesh(railGeo, wood);
            rail.position.set(rmx, rmy + ry, rmz);
            rail.rotation.y = Math.atan2(-uz, ux);
            rail.castShadow = true;
            g.add(rail);
          }
        }
      }
    };

    // Norte, este, oeste completos; sur con hueco de entrada (4.8 m).
    side(PLOT.x - h, PLOT.z - h, PLOT.x + h, PLOT.z - h);
    side(PLOT.x + h, PLOT.z - h, PLOT.x + h, PLOT.z + h);
    side(PLOT.x + h, PLOT.z + h, PLOT.x - h, PLOT.z + h, 10.8, 15.6);
    side(PLOT.x - h, PLOT.z + h, PLOT.x - h, PLOT.z - h);

    // Postes de las esquinas.
    for (const [sx, sz] of [
      [-1, -1],
      [1, -1],
      [1, 1],
      [-1, 1]
    ]) {
      const px = PLOT.x + sx * h;
      const pz = PLOT.z + sz * h;
      const corner = new THREE.Mesh(new THREE.BoxGeometry(0.2, 1.4, 0.2), dark);
      corner.position.set(px, this.field.sampleHeight(px, pz) + 0.7, pz);
      corner.castShadow = true;
      g.add(corner);
    }

    // Cartel junto a la entrada sur.
    const signX = PLOT.x - 3.2;
    const signZ = PLOT.z + h + 0.6;
    const signY = this.field.sampleHeight(signX, signZ);
    for (const s of [-1, 1]) {
      const leg = new THREE.Mesh(new THREE.BoxGeometry(0.1, 1.5, 0.1), dark);
      leg.position.set(signX + s * 0.7, signY + 0.75, signZ);
      leg.castShadow = true;
      g.add(leg);
    }
    const boardMat = new THREE.MeshStandardMaterial({
      map: signTexture(),
      roughness: 0.8
    });
    const board = new THREE.Mesh(new THREE.BoxGeometry(1.7, 1.05, 0.07), [
      boardMat, boardMat, dark, dark, boardMat, boardMat
    ]);
    board.position.set(signX, signY + 1.35, signZ);
    board.castShadow = true;
    g.add(board);

    scene.add(g);
  }

  /** Muros de contención y escalones de piedra del sótano. */
  private buildBasementKit(): void {
    const g = new THREE.Group();
    const stone = new THREE.MeshStandardMaterial({
      map: brickTexture(),
      color: 0xa8a49a,
      roughness: 0.95
    });
    const floorY = this.gradeY - BASE_DEPTH;
    const rimTop = this.gradeY + 0.45;
    const h = rimTop - floorY;
    const cy = (rimTop + floorY) / 2;

    const wall = (cx: number, cz: number, w: number, d: number): void => {
      const m = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), stone);
      m.position.set(cx, cy, cz);
      m.castShadow = true;
      m.receiveShadow = true;
      g.add(m);
    };

    // Contención perimetral de la excavación (muro sur partido para la rampa).
    const { cx, cz, halfW, halfD } = EXCAV;
    wall(cx, cz - halfD - 0.18, halfW * 2 + 0.9, 0.36);
    wall(cx + halfW + 0.18, cz, 0.36, halfD * 2);
    wall(cx - halfW - 0.18, cz, 0.36, halfD * 2);
    const segW = halfW - RAMP.halfW - 0.35;
    wall(cx - (RAMP.halfW + 0.35 + segW / 2), cz + halfD + 0.18, segW, 0.36);
    wall(cx + (RAMP.halfW + 0.35 + segW / 2), cz + halfD + 0.18, segW, 0.36);

    // Escalones de piedra sobre la rampa excavada.
    const steps = 10;
    for (let i = 0; i < steps; i++) {
      const t = (i + 0.5) / steps;
      const sz = RAMP.z1 + (RAMP.z2 - RAMP.z1) * t;
      const sy = this.field.sampleHeight(RAMP.x1, sz);
      const step = new THREE.Mesh(new THREE.BoxGeometry(RAMP.halfW * 2 + 0.5, 0.34, 0.68), stone);
      step.position.set(RAMP.x1, sy + 0.05, sz);
      step.receiveShadow = true;
      step.castShadow = true;
      g.add(step);
    }

    // Solado de piedra del fondo del sótano (base para edificar).
    const slab = new THREE.Mesh(new THREE.BoxGeometry(halfW * 2 - 0.2, 0.12, halfD * 2 - 0.2), stone);
    slab.position.set(cx, floorY + 0.05, cz);
    slab.receiveShadow = true;
    g.add(slab);

    this.group.add(g);
  }

  // ================= Persistencia =================

  /** Instantánea serializable de la casa. */
  serialize(): HouseSave {
    return {
      pieces: this.pieces.map((p) => ({
        t: p.type,
        p: [p.pos.x, p.pos.y, p.pos.z] as [number, number, number],
        r: p.rotY,
        c: p.colorIdx,
        s: p.style,
        l: p.level
      })),
      floors: this.floors,
      basement: this.basement
    };
  }

  /** Restaura una partida guardada (vacia la casa actual y reconstruye). */
  apply(save: HouseSave): void {
    for (const piece of this.pieces) {
      this.group.remove(piece.mesh);
      for (const c of piece.colliders) {
        const idx = this.colliders.indexOf(c);
        if (idx >= 0) this.colliders.splice(idx, 1);
      }
    }
    this.pieces.length = 0;
    this.floors = THREE.MathUtils.clamp(Math.floor(save.floors ?? 0), 0, MAX_FLOORS);
    if (save.basement) this.excavate();

    for (const d of save.pieces ?? []) {
      if (!PIECES[d.t]) continue;
      const level = THREE.MathUtils.clamp(Math.floor(d.l ?? 0), this.basement ? -1 : 0, this.floors);
      const base = this.levelBase(level);
      const y = d.t === 'roof' ? base + WALL_H : base;
      const mesh = this.buildPiece(d.t, d.c, d.s, false);
      const pos = new THREE.Vector3(d.p[0], y, d.p[2]);
      mesh.position.copy(pos);
      mesh.rotation.y = d.r;
      this.group.add(mesh);
      const colliders = this.addColliders(d.t, pos, d.r);
      this.pieces.push({
        type: d.t,
        pos,
        rotY: d.r,
        colorIdx: d.c,
        style: d.s,
        level,
        mesh,
        colliders
      });
    }
    this.level = 0;
  }

  /** Migra el guardado antiguo (v1, sin niveles): todo a planta baja. */
  applyLegacy(list: { t: PieceType; p: [number, number, number]; r: number; c: number; s: PieceStyle }[]): void {
    this.apply({
      pieces: list.map((d) => ({ ...d, l: 0 })),
      floors: 0,
      basement: false
    });
  }
}
