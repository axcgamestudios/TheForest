import * as THREE from 'three';
import { Heightfield, SUMMIT, PLOT } from '../world/heightfield';
import { softDotTexture } from '../core/textures';
import { mulberry32 } from '../core/noise';
import { ItemKind } from './Missions';

interface CollectibleItem {
  kind: ItemKind;
  group: THREE.Group;
  sprite: THREE.Sprite;
  baseY: number;
  phase: number;
  spin: number;
  collected: boolean;
}

/** Etiqueta legible de cada tipo de objeto. */
const LABELS: Record<ItemKind, string> = {
  flower: 'flor luminosa',
  crystal: 'fragmento de cristal',
  relic: 'reliquia antigua'
};

/** Destello al recoger: el halo crece y se desvanece. */
interface Burst {
  sprite: THREE.Sprite;
  t: number;
}

/**
 * Objetos coleccionables repartidos por el cerro: flores luminosas cerca
 * del sendero bajo, fragmentos de cristal en la ladera alta y reliquias
 * escondidas junto a los puntos de interés. Se recogen con la tecla E.
 */
export class Collectibles {
  readonly group = new THREE.Group();
  readonly collected: Record<ItemKind, number> = { flower: 0, crystal: 0, relic: 0 };

  /** Eventos de recogida que el Engine drena (sonido + toast). */
  readonly collectedEvents: { kind: ItemKind; remaining: number; total: number }[] = [];

  /** Objeto recogible más cercano al jugador (para el prompt y la brújula). */
  nearest: { kind: ItemKind; label: string; pos: THREE.Vector3; dist: number } | null = null;

  private readonly items: CollectibleItem[] = [];
  private readonly bursts: Burst[] = [];
  private readonly playerPos = new THREE.Vector3(0, 0, 9999);
  private playing = false;
  private wantPick = false;

  constructor(scene: THREE.Scene, private readonly field: Heightfield) {
    const glowTex = softDotTexture();
    const rng = mulberry32(77701);

    // --- Flores luminosas: 8, cerca del sendero de la ladera baja ---
    this.scatter(rng, 'flower', 8, () => {
      const x = -34 + rng() * 68;
      const z = -50 + rng() * 180;
      return { x, z };
    }, (x, z) =>
      this.field.sampleMask(x, z) > 0.35 &&
      this.field.sampleHeight(x, z) < 34 &&
      // Fuera de la parcela del jugador (ahí se excava el sótano).
      (Math.abs(x - PLOT.x) > PLOT.half + 2 || Math.abs(z - PLOT.z) > PLOT.half + 2));

    // --- Fragmentos de cristal: 5, en la ladera alta alrededor de la cumbre ---
    this.scatter(rng, 'crystal', 5, () => {
      const a = rng() * Math.PI * 2;
      const r = 42 + rng() * 48;
      return { x: SUMMIT.x + Math.cos(a) * r, z: SUMMIT.z + Math.sin(a) * r };
    }, (x, z) => {
      const h = this.field.sampleHeight(x, z);
      return h > 24 && h < 62 && this.field.sampleSlope(x, z) < 0.55;
    });

    // --- Reliquias: 3, cerca de los puntos de interés ---
    const relicSpots: { x: number; z: number }[] = [
      { x: -42.5, z: -131.5 }, // junto al obelisco
      { x: -18.5, z: 113.5 }, // tras la gran roca
      { x: SUMMIT.x + 9, z: SUMMIT.z - 7 } // en el anillo de la cumbre
    ];
    for (const s of relicSpots) this.spawn('relic', s.x + (rng() - 0.5) * 2, s.z + (rng() - 0.5) * 2, glowTex);

    scene.add(this.group);

    window.addEventListener('keydown', (e) => {
      if (e.code === 'KeyE') this.wantPick = true;
    });
  }

  setPlaying(playing: boolean): void {
    this.playing = playing;
    if (!playing) this.wantPick = false;
  }

  /** Posición del ejemplar SIN recoger más cercano de un tipo (brújula). */
  nearestOfKind(kind: ItemKind): THREE.Vector3 | null {
    let best: THREE.Vector3 | null = null;
    let bestD = Infinity;
    for (const it of this.items) {
      if (it.kind !== kind || it.collected) continue;
      const d = it.group.position.distanceToSquared(this.playerPos);
      if (d < bestD) {
        bestD = d;
        best = it.group.position;
      }
    }
    return best;
  }

  private scatter(
    rng: () => number,
    kind: ItemKind,
    count: number,
    candidate: () => { x: number; z: number },
    valid: (x: number, z: number) => boolean
  ): void {
    const glowTex = softDotTexture();
    let placed = 0;
    let attempts = 0;
    while (placed < count && attempts < 400) {
      attempts++;
      const { x, z } = candidate();
      if (!valid(x, z)) continue;
      // Separación mínima con lo ya colocado.
      let ok = true;
      for (const it of this.items) {
        if (Math.hypot(it.group.position.x - x, it.group.position.z - z) < 12) {
          ok = false;
          break;
        }
      }
      if (!ok) continue;
      this.spawn(kind, x, z, glowTex, rng);
      placed++;
    }
  }

  private spawn(kind: ItemKind, x: number, z: number, glowTex: THREE.Texture, rng?: () => number): void {
    const r = rng ?? Math.random;
    const y = this.field.sampleHeight(x, z);
    const g = new THREE.Group();
    g.position.set(x, y, z);

    let color: number;
    let glowColor: number;
    switch (kind) {
      case 'flower':
        color = 0xffd977;
        glowColor = 0xffc860;
        break;
      case 'crystal':
        color = 0x7de8ff;
        glowColor = 0x66d8ff;
        break;
      case 'relic':
        color = 0xc9a2ff;
        glowColor = 0xb98cff;
        break;
    }

    const mesh = new THREE.Mesh(
      kind === 'flower'
        ? new THREE.IcosahedronGeometry(0.085, 1)
        : kind === 'crystal'
          ? new THREE.OctahedronGeometry(0.24)
          : new THREE.DodecahedronGeometry(0.2),
      new THREE.MeshStandardMaterial({
        color: 0x1a1a14,
        emissive: new THREE.Color(color),
        emissiveIntensity: 1.9,
        roughness: 0.4
      })
    );

    if (kind === 'flower') {
      // Tallo discreto para que se lea como flor.
      const stem = new THREE.Mesh(
        new THREE.CylinderGeometry(0.015, 0.02, 0.34, 5),
        new THREE.MeshStandardMaterial({ color: 0x2e4a1e, roughness: 0.9 })
      );
      stem.position.y = 0.17;
      mesh.position.y = 0.38;
      g.add(stem);
    } else if (kind === 'crystal') {
      mesh.position.y = 0.45;
      mesh.rotation.set(0.3, 0, 0.2);
    } else {
      mesh.position.y = 0.22;
      mesh.rotation.set(0.2, 0.6, 0);
    }
    g.add(mesh);

    // Halo suave aditivo (sin luces dinámicas: barato).
    const sprite = new THREE.Sprite(
      new THREE.SpriteMaterial({
        map: glowTex,
        color: glowColor,
        transparent: true,
        opacity: kind === 'crystal' ? 0.42 : 0.34,
        blending: THREE.AdditiveBlending,
        depthWrite: false
      })
    );
    sprite.scale.setScalar(kind === 'crystal' ? 1.5 : 1.15);
    sprite.position.y = mesh.position.y;
    g.add(sprite);

    this.group.add(g);
    this.items.push({
      kind,
      group: g,
      sprite,
      baseY: g.position.y,
      phase: r() * Math.PI * 2,
      spin: 0.4 + r() * 0.5,
      collected: false
    });
  }

  update(dt: number, t: number, playerPos: THREE.Vector3): void {
    this.playerPos.copy(playerPos);

    // Animación: flotar, girar y palpitar el halo.
    for (const it of this.items) {
      if (it.collected) continue;
      it.group.position.y = it.baseY + Math.sin(t * 1.6 + it.phase) * 0.1;
      it.group.rotation.y += dt * it.spin;
      const pulse = 0.85 + 0.15 * Math.sin(t * 2.2 + it.phase);
      it.sprite.scale.setScalar((it.kind === 'crystal' ? 1.5 : 1.15) * pulse);
    }

    // Destellos de recogida.
    for (let i = this.bursts.length - 1; i >= 0; i--) {
      const b = this.bursts[i];
      b.t += dt / 0.55;
      if (b.t >= 1) {
        this.group.remove(b.sprite);
        b.sprite.material.dispose();
        this.bursts.splice(i, 1);
        continue;
      }
      const k = 1 - b.t;
      b.sprite.scale.setScalar(1.2 + b.t * 3.2);
      (b.sprite.material as THREE.SpriteMaterial).opacity = 0.7 * k;
    }

    // Objeto más cercano al alcance de la mano.
    this.nearest = null;
    let bestD = Infinity;
    for (const it of this.items) {
      if (it.collected) continue;
      const d = it.group.position.distanceTo(playerPos);
      if (d < 2.6 && d < bestD) {
        bestD = d;
        this.nearest = { kind: it.kind, label: LABELS[it.kind], pos: it.group.position, dist: d };
      }
    }

    // Recogida con E.
    if (this.playing && this.wantPick) {
      this.wantPick = false;
      if (this.nearest) this.collect(this.nearest.pos);
    }
    this.wantPick = false;
  }

  private collect(pos: THREE.Vector3): void {
    const it = this.items.find((i) => !i.collected && i.group.position === pos);
    if (!it) return;
    it.collected = true;
    it.group.visible = false;
    this.collected[it.kind]++;

    // Destello en el lugar del objeto.
    const burstSprite = new THREE.Sprite(
      new THREE.SpriteMaterial({
        map: it.sprite.material.map,
        color: (it.sprite.material as THREE.SpriteMaterial).color.getHex(),
        transparent: true,
        opacity: 0.7,
        blending: THREE.AdditiveBlending,
        depthWrite: false
      })
    );
    burstSprite.position.copy(it.group.position);
    burstSprite.position.y += 0.35;
    burstSprite.scale.setScalar(1.2);
    this.group.add(burstSprite);
    this.bursts.push({ sprite: burstSprite, t: 0 });

    const total = this.items.filter((i) => i.kind === it.kind).length;
    this.collectedEvents.push({ kind: it.kind, remaining: total - this.collected[it.kind], total });
  }
}
