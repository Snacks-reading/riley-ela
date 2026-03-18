window.RR_EFFECTS = (function () {
  let overlay = null;
  function ensureOverlay() {
    if (overlay) return overlay;
    overlay = document.createElement('div'); overlay.id = 'celebrateOverlay';
    overlay.style.position = 'fixed'; overlay.style.inset = '0'; overlay.style.pointerEvents = 'none'; overlay.style.zIndex = '9999'; overlay.style.display = 'none';
    document.body.appendChild(overlay); return overlay;
  }
  function triggerCelebration() {
    const root = ensureOverlay(); root.innerHTML = ''; root.style.display = 'block';
    for (let i = 0; i < 28; i++) {
      const dot = document.createElement('div');
      dot.style.position = 'absolute'; dot.style.left = Math.random()*100 + '%'; dot.style.top = Math.random()*35 + '%';
      dot.style.width='12px'; dot.style.height='12px'; dot.style.borderRadius='50%';
      dot.style.background=['#ffd86b','#fff2b5','#8ed8ff','#c9a3ff'][i%4]; dot.style.boxShadow='0 0 14px rgba(255,255,255,.9)';
      dot.style.animation='rrBurst 1.4s ease-out forwards'; dot.style.animationDelay=`${Math.random()*0.25}s`;
      root.appendChild(dot);
    }
    setTimeout(()=>{ root.style.display='none'; root.innerHTML=''; },1800);
  }
  return { triggerCelebration };
})();
