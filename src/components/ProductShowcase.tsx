"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/animations";
import { conversationPreview } from "@/lib/constants";

const appFeatures = [
  {
    title: "A versatile library of great minds",
    description: "Avatars from many different fields and areas — all in one place, all knowing you.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="7" rx="1.5" />
        <rect x="14" y="3" width="7" height="7" rx="1.5" />
        <rect x="3" y="14" width="7" height="7" rx="1.5" />
        <rect x="14" y="14" width="7" height="7" rx="1.5" />
      </svg>
    ),
  },
  {
    title: "Advanced personality modelling",
    description: "Our proprietary technology gives you a highly intimate experience with every avatar you interact with.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a4 4 0 0 1 4 4c0 1.1-.9 2-2 2h-4c-1.1 0-2-.9-2-2a4 4 0 0 1 4-4z" />
        <path d="M8 8v2c0 4.4 3.6 8 8 8" />
        <path d="M16 8v2c0 4.4-3.6 8-8 8" />
        <path d="M12 18v4" />
      </svg>
    ),
  },
  {
    title: "Immersive conversations",
    description: "Voice, expressions, and presence — not a chatbot. A real, intimate conversation experience.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" />
        <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
        <line x1="12" y1="19" x2="12" y2="23" />
        <line x1="8" y1="23" x2="16" y2="23" />
      </svg>
    ),
  },
];

const detailedConversation = [
  {
    sender: "gururaj" as const,
    text: "I\u2019m glad you\u2019re here. Before we begin, I want you to know \u2014 there\u2019s no rush. Whatever is on your heart, we have time for it.",
  },
  {
    sender: "user" as const,
    text: "I\u2019ve been struggling with patience lately. Especially with my father.",
  },
  {
    sender: "gururaj" as const,
    text: "You\u2019ve told me about your frustration with your father. But listening to you, I don\u2019t hear anger \u2014 I hear a deep love that doesn\u2019t know how to express itself.",
  },
  {
    sender: "user" as const,
    text: "I never thought of it that way.",
  },
  {
    sender: "gururaj" as const,
    text: "Tomorrow, when your father says something that triggers you, I want you to count to three before responding. Just three seconds. Can you do that for me?",
  },
];

export default function TheApp() {
  return (
    <section id="app" className="relative z-10 py-28 sm:py-36 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-20 sm:mb-24"
        >
          <span className="label mb-5 block tracking-[0.3em] text-[var(--accent)]">The App</span>
          <h2 className="text-3xl sm:text-4xl md:text-[3.5rem] font-extralight tracking-[-0.03em] leading-tight mb-6">
            A mobile platform for{" "}
            <span className="gradient-text font-light">great minds</span>
          </h2>
          <p className="text-[var(--text-secondary)] font-light text-base sm:text-lg max-w-2xl mx-auto leading-[1.7]">
            Source is a mobile app platform that has avatars from many different fields and areas.
            A versatile library of great minds that all know you.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left: Feature cards */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="flex flex-col gap-4"
          >
            {appFeatures.map((f) => (
              <motion.div
                key={f.title}
                variants={fadeUp}
                className="group"
              >
                <div className="glass-card p-7 sm:p-8 flex gap-5">
                  <div className="shrink-0 w-11 h-11 rounded-xl border border-[var(--border)] bg-[var(--bg-base)] flex items-center justify-center text-[var(--accent)] group-hover:border-[var(--border-hover)] group-hover:shadow-[0_0_20px_var(--accent-glow)] transition-all duration-500">
                    {f.icon}
                  </div>
                  <div>
                    <h3 className="text-[15px] font-medium tracking-tight mb-2 group-hover:text-white transition-colors duration-300">
                      {f.title}
                    </h3>
                    <p className="text-sm text-[var(--text-secondary)] font-light leading-[1.7]">
                      {f.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Right: Conversation mockup */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="lg:sticky lg:top-28"
          >
            <div className="relative">
              <div className="absolute -inset-12 rounded-3xl bg-[var(--accent)] blur-[80px] opacity-[0.06]" />
              <div className="absolute -inset-6 rounded-3xl bg-[var(--accent-deep)] blur-[40px] opacity-[0.04]" />

              <div
                className="relative glass-card !rounded-2xl overflow-hidden"
                style={{
                  boxShadow: "0 0 0 1px rgba(255,255,255,0.06), 0 40px 100px rgba(0,0,0,0.5), 0 0 60px rgba(224,90,138,0.04)",
                }}
              >
                {/* Header */}
                <div className="flex items-center gap-3 px-5 py-4 border-b border-[rgba(255,255,255,0.06)] bg-[rgba(255,255,255,0.015)]">
                  <div className="relative w-10 h-10 rounded-full overflow-hidden ring-2 ring-[rgba(224,90,138,0.15)]">
                    <Image src="/avatars/gururaj.png" alt="Gururaj" fill className="object-cover object-top" sizes="40px" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-[var(--text-primary)]">Gururaj</p>
                    <p className="text-[9px] font-mono text-[var(--accent)] uppercase tracking-wider">
                      Walk With Me &middot; Day 4
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex items-end gap-[2px] h-3">
                      {[0, 0.2, 0.4].map((delay, i) => (
                        <div
                          key={i}
                          className="w-[2px] bg-[var(--accent)] rounded-full origin-bottom opacity-50"
                          style={{
                            height: [8, 12, 10][i],
                            animation: `waveform 1.2s ease-in-out ${delay}s infinite`,
                          }}
                        />
                      ))}
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--accent)] opacity-75" />
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--accent)]" />
                      </span>
                      <span className="text-[9px] font-mono text-[var(--accent)] uppercase tracking-wider">Live</span>
                    </div>
                  </div>
                </div>

                {/* Messages */}
                <div className="px-5 py-5 flex flex-col gap-3.5 max-h-[500px] overflow-hidden">
                  {detailedConversation.map((msg, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 16, scale: 0.97 }}
                      whileInView={{ opacity: 1, y: 0, scale: 1 }}
                      viewport={{ once: true, margin: "-20px" }}
                      transition={{
                        delay: i * 0.12,
                        duration: 0.6,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
                    >
                      <div
                        className={`max-w-[85%] px-4 py-3 rounded-2xl text-[13px] font-light leading-[1.7] ${
                          msg.sender === "user"
                            ? "bg-[rgba(255,255,255,0.05)] text-[var(--text-primary)] rounded-br-md"
                            : "bg-[rgba(224,90,138,0.05)] text-[var(--text-primary)] rounded-bl-md border border-[rgba(224,90,138,0.08)]"
                        }`}
                      >
                        {msg.text}
                      </div>
                    </motion.div>
                  ))}

                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.7, duration: 0.4 }}
                    className="flex justify-start"
                  >
                    <div className="flex items-center gap-1.5 px-4 py-3 rounded-2xl rounded-bl-md bg-[rgba(224,90,138,0.05)] border border-[rgba(224,90,138,0.08)]">
                      <span className="typing-dot" />
                      <span className="typing-dot" />
                      <span className="typing-dot" />
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
