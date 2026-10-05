import { useState } from "react";
import { motion } from "framer-motion";
import { Chip, GoldRule, GuideLine, Quiet } from "@/components/soul/SoulShell";

/* The naming screen: the three, each with its one instance; the type as a
   sentence; the narrative with the person's own phrases lit. Right, or
   Not quite with a line. No other control. */
/* Light every run of four or more words that is the person's own, whether
   or not the guide put quotation marks around it. Matching is on words,
   case and punctuation ignored; rendering keeps the original text. */
const norm = (w) => w.toLowerCase().replace(/[^a-z0-9]/g, "");
function litNarrative(text, phrases) {
  if (!text) return null;
  const tokens = text.split(/(\s+)/);                      // words and the spaces between them
  const wordIdx = tokens.map((t, i) => (/\S/.test(t) ? i : -1)).filter((i) => i >= 0);
  const words = wordIdx.map((i) => norm(tokens[i]));
  const lit = new Array(tokens.length).fill(false);
  const MIN = 4;
  for (const phrase of phrases) {
    const pw = (phrase || "").split(/\s+/).map(norm).filter(Boolean);
    for (let a = 0; a + MIN <= pw.length; a++) {
      const chunk = pw.slice(a, a + MIN);
      for (let b = 0; b + MIN <= words.length; b++) {
        let ok = true;
        for (let k = 0; k < MIN; k++) if (words[b + k] !== chunk[k]) { ok = false; break; }
        if (ok) {
          // extend the match as far as it goes
          let len = MIN;
          while (a + len < pw.length && b + len < words.length && words[b + len] === pw[a + len]) len++;
          for (let k = 0; k < len; k++) lit[wordIdx[b + k]] = true;
          for (let k = 0; k < len - 1; k++) lit[wordIdx[b + k] + 1] = true;   // the spaces inside a run
        }
      }
    }
  }
  const out = []; let buf = ""; let cur = false;
  tokens.forEach((t, i) => {
    const on = !!lit[i];
    if (on !== cur && buf) { out.push(cur ? <span key={out.length} className="text-[color:var(--gold)]">{buf}</span> : <span key={out.length}>{buf}</span>); buf = ""; }
    cur = on; buf += t;
  });
  if (buf) out.push(cur ? <span key={out.length} className="text-[color:var(--gold)]">{buf}</span> : <span key={out.length}>{buf}</span>);
  return out;
}

function personPhrases(state) {
  const out = [];
  (state.statements || []).forEach((s) => s.text && out.push(s.text));
  Object.values(state.prompts || {}).forEach((v) => v && out.push(v));
  (state.candidates || []).forEach((c) => c.evidence && out.push(c.evidence));
  (state.three || []).forEach((t) => t.evidence && out.push(t.evidence));
  if (state.situation && state.situation.raw) out.push(state.situation.raw);
  return out;
}

export default function Naming({ state, onRight, onNotQuite, busy }) {
  const [closer, setCloser] = useState("");
  const [showInput, setShowInput] = useState(false);
  const [sent, setSent] = useState("");          // what the person last pressed, for the waiting line
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
        <p data-testid="soul-narrative" className="font-mystic text-xl leading-relaxed text-white/90 md:text-2xl">{litNarrative(state.narrative, personPhrases(state))}</p>
      )}
      {state.narrative_unverified && <Quiet>This description does not yet use enough of your own words. Say what is closer and it will.</Quiet>}
      <GuideLine size="md">Right?</GuideLine>
      {busy ? (
        <div data-testid="naming-working" className="space-y-2">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: [0.3, 0.8, 0.3] }} transition={{ repeat: Infinity, duration: 1.8 }} className="font-mystic text-2xl text-white/40">…</motion.p>
          <Quiet>{sent === "right" ? "Laying your decision over the three. This takes a moment." : "Listening."}</Quiet>
        </div>
      ) : !showInput ? (
        <div className="flex flex-wrap gap-3">
          <Chip testId="naming-right" primary onClick={() => { setSent("right"); onRight(); }}>Right</Chip>
          <Chip testId="naming-not-quite" onClick={() => setShowInput(true)}>Not quite</Chip>
        </div>
      ) : (
        <form
          className="flex gap-3"
          onSubmit={(e) => { e.preventDefault(); if (closer.trim()) { setSent("not_quite"); onNotQuite(closer.trim()); setCloser(""); setShowInput(false); } }}
        >
          <input
            data-testid="naming-closer"
            autoFocus
            value={closer}
            onChange={(e) => setCloser(e.target.value)}
            placeholder="Which part, and what is closer"
            className="flex-1 rounded-full border border-white/15 bg-white/[0.03] px-5 py-3 font-ui text-sm text-white placeholder:text-white/30 focus:border-[color:var(--gold)] focus:outline-none"
          />
          <Chip testId="naming-closer-send" type="submit" primary disabled={busy || !closer.trim()}>Say</Chip>
        </form>
      )}
    </div>
  );
}
