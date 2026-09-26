import type { Metadata } from "next";
import LegalPage, { Callout, Colophon, Section } from "@/components/legal/LegalPage";

export const metadata: Metadata = {
  title: "Support — Source",
  description: "Get support for your Source app questions and issues.",
};

const CONTACT_NAME = "Animesh Anand";
const CONTACT_TITLE = "CEO, Source";
const CONTACT_EMAIL = "animesh@sourcemaverick.ai";

export default function SupportPage() {
  return (
    <LegalPage
      label="Support"
      title="We're here to help"
      meta={<p>Questions, issues, or feedback about the Source app</p>}
    >
      <div className="glass-card mb-12 p-8 sm:p-10">
        <p className="label mb-4">Reach us directly</p>
        <p className="mb-8 text-[15px] font-light leading-[1.85] text-[var(--text-secondary)]">
          For any question, issue, or support query about the Source app, write to us. A real
          person reads every message.
        </p>

        <div className="warm-panel p-6 sm:p-7">
          <dl className="grid gap-5 sm:grid-cols-[auto_1fr] sm:gap-x-10 sm:gap-y-4">
            <dt className="text-[11px] font-medium uppercase tracking-[0.25em] text-[var(--text-muted)] sm:pt-1">
              Contact
            </dt>
            <dd className="font-serif text-xl text-[var(--text-primary)]">{CONTACT_NAME}</dd>

            <dt className="text-[11px] font-medium uppercase tracking-[0.25em] text-[var(--text-muted)] sm:pt-1">
              Title
            </dt>
            <dd className="text-[15px] font-light text-[var(--text-secondary)]">{CONTACT_TITLE}</dd>

            <dt className="text-[11px] font-medium uppercase tracking-[0.25em] text-[var(--text-muted)] sm:pt-1">
              Email
            </dt>
            <dd>
              <a href={`mailto:${CONTACT_EMAIL}`} className="gold-text text-[15px] font-medium">
                {CONTACT_EMAIL}
              </a>
            </dd>
          </dl>
        </div>

        <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[13px] font-light tracking-wide text-[var(--text-muted)]">
            We typically respond to all support inquiries within 48 hours.
          </p>
          <a
            href={`mailto:${CONTACT_EMAIL}?subject=Source%20support`}
            className="btn-gold btn-shine rounded-full px-7 py-3 text-[12px] uppercase tracking-[0.16em]"
          >
            Email support
          </a>
        </div>
      </div>

      <Section title="Before you write">
        <Callout title="Helpful to include">
          <ul className="space-y-1">
            <li>The device and OS version you are using (for example, iPhone 15, iOS 18).</li>
            <li>The email address associated with your Source account.</li>
            <li>What you were doing when the problem happened, and what you expected instead.</li>
            <li>A screenshot or screen recording, if you have one.</li>
          </ul>
        </Callout>
      </Section>

      <Section title="Common requests">
        <p>
          Want to delete your account and data? See{" "}
          <a href="/delete-account">Delete your account</a>. For how we handle your information,
          read our <a href="/privacy">Privacy Policy</a>. For the rules of using the platform, see
          the <a href="/terms">Terms and Conditions</a>.
        </p>
      </Section>

      <Colophon>
        <p>© {new Date().getFullYear()} Super Real Inc. All rights reserved.</p>
      </Colophon>
    </LegalPage>
  );
}
