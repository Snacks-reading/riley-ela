window.RR_STORAGE = (function () {
  const MASTER_KEY = "rr_mastery_v28";
  const SESSION_KEY = "rr_session_v28";

  function safeParse(raw, fallback) {
    try { return raw ? JSON.parse(raw) : fallback; } catch (_) { return fallback; }
  }
  function loadMastery() { return safeParse(localStorage.getItem(MASTER_KEY), {}); }
  function saveMastery(map) { localStorage.setItem(MASTER_KEY, JSON.stringify(map || {})); }
  function loadSession() { return safeParse(localStorage.getItem(SESSION_KEY), null); }
  function saveSession(session) { localStorage.setItem(SESSION_KEY, JSON.stringify(session || null)); }
  function clearSession() { localStorage.removeItem(SESSION_KEY); }
  return { loadMastery, saveMastery, loadSession, saveSession, clearSession };
})();
