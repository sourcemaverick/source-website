"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { viewportOnce } from "@/lib/animations";

export default function Waitlist() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail("");
    }
  };

  return (
    <section id="waitlist" className="relative z-10 py-36 sm:py-48 px-6">
      {/* Glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(224,90,138,0.08), transparent 65%)",
          filter: "blur(80px)",
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="label mb-6 block tracking-[0.3em] text-[var(--accent)]">Early Access</span>
          <h2 className="text-3xl sm:text-4xl md:text-[3.5rem] font-extralight tracking-[-0.03em] mb-7 leading-tight">
            Join the <span className="gradient-text font-light">waitlist</span>
          </h2>
          <p className="text-[var(--text-secondary)] font-light max-w-lg mx-auto text-base sm:text-lg leading-[1.7] mb-4">
            Source app is currently in closed beta. Please sign up to be one of the first
            to try the platform before public launch.
          </p>
          <p className="text-xs font-mono text-[var(--text-muted)] tracking-wider mb-10">
            We don&apos;t send promotional email &mdash; only updates about the app.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ delay: 0.15, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          {!submitted ? (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row items-center gap-3 max-w-md mx-auto"
            >
              <div className="relative w-full flex-1 group">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  required
                  className="w-full px-6 py-4 rounded-full bg-[rgba(255,255,255,0.03)] border border-[var(--border)] text-sm font-light text-white placeholder:text-[var(--text-disabled)] focus:outline-none focus:border-[var(--border-hover)] focus:shadow-[0_0_30px_var(--accent-glow)] focus:bg-[rgba(255,255,255,0.04)] transition-all duration-500"
                />
                <div className="absolute inset-0 rounded-full bg-[var(--accent)] opacity-0 group-focus-within:opacity-[0.03] blur-xl transition-opacity duration-500 pointer-events-none" />
              </div>
              <button
                type="submit"
                className="btn-shine w-full sm:w-auto px-10 py-4 rounded-full bg-gradient-to-r from-[var(--accent)] to-[var(--accent-deep)] text-white font-medium text-sm transition-all duration-500 hover:shadow-[0_0_50px_var(--accent-glow)] hover:brightness-110 active:scale-[0.97] shrink-0"
              >
                Join Waitlist
              </button>
            </form>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full border border-[rgba(224,90,138,0.2)] bg-[rgba(224,90,138,0.05)]"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2.5">
                <polyline points="20 6 9 17 4 12" />
              </svg>
              <span className="text-sm font-light">
                You&apos;re on the list. We&apos;ll be in touch.
              </span>
            </motion.div>
          )}

          <p className="text-[10px] font-mono text-[var(--text-disabled)] mt-6 tracking-wider">
            No spam. Only app updates.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
