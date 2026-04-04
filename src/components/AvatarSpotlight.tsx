"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import { gururaj } from "@/lib/constants";
import { viewportOnce } from "@/lib/animations";

const particles = [
  { top: "8%", left: "12%", delay: 0, size: 3, duration: 5 },
  { top: "20%", right: "8%", delay: 1.2, size: 2, duration: 6 },
  { bottom: "18%", left: "6%", delay: 0.6, size: 2.5, duration: 5.5 },
  { top: "55%", right: "15%", delay: 2, size: 3, duration: 4.5 },
  { bottom: "30%", left: "20%", delay: 1.5, size: 2, duration: 6.5 },
  { top: "35%", left: "5%", delay: 0.3, size: 1.5, duration: 7 },
  { top: "75%", right: "22%", delay: 2.5, size: 2, duration: 5 },
  { bottom: "10%", right: "5%", delay: 1.8, size: 1.5, duration: 6 },
];

export default function Demo() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const avatarY = useTransform(scrollYProgress, [0, 1], [-15, 15]);
  const avatarScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 0.98]);
  const ringRotation = useTransform(scrollYProgress, [0, 1], [0, 90]);

  return (
    <section id="demo" ref={sectionRef} className="relative z-10 py-28 sm:py-36 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-20 sm:mb-24"
        >
          <span className="label mb-5 block tracking-[0.3em] text-[var(--accent)]">Demo</span>
          <h2 className="text-3xl sm:text-4xl md:text-[3.5rem] font-extralight tracking-[-0.03em] leading-tight">
            Bringing a spiritual master{" "}
            <span className="gradient-text font-light">back to life</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="glass-card !rounded-3xl overflow-hidden"
          style={{
            boxShadow: "0 0 0 1px rgba(255,255,255,0.06), 0 40px 100px rgba(0,0,0,0.4), 0 0 80px rgba(224,90,138,0.04)",
          }}
        >
          <div className="flex flex-col md:flex-row min-h-[500px]">
            {/* Left: Avatar */}
            <div className="relative md:w-[42%] flex items-center justify-center p-12 sm:p-16">
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: "radial-gradient(circle at center, rgba(224,90,138,0.04), transparent 70%)",
                }}
                aria-hidden="true"
              />

              <div className="relative">
                <div className="absolute -inset-10 rounded-full bg-[var(--accent)] blur-[60px] opacity-[0.08]" />
                <div className="absolute -inset-4 rounded-full bg-[var(--accent-deep)] blur-[30px] opacity-[0.06]" />

                {/* Scroll-driven gradient ring */}
                <motion.div
                  style={{ rotate: ringRotation }}
                  className="absolute -inset-[5px] rounded-full opacity-25"
                  aria-hidden="true"
                >
                  <div
                    className="w-full h-full rounded-full"
                    style={{
                      background: "conic-gradient(from 0deg, var(--accent), transparent 30%, var(--accent-deep), transparent 70%, var(--accent))",
                    }}
                  />
                </motion.div>

                {/* Inner ring */}
                <div
                  className="absolute -inset-[2px] rounded-full opacity-15"
                  style={{
                    background: "conic-gradient(from 180deg, var(--accent-light), transparent 50%, var(--accent), transparent 100%)",
                    animation: "spin-slow 12s linear infinite reverse",
                  }}
                  aria-hidden="true"
                />

                {/* Avatar image */}
                <motion.div
                  style={{ y: avatarY, scale: avatarScale }}
                  className="relative w-60 h-60 sm:w-72 sm:h-72 rounded-full overflow-hidden border border-[rgba(255,255,255,0.1)]"
                >
                  <Image
                    src={gururaj.image}
                    alt={gururaj.name}
                    fill
                    className="object-cover object-top"
                    sizes="288px"
                    priority
                  />
                  <div className="absolute inset-0 rounded-full shadow-[inset_0_0_40px_rgba(0,0,0,0.3)]" />
                </motion.div>

                {/* Floating particles */}
                {particles.map((p, i) => (
                  <motion.div
                    key={i}
                    animate={{
                      y: [0, -10, 5, -8, 0],
                      x: [0, 5, -3, 7, 0],
                      opacity: [0.2, 0.5, 0.3, 0.4, 0.2],
                    }}
                    transition={{
                      duration: p.duration,
                      delay: p.delay,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="absolute rounded-full bg-[var(--accent)] pointer-events-none"
                    style={{
                      width: p.size,
                      height: p.size,
                      top: p.top,
                      left: p.left,
                      right: p.right,
                      bottom: p.bottom,
                    } as React.CSSProperties}
                  />
                ))}

                <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 z-10">
                  <Badge pulse>Live</Badge>
                </div>
              </div>
            </div>

            {/* Right: Info */}
            <div className="md:w-[58%] flex flex-col justify-center p-10 sm:p-14 md:px-12 border-t md:border-t-0 md:border-l border-[rgba(255,255,255,0.06)]">
              <span className="label text-[var(--accent)] mb-2 block tracking-[0.25em]">
                {gururaj.domain}
              </span>
              <h3 className="text-3xl sm:text-4xl font-extralight tracking-[-0.03em] mb-6">
                {gururaj.name}
              </h3>

              <p className="text-[var(--text-secondary)] font-light text-base leading-[1.8] mb-6">
                {gururaj.bio}
              </p>

              <p className="text-[var(--text-muted)] font-light text-sm leading-[1.8] mb-10 italic">
                {gururaj.legacy}
              </p>

              <div className="flex flex-col sm:flex-row items-start gap-5">
                <Button href="#waitlist">Experience Gururaj</Button>
                <span className="text-xs font-mono text-[var(--text-muted)] leading-relaxed self-center">
                  More avatars coming soon
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
