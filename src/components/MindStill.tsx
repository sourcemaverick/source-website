"use client";

import { motion, useScroll, useTransform, useReducedMotion, type MotionValue } from "framer-motion";
import { useRef } from "react";

/* ── The three layers that lift away on scroll ──
   Drop a looping video into public/ and set `videoSrc` (e.g. "/loops/still.mp4")
   to replace the placeholder in each card's media slot. */
type Layer = {
  key: string;
  heading: string;
  body: string;
  italic: string;
  cta: string;
  panel: string;
  text: string;
  media: string;
  mediaLabel: string;
  button: string;
  buttonText: string;
  buttonBorder: string;
  videoSrc?: string;
};

const layers: Layer[] = [
  {
    key: "still",
    heading: "When was the last time your mind was completely still?",
    body: "The mind is a wonderful servant but a poor master. When it is always running, it leaves no room for your own inner wisdom to speak.",
    italic: "Every journey inward begins with someone who has already walked the path.",
    cta: "Start your first conversation",
    panel: "linear-gradient(155deg,#171121,#1e1629)",
    text: "#f4f0ea",
    media: "linear-gradient(160deg,#3c3049,#4a3c58)",
    mediaLabel: "Stillness",
    button: "rgba(255,255,255,0.10)",
    buttonText: "#ffffff",
    buttonBorder: "rgba(255,255,255,0.18)",
  },
  {
    key: "fear",
    heading: "If every fear disappeared tomorrow… What would you create?",
    body: "How much of your life has been shaped by fear rather than possibility? The day fear loosens its grip, your energy is no longer spent protecting yourself. It begins creating instead.",
    italic: "Walk with a spiritual master and discover what has been waiting to emerge.",
    cta: "Begin your Spiritual Journey",
    panel: "linear-gradient(155deg,#a6828e,#8f6f7c)",
    text: "#fdf8f6",
    media: "linear-gradient(160deg,#302846,#241f38)",
    mediaLabel: "Possibility",
    button: "#2c2540",
    buttonText: "#ffffff",
    buttonBorder: "transparent",
  },
  {
    key: "watcher",
    heading: "Who is the one watching your thoughts if not you?",
    body: "For years we've believed we are every thought that passes through the mind. The moment you begin watching your thoughts instead of becoming them, a completely different way of living begins to unfold.",
    italic: "Sometimes all it takes is someone who can help you see what you've stopped noticing.",
    cta: "Take the first step inward",
    panel: "linear-gradient(155deg,#4e3a57,#3f2f49)",
    text: "#f7eff3",
    media: "linear-gradient(160deg,#dca1a1,#cf8f93)",
    mediaLabel: "Awareness",
    button: "#dca1a1",
    buttonText: "#3a2330",
    buttonBorder: "transparent",
  },
];

/* ── Motion model ──
   Every card is driven by ONE shared formula off a `stage` value (0→1→2, one
   integer per card). For card `i`, its relative position is r = stage - i:
     • r < 0  → waiting in the stack below, offset down & slightly smaller (the peek)
     • r = 0  → active, centred
     • r > 0  → peeling up-and-off: translates fully off the top and tilts
   Because all three cards use the identical formula, the first card lifts exactly
   like the second and third — no card can behave differently. */
const LIFT = 1100; // px a card travels up to fully clear the top as it peels away
const PEEK = 26; // px each waiting card is offset down (the stacked "more layers" look)
const TILT = 5; // deg a card tilts as it peels off

const yFor = (r: number) => (r <= 0 ? -r * PEEK : -r * LIFT);
const rotateFor = (r: number, i: number) => (r <= 0 ? 0 : (i % 2 === 0 ? 1 : -1) * r * TILT);
const scaleFor = (r: number) => 1 - Math.min(Math.max(0, -r), 1.7) * 0.045;
const opacityFor = (r: number) => (r <= 0.92 ? 1 : Math.max(0, 1 - (r - 0.92) / 0.08));
const zFor = (r: number) => Math.round((r + 4) * 10);

/* ── Looping animated scenes (code-built "videos") ──
   Three distinct seamless loops, keyed by layer. Transform/opacity only;
   deterministic configs (no randomness) so SSR and client always match. */

const MOTES = [
  { x: 24, y: 70, d: 0, mx: 10 }, { x: 62, y: 78, d: 2.4, mx: -8 },
  { x: 42, y: 58, d: 4.8, mx: 6 }, { x: 76, y: 64, d: 1.2, mx: -12 },
  { x: 14, y: 52, d: 3.6, mx: 9 }, { x: 55, y: 46, d: 5.8, mx: -6 },
];

const EMBERS = [
  { x: 22, d: 0,   s: 5, mx: 14 },  { x: 38, d: 1.6, s: 4, mx: -10 },
  { x: 52, d: 0.7, s: 6, mx: 8 },   { x: 66, d: 2.8, s: 4, mx: -14 },
  { x: 78, d: 1.1, s: 5, mx: 10 },  { x: 30, d: 3.7, s: 3, mx: -6 },
  { x: 60, d: 4.4, s: 3, mx: 12 },  { x: 45, d: 5.2, s: 5, mx: -8 },
];

function SceneStillness() {
  return (
    <>
      {/* breathing golden orb */}
      <div
        className="absolute left-1/2 top-[44%] h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(255,236,200,0.9), rgba(240,160,90,0.35) 48%, transparent 72%)",
          animation: "breathe-slow 7s ease-in-out infinite",
        }}
      />
      {/* expanding ripple rings */}
      {[0, 2.3, 4.6].map((d) => (
        <div
          key={d}
          className="absolute left-1/2 top-[44%] h-44 w-44 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[rgba(255,225,180,0.4)]"
          style={{ animation: `scene-ripple 7s ease-out ${d}s infinite` }}
        />
      ))}
      {/* drifting dust motes */}
      {MOTES.map((m, i) => (
        <span
          key={i}
          className="absolute h-1 w-1 rounded-full bg-[rgba(255,235,205,0.85)]"
          style={{
            left: `${m.x}%`,
            top: `${m.y}%`,
            ["--mx" as string]: `${m.mx}px`,
            animation: `scene-mote 9s ease-in-out ${m.d}s infinite`,
          }}
        />
      ))}
    </>
  );
}

function ScenePossibility() {
  return (
    <>
      {/* the bloom the embers feed */}
      <div
        className="absolute left-1/2 top-[30%] h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(255,214,170,0.85), rgba(230,83,138,0.28) 52%, transparent 74%)",
          animation: "scene-bloom 5.5s ease-in-out infinite",
        }}
      />
      {/* rising embers */}
      {EMBERS.map((e, i) => (
        <span
          key={i}
          className="absolute bottom-[8%] rounded-full"
          style={{
            left: `${e.x}%`,
            width: e.s,
            height: e.s,
            background: "radial-gradient(circle, rgba(255,205,150,0.95), rgba(240,145,63,0.6))",
            ["--mx" as string]: `${e.mx}px`,
            animation: `scene-rise 6.5s ease-out ${e.d}s infinite`,
          }}
        />
      ))}
    </>
  );
}

function SceneAwareness() {
  return (
    <>
      {/* softly pulsing core — the watcher */}
      <div
        className="absolute left-1/2 top-1/2 h-16 w-16 -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(58,35,48,0.95), rgba(58,35,48,0.4) 55%, transparent 75%)",
          animation: "breathe-slow 6s ease-in-out infinite",
        }}
      />
      {/* concentric orbit rings with traveling sparks */}
      {[
        { size: 120, dur: 14, delay: 0 },
        { size: 180, dur: 22, delay: -6 },
        { size: 240, dur: 30, delay: -12 },
      ].map((r) => (
        <div
          key={r.size}
          className="absolute left-1/2 top-1/2 rounded-full border border-[rgba(58,35,48,0.35)]"
          style={{
            width: r.size,
            height: r.size,
            marginLeft: -r.size / 2,
            marginTop: -r.size / 2,
            animation: `scene-orbit ${r.dur}s linear ${r.delay}s infinite`,
          }}
        >
          <span
            className="absolute left-1/2 top-0 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full"
            style={{ background: "radial-gradient(circle, #fff, rgba(58,35,48,0.8))" }}
          />
        </div>
      ))}
      {/* occasional aurora sweep */}
      <div
        className="absolute inset-y-[12%] left-[15%] w-[70%]"
        style={{
          background:
            "linear-gradient(100deg, transparent 30%, rgba(255,255,255,0.35) 50%, transparent 70%)",
          filter: "blur(10px)",
          animation: "scene-aurora 9s ease-in-out infinite",
        }}
      />
    </>
  );
}

const SCENES: Record<string, () => React.ReactElement> = {
  still: SceneStillness,
  fear: ScenePossibility,
  watcher: SceneAwareness,
};

function MediaSlot({ layer }: { layer: Layer }) {
  const Scene = SCENES[layer.key] ?? SceneStillness;
  return (
    <div
      className="relative hidden md:block h-full w-full overflow-hidden rounded-xl"
      style={{ background: layer.media }}
    >
      {layer.videoSrc ? (
        <video
          className="absolute inset-0 h-full w-full object-cover"
          src={layer.videoSrc}
          autoPlay
          loop
          muted
          playsInline
        />
      ) : (
        <>
          <Scene />
          <span className="absolute bottom-3 left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-[0.28em] text-white/45">
            {layer.mediaLabel}
          </span>
        </>
      )}
    </div>
  );
}

function CardInner({ layer }: { layer: Layer }) {
  return (
    <div className="grid h-full gap-8 md:grid-cols-[1.12fr_0.88fr] md:gap-10" style={{ color: layer.text }}>
      <div className="flex flex-col">
        <h3 className="font-serif font-semibold text-[clamp(1.4rem,3vw,2.15rem)] leading-[1.22]">
          {layer.heading}
        </h3>
        <p className="mt-5 max-w-md text-[14.5px] font-light leading-[1.8]" style={{ opacity: 0.82 }}>
          {layer.body}
        </p>
        <div className="mt-auto pt-8">
          <p className="mb-5 font-serif text-[15px] italic" style={{ opacity: 0.85 }}>
            {layer.italic}
          </p>
          <a
            href="#waitlist"
            className="inline-flex items-center gap-2 rounded-lg px-5 py-3 text-sm font-medium transition-transform duration-300 hover:-translate-y-0.5"
            style={{
              background: layer.button,
              color: layer.buttonText,
              border: `1px solid ${layer.buttonBorder}`,
            }}
          >
            {layer.cta} <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
      <MediaSlot layer={layer} />
    </div>
  );
}

function StackCard({
  layer,
  index,
  stage,
}: {
  layer: Layer;
  index: number;
  stage: MotionValue<number>;
}) {
  const y = useTransform(stage, (s) => yFor(s - index));
  const rotate = useTransform(stage, (s) => rotateFor(s - index, index));
  const scale = useTransform(stage, (s) => scaleFor(s - index));
  const opacity = useTransform(stage, (s) => opacityFor(s - index));
  const zIndex = useTransform(stage, (s) => zFor(s - index));

  return (
    <motion.article
      initial={false}
      style={{ y, rotate, opacity, scale, zIndex, background: layer.panel, transformOrigin: "50% 100%" }}
      className="absolute inset-0 overflow-hidden rounded-2xl border border-white/10 p-7 shadow-[0_30px_90px_rgba(0,0,0,0.5)] sm:p-10"
    >
      <CardInner layer={layer} />
    </motion.article>
  );
}

export default function MindStill() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  /* Map scroll → stage 0→1→2 (one integer per card) with a hold on each card
   * and a smooth transition between. Identical windows keep every peel equal. */
  const stage = useTransform(
    scrollYProgress,
    [0, 0.16, 0.4, 0.6, 0.84, 1],
    [0, 0, 1, 1, 2, 2]
  );

  /* Accessibility / no-JS-motion fallback: show all three as a simple stack. */
  if (reduce) {
    return (
      <section className="relative z-10 px-6 py-20 sm:py-28">
        <div className="mx-auto flex max-w-5xl flex-col gap-8">
          {layers.map((layer) => (
            <article
              key={layer.key}
              className="overflow-hidden rounded-2xl border border-white/10 p-7 shadow-[0_20px_60px_rgba(0,0,0,0.4)] sm:p-10"
              style={{ background: layer.panel, minHeight: 380 }}
            >
              <CardInner layer={layer} />
            </article>
          ))}
        </div>
      </section>
    );
  }

  return (
    <section ref={ref} className="relative z-10 h-[340vh]">
      <div className="sticky top-0 flex h-screen items-center justify-center overflow-hidden px-6">
        <div className="relative h-[460px] w-full max-w-5xl sm:h-[520px]">
          {/* static peek strips behind for the "more layers" look at first paint */}
          {layers.map((layer, i) => (
            <StackCard key={layer.key} layer={layer} index={i} stage={stage} />
          ))}
        </div>

        {/* progress dots */}
        <div className="pointer-events-none absolute bottom-8 left-1/2 flex -translate-x-1/2 gap-2">
          {layers.map((layer, i) => (
            <Dot key={layer.key} index={i} stage={stage} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Dot({ index, stage }: { index: number; stage: MotionValue<number> }) {
  // Brighten when this card is the active one (stage ≈ index).
  const opacity = useTransform(stage, (s) => {
    const d = Math.abs(s - index);
    return d >= 1 ? 0.28 : 1 - d * 0.72;
  });
  return (
    <motion.span style={{ opacity }} className="h-1.5 w-1.5 rounded-full bg-[var(--gold-light)]" />
  );
}
