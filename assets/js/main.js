// Menu mobile: abre e fecha a lista de links
(function () {
  var btn = document.querySelector('.menu-btn');
  var list = document.querySelector('.nav-links');
  if (!btn || !list) return;
  btn.addEventListener('click', function () {
    var open = list.classList.toggle('open');
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
})();
