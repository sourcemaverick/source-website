import { Link } from "react-router-dom";
import LegalPage, { Callout, Colophon, Section } from "@/components/legal/LegalPage";

const CONTACT_NAME = "Animesh Anand";
const CONTACT_TITLE = "CEO, Source";
const CONTACT_EMAIL = "animesh@sourcemaverick.ai";

export default function SupportPage() {
  return (
    <LegalPage
      testId="support-page"
      label="Support"
      title="We're here to help"
      meta={<p>Questions, issues, or feedback about the Source app</p>}
    >
      <div className="glass-deep mb-16 rounded-3xl p-8 md:p-10">
        <p className="font-ui text-[10px] uppercase tracking-[0.4em] text-[color:var(--gold)]">
          Reach us directly
        </p>
        <p className="mt-5 font-ui text-sm font-light leading-[1.9] text-white/60 md:text-[15px]">
          For any question, issue, or support query about the Source app, write to us. A real
          person reads every message.
        </p>

        <div className="glass mt-8 rounded-2xl p-6 md:p-7">
          <dl className="grid gap-5 md:grid-cols-[auto_1fr] md:gap-x-12 md:gap-y-5">
            <dt className="font-ui text-[9px] uppercase tracking-[0.4em] text-white/40 md:pt-1.5">
              Contact
            </dt>
            <dd className="font-mystic text-2xl font-light text-white">{CONTACT_NAME}</dd>

            <dt className="font-ui text-[9px] uppercase tracking-[0.4em] text-white/40 md:pt-1.5">
              Title
            </dt>
            <dd className="font-ui text-sm font-light text-white/65">{CONTACT_TITLE}</dd>

            <dt className="font-ui text-[9px] uppercase tracking-[0.4em] text-white/40 md:pt-1.5">
              Email
            </dt>
            <dd>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                data-testid="support-email-link"
                className="font-mystic text-lg font-light text-[color:var(--gold)] transition-colors hover:text-white"
              >
                {CONTACT_EMAIL}
              </a>
            </dd>
          </dl>
        </div>

        <div className="mt-8 flex flex-col items-start gap-5 md:flex-row md:items-center md:justify-between">
          <p className="font-ui text-xs font-light tracking-wide text-white/40">
            We typically respond to all support inquiries within 48 hours.
          </p>
          <a
            href={`mailto:${CONTACT_EMAIL}?subject=Source%20support`}
            data-testid="support-email-cta"
            className="nav-download-cta inline-block font-ui text-[10px] uppercase tracking-[0.3em]"
          >
            Email support
          </a>
        </div>
      </div>

      <Section title="Before you write">
        <Callout title="Helpful to include">
          <ul className="space-y-1.5">
            <li>The device and OS version you are using (for example, iPhone 15, iOS 18).</li>
            <li>The email address associated with your Source account.</li>
            <li>What you were doing when the problem happened, and what you expected instead.</li>
            <li>A screenshot or screen recording, if you have one.</li>
          </ul>
        </Callout>
      </Section>

      <Section title="Common requests">
        <p>
          Want to delete your account and data? See <Link to="/delete-account">Delete your account</Link>.
          For how we handle your information, read our <Link to="/privacy">Privacy Policy</Link>. For
          the rules of using the platform, see the <Link to="/terms">Terms and Conditions</Link>.
        </p>
      </Section>

      <Colophon>
        <p>© {new Date().getFullYear()} Super Real Inc. All rights reserved.</p>
      </Colophon>
    </LegalPage>
  );
}
