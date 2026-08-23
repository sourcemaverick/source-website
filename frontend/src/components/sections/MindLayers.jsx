import { motion } from "framer-motion";

const layers = [
  { label: "Conscious", r: 168, opacity: 0.28, delay: 0 },
  { label: "Subconscious", r: 116, opacity: 0.52, delay: 0.25 },
  { label: "Superconscious", r: 64, opacity: 1, delay: 0.5, glow: true },
];

export const MindLayers = () => (
  <motion.div
    data-testid="mind-layers"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true, margin: "-10% 0px" }}
    transition={{ duration: 1.6 }}
    className="relative mx-auto aspect-square w-full max-w-[460px]"
  >
    <svg viewBox="0 0 400 400" className="h-full w-full" aria-hidden="true">
      <defs>
        <radialGradient id="core" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="rgba(232, 194, 132, 0.9)" />
          <stop offset="55%" stopColor="rgba(220, 176, 108, 0.35)" />
          <stop offset="100%" stopColor="transparent" />
        </radialGradient>
      </defs>

      {layers.map((l, i) => (
        <motion.circle
          key={l.label}
          cx="200"
          cy="200"
          r={l.r}
          fill="none"
          stroke={l.glow ? "rgba(232, 194, 132, 0.9)" : "rgba(255, 255, 255, 0.6)"}
          strokeWidth={l.glow ? 1.4 : 0.8}
          strokeOpacity={l.opacity}
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: l.opacity }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 1.8, delay: l.delay, ease: [0.22, 1, 0.36, 1] }}
        />
      ))}

      {/* Innermost glowing core */}
      <motion.circle
        cx="200"
        cy="200"
        r="46"
        fill="url(#core)"
        initial={{ opacity: 0, scale: 0.6 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-10% 0px" }}
        transition={{ duration: 2, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
        style={{ transformOrigin: "200px 200px" }}
      />

      {/* Slow orbital shimmer on outer ring */}
      <motion.circle
        cx="200"
        cy="200"
        r="168"
        fill="none"
        stroke="rgba(232, 194, 132, 0.55)"
        strokeWidth="1"
        strokeDasharray="2 340"
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        style={{ transformOrigin: "200px 200px" }}
      />
    </svg>

    {/* Labels */}
    <div className="pointer-events-none absolute inset-0">
      <span className="absolute left-1/2 top-[6%] -translate-x-1/2 font-ui text-[10px] uppercase tracking-[0.35em] text-white/40">
        Conscious
      </span>
      <span className="absolute left-1/2 top-[20%] -translate-x-1/2 font-ui text-[10px] uppercase tracking-[0.35em] text-white/60">
        Subconscious
      </span>
      <span className="absolute left-1/2 top-[calc(50%+70px)] -translate-x-1/2 font-ui text-[10px] uppercase tracking-[0.4em] text-[color:var(--gold)]">
        Superconscious
      </span>
    </div>
  </motion.div>
);
