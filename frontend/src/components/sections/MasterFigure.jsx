import { motion } from "framer-motion";

// Golden Buddha in a dark temple — used as the master's presence.
// Heavy dark treatment + warm rim halo transforms it into a silhouetted
// spiritual anchor rather than a literal photograph.
const MASTER_IMG =
  "https://images.unsplash.com/photo-1768895124631-213163435e30?fm=jpg&q=70&w=1200&auto=format&fit=crop";

export const MasterFigure = () => (
  <motion.div
    data-testid="master-figure"
    initial={{ opacity: 0, scale: 0.96 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true, margin: "-10% 0px" }}
    transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
    className="relative mx-auto aspect-square w-full max-w-[560px]"
  >
    {/* Outer warm rim halo */}
    <div className="master-halo pointer-events-none absolute inset-0" />

    {/* The photograph, heavily treated */}
    <div className="relative h-full w-full overflow-hidden rounded-full">
      <img
        src={MASTER_IMG}
        alt=""
        aria-hidden="true"
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover"
        style={{
          filter: "brightness(0.6) contrast(1.15) saturate(1.05)",
        }}
      />
      {/* Warm rim from behind — top and right */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 55% at 62% 22%, rgba(232, 194, 132, 0.55) 0%, rgba(220, 176, 108, 0.12) 40%, transparent 70%)",
          mixBlendMode: "screen",
        }}
      />
      {/* Central darkening — pushes face into shadow */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 55% 60% at 48% 55%, rgba(5,5,5,0.85) 0%, rgba(5,5,5,0.55) 45%, rgba(5,5,5,0.1) 75%, transparent 100%)",
        }}
      />
      {/* Bottom-fade into the page ink */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2"
        style={{
          background:
            "linear-gradient(to bottom, transparent 0%, rgba(5,5,5,0.4) 55%, #050505 100%)",
        }}
      />
      {/* Edge vignette */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at center, transparent 55%, rgba(5,5,5,0.85) 100%)",
        }}
      />
    </div>

    {/* Faint drifting light particles for presence */}
    <div className="pointer-events-none absolute inset-0">
      <motion.div
        className="absolute left-[68%] top-[18%] h-1.5 w-1.5 rounded-full bg-[color:var(--gold)]"
        animate={{ opacity: [0.2, 0.9, 0.2], y: [-4, 4, -4] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        style={{ filter: "blur(0.5px)" }}
      />
      <motion.div
        className="absolute left-[26%] top-[64%] h-1 w-1 rounded-full bg-white/70"
        animate={{ opacity: [0.1, 0.6, 0.1], y: [4, -4, 4] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
        style={{ filter: "blur(0.4px)" }}
      />
    </div>
  </motion.div>
);
