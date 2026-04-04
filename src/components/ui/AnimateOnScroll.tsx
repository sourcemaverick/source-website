"use client";

import { motion } from "framer-motion";
import { fadeUp, viewportOnce } from "@/lib/animations";
import type { Variants } from "framer-motion";

interface AnimateOnScrollProps {
  children: React.ReactNode;
  className?: string;
  variants?: Variants;
  delay?: number;
}

export default function AnimateOnScroll({
  children,
  className = "",
  variants = fadeUp,
  delay = 0,
}: AnimateOnScrollProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={variants}
      transition={delay ? { delay } : undefined}
      className={className}
    >
      {children}
    </motion.div>
  );
}
