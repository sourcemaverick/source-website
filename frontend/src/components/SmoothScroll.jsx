import { useEffect, useRef } from "react";
import Lenis from "lenis";

/**
 * Global smooth-scroll wrapper. Mounts once, drives Lenis on RAF,
 * exposes `window.__lenis` so any nav handler can call
 * `window.__lenis?.scrollTo(target)` for perfectly matched motion.
 * Native scrollIntoView calls still work — Lenis intercepts and animates them.
 */
export const SmoothScroll = () => {
  const rafRef = useRef(0);

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) return;

    const lenis = new Lenis({
      duration: 1.35,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.4,
      lerp: 0.09,
    });

    window.__lenis = lenis;

    const raf = (time) => {
      lenis.raf(time);
      rafRef.current = requestAnimationFrame(raf);
    };
    rafRef.current = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafRef.current);
      lenis.destroy();
      delete window.__lenis;
    };
  }, []);

  return null;
};

/**
 * Central helper — every "jump to section" call in the app goes through this.
 * Falls back to native scrollIntoView when Lenis isn't running (reduced motion).
 */
export const smoothScrollTo = (selectorOrElement) => {
  const el =
    typeof selectorOrElement === "string"
      ? document.querySelector(selectorOrElement)
      : selectorOrElement;
  if (!el) return;
  if (window.__lenis) {
    window.__lenis.scrollTo(el, { offset: 0, duration: 1.4 });
  } else {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};

export const smoothScrollToTop = () => {
  if (window.__lenis) {
    window.__lenis.scrollTo(0, { duration: 1.4 });
  } else {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
};
