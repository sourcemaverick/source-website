import { GuideLine, Quiet } from "@/components/soul/SoulShell";

/* The decision mapped. For each option: which of the three get to act,
   which pulls are doing the choosing, in the person's words, and the cost.
   No recommendation anywhere; the line under it is always the same. */
export default function MapView({ state, onContinue, busy }) {
  const map = state.map || { options: [] };
  const options = map.options || [];
  return (
    <div data-testid="soul-map" className="space-y-10">
      <GuideLine size="md">The decision, mapped.</GuideLine>
      <div className={`grid gap-5 ${options.length > 1 ? "md:grid-cols-2" : ""}`}>
        {options.map((o) => (
          <section key={o.name} data-testid="map-option" className="glass-deep rounded-2xl p-6">
            <h3 className="font-mystic text-2xl leading-tight text-white md:text-3xl">{o.name}</h3>
            <h4 className="mt-6 font-ui text-[10px] uppercase tracking-[0.3em] text-[color:var(--gold)]">Which of the three get to act</h4>
            <ul className="mt-3 space-y-2">
              {(o.functions || []).length === 0 && <li className="font-ui text-xs font-light text-white/30">none of them, here</li>}
              {(o.functions || []).map((f) => (
                <li key={f.trait} className="font-ui text-sm font-light text-white/80"><span className="text-white">{f.trait}</span>{f.how ? <span className="text-white/60">: {f.how}</span> : null}</li>
              ))}
            </ul>
            <h4 className="mt-6 font-ui text-[10px] uppercase tracking-[0.3em] text-[color:var(--gold)]">What is doing the choosing</h4>
            <ul className="mt-3 space-y-2">
              {(o.pulls || []).length === 0 && <li className="font-ui text-xs font-light text-white/30">no pull is choosing here</li>}
              {(o.pulls || []).map((p) => (
                <li key={p.text} className="font-ui text-sm font-light text-white/70"><span className="font-mystic text-base text-white/85">“{p.text}”</span>{p.how ? <span className="text-white/50">, {p.how}</span> : null}</li>
              ))}
            </ul>
            {o.cost && (
              <>
                <h4 className="mt-6 font-ui text-[10px] uppercase tracking-[0.3em] text-[color:var(--gold)]">What it costs</h4>
                <p className="mt-3 font-ui text-sm font-light text-white/70">{o.cost}</p>
              </>
            )}
          </section>
        ))}
      </div>
      <p data-testid="map-line" className="text-center font-mystic text-3xl font-light text-white md:text-4xl">Compare, then choose.</p>
      <div className="text-center">
        <button
          type="button"
          data-testid="map-continue"
          onClick={onContinue}
          disabled={busy}
          className="font-ui text-xs uppercase tracking-[0.3em] text-white/50 transition-colors duration-300 hover:text-white disabled:opacity-40"
        >
          When you have decided →
        </button>
      </div>
      <Quiet className="text-center">Nothing here tells you what to do. It shows you what is choosing.</Quiet>
    </div>
  );
}
