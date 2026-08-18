import { motion } from "framer-motion";
import { BlurTextReveal } from "@/components/BlurTextReveal";

const ease = [0.22, 1, 0.36, 1];

export const Hero = () => (
  <section data-testid="hero-section" className="relative h-screen w-full overflow-hidden bg-[#050505]">
    <video
      data-testid="hero-video"
      className="absolute inset-0 h-full w-full object-cover"
      poster="/source-poster.jpg"
      autoPlay
      muted
      loop
      playsInline
    >
      <source src="/source-bg.mp4" type="video/mp4" />
      <source src="/source-bg.webm" type="video/webm" />
    </video>
    <div className="vignette absolute inset-0" />

    <motion.div
      className="pointer-events-none absolute inset-0 z-50 bg-[#050505]"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 1.6, ease: "easeOut" }}
    />

    <div className="relative z-20 flex h-full flex-col items-center justify-center px-6 text-center">
      <motion.p
        initial={{ opacity: 0, letterSpacing: "0.2em" }}
        animate={{ opacity: 1, letterSpacing: "0.5em" }}
        transition={{ delay: 0.9, duration: 1.6, ease }}
        className="font-ui text-[10px] uppercase text-white/50 md:text-xs"
      >
        A Study of the Inner Mind
      </motion.p>

      <h1 className="hero-shadow mt-8 font-mystic font-light leading-none text-white">
        <BlurTextReveal
          text="The Source"
          delay={1.3}
          stagger={0.07}
          className="block text-6xl sm:text-7xl md:text-8xl lg:text-9xl"
        />
        <BlurTextReveal
          text="Find Yourself"
          delay={2.2}
          stagger={0.05}
          className="mt-3 block font-mystic italic text-2xl text-white/70 sm:text-3xl md:mt-5 md:text-4xl"
        />
      </h1>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 3, duration: 1.2, ease }}
        className="mt-14"
      >
        <button
          data-testid="begin-journey-btn"
          className="cta-glass glass rounded-full px-10 py-4 font-ui text-[10px] uppercase tracking-[0.35em] text-white/90 md:text-xs"
        >
          Begin the Journey
        </button>
      </motion.div>
    </div>
  </section>
);
