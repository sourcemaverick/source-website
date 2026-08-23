import { motion } from "framer-motion";

export const ConnectionThread = () => (
  <motion.div
    data-testid="connection-thread"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true, margin: "-10% 0px" }}
    transition={{ duration: 1.4 }}
    className="relative mx-auto aspect-[16/6] w-full max-w-[560px]"
  >
    <svg viewBox="0 0 560 210" className="h-full w-full" aria-hidden="true">
      <defs>
        <radialGradient id="pt-a" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="rgba(255, 232, 190, 1)" />
          <stop offset="50%" stopColor="rgba(220, 176, 108, 0.5)" />
          <stop offset="100%" stopColor="transparent" />
        </radialGradient>
        <linearGradient id="thread" x1="0%" y1="50%" x2="100%" y2="50%">
          <stop offset="0%" stopColor="rgba(232, 194, 132, 0)" />
          <stop offset="50%" stopColor="rgba(232, 194, 132, 0.9)" />
          <stop offset="100%" stopColor="rgba(232, 194, 132, 0)" />
        </linearGradient>
      </defs>

      {/* Thread */}
      <motion.path
        d="M110 105 Q280 60 450 105"
        stroke="url(#thread)"
        strokeWidth="1.2"
        fill="none"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true, margin: "-10% 0px" }}
        transition={{ duration: 2.2, ease: [0.22, 1, 0.36, 1] }}
      />

      {/* Left point */}
      <motion.circle
        cx="110"
        cy="105"
        r="34"
        fill="url(#pt-a)"
        animate={{ opacity: [0.55, 1, 0.55] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
      <circle cx="110" cy="105" r="4" fill="rgba(255, 240, 210, 1)" />

      {/* Right point */}
      <motion.circle
        cx="450"
        cy="105"
        r="34"
        fill="url(#pt-a)"
        animate={{ opacity: [0.55, 1, 0.55] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />
      <circle cx="450" cy="105" r="4" fill="rgba(255, 240, 210, 1)" />
    </svg>
  </motion.div>
);
