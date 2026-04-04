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
      <a href="#how-it-works" className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[60] focus:px-4 focus:py-2 focus:bg-[var(--accent)] focus:text-white focus:rounded-lg">
        Skip to content
      </a>

      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          scrolled
            ? "bg-[rgba(10,10,10,0.7)] backdrop-blur-2xl border-b border-[rgba(255,255,255,0.06)] shadow-[0_1px_40px_rgba(0,0,0,0.3)]"
            : "bg-transparent"
        }`}
      >
        <div className={`max-w-7xl mx-auto flex items-center justify-between px-6 transition-all duration-700 ${scrolled ? "py-3.5" : "py-5"}`}>
          {/* Logo — scales down on scroll */}
          <a href="#" className="flex items-center gap-3 group relative">
            <div className="relative">
              <Image
                src="/source_logo.png"
                alt="Source"
                width={28}
                height={28}
                className="transition-all duration-500 group-hover:scale-110"
              />
              {/* Subtle glow on hover */}
              <div className="absolute inset-0 rounded-full bg-[var(--accent)] opacity-0 group-hover:opacity-20 blur-lg transition-opacity duration-500" />
            </div>
            <span className="text-[15px] font-light tracking-[-0.01em] text-[var(--text-primary)]">Source</span>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative text-[11px] font-mono uppercase tracking-[0.14em] text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors duration-400 px-4 py-2 rounded-full hover:bg-[rgba(255,255,255,0.04)]"
              >
                {link.label}
              </a>
            ))}
            <div className="w-px h-4 bg-[var(--border)] mx-3" />
            <a
              href="#waitlist"
              className="relative text-[11px] font-medium px-6 py-2.5 rounded-full bg-white/[0.08] border border-white/[0.1] text-white transition-all duration-500 hover:bg-white/[0.14] hover:border-[var(--border-hover)] hover:shadow-[0_0_30px_var(--accent-glow)] active:scale-[0.97]"
            >
              Join Waitlist
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

      {/* Mobile menu — full screen with staggered links */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 bg-[rgba(10,10,10,0.98)] backdrop-blur-3xl md:hidden flex flex-col items-center justify-center gap-2"
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
                className="text-2xl font-extralight text-[var(--text-secondary)] hover:text-white transition-colors py-3 tracking-[-0.02em]"
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
              className="mt-6 text-sm font-medium px-10 py-4 rounded-full bg-gradient-to-r from-[var(--accent)] to-[var(--accent-deep)] text-white"
            >
              Join Waitlist
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
