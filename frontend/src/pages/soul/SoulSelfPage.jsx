import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SoulShell, { Glass, GoldRule, GuideLine, Quiet } from "@/components/soul/SoulShell";
import { useAuthUser } from "@/lib/useAuthUser";
import { getPersona, ApiError } from "@/lib/soulApi";

function fmt(iso) {
  try { return new Date(iso).toLocaleDateString(undefined, { day: "numeric", month: "long", year: "numeric" }); } catch (e) { return ""; }
}

/* The evolving self: not a profile, a timeline. The three with every
   instance they were seen in, the pulls with when they last chose, the
   type as a sentence, and each version in order. No numbers. */
export default function SoulSelfPage() {
  const { user, ready } = useAuthUser();
  const [persona, setPersona] = useState(undefined);
  useEffect(() => {
    if (!ready || !user) return;
    getPersona().then((r) => setPersona(r.persona)).catch((e) => setPersona(e instanceof ApiError ? null : null));
  }, [ready, user]);

  if (!ready) return <SoulShell title="Under everything"><Quiet>…</Quiet></SoulShell>;
  if (!user) return <SoulShell title="Under everything"><Link to="/soul-search" className="font-ui text-xs text-[color:var(--gold)] underline underline-offset-4">Sign in first</Link></SoulShell>;
  if (persona === undefined) return <SoulShell title="Under everything"><Quiet>Opening…</Quiet></SoulShell>;
  if (!persona) return <SoulShell title="Under everything"><Quiet>Nothing yet. <Link to="/soul-search" className="text-[color:var(--gold)] underline underline-offset-4">Begin a search</Link> and this fills in.</Quiet></SoulShell>;

  return (
    <SoulShell label="Soul Search · you" title="Under everything" meta={<span>version {persona.version} · {fmt(persona.updated_at)} · <Link to="/soul-search" className="underline underline-offset-4 hover:text-white">your searches</Link></span>} testId="soul-self">
      <ol className="space-y-8">
        {(persona.traits || []).map((t) => (
          <li key={t.trait} data-testid="self-trait" className="border-l border-[color:var(--gold)]/40 pl-5">
            <p className="font-mystic text-3xl leading-tight text-white md:text-4xl">{t.trait}</p>
            <Quiet className="mt-2">seen in {(t.searches || []).length} {(t.searches || []).length === 1 ? "search" : "searches"}{t.first_seen ? `, since ${fmt(t.first_seen)}` : ""}</Quiet>
            {(t.evidence || []).length > 0 && (
              <ul className="mt-3 space-y-1.5">
                {t.evidence.map((e, i) => <li key={i} className="font-mystic text-lg text-white/75">“{e.text}”</li>)}
              </ul>
            )}
          </li>
        ))}
      </ol>
      {persona.type_sentence && <p data-testid="self-type" className="mt-10 font-ui text-sm font-light leading-relaxed text-white/70">{persona.type_sentence}</p>}
      {persona.narrative && <p data-testid="self-narrative" className="mt-8 font-mystic text-xl leading-relaxed text-white/90 md:text-2xl">{persona.narrative}</p>}
      <GoldRule />
      {(persona.pulls || []).length > 0 && (
        <section data-testid="self-pulls">
          <h2 className="font-ui text-[10px] uppercase tracking-[0.3em] text-[color:var(--gold)]">What has done the choosing</h2>
          <ul className="mt-4 space-y-3">
            {persona.pulls.map((p) => (
              <li key={p.text}>
                <p className="font-mystic text-xl text-white/85">“{p.text}”</p>
                <Quiet className="mt-1">{p.reason}{p.last_seen_at ? ` · last chose on ${fmt(p.last_seen_at)}` : ""}</Quiet>
              </li>
            ))}
          </ul>
        </section>
      )}
      <GoldRule />
      <section data-testid="self-history">
        <h2 className="font-ui text-[10px] uppercase tracking-[0.3em] text-[color:var(--gold)]">How it has stood</h2>
        <ol className="mt-4 space-y-4">
          {(persona.history || []).slice().reverse().map((h) => (
            <li key={h.version} className="font-ui text-sm font-light text-white/60">
              <span className="text-white/35">version {h.version} · {fmt(h.at)}</span>
              <span className="ml-3 text-white/80">{(h.traits || []).join(" · ")}</span>
              {h.changed && h.changed.length > 0 && h.version > 1 && <Quiet className="mt-1">changed: {h.changed.join(", ")}</Quiet>}
            </li>
          ))}
        </ol>
      </section>
      <div className="mt-14"><GuideLine size="md">It is not built. It is unveiled.</GuideLine></div>
    </SoulShell>
  );
}
