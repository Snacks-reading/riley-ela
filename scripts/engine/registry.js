window.RR_REGISTRY_HELPER = (function () {
  function getCategoryTitle(catId) { return (window.RR_REGISTRY?.categories || []).find(c => c.id === catId)?.title || 'Category'; }
  function getLessonsForCategory(catId) { return window.RR_REGISTRY?.lessons?.[catId] || []; }
  return { getCategoryTitle, getLessonsForCategory };
})();
