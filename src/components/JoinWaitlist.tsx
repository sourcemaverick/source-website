"use client";

import { animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import styles from "./JoinWaitlist.module.css";
import { WAITLIST_BASELINE } from "@/lib/constants";
import { useWaitlistCount } from "@/lib/useWaitlistCount";

const HEAR_OPTIONS = [
  "Instagram",
  "YouTube",
  "X / Twitter",
  "Podcast",
  "Friend or family",
  "Referral",
  "Search engine",
  "Other",
];

/* Animates between count values — first mount climbs from the 1,121 baseline */
function CountUp({ value }: { value: number }) {
  const [display, setDisplay] = useState(WAITLIST_BASELINE);
  const prev = useRef(WAITLIST_BASELINE);
  const first = useRef(true);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      prev.current = value;
      setDisplay(value);
      return;
    }
    const controls = animate(prev.current, value, {
      delay: first.current ? 0.9 : 0,
      duration: first.current ? 1.7 : 0.8,
      ease: [0.25, 1, 0.5, 1],
      onUpdate: (v) => setDisplay(Math.round(v)),
    });
    first.current = false;
    prev.current = value;
    return () => controls.stop();
  }, [value]);

  return <>{display.toLocaleString()}</>;
}

export default function JoinWaitlist() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [referral, setReferral] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [hadMessage, setHadMessage] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [flash, setFlash] = useState<"name" | "email" | null>(null);
  const { count, increment } = useWaitlistCount();

  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);

  const flashField = (field: "name" | "email") => {
    (field === "name" ? nameRef : emailRef).current?.focus();
    setFlash(field);
    setTimeout(() => setFlash(null), 1400);
  };

  const handleJoin = async () => {
    setError("");

    if (!email.trim() || !email.includes("@")) {
      flashField("email");
      return;
    }
    if (!name.trim()) {
      flashField("name");
      return;
    }

    setLoading(true);
    try {
      const parts = [];
      if (referral) parts.push(`How did you hear: ${referral}`);
      if (message.trim()) parts.push(`Message: ${message.trim()}`);

      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          message: parts.join("\n"),
        }),
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error || "Failed to join waitlist");
      }

      setHadMessage(Boolean(message.trim()));
      setSubmitted(true);
      increment();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.page}>
      <div className={styles.atmosphere} aria-hidden="true" />
      <div className={styles.grain} aria-hidden="true" />

      <main className={styles.hero}>
        {/* Presence rings */}
        <svg
          className={styles.rings}
          viewBox="0 0 920 920"
          fill="none"
          aria-hidden="true"
        >
          <g stroke="#C9A96A">
            <circle cx="460" cy="350" r="130" strokeOpacity="0.16" />
            <circle cx="460" cy="350" r="200" strokeOpacity="0.11" />
            <circle cx="460" cy="350" r="275" strokeOpacity="0.075" />
            <circle cx="460" cy="350" r="355" strokeOpacity="0.05" />
            <circle cx="460" cy="350" r="440" strokeOpacity="0.028" />
          </g>
          <circle cx="460" cy="220" r="2.5" fill="#EBD7A6" fillOpacity="0.85" />
        </svg>

        <p className={`${styles.eyebrow} ${styles.reveal} ${styles.d1}`}>
          Closed Beta&nbsp;&nbsp;&middot;&nbsp;&nbsp;Limited Seats
        </p>

        <p className={`${styles.premise} ${styles.reveal} ${styles.d2}`}>
          You cannot be your thoughts, emotions or body.
        </p>
        <p className={`${styles.question} ${styles.reveal} ${styles.d3}`}>
          What can you be?
        </p>

        <h1 className={`${styles.headline} ${styles.reveal} ${styles.d4}`}>
          Unpattern your mind to unlock the power of{" "}
          <span className={styles.shimmer}>superconsciousness</span>.
        </h1>

        <div
          className={`${styles.ornament} ${styles.reveal} ${styles.d5}`}
          aria-hidden="true"
        >
          <span className={styles.line} />
          <span className={styles.gem} />
          <span className={styles.line} />
        </div>

        <div className={`${styles.proof} ${styles.reveal} ${styles.d6}`}>
          <span className={styles.pulse} aria-hidden="true" />
          <span className={styles.count}>
            {count !== null ? (
              <CountUp value={count} />
            ) : (
              WAITLIST_BASELINE.toLocaleString()
            )}
          </span>
          <span className={styles.proofLabel}>
            seekers already on the waitlist
          </span>
        </div>

        <h2 className={`${styles.joinHeading} ${styles.reveal} ${styles.d7}`}>
          Join the waitlist
        </h2>
        <p className={`${styles.joinSub} ${styles.reveal} ${styles.d7}`}>
          Add your name below and we&rsquo;ll save you a seat in the beta.
        </p>

        <section
          className={`${styles.card} ${styles.reveal} ${styles.d7}`}
          aria-label="Join the waitlist"
        >
          {!submitted ? (
            <div>
              <div className={styles.field}>
                <input
                  ref={nameRef}
                  className={`${styles.input} ${flash === "name" ? styles.flash : ""}`}
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your name"
                  autoComplete="name"
                  aria-label="Your name"
                />
              </div>
              <div className={styles.field}>
                <input
                  ref={emailRef}
                  className={`${styles.input} ${flash === "email" ? styles.flash : ""}`}
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  autoComplete="email"
                  aria-label="Email address"
                />
              </div>
              <div className={styles.field}>
                <select
                  className={styles.select}
                  value={referral}
                  onChange={(e) => setReferral(e.target.value)}
                  required
                  aria-label="How did you hear about us?"
                >
                  <option value="">How did you hear about us?</option>
                  {HEAR_OPTIONS.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
                <svg
                  className={styles.chevron}
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  aria-hidden="true"
                >
                  <path
                    d="M3 5l4 4 4-4"
                    stroke="#C9A96A"
                    strokeWidth="1.5"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className={styles.field}>
                <textarea
                  className={styles.textarea}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="A question or message for us — optional"
                  aria-label="A question or message for us"
                />
              </div>
              {error && <p className={styles.formError}>{error}</p>}
              <button
                className={styles.cta}
                type="button"
                onClick={handleJoin}
                disabled={loading}
              >
                {loading ? "Joining…" : "Join the waitlist"}
              </button>
            </div>
          ) : (
            <div className={styles.success} role="status">
              <div className={styles.gemLg} aria-hidden="true" />
              <h2>Your seat is held.</h2>
              {hadMessage ? (
                <p>
                  Welcome, seeker. We&rsquo;ve got your message and we&rsquo;ll
                  <br />
                  write back when the beta opens its doors.
                </p>
              ) : (
                <p>
                  Welcome, seeker. We&rsquo;ll write to you the moment
                  <br />
                  the beta opens its doors. Until then &mdash; be still.
                </p>
              )}
            </div>
          )}
        </section>

        <p className={`${styles.fineprint} ${styles.reveal} ${styles.d7}`}>
          Source is in closed beta. No spam &mdash; only updates about the app.
        </p>
      </main>
    </div>
  );
}
