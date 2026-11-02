import * as THREE from 'three';

/** Uniforms compartidos entre materiales (viento, jugador, sol, ciclo). */
export const shared = {
  uTime: { value: 0 },
  uPlayer: { value: new THREE.Vector2(0, 0) },
  uSunDir: { value: new THREE.Vector3(0.45, 0.55, 0.55).normalize() },
  /** 1 = pleno día · 0 = plena noche (nubes, pasto, etc.). */
  uDay: { value: 1 }
};
