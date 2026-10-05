import { AnimatePresence, motion } from "framer-motion";
import { ease, Quiet } from "@/components/soul/SoulShell";

/* What is forming, beside the exchange: the person's statements sorted
   core / derived / open, each with the reason the rule fired. Their words,
   in their colour; the reason in ours. Nothing here is a score. */
const Column = ({ title, items, hint, testId }) => (
  <section data-testid={testId}>
    <h3 className="font-ui text-[10px] uppercase tracking-[0.3em] text-[color:var(--gold)]">{title}</h3>
    {hint && <Quiet className="mt-1">{hint}</Quiet>}
    <ul className="mt-3 space-y-2">
      <AnimatePresence initial={false}>
        {items.length === 0 && (
          <motion.li key="empty" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="font-ui text-xs font-light text-white/25">nothing yet</motion.li>
        )}
        {items.map((s) => (
          <motion.li
            key={s.id || s.text}
            initial={{ opacity: 0, x: 8, filter: "blur(4px)" }}
            animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7, ease }}
            className="rounded-lg border border-white/8 bg-white/[0.03] px-3 py-2.5"
          >
            <p className="font-mystic text-base leading-snug text-white/90 md:text-lg">“{s.text}”</p>
            {s.reason && <p className="mt-1 font-ui text-[11px] font-light leading-snug text-white/40">{s.reason}</p>}
          </motion.li>
        ))}
      </AnimatePresence>
    </ul>
  </section>
);

export default function Buckets({ state }) {
  const st = state || {};
  const statements = st.statements || [];
  const core = statements.filter((s) => s.bucket === "core");
  const derived = statements.filter((s) => s.bucket === "derived");
  const open = statements.filter((s) => !s.bucket || s.bucket === "open");
  const candidates = st.candidates || [];
  const sit = st.situation || {};
  return (
    <aside data-testid="soul-buckets" className="space-y-8 lg:sticky lg:top-32">
      {(sit.question || sit.raw) && (
        <section>
          <h3 className="font-ui text-[10px] uppercase tracking-[0.3em] text-[color:var(--gold)]">{sit.refined && sit.question ? "The question" : "What you brought"}</h3>
          <p className="mt-3 font-mystic text-lg leading-snug text-white/90 md:text-xl">{(sit.refined && sit.question) || sit.raw || sit.question}</p>
          {sit.subjects && sit.subjects.length > 0 && (
            <ul className="mt-3 space-y-1">
              {sit.subjects.map((s) => (
                <li key={s.name} className="font-ui text-xs font-light text-white/50"><span className="text-white/30">{s.name}:</span> {s.answer}</li>
              ))}
            </ul>
          )}
        </section>
      )}
      <Column testId="bucket-core" title="Core" hint="a function in pure form, no situation, no outcome" items={core} />
      <Column testId="bucket-derived" title="Derived" hint="depends on an outcome or a situation" items={derived} />
      {open.length > 0 && <Column testId="bucket-open" title="Not sorted yet" items={open} />}
      {candidates.length > 0 && (
        <section data-testid="bucket-candidates">
          <h3 className="font-ui text-[10px] uppercase tracking-[0.3em] text-[color:var(--gold)]">Candidates</h3>
          <ul className="mt-3 space-y-2">
            {candidates.map((c) => (
              <li key={c.trait} className="font-ui text-sm font-light text-white/80">
                {c.trait}
                <span className="ml-2 text-[10px] uppercase tracking-[0.2em] text-white/30">{c.status === "seen" ? "seen" : "claimed"}</span>
                {c.evidence && <p className="mt-0.5 font-mystic text-base text-white/60">“{c.evidence}”</p>}
              </li>
            ))}
          </ul>
        </section>
      )}
    </aside>
  );
}
