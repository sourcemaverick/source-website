import { useEffect } from "react";
import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { SiteFooter } from "@/components/SiteFooter";
import { SmoothScroll } from "@/components/SmoothScroll";

/* The Soul Search frame: the site's ink, grain and glass, a wider column
   than the legal pages, the same reveal. */
export const ease = [0.22, 1, 0.36, 1];

export default function SoulShell({ label = "Soul Search", title, meta, wide = false, children, testId = "soul-page" }) {
  useEffect(() => {
    const prev = document.title;
    document.title = `${title ? title + " — " : ""}Soul Search — The Source`;
    return () => { document.title = prev; };
  }, [title]);

  return (
    <main data-testid={testId} className="grain relative w-full bg-[#050505]">
      <SmoothScroll />
      <Header delay={0.2} />
      <div className="relative px-5 pb-24 pt-32 md:px-8 md:pb-36 md:pt-44">
        <div className={`mx-auto ${wide ? "max-w-6xl" : "max-w-3xl"}`}>
          {(label || title) && (
            <motion.header
              initial={{ opacity: 0, y: 16, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 1.1, ease, delay: 0.1 }}
              className="mb-12 md:mb-16"
            >
              <span className="block font-ui text-[10px] uppercase tracking-[0.4em] text-[color:var(--gold)]">{label}</span>
              {title && (
                <h1 className="mt-5 font-mystic text-4xl font-light leading-[1.05] tracking-tight text-white md:text-6xl">{title}</h1>
              )}
              {meta && <div className="mt-5 font-ui text-xs font-light tracking-wide text-white/40">{meta}</div>}
            </motion.header>
          )}
          {children}
        </div>
      </div>
      <SiteFooter />
    </main>
  );
}

/* ── small primitives, used on every screen ───────────────────────────── */

export const GuideLine = ({ children, size = "lg", delay = 0, testId }) => (
  <motion.p
    data-testid={testId}
    initial={{ opacity: 0, y: 10, filter: "blur(6px)" }}
    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
    transition={{ duration: 0.9, ease, delay }}
    className={`font-mystic font-light leading-[1.3] text-white ${size === "xl" ? "text-3xl md:text-5xl" : size === "md" ? "text-xl md:text-2xl" : "text-2xl md:text-4xl"}`}
  >
    {children}
  </motion.p>
);

export const YouLine = ({ children, testId }) => (
  <motion.p
    data-testid={testId}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.6, ease }}
    className="ml-auto max-w-[85%] text-right font-ui text-sm font-light leading-relaxed text-white/60 md:text-base"
  >
    {children}
  </motion.p>
);

export const Chip = ({ children, onClick, primary = false, disabled = false, testId }) => (
  <button
    type="button"
    data-testid={testId}
    onClick={onClick}
    disabled={disabled}
    className={`rounded-full px-5 py-2.5 font-ui text-xs uppercase tracking-[0.22em] transition-colors duration-300 disabled:opacity-40 ${
      primary
        ? "border border-[color:var(--gold)] text-[color:var(--gold)] hover:bg-[color:var(--gold)] hover:text-black"
        : "border border-white/15 text-white/60 hover:border-white/40 hover:text-white"
    }`}
  >
    {children}
  </button>
);

export const GoldRule = () => (
  <div className="my-8 h-px w-16" style={{ background: "linear-gradient(90deg, rgba(212,178,108,0.8), transparent)" }} aria-hidden="true" />
);

export const Glass = ({ children, className = "", testId }) => (
  <div data-testid={testId} className={`glass-deep rounded-2xl p-6 md:p-8 ${className}`}>{children}</div>
);

export const Quiet = ({ children, className = "" }) => (
  <p className={`font-ui text-xs font-light tracking-wide text-white/40 ${className}`}>{children}</p>
);
