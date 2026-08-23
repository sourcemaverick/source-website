import { motion } from "framer-motion";
import { FooterStrip } from "@/components/FooterStrip";

const scrollTo = (sel) => {
  const el = document.querySelector(sel);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
};

const links = [
  { label: "Problem", target: '[data-testid="problem-section"]' },
  { label: "The Product", target: '[data-testid="product-section"]' },
  { label: "Different", target: '[data-testid="difference-section"]' },
  { label: "Download", target: '[data-testid="download-section"]' },
];

export const Header = () => (
  <motion.header
    data-testid="site-header"
    initial={{ opacity: 0, y: -18 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 2.1, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
    className="fixed top-0 left-0 right-0 z-40 px-6 pt-6 md:px-12 md:pt-8"
  >
    <div className="glass-deep mx-auto flex max-w-6xl items-center justify-between rounded-full px-7 py-4 md:px-10">
      <a
        href="/"
        data-testid="brand-logo"
        className="flex items-baseline gap-2"
        onClick={(e) => {
          e.preventDefault();
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
      >
        <span className="font-mystic text-xl font-medium tracking-wide text-white md:text-2xl">
          The Source
        </span>
        <span className="hidden font-ui text-[9px] uppercase tracking-[0.35em] text-white/40 sm:inline">
          Find Yourself
        </span>
      </a>
      <nav className="hidden items-center gap-10 md:flex">
        {links.map((l) => (
          <button
            key={l.label}
            onClick={() => scrollTo(l.target)}
            data-testid={`nav-${l.label.toLowerCase().replace(/\s+/g, "-")}-link`}
            className="nav-link font-ui text-[10px] uppercase tracking-[0.3em]"
          >
            {l.label}
          </button>
        ))}
      </nav>
      <div className="flex items-center gap-2.5">
        <span className="pulse-dot h-1.5 w-1.5 rounded-full bg-white/80" />
        <span className="font-ui text-[9px] uppercase tracking-[0.3em] text-white/40">
          Now Open
        </span>
      </div>
    </div>
  </motion.header>
);
