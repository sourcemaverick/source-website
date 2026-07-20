"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { viewportOnce } from "@/lib/animations";
import WaitlistCount from "./WaitlistCount";

export default function FinalCTA() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!name.trim() || !email.trim()) {
      setError("Name and email are required");
      return;
    }

    setLoading(true);
    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          message: message.trim(),
        }),
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error || "Failed to join waitlist");
      }

      setSubmitted(true);
      setName("");
      setEmail("");
      setMessage("");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setLoading(false);
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
        <div className="mb-12 sm:mb-16">
          <WaitlistCount />
        </div>

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
              className="mx-auto w-full max-w-md space-y-3"
            >
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name"
                required
                aria-label="Full name"
                className="w-full rounded-full border border-[var(--border)] bg-[rgba(255,255,255,0.03)] px-6 py-4 text-sm font-light text-white placeholder:text-[var(--text-disabled)] transition-all duration-500 focus:border-[var(--border-gold)] focus:bg-[rgba(255,255,255,0.05)] focus:shadow-[0_0_30px_var(--gold-glow)] focus:outline-none"
              />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                required
                aria-label="Email address"
                className="w-full rounded-full border border-[var(--border)] bg-[rgba(255,255,255,0.03)] px-6 py-4 text-sm font-light text-white placeholder:text-[var(--text-disabled)] transition-all duration-500 focus:border-[var(--border-gold)] focus:bg-[rgba(255,255,255,0.05)] focus:shadow-[0_0_30px_var(--gold-glow)] focus:outline-none"
              />
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Any message for us? (optional)"
                aria-label="Message"
                rows={3}
                className="w-full rounded-2xl border border-[var(--border)] bg-[rgba(255,255,255,0.03)] px-6 py-4 text-sm font-light text-white placeholder:text-[var(--text-disabled)] transition-all duration-500 focus:border-[var(--border-gold)] focus:bg-[rgba(255,255,255,0.05)] focus:shadow-[0_0_30px_var(--gold-glow)] focus:outline-none resize-none"
              />
              {error && (
                <motion.p
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-xs text-[var(--pink)] font-light"
                >
                  {error}
                </motion.p>
              )}
              <button
                type="submit"
                disabled={loading}
                className="btn-gold btn-shine w-full rounded-full px-9 py-4 text-sm font-medium transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? "Joining..." : "Join the Waitlist"}
              </button>
            </form>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="mx-auto max-w-md rounded-2xl border border-[var(--border-gold)] bg-[rgba(203,168,118,0.08)] px-8 py-6 text-center"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="2.5" className="mx-auto mb-3">
                <polyline points="20 6 9 17 4 12" />
              </svg>
              <p className="text-sm font-light">
                Thank you! You&rsquo;re on the list.
              </p>
              <p className="mt-2 text-xs text-[var(--text-secondary)]">
                We&rsquo;ll be in touch with updates about Source.
              </p>
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
