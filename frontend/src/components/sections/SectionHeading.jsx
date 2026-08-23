import { motion } from "framer-motion";

export const SectionEyebrow = ({ children, className = "" }) => (
  <motion.span
    initial={{ opacity: 0, y: 8 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-15% 0px" }}
    transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
    className={`block font-ui text-[10px] uppercase tracking-[0.4em] text-[color:var(--gold)] ${className}`}
  >
    {children}
  </motion.span>
);

export const SectionTitle = ({ children, className = "", italic = false }) => (
  <motion.h2
    initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
    whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
    viewport={{ once: true, margin: "-15% 0px" }}
    transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
    className={`font-mystic font-light leading-[1.05] text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl ${
      italic ? "italic" : ""
    } ${className}`}
  >
    {children}
  </motion.h2>
);
