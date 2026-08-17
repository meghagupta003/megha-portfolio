// Footer year
document.getElementById('year').textContent = new Date().getFullYear();

// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const mobileNav = document.getElementById('mobileNav');
navToggle.addEventListener('click', () => {
  const open = mobileNav.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', open);
});
mobileNav.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => {
    mobileNav.classList.remove('open');
    navToggle.setAttribute('aria-expanded', false);
  });
});

// Scroll reveal
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if (!reduceMotion && 'IntersectionObserver' in window) {
  document.body.classList.add('js-reveal');
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });

  document.querySelectorAll('.reveal').forEach((el, i) => {
    el.style.transitionDelay = `${Math.min(i % 6, 6) * 0.06}s`;
    io.observe(el);
  });
} else {
  document.querySelectorAll('.reveal').forEach(el => el.classList.add('in'));
}

// Faceted cursor glint (desktop, fine pointer only)
if (window.matchMedia('(hover: hover) and (pointer: fine)').matches && !reduceMotion) {
  const cursor = document.querySelector('.facet-cursor');
  let active = false;
  window.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
    if (!active) { cursor.classList.add('active'); active = true; }
  });
  window.addEventListener('mouseleave', () => cursor.classList.remove('active'));
}
