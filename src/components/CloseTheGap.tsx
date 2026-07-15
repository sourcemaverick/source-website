"use client";

import { useRef, useState, useEffect } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
  type MotionValue,
} from "framer-motion";
import Image from "next/image";

/* Centre images that keep changing on a loop as you scroll, at equal intervals.
   Loop order → wormhole first (before the guru-tree), then guru-silhouette. */
const gapImages = ["/gap/wormhole.png", "/gap/tree.png", "/gap/silhouette.png"];
const CYCLES = 2; // times the set repeats across the scroll (higher = faster changes)

/* One crossfading image frame. Each frame owns its opacity so the list length
   can change freely (no hooks-in-a-loop). */
function CycleFrame({
  src,
  index,
  count,
  progress,
}: {
  src: string;
  index: number;
  count: number;
  progress: MotionValue<number>;
}) {
  const steps = count * CYCLES;
  const slots = Array.from({ length: steps }, (_, k) => (k + 0.5) / steps);
  const input = [0, ...slots, 1];
  const output = [
    0 % count === index ? 1 : 0,
    ...slots.map((_, k) => (k % count === index ? 1 : 0)),
    (steps - 1) % count === index ? 1 : 0,
  ];
  const opacity = useTransform(progress, input, output);
  return (
    <motion.div style={{ opacity }} className="absolute inset-0">
      <Image src={src} alt="" fill sizes="340px" className="object-cover" />
    </motion.div>
  );
}

function CyclingImage({ scale, progress }: { scale: MotionValue<number>; progress: MotionValue<number> }) {
  return (
    <motion.div style={{ scale }} className="relative shrink-0">
      <div className="absolute -inset-8 rounded-[2rem] bg-[var(--pink)] opacity-[0.14] blur-3xl" />
      <div className="relative h-[360px] w-[268px] overflow-hidden rounded-2xl border border-white/12 shadow-[0_40px_90px_rgba(0,0,0,0.6)] sm:h-[452px] sm:w-[338px]">
        {gapImages.map((src, i) => (
          <CycleFrame key={src} src={src} index={i} count={gapImages.length} progress={progress} />
        ))}
      </div>
    </motion.div>
  );
}

/* Static composition — SSR, mobile, and reduced-motion fallback. */
function StaticGap() {
  return (
    <section className="relative z-10 overflow-hidden px-6 py-24 sm:py-32">
      <div
        className="absolute left-1/2 top-1/2 -z-10 h-[440px] w-[440px] -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(230,83,138,0.10), transparent 65%)", filter: "blur(70px)" }}
        aria-hidden="true"
      />
      <div className="mx-auto flex max-w-5xl flex-col items-center">
        <div className="flex w-full items-center justify-center gap-5">
          <div className="text-right">
            <p className="font-sans font-bold leading-none tracking-[-0.02em] text-white text-[clamp(1.8rem,6vw,3.4rem)]">We close</p>
            <p className="mt-2 font-serif text-base italic text-[var(--text-secondary)] sm:text-lg">timeless wisdom</p>
          </div>
          <div className="relative h-[300px] w-[224px] shrink-0 overflow-hidden rounded-2xl border border-white/12 sm:h-[360px] sm:w-[268px]">
            <Image src={gapImages[gapImages.length - 1]} alt="Closing the gap" fill sizes="268px" className="object-cover" />
          </div>
          <div className="text-left">
            <p className="font-sans font-bold leading-none tracking-[-0.02em] text-white text-[clamp(1.8rem,6vw,3.4rem)]">the gap</p>
            <p className="mt-2 font-serif text-base italic text-[var(--text-secondary)] sm:text-lg">modern life</p>
          </div>
        </div>
        <div className="mt-12 text-center">
          <h3 className="gold-text font-serif text-[clamp(1.5rem,3.4vw,2.4rem)] font-semibold italic">Helping People Become Less Mechanical</h3>
          <p className="mx-auto mt-5 max-w-xl text-[15px] font-light leading-[1.9] text-[var(--text-secondary)] sm:text-base">
            The mind was never meant to run your life. It was meant to serve it. A quieter mind makes space for a more conscious life.
          </p>
        </div>
      </div>
    </section>
  );
}

export default function CloseTheGap() {
  const reduce = useReducedMotion();
  const [enhanced, setEnhanced] = useState(false);

  useEffect(() => {
    // Enhance everywhere except a confirmed small viewport. (Some embedded
    // browsers report width 0 — treat unknown as desktop so it still animates.)
    const update = () => {
      const w = window.innerWidth;
      setEnhanced(!(w > 0 && w < 768));
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  if (reduce || !enhanced) return <StaticGap />;
  return <AnimatedGap />;
}

function AnimatedGap() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  // Words start spread wide, then converge toward the centred image — quicker,
  // so they're already close by the time the second image appears.
  const leftX = useTransform(scrollYProgress, [0, 0.62], [-460, 0]);
  const rightX = useTransform(scrollYProgress, [0, 0.62], [460, 0]);
  const imgScale = useTransform(scrollYProgress, [0, 0.62], [0.74, 1]);

  return (
    <section ref={ref} className="relative z-10 h-[300vh]">
      <div className="sticky top-0 h-screen overflow-hidden">
        <div
          className="absolute left-1/2 top-1/2 -z-10 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(230,83,138,0.12), transparent 65%)", filter: "blur(70px)" }}
          aria-hidden="true"
        />

        {/* Centred converging headline + image (lifted slightly to clear the tagline) */}
        <div className="absolute inset-0 flex items-center justify-center px-6 pb-24 sm:pb-28">
          <div className="flex items-center justify-center gap-5 sm:gap-6">
            <motion.div style={{ x: leftX }} className="whitespace-nowrap text-right">
              <p className="font-sans font-bold leading-none tracking-[-0.02em] text-white text-[clamp(2.4rem,6.4vw,4.6rem)]">
                We close
              </p>
              <p className="mt-2 font-serif text-lg italic text-[var(--text-secondary)] sm:text-xl">
                timeless wisdom
              </p>
            </motion.div>

            <CyclingImage scale={imgScale} progress={scrollYProgress} />

            <motion.div style={{ x: rightX }} className="whitespace-nowrap text-left">
              <p className="font-sans font-bold leading-none tracking-[-0.02em] text-white text-[clamp(2.4rem,6.4vw,4.6rem)]">
                the gap
              </p>
              <p className="mt-2 font-serif text-lg italic text-[var(--text-secondary)] sm:text-xl">
                modern life
              </p>
            </motion.div>
          </div>
        </div>

        {/* Tagline stays visible below the centred composition */}
        <div className="absolute inset-x-0 bottom-[7%] px-6 text-center">
          <h3 className="gold-text font-serif text-[clamp(1.4rem,3.2vw,2.2rem)] font-semibold italic">
            Helping People Become Less Mechanical
          </h3>
          <p className="mx-auto mt-4 max-w-lg text-[14px] font-light leading-[1.85] text-[var(--text-secondary)] sm:text-[15px]">
            The mind was never meant to run your life. It was meant to serve it. A quieter
            mind makes space for a more conscious life.
          </p>
        </div>
      </div>
    </section>
  );
}
