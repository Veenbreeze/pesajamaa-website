/* ============================================================
   PesaJamaa — tiny vanilla-JS motion layer.
   - Scroll-reveal via IntersectionObserver
   - Count-up numbers (stats + the live amount)
   - Progress-bar fills that animate on scroll
   All of it bails out gracefully when the user prefers reduced motion.
   ============================================================ */

const prefersReducedMotion = window.matchMedia(
  '(prefers-reduced-motion: reduce)',
).matches;

/* ---------- 1. Scroll-reveal ---------- */
function setupReveal() {
  const els = document.querySelectorAll('[data-reveal], [data-reveal-stagger]');
  if (!els.length) return;

  if (prefersReducedMotion || !('IntersectionObserver' in window)) {
    els.forEach((el) => el.classList.add('is-visible'));
    return;
  }

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        // Stagger direct children if requested.
        if (el.hasAttribute('data-reveal-stagger')) {
          Array.from(el.children).forEach((child, i) => {
            child.style.transitionDelay = `${Math.min(i * 90, 600)}ms`;
          });
        }
        el.classList.add('is-visible');
        obs.unobserve(el);
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
  );

  els.forEach((el) => observer.observe(el));
}

/* ---------- 2. Count-up ---------- */
function formatNumber(value, decimals) {
  return value.toLocaleString('en-US', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });
}

function animateCount(el) {
  const target = parseFloat(el.dataset.countup || '0');
  const decimals = parseInt(el.dataset.decimals || '0', 10);
  const prefix = el.dataset.prefix || '';
  const suffix = el.dataset.suffix || '';
  const duration = parseInt(el.dataset.duration || '1800', 10);

  if (prefersReducedMotion) {
    el.textContent = prefix + formatNumber(target, decimals) + suffix;
    return;
  }

  const start = performance.now();
  // easeOutCubic for a premium decelerating feel.
  const ease = (t) => 1 - Math.pow(1 - t, 3);

  function tick(now) {
    const progress = Math.min((now - start) / duration, 1);
    const current = target * ease(progress);
    el.textContent = prefix + formatNumber(current, decimals) + suffix;
    if (progress < 1) requestAnimationFrame(tick);
    else el.textContent = prefix + formatNumber(target, decimals) + suffix;
  }
  requestAnimationFrame(tick);
}

function setupCounters() {
  const els = document.querySelectorAll('[data-countup]');
  if (!els.length) return;

  if (!('IntersectionObserver' in window)) {
    els.forEach(animateCount);
    return;
  }

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        animateCount(entry.target);
        obs.unobserve(entry.target);
      });
    },
    { threshold: 0.4 },
  );
  els.forEach((el) => observer.observe(el));
}

/* ---------- 3. Progress bars ---------- */
function setupProgress() {
  const els = document.querySelectorAll('[data-progress]');
  if (!els.length) return;

  const fill = (el) => {
    const value = Math.max(0, Math.min(100, parseFloat(el.dataset.progress || '0')));
    const bar = el.querySelector('[data-progress-fill]');
    if (bar) bar.style.width = value + '%';
  };

  if (prefersReducedMotion || !('IntersectionObserver' in window)) {
    els.forEach(fill);
    return;
  }

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        // small delay so the fill reads as an intentional animation
        setTimeout(() => fill(entry.target), 150);
        obs.unobserve(entry.target);
      });
    },
    { threshold: 0.35 },
  );
  els.forEach((el) => observer.observe(el));
}

function init() {
  setupReveal();
  setupCounters();
  setupProgress();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
