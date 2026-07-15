"use client";

import { motion } from "framer-motion";
import { viewportOnce } from "@/lib/animations";

/* Breathing mandala — stands in for the "Interactive Animation" panel */
function Mandala() {
  return (
    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl warm-panel">
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 50% 52%, rgba(240,145,63,0.18), transparent 55%)",
        }}
      />
      {/* Rotating concentric rings */}
      {[0, 1, 2, 3].map((i) => (
        <div
          key={i}
          className="absolute left-1/2 top-1/2 rounded-full border"
          style={{
            width: `${120 + i * 78}px`,
            height: `${120 + i * 78}px`,
            marginLeft: `-${(120 + i * 78) / 2}px`,
            marginTop: `-${(120 + i * 78) / 2}px`,
            borderColor:
              i % 2 === 0 ? "rgba(240,145,63,0.22)" : "rgba(230,83,138,0.18)",
            animation: `spin-slow ${26 + i * 8}s linear infinite ${
              i % 2 === 0 ? "" : "reverse"
            }`,
            borderStyle: i === 2 ? "dashed" : "solid",
          }}
        />
      ))}
      {/* Glowing core */}
      <div
        className="absolute left-1/2 top-1/2 h-16 w-16 -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          background:
            "radial-gradient(circle, #ffd9a0 0%, var(--ember) 40%, rgba(240,145,63,0) 72%)",
          animation: "breathe-slow 5s ease-in-out infinite",
        }}
      />
      {/* Twinkles */}
      {[
        { top: "22%", left: "30%", d: "0s" },
        { top: "68%", left: "24%", d: "1.1s" },
        { top: "34%", left: "74%", d: "0.6s" },
        { top: "74%", left: "70%", d: "1.7s" },
        { top: "18%", left: "58%", d: "2.2s" },
      ].map((t, i) => (
        <span
          key={i}
          className="absolute h-1 w-1 rounded-full bg-[var(--gold-light)]"
          style={{ top: t.top, left: t.left, animation: `twinkle 3.4s ease-in-out ${t.d} infinite` }}
        />
      ))}
      <span className="absolute bottom-4 left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-[0.3em] text-[var(--text-muted)]">
        Inner genius
      </span>
    </div>
  );
}

export default function GreatestObstacle() {
  return (
    <section className="relative z-10 px-6 py-24 sm:py-28">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -28 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <Mandala />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 28 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="text-[clamp(1.6rem,3.4vw,2.4rem)] leading-[1.25] tracking-[-0.01em]">
            <span className="font-sans font-semibold text-white">
              What if your greatest obstacle isn&rsquo;t life…
            </span>{" "}
            <span className="font-serif italic text-[var(--text-secondary)]">
              but the story you&rsquo;ve been telling yourself about it?
            </span>
          </h2>
          <p className="mt-7 text-[var(--text-secondary)] font-light text-[15px] sm:text-base leading-[1.9] max-w-lg">
            Every human carries an inner genius waiting to be expressed. When the mind
            becomes still and the heart learns to surrender, that hidden potential begins
            to flow naturally into every part of life.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
