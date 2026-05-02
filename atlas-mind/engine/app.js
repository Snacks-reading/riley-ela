const state = { xp: 0, streak: 0, goal: 0, misses: 0, lesson: null, segment: 0 };
const byId = (id) => document.getElementById(id);
const homeView = byId('homeView');
const lessonView = byId('lessonView');

const synth = window.speechSynthesis;
let utterance;

async function loadData() {
  const [catalog, modules, lessons] = await Promise.all([
    fetch('./domains/catalog.json').then(r => r.json()),
    fetch('./modules/modules.json').then(r => r.json()),
    fetch('./lessons/lessons.json').then(r => r.json())
  ]);
  return { catalog: catalog.domains, modules: modules.modules, lessons: lessons.lessons };
}

function renderHome(data) {
  homeView.innerHTML = data.catalog.map(domain => {
    const cards = domain.modules.map(id => data.modules.find(m => m.id === id)).filter(Boolean).map(m => `
      <article class="module-card" data-module="${m.id}">
        <h4>${m.cover} ${m.title}</h4><p class="hook">${m.hook}</p><small>${m.minutes} min • ${m.progress}% complete</small>
      </article>`).join('');
    return `<section class="domain-card"><h3>${domain.title}</h3><p class="hook">${domain.description}</p><div class="module-list">${cards}</div></section>`;
  }).join('');
  homeView.querySelectorAll('[data-module]').forEach(el => el.onclick = () => startModule(el.dataset.module, data));
}

function startModule(moduleId, data) {
  const module = data.modules.find(m => m.id === moduleId);
  if (!module?.lessonId) return alert('Lesson drops tomorrow in Live Intelligence.');
  state.lesson = data.lessons.find(l => l.id === module.lessonId);
  state.segment = 0; state.misses = 0;
  homeView.classList.add('hidden'); lessonView.classList.remove('hidden');
  renderLesson(); speakCurrent();
}

function renderLesson() {
  const seg = state.lesson.segments[state.segment];
  lessonView.innerHTML = `<section class="panel"><h2>${state.lesson.title}</h2><p class="hook">Step ${state.segment + 1}/8 • ${seg.type.toUpperCase()}</p><p class="script">${seg.coach}</p><div class="controls"><button id="pause">Pause</button><button id="resume">Resume</button><button id="repeat">Repeat</button><button id="next">Continue</button></div></section>
  <section class="panel"><h2>Interactive Learning</h2><p class="hook">Mastery loop active: miss once hint, twice explanation, third teach-back.</p><div id="interactive"></div><button class="primary" id="homeBtn">Back to Discovery</button></section>
  <section class="panel"><h2>Coach</h2><div class="avatar">👩🏽‍🏫</div><p class="state" id="coachState">Teaching</p><p class="hook">Conversational guidance, not text recitation.</p></section>`;

  byId('pause').onclick = () => synth.pause();
  byId('resume').onclick = () => synth.resume();
  byId('repeat').onclick = speakCurrent;
  byId('next').onclick = nextSegment;
  byId('homeBtn').onclick = () => { synth.cancel(); lessonView.classList.add('hidden'); homeView.classList.remove('hidden'); };
  if (seg.type === 'reflection') renderQuiz();
}

function speakCurrent() {
  synth.cancel();
  const seg = state.lesson.segments[state.segment];
  utterance = new SpeechSynthesisUtterance(seg.coach);
  utterance.lang = state.lesson.coachVoice;
  utterance.rate = 1;
  synth.speak(utterance);
}

function nextSegment() {
  if (state.segment < state.lesson.segments.length - 1) {
    state.segment++; renderLesson(); speakCurrent();
  }
}

function renderQuiz() {
  const q = state.lesson.quiz;
  byId('interactive').innerHTML = `<p>${q.question}</p><div class="quiz-options">${q.options.map((o, i) => `<button data-opt="${i}">${o}</button>`).join('')}</div><p id="feedback" class="hook"></p>`;
  byId('interactive').querySelectorAll('[data-opt]').forEach(btn => btn.onclick = () => checkAnswer(Number(btn.dataset.opt)));
}

function checkAnswer(idx) {
  const q = state.lesson.quiz; const feedback = byId('feedback');
  if (idx === q.answer) {
    feedback.textContent = `Correct. ${q.explanation}`;
    state.xp += 25; state.goal = 1; state.streak += 1; updateTop();
    byId('coachState').textContent = 'Celebrating';
    return;
  }
  state.misses += 1; byId('coachState').textContent = 'Concerned';
  feedback.textContent = state.misses === 1 ? `Hint: ${q.hint}` : state.misses === 2 ? `Explanation: ${q.explanation}` : `Teach-back: Correct answer is "${q.options[q.answer]}".`;
}

function updateTop() {
  byId('xp').textContent = `XP ${state.xp}`; byId('streak').textContent = `🔥 Streak ${state.streak}`; byId('goal').textContent = `Daily Goal ${state.goal}/1`;
}

loadData().then(renderHome);
