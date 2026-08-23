import { motion } from "framer-motion";

export const MasterFigure = () => (
  <motion.div
    data-testid="master-figure"
    initial={{ opacity: 0, scale: 0.96 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true, margin: "-10% 0px" }}
    transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
    className="relative mx-auto aspect-square w-full max-w-[520px]"
  >
    {/* Rim halo */}
    <div className="master-halo absolute inset-0" />
    {/* Silhouette */}
    <svg
      viewBox="0 0 400 400"
      className="relative z-10 h-full w-full"
      aria-hidden="true"
    >
      <defs>
        <radialGradient id="silh" cx="50%" cy="42%" r="55%">
          <stop offset="0%" stopColor="#141210" />
          <stop offset="70%" stopColor="#0a0908" />
          <stop offset="100%" stopColor="#050505" />
        </radialGradient>
        <radialGradient id="crown" cx="50%" cy="0%" r="70%">
          <stop offset="0%" stopColor="rgba(220, 176, 108, 0.55)" />
          <stop offset="55%" stopColor="rgba(220, 176, 108, 0.08)" />
          <stop offset="100%" stopColor="transparent" />
        </radialGradient>
      </defs>
      {/* Warm light behind head */}
      <circle cx="200" cy="160" r="150" fill="url(#crown)" />
      {/* Head */}
      <ellipse cx="200" cy="170" rx="72" ry="88" fill="url(#silh)" />
      {/* Neck */}
      <path
        d="M170 240 L170 275 Q200 285 230 275 L230 240 Z"
        fill="url(#silh)"
      />
      {/* Shoulders */}
      <path
        d="M60 400 Q60 300 200 285 Q340 300 340 400 Z"
        fill="url(#silh)"
      />
      {/* Rim light — right side */}
      <path
        d="M270 130 Q290 200 260 260"
        stroke="rgba(232, 194, 132, 0.35)"
        strokeWidth="1.2"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M275 118 Q298 200 268 268"
        stroke="rgba(232, 194, 132, 0.18)"
        strokeWidth="0.8"
        fill="none"
        strokeLinecap="round"
      />
      {/* Rim light — top of head */}
      <path
        d="M148 96 Q200 78 252 96"
        stroke="rgba(232, 194, 132, 0.28)"
        strokeWidth="1"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  </motion.div>
);
