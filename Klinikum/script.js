// Lightweight interactions: mark the current navigation section.
const links = [...document.querySelectorAll('.nav nav a')];
const sections = links.map(link => document.querySelector(link.getAttribute('href'))).filter(Boolean);

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      links.forEach(link => link.classList.remove('active'));
      const active = links.find(link => link.getAttribute('href') === `#${entry.target.id}`);
      if (active) active.classList.add('active');
    }
  });
}, { rootMargin: '-35% 0px -55% 0px' });

sections.forEach(section => observer.observe(section));
