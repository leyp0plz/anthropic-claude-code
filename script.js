// Mobile nav toggle
const toggle = document.getElementById('navToggle');
const nav = document.getElementById('mainNav');
toggle?.addEventListener('click', () => nav.classList.toggle('is-open'));

// Touch-friendly dropdowns
document.querySelectorAll('.nav__item--dropdown > .nav__link').forEach(link => {
  link.addEventListener('click', e => {
    const item = link.parentElement;
    const isOpen = item.classList.contains('is-open');
    document.querySelectorAll('.nav__item--dropdown').forEach(i => i.classList.remove('is-open'));
    if (!isOpen) {
      e.preventDefault();
      item.classList.add('is-open');
    }
  });
});

// Close dropdown when a dropdown item is clicked
document.querySelectorAll('.dropdown a').forEach(link => {
  link.addEventListener('click', () => {
    document.querySelectorAll('.nav__item--dropdown').forEach(i => i.classList.remove('is-open'));
  });
});

// Close dropdown when clicking outside
document.addEventListener('click', e => {
  if (!e.target.closest('.nav__item--dropdown')) {
    document.querySelectorAll('.nav__item--dropdown').forEach(i => i.classList.remove('is-open'));
  }
});

// Sticky header shadow
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
  header.style.boxShadow = window.scrollY > 10
    ? '0 4px 24px rgba(0,0,0,.22)'
    : '0 2px 16px rgba(0,0,0,.18)';
});

// Contact form
document.getElementById('contactForm')?.addEventListener('submit', e => {
  e.preventDefault();
  const btn = e.target.querySelector('button[type="submit"]');
  btn.textContent = 'Nachricht gesendet ✓';
  btn.disabled = true;
  btn.style.background = '#1e7d45';
  setTimeout(() => {
    btn.textContent = 'Nachricht senden';
    btn.disabled = false;
    btn.style.background = '';
    e.target.reset();
  }, 4000);
});

// Smooth reveal on scroll
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.card, .feature, .quicklink-card').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(24px)';
  el.style.transition = 'opacity .5s ease, transform .5s ease';
  observer.observe(el);
});