import { Link } from "react-router-dom";
import LegalPage, { Callout, Colophon, Section } from "@/components/legal/LegalPage";

const CONTACT_EMAIL = "anubhav@sourcemaverick.ai";

export default function DeleteAccountPage() {
  return (
    <LegalPage
      testId="delete-account-page"
      label="Your data"
      title="Delete Your Account"
      meta={<p>Applies to the Source app by Super Real Inc. on iOS and Android.</p>}
    >
      <Section title="Delete from within the app (fastest)">
        <ol className="space-y-1.5">
          <li>Open Source and sign in.</li>
          <li>
            Go to <strong>Profile</strong> (your photo, top of the Home screen).
          </li>
          <li>
            Scroll down and tap <strong>Delete account</strong>.
          </li>
          <li>Confirm. Deletion is immediate and permanent.</li>
        </ol>
        <Callout title="Please note">
          Everything you have shared — conversations, journal, memories, progress — is permanently
          deleted, and you will not be able to sign in with that email again. This cannot be undone.
        </Callout>
      </Section>

      <Section title="Request deletion by email">
        <p>
          If you can no longer access the app (lost device, uninstalled, sign-in trouble), email{" "}
          <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a> from the email address
          associated with your account with the subject line{" "}
          <strong>&quot;Delete my account&quot;</strong>. We verify that the request comes from the
          account&apos;s email address and process it within 7 days.
        </p>
      </Section>

      <Section title="What is deleted">
        <ul className="space-y-1.5">
          <li>Your account (email, display name, profile photo).</li>
          <li>All conversation messages and generated audio replies.</li>
          <li>Journal entries and meditation history.</li>
          <li>Everything the persona remembered about you (memories, reflections, progress).</li>
        </ul>
        <p className="mt-3">
          Deletion from live systems is immediate; residual copies in encrypted backups are removed
          within 30 days.
        </p>
      </Section>

      <Section title="What is retained">
        <ul className="space-y-1.5">
          <li>
            A minimal, non-identifying record used to prevent abuse of free trials. It contains no
            personal information and cannot be linked back to you.
          </li>
          <li>
            Anonymized usage analytics (up to 14 months, Firebase) and crash logs (up to 90 days), as
            described in our <Link to="/privacy">Privacy Policy</Link>.
          </li>
        </ul>
      </Section>

      <Section title="Subscriptions">
        <p>
          Deleting your account does <strong>not</strong> cancel an active subscription —
          subscriptions are managed by the store you purchased from. Cancel in your device&apos;s
          App Store subscription settings (iOS) or in Google Play &rarr; Payments &amp;
          subscriptions (Android) before or after deleting your account.
        </p>
      </Section>

      <Section title="Questions">
        <p>
          For anything related to your data, email{" "}
          <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>. See also our{" "}
          <Link to="/privacy">Privacy Policy</Link> and <Link to="/support">Support</Link> page.
        </p>
      </Section>

      <Colophon>
        <p>© {new Date().getFullYear()} Super Real Inc. All rights reserved.</p>
      </Colophon>
    </LegalPage>
  );
}
