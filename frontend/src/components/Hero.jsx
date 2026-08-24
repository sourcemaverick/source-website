import { motion } from "framer-motion";
import { BlurTextReveal } from "@/components/BlurTextReveal";
import { FooterStrip } from "@/components/FooterStrip";
import { smoothScrollTo } from "@/components/SmoothScroll";

const ease = [0.22, 1, 0.36, 1];

const scrollDown = () => smoothScrollTo('[data-testid="problem-section"]');

export const Hero = () => (
  <section
    data-testid="hero-section"
    className="relative h-screen w-full overflow-hidden bg-[#050505]"
  >
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
    {/* Extra darkening focused behind the hero text — improves legibility over bright video moments */}
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0"
      style={{
        background:
          "radial-gradient(ellipse 55% 45% at 50% 50%, rgba(5,5,5,0.55) 0%, rgba(5,5,5,0.25) 55%, transparent 80%)",
      }}
    />

    <motion.div
      className="pointer-events-none absolute inset-0 z-50 bg-[#050505]"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 1.6, ease: "easeOut" }}
    />

    <div className="relative z-20 flex h-full flex-col items-center justify-center px-6 text-center">
      <motion.span
        data-testid="hero-eyebrow"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.05, duration: 1.1, ease }}
        className="hero-eyebrow-shadow mb-8 font-ui text-xs font-medium uppercase tracking-[0.5em] text-[color:var(--gold)] md:text-sm"
      >
        The Source
      </motion.span>

      <h1 className="hero-shadow font-mystic font-light leading-[1] text-white">
        <BlurTextReveal
          text="Know Your Truth"
          delay={1.3}
          stagger={0.06}
          className="block text-5xl tracking-tight sm:text-6xl md:text-7xl lg:text-8xl"
        />
      </h1>

      <motion.p
        data-testid="hero-sub"
        initial={{ opacity: 0, y: 14, filter: "blur(10px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ delay: 2.6, duration: 1.3, ease }}
        className="hero-sub-shadow mt-10 max-w-[46ch] font-ui text-sm font-normal leading-relaxed text-white/90 sm:text-base md:mt-12 md:text-lg"
      >
        Discover who you are beneath the noise of society. Connect with your authentic self. Get back your inner drive.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 3.2, duration: 1.2, ease }}
        className="mt-12 md:mt-14"
      >
        <button
          data-testid="hero-cta"
          onClick={scrollDown}
          className="cta-glass glass rounded-full px-10 py-4 font-ui text-[10px] uppercase tracking-[0.35em] text-white/90 md:text-xs"
        >
          Tell me more
        </button>
      </motion.div>
    </div>

    <FooterStrip />
  </section>
);
