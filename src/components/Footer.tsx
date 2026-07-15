"use client";

import Image from "next/image";

const legalLinks = [
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
  { label: "Support", href: "/support" },
];

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="relative z-10 px-6">
      <div
        className="h-px w-full"
        style={{ background: "linear-gradient(90deg, transparent, rgba(203,168,118,0.18), transparent)" }}
        aria-hidden="true"
      />

      <div className="max-w-5xl mx-auto py-14">
        <div className="text-center mb-10">
          <p className="mx-auto max-w-xl text-sm font-light leading-[1.85] text-[var(--text-secondary)]">
            Source brings the presence and wisdom of a spiritual master to life — helping people
            quiet the mind, dissolve the layers they carry, and live a more conscious life.
          </p>
        </div>

        {/* Legal + social */}
        <div className="mb-10 flex flex-wrap items-center justify-center gap-x-7 gap-y-3">
          {legalLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-xs uppercase tracking-[0.2em] text-[var(--text-muted)] transition-colors duration-300 hover:text-white"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex items-center justify-center gap-5 mb-10">
          {[
            { label: "Twitter", path: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" },
          ].map((s) => (
            <a
              key={s.label}
              href="#"
              aria-label={s.label}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] text-[var(--text-muted)] transition-all duration-300 hover:border-[var(--border-gold)] hover:text-white"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d={s.path} />
              </svg>
            </a>
          ))}
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-[var(--border-subtle)] pt-6 sm:flex-row">
          <a href="#" className="group flex items-center gap-2.5">
            <Image src="/source_logo.png" alt="Source" width={24} height={24} className="opacity-70 transition-all duration-300 group-hover:opacity-100" />
            <span className="font-serif text-[15px] text-[var(--text-secondary)] transition-colors duration-300 group-hover:text-white">
              Source
            </span>
          </a>

          <div className="flex items-center gap-4">
            <span className="text-[11px] tracking-wider text-[var(--text-muted)]">
              &copy; {new Date().getFullYear()} Source
            </span>
            <button
              onClick={scrollToTop}
              className="flex h-8 w-8 items-center justify-center rounded-full border border-[var(--border)] text-[var(--text-muted)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--border-gold)] hover:text-white"
              aria-label="Back to top"
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="18 15 12 9 6 15" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
