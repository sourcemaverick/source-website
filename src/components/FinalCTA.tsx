"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { viewportOnce } from "@/lib/animations";

export default function FinalCTA() {
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
    <section id="waitlist" className="relative z-10 px-6 py-32 sm:py-44">
      <div
        className="absolute left-1/2 top-1/2 -z-10 h-[480px] w-[720px] max-w-full -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(203,168,118,0.12), transparent 66%)",
          filter: "blur(80px)",
        }}
        aria-hidden="true"
      />

      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={viewportOnce}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="relative mx-auto max-w-2xl text-center"
      >
        <h2 className="font-serif font-semibold text-[clamp(2rem,4.5vw,3.2rem)] leading-[1.15] gold-text">
          Begin the journey back to yourself
        </h2>
        <p className="mx-auto mt-6 max-w-xl font-serif italic text-[var(--text-secondary)] text-base sm:text-lg leading-[1.7]">
          Walk with a spiritual master and discover the clarity, purpose, and peace that
          emerge when the noise begins to settle.
        </p>

        <div className="mt-11">
          {!submitted ? (
            <form
              onSubmit={handleSubmit}
              className="mx-auto flex max-w-md flex-col items-center gap-3 sm:flex-row"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                required
                aria-label="Email address"
                className="w-full flex-1 rounded-full border border-[var(--border)] bg-[rgba(255,255,255,0.03)] px-6 py-4 text-sm font-light text-white placeholder:text-[var(--text-disabled)] transition-all duration-500 focus:border-[var(--border-gold)] focus:bg-[rgba(255,255,255,0.05)] focus:shadow-[0_0_30px_var(--gold-glow)] focus:outline-none"
              />
              <button
                type="submit"
                className="btn-gold btn-shine w-full shrink-0 rounded-full px-9 py-4 text-sm sm:w-auto"
              >
                Join the Waitlist
              </button>
            </form>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="inline-flex items-center gap-3 rounded-full border border-[var(--border-gold)] bg-[rgba(203,168,118,0.08)] px-8 py-4"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="2.5">
                <polyline points="20 6 9 17 4 12" />
              </svg>
              <span className="text-sm font-light">
                You&rsquo;re on the list. We&rsquo;ll be in touch.
              </span>
            </motion.div>
          )}
          <p className="mt-6 text-[11px] tracking-wider text-[var(--text-muted)]">
            Source is in closed beta. No spam — only updates about the app.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
