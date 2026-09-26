import { useEffect } from "react";
import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { SiteFooter } from "@/components/SiteFooter";
import { SmoothScroll } from "@/components/SmoothScroll";
import { MysticCursor } from "@/components/MysticCursor";

/* ─────────────────────────────────────────────────────────────
   Shared building blocks for the long-form pages (Terms,
   Privacy, Support, Delete Account). Same ink / glass / gold
   language as the landing page: Cormorant for headings,
   Montserrat for labels and body.
   ───────────────────────────────────────────────────────────── */

const ease = [0.22, 1, 0.36, 1];
const GOLD_SOFT = "rgba(212, 178, 108, 0.7)";

/** Scroll to an in-page anchor, clearing the fixed header. */
export const scrollToId = (id) => {
  const el = document.getElementById(id);
  if (!el) return;
  if (window.__lenis) {
    window.__lenis.scrollTo(el, { offset: -120, duration: 1.2 });
  } else {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};

export default function LegalPage({ label, title, meta, testId = "legal-page", children }) {
  useEffect(() => {
    const prev = document.title;
    document.title = `${title} — The Source`;
    return () => {
      document.title = prev;
    };
  }, [title]);

  return (
    <main data-testid={testId} className="grain relative w-full bg-[#050505]">
      <SmoothScroll />
      <Header delay={0.2} />

      <div className="relative px-6 pb-28 pt-40 md:pb-40 md:pt-52">
        <div className="mx-auto max-w-3xl">
          <motion.header
            initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1.2, ease, delay: 0.1 }}
            className="mb-16 text-center md:mb-24"
          >
            <span className="block font-ui text-[10px] uppercase tracking-[0.4em] text-[color:var(--gold)]">
              {label}
            </span>
            <h1 className="mt-6 font-mystic text-5xl font-light leading-[1.02] tracking-tight text-white md:text-7xl">
              {title}
            </h1>
            <div
              className="mx-auto mt-10 h-px w-20"
              style={{ background: "linear-gradient(90deg, transparent, rgba(212,178,108,0.8), transparent)" }}
              aria-hidden="true"
            />
            {meta && (
              <div className="mt-7 space-y-1.5 font-ui text-xs font-light tracking-wide text-white/40">
                {meta}
              </div>
            )}
          </motion.header>

          <motion.article
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, ease, delay: 0.35 }}
            className="legal-prose"
          >
            {children}
          </motion.article>
        </div>
      </div>

      <SiteFooter />
      <MysticCursor />
    </main>
  );
}

/* ── Contents / table of contents ── */
export function Contents({ items }) {
  return (
    <nav data-testid="legal-contents" aria-label="Contents" className="glass-deep mb-16 rounded-3xl p-7 md:p-9">
      <p className="mb-6 font-ui text-[10px] uppercase tracking-[0.4em] text-white/40">Contents</p>
      <ol className="grid grid-cols-1 gap-x-10 gap-y-3 md:grid-cols-2">
        {items.map((item, i) => (
          <li key={item.id} className="flex items-baseline gap-4">
            <span className="w-6 shrink-0 font-ui text-[10px] tracking-[0.2em]" style={{ color: GOLD_SOFT }}>
              {String(i + 1).padStart(2, "0")}
            </span>
            <button
              type="button"
              data-testid={`contents-${item.id}`}
              onClick={() => scrollToId(item.id)}
              className="nav-link text-left font-mystic text-lg font-light"
            >
              {item.label}
            </button>
          </li>
        ))}
      </ol>
    </nav>
  );
}

/* ── Top-level numbered section ── */
export function Section({ id, title, children }) {
  return (
    <section id={id} className="mb-16 scroll-mt-32">
      <h2 className="mb-6 font-mystic text-3xl font-light leading-tight text-white md:text-4xl">{title}</h2>
      <div className="space-y-4 font-ui text-sm font-light leading-[1.9] text-white/60 md:text-[15px]">
        {children}
      </div>
    </section>
  );
}

/* ── Sub-heading inside a section ── */
export function SubSection({ title, children }) {
  return (
    <div className="mb-7">
      <h3 className="mb-2.5 font-mystic text-xl font-medium leading-snug text-white/90">{title}</h3>
      <div className="space-y-2.5 font-ui text-sm font-light leading-[1.9] text-white/60 md:text-[15px]">
        {children}
      </div>
    </div>
  );
}

/* ── Glass panel with a gold rule – summaries, "in brief" boxes ── */
export function Callout({ title, children }) {
  return (
    <div className="glass relative my-8 overflow-hidden rounded-2xl p-6 pl-7 md:p-7 md:pl-8">
      <span
        className="absolute inset-y-0 left-0 w-px"
        style={{ background: "linear-gradient(180deg, rgba(232,194,132,0.9), rgba(212,178,108,0.15))" }}
        aria-hidden="true"
      />
      {title && (
        <p className="mb-3 font-ui text-[10px] uppercase tracking-[0.4em] text-[color:var(--gold)]">{title}</p>
      )}
      <div className="space-y-2.5 font-ui text-[13px] font-light leading-[1.85] text-white/65">{children}</div>
    </div>
  );
}

/* ── Important legal notice – warm-tinted, deliberately louder ── */
export function Notice({ children, compact = false }) {
  return (
    <div
      className={`rounded-2xl border ${compact ? "my-6 p-5 text-[11px]" : "my-10 p-7 text-xs"} font-ui leading-[2] tracking-[0.08em]`}
      style={{
        borderColor: "rgba(232, 194, 132, 0.3)",
        background: "linear-gradient(160deg, rgba(212,178,108,0.09), rgba(212,178,108,0.02))",
        color: "#e3c58f",
      }}
    >
      {children}
    </div>
  );
}

/* ── Small "NEW" style marker between clauses ── */
export function Tag({ children }) {
  return (
    <p
      className="my-7 inline-flex items-center gap-2.5 rounded-full border px-4 py-1.5 font-ui text-[9px] uppercase tracking-[0.35em] text-[color:var(--gold)]"
      style={{ borderColor: "rgba(212, 178, 108, 0.35)" }}
    >
      <span className="h-1 w-1 rounded-full bg-[color:var(--gold)]" aria-hidden="true" />
      {children}
    </p>
  );
}

/* ── Data table ── */
export function Table({ headers, rows }) {
  return (
    <div className="my-6 overflow-x-auto rounded-2xl border border-white/10">
      <table className="w-full">
        <thead>
          <tr className="bg-white/[0.03]">
            {headers.map((header) => (
              <th
                key={header}
                className="border-b border-white/10 px-5 py-3.5 text-left font-ui text-[9px] font-normal uppercase tracking-[0.3em] text-white/40"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, idx) => (
            <tr key={idx} className="border-b border-white/[0.06] transition-colors last:border-0 hover:bg-white/[0.02]">
              {row.map((cell, cellIdx) => (
                <td
                  key={cellIdx}
                  className={`px-5 py-3.5 align-top font-ui text-[13px] font-light leading-relaxed ${
                    cellIdx === 0 ? "text-white/85" : "text-white/55"
                  }`}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/* ── Sign-off at the bottom of the document ── */
export function Colophon({ children }) {
  return (
    <footer className="mt-24 border-t border-white/10 pt-10 text-center font-ui text-[10px] uppercase leading-[2.4] tracking-[0.3em] text-white/30">
      {children}
    </footer>
  );
}
