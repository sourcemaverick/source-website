"use client";

import { useScroll } from "framer-motion";
import Cloud, { type CloudConfig } from "./Cloud";

/* Parallax cloud field for the hero — modelled on the reference's ten layered
   cloud-boxes. Back layer: large, faint, slow (behind the silhouette).
   Front layer: brighter, near the base, faster parallax — so the figure
   emerges from drifting mist. Everything staggered so nothing moves in sync. */

const BACK: CloudConfig[] = [
  { sprite: 1, x: -14, y: 4,  w: 760, opacity: 0.16, depth: 0.05, dur: 150, delay: 0,   flip: false },
  { sprite: 2, x: 52,  y: -2, w: 900, opacity: 0.13, depth: 0.08, dur: 170, delay: -40, flip: true  },
  { sprite: 3, x: 16,  y: 22, w: 620, opacity: 0.18, depth: 0.11, dur: 125, delay: -70, warm: true  },
  { sprite: 2, x: 66,  y: 30, w: 700, opacity: 0.15, depth: 0.09, dur: 145, delay: -20, mobile: false },
  { sprite: 1, x: 34,  y: 12, w: 540, opacity: 0.12, depth: 0.07, dur: 160, delay: -95, flip: true, mobile: false },
];

const FRONT: CloudConfig[] = [
  { sprite: 3, x: -18, y: 56, w: 900,  opacity: 0.34, depth: 0.30, dur: 105, delay: -25 },
  { sprite: 1, x: 44,  y: 66, w: 1040, opacity: 0.30, depth: 0.44, dur: 88,  delay: -55, flip: true },
  { sprite: 2, x: 12,  y: 74, w: 780,  opacity: 0.38, depth: 0.36, dur: 76,  delay: -10, warm: true },
  { sprite: 1, x: 62,  y: 78, w: 720,  opacity: 0.32, depth: 0.40, dur: 96,  delay: -70, mobile: false },
  { sprite: 3, x: 28,  y: 84, w: 640,  opacity: 0.36, depth: 0.34, dur: 68,  delay: -35, flip: true, mobile: false },
];

export default function CloudField() {
  // Viewport scroll (px) — shared by every cloud for its parallax.
  const { scrollY } = useScroll();

  return (
    <>
      {/* behind the figure */}
      <div
        className="pointer-events-none absolute inset-0 z-[1] overflow-hidden"
        style={{ animation: "cloud-fade 2.8s ease 0.2s both" }}
        aria-hidden="true"
      >
        {BACK.map((c, i) => (
          <Cloud key={`b${i}`} cfg={c} scrollY={scrollY} />
        ))}
      </div>

      {/* in front of the figure (mist around the base), still behind the copy */}
      <div
        className="pointer-events-none absolute inset-0 z-[3] overflow-hidden"
        style={{ animation: "cloud-fade 2.8s ease 0.5s both" }}
        aria-hidden="true"
      >
        {FRONT.map((c, i) => (
          <Cloud key={`f${i}`} cfg={c} scrollY={scrollY} />
        ))}
      </div>
    </>
  );
}
