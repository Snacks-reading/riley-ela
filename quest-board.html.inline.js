
const CATS=(window.RR_REGISTRY?.categories||[]);
const PAGE0_IDS=['star-speller','wordplay-forge','sight-word-galaxy','sound-breaker','syllable-smash','vowel-vault','consonant-lab','word-builders','morphology-mission','grammar-glider'];
const page0Cats = PAGE0_IDS.map(id=>CATS.find(c=>c.id===id)).filter(Boolean);
const otherCats = CATS.filter(c=>!PAGE0_IDS.includes(c.id));
let page=0;
let audioCtx=null;
function ensureAudio(){ if(!audioCtx){ const AC = window.AudioContext || window.webkitAudioContext; if(AC) audioCtx = new AC(); } return audioCtx; }
function playSpell(kind='open'){ const ctx=ensureAudio(); if(!ctx) return; const now=ctx.currentTime; const notes = kind==='hover' ? [660,880] : kind==='page' ? [440,587,740] : [523.25,659.25,783.99]; notes.forEach((freq,i)=>{ const o=ctx.createOscillator(); const g=ctx.createGain(); o.type='triangle'; o.frequency.value=freq; g.gain.setValueAtTime(0.0001, now + i*0.06); g.gain.exponentialRampToValueAtTime(0.05, now + i*0.06 + 0.02); g.gain.exponentialRampToValueAtTime(0.0001, now + i*0.06 + 0.28); o.connect(g).connect(ctx.destination); o.start(now + i*0.06); o.stop(now + i*0.06 + 0.3); }); }
function spawnSpark(container,x,y,big=false){ const s=document.createElement('span'); s.className='spark'+(big?' big':''); s.style.left=x+'px'; s.style.top=y+'px'; const dx=(Math.random()*80-40).toFixed(0)+'px'; const dy=(Math.random()*-80-10).toFixed(0)+'px'; s.style.setProperty('--dx',dx); s.style.setProperty('--dy',dy); container.appendChild(s); setTimeout(()=>s.remove(),720); }
function goCategory(catId){ playSpell('open'); const stage=document.getElementById('pageStage'); const surf=stage.querySelector('.surface'); if(surf){ surf.classList.add('turn'); setTimeout(()=>{ location.href=`category-board.html?cat=${encodeURIComponent(catId)}`; },220); } else { location.href=`category-board.html?cat=${encodeURIComponent(catId)}`; } }
function buildPage0(){
  const stage=document.getElementById('pageStage');
  stage.innerHTML=`<div class="surface magicGlow" id="surface"><img src="assets/originals/quest-board-reference.png" alt="Original Tier 1 Ravenclaw board"/><div class="avatarTag">Ry Ry The French Fry</div></div>`;
  const surface=document.getElementById('surface');
  const map=[
    ['star-speller',6.5,9.8,11.7,35.4],['wordplay-forge',18.9,9.8,11.7,35.4],['sight-word-galaxy',31.2,9.8,11.7,35.4],['sound-breaker',43.6,9.8,11.7,35.4],['syllable-smash',56.0,9.8,11.7,35.4],
    ['vowel-vault',6.5,50.9,11.7,35.4],['consonant-lab',18.9,50.9,11.7,35.4],['word-builders',31.2,50.9,11.7,35.4],['morphology-mission',43.6,50.9,11.7,35.4],['grammar-glider',56.0,50.9,11.7,35.4]
  ];
  map.forEach(([id,left,top,width,height])=>{
    const cat=CATS.find(c=>c.id===id)||{title:id};
    const a=document.createElement('a');
    a.href=`category-board.html?cat=${encodeURIComponent(id)}`;
    a.className='boardHotspot';
    a.ariaLabel=cat.title;
    a.style.left=left+'%'; a.style.top=top+'%'; a.style.width=width+'%'; a.style.height=height+'%';
    a.addEventListener('mouseenter',e=>{ playSpell('hover'); a.classList.add('active'); const r=surface.getBoundingClientRect(); for(let i=0;i<5;i++) setTimeout(()=>spawnSpark(surface, e.clientX-r.left, e.clientY-r.top), i*35); });
    a.addEventListener('mouseleave',()=>a.classList.remove('active'));
    a.addEventListener('mousemove',e=>{ if(Math.random()<0.08){ const r=surface.getBoundingClientRect(); spawnSpark(surface,e.clientX-r.left,e.clientY-r.top); } });
    a.addEventListener('click',e=>{ e.preventDefault(); const r=surface.getBoundingClientRect(); for(let i=0;i<10;i++) setTimeout(()=>spawnSpark(surface,e.clientX-r.left,e.clientY-r.top,true), i*18); goCategory(id); });
    surface.appendChild(a);
  });
}
function buildFallback(){
  const stage=document.getElementById('pageStage');
  stage.innerHTML=`<div class="surface" id="surface2"><div class="fallbackGrid">${otherCats.map(c=>`<div class="bookTile"><button data-cat="${c.id}" title="${c.title}"><img src="assets/books/${c.id}.png" alt="${c.title} spellbook"/></button><h3>${c.title}</h3><p>${c.purpose||''}</p></div>`).join('')}</div></div>`;
  stage.querySelectorAll('button[data-cat]').forEach(btn=>{
    btn.addEventListener('mouseenter',()=>playSpell('hover'));
    btn.addEventListener('click',()=>goCategory(btn.dataset.cat));
  });
}
function render(){
  document.getElementById('pageLabel').textContent=`Page ${page+1} of 2`;
  if(page===0) buildPage0(); else buildFallback();
  document.getElementById('prevBtn').disabled = page===0;
  document.getElementById('nextBtn').disabled = page===1;
}
document.getElementById('prevBtn').addEventListener('click',()=>{ if(page>0){ page--; playSpell('page'); render(); } });
document.getElementById('nextBtn').addEventListener('click',()=>{ if(page<1){ page++; playSpell('page'); render(); } });
render();
