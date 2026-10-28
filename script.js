(() => {
  'use strict';

  // ---- Menu hamburger ----
  const burger = document.getElementById('burger');
  const menu = document.getElementById('menu');

  const setMenu = (open) => {
    menu.classList.toggle('open', open);
    burger.setAttribute('aria-expanded', String(open));
    burger.setAttribute('aria-label', open ? 'Chiudi il menu' : 'Apri il menu');
  };

  burger.addEventListener('click', () => setMenu(!menu.classList.contains('open')));
  menu.addEventListener('click', (e) => { if (e.target.closest('a')) setMenu(false); });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && menu.classList.contains('open')) { setMenu(false); burger.focus(); }
  });
  document.addEventListener('click', (e) => {
    if (menu.classList.contains('open') && !e.target.closest('.site-header')) setMenu(false);
  });
  window.matchMedia('(min-width:760px)').addEventListener('change', (e) => { if (e.matches) setMenu(false); });

  // ---- Card servizi: "Cosa troverai" ----
  document.querySelectorAll('.more').forEach((btn) => {
    const panel = document.getElementById(btn.getAttribute('aria-controls'));
    btn.addEventListener('click', () => {
      const open = btn.getAttribute('aria-expanded') !== 'true';
      btn.setAttribute('aria-expanded', String(open));
      panel.classList.toggle('open', open);
    });
  });

  // ---- Immagini: se un URL non carica, resta lo sfondo con la zampa ----
  document.querySelectorAll('img').forEach((img) => {
    const hide = () => { img.style.visibility = 'hidden'; };
    img.addEventListener('error', hide);
    if (img.complete && img.naturalWidth === 0) hide();
  });

  // ---- Anno nel footer ----
  const y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();
})();
