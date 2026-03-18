window.RR_LOADER = (function () {
  function fromUrl() {
    const params = new URLSearchParams(location.search);
    return { catId: params.get('cat') || 'star-speller', lessonCode: params.get('lesson') || 'A1' };
  }

  function resolveFolder(catId, lessonCode) {
    try {
      const lessons = (window.RR_REGISTRY && window.RR_REGISTRY.lessons && window.RR_REGISTRY.lessons[catId]) || [];
      const found = lessons.find(l => l.code === lessonCode);
      if (found && found.folder) return found.folder;
    } catch (_) {}

    const fallbackMap = {
      'A1': 'A1_guard-the-vowel', 'A1.5': 'A1.5_floss', 'A2': 'A2_silent-e', 'A3': 'A3_vowel-teams',
      'A4': 'A4_r-controlled-vowels', 'A5': 'A5_diphthongs', 'A6': 'A6_syllable-types', 'A7': 'A7_consonant-doubling',
      'A8': 'A8_hard-soft-cg', 'A9': 'A9_final-stable-syllables', 'A10': 'A10_prefix-foundations', 'A11': 'A11_suffix-foundations',
      'A12': 'A12_plurals-possessives', 'A13': 'A13_homophones', 'A14': 'A14_irregular-spellings', 'A15': 'A15_greek-latin-roots',
      'A16': 'A16_advanced-vowel-patterns', 'A17': 'A17_multi-syllable-encoding'
    };
    return fallbackMap[lessonCode] || lessonCode;
  }

  function loadLessonData(callback) {
    const { catId, lessonCode } = fromUrl();
    const folder = resolveFolder(catId, lessonCode);
    const script = document.createElement('script');
    script.src = `modules/${catId}/${folder}/data.js`;
    script.onload = () => {
      if (!window.RR_LESSON_DATA) return callback(new Error('Lesson data missing'));
      callback(null, { catId, lessonCode, data: window.RR_LESSON_DATA });
    };
    script.onerror = () => callback(new Error('Lesson file not found'));
    document.body.appendChild(script);
  }

  return { fromUrl, resolveFolder, loadLessonData };
})();
