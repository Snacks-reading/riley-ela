window.RR_SESSION = (function () {
  function clone(obj) {
    return JSON.parse(JSON.stringify(obj));
  }

  function shuffle(arr) {
    const out = arr.slice();
    for (let i = out.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [out[i], out[j]] = [out[j], out[i]];
    }
    return out;
  }

  function normalizeItems(items) {
    return (items || []).filter(item =>
      item && item.id && item.answer && item.fullSentence && item.blankSentence
    );
  }

  function dedupeByAnswer(items) {
    const seen = new Set();
    return items.filter(item => {
      const key = String(item.answer || '').toLowerCase();
      if (!key || seen.has(key)) return false;
      seen.add(key);
      return true;
    });
  }

  function buildAdaptiveIntro(data, catId, lessonCode) {
    const lessonCfg = (data && data.lesson && data.lesson.adaptiveConfig) || {};
    const sentenceMap = {};
    (normalizeItems(data.practice_items || []) || []).forEach(item => {
      const key = String(item.answer || '').toLowerCase();
      if (!key) return;
      sentenceMap[key] = {
        fullSentence: item.fullSentence,
        blankSentence: item.blankSentence,
        reteach: item.reteach,
        spokenPrompt: item.spokenPrompt
      };
    });

    const baseCfg = {
      currentCatId: catId,
      currentLessonCode: lessonCode,
      sameLessonFirst: true,
      limit: lessonCfg.limit || 8,
      currentLessonSentenceMap: sentenceMap
    };

    if (lessonCfg.reviewScope) baseCfg.reviewScope = lessonCfg.reviewScope;
    if (lessonCfg.sourceCategories) baseCfg.sourceCategories = lessonCfg.sourceCategories;
    if (lessonCfg.sourceLessonKeys) baseCfg.sourceLessonKeys = lessonCfg.sourceLessonKeys;

    return (window.RR_MASTERY && window.RR_MASTERY.buildAdaptiveItems)
      ? window.RR_MASTERY.buildAdaptiveItems(baseCfg)
      : [];
  }

  function createSession(data, catId, lessonCode) {
    const fullBank = shuffle(normalizeItems(data.practice_items || []));
    const adaptiveItems = buildAdaptiveIntro(data, catId, lessonCode);
    const freshBank = fullBank.filter(item => !adaptiveItems.some(a => String(a.answer).toLowerCase() === String(item.answer).toLowerCase()));
    const sessionTarget = Math.min(24, adaptiveItems.length + freshBank.length);
    const queue = dedupeByAnswer(adaptiveItems.concat(freshBank)).slice(0, sessionTarget).map(clone);

    return {
      sessionVersion: 2,
      catId,
      lessonCode,
      lessonTitle: data.lesson?.title || "",
      ruleSummary: data.lesson?.ruleSummary || "",
      fullBank,
      queue,
      index: 0,
      missCount: 0,
      phase: "idle",
      correct: 0,
      total: 0,
      streak: 0,
      streakBest: 0,
      xp: 0,
      sessionSize: queue.length,
      bankSize: fullBank.length,
      recycleCount: 0,
      missedWordCount: 0,
      adaptiveCount: adaptiveItems.length,
      wordStates: {}
    };
  }

  function current(session) {
    return session?.queue?.[session.index] || null;
  }

  function ensureWordState(session, itemId) {
    if (!session.wordStates) session.wordStates = {};
    if (!session.wordStates[itemId]) {
      session.wordStates[itemId] = {
        missCycleOpen: false,
        recycledThisCycle: false
      };
    }
    return session.wordStates[itemId];
  }

  function markFirstMissInCycle(session, item) {
    const state = ensureWordState(session, item.id);

    if (!state.missCycleOpen) {
      state.missCycleOpen = true;
      state.recycledThisCycle = false;
      session.missedWordCount = (session.missedWordCount || 0) + 1;
      return true;
    }
    return false;
  }

  function recycleOncePerCycle(session, item, distance) {
    const state = ensureWordState(session, item.id);
    if (state.recycledThisCycle) return false;

    const copy = clone(item);
    copy._recycled = true;

    const insertAt = Math.min(session.index + distance, session.queue.length);
    session.queue.splice(insertAt, 0, copy);

    state.recycledThisCycle = true;
    session.recycleCount = (session.recycleCount || 0) + 1;
    session.sessionSize = session.queue.length;
    return true;
  }

  function markCorrect(session, item) {
    const state = ensureWordState(session, item.id);
    state.missCycleOpen = false;
    state.recycledThisCycle = false;
  }

  function persist(session) {
    if (window.RR_STORAGE && window.RR_STORAGE.saveSession) {
      window.RR_STORAGE.saveSession(session);
    }
  }

  function restore(catId, lessonCode) {
    if (!window.RR_STORAGE || !window.RR_STORAGE.loadSession) return null;
    const saved = window.RR_STORAGE.loadSession();
    if (!saved) return null;
    if (saved.catId !== catId || saved.lessonCode !== lessonCode) return null;

    saved.fullBank = saved.fullBank || [];
    saved.queue = saved.queue || [];
    saved.bankSize = saved.bankSize || saved.fullBank.length || saved.queue.length || 0;
    saved.sessionSize = saved.sessionSize || saved.queue.length || 0;
    saved.recycleCount = saved.recycleCount || 0;
    saved.missedWordCount = saved.missedWordCount || 0;
    saved.adaptiveCount = saved.adaptiveCount || 0;
    saved.wordStates = saved.wordStates || {};
    saved.missCount = saved.missCount || 0;
    saved.index = saved.index || 0;
    saved.correct = saved.correct || 0;
    saved.total = saved.total || 0;
    saved.streak = saved.streak || 0;
    saved.xp = saved.xp || 0;

    const hasGenericAdaptive = (saved.queue || []).some(item =>
      item && item._adaptive && (
        !item.blankSentence ||
        String(item.blankSentence).trim().toLowerCase() === 'type the word' ||
        /use what you learned before and type the target word/i.test(String(item.blankSentence || ''))
      )
    );

    if ((saved.sessionVersion || 0) < 2 || hasGenericAdaptive) {
      return null;
    }

    return saved;
  }

  function clear() {
    if (window.RR_STORAGE && window.RR_STORAGE.clearSession) {
      window.RR_STORAGE.clearSession();
    }
  }

  return {
    createSession,
    current,
    ensureWordState,
    markFirstMissInCycle,
    recycleOncePerCycle,
    markCorrect,
    persist,
    restore,
    clear
  };
})();
