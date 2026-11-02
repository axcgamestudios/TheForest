import * as THREE from 'three';
import { Heightfield, WORLD_SIZE } from './heightfield';
import { groundDetailTexture } from '../core/textures';
import { CLOUD_GLSL } from '../core/cloudGlsl';
import { shared } from '../core/uniforms';

const CHUNKS = 6;
/** Tamaño de cada chunk en metros (600 / 6). */
const CHUNK_SIZE = WORLD_SIZE / CHUNKS;
/** Resolución del chunk de detalle (1.56 m por celda, igual que antes). */
const DETAIL_RES = 64;
/** Resolución del chunk lejano (6.25 m por celda). */
const LOW_RES = 16;
/** Distancia (al centro del chunk) hasta la que se usa la malla de detalle. */
const DETAIL_DIST = 165;
/** Metros por tile del material rocoso (Rockwall: albedo+normal+relieve). */
const RELIEF_TILE = 5.5;

export interface TerrainSystem {
  group: THREE.Group;
  /** Activa el chunk de detalle o el ligero según la distancia a la cámara. */
  update: (camPos: THREE.Vector3) => void;
  /** Reconstruye los chunks que tocan un área del mundo (excavaciones). */
  rebuildAt: (x: number, z: number, pad: number) => void;
}

/** Carga la textura de relieve horneada por tools/bake-relief.mjs. */
async function loadReliefTexture(): Promise<THREE.DataTexture> {
  const res = await fetch(`${import.meta.env.BASE_URL}models/relief.bin`);
  const ab = await res.arrayBuffer();
  const dv = new DataView(ab);
  const w = dv.getUint16(0, true);
  const h = dv.getUint16(2, true);
  const tex = new THREE.DataTexture(
    new Uint8Array(ab, 4, w * h),
    w,
    h,
    THREE.RedFormat,
    THREE.UnsignedByteType
  );
  tex.wrapS = THREE.MirroredRepeatWrapping;
  tex.wrapT = THREE.MirroredRepeatWrapping;
  tex.magFilter = THREE.LinearFilter;
  tex.minFilter = THREE.LinearFilter;
  tex.needsUpdate = true;
  return tex;
}

/**
 * Terreno en CHUNKS: el mundo se divide en una cuadrícula de 6x6.
 * Cada celda tiene dos mallas: una de detalle (64x64, sólo se ve cerca)
 * y una ligera (16x16) para la distancia. Con esto la GPU sólo procesa
 * geometría alta cerca del jugador, y el frustum culling descarta los
 * chunks fuera de cámara. Las normales se calculan analíticamente desde
 * el heightfield para que no haya costuras de iluminación entre chunks.
 */
export async function createTerrain(field: Heightfield): Promise<TerrainSystem> {
  const loader = new THREE.TextureLoader();
  const base = import.meta.env.BASE_URL;
  const [reliefTex, rockAlbedo, rockNormal] = await Promise.all([
    loadReliefTexture(),
    loader.loadAsync(`${base}textures/rock_albedo.jpg`),
    loader.loadAsync(`${base}textures/rock_normal.jpg`)
  ]);

  rockAlbedo.colorSpace = THREE.SRGBColorSpace;
  for (const t of [rockAlbedo, rockNormal]) {
    t.wrapS = THREE.MirroredRepeatWrapping;
    t.wrapT = THREE.MirroredRepeatWrapping;
    t.anisotropy = 8;
  }
  rockNormal.repeat.set(WORLD_SIZE / RELIEF_TILE, WORLD_SIZE / RELIEF_TILE);

  const mat = new THREE.MeshStandardMaterial({
    color: 0xffffff,
    roughness: 0.96,
    metalness: 0,
    normalMap: rockNormal
  });

  mat.onBeforeCompile = (shader) => {
    shader.uniforms.uField = { value: field.texture };
    shader.uniforms.uWorld = { value: WORLD_SIZE };
    shader.uniforms.uDetail = { value: groundDetailTexture() };
    shader.uniforms.uRockAlbedo = { value: rockAlbedo };
    shader.uniforms.uTime = shared.uTime;
    shader.uniforms.uSunDir = shared.uSunDir;
    shader.uniforms.uRelief = { value: reliefTex };

    shader.vertexShader = shader.vertexShader
      .replace(
        '#include <common>',
        `#include <common>
        varying vec3 vTWPos;
        varying vec3 vTWNorm;`
      )
      .replace(
        '#include <begin_vertex>',
        `#include <begin_vertex>
        vTWPos = position;
        vTWNorm = normal;`
      );

    shader.fragmentShader = shader.fragmentShader
      .replace(
        '#include <common>',
        `#include <common>
        varying vec3 vTWPos;
        varying vec3 vTWNorm;
        uniform sampler2D uField;
        uniform sampler2D uDetail;
        uniform sampler2D uRockAlbedo;
        uniform float uWorld;
        uniform float uTime;
        uniform vec3 uSunDir;
        uniform sampler2D uRelief;
        ${CLOUD_GLSL}
        float thash(vec2 p){ p = fract(p * vec2(123.34, 345.45)); p += dot(p, p + 34.345); return fract(p.x * p.y); }
        float tnoise(vec2 p){
          vec2 i = floor(p); vec2 f = fract(p);
          f = f * f * (3.0 - 2.0 * f);
          float a = thash(i); float b = thash(i + vec2(1.0, 0.0));
          float c = thash(i + vec2(0.0, 1.0)); float d = thash(i + vec2(1.0, 1.0));
          return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
        }
        float tfbm(vec2 p){
          float v = 0.0; float a = 0.5;
          for (int k = 0; k < 4; k++){ v += a * tnoise(p); p *= 2.03; a *= 0.5; }
          return v;
        }`
      )
      .replace(
        '#include <map_fragment>',
        `#include <map_fragment>
        vec2 wxz = vTWPos.xz;
        float n1 = tfbm(wxz * 0.016);
        float n2 = tfbm(wxz * 0.11 + 7.3);
        float n3 = tnoise(wxz * 1.7);

        // Pasto: parches verdes y amarillentos secos.
        vec3 grassA = vec3(0.062, 0.130, 0.020);
        vec3 grassB = vec3(0.225, 0.245, 0.052);
        float dry = clamp(n1 * 2.2 - 0.6 + (n2 - 0.5) * 0.9, 0.0, 1.0);
        vec3 gcol = mix(grassA, grassB, dry);
        gcol *= 0.72 + 0.42 * n3;
        gcol *= 0.9 + 0.2 * tnoise(wxz * 0.6);

        vec4 fld = texture2D(uField, wxz / uWorld + 0.5);
        float gmask = fld.g;
        vec3 nrm = normalize(vTWNorm);
        float slope = 1.0 - nrm.y;

        // El pasto del cerro se seca y amarillea ligeramente con la altura.
        gcol = mix(gcol, gcol * vec3(1.3, 1.05, 0.5), smoothstep(20.0, 55.0, vTWPos.y) * 0.35);

        // Suelo desnudo: material rocoso fotogramétrico (Rockwall), con
        // albedo, normal map y relieve horneado compartiendo las MISMAS UVs
        // para que color y relieve correspondan.
        vec3 stone = texture2D(uRockAlbedo, vNormalMapUv).rgb;
        float flatW = smoothstep(0.62, 0.25, slope);
        // Transición firme pasto->tierra: evita piedras teñidas de verde.
        float gDirtW = smoothstep(0.3, 0.72, 1.0 - gmask);
        float gBumpMask = clamp(gDirtW * flatW * 1.5, 0.08, 1.0);
        // Relieve horneado (Rockwall.obj): hondonadas más oscuras.
        float gRelief = texture2D(uRelief, vNormalMapUv).r;
        vec3 bare = stone * (0.7 + 0.5 * n2);
        bare *= 0.72 + 0.46 * gRelief;
        // Más oscuro y húmedo abajo; claro y polvoriento en el cerro.
        bare *= mix(vec3(0.82, 0.74, 0.62), vec3(1.12, 1.04, 0.88), smoothstep(14.0, 36.0, vTWPos.y));
        vec3 col = mix(gcol, bare, gDirtW * flatW);

        // Roca gris sólo en cortes casi verticales (cárcavas y taludes).
        vec3 rock = vec3(0.168, 0.161, 0.152) * (0.7 + 0.55 * tfbm(wxz * 0.05 + vTWPos.y * 0.09));
        float rockW = smoothstep(0.62, 0.86, slope + (n2 - 0.5) * 0.08);
        col = mix(col, rock, rockW);

        col *= 0.9 + 0.2 * tnoise(wxz * 0.43);

        // Grano de detalle en dos escalas (fino ~2 m y macro ~17 m).
        float det1 = texture2D(uDetail, wxz * 0.48).r;
        float det2 = texture2D(uDetail, wxz * 0.058 + 0.37).r;
        col *= 0.70 + 0.55 * det1;
        col *= 0.80 + 0.36 * det2;

        // Oclusión falsa: el suelo bajo el pasto denso queda en penumbra.
        col *= 1.0 - gmask * 0.28;

        // Sombras de las nubes deslizándose sobre el mundo.
        col *= 1.0 - cloudShadowAt(vTWPos.xz, vTWPos.y, uSunDir, uTime) * 0.42;

        diffuseColor.rgb = col;`
      )
      .replace(
        '#include <normal_fragment_maps>',
        `#ifdef USE_NORMALMAP
        // Normal map fotogramétrico sólo donde hay tierra desnuda: la
        // intensidad se enmascara para que el pasto conserve su normal.
        mat3 gTbn = getTangentFrame( - vViewPosition, normal, vNormalMapUv );
        vec3 gMapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
        gMapN.xy *= normalScale * gBumpMask;
        normal = normalize( gTbn * gMapN );
        #endif`
      );
  };

  const group = new THREE.Group();
  const detailMeshes: THREE.Mesh[] = [];
  const lowMeshes: THREE.Mesh[] = [];
  const centers: { x: number; z: number }[] = [];

  for (let cz = 0; cz < CHUNKS; cz++) {
    for (let cx = 0; cx < CHUNKS; cx++) {
      const x0 = -WORLD_SIZE / 2 + cx * CHUNK_SIZE;
      const z0 = -WORLD_SIZE / 2 + cz * CHUNK_SIZE;
      centers.push({ x: x0 + CHUNK_SIZE / 2, z: z0 + CHUNK_SIZE / 2 });
      detailMeshes.push(buildChunk(field, mat, x0, z0, DETAIL_RES));
      lowMeshes.push(buildChunk(field, mat, x0, z0, LOW_RES));
      group.add(detailMeshes[detailMeshes.length - 1], lowMeshes[lowMeshes.length - 1]);
    }
  }

  const update = (camPos: THREE.Vector3): void => {
    for (let i = 0; i < centers.length; i++) {
      const c = centers[i];
      const near = Math.hypot(c.x - camPos.x, c.z - camPos.z) < DETAIL_DIST;
      detailMeshes[i].visible = near;
      lowMeshes[i].visible = !near;
    }
  };

  /** Vuelve a muestrear los vértices de los chunks que rozan el área. */
  const rebuildAt = (x: number, z: number, pad: number): void => {
    const cs = CHUNK_SIZE;
    const cx0 = Math.max(0, Math.floor((x - pad + WORLD_SIZE / 2) / cs));
    const cx1 = Math.min(CHUNKS - 1, Math.floor((x + pad + WORLD_SIZE / 2) / cs));
    const cz0 = Math.max(0, Math.floor((z - pad + WORLD_SIZE / 2) / cs));
    const cz1 = Math.min(CHUNKS - 1, Math.floor((z + pad + WORLD_SIZE / 2) / cs));
    for (let cz = cz0; cz <= cz1; cz++) {
      for (let cx = cx0; cx <= cx1; cx++) {
        const i = cz * CHUNKS + cx;
        refillChunk(detailMeshes[i], field);
        refillChunk(lowMeshes[i], field);
      }
    }
  };

  return { group, update, rebuildAt };
}

/**
 * Construye un chunk del terreno: geometría desplazada por el heightfield
 * con normales analíticas (gradiente central), en coordenadas de mundo
 * para que el frustum culling funcione por chunk.
 */
function buildChunk(
  field: Heightfield,
  mat: THREE.Material,
  x0: number,
  z0: number,
  res: number
): THREE.Mesh {
  const geo = new THREE.PlaneGeometry(CHUNK_SIZE, CHUNK_SIZE, res, res);
  geo.rotateX(-Math.PI / 2);
  geo.translate(x0 + CHUNK_SIZE / 2, 0, z0 + CHUNK_SIZE / 2);

  const mesh = new THREE.Mesh(geo, mat);
  mesh.receiveShadow = true;
  mesh.castShadow = false;
  mesh.matrixAutoUpdate = false;
  refillChunk(mesh, field);
  return mesh;
}

/** Vuelve a muestrear las alturas y normales de un chunk ya creado. */
function refillChunk(mesh: THREE.Mesh, field: Heightfield): void {
  const geo = mesh.geometry;
  const pos = geo.attributes.position as THREE.BufferAttribute;
  const nor = geo.attributes.normal as THREE.BufferAttribute;
  const e = 1.2;
  for (let i = 0; i < pos.count; i++) {
    const x = pos.getX(i);
    const z = pos.getZ(i);
    pos.setY(i, field.sampleHeight(x, z));
    // Normal analítica compartida entre chunks: sin costuras de sombreado.
    const dhx = (field.sampleHeight(x + e, z) - field.sampleHeight(x - e, z)) / (2 * e);
    const dhz = (field.sampleHeight(x, z + e) - field.sampleHeight(x, z - e)) / (2 * e);
    const inv = 1 / Math.hypot(dhx, 1, dhz);
    nor.setXYZ(i, -dhx * inv, inv, -dhz * inv);
  }
  pos.needsUpdate = true;
  nor.needsUpdate = true;
  geo.computeBoundingSphere();
}
