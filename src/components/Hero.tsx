"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Button from "@/components/ui/Button";

export default function Hero() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const avatarY = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);

  return (
    <section ref={sectionRef} className="relative min-h-[100svh] flex items-center px-6 overflow-hidden pt-28 pb-20">
      {/* Hero-specific radial glow */}
      <div
        className="absolute top-[-20%] right-[-10%] w-[900px] h-[900px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(224,90,138,0.08), transparent 60%)",
          filter: "blur(80px)",
        }}
        aria-hidden="true"
      />

      <motion.div
        style={{ opacity: contentOpacity }}
        className="relative z-10 max-w-7xl mx-auto w-full grid lg:grid-cols-[1.1fr_0.9fr] gap-16 lg:gap-20 items-center"
      >
        {/* Left: Copy */}
        <div className="flex flex-col max-w-2xl mx-auto lg:mx-0">
          <motion.p
            initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-[var(--text-secondary)] font-light text-lg sm:text-xl mb-4"
          >
            Source brings you
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 40, filter: "blur(12px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="text-[clamp(2.5rem,6.5vw,5rem)] font-extralight leading-[1.05] tracking-[-0.04em] mb-4"
          >
            Access to{" "}
            <span className="gradient-text font-light">heroes</span> and{" "}
            <span className="gradient-text font-light">masters</span>
            <br />
            of past and present
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="text-[var(--text-muted)] font-light text-base mb-8"
          >
            In an experience that feels intimate
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="text-[var(--text-secondary)] font-light text-base sm:text-lg leading-[1.7] mb-12 max-w-lg"
          >
            Interactive AI avatars that are true personality twins of your role-model.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col sm:flex-row items-start gap-4"
          >
            <Button href="#waitlist">Join the Waitlist</Button>
            <Button href="#how-it-works" variant="secondary">
              Learn More
            </Button>
          </motion.div>
        </div>

        {/* Right: Gururaj avatar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 1, ease: [0.22, 1, 0.36, 1] }}
          style={{ y: avatarY }}
          className="lg:justify-self-center flex items-center justify-center"
        >
          <div className="relative isolate">
            {/* Breathing glow — stays behind due to z-index */}
            <div className="absolute -inset-8 -z-10 rounded-3xl bg-[var(--accent)] blur-[60px] opacity-[0.15] animate-[breathe_4s_ease-in-out_infinite]" />

            {/* Avatar card with pink border */}
            <div
              className="relative z-10 w-64 sm:w-80 lg:w-[360px] rounded-2xl"
              style={{
                padding: "2px",
                background: "linear-gradient(135deg, var(--accent), var(--accent-light), var(--accent-deep))",
              }}
            >
              <div className="rounded-[14px] overflow-hidden">
                <img
                  src="/avatars/gururaj.png"
                  alt="Gururaj Ananda Yogi"
                  className="w-full aspect-[3/4] object-cover object-top block"
                />
                <div className="px-5 py-4 text-center bg-[#0a0a0a]">
                  <p className="text-sm font-medium text-[var(--text-primary)] tracking-tight">Gururaj Ananda Yogi</p>
                  <p className="text-[10px] font-mono text-[var(--accent)] uppercase tracking-[0.15em] mt-1">Spiritual Master</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[9px] font-mono text-[var(--text-muted)] tracking-[0.2em] uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, ease: "easeInOut", repeat: Infinity }}
          className="w-px h-6 bg-gradient-to-b from-[var(--accent)] to-transparent opacity-40"
        />
      </motion.div>
    </section>
  );
}
