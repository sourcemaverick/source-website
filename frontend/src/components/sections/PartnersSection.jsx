import { motion } from "framer-motion";

const GOOGLE_LOGO =
  "https://customer-assets-lqy194kg.emergentagent.net/job_mind-nexus-dark/artifacts/cp6rwb9y_google-logo-png-google-sva-scholarship-20.webp";

const ELEVEN_LOGO =
  "https://eleven-public-cdn.elevenlabs.io/payloadcms/cy7rxce8uki-IIElevenLabsGrants%201.webp";

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
        className="mt-14 flex flex-col items-center justify-center gap-14 md:flex-row md:items-end md:gap-24"
      >
        {/* Google for Startups */}
        <a
          href="https://startup.google.com/"
          target="_blank"
          rel="noopener noreferrer"
          data-testid="partner-google"
          aria-label="Google for Startups"
          className="partner-logo group flex flex-col items-center gap-3"
        >
          <img
            src={GOOGLE_LOGO}
            alt="Google"
            className="h-9 w-auto opacity-70 transition-opacity duration-500 group-hover:opacity-100 md:h-10"
          />
          <span className="font-ui text-[10px] uppercase tracking-[0.35em] text-white/50 transition-colors duration-500 group-hover:text-white/85">
            for Startups
          </span>
        </a>

        {/* ElevenLabs Grants */}
        <a
          href="https://elevenlabs.io/startup-grants"
          target="_blank"
          rel="noopener noreferrer"
          data-testid="partner-elevenlabs"
          aria-label="ElevenLabs Grants"
          className="partner-logo group flex items-end"
        >
          <img
            src={ELEVEN_LOGO}
            alt="ElevenLabs Grants"
            className="h-auto w-[220px] opacity-70 transition-opacity duration-500 group-hover:opacity-100 md:w-[250px]"
          />
        </a>
      </motion.div>
    </div>
  </section>
);
