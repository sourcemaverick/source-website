import { motion } from "framer-motion";

const partners = [
  { name: "Google for Startups", testId: "partner-google" },
  { name: "ElevenLabs Grants", testId: "partner-elevenlabs" },
];

export const PartnersSection = () => (
  <section
    data-testid="partners-section"
    className="relative bg-[#050505] px-6 py-24 md:py-32"
  >
    <div className="mx-auto max-w-5xl text-center">
      <motion.span
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-15% 0px" }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="block font-ui text-[10px] uppercase tracking-[0.4em] text-white/40"
      >
        Backed by
      </motion.span>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-15% 0px" }}
        transition={{ duration: 1.4, delay: 0.15 }}
        className="mt-12 flex flex-col items-center justify-center gap-14 md:flex-row md:gap-24"
      >
        {partners.map((p) => (
          <span
            key={p.name}
            data-testid={p.testId}
            className="partner-logo font-mystic text-2xl font-light tracking-wide text-white/40 md:text-3xl"
          >
            {p.name}
          </span>
        ))}
      </motion.div>
    </div>
  </section>
);
