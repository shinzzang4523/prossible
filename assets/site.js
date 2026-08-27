// Prossible site — vanilla JS: hamburger menu, FAQ accordion, setup-guide scroll spy.
(function () {
  'use strict';

  // --- mobile hamburger ---
  var nav = document.querySelector('.nav');
  var burger = document.querySelector('.nav-burger');
  if (nav && burger) {
    burger.addEventListener('click', function () {
      var open = nav.classList.toggle('menu-open');
      burger.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    // Close the menu after a link is chosen (matters for same-page anchors).
    nav.querySelectorAll('.nav-links a').forEach(function (a) {
      a.addEventListener('click', function () {
        nav.classList.remove('menu-open');
        burger.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // --- FAQ accordion ---
  document.querySelectorAll('.faq-item').forEach(function (item) {
    var q = item.querySelector('.faq-q');
    if (!q) return;
    q.addEventListener('click', function () {
      var open = item.classList.toggle('open');
      q.setAttribute('aria-expanded', open ? 'true' : 'false');
      var mark = q.querySelector('.mark');
      if (mark) mark.textContent = open ? '–' : '+';
    });
  });

  // --- setup guide scroll spy ---
  var tocLinks = Array.prototype.slice.call(document.querySelectorAll('.guide-toc nav a'));
  if (tocLinks.length) {
    var sections = tocLinks
      .map(function (a) {
        var id = (a.getAttribute('href') || '').replace('#', '');
        return document.getElementById(id);
      })
      .filter(Boolean);

    var setActive = function () {
      var pos = window.scrollY + 120;
      var current = sections[0];
      sections.forEach(function (s) {
        if (s.offsetTop <= pos) current = s;
      });
      tocLinks.forEach(function (a) {
        a.classList.toggle('active', current && a.getAttribute('href') === '#' + current.id);
      });
    };
    window.addEventListener('scroll', setActive, { passive: true });
    window.addEventListener('resize', setActive);
    setActive();
  }
})();
