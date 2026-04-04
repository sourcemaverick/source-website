"use client";

import { motion } from "framer-motion";
import { howItWorksPoints } from "@/lib/constants";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/animations";

const icons = [
  // Knowledge
  <svg key="knowledge" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
  </svg>,
  // Presence & Voice
  <svg key="presence" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" />
    <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
    <line x1="12" y1="19" x2="12" y2="23" />
    <line x1="8" y1="23" x2="16" y2="23" />
  </svg>,
  // Perspective & Emotion
  <svg key="perspective" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
  </svg>,
  // Intimacy
  <svg key="intimacy" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 12C2 6.5 6.5 2 12 2a10 10 0 0 1 8 4" />
    <path d="M5 19.5C5.5 18 6 15 6 12c0-3.5 2.5-6 6-6 1.7 0 3.2.7 4.3 1.8" />
    <path d="M10 12c0-1.1.9-2 2-2s2 .9 2 2c0 4-1 8-3 10" />
    <path d="M22 12c0 4-1 8-3 10" />
    <path d="M14 12c0 4-1 8-3 10" />
  </svg>,
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="relative z-10 py-28 sm:py-36 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-20 sm:mb-24"
        >
          <span className="label mb-5 block tracking-[0.3em] text-[var(--accent)]">How It Works</span>
          <h2 className="text-3xl sm:text-4xl md:text-[3.5rem] font-extralight tracking-[-0.03em] leading-tight mb-6">
            How does it <span className="gradient-text font-light">work</span>?
          </h2>
          <p className="text-[var(--text-secondary)] font-light text-base sm:text-lg max-w-2xl mx-auto leading-[1.7]">
            We partner with organisations behind famous personalities and through their AI avatar, we bring their essence to you.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid sm:grid-cols-2 gap-5 md:gap-6"
        >
          {howItWorksPoints.map((point, i) => (
            <motion.div
              key={point.title}
              variants={fadeUp}
              className="group"
            >
              <div className="glass-card p-8 sm:p-10 h-full flex flex-col relative overflow-hidden">
                {/* Watermark number */}
                <span
                  className="absolute -top-2 -right-2 text-[8rem] font-extralight leading-none text-white pointer-events-none select-none opacity-[0.02] group-hover:opacity-[0.05] transition-opacity duration-700"
                  aria-hidden="true"
                >
                  {String(i + 1).padStart(2, "0")}
                </span>

                <div className="relative flex items-start gap-5 mb-5">
                  <div className="shrink-0 w-14 h-14 rounded-2xl border border-[var(--border)] bg-[rgba(10,10,10,0.6)] flex items-center justify-center text-[var(--accent)] group-hover:border-[var(--border-hover)] group-hover:shadow-[0_0_24px_var(--accent-glow)] transition-all duration-500">
                    {icons[i]}
                  </div>
                  <div>
                    <h3 className="text-xl font-light tracking-[-0.01em] group-hover:text-white transition-colors duration-300">
                      {point.title}
                    </h3>
                  </div>
                </div>

                <p className="relative text-sm text-[var(--text-secondary)] font-light leading-[1.8] flex-1">
                  {point.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
