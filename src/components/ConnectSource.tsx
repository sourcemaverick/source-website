"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import Image from "next/image";
import {
  appScreens,
  teachingChapters,
  meditations,
  historySessions,
  type AppScreen,
} from "@/lib/constants";
import { viewportOnce } from "@/lib/animations";

/* ─────────── Shared chrome ─────────── */

const TABS = [
  { key: "home", label: "Home", icon: HomeIcon },
  { key: "teachings", label: "Teachings", icon: BookIcon },
  { key: "meditate", label: "Meditate", icon: LotusIcon },
  { key: "history", label: "History", icon: ChatIcon },
  { key: "journey", label: "Journey", icon: SproutIcon },
];

function TopBar() {
  return (
    <div className="flex items-center justify-between px-4 pt-4 pb-3">
      <div className="flex items-center gap-1.5">
        <Image src="/source_logo.png" alt="" width={16} height={16} />
        <span className="font-serif text-[13px] text-white/90">source</span>
      </div>
      <div className="flex items-center gap-2.5">
        <div className="relative">
          <BellIcon />
          <span className="absolute -top-1 -right-1 h-2 w-2 rounded-full bg-[var(--pink)]" />
        </div>
        <div
          className="h-6 w-6 rounded-full"
          style={{ background: "linear-gradient(135deg,#f0913f,#e6538a 55%,#6a4a9a)" }}
        />
      </div>
    </div>
  );
}

function TabBar({ active }: { active: string }) {
  return (
    <div className="mt-auto grid grid-cols-5 border-t border-white/8 bg-black/30 px-1 pt-2 pb-3">
      {TABS.map((t) => {
        const on = t.key === active;
        const Icon = t.icon;
        return (
          <div key={t.key} className="flex flex-col items-center gap-1">
            <div className={on ? "text-[var(--gold-light)]" : "text-white/35"}>
              <Icon />
            </div>
            <span
              className={`text-[8px] ${on ? "text-[var(--gold-light)]" : "text-white/35"}`}
            >
              {t.label}
            </span>
          </div>
        );
      })}
    </div>
  );
}

function PhoneFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative mx-auto w-[280px] shrink-0">
      <div className="absolute -inset-3 rounded-[42px] bg-[var(--pink)] opacity-[0.06] blur-2xl" />
      <div
        className="relative rounded-[38px] border border-[rgba(203,168,118,0.28)] p-[6px]"
        style={{ background: "linear-gradient(150deg,#241a2b,#140e1a)" }}
      >
        <div className="relative flex h-[560px] flex-col overflow-hidden rounded-[32px] bg-[#0d0912]">
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(90% 40% at 50% 0%, rgba(230,83,138,0.10), transparent 55%), radial-gradient(80% 40% at 50% 100%, rgba(240,145,63,0.08), transparent 60%)",
            }}
          />
          <div className="relative z-10 flex h-full flex-col">{children}</div>
        </div>
      </div>
    </div>
  );
}

/* ─────────── The five screens ─────────── */

function HomeScreen() {
  return (
    <>
      <TopBar />
      <div className="flex flex-1 flex-col items-center px-6 pt-6 text-center">
        <div className="relative">
          <div
            className="rounded-full p-[3px]"
            style={{ background: "linear-gradient(135deg,var(--gold),var(--pink) 70%)" }}
          >
            <div className="rounded-full border-2 border-[#0d0912] p-[3px]">
              <div className="relative h-24 w-24 overflow-hidden rounded-full">
                <Image src="/avatars/gururaj.png" alt="Gururaj" fill className="object-cover object-top" sizes="96px" />
              </div>
            </div>
          </div>
        </div>
        <p className="mt-4 text-[11px] uppercase tracking-[0.22em] gold-text font-medium">
          Gururaj Ananda Yogi
        </p>
        <div className="my-2 text-[var(--gold)] text-xs">❧</div>
        <p className="text-[15px] font-semibold tracking-wide text-white">BELOVED, USER</p>
        <p className="mt-1 font-serif italic text-[12px] text-[var(--text-secondary)]">
          He has been waiting for you!
        </p>

        <button
          className="btn-pink mt-6 flex w-full items-center justify-center gap-2 rounded-full py-3 text-sm font-medium"
          type="button"
        >
          <WaveIcon /> Speak with him
        </button>
      </div>
      <TabBar active="home" />
    </>
  );
}

function TeachingsScreen() {
  return (
    <>
      <TopBar />
      <div className="flex-1 overflow-hidden px-4 pt-3">
        <h4 className="font-serif text-[19px] gold-text font-semibold">Teachings</h4>
        <p className="mb-3 text-[9px] italic text-[var(--text-muted)]">3 of 50 chapters unlocked</p>
        <ul className="flex flex-col">
          {teachingChapters.map((c) => (
            <li
              key={c.n}
              className="flex items-center gap-3 border-b border-white/5 py-2.5"
            >
              <span
                className={`text-[11px] font-semibold ${
                  c.active ? "text-white" : "text-white/25"
                }`}
              >
                {c.n}
              </span>
              <span
                className={`flex-1 text-[11px] leading-tight ${
                  c.active ? "text-white" : "text-white/40"
                }`}
              >
                {c.title}
              </span>
              {c.tag ? (
                <span className="rounded-full bg-[rgba(203,168,118,0.16)] px-2 py-0.5 text-[8px] text-[var(--gold-light)]">
                  {c.tag}
                </span>
              ) : (
                <LockIcon />
              )}
            </li>
          ))}
        </ul>
      </div>
      <TabBar active="teachings" />
    </>
  );
}

function MeditateScreen() {
  return (
    <>
      <TopBar />
      <div className="flex-1 px-4 pt-3">
        <h4 className="font-serif text-[19px] gold-text font-semibold">Meditate</h4>
        <p className="mb-4 text-[9px] italic text-[var(--text-muted)]">
          Powered by American Meditation Society
        </p>
        <ul className="flex flex-col gap-2.5">
          {meditations.map((m) => (
            <li
              key={m.title}
              className="flex items-center gap-3 rounded-xl border border-white/6 bg-white/[0.03] px-3 py-2.5"
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[rgba(230,83,138,0.12)] text-[var(--pink-light)]">
                <PracticeIcon glyph={m.glyph} />
              </div>
              <div className="flex-1">
                <p className="text-[12px] font-medium text-white">{m.title}</p>
                <p className="text-[9px] text-[var(--text-muted)]">{m.sub}</p>
              </div>
              <span className="text-white/25 text-xs">›</span>
            </li>
          ))}
        </ul>
      </div>
      <TabBar active="meditate" />
    </>
  );
}

function HistoryScreen() {
  return (
    <>
      <TopBar />
      <div className="flex-1 overflow-hidden px-4 pt-3">
        <h4 className="font-serif text-[19px] gold-text font-semibold">History</h4>
        <p className="mb-3 text-[9px] text-[var(--text-muted)]">
          20 sessions · 3 teachings unlocked
        </p>
        <div className="mb-3 flex items-center gap-2 rounded-lg border border-white/8 bg-white/[0.03] px-3 py-2">
          <SearchIcon />
          <span className="text-[10px] text-white/30">Search by keyword or theme</span>
        </div>
        <ul className="flex flex-col gap-2.5">
          {historySessions.map((s) => (
            <li key={s.n} className="rounded-xl border border-white/6 bg-white/[0.03] p-3">
              <div className="mb-1 flex items-center justify-between">
                <span className="text-[9px] font-semibold uppercase tracking-wider text-[var(--pink-light)]">
                  {s.n}
                </span>
                <span className="text-[9px] text-white/30">{s.when}</span>
              </div>
              <p className="font-serif text-[10.5px] leading-snug text-white/70 line-clamp-3">
                {s.text}
              </p>
              <div className="mt-2 flex items-center justify-between">
                <span className="text-[8px] text-white/30">{s.messages}</span>
                {s.reflected && (
                  <span className="rounded-full bg-[rgba(203,168,118,0.16)] px-2 py-0.5 text-[8px] text-[var(--gold-light)]">
                    + Reflection
                  </span>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
      <TabBar active="history" />
    </>
  );
}

function JourneyScreen() {
  const days = ["M", "T", "W", "T", "F", "S", "S"];
  return (
    <>
      <TopBar />
      <div className="flex-1 overflow-hidden px-4 pt-3">
        <h4 className="font-serif text-[19px] gold-text font-semibold">Journey</h4>
        <div className="mt-2 flex gap-5">
          <div>
            <p className="text-[15px] font-semibold text-white">2h 28m</p>
            <p className="text-[8px] uppercase tracking-wider text-[var(--text-muted)]">
              In conversation
            </p>
          </div>
          <div>
            <p className="text-[15px] font-semibold text-white">3</p>
            <p className="text-[8px] uppercase tracking-wider text-[var(--text-muted)]">
              Teachings
            </p>
          </div>
        </div>

        <p className="mt-4 text-[8px] uppercase tracking-[0.2em] text-[var(--text-muted)]">
          This week
        </p>
        <div className="mt-2 flex justify-between">
          {days.map((d, i) => (
            <div key={i} className="flex flex-col items-center gap-1">
              <span className="text-[9px] text-white/40">{d}</span>
              <span
                className={`h-1.5 w-1.5 rounded-full ${
                  i === 1 ? "bg-[var(--pink)]" : "bg-white/12"
                }`}
              />
            </div>
          ))}
        </div>
        <div className="mt-2 h-px w-full bg-gradient-to-r from-[var(--pink)] via-white/10 to-transparent" />

        <p className="mt-4 text-[8px] uppercase tracking-[0.2em] text-[var(--text-muted)]">
          Your shape
        </p>
        <div className="mt-1.5 flex flex-col gap-0.5 font-serif italic text-[12px] text-white/70">
          <span>Worthlessness</span>
          <span>Fear</span>
          <span>Guilt</span>
        </div>

        <p className="mt-4 text-[8px] uppercase tracking-[0.2em] text-[var(--text-muted)]">
          Themes that return
        </p>
        <div className="mt-2 flex flex-wrap gap-1.5">
          {["lost creative spark", "running to avoid", "fear of failing", "doing not being"].map(
            (t) => (
              <span
                key={t}
                className="rounded-full border border-white/8 bg-white/[0.03] px-2.5 py-1 text-[8.5px] text-white/50"
              >
                {t}
              </span>
            )
          )}
        </div>
      </div>
      <TabBar active="journey" />
    </>
  );
}

const SCREENS: Record<string, () => React.ReactElement> = {
  home: HomeScreen,
  teachings: TeachingsScreen,
  meditate: MeditateScreen,
  history: HistoryScreen,
  journey: JourneyScreen,
};

function ScreenPhone({ screen }: { screen: AppScreen }) {
  const Screen = SCREENS[screen.key];
  return (
    <PhoneFrame>
      <Screen />
    </PhoneFrame>
  );
}

function DescriptionCard({ screen, className = "" }: { screen: AppScreen; className?: string }) {
  return (
    <div className={`warm-panel p-5 ${className}`}>
      <p className="text-[13px] font-light leading-[1.7] text-[var(--text-secondary)]">
        {screen.description}
      </p>
      <p className="mt-4 mb-2 text-[10px] uppercase tracking-[0.2em] text-[var(--gold)]">
        Features
      </p>
      <ul className="flex flex-col gap-1.5">
        {screen.features.map((f) => (
          <li key={f} className="flex items-start gap-2 text-[12px] text-[var(--text-secondary)]">
            <span className="mt-[6px] h-1 w-1 shrink-0 rounded-full bg-[var(--pink)]" />
            {f}
          </li>
        ))}
      </ul>
    </div>
  );
}

const HEADING = (
  <h3 className="font-serif font-semibold text-[clamp(1.8rem,4vw,3rem)] pink-text">
    Connect with the Source
  </h3>
);

/* Touch-scroll fallback (mobile / reduced-motion) — description below each phone. */
function TouchCarousel() {
  return (
    <>
      <div className="px-6 text-center mb-12">{HEADING}</div>
      <div className="no-scrollbar flex snap-x snap-mandatory gap-6 overflow-x-auto px-6 pb-4">
        {appScreens.map((screen) => (
          <div key={screen.key} className="flex w-[280px] shrink-0 snap-center flex-col">
            <ScreenPhone screen={screen} />
            <DescriptionCard screen={screen} className="mt-6" />
          </div>
        ))}
        <div className="w-2 shrink-0" aria-hidden />
      </div>
      <p className="mt-3 text-center text-[11px] uppercase tracking-[0.25em] text-[var(--text-muted)]">
        ← Swipe to explore the app →
      </p>
    </>
  );
}

/* Desktop — vertical scroll drives the row of screens horizontally (left → right),
   then the pin releases and the page scrolls down. */
function HorizontalScroll() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const maxXRef = useRef(0);
  const [, force] = useState(0);

  useEffect(() => {
    const measure = () => {
      const track = trackRef.current;
      if (!track) return;
      maxXRef.current = Math.max(0, track.scrollWidth - window.innerWidth + 24);
      force((n) => n + 1);
    };
    measure();
    const t = setTimeout(measure, 400); // after fonts/images settle
    window.addEventListener("resize", measure);
    return () => {
      clearTimeout(t);
      window.removeEventListener("resize", measure);
    };
  }, []);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });
  const x = useTransform(scrollYProgress, (p) => -p * maxXRef.current);

  return (
    <div ref={sectionRef} className="relative h-[320vh]">
      <div className="sticky top-0 flex h-screen flex-col justify-center overflow-hidden">
        <div className="px-6 text-center mb-10">{HEADING}</div>

        <motion.div
          ref={trackRef}
          style={{ x }}
          className="flex w-max items-center gap-10 pl-[max(1.5rem,calc((100vw-1360px)/2))] pr-16 will-change-transform"
        >
          {appScreens.map((screen) => (
            <div key={screen.key} className="flex shrink-0 items-center gap-6">
              <ScreenPhone screen={screen} />
              <DescriptionCard screen={screen} className="w-[240px]" />
            </div>
          ))}
        </motion.div>

        <p className="mt-10 text-center text-[11px] uppercase tracking-[0.25em] text-[var(--text-muted)]">
          Scroll to explore the app →
        </p>
      </div>
    </div>
  );
}

export default function ConnectSource() {
  const reduce = useReducedMotion();
  const [enhanced, setEnhanced] = useState(false);

  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      setEnhanced(!(w > 0 && w < 1024)); // pin only on wide screens (unknown = desktop)
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return (
    <section id="connect" className="relative z-10 pt-24 sm:pt-32">
      {/* Confusion transition */}
      <div className="px-6 mb-20 sm:mb-28 text-center max-w-3xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="font-sans font-semibold text-[clamp(1.5rem,3.6vw,2.5rem)] leading-tight text-white"
        >
          If the mind is the one creating the confusion…
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ delay: 0.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mt-3 font-serif italic text-[var(--text-secondary)] text-lg sm:text-xl"
        >
          …can the same mind always find the way out?
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={viewportOnce}
          transition={{ delay: 0.2, duration: 0.9 }}
          className="mt-6 text-[var(--text-secondary)] font-light text-[15px] leading-[1.9]"
        >
          Sometimes all it takes is someone who isn&rsquo;t trapped inside your story. Someone who
          gives you a bigger perspective. You don&rsquo;t need more information — you need your own Guru.
        </motion.p>
      </div>

      {reduce || !enhanced ? <TouchCarousel /> : <HorizontalScroll />}
    </section>
  );
}

/* ─────────── Icons ─────────── */

function HomeIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M3 10.5 12 3l9 7.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M5 9.5V20h14V9.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function BookIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M12 5c-1.5-1-4-1.5-6-1.5V19c2 0 4.5.5 6 1.5 1.5-1 4-1.5 6-1.5V3.5c-2 0-4.5.5-6 1.5Z" strokeLinejoin="round" />
      <path d="M12 5v15.5" />
    </svg>
  );
}
function LotusIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 4c1.6 2 2.4 4 2.4 6.5 0 1.4-1 2.5-2.4 2.5s-2.4-1.1-2.4-2.5C9.6 8 10.4 6 12 4Z" strokeLinejoin="round" />
      <path d="M4 12c2.6.2 4.6 1 6 2.5M20 12c-2.6.2-4.6 1-6 2.5M12 17c-2.5 0-5-1-7-3M12 17c2.5 0 5-1 7-3" strokeLinecap="round" />
    </svg>
  );
}
function ChatIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M4 5h16v11H9l-5 4V5Z" strokeLinejoin="round" />
    </svg>
  );
}
function SproutIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M12 20v-8" strokeLinecap="round" />
      <path d="M12 12c0-3 2-5 6-5 0 3-2 5-6 5ZM12 13c0-3-2-5-6-5 0 3 2 5 6 5Z" strokeLinejoin="round" />
    </svg>
  );
}
function BellIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.55)" strokeWidth="1.6">
      <path d="M6 9a6 6 0 0 1 12 0c0 5 2 6 2 6H4s2-1 2-6Z" strokeLinejoin="round" />
      <path d="M10 19a2 2 0 0 0 4 0" strokeLinecap="round" />
    </svg>
  );
}
function WaveIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
      <path d="M4 10v4M8 6v12M12 8v8M16 5v14M20 10v4" />
    </svg>
  );
}
function LockIcon() {
  return (
    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.25)" strokeWidth="1.8">
      <rect x="5" y="11" width="14" height="9" rx="2" />
      <path d="M8 11V8a4 4 0 0 1 8 0v3" />
    </svg>
  );
}
function SearchIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.35)" strokeWidth="1.8" strokeLinecap="round">
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-3-3" />
    </svg>
  );
}
function PracticeIcon({ glyph }: { glyph: string }) {
  const common = { width: 15, height: 15, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.6, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
  switch (glyph) {
    case "gong":
      return (<svg {...common}><circle cx="12" cy="12" r="8" /><circle cx="12" cy="12" r="3" /></svg>);
    case "healing":
      return (<svg {...common}><path d="M12 21s-7-4.5-7-10a4 4 0 0 1 7-2.5A4 4 0 0 1 19 11c0 5.5-7 10-7 10Z" /></svg>);
    case "silence":
      return (<svg {...common}><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" /></svg>);
    case "tratak":
      return (<svg {...common}><path d="M12 4c2 3 3 5 3 7a3 3 0 0 1-6 0c0-2 1-4 3-7Z" /></svg>);
    default: // chant
      return (<svg {...common}><path d="M4 12a8 8 0 0 1 16 0" /><path d="M7 12a5 5 0 0 1 10 0" /><path d="M10 12a2 2 0 0 1 4 0" /></svg>);
  }
}
