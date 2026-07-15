"use client";

import { motion, useTransform, type MotionValue } from "framer-motion";

/* One soft cloud — a realistic sprite (procedural texture in /public/clouds/)
   like the reference site's layered cloud-box images.
   • OUTER element carries the scroll parallax (framer `y`).
   • INNER element carries the slow horizontal CSS drift (`cloud-drift`).
   Keeping the two motions on separate elements means they never fight. */

export type CloudConfig = {
  sprite: 1 | 2 | 3;   // which texture in /clouds/
  x: number;           // left position (%)
  y: number;           // top position (%)
  w: number;           // width (px at desktop; scales down via vw clamp)
  opacity: number;     // overall visibility (0.12–0.45)
  depth: number;       // scroll-parallax strength (bigger = moves more)
  dur: number;         // drift duration (s)
  delay: number;       // drift offset (s) — negative pre-seeds the loop
  flip?: boolean;      // mirror horizontally for variety
  warm?: boolean;      // tint slightly toward the theme's rose/amber warmth
  mobile?: boolean;    // false → hidden on small screens (perf)
};

export default function Cloud({
  cfg,
  scrollY,
}: {
  cfg: CloudConfig;
  scrollY: MotionValue<number>;
}) {
  // Scroll parallax: rise gently as the page scrolls, scaled by depth.
  const y = useTransform(scrollY, (v) => -v * cfg.depth);

  return (
    <motion.div
      aria-hidden="true"
      style={{ left: `${cfg.x}%`, top: `${cfg.y}%`, opacity: cfg.opacity, y }}
      className={`absolute will-change-transform ${cfg.mobile === false ? "hidden sm:block" : ""}`}
    >
      <div
        style={{
          animation: `cloud-drift ${cfg.dur}s ease-in-out ${cfg.delay}s infinite alternate`,
        }}
      >
        {/* plain <img>: decorative sprite, no next/image optimization needed */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={`/clouds/c${cfg.sprite}.png`}
          alt=""
          draggable={false}
          style={{
            width: `min(${cfg.w}px, ${Math.round(cfg.w / 8)}vw)`,
            height: "auto",
            transform: cfg.flip ? "scaleX(-1)" : undefined,
            filter: cfg.warm ? "sepia(0.35) hue-rotate(-18deg) saturate(1.4)" : undefined,
          }}
        />
      </div>
    </motion.div>
  );
}
