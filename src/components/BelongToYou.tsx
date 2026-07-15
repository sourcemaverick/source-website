"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { layers } from "@/lib/constants";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/animations";

export default function BelongToYou() {
  return (
    <section id="belong" className="relative z-10 px-6 py-24 sm:py-32">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="font-sans font-semibold text-[clamp(1.6rem,3.6vw,2.6rem)] tracking-[-0.01em] text-white"
        >
          Does all of this really belong to you?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ delay: 0.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="font-serif italic text-[var(--text-secondary)] text-base sm:text-lg mt-4"
        >
          Carry something long enough, and you begin to believe it&rsquo;s part of you.
        </motion.p>

        <motion.ul
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-16 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-x-4 gap-y-10 sm:gap-y-12"
        >
          {layers.map((layer) => (
            <motion.li
              key={layer.key}
              variants={fadeUp}
              className="group flex flex-col items-center"
            >
              <div className="relative w-[128px] h-[128px] sm:w-[136px] sm:h-[136px] overflow-hidden rounded-full border border-[rgba(203,168,118,0.28)] transition-all duration-500 group-hover:border-[rgba(230,83,138,0.5)] group-hover:shadow-[0_0_38px_rgba(230,83,138,0.22)]">
                <Image
                  src={layer.img}
                  alt={layer.label}
                  fill
                  sizes="136px"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.06]"
                />
              </div>
              <span className="mt-5 text-[11px] sm:text-xs uppercase tracking-[0.28em] text-[var(--text-muted)] group-hover:text-[var(--text-secondary)] transition-colors duration-300">
                {layer.label}
              </span>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
