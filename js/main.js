// Mudhouse Bakery & Coffee — reveal al scrollear, sin dependencias.
(function () {
  var nodes = Array.prototype.slice.call(document.querySelectorAll('[data-reveal]'));
  if (!nodes.length) return;
  if (!('IntersectionObserver' in window)) {
    nodes.forEach(function (el) { el.classList.add('is-visible'); });
    return;
  }
  function show(el, delay) {
    if (el.dataset.revealed === '1') return;
    el.dataset.revealed = '1';
    setTimeout(function () { el.classList.add('is-visible'); }, delay || 0);
  }
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e, i) { if (e.isIntersecting) { show(e.target, i * 55); io.unobserve(e.target); } });
  }, { rootMargin: '0px 0px -8% 0px', threshold: 0.06 });
  nodes.forEach(function (el) { io.observe(el); });
  setTimeout(function () { nodes.forEach(function (el) { show(el); }); }, 2500);
})();
