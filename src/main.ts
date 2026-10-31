import { Engine } from './core/Engine';
import { startBootFx } from './ui/bootFx';
import { Hud } from './ui/Hud';

const $ = (id: string): HTMLElement => document.getElementById(id)!;

const boot = $('boot');
const menu = $('menu');
const hudRoot = $('hud');
const playBtn = $('play') as HTMLButtonElement;
const ringFill = $('ringFill');
const bootPct = $('bootPct');
const bootText = $('bootText');
const pauseBadge = $('pauseBadge');
const hint = $('hint');
const misCounter = $('misCounter');
const qLabel = $('qLabel');

const RING_C = 264; // circunferencia del anillo de progreso

const TIPS = [
  'Consejo: mantén Shift para correr entre la hierba',
  'Consejo: tala árboles con el hacha (clic izquierdo) y gana madera',
  'Consejo: sube a los coches del pueblo con F y da una vuelta',
  'Consejo: vende la madera en el aserradero (tecla E junto a la sierra)',
  'Consejo: pulsa B y construye tu propia casa con materiales y dinero',
  'Consejo: la brújula marca tus misiones activas',
  'Consejo: el dron patrulla la cumbre… acércate si te atreves',
  'Consejo: cambia la calidad en el menú si va lento'
];

function showPanel(id: string): void {
  $(id).classList.remove('hidden');
}

function hidePanels(): void {
  for (const p of ['panelControls', 'panelCredits', 'panelMissions']) {
    $(p).classList.add('hidden');
  }
}

/** Render del panel de misiones (y del contador del menú). */
function renderMissionPanel(engine: Engine): void {
  const all = engine.missions.all;
  const done = all.filter((m) => m.state.done).length;
  $('misDoneN').textContent = String(done);
  $('misLevel').textContent = String(engine.missions.levelNumber);
  $('misXp').textContent = String(engine.missions.xp);
  misCounter.textContent = `${done}/${all.length}`;

  const list = $('misList');
  let html = '';
  for (const { def, state } of all) {
    const cls = state.done ? 'done' : state.active ? 'active' : 'locked';
    const stateLabel = state.done ? 'COMPLETADA' : state.active ? 'ACTIVA' : 'BLOQUEADA';
    const prog =
      state.active && def.goal > 1
        ? ` <span class="mis-xp">· ${Math.floor(state.progress)}/${def.goal}</span>`
        : '';
    const cash = def.cash ? ` <span class="mis-xp">· $${def.cash}</span>` : '';
    html += `
      <div class="mis-item ${cls}">
        <span class="mis-ic">${state.done ? '✓' : def.icon}</span>
        <div class="mis-body">
          <div class="mis-t">${def.title}</div>
          <div class="mis-h">${def.hint}</div>
        </div>
        <span class="mis-xp">+${def.xp} XP${cash}${prog}</span>
        <span class="mis-state">${stateLabel}</span>
      </div>`;
  }
  list.innerHTML = html;
}

async function bootApp(): Promise<void> {
  // ---- Pantalla de carga con motion graphics ----
  const fx = startBootFx($('bootfx') as HTMLCanvasElement);
  let tipIdx = 0;
  const tipTimer = window.setInterval(() => {
    tipIdx = (tipIdx + 1) % TIPS.length;
    $('bootTip').textContent = TIPS[tipIdx];
  }, 3600);

  const engine = new Engine($('app'));
  qLabel.textContent = engine.qualityName;
  document.querySelectorAll<HTMLButtonElement>('.q-pills button').forEach((b) => {
    b.classList.toggle('active', b.dataset.q === engine.qualityName);
  });

  await engine.build((fraction, label) => {
    fx.setProgress(fraction);
    ringFill.style.strokeDashoffset = `${Math.round(RING_C * (1 - fraction))}`;
    bootPct.textContent = `${Math.round(fraction * 100)}%`;
    bootText.textContent = label;
  });

  fx.stop();
  window.clearInterval(tipTimer);

  // ---- Mundo listo: menú cinematográfico ----
  const hud = new Hud(
    engine.missions,
    engine.collectibles,
    engine.controller,
    () => engine.dronePosition,
    engine.camera,
    engine.economy,
    engine.vehicles,
    engine.builder,
    engine.chopping
  );
  engine.setHud(hud);

  boot.classList.add('hidden');
  menu.classList.remove('hidden');
  playBtn.disabled = false;
  playBtn.textContent = 'ENTRAR AL BOSQUE';

  const canvas = engine.renderer.domElement;

  /** Pide el bloqueo del puntero tolerando el antirrebote de Chrome. */
  const requestLock = (): void => {
    const p = canvas.requestPointerLock() as unknown as Promise<void> | undefined;
    if (p && typeof p.catch === 'function') {
      p.catch(() => {
        playBtn.textContent = 'ESPERA UN INSTANTE…';
        window.setTimeout(() => {
          playBtn.textContent = engine.mode === 'paused' ? 'REANUDAR' : 'ENTRAR AL BOSQUE';
        }, 1300);
      });
    }
  };

  const enterGame = (): void => {
    if (playBtn.disabled) return;
    hidePanels();
    engine.startAudio();
    engine.audio.playEvent('ui');
    if (engine.mode === 'menu') engine.beginPlay();
    requestLock();
  };

  playBtn.addEventListener('click', enterGame);
  window.addEventListener('keydown', (e) => {
    if (e.code === 'Enter' && !menu.classList.contains('hidden')) enterGame();
  });

  // ---- Bloqueo de puntero: jugar / pausar ----
  document.addEventListener('pointerlockchange', () => {
    const locked = document.pointerLockElement === canvas;
    engine.setPlaying(locked);

    if (locked) {
      menu.classList.add('hidden');
      hudRoot.classList.remove('hidden');
      hud.show();
      document.body.classList.add('playing');
      playBtn.textContent = 'REANUDAR';
      window.setTimeout(() => hint.classList.add('faded'), 12000);
    } else {
      menu.classList.remove('hidden');
      hudRoot.classList.add('hidden');
      hud.hide();
      document.body.classList.remove('playing');
      const paused = engine.mode === 'paused';
      menu.classList.toggle('paused', paused);
      pauseBadge.classList.toggle('hidden', !paused);
      playBtn.textContent = paused ? 'REANUDAR' : 'ENTRAR AL BOSQUE';
      renderMissionPanel(engine);
    }
  });

  // ---- Paneles ----
  $('btnControls').addEventListener('click', () => {
    engine.audio.playEvent('ui');
    hidePanels();
    showPanel('panelControls');
  });
  $('btnCredits').addEventListener('click', () => {
    engine.audio.playEvent('ui');
    hidePanels();
    showPanel('panelCredits');
  });
  $('btnMissions').addEventListener('click', () => {
    engine.audio.playEvent('ui');
    hidePanels();
    renderMissionPanel(engine);
    showPanel('panelMissions');
  });
  document.querySelectorAll('[data-close]').forEach((b) =>
    b.addEventListener('click', hidePanels)
  );
  document.querySelectorAll('.panel').forEach((p) =>
    p.addEventListener('click', (e) => {
      if (e.target === p) hidePanels();
    })
  );

  // ---- Calidad ----
  document.querySelectorAll<HTMLButtonElement>('.q-pills button').forEach((b) => {
    b.addEventListener('click', () => {
      const q = b.dataset.q!;
      if (q === engine.qualityName) return;
      localStorage.setItem('tf-quality', q);
      const u = new URL(location.href);
      u.searchParams.set('q', q);
      location.href = u.toString();
    });
  });

  engine.start();

  // Hook de depuración (consola del navegador / pruebas automatizadas).
  (window as unknown as { __engine: Engine }).__engine = engine;
}

bootApp().catch((err) => {
  bootText.textContent = 'Error al iniciar. Revisa la consola del navegador.';
  console.error(err);
});
