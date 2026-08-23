import { motion } from "framer-motion";

// User-provided portrait of the spiritual master, already rim-lit
// against darkness. We let the photograph speak with only a subtle
// integrating fade at the base + faint drifting light particles.
const MASTER_IMG =
  "https://customer-assets-lqy194kg.emergentagent.net/job_mind-nexus-dark/artifacts/dd5i3qib_ChatGPT%20Image%20Aug%2023%2C%202026%2C%2006_11_43%20PM%20%281%29.png";

export const MasterFigure = () => (
  <motion.div
    data-testid="master-figure"
    initial={{ opacity: 0, scale: 0.96 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true, margin: "-10% 0px" }}
    transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
    className="relative mx-auto aspect-square w-full max-w-[560px]"
  >
    {/* Photograph */}
    <img
      src={MASTER_IMG}
      alt="Spiritual master, rim-lit against darkness"
      loading="lazy"
      className="relative z-10 h-full w-full object-cover"
    />

    {/* Bottom fade into page ink */}
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-1/3"
      style={{
        background:
          "linear-gradient(to bottom, transparent 0%, rgba(5,5,5,0.55) 70%, #050505 100%)",
      }}
    />

    {/* Faint drifting light particles for presence */}
    <div className="pointer-events-none absolute inset-0 z-30">
      <motion.div
        className="absolute left-[68%] top-[18%] h-1.5 w-1.5 rounded-full bg-[color:var(--gold)]"
        animate={{ opacity: [0.15, 0.75, 0.15], y: [-4, 4, -4] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        style={{ filter: "blur(0.5px)" }}
      />
      <motion.div
        className="absolute left-[24%] top-[62%] h-1 w-1 rounded-full bg-white/60"
        animate={{ opacity: [0.1, 0.55, 0.1], y: [4, -4, 4] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
        style={{ filter: "blur(0.4px)" }}
      />
    </div>
  </motion.div>
);
