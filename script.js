/* Content and anchor navigation remain available without JavaScript. */
(() => {
  const links = [...document.querySelectorAll('.nav a')];
  const sections = links.map(link => document.querySelector(link.hash)).filter(Boolean);
  if (!('IntersectionObserver' in window)) return;
  const visible = new Map();
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => visible.set(entry.target.id, entry.isIntersecting));
    const current = sections.find(section => visible.get(section.id));
    if (!current) return;
    links.forEach(link => {
      if (link.hash === `#${current.id}`) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    });
  }, { rootMargin: '-5% 0px -35% 0px', threshold: 0 });
  sections.forEach(section => observer.observe(section));
})();
