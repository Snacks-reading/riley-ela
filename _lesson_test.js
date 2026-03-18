(function(){
  const qs = new URLSearchParams(location.search);
  const cat = qs.get('cat') || 'star-speller';
  const lessonCode = qs.get('lesson') || 'A1';
  const lessons = window.RR_REGISTRY?.lessons?.[cat] || [];
  const lessonMeta = lessons.find(l => l.code === lessonCode);
  const els = {
    title: document.getElementById('title'), sub: document.getElementById('sub'), prompt: document.getElementById('prompt'), feedback: document.getElementById('feedback'), answer: document.getElementById('answer'), acc: document.getElementById('acc'), streak: document.getElementById('streak'), xp: document.getElementById('xp'), avatar: document.getElementById('avatar'), avatarCard: document.getElementById('avatarCard'), start: document.getElementById('start'), pause: document.getElementById('pause'), resume: document.getElementById('resume'), repeat: document.getElementById('repeat'), voiceToggle: document.getElementById('voiceToggle'), voiceStatus: document.getElementById('voiceStatus'), errorBox: document.getElementById('errorBox'), sparkleLayer: document.getElementById('sparkleLayer'), ruleName: document.getElementById('ruleName'), ruleBody: document.getElementById('ruleBody'), coachTitle: document.getElementById('coachTitle'), coachText: document.getElementById('coachText'), examples: document.getElementById('examples'), hintText: document.getElementById('hintText')
  };
  let lessonData = null, selectedVoice = null, voicesReady = false, queue = [], isPaused = false, activeUtterance = null;
  const stateKey = `rr_state_${cat}_${lessonCode}`;
  const state = {
    phase:'idle', teachingIndex:0, practiceIndex:0, misses:0, correct:0, total:0, streak:0, xp:0, currentWord:null, currentSentence:'', queue:[], recentMisses:[], tutorMode:'interactive'
  };
  let adaptiveQueue = [];
  let audioCtx = null;
  function ensureAudio(){ if(!audioCtx){ const AC = window.AudioContext || window.webkitAudioContext; if(AC) audioCtx = new AC(); } return audioCtx; }
  function spellSound(kind='spell'){ const ctx=ensureAudio(); if(!ctx) return; const now=ctx.currentTime; const packs={spell:[523.25,659.25,783.99], success:[659.25,783.99,987.77], wrong:[392,349.23,293.66], fire:[783.99,987.77,1174.66], hover:[660,880], page:[440,587,740]}; (packs[kind]||packs.spell).forEach((freq,i)=>{ const o=ctx.createOscillator(); const g=ctx.createGain(); o.type='triangle'; o.frequency.value=freq; g.gain.setValueAtTime(0.0001, now + i*0.05); g.gain.exponentialRampToValueAtTime(0.05, now + i*0.05 + 0.02); g.gain.exponentialRampToValueAtTime(0.0001, now + i*0.05 + 0.24); o.connect(g).connect(ctx.destination); o.start(now+i*0.05); o.stop(now+i*0.05+0.26); }); }
  function spawnBurst(x, y, count=10){ for(let i=0;i<count;i++){ const s=document.createElement('span'); s.className='spark'; s.style.left=x+'px'; s.style.top=y+'px'; s.style.setProperty('--dx',(Math.random()*90-45).toFixed(0)+'px'); s.style.setProperty('--dy',(Math.random()*-90-12).toFixed(0)+'px'); els.sparkleLayer.appendChild(s); setTimeout(()=>s.remove(),760); } }
  function fireworks(){ spellSound('fire'); const w=window.innerWidth, h=window.innerHeight; for(let j=0;j<3;j++){ const ox=w*(0.25 + 0.25*j), oy=h*0.25; for(let i=0;i<24;i++){ const f=document.createElement('span'); f.className='firework'; f.style.left=ox+'px'; f.style.top=oy+'px'; f.style.setProperty('--dx',(Math.cos(i/24*Math.PI*2)*(80+Math.random()*70)).toFixed(0)+'px'); f.style.setProperty('--dy',(Math.sin(i/24*Math.PI*2)*(80+Math.random()*70)).toFixed(0)+'px'); els.sparkleLayer.appendChild(f); setTimeout(()=>f.remove(),1200); } } }
  function setAvatar(mode){ els.avatarCard.classList.remove('cheer','sad'); if(mode==='encourage'){ els.avatar.src='assets/avatars/avatar_encourage.png'; els.avatarCard.classList.add('sad'); } else if(mode==='victory'){ els.avatar.src='assets/avatars/riley_victory.png'; els.avatarCard.classList.add('cheer'); fireworks(); } else { els.avatar.src='assets/avatars/avatar_teach.png'; } }
  function saveState(){ localStorage.setItem(stateKey, JSON.stringify(state)); }
  function restoreState(){ try{ const raw=localStorage.getItem(stateKey); if(raw){ const saved=JSON.parse(raw); Object.assign(state,saved||{}); } }catch(_){} }
  function updateStats(){ const acc = state.total ? Math.round((state.correct/state.total)*100) : 0; els.acc.textContent = `${acc}%`; els.streak.textContent = String(state.streak); els.xp.textContent = String(state.xp); saveState(); }
  function fillTeaching(){ if(!lessonData) return; const cards = lessonData.teaching_cards || []; const baseTitle = (lessonData.lesson.title || '').replace(/^A\d+(?:\.5)?\s+—\s+/,''); const shortTitle = baseTitle.replace(/\s*\(.*?\)/,'').trim(); const ruleText = cards[0]?.text || lessonData.lesson.ruleSummary || ''; const ex = cards[0]?.examples || []; const non = cards[0]?.nonExamples || []; els.examples.innerHTML = '';
      els.ruleName.textContent = shortTitle.toLowerCase();
      els.ruleBody.textContent = ruleText;
      els.coachTitle.textContent = 'Rule';
      els.coachText.textContent = ruleText;
      ex.slice(0,4).forEach(item=>{ const d=document.createElement('div'); d.className='ex'; d.textContent = `Example: ${String(item).replace(/→/g,' becomes ')}`; els.examples.appendChild(d); });
      if(non.length){ const d=document.createElement('div'); d.className='ex'; d.textContent = `Non-examples: ${non.slice(0,4).join(', ')}`; els.examples.appendChild(d); }
      const pt=document.getElementById('parchmentTitle'); const pb=document.getElementById('parchmentBody');
      if(pt) pt.textContent = shortTitle.toLowerCase();
      if(pb){ const exText = ex.slice(0,2).map(x=>String(x).replace(/→/g,' becomes ')).join('<br>'); const nonText = non.length ? `<br><br>Non-examples: ${non.slice(0,4).join(', ')}` : ''; pb.innerHTML = `${ruleText}<br><br>${exText}${nonText}`; }
  }
  function setPrompt(msg){ els.prompt.textContent = msg; }
  function setFeedback(msg){ els.feedback.textContent = msg; }
  function preferredVoice(){ const voices = speechSynthesis.getVoices(); const picks = [
    /Aria.*English \(United States\)/i, /Jenny.*English \(United States\)/i, /Samantha/i, /Zira/i, /Google US English/i, /Microsoft Aria Online/i
  ];
    for(const rx of picks){ const v = voices.find(v => /en-US/i.test(v.lang) && rx.test(v.name)); if(v) return v; }
    return voices.find(v => /en-US/i.test(v.lang) && /(female|aria|jenny|samantha|zira)/i.test(v.name)) || voices.find(v => /en-US/i.test(v.lang)) || voices[0] || null;
  }
  function updateVoiceStatus(){ const voices = speechSynthesis.getVoices(); selectedVoice = preferredVoice(); voicesReady = voices.length > 0; els.voiceStatus.textContent = selectedVoice ? `Using ${selectedVoice.name} • ${selectedVoice.lang} • slower teaching pace` : 'Voice ready when the browser exposes a US English female voice.'; }
  speechSynthesis.onvoiceschanged = updateVoiceStatus; updateVoiceStatus();
  function buildTeachSegments(){ const cards = lessonData.teaching_cards || []; const baseTitle = (lessonData.lesson.title || '').replace(/^A\d+(?:\.5)?\s+—\s+/,''); const shortTitle = baseTitle.replace(/\s*\(.*?\)/,'').trim(); const examples = (cards[0]?.examples || []).map(x=>String(x).replace(/→/g,' becomes ')); const nonExamples = cards[0]?.nonExamples || [];
    return [
      `Hi Riley. I am Rye Rye the French Fry. Today we will learn the ${shortTitle} rule.`,
      `The rule is this. ${lessonData.lesson.ruleSummary}`,
      cards[1]?.text ? `Here is why the rule matters. ${cards[1].text}` : '',
      examples.length ? `Listen to the examples. ${examples.join('. ')}.` : '',
      nonExamples.length ? `Now listen to words that do not show the ${shortTitle.toLowerCase()} pattern. ${nonExamples.join(', ')}.` : '',
      `Remember this strategy. Read the word, listen for the long vowel, and check whether silent e changes the sound.`,
      `Now it is time to practice.`
    ].filter(Boolean);
  }
  function speakQueue(items, onDone){ queue = items.slice(); const startAt = state.queue && state.queue.length && isPaused ? state.queue.slice() : queue.slice(); queue = startAt; state.queue = queue.slice(); saveState(); const playNext = ()=>{
      if(isPaused) return;
      if(!queue.length){ state.queue = []; saveState(); if(onDone) onDone(); return; }
      const text = queue.shift(); state.queue = queue.slice(); saveState(); if(!els.voiceToggle.checked || !('speechSynthesis' in window)) { setTimeout(playNext, 220); return; }
      speechSynthesis.cancel(); const u = new SpeechSynthesisUtterance(text); activeUtterance = u; if(selectedVoice) u.voice = selectedVoice; u.rate = 0.98; u.pitch = 1.0; u.onend = ()=>{ activeUtterance = null; if(!isPaused) playNext(); }; u.onerror = ()=>{ activeUtterance = null; if(!isPaused) playNext(); }; speechSynthesis.speak(u);
    };
    playNext();
  }
  function pauseAll(){ isPaused = true; if(activeUtterance && activeUtterance.text){ state.queue = [activeUtterance.text].concat(queue||[]); saveState(); } speechSynthesis.cancel(); }
  function resumeAll(){ if(!lessonData) return; isPaused = false; if(state.phase==='teaching' && state.queue && state.queue.length){ speakQueue(state.queue.slice(), finishTeaching); }
    else if(state.phase==='practice' && state.currentSentence){ speakQueue([`Listen to the sentence. ${state.currentSentence}`, `The missing word is ${state.currentWord}. Type the word.`], ()=>{}); }
  }
  function practiceOrder(){ if(adaptiveQueue.length) return adaptiveQueue; adaptiveQueue = (lessonData.practice_items || []).map((item, index) => ({...item, _i:index, weight:1})); return adaptiveQueue; }
  function currentItem(){ const items = practiceOrder(); return items[state.practiceIndex % items.length]; }
  function updateHint(text){ els.hintText.textContent = text; }
  function showItem(){ const item = currentItem(); if(!item) return; state.phase = 'practice'; state.currentWord = item.answer; state.currentSentence = item.fullSentence; state.misses = 0; saveState(); setAvatar('teach'); setPrompt(item.blankSentence); setFeedback(''); updateHint(''); els.answer.value=''; els.answer.focus(); speakQueue([`Listen to the sentence. ${item.fullSentence}`, `The missing word is ${item.answer}. Type the word.`], ()=>{}); }
  function finishTeaching(){ state.phase = 'practice'; state.teachingIndex = buildTeachSegments().length; saveState(); showItem(); }
  function startLesson(){ if(!lessonData) return; isPaused = false; state.phase = 'teaching'; state.teachingIndex = 0; const segs = buildTeachSegments(); state.queue = segs.slice(); saveState(); setAvatar('teach'); setPrompt(''); setFeedback(''); updateHint(''); speakQueue(segs, finishTeaching); }
  function repeatCurrent(){ if(state.phase==='teaching'){ const segs = buildTeachSegments(); state.queue = segs.slice(Math.min(state.teachingIndex, segs.length-1)); if(state.queue.length===0) state.queue = segs.slice(); isPaused = false; speakQueue(state.queue.slice(), finishTeaching); }
    else if(state.phase==='practice' && state.currentSentence){ isPaused = false; speakQueue([`Listen to the sentence. ${state.currentSentence}`, `The missing word is ${state.currentWord}. Type the word.`], ()=>{}); }
  }
  function checkAnswer(){ if(state.phase!=='practice') return; const item = currentItem(); if(!item) return; const guess = (els.answer.value||'').trim().toLowerCase(); if(!guess) return; state.total += 1; const good = guess === String(item.answer).toLowerCase(); const r = els.answer.getBoundingClientRect(); spawnBurst(r.left + r.width/2, r.top + 10, 12);
    if(good){ spellSound('success'); state.correct += 1; state.streak += 1; state.xp += 10 + Math.min(state.streak, 5); item.weight = Math.max(1, (item.weight||1)-1); setFeedback(`Yes, Riley — ${item.answer} is correct. Great job using the rule.`); updateHint(`Why it was right: ${lessonData.lesson.ruleSummary}`); setAvatar(state.streak >= 3 ? 'victory' : 'teach'); if(state.streak >= 3){ setFeedback(`Amazing, Riley! Three in a row! Ry Ry is cheering for you.`); }
      state.practiceIndex += 1; saveState(); updateStats(); setTimeout(showItem, 1200); return;
    }
    spellSound('wrong'); state.streak = 0; state.misses += 1; setAvatar('encourage'); updateStats();
    const firstLetter = item.answer ? item.answer[0].toUpperCase() : '';
    if(state.misses === 1){ setFeedback(`Let's try again.`); updateHint(`Hint 1: The word starts with ${firstLetter}. ${item.reteach || lessonData.lesson.ruleSummary}`); speakQueue([`Let's think about the rule. ${item.reteach || lessonData.lesson.ruleSummary}`, `Here is the sentence again. ${item.fullSentence}`, `The missing word is ${item.answer}. Try the word again.`], ()=>{}); }
    else if(state.misses === 2){ setFeedback(`Close. Listen for the vowel pattern.`); updateHint(`Hint 2: Think about silent e and the long vowel sound in ${item.answer}.`); speakQueue([`Second hint. ${item.reteach || lessonData.lesson.ruleSummary}`, `The sentence is ${item.fullSentence}`, `The missing word is ${item.answer}. Try one more time.`], ()=>{}); }
    else { const letters = item.answer.split('').join(' '); setFeedback(`The correct spelling is ${item.answer}. Ry Ry will recycle this word so you can master it.`); updateHint(`Correct spelling: ${item.answer}. This word will come back soon for extra practice.`); speakQueue([`The correct spelling is ${letters}.`, `Listen again. ${item.fullSentence}`, `You will see this word again soon.`], ()=>{}); item.weight = (item.weight||1) + 2; adaptiveQueue.splice(Math.min(state.practiceIndex+2, adaptiveQueue.length), 0, {...item}); state.practiceIndex += 1; state.misses = 0; saveState(); setTimeout(showItem, 1600); }
  }
  function loadLesson(){ if(!lessonMeta){ throw new Error(`Lesson ${lessonCode} is not registered for ${cat}.`); }
    const script = document.createElement('script'); script.src = `modules/${cat}/${lessonMeta.folder}/data.js`; script.onload = ()=>{ lessonData = window.RR_LESSON_DATA; if(!lessonData) throw new Error('Lesson data loaded but RR_LESSON_DATA was missing.'); els.title.textContent = lessonData.lesson.title; els.sub.textContent = '';  fillTeaching(); restoreState(); updateStats(); if(state.phase==='practice' && state.currentSentence){ setPrompt(currentItem()?.blankSentence || ''); updateHint(''); } };
    script.onerror = ()=>showError(`Could not load lesson data from modules/${cat}/${lessonMeta.folder}/data.js`); document.body.appendChild(script);
  }
  function showError(msg){ els.errorBox.style.display='block'; els.errorBox.textContent=msg; }
  els.start.addEventListener('click', ()=>{ if(!lessonData) return; spellSound('spell'); startLesson(); });
  els.pause.addEventListener('click', ()=>{ pauseAll(); });
  els.resume.addEventListener('click', ()=>{ resumeAll(); });
  els.repeat.addEventListener('click', ()=>{ repeatCurrent(); });
  els.answer.addEventListener('keydown', e=>{ if(e.key==='Enter'){ e.preventDefault(); checkAnswer(); } });
  loadLesson();
})();