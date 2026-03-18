window.RR_AVATAR = (function () {
  const MAP = {
    teach: 'assets/avatars/avatar_teach.png',
    think: 'assets/avatars/avatar_think.png',
    encourage: 'assets/avatars/avatar_encourage.png',
    victory: 'assets/avatars/riley_victory.png'
  };
  function getEl() { return document.getElementById('avatar'); }
  function clearFx() { const el = getEl(); if (!el) return; el.classList.remove('avatar-pop', 'avatar-bounce', 'avatar-think-glow'); }
  function setState(state, fxClass) { const el = getEl(); if (!el) return; clearFx(); el.src = MAP[state] || MAP.teach; if (fxClass) { void el.offsetWidth; el.classList.add(fxClass); } }
  return { setState, clearFx };
})();
