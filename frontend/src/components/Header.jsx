import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { label: "About", target: '[data-testid="problem-section"]' },
  { label: "Contact", target: '[data-testid="contact-section"]' },
];

const downloadLink = { label: "Download", target: '[data-testid="download-section"]' };

const scrollTo = (sel) => {
  const el = document.querySelector(sel);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
};

export const Header = () => {
  const [open, setOpen] = useState(false);

  // Lock scroll while menu is open
  useEffect(() => {
    if (open) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [open]);

  const go = (target) => () => {
    setOpen(false);
    // Wait for the overlay to unlock scroll before scrolling
    setTimeout(() => scrollTo(target), 60);
  };

  return (
    <>
      <motion.header
        data-testid="site-header"
        initial={{ opacity: 0, y: -18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.1, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-0 left-0 right-0 z-40 px-4 pt-4 md:px-12 md:pt-8"
      >
        <div className="glass-deep mx-auto flex max-w-6xl items-center justify-between rounded-full px-5 py-3.5 md:px-10 md:py-4">
          <a
            href="/"
            data-testid="brand-logo"
            className="flex items-baseline gap-2"
            onClick={(e) => {
              e.preventDefault();
              setOpen(false);
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            <span className="font-mystic text-lg font-medium tracking-wide text-white md:text-2xl">
              The Source
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-8 md:flex">
            {links.map((l) => (
              <button
                key={l.label}
                onClick={go(l.target)}
                data-testid={`nav-${l.label.toLowerCase().replace(/\s+/g, "-")}-link`}
                className="nav-link font-ui text-[10px] uppercase tracking-[0.3em]"
              >
                {l.label}
              </button>
            ))}
            <button
              onClick={go(downloadLink.target)}
              data-testid="nav-download-cta"
              className="nav-download-cta font-ui text-[10px] uppercase tracking-[0.3em]"
            >
              {downloadLink.label}
            </button>
          </nav>

          {/* Desktop status */}
          <div className="hidden items-center gap-2.5 md:hidden">
            <span className="pulse-dot h-1.5 w-1.5 rounded-full bg-white/80" />
            <span className="font-ui text-[9px] uppercase tracking-[0.3em] text-white/40">
              Now Open
            </span>
          </div>

          {/* Mobile right-side actions: sticky Download + hamburger */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              type="button"
              data-testid="mobile-download-cta"
              onClick={go(downloadLink.target)}
              className="nav-download-cta nav-download-cta--compact font-ui text-[9px] uppercase tracking-[0.3em]"
            >
              Download
            </button>

            <button
              type="button"
              data-testid="mobile-menu-toggle"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              className="relative flex h-9 w-9 items-center justify-center text-white/80"
            >
              <AnimatePresence mode="wait" initial={false}>
                {open ? (
                  <motion.span
                    key="x"
                    initial={{ opacity: 0, rotate: -45 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: 45 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <X className="h-5 w-5" strokeWidth={1.2} />
                  </motion.span>
                ) : (
                  <motion.span
                    key="m"
                    initial={{ opacity: 0, rotate: 45 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: -45 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <Menu className="h-5 w-5" strokeWidth={1.2} />
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </motion.header>

      {/* Full-screen mobile overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            data-testid="mobile-menu-overlay"
            key="overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[35] md:hidden"
            style={{
              background:
                "radial-gradient(ellipse at top, rgba(24,18,10,0.85) 0%, rgba(5,5,5,0.98) 60%, rgba(5,5,5,1) 100%)",
              backdropFilter: "blur(28px) saturate(140%)",
              WebkitBackdropFilter: "blur(28px) saturate(140%)",
            }}
          >
            <nav className="relative flex h-full flex-col items-start justify-center gap-6 px-8 pt-24">
              {[...links, downloadLink].map((l, i) => (
                <motion.button
                  key={l.label}
                  data-testid={`mobile-nav-${l.label.toLowerCase().replace(/\s+/g, "-")}-link`}
                  onClick={go(l.target)}
                  initial={{ opacity: 0, x: -24 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -12 }}
                  transition={{
                    duration: 0.8,
                    delay: 0.15 + i * 0.08,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="group flex items-baseline gap-4 text-left"
                >
                  <span
                    className="font-ui text-[10px] uppercase tracking-[0.35em]"
                    style={{ color: "rgba(212, 178, 108, 0.7)" }}
                  >
                    0{i + 1}
                  </span>
                  <span className="font-mystic text-4xl font-light italic leading-none text-white/90 transition-colors group-hover:text-white sm:text-5xl">
                    {l.label}
                  </span>
                </motion.button>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                className="mt-auto flex w-full items-center gap-3 pb-10 pt-16"
              >
                <span className="pulse-dot h-1.5 w-1.5 rounded-full bg-white/80" />
                <span className="font-ui text-[9px] uppercase tracking-[0.3em] text-white/45">
                  Now Open
                </span>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
