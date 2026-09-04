/**
 * Bulletproof cross-browser smooth scroll to top utility.
 * Handles quirks with documentElement, document.body, window,
 * and CSS scroll-behavior across modern and legacy browsers.
 */
export const scrollToTop = (options = { smooth: true }) => {
  if (!options.smooth) {
    window.scrollTo(0, 0);
    if (document.documentElement) document.documentElement.scrollTop = 0;
    if (document.body) document.body.scrollTop = 0;
    if (document.scrollingElement) document.scrollingElement.scrollTop = 0;
    return;
  }

  // Check current scroll position
  const startY =
    window.scrollY ||
    window.pageYOffset ||
    (document.documentElement && document.documentElement.scrollTop) ||
    (document.body && document.body.scrollTop) ||
    (document.scrollingElement && document.scrollingElement.scrollTop) ||
    0;

  if (startY <= 0) return;

  // Try native smooth scrolling first
  let nativeTriggered = false;
  try {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    nativeTriggered = true;
  } catch (_) {}

  try {
    if (document.documentElement) {
      document.documentElement.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
      nativeTriggered = true;
    }
  } catch (_) {}

  try {
    if (document.scrollingElement && document.scrollingElement !== document.documentElement) {
      document.scrollingElement.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
      nativeTriggered = true;
    }
  } catch (_) {}

  // Silky smooth programmatic animation fallback (60fps easeOutCubic)
  // Ensures 100% reliability even if browser ignores or interrupts native smooth scroll
  const duration = Math.min(600, Math.max(300, startY * 0.15)); // adaptive duration
  const startTime = performance.now();

  const step = (currentTime) => {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    // easeOutCubic curve
    const ease = 1 - Math.pow(1 - progress, 3);
    const nextY = Math.round(startY * (1 - ease));

    // Update all potential scroll owners
    window.scrollTo(0, nextY);
    if (document.documentElement) document.documentElement.scrollTop = nextY;
    if (document.body) document.body.scrollTop = nextY;
    if (document.scrollingElement) document.scrollingElement.scrollTop = nextY;

    if (progress < 1) {
      requestAnimationFrame(step);
    } else {
      window.scrollTo(0, 0);
      if (document.documentElement) document.documentElement.scrollTop = 0;
      if (document.body) document.body.scrollTop = 0;
      if (document.scrollingElement) document.scrollingElement.scrollTop = 0;
    }
  };

  requestAnimationFrame(step);
};
