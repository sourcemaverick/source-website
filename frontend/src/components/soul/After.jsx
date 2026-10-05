import { useState } from "react";
import { Chip, GuideLine, Quiet } from "@/components/soul/SoulShell";

/* After the decision: one thing. Spent, or alive. */
export default function After({ state, onAnswer, busy }) {
  const [decided, setDecided] = useState("");
  const done = state.after && state.after.feeling;
  if (done) {
    return (
      <div data-testid="soul-after-done" className="space-y-6">
        <GuideLine size="md">{state.after.feeling === "alive" ? "Alive. Good." : "Spent. Noted."}</GuideLine>
        {state.after.decided && <p className="font-mystic text-xl text-white/80">“{state.after.decided}”</p>}
        <Quiet>The next search will know how this one felt.</Quiet>
      </div>
    );
  }
  return (
    <div data-testid="soul-after" className="space-y-8">
      <GuideLine size="md">When you have decided, tell me one thing: spent, or alive.</GuideLine>
      <input
        data-testid="after-decided"
        value={decided}
        onChange={(e) => setDecided(e.target.value)}
        placeholder="What you decided, one line (optional)"
        className="w-full rounded-full border border-white/15 bg-white/[0.03] px-5 py-3 font-ui text-sm text-white placeholder:text-white/30 focus:border-[color:var(--gold)] focus:outline-none"
      />
      <div className="flex flex-wrap gap-3">
        <Chip testId="after-spent" onClick={() => onAnswer("spent", decided.trim())} disabled={busy}>Spent</Chip>
        <Chip testId="after-alive" primary onClick={() => onAnswer("alive", decided.trim())} disabled={busy}>Alive</Chip>
      </div>
      <Quiet>Come back to this whenever it has happened. There is no hurry and no reminder.</Quiet>
    </div>
  );
}
