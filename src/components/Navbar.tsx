"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { navLinks } from "@/lib/constants";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <a
        href="#belong"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[60] focus:px-4 focus:py-2 focus:bg-[var(--pink)] focus:text-white focus:rounded-lg"
      >
        Skip to content
      </a>

      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 bg-[#08060b] border-b border-[rgba(255,255,255,0.08)] transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          scrolled ? "shadow-[0_1px_40px_rgba(0,0,0,0.6)]" : ""
        }`}
      >
        <div
          className={`max-w-7xl mx-auto flex items-center justify-between px-6 transition-all duration-700 ${
            scrolled ? "py-3.5" : "py-5"
          }`}
        >
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5 group relative">
            <div className="relative">
              <Image
                src="/source_logo.png"
                alt="Source"
                width={30}
                height={30}
                className="transition-all duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 rounded-full bg-[var(--pink)] opacity-0 group-hover:opacity-25 blur-lg transition-opacity duration-500" />
            </div>
            <span className="text-[19px] font-serif tracking-[0.01em] text-[var(--text-primary)]">
              Source
            </span>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative text-[12px] font-medium uppercase tracking-[0.16em] text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors duration-300 px-4 py-2 rounded-full hover:bg-[rgba(255,255,255,0.04)]"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#waitlist"
              className="btn-gold btn-shine ml-3 text-[12px] px-6 py-2.5 rounded-full"
            >
              Join the Waitlist
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2 -mr-2"
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            <motion.span
              animate={mobileOpen ? { rotate: 45, y: 4 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="w-5 h-px bg-white/70 block"
            />
            <motion.span
              animate={mobileOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.2 }}
              className="w-5 h-px bg-white/70 block"
            />
            <motion.span
              animate={mobileOpen ? { rotate: -45, y: -4 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="w-5 h-px bg-white/70 block"
            />
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 bg-[rgba(10,7,13,0.98)] backdrop-blur-3xl md:hidden flex flex-col items-center justify-center gap-2"
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ delay: 0.05 + i * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="text-3xl font-serif text-[var(--text-secondary)] hover:text-white transition-colors py-3"
              >
                {link.label}
              </motion.a>
            ))}
            <motion.a
              href="#waitlist"
              onClick={() => setMobileOpen(false)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ delay: 0.35, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="btn-gold mt-6 text-sm px-10 py-4 rounded-full"
            >
              Join the Waitlist
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
