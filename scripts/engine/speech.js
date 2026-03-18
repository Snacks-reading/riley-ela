window.RR_SPEECH = (function () {
  let queue = [];
  let speaking = false;
  let paused = false;
  let currentUtterance = null;
  let onDone = null;
  let onItem = null;

  function getVoices() {
    return window.speechSynthesis ? window.speechSynthesis.getVoices() || [] : [];
  }

  function pickBestVoice() {
    const voices = getVoices();
    if (!voices.length) return null;

    const preferred = [
      v => /Natural/i.test(v.name) && /^en-US$/i.test(v.lang),
      v => /(Aria|Jenny|Guy|Davis|Jane|Sara|Ana|Christopher|Eric|Michelle|Emma|Brian)/i.test(v.name) && /^en-US$/i.test(v.lang),
      v => /^en-US$/i.test(v.lang),
      v => /^en/i.test(v.lang)
    ];

    for (const rule of preferred) {
      const found = voices.find(rule);
      if (found) return found;
    }
    return voices[0] || null;
  }

  function speakNext() {
    if (paused) return;

    if (!queue.length) {
      speaking = false;
      currentUtterance = null;
      const done = onDone;
      onDone = null;
    onItem = null;
      if (typeof done === "function") done();
      return;
    }

    const text = queue.shift();
    if (typeof onItem === "function") {
      try { onItem(String(text)); } catch (_) {}
    }
    if (!text || !String(text).trim()) {
      speakNext();
      return;
    }

    const utter = new SpeechSynthesisUtterance(String(text));
    const voice = pickBestVoice();
    if (voice) utter.voice = voice;

    utter.lang = (voice && voice.lang) || "en-US";
    utter.rate = 0.95;
    utter.pitch = 1.0;
    utter.volume = 1.0;

    utter.onend = function () {
      currentUtterance = null;
      if (!paused) speakNext();
    };

    utter.onerror = function () {
      currentUtterance = null;
      if (!paused) speakNext();
    };

    currentUtterance = utter;
    speaking = true;
    window.speechSynthesis.speak(utter);
  }

  function speakQueue(lines, done, itemCallback) {
    cancel();
    queue = (lines || []).filter(Boolean).map(String);
    onDone = done || null;
    onItem = itemCallback || null;
    paused = false;
    speaking = true;
    speakNext();
  }

  function cancel() {
    queue = [];
    paused = false;
    speaking = false;
    currentUtterance = null;
    onDone = null;
    onItem = null;
    if (window.speechSynthesis) {
      window.speechSynthesis.cancel();
    }
  }

  function pause() {
    paused = true;
    if (window.speechSynthesis && window.speechSynthesis.speaking) {
      window.speechSynthesis.pause();
    }
  }

  function resume() {
    paused = false;
    if (window.speechSynthesis && window.speechSynthesis.paused) {
      window.speechSynthesis.resume();
      return;
    }
    if (!currentUtterance && queue.length) {
      speakNext();
    }
  }

  function spellLetters(word) {
    return String(word).split("").join(". ");
  }

  if (window.speechSynthesis) {
    window.speechSynthesis.onvoiceschanged = function () {
      getVoices();
    };
  }

  return {
    getVoices,
    pickBestVoice,
    speakQueue,
    cancel,
    pause,
    resume,
    spellLetters
  };
})();