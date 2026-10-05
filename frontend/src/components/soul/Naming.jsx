import { useState } from "react";
import { Chip, GoldRule, GuideLine, Quiet } from "@/components/soul/SoulShell";

/* The naming screen: the three, each with its one instance; the type as a
   sentence; the narrative with the person's own phrases lit. Right, or
   Not quite with a line. No other control. */
function litNarrative(text, phrases) {
  if (!text) return null;
  const parts = text.split(/(“[^”]+”|"[^"]+")/g);
  return parts.map((p, i) =>
    /^[“"]/.test(p) ? <span key={i} className="text-[color:var(--gold)]">{p}</span> : <span key={i}>{p}</span>
  );
}

export default function Naming({ state, onRight, onNotQuite, busy }) {
  const [closer, setCloser] = useState("");
  const [showInput, setShowInput] = useState(false);
  const three = state.three || [];
  return (
    <div data-testid="soul-naming" className="space-y-10">
      <GuideLine size="md">Under everything, three things.</GuideLine>
      <ol className="space-y-6">
        {three.map((t, i) => (
          <li key={t.trait} className="border-l border-[color:var(--gold)]/40 pl-5">
            <p className="font-mystic text-2xl leading-tight text-white md:text-3xl">{t.trait}</p>
            {t.evidence ? (
              <p className="mt-2 font-ui text-sm font-light text-white/55">Once, when nobody asked: <span className="font-mystic text-base text-white/80">“{t.evidence}”</span></p>
            ) : (
              <Quiet className="mt-2">claimed, not yet seen</Quiet>
            )}
            {t.kept_from_prior && <Quiet className="mt-1">kept from your earlier searches</Quiet>}
          </li>
        ))}
      </ol>
      {state.type_sentence && (
        <p data-testid="soul-type" className="font-ui text-sm font-light leading-relaxed text-white/70">{state.type_sentence}</p>
      )}
      <GoldRule />
      {state.narrative && (
        <p data-testid="soul-narrative" className="font-mystic text-xl leading-relaxed text-white/90 md:text-2xl">{litNarrative(state.narrative, [])}</p>
      )}
      {state.narrative_unverified && <Quiet>This description does not yet use enough of your own words. Say what is closer and it will.</Quiet>}
      <GuideLine size="md">Right?</GuideLine>
      {!showInput ? (
        <div className="flex flex-wrap gap-3">
          <Chip testId="naming-right" primary onClick={onRight} disabled={busy}>Right</Chip>
          <Chip testId="naming-not-quite" onClick={() => setShowInput(true)} disabled={busy}>Not quite</Chip>
        </div>
      ) : (
        <form
          className="flex gap-3"
          onSubmit={(e) => { e.preventDefault(); if (closer.trim()) { onNotQuite(closer.trim()); setCloser(""); setShowInput(false); } }}
        >
          <input
            data-testid="naming-closer"
            autoFocus
            value={closer}
            onChange={(e) => setCloser(e.target.value)}
            placeholder="Which part, and what is closer"
            className="flex-1 rounded-full border border-white/15 bg-white/[0.03] px-5 py-3 font-ui text-sm text-white placeholder:text-white/30 focus:border-[color:var(--gold)] focus:outline-none"
          />
          <Chip testId="naming-closer-send" primary disabled={busy || !closer.trim()}>Say</Chip>
        </form>
      )}
    </div>
  );
}
