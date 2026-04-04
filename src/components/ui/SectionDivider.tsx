"use client";

import { motion } from "framer-motion";
import { viewportOnce } from "@/lib/animations";

type Variant = "gradient" | "line" | "dots";

export default function SectionDivider({ variant }: { variant: Variant }) {
  if (variant === "gradient") {
    return (
      <div className="relative h-24 pointer-events-none" aria-hidden="true">
        <div
          className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-40 mx-auto max-w-xl"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(224,90,138,0.08), transparent 70%)",
            filter: "blur(50px)",
          }}
        />
      </div>
    );
  }

  if (variant === "line") {
    return (
      <div className="flex justify-center py-14" aria-hidden="true">
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          viewport={viewportOnce}
          transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
          className="h-px w-48 origin-center bg-gradient-to-r from-transparent via-[var(--accent)] to-transparent opacity-30"
        />
      </div>
    );
  }

  /* Dots — refined spacing */
  return (
    <div className="flex justify-center items-center gap-3 py-12" aria-hidden="true">
      <span className="w-[2px] h-[2px] rounded-full bg-[var(--text-disabled)]" />
      <span className="w-[3px] h-[3px] rounded-full bg-[var(--accent)] opacity-50" />
      <span className="w-[2px] h-[2px] rounded-full bg-[var(--text-disabled)]" />
    </div>
  );
}
