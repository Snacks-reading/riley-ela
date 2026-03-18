window.RR_MASTERY = (function () {
  function emptyRecord() {
    return {
      attempts: 0,
      correct: 0,
      incorrect: 0,
      streakBest: 0,
      completionPercent: 0,
      masteredWords: [],
      missedWords: [],
      completed: false,
      lastPlayed: null
    };
  }

  function lessonKey(catId, lessonCode) { return `${catId}:${lessonCode}`; }

  function splitLessonKey(key) {
    const parts = String(key || '').split(':');
    return { catId: parts[0] || '', lessonCode: parts[1] || '' };
  }



  function getSentenceMeta(catId, lessonCode, word, currentSentenceMap) {
    const lower = String(word || '').toLowerCase();
    if (!lower) return null;
    if (currentSentenceMap && currentSentenceMap[lower]) return currentSentenceMap[lower];
    try {
      const idx = window.RR_SENTENCE_INDEX || {};
      const rec = idx[lessonKey(catId, lessonCode)];
      if (rec && rec.items && rec.items[lower]) return rec.items[lower];
    } catch (_) {}
    return null;
  }

  function getRegistryLessonTitle(catId, lessonCode) {
    try {
      const lessons = (window.RR_REGISTRY && window.RR_REGISTRY.lessons && window.RR_REGISTRY.lessons[catId]) || [];
      const found = lessons.find(l => l.code === lessonCode);
      return found ? (found.title || lessonCode) : lessonCode;
    } catch (_) {
      return lessonCode;
    }
  }

  function getRecord(catId, lessonCode) {
    const map = window.RR_STORAGE.loadMastery();
    return map[lessonKey(catId, lessonCode)] || emptyRecord();
  }

  function uniqPush(arr, value) { if (!arr.includes(value)) arr.push(value); }
  function removeValue(arr, value) { const i = arr.indexOf(value); if (i >= 0) arr.splice(i, 1); }

  function updateCompletion(record) {
    const attempts = Math.max(1, record.attempts);
    record.completionPercent = Math.round((record.correct / attempts) * 100);
    record.completed = record.attempts >= 24 && record.completionPercent >= 90 && record.missedWords.length <= 2;
    record.lastPlayed = new Date().toISOString();
    return record;
  }

  function saveRecord(catId, lessonCode, record) {
    const map = window.RR_STORAGE.loadMastery();
    map[lessonKey(catId, lessonCode)] = updateCompletion(record);
    window.RR_STORAGE.saveMastery(map);
  }

  function recordCorrect(catId, lessonCode, word, streakBest, meta) {
    const record = getRecord(catId, lessonCode);
    record.attempts += 1;
    record.correct += 1;
    record.streakBest = Math.max(record.streakBest, streakBest || 0);
    uniqPush(record.masteredWords, word);
    record.wordMeta = record.wordMeta || {};
    if (meta && meta.answer) { record.wordMeta[String(word).toLowerCase()] = { fullSentence: meta.fullSentence || "", blankSentence: meta.blankSentence || "", spokenPrompt: meta.spokenPrompt || "", reteach: meta.reteach || "" }; }
    removeValue(record.missedWords, word);
    saveRecord(catId, lessonCode, record);
  }

  function recordIncorrect(catId, lessonCode, word, streakBest, meta) {
    const record = getRecord(catId, lessonCode);
    record.attempts += 1;
    record.incorrect += 1;
    record.streakBest = Math.max(record.streakBest, streakBest || 0);
    uniqPush(record.missedWords, word);
    record.wordMeta = record.wordMeta || {};
    if (meta && meta.answer) { record.wordMeta[String(word).toLowerCase()] = { fullSentence: meta.fullSentence || "", blankSentence: meta.blankSentence || "", spokenPrompt: meta.spokenPrompt || "", reteach: meta.reteach || "" }; }
    saveRecord(catId, lessonCode, record);
  }

  function uniqueAdaptiveItems(items) {
    const seen = new Set();
    return items.filter(item => {
      const key = String(item.answer || '').toLowerCase();
      if (!key || seen.has(key)) return false;
      seen.add(key);
      return true;
    });
  }

  function buildAdaptiveItems(options) {
    const cfg = options || {};
    const limit = Math.max(0, cfg.limit || 8);
    if (!limit) return [];

    const includeAll = cfg.reviewScope === 'all';
    const includeCategory = cfg.reviewScope === 'category';
    const includeExplicitKeys = Array.isArray(cfg.sourceLessonKeys) && cfg.sourceLessonKeys.length > 0;
    const includeExplicitCats = Array.isArray(cfg.sourceCategories) && cfg.sourceCategories.length > 0;
    const sameLessonKey = cfg.currentCatId && cfg.currentLessonCode ? lessonKey(cfg.currentCatId, cfg.currentLessonCode) : '';
    const map = window.RR_STORAGE.loadMastery();
    const items = [];

    Object.keys(map).forEach(key => {
      const rec = map[key] || {};
      const { catId, lessonCode } = splitLessonKey(key);

      let include = false;
      if (includeAll) include = true;
      if (includeCategory && catId === cfg.currentCatId) include = true;
      if (cfg.sameLessonFirst && key === sameLessonKey) include = true;
      if (includeExplicitKeys && cfg.sourceLessonKeys.includes(key)) include = true;
      if (includeExplicitCats && cfg.sourceCategories.includes(catId)) include = true;
      if (!include) return;

      const title = getRegistryLessonTitle(catId, lessonCode);
      (rec.missedWords || []).forEach(word => {
        const lower = String(word).toLowerCase();
        const storedMeta = (rec.wordMeta && rec.wordMeta[lower]) ? rec.wordMeta[lower] : null;
        const storedIsWeak = !!(storedMeta && (
          !String(storedMeta.fullSentence || '').trim() ||
          /^spell the word/i.test(String(storedMeta.fullSentence || '').trim()) ||
          /adaptive review from/i.test(String(storedMeta.fullSentence || '').trim()) ||
          !String(storedMeta.blankSentence || '').trim() ||
          String(storedMeta.blankSentence || '').trim().toLowerCase() === 'type the word' ||
          /adaptive review from/i.test(String(storedMeta.blankSentence || '').trim())
        ));
        const indexedMeta = getSentenceMeta(catId, lessonCode, word, key === sameLessonKey ? cfg.currentLessonSentenceMap : null);
        const sentenceMeta = (!storedIsWeak && storedMeta) ? storedMeta : indexedMeta;
        const fallbackFull = `Use the word ${word} in this review sentence.`;
        const fallbackBlank = `Use the word ______ in this review sentence.`;
        items.push({
          id: `adaptive_${catId}_${lessonCode}_${String(word).toLowerCase().replace(/[^a-z0-9]+/g, '_')}`,
          answer: word,
          fullSentence: (sentenceMeta && sentenceMeta.fullSentence) || fallbackFull,
          blankSentence: (sentenceMeta && sentenceMeta.blankSentence) || fallbackBlank,
          spokenPrompt: (sentenceMeta && sentenceMeta.spokenPrompt) || `Spell the word ${word}.`,
          reteach: (sentenceMeta && sentenceMeta.reteach) || `${word} is reappearing because it was previously missed in ${title}. Think back to the rule, pattern, or meaning that fits this word.`,
          _adaptive: true,
          _adaptiveSource: key
        });
      });
    });

    // same-lesson items first, then everything else, de-duped
    items.sort((a, b) => {
      const aSame = a._adaptiveSource === sameLessonKey ? 0 : 1;
      const bSame = b._adaptiveSource === sameLessonKey ? 0 : 1;
      return aSame - bSame;
    });

    return uniqueAdaptiveItems(items).slice(0, limit);
  }

  function clearLesson(catId, lessonCode) {
    const map = window.RR_STORAGE.loadMastery();
    delete map[lessonKey(catId, lessonCode)];
    window.RR_STORAGE.saveMastery(map);
  }

  return {
    lessonKey,
    splitLessonKey,
    getRecord,
    saveRecord,
    recordCorrect,
    recordIncorrect,
    buildAdaptiveItems,
    clearLesson
  };
})();
