import * as THREE from 'three';
import { ForestAPI, TREE_HITS, TreePlacement } from '../world/Trees';
import { FirstPersonController } from '../player/FirstPersonController';
import { Hands } from '../player/Hands';
import { Economy } from './Economy';
import { AudioSystem } from '../audio/AudioSystem';
import { softDotTexture } from '../core/textures';

interface Chip {
  sprite: THREE.Sprite;
  vx: number;
  vy: number;
  vz: number;
  t: number;
}

/**
 * Sistema de tala: golpes de hacha al árbol más cercano que esté a la vista
 * y al alcance (clic izquierdo). Cada árbol aguanta TREE_HITS golpes; al
 * caer entrega madera (la animación la dirige Trees.ts). Incluye astillas
 * voladoras y sacudida de cámara sutil en el impacto.
 */
export class Chopping {
  /** Árboles talados en total (misión). */
  choppedCount = 0;

  private readonly hp = new Map<TreePlacement, number>();
  private readonly chips: Chip[] = [];
  private readonly group = new THREE.Group();
  private readonly tmpDir = new THREE.Vector3();
  private shake = 0;

  constructor(
    scene: THREE.Scene,
    private readonly forest: ForestAPI,
    private readonly controller: FirstPersonController,
    private readonly hands: Hands,
    private readonly economy: Economy,
    private readonly audio: AudioSystem,
    private readonly camera: THREE.PerspectiveCamera
  ) {
    scene.add(this.group);

    // El impacto del hacha lo provoca la animación de las manos.
    this.hands.onSwingHit = () => this.impact();
  }

  /** ¿Hay un árbol talable delante? (para el prompt del HUD). */
  aimedTree(): TreePlacement | null {
    const p = this.controller.position;
    const near = this.forest.nearestTree(p, 3.9);
    if (!near) return null;
    // Debe estar a la vista (dentro de un cono de ~50°).
    this.camera.getWorldDirection(this.tmpDir);
    const dx = near.placement.x - p.x;
    const dz = near.placement.z - p.z;
    const d = Math.hypot(dx, dz);
    if (d < 0.001) return near.placement;
    const dot = (dx / d) * this.tmpDir.x + (dz / d) * this.tmpDir.z;
    return dot > 0.55 ? near.placement : null;
  }

  /** Clic izquierdo: intenta golpear (siempre anima el brazo). */
  trySwing(): void {
    this.hands.swing();
  }

  private impact(): void {
    const tree = this.aimedTree();
    if (!tree) return;

    const hp = (this.hp.get(tree) ?? TREE_HITS) - 1;
    this.spawnChips(tree.x, tree.z);
    this.shake = 0.35;
    this.audio.playEvent('chop');

    if (hp > 0) {
      this.hp.set(tree, hp);
      return;
    }
    // Tala: la animación de caída y la madera llegan por eventos del bosque.
    this.hp.delete(tree);
    this.forest.fellTree(tree);
    this.choppedCount++;
  }

  update(dt: number): void {
    // Sacudida de cámara al golpear (se aplica como dip del controlador).
    if (this.shake > 0) {
      this.shake = Math.max(0, this.shake - dt * 2.4);
      this.controller.addImpulse(-this.shake * 0.35);
    }

    // Astillas.
    for (let i = this.chips.length - 1; i >= 0; i--) {
      const c = this.chips[i];
      c.t += dt / 0.8;
      if (c.t >= 1) {
        this.group.remove(c.sprite);
        c.sprite.material.dispose();
        this.chips.splice(i, 1);
        continue;
      }
      c.vy -= 9.8 * dt;
      c.sprite.position.x += c.vx * dt;
      c.sprite.position.y += c.vy * dt;
      c.sprite.position.z += c.vz * dt;
      (c.sprite.material as THREE.SpriteMaterial).opacity = 0.85 * (1 - c.t);
    }
  }

  private spawnChips(x: number, z: number): void {
    const tex = softDotTexture();
    for (let i = 0; i < 7; i++) {
      const sprite = new THREE.Sprite(
        new THREE.SpriteMaterial({
          map: tex,
          color: 0xc9a066,
          transparent: true,
          opacity: 0.85,
          depthWrite: false
        })
      );
      const p = this.controller.position;
      const y = this.controller.position.y - 0.9;
      void p;
      sprite.position.set(x + (Math.random() - 0.5) * 0.4, y, z + (Math.random() - 0.5) * 0.4);
      sprite.scale.setScalar(0.07 + Math.random() * 0.06);
      this.group.add(sprite);
      this.chips.push({
        sprite,
        vx: (Math.random() - 0.5) * 3.2,
        vy: 1.6 + Math.random() * 2.4,
        vz: (Math.random() - 0.5) * 3.2,
        t: 0
      });
    }
  }
}
