import { motion } from "framer-motion";

const words = ["Perception", "Stillness", "Transformation", "Consciousness", "Clarity", "Becoming"];

export const FooterStrip = () => (
  <motion.footer
    data-testid="footer-strip"
    initial={{ opacity: 0, y: 18 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 2.6, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
    className="absolute bottom-0 left-0 right-0 z-30 px-6 pb-6 md:px-12 md:pb-6"
  >
    <div className="mx-auto flex max-w-6xl items-center justify-between gap-6">
      <span className="hidden shrink-0 font-ui text-[9px] uppercase tracking-[0.3em] text-white/35 md:block">
        01 / Prologue
      </span>
      <div className="glass-deep relative flex-1 overflow-hidden rounded-full px-2 py-3">
        <div className="marquee-track">
          {[...Array(2)].map((_, r) => (
            <div key={r} className="flex shrink-0 items-center">
              {words.map((w) => (
                <span key={`${r}-${w}`} className="flex items-center">
                  <span className="mx-8 font-mystic text-sm italic tracking-widest text-white/45">
                    {w}
                  </span>
                  <span className="h-[3px] w-[3px] rounded-full bg-white/25" />
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
      <span className="hidden shrink-0 font-ui text-[9px] uppercase tracking-[0.3em] text-white/35 md:block">
        MMXXVI
      </span>
    </div>
  </motion.footer>
);
