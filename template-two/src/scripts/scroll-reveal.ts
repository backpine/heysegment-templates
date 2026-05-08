/**
 * Scroll-reveal, universal IntersectionObserver that watches every element
 * with `data-reveal` and toggles `data-reveal-visible` when it enters the
 * viewport. CSS in src/styles/global.css does the actual animation.
 *
 * The observer is one-shot: once an element reveals, it stops being watched.
 * Cheaper than re-toggling, and avoids "re-animate on scroll up" flicker.
 *
 * No-ops when prefers-reduced-motion is set (CSS handles that branch too).
 */

const init = () => {
  const els = document.querySelectorAll<HTMLElement>("[data-reveal]");
  if (!els.length) return;

  // If IntersectionObserver isn't supported (very old browsers), reveal
  // everything immediately so nothing is invisible.
  if (typeof IntersectionObserver === "undefined") {
    els.forEach((el) => el.setAttribute("data-reveal-visible", ""));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.setAttribute("data-reveal-visible", "");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      // Trigger when ~10% of the element has entered the viewport, gives
      // a natural "as you scroll past, it pops in" feel rather than
      // waiting until the whole element is on screen.
      threshold: 0.12,
      // Negative bottom margin makes elements wait until they're a bit
      // into view rather than firing the moment any pixel enters.
      rootMargin: "0px 0px -8% 0px",
    },
  );

  els.forEach((el) => observer.observe(el));
};

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}
