import { motion } from "framer-motion";

const links = ["Method", "Sessions", "Contact"];

export const Header = () => (
  <motion.header
    data-testid="site-header"
    initial={{ opacity: 0, y: -18 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 2.1, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
    className="absolute top-0 left-0 right-0 z-30 px-6 pt-6 md:px-12 md:pt-8"
  >
    <div className="glass-deep mx-auto flex max-w-6xl items-center justify-between rounded-full px-7 py-4 md:px-10">
      <a href="/" data-testid="brand-logo" className="flex items-baseline gap-2">
        <span className="font-mystic text-xl font-medium tracking-wide text-white md:text-2xl">
          The Source
        </span>
        <span className="hidden font-ui text-[9px] uppercase tracking-[0.35em] text-white/40 sm:inline">
          Find Yourself
        </span>
      </a>
      <nav className="hidden items-center gap-10 md:flex">
        {links.map((l) => (
          <a
            key={l}
            href="/"
            data-testid={`nav-${l.toLowerCase()}-link`}
            className="nav-link font-ui text-[10px] uppercase tracking-[0.3em]"
          >
            {l}
          </a>
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
