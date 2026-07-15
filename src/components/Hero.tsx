"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import CloudField from "@/components/ui/CloudField";

/* Hero — fortvega-style scroll sequence in the Source dark cosmic theme.
   The section pins for ~1.3 extra viewports; as you scroll, the master rises
   up through the parting mist (their compass → our master) while the clouds
   parallax past at different depths — "lifting the fog". */

export default function Hero() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  /* The master starts low, half-veiled in fog, and rises toward the viewer
     as you scroll — faster than the clouds, so he emerges through them. */
  const masterY = useTransform(scrollYProgress, [0, 1], ["30%", "-10%"]);
  const masterScale = useTransform(scrollYProgress, [0, 1], [0.86, 1.1]);
  /* Headline drifts up gently for depth, holding legible the whole way. */
  const headY = useTransform(scrollYProgress, [0, 1], [0, -54]);

  return (
    <section ref={sectionRef} className="relative h-[230vh]">
      {/* Pinned stage */}
      <div className="sticky top-0 h-screen overflow-hidden px-6 pt-28 pb-16">
        {/* Warm cosmic backdrop (unchanged theme) */}
        <div
          className="absolute inset-0 -z-10"
          style={{
            background:
              "radial-gradient(120% 90% at 50% 30%, rgba(74,40,52,0.85) 0%, rgba(38,22,34,0.9) 40%, rgba(14,9,16,0.96) 68%, var(--bg-deep) 100%)",
          }}
          aria-hidden="true"
        />
        {/* Faint moon-glow high in the sky */}
        <div
          className="absolute top-[-12%] left-1/2 h-[560px] w-[860px] -translate-x-1/2 rounded-full pointer-events-none -z-10"
          style={{
            background: "radial-gradient(ellipse, rgba(240,200,150,0.14), transparent 62%)",
            filter: "blur(46px)",
            animation: "breathe-slow 8s ease-in-out infinite",
          }}
          aria-hidden="true"
        />

        {/* Layered drifting clouds (back z-1 / front z-3) — their per-depth
            parallax runs off the page scroll, so the fog visibly lifts and
            parts while the section is pinned. */}
        <CloudField />

        {/* Master silhouette — rises through the mist with scroll */}
        <motion.div
          style={{ y: masterY, scale: masterScale }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 0.4, ease: [0.22, 0.61, 0.36, 1] }}
          className="pointer-events-none absolute bottom-[-12%] left-1/2 z-[2] w-[min(72vw,430px)] -translate-x-1/2 will-change-transform"
          aria-hidden="true"
        >
          {/* breathing golden aura behind the master */}
          <div
            className="absolute left-1/2 top-[38%] w-[135%] aspect-square -translate-x-1/2 -translate-y-1/2 rounded-full"
            style={{
              background:
                "radial-gradient(circle, rgba(240,180,110,0.34), rgba(230,83,138,0.12) 46%, transparent 70%)",
              animation: "breathe-slow 9s ease-in-out infinite",
            }}
          />
          <Image
            src="/master-silhouette.png"
            alt=""
            width={1141}
            height={1379}
            priority
            className="relative h-auto w-full"
            style={{
              /* melt the base into the front mist */
              maskImage: "linear-gradient(180deg, #000 78%, transparent 98%)",
              WebkitMaskImage: "linear-gradient(180deg, #000 78%, transparent 98%)",
            }}
          />
        </motion.div>

        {/* Headline + CTA — above everything */}
        <motion.div
          style={{ y: headY }}
          className="relative z-10 mx-auto flex max-w-4xl flex-col items-center pt-[6vh] text-center"
        >
          <motion.h1
            initial={{ opacity: 0, y: 26, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1.4, delay: 0.2, ease: [0.22, 0.61, 0.36, 1] }}
            className="font-serif font-medium leading-[1.08] tracking-[-0.01em] text-[var(--text-primary)] text-[clamp(2.3rem,5.6vw,4.2rem)]"
            style={{ textShadow: "0 2px 30px rgba(10,7,13,0.65)" }}
          >
            Ready to clear the mental clog?
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 22, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1.4, delay: 0.55, ease: [0.22, 0.61, 0.36, 1] }}
            className="mt-3 ml-[clamp(2rem,10vw,7rem)] font-serif italic font-light text-[var(--text-secondary)] text-[clamp(1.4rem,3.6vw,2.6rem)]"
            style={{ textShadow: "0 2px 24px rgba(10,7,13,0.6)" }}
          >
            Let&rsquo;s lift up the fog&hellip;
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.95, ease: [0.22, 0.61, 0.36, 1] }}
            className="mt-10"
          >
            <a href="#waitlist" className="btn-gold btn-shine rounded-full px-8 py-3.5 text-sm">
              Join the Waitlist
            </a>
          </motion.div>
        </motion.div>

        {/* Mist dissolves into the next section */}
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 z-[4] h-28"
          style={{ background: "linear-gradient(180deg, transparent, var(--bg-base))" }}
          aria-hidden="true"
        />

        {/* Scroll cue */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.7, duration: 0.9 }}
          className="absolute bottom-7 left-1/2 z-10 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <motion.div
            animate={{ y: [0, 7, 0] }}
            transition={{ duration: 1.6, ease: "easeInOut", repeat: Infinity }}
            className="h-7 w-px bg-gradient-to-b from-[var(--gold)] to-transparent opacity-50"
          />
        </motion.div>
      </div>
    </section>
  );
}
