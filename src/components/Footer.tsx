"use client";

import Image from "next/image";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative z-10 px-6">
      {/* Gradient top border */}
      <div
        className="h-px w-full"
        style={{
          background: "linear-gradient(90deg, transparent, rgba(224,90,138,0.15), transparent)",
        }}
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto py-14">
        {/* Company description */}
        <div className="text-center mb-10">
          <p className="text-sm font-light text-[var(--text-secondary)] leading-[1.8] max-w-xl mx-auto">
            Source is a US based company pioneering personality modelling using a proprietary
            machine learning based system. Interaction with avatars feel authentic and personal.
          </p>
        </div>

        {/* Social icons */}
        <div className="flex items-center justify-center gap-5 mb-10">
          <a
            href="#"
            className="w-10 h-10 rounded-full border border-[var(--border)] flex items-center justify-center text-[var(--text-muted)] hover:text-white hover:border-[var(--border-hover)] transition-all duration-300"
            aria-label="Twitter"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </a>
          <a
            href="#"
            className="w-10 h-10 rounded-full border border-[var(--border)] flex items-center justify-center text-[var(--text-muted)] hover:text-white hover:border-[var(--border-hover)] transition-all duration-300"
            aria-label="Instagram"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
            </svg>
          </a>
          <a
            href="#"
            className="w-10 h-10 rounded-full border border-[var(--border)] flex items-center justify-center text-[var(--text-muted)] hover:text-white hover:border-[var(--border-hover)] transition-all duration-300"
            aria-label="LinkedIn"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect x="2" y="9" width="4" height="12" />
              <circle cx="4" cy="4" r="2" />
            </svg>
          </a>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-[var(--border-subtle)]">
          <a href="#" className="flex items-center gap-3 group">
            <Image
              src="/source_logo.png"
              alt="Source"
              width={24}
              height={24}
              className="opacity-60 group-hover:opacity-100 transition-all duration-300"
            />
            <span className="text-sm font-light text-[var(--text-secondary)] group-hover:text-white transition-colors duration-300">
              Source
            </span>
          </a>

          <div className="flex items-center gap-4">
            <span className="text-[10px] font-mono text-[var(--text-muted)] tracking-wider">
              &copy; {new Date().getFullYear()} Source
            </span>
            <button
              onClick={scrollToTop}
              className="w-8 h-8 rounded-full border border-[var(--border)] flex items-center justify-center text-[var(--text-muted)] hover:text-white hover:border-[var(--border-hover)] hover:-translate-y-0.5 transition-all duration-300"
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
