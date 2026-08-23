import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionEyebrow, SectionTitle } from "@/components/sections/SectionHeading";

const API = process.env.REACT_APP_BACKEND_URL;

const initial = { name: "", email: "", intention: "" };

const isValidEmail = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);

export const ContactSection = () => {
  const [form, setForm] = useState(initial);
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error
  const [error, setError] = useState("");

  const setField = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = async (e) => {
    e.preventDefault();
    setError("");
    if (!form.name.trim() || !form.email.trim() || !form.intention.trim()) {
      setError("Please fill in every field.");
      return;
    }
    if (!isValidEmail(form.email.trim())) {
      setError("Please enter a valid email.");
      return;
    }
    setStatus("sending");
    try {
      const res = await fetch(`${API}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name.trim(),
          email: form.email.trim(),
          intention: form.intention.trim(),
        }),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("sent");
      setForm(initial);
    } catch (err) {
      setStatus("error");
      setError("Something went quiet on our end. Please try again in a moment.");
    }
  };

  return (
    <section
      data-testid="contact-section"
      className="relative bg-[#050505] px-6 py-40 md:py-56"
    >
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-16 md:grid-cols-[1fr_1.1fr] md:gap-24">
        <div>
          <SectionEyebrow>Reach the guide</SectionEyebrow>
          <div className="mt-6">
            <SectionTitle italic>
              Write to us<br />in your own words.
            </SectionTitle>
          </div>
          <p className="mt-8 max-w-md font-ui text-sm font-light leading-relaxed text-white/60 md:text-base">
            No forms of qualification. No polished intent. Tell us what has
            brought you here, and we will listen.
          </p>
        </div>

        <motion.form
          data-testid="contact-form"
          onSubmit={submit}
          noValidate
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15% 0px" }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="glass-deep relative rounded-3xl p-8 md:p-10"
        >
          <AnimatePresence mode="wait">
            {status === "sent" ? (
              <motion.div
                key="sent"
                data-testid="contact-success"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                className="flex min-h-[320px] flex-col items-center justify-center text-center"
              >
                <div className="relative mb-6 h-10 w-10">
                  <div
                    className="absolute inset-0 rounded-full"
                    style={{
                      background:
                        "radial-gradient(circle, rgba(232,194,132,0.55) 0%, transparent 70%)",
                    }}
                  />
                  <div className="absolute left-1/2 top-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[color:var(--gold)]" />
                </div>
                <p className="font-mystic text-2xl font-light italic leading-tight text-white/90 md:text-3xl">
                  Received.
                </p>
                <p className="mt-4 max-w-sm font-ui text-sm font-light text-white/55">
                  We read every message ourselves. Watch for a reply, soon.
                </p>
                <button
                  type="button"
                  data-testid="contact-reset"
                  onClick={() => setStatus("idle")}
                  className="mt-10 font-ui text-[10px] uppercase tracking-[0.3em] text-white/45 transition-colors hover:text-white/80"
                >
                  Write again
                </button>
              </motion.div>
            ) : (
              <motion.div
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="space-y-8"
              >
                <Field
                  label="Name"
                  testId="contact-name"
                  value={form.name}
                  onChange={setField("name")}
                  disabled={status === "sending"}
                />
                <Field
                  label="Email"
                  type="email"
                  testId="contact-email"
                  value={form.email}
                  onChange={setField("email")}
                  disabled={status === "sending"}
                />
                <Field
                  label="Your intention"
                  as="textarea"
                  testId="contact-intention"
                  value={form.intention}
                  onChange={setField("intention")}
                  disabled={status === "sending"}
                />

                {error && (
                  <p
                    data-testid="contact-error"
                    className="font-ui text-xs text-[#e6b394]"
                  >
                    {error}
                  </p>
                )}

                <button
                  type="submit"
                  data-testid="contact-submit"
                  disabled={status === "sending"}
                  className="cta-glass glass mt-2 rounded-full px-10 py-4 font-ui text-[10px] uppercase tracking-[0.35em] text-white/90 disabled:cursor-wait disabled:opacity-60 md:text-xs"
                >
                  {status === "sending" ? "Sending…" : "Send"}
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.form>
      </div>
    </section>
  );
};

const Field = ({ label, testId, as = "input", type = "text", value, onChange, disabled }) => {
  const shared = {
    "data-testid": testId,
    value,
    onChange,
    disabled,
    className:
      "w-full resize-none bg-transparent pb-3 pt-1 font-mystic text-lg font-light text-white outline-none placeholder:text-white/25 md:text-xl",
  };
  return (
    <label className="block">
      <span className="mb-2 block font-ui text-[9px] uppercase tracking-[0.4em] text-white/40">
        {label}
      </span>
      <div className="border-b border-white/15 transition-colors focus-within:border-[color:var(--gold)]">
        {as === "textarea" ? (
          <textarea rows={3} {...shared} />
        ) : (
          <input type={type} {...shared} />
        )}
      </div>
    </label>
  );
};
