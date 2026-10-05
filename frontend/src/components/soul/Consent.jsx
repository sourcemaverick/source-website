import { useState } from "react";
import { Link } from "react-router-dom";
import { Chip, Glass, GuideLine, Quiet } from "@/components/soul/SoulShell";

/* The same permission the app asks for, before anything is sent. The
   lists mirror section 4 of the Privacy Policy. */
const SENT = [
  "What you type here: your situation, your answers, your words",
  "The name you want to be called, if you have given one",
  "What earlier searches found, so this one can build on them",
];
/* One account, one permission: the same list the Source app shows, because
   this sign-in is that sign-in. Soul Search itself uses only the first and
   the fourth; the others are the app's conversation rooms. */
const TO = [
  ["Anthropic", "reads what you write and writes the guide's lines, the sorting, the three and the map; in the app, the persona's replies, summaries, memories and the safety check"],
  ["ElevenLabs", "in the app only: turns the persona's replies into his voice, and transcribes your voice on calls"],
  ["Groq", "in the app only: transcribes your voice messages, and writes replies only if Anthropic is unavailable"],
  ["Google Cloud and Firebase", "host everything, store your data in the United States, and handle sign in and notifications"],
  ["Qdrant", "in the app only: keeps a searchable index of your memories"],
];

export default function Consent({ onAgree, onDecline, busy }) {
  const [working, setWorking] = useState(false);
  const agree = async () => { setWorking(true); try { await onAgree(); } finally { setWorking(false); } };
  return (
    <Glass testId="soul-consent">
      <GuideLine size="md">Before we start.</GuideLine>
      <p className="mt-4 font-ui text-sm font-light leading-relaxed text-white/70">
        Soul Search works by sending what you write to AI services run by other companies. Nothing is sent until you agree.
      </p>
      <h3 className="mt-8 font-ui text-[10px] uppercase tracking-[0.3em] text-[color:var(--gold)]">What is sent</h3>
      <ul className="mt-3 space-y-2 font-ui text-sm font-light text-white/70">{SENT.map((s) => <li key={s}>{s}</li>)}</ul>
      <h3 className="mt-8 font-ui text-[10px] uppercase tracking-[0.3em] text-[color:var(--gold)]">Who receives it, and for what</h3>
      <ul className="mt-3 space-y-2 font-ui text-sm font-light text-white/70">
        {TO.map(([who, what]) => <li key={who}><span className="text-white">{who}</span> {what}</li>)}
      </ul>
      <p className="mt-6 font-ui text-sm font-light leading-relaxed text-white/50">
        Nobody trains AI models on your data. We do not sell it and we show no ads. You can delete a search, or your whole account, at any time.
      </p>
      <Quiet className="mt-6">
        <Link to="/privacy" className="text-[color:var(--gold)] underline underline-offset-4">Privacy Policy</Link>
        <span className="mx-3 text-white/20">·</span>
        <Link to="/terms" className="text-[color:var(--gold)] underline underline-offset-4">Terms and Conditions</Link>
      </Quiet>
      <Quiet className="mt-4">By choosing I agree, you give Source permission to send your words to the services above, and you accept the Terms and Conditions and the Privacy Policy.</Quiet>
      <div className="mt-8 flex flex-wrap gap-3">
        <Chip testId="consent-agree" primary onClick={agree} disabled={working || busy}>I agree</Chip>
        <Chip testId="consent-decline" onClick={onDecline} disabled={working || busy}>Not now</Chip>
      </div>
    </Glass>
  );
}
