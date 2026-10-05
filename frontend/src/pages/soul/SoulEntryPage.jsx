import { useCallback, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import SoulShell, { Chip, ease, Glass, GoldRule, GuideLine, Quiet } from "@/components/soul/SoulShell";
import Consent from "@/components/soul/Consent";
import { useAuthUser } from "@/lib/useAuthUser";
import { signIn, signUp, signInWithGoogle, signOut, resetPassword } from "@/lib/firebase";
import { checkConsent, recordConsent, listSearches, createSearch, deleteSearch, ApiError } from "@/lib/soulApi";

const field = "w-full rounded-full border border-white/15 bg-white/[0.03] px-5 py-3 font-ui text-sm text-white placeholder:text-white/30 focus:border-[color:var(--gold)] focus:outline-none";

function SignIn() {
  const [mode, setMode] = useState("in");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);
  const [note, setNote] = useState("");

  const submit = async (e) => {
    e.preventDefault(); setError(""); setBusy(true);
    try {
      if (mode === "in") await signIn(email.trim(), password);
      else await signUp(name.trim(), email.trim(), password);
    } catch (err) {
      const m = String(err && err.code || "");
      setError(m.includes("invalid-credential") || m.includes("wrong-password") || m.includes("user-not-found") ? "That email and password do not match."
        : m.includes("email-already-in-use") ? "There is already an account with that email. Sign in instead."
        : m.includes("weak-password") ? "Use at least six characters." : "That did not work. Try again.");
    } finally { setBusy(false); }
  };
  const google = async () => { setError(""); setBusy(true); try { await signInWithGoogle(); } catch (e) { setError("Google sign in did not complete."); } finally { setBusy(false); } };
  const reset = async () => { if (!email.trim()) { setError("Type your email first."); return; } try { await resetPassword(email.trim()); setNote("A reset link is on its way."); } catch (e) { setError("Could not send a reset link."); } };

  return (
    <Glass testId="soul-signin" className="max-w-md">
      <GuideLine size="md">{mode === "in" ? "Sign in to begin." : "Create your Source account."}</GuideLine>
      <Quiet className="mt-3">The same account as the Source app. A search here is yours there.</Quiet>
      <form onSubmit={submit} className="mt-8 space-y-3">
        {mode === "up" && <input data-testid="signup-name" className={field} placeholder="What should we call you" value={name} onChange={(e) => setName(e.target.value)} />}
        <input data-testid="signin-email" className={field} type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <input data-testid="signin-password" className={field} type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        {error && <p data-testid="signin-error" className="font-ui text-xs text-[#e08aa8]">{error}</p>}
        {note && <p className="font-ui text-xs text-white/60">{note}</p>}
        <div className="flex flex-wrap items-center gap-3 pt-2">
          <Chip testId="signin-submit" type="submit" primary disabled={busy}>{mode === "in" ? "Sign in" : "Create account"}</Chip>
          <Chip testId="signin-google" onClick={google} disabled={busy}>Continue with Google</Chip>
        </div>
      </form>
      <div className="mt-6 flex flex-wrap gap-5">
        <button type="button" data-testid="signin-toggle" onClick={() => { setMode(mode === "in" ? "up" : "in"); setError(""); }} className="font-ui text-xs text-white/50 underline underline-offset-4 transition-colors duration-300 hover:text-white">
          {mode === "in" ? "New here? Create an account" : "Have an account? Sign in"}
        </button>
        {mode === "in" && <button type="button" data-testid="signin-reset" onClick={reset} className="font-ui text-xs text-white/50 underline underline-offset-4 transition-colors duration-300 hover:text-white">Forgot password</button>}
      </div>
    </Glass>
  );
}

function fmt(iso) {
  try { return new Date(iso).toLocaleDateString(undefined, { day: "numeric", month: "long", year: "numeric" }); } catch (e) { return ""; }
}

export default function SoulEntryPage() {
  const { user, ready } = useAuthUser();
  const navigate = useNavigate();
  const [consent, setConsent] = useState(null);     // null unknown, true, false
  const [data, setData] = useState(null);
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);
  const [removing, setRemoving] = useState("");     // search id waiting on a second press

  const remove = async (sid) => {
    try { await deleteSearch(sid); setData((d) => d ? { ...d, searches: d.searches.filter((s) => s.search_id !== sid) } : d); }
    catch (e) { setError("Could not remove that. Try again."); }
    finally { setRemoving(""); }
  };

  const load = useCallback(async () => {
    setError("");
    try {
      const c = await checkConsent();
      if (!c.has_consent) { setConsent(false); return; }
      setConsent(true);
      setData(await listSearches());
    } catch (e) {
      if (e instanceof ApiError && e.code === "consent_required") setConsent(false);
      else setError("Could not reach Source. Try again in a moment.");
    }
  }, []);

  useEffect(() => { if (ready && user) load(); }, [ready, user, load]);

  const agree = async () => { await recordConsent(); setConsent(true); setData(await listSearches()); };
  const begin = async () => {
    setBusy(true);
    try { const r = await createSearch(); navigate(`/soul-search/s/${r.search.search_id}`); }
    catch (e) { setError("Could not begin. Try again."); }
    finally { setBusy(false); }
  };

  if (!ready) return <SoulShell title="Soul Search"><Quiet>…</Quiet></SoulShell>;
  if (!user) {
    return (
      <SoulShell title="Soul Search" meta={<span>A decision, mapped onto who you are under everything.</span>}>
        <SignIn />
      </SoulShell>
    );
  }
  if (consent === false) {
    return (
      <SoulShell title="Soul Search" meta={<span>{user.email}</span>}>
        <Consent onAgree={agree} onDecline={() => signOut()} />
      </SoulShell>
    );
  }
  const searches = (data && data.searches) || [];
  const persona = data && data.persona;
  return (
    <SoulShell title="Soul Search" meta={<span>{user.displayName || user.email} · <button type="button" data-testid="signout" onClick={() => signOut()} className="underline underline-offset-4 hover:text-white">sign out</button></span>}>
      {error && <p className="mb-6 font-ui text-xs text-[#e08aa8]">{error}</p>}
      <div className="grid gap-10 lg:grid-cols-[1fr_320px]">
        <div>
          <GuideLine>{searches.length ? "What are you deciding this time?" : "What do you need clarity on?"}</GuideLine>
          <div className="mt-8"><Chip testId="begin-search" primary onClick={begin} disabled={busy || consent !== true}>Begin a search</Chip></div>
          {searches.length > 0 && (
            <>
              <GoldRule />
              <h2 className="font-ui text-[10px] uppercase tracking-[0.3em] text-[color:var(--gold)]">Your searches</h2>
              <ul className="mt-4 divide-y divide-white/10">
                {searches.map((s, i) => (
                  <motion.li key={s.search_id} initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease, delay: i * 0.05 }} className="group flex items-start justify-between gap-4">
                    <Link to={`/soul-search/s/${s.search_id}`} data-testid="search-item" className="block min-w-0 flex-1 py-4 transition-colors duration-300 hover:text-white">
                      <p className="font-mystic text-xl text-white/90">{s.title || "A search, not yet named"}</p>
                      <Quiet className="mt-1">{fmt(s.created_at)} · {s.stage === "done" ? (s.after ? `decided, ${s.after}` : "closed") : s.stage === "map" || s.stage === "after" ? "mapped" : "in progress"}</Quiet>
                    </Link>
                    {removing === s.search_id ? (
                      <span className="flex shrink-0 items-center gap-3 py-5 font-ui text-[10px] uppercase tracking-[0.25em]">
                        <button type="button" data-testid="remove-confirm" onClick={() => remove(s.search_id)} className="text-[#e08aa8] hover:text-white">remove</button>
                        <button type="button" data-testid="remove-cancel" onClick={() => setRemoving("")} className="text-white/40 hover:text-white">keep</button>
                      </span>
                    ) : (
                      <button type="button" data-testid="remove-search" aria-label="Remove this search" onClick={() => setRemoving(s.search_id)} className="shrink-0 py-5 font-ui text-[10px] uppercase tracking-[0.25em] text-white/25 opacity-0 transition-opacity duration-300 hover:text-white group-hover:opacity-100 focus:opacity-100">remove</button>
                    )}
                  </motion.li>
                ))}
              </ul>
            </>
          )}
        </div>
        <aside className="lg:pt-2">
          {persona ? (
            <Glass testId="persona-teaser">
              <h2 className="font-ui text-[10px] uppercase tracking-[0.3em] text-[color:var(--gold)]">Under everything</h2>
              <ol className="mt-4 space-y-2">
                {(persona.traits || []).map((t) => <li key={t.trait} className="font-mystic text-xl leading-tight text-white">{t.trait}</li>)}
              </ol>
              {persona.type_sentence && <Quiet className="mt-4">{persona.type_sentence}</Quiet>}
              <Link to="/soul-search/self" data-testid="persona-link" className="mt-6 inline-block font-ui text-xs uppercase tracking-[0.25em] text-[color:var(--gold)] transition-colors duration-300 hover:text-white">The whole of it →</Link>
            </Glass>
          ) : (
            <Quiet>After your first search, what it found about you lives here, and every search after builds on it.</Quiet>
          )}
        </aside>
      </div>
    </SoulShell>
  );
}
