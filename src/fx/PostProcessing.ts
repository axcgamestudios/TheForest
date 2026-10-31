import * as THREE from 'three';
import {
  BloomEffect,
  Effect,
  EffectComposer,
  EffectPass,
  GodRaysEffect,
  RenderPass,
  SMAAEffect,
  ToneMappingEffect,
  ToneMappingMode,
  VignetteEffect
} from 'postprocessing';

/**
 * Pipeline HDR: render -> god rays -> bloom -> tone mapping ACES -> SMAA +
 * viñeta. El tone mapping del renderer queda desactivado (lo hace el
 * composer). Los rayos volumétricos nacen del disco solar y quedan
 * ocultos por el bosque y el terreno (efecto "haces de luz").
 */
export function createComposer(
  renderer: THREE.WebGLRenderer,
  scene: THREE.Scene,
  camera: THREE.PerspectiveCamera,
  sunMesh?: THREE.Mesh,
  enableGodRays = true
): EffectComposer {
  renderer.toneMapping = THREE.NoToneMapping;

  const composer = new EffectComposer(renderer, {
    frameBufferType: THREE.HalfFloatType
  });

  // Necesario para que GodRaysEffect (y otros efectos que re-renderizan la
  // escena) conozcan la escena y la cámara principales.
  composer.setMainScene(scene);
  composer.setMainCamera(camera);

  composer.addPass(new RenderPass(scene, camera));

  const bloom = new BloomEffect({
    intensity: 0.5,
    luminanceThreshold: 0.8,
    luminanceSmoothing: 0.25,
    mipmapBlur: true
  });
  const effects: Effect[] = [bloom];

  if (sunMesh && enableGodRays) {
    const godRays = new GodRaysEffect(camera, sunMesh, {
      blur: true,
      samples: 48,
      density: 0.98,
      decay: 0.95,
      weight: 0.85,
      exposure: 0.6,
      clampMax: 1.0
    });
    effects.push(godRays);
  }

  const tone = new ToneMappingEffect({ mode: ToneMappingMode.ACES_FILMIC });

  composer.addPass(new EffectPass(camera, ...effects, tone));

  const smaa = new SMAAEffect();
  const vignette = new VignetteEffect({ offset: 0.28, darkness: 0.42 });
  composer.addPass(new EffectPass(camera, smaa, vignette));

  return composer;
}
