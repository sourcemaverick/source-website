import { motion } from "framer-motion";

export const BlurTextReveal = ({ text, className = "", delay = 0, stagger = 0.05, as: Tag = "span" }) => {
  const chars = Array.from(text);
  return (
    <Tag className={className} aria-label={text}>
      {chars.map((char, i) => (
        <motion.span
          key={i}
          aria-hidden="true"
          className="inline-block"
          initial={{ opacity: 0, y: 24, filter: "blur(14px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{
            delay: delay + i * stagger,
            duration: 1.1,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </Tag>
  );
};
