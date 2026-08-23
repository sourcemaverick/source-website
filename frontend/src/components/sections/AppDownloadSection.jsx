import { motion } from "framer-motion";
import { SectionEyebrow } from "@/components/sections/SectionHeading";

const Badge = ({ href, testId, label, sub, icon }) => (
  <motion.a
    data-testid={testId}
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ y: -3 }}
    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
    className="glass-deep flex items-center gap-4 rounded-2xl px-7 py-4 transition-colors hover:border-white/25"
  >
    <span className="text-2xl text-white/90">{icon}</span>
    <span className="flex flex-col leading-tight">
      <span className="font-ui text-[9px] uppercase tracking-[0.35em] text-white/45">
        {sub}
      </span>
      <span className="font-mystic text-xl text-white md:text-2xl">{label}</span>
    </span>
  </motion.a>
);

export const AppDownloadSection = () => (
  <section
    data-testid="download-section"
    className="relative bg-[#050505] px-6 py-40 md:py-56"
  >
    <div className="mx-auto max-w-4xl text-center">
      <SectionEyebrow className="mx-auto">Take it with you</SectionEyebrow>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-15% 0px" }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        className="mt-10 font-mystic text-3xl font-light leading-tight text-white md:text-4xl lg:text-5xl"
      >
        Source is with you,{" "}
        <span className="italic text-[color:var(--gold)]">wherever you are.</span>
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-15% 0px" }}
        transition={{ duration: 1.2, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        className="mt-16 flex flex-col items-center justify-center gap-5 sm:flex-row sm:gap-6"
      >
        <Badge
          testId="download-appstore"
          href="#"
          sub="Download on the"
          label="App Store"
          icon={
            <svg viewBox="0 0 24 24" className="h-7 w-7" fill="currentColor" aria-hidden="true">
              <path d="M16.365 1.43c0 1.14-.42 2.22-1.19 3-1.02 1.05-2.24 1.66-3.42 1.55-.15-1.11.44-2.28 1.15-3.03.83-.9 2.17-1.53 3.46-1.52zM20.5 17.4c-.55 1.26-.82 1.82-1.53 2.94-1 1.55-2.4 3.48-4.15 3.5-1.55.02-1.95-1.01-4.06-1-2.1.01-2.55 1.02-4.1 1-1.75-.02-3.08-1.77-4.08-3.32-2.8-4.35-3.1-9.46-1.37-12.18C2.44 6.4 4.24 5.34 5.92 5.34c1.7 0 2.78.94 4.19.94 1.36 0 2.19-.94 4.17-.94 1.5 0 3.08.82 4.21 2.24-3.7 2.03-3.1 7.32.01 9.82z" />
            </svg>
          }
        />
        <Badge
          testId="download-playstore"
          href="#"
          sub="Get it on"
          label="Google Play"
          icon={
            <svg viewBox="0 0 24 24" className="h-7 w-7" fill="currentColor" aria-hidden="true">
              <path d="M3.6 2.3c-.4.3-.6.7-.6 1.3v16.8c0 .6.2 1 .6 1.3l9.6-9.7L3.6 2.3zM14.5 13l2.9 2.9-11 6.3c-.6.3-1.2.2-1.7-.1L14.5 13zM18.6 10.7c.9.5.9 1.9 0 2.4l-2.5 1.4-3.3-3.3 3.3-3.3 2.5 1.4-.9.5.9-.5zM4.7 1.7c.5-.3 1.1-.3 1.7 0l11 6.3-2.9 2.9L4.7 1.7z" />
            </svg>
          }
        />
      </motion.div>

      <p className="mt-8 font-ui text-[10px] uppercase tracking-[0.3em] text-white/25">
        Coming soon
      </p>
    </div>
  </section>
);
