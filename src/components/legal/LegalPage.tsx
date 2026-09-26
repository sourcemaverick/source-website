import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

/* ─────────────────────────────────────────────────────────────
   Shared building blocks for long-form pages (Terms, Privacy,
   Support, Delete Account). Everything here is a server
   component and leans on the design tokens in globals.css so
   these pages read as part of the same cosmic / pink / gold
   world as the landing page.
   ───────────────────────────────────────────────────────────── */

type Props = {
  /** Small gold overline above the title, e.g. "Legal" */
  label: string;
  title: string;
  /** Optional line(s) under the title – version, effective date… */
  meta?: React.ReactNode;
  children: React.ReactNode;
};

export default function LegalPage({ label, title, meta, children }: Props) {
  return (
    <>
      <Navbar />
      <main className="relative z-10 px-6 pt-36 pb-24 sm:pt-44 sm:pb-32">
        <div className="mx-auto max-w-3xl">
          <header className="mb-14 text-center sm:mb-20">
            <span className="label mb-5 block gold-text tracking-[0.3em]">{label}</span>
            <h1 className="font-serif text-4xl font-light leading-[1.1] tracking-[-0.02em] text-[var(--text-primary)] sm:text-5xl md:text-6xl">
              {title}
            </h1>
            <div
              className="mx-auto mt-8 h-px w-24"
              style={{ background: "linear-gradient(90deg, transparent, var(--gold), transparent)" }}
              aria-hidden="true"
            />
            {meta && (
              <div className="mt-6 space-y-1 text-[13px] tracking-wide text-[var(--text-muted)]">
                {meta}
              </div>
            )}
          </header>

          <article className="legal-prose">{children}</article>
        </div>
      </main>
      <Footer />
    </>
  );
}

/* ── Contents / table of contents ── */
export function Contents({ items }: { items: { id: string; label: string }[] }) {
  return (
    <nav className="glass-card mb-14 p-6 sm:p-8" aria-label="Contents">
      <p className="label mb-5">Contents</p>
      <ol className="grid grid-cols-1 gap-x-8 gap-y-2.5 md:grid-cols-2">
        {items.map((item, i) => (
          <li key={item.id} className="flex items-baseline gap-3 text-sm">
            <span className="w-6 shrink-0 font-serif text-[13px] tabular-nums text-[var(--gold)]">
              {String(i + 1).padStart(2, "0")}
            </span>
            <a
              href={`#${item.id}`}
              className="text-[var(--text-secondary)] no-underline transition-colors duration-300 hover:text-white"
            >
              {item.label}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}

/* ── Top-level numbered section ── */
export function Section({
  id,
  title,
  children,
}: {
  id?: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="mb-14 scroll-mt-32">
      <h2 className="mb-5 font-serif text-2xl font-light tracking-[-0.01em] text-[var(--text-primary)] sm:text-[28px]">
        {title}
      </h2>
      <div className="space-y-3 text-[15px] font-light leading-[1.85] text-[var(--text-secondary)]">
        {children}
      </div>
    </section>
  );
}

/* ── Sub-heading inside a section ── */
export function SubSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mb-6">
      <h3 className="mb-2 text-[15px] font-medium tracking-wide text-[var(--text-primary)]">
        {title}
      </h3>
      <div className="space-y-2 text-[15px] font-light leading-[1.85] text-[var(--text-secondary)]">
        {children}
      </div>
    </div>
  );
}

/* ── Warm panel with a gold rule – summaries, "in brief" boxes ── */
export function Callout({
  title,
  children,
}: {
  title?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="warm-panel relative my-6 overflow-hidden p-5 pl-6 sm:p-6 sm:pl-7">
      <span
        className="absolute inset-y-0 left-0 w-px"
        style={{ background: "linear-gradient(180deg, var(--gold-light), var(--gold-deep))" }}
        aria-hidden="true"
      />
      {title && (
        <p className="mb-2 text-[11px] font-medium uppercase tracking-[0.25em] gold-text">
          {title}
        </p>
      )}
      <div className="space-y-2 text-[14px] font-light leading-[1.8] text-[var(--text-secondary)]">
        {children}
      </div>
    </div>
  );
}

/* ── Important legal notice – pink-tinted, deliberately louder ── */
export function Notice({
  children,
  compact = false,
}: {
  children: React.ReactNode;
  compact?: boolean;
}) {
  return (
    <div
      className={`my-6 rounded-2xl border ${compact ? "p-4 text-[13px]" : "mb-12 p-6 text-[14px]"} font-medium leading-[1.75] tracking-wide text-[var(--pink-light)]`}
      style={{
        borderColor: "rgba(230, 83, 138, 0.28)",
        background: "linear-gradient(160deg, rgba(230,83,138,0.08), rgba(230,83,138,0.03))",
        boxShadow: "0 0 40px rgba(230, 83, 138, 0.06)",
      }}
    >
      {children}
    </div>
  );
}

/* ── Small "NEW" style marker between clauses ── */
export function Tag({ children }: { children: React.ReactNode }) {
  return (
    <p className="my-6 inline-flex items-center gap-2 rounded-full border border-[var(--border-gold)] px-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.22em] text-[var(--gold-light)]">
      <span className="h-1 w-1 rounded-full bg-[var(--gold)]" aria-hidden="true" />
      {children}
    </p>
  );
}

/* ── Data table ── */
export function Table({
  headers,
  rows,
}: {
  headers: string[];
  rows: (string | React.ReactNode)[][];
}) {
  return (
    <div className="my-5 overflow-x-auto rounded-2xl border border-[var(--border)]">
      <table className="w-full text-sm">
        <thead>
          <tr className="bg-[rgba(255,255,255,0.03)]">
            {headers.map((header) => (
              <th
                key={header}
                className="border-b border-[var(--border)] px-4 py-3 text-left text-[11px] font-medium uppercase tracking-[0.18em] text-[var(--text-muted)]"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, idx) => (
            <tr
              key={idx}
              className="border-b border-[var(--border-subtle)] transition-colors duration-300 last:border-0 hover:bg-[rgba(255,255,255,0.02)]"
            >
              {row.map((cell, cellIdx) => (
                <td
                  key={cellIdx}
                  className={`px-4 py-3 align-top font-light leading-relaxed ${cellIdx === 0 ? "text-[var(--text-primary)]" : "text-[var(--text-secondary)]"}`}
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
export function Colophon({ children }: { children: React.ReactNode }) {
  return (
    <footer className="mt-20 border-t border-[var(--border-subtle)] pt-8 text-center text-[13px] leading-[1.9] tracking-wide text-[var(--text-muted)]">
      {children}
    </footer>
  );
}
