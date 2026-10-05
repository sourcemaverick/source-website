import { useCallback, useEffect, useRef, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import SoulShell, { Chip, ease, GuideLine, Quiet, YouLine } from "@/components/soul/SoulShell";
import Buckets from "@/components/soul/Buckets";
import Naming from "@/components/soul/Naming";
import MapView from "@/components/soul/MapView";
import After from "@/components/soul/After";
import { useAuthUser } from "@/lib/useAuthUser";
import { getSearch, turn, after as sendAfter, ApiError } from "@/lib/soulApi";

const field = "w-full rounded-full border border-white/15 bg-white/[0.03] px-5 py-3 font-ui text-sm text-white placeholder:text-white/30 focus:border-[color:var(--gold)] focus:outline-none";
const area = "w-full rounded-2xl border border-white/15 bg-white/[0.03] px-5 py-4 font-ui text-sm leading-relaxed text-white placeholder:text-white/30 focus:border-[color:var(--gold)] focus:outline-none";

const STAGE_LABEL = { situation: "The question", around: "Around it", you: "You", evidence: "Once, when nobody asked", three: "The three", map: "The map", after: "After", done: "Done" };

/* Derive what the screen is waiting on from the last reply, or from the
   state after a reload (the engine keeps `pending`). */
function waitingOn(last, state) {
  if (last) return { mode: last.mode, guess: last.guess, question: last.question };
  const p = (state && state.pending) || {};
  if (p.kind === "guess" && p.text) return { mode: "confirm", guess: p.text, question: { text: "", long: false } };
  return { mode: "ask", guess: "", question: { text: "", long: false } };
}

export default function SoulSearchPage() {
  const { id } = useParams();
  const { user, ready } = useAuthUser();
  const navigate = useNavigate();
  const [state, setState] = useState(null);
  const [search, setSearch] = useState(null);
  const [last, setLast] = useState(null);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const [text, setText] = useState("");
  const [closer, setCloser] = useState(false);
  const endRef = useRef(null);
  const started = useRef(false);

  const apply = useCallback((r) => {
    setState(r.state); if (r.search) setSearch(r.search);
    if (r.mode) setLast({ mode: r.mode, guess: r.guess, question: r.question, say: r.say });
  }, []);

  const send = useCallback(async (kind, t = "") => {
    setBusy(true); setError("");
    try { apply(await turn(id, kind, t)); setText(""); setCloser(false); }
    catch (e) {
      if (e instanceof ApiError && e.code === "consent_required") navigate("/soul-search");
      else if (e instanceof ApiError && e.status === 409) setError("This search is complete.");
      else setError("The guide did not answer. Try again.");
    } finally { setBusy(false); }
  }, [id, apply, navigate]);

  useEffect(() => {
    if (!ready || !user) return;
    (async () => {
      try {
        const r = await getSearch(id);
        setState(r.state); setSearch(r.search);
        const tr = (r.state && r.state.transcript) || [];
        if (tr.length === 0 && !started.current) { started.current = true; await send("start"); }
      } catch (e) {
        if (e instanceof ApiError && e.code === "consent_required") navigate("/soul-search");
        else setError("Could not open this search.");
      }
    })();
  }, [ready, user, id, send, navigate]);

  useEffect(() => { if (endRef.current && window.innerWidth < 1024) endRef.current.scrollIntoView({ behavior: "smooth", block: "end" }); }, [state]);

  if (!ready) return <SoulShell label="Soul Search"><Quiet>…</Quiet></SoulShell>;
  if (!user) { navigate("/soul-search"); return null; }
  if (!state) return <SoulShell label="Soul Search" title={error ? "" : undefined}><Quiet>{error || "Opening…"}</Quiet></SoulShell>;

  const stage = state.stage || "situation";
  const w = waitingOn(last, state);
  const transcript = state.transcript || [];
  const showExchange = ["situation", "around", "you", "evidence"].includes(stage) || (stage === "map" && !(state.map && state.map.options && state.map.options.length));

  return (
    <SoulShell label={`Soul Search · ${STAGE_LABEL[stage] || ""}`} wide testId="soul-search">
      <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_340px]">
        <div className="min-w-0">
          <Link to="/soul-search" data-testid="back-to-searches" className="font-ui text-[10px] uppercase tracking-[0.3em] text-white/40 transition-colors duration-300 hover:text-white">← your searches</Link>

          {showExchange && (
            <div className="mt-8 space-y-7">
              {transcript.map((t, i) => t.who === "guide"
                ? <GuideLine key={i} size={i === transcript.length - 1 || (i === transcript.length - 2 && transcript[i + 1].who === "guide") ? "lg" : "md"} delay={0}>{t.text}</GuideLine>
                : <YouLine key={i}>{t.kind === "right" ? "Right." : t.kind === "not_quite" ? "Not quite." : t.text}</YouLine>
              )}
              {busy && (
                <motion.p initial={{ opacity: 0 }} animate={{ opacity: [0.3, 0.8, 0.3] }} transition={{ repeat: Infinity, duration: 1.8 }} className="font-mystic text-2xl text-white/40">…</motion.p>
              )}
              {!busy && (
                <div ref={endRef} className="pt-2">
                  {w.mode === "confirm" && !closer ? (
                    <div className="flex flex-wrap gap-3">
                      <Chip testId="chip-right" primary onClick={() => send("right")}>Right</Chip>
                      <Chip testId="chip-not-quite" onClick={() => setCloser(true)}>Not quite</Chip>
                    </div>
                  ) : (
                    <form onSubmit={(e) => { e.preventDefault(); if (!text.trim()) return; send(closer ? "not_quite" : "text", text.trim()); }}>
                      {w.question && w.question.long && !closer ? (
                        <textarea data-testid="answer-long" autoFocus rows={4} className={area} value={text} onChange={(e) => setText(e.target.value)} placeholder="Take the space you need" />
                      ) : (
                        <input data-testid="answer" autoFocus className={field} value={text} onChange={(e) => setText(e.target.value)} placeholder={closer ? "What is closer" : "One line is enough"} />
                      )}
                      <div className="mt-3 flex items-center gap-3">
                        <Chip testId="answer-send" primary disabled={!text.trim()}>{closer ? "Say" : "Send"}</Chip>
                        {closer && <Chip testId="closer-cancel" onClick={() => setCloser(false)}>Back</Chip>}
                        <Quiet>Enter sends</Quiet>
                      </div>
                    </form>
                  )}
                </div>
              )}
            </div>
          )}

          {stage === "three" && (
            <div className="mt-8">
              {last && last.say && <GuideLine size="md">{last.say}</GuideLine>}
              <div className="mt-8">
                <Naming state={state} busy={busy} onRight={() => send("right")} onNotQuite={(t) => send("not_quite", t)} />
              </div>
            </div>
          )}

          {stage === "map" && !showExchange && (
            <div className="mt-8"><MapView state={state} busy={busy} onContinue={() => send("text", "I have seen the map.")} /></div>
          )}

          {(stage === "after" || stage === "done") && (
            <div className="mt-8">
              {stage === "after" && state.map && state.map.options && state.map.options.length > 0 && (
                <details className="mb-8"><summary className="cursor-pointer font-ui text-[10px] uppercase tracking-[0.3em] text-white/40">the map again</summary><div className="mt-6"><MapView state={state} busy onContinue={() => {}} /></div></details>
              )}
              <After state={state} busy={busy} onAnswer={async (feeling, decided) => { setBusy(true); try { const r = await sendAfter(id, feeling, decided); setState(r.state); setSearch(r.search); } catch (e) { setError("Could not save that."); } finally { setBusy(false); } }} />
            </div>
          )}

          {error && <p data-testid="search-error" className="mt-6 font-ui text-xs text-[#e08aa8]">{error}</p>}
        </div>
        <Buckets state={state} />
      </div>
    </SoulShell>
  );
}
