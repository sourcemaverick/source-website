import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Delete Your Account — Source",
  description:
    "How to delete your Source account and all associated data, from inside the app or by request.",
};

const CONTACT_EMAIL = "anubhav@sourcemaverick.ai";

export default function DeleteAccountPage() {
  return (
    <main className="relative mx-auto max-w-3xl px-6 py-16 text-neutral-200 sm:py-24">
      <header className="mb-12">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-neutral-400">
          Source
        </p>
        <h1 className="mt-2 text-4xl font-light tracking-tight text-neutral-100 sm:text-5xl">
          Delete Your Account
        </h1>
        <p className="mt-4 text-sm text-neutral-400">
          Applies to the Source app by Super Real Inc. on iOS and Android.
        </p>
      </header>

      <Section title="Delete from within the app (fastest)">
        <ol className="ml-5 list-decimal space-y-1">
          <li>Open Source and sign in.</li>
          <li>
            Go to <strong>Profile</strong> (your photo, top of the Home
            screen).
          </li>
          <li>
            Scroll down and tap <strong>Delete account</strong>.
          </li>
          <li>Confirm. Deletion is immediate and permanent.</li>
        </ol>
        <p className="mt-3">
          Everything you have shared — conversations, journal, memories,
          progress — is permanently deleted, and you will not be able to sign
          in with that email again. This cannot be undone.
        </p>
      </Section>

      <Section title="Request deletion by email">
        <p>
          If you can no longer access the app (lost device, uninstalled,
          sign-in trouble), email{" "}
          <a className="underline" href={`mailto:${CONTACT_EMAIL}`}>
            {CONTACT_EMAIL}
          </a>{" "}
          from the email address associated with your account with the
          subject line <strong>&quot;Delete my account&quot;</strong>. We
          verify that the request comes from the account&apos;s email address
          and process it within 7 days.
        </p>
      </Section>

      <Section title="What is deleted">
        <ul className="ml-5 list-disc space-y-1">
          <li>Your account (email, display name, profile photo).</li>
          <li>All conversation messages and generated audio replies.</li>
          <li>Journal entries and meditation history.</li>
          <li>
            Everything the persona remembered about you (memories, reflections,
            progress).
          </li>
        </ul>
        <p className="mt-3">
          Deletion from live systems is immediate; residual copies in
          encrypted backups are removed within 30 days.
        </p>
      </Section>

      <Section title="What is retained">
        <ul className="ml-5 list-disc space-y-1">
          <li>
            A minimal, non-identifying record used to prevent abuse of free
            trials. It contains no personal information and cannot be linked
            back to you.
          </li>
          <li>
            Anonymized usage analytics (up to 14 months, Firebase) and crash
            logs (up to 90 days), as described in our{" "}
            <a className="underline" href="/privacy">
              Privacy Policy
            </a>
            .
          </li>
        </ul>
      </Section>

      <Section title="Subscriptions">
        <p>
          Deleting your account does <strong>not</strong> cancel an active
          subscription — subscriptions are managed by the store you purchased
          from. Cancel in your device&apos;s App Store subscription settings
          (iOS) or in Google Play &rarr; Payments &amp; subscriptions
          (Android) before or after deleting your account.
        </p>
      </Section>

      <Section title="Questions">
        <p>
          For anything related to your data, email{" "}
          <a className="underline" href={`mailto:${CONTACT_EMAIL}`}>
            {CONTACT_EMAIL}
          </a>
          . See also our{" "}
          <a className="underline" href="/privacy">
            Privacy Policy
          </a>
          .
        </p>
      </Section>

      <footer className="mt-16 border-t border-neutral-800 pt-8 text-sm text-neutral-500">
        <p>
          © {new Date().getFullYear()} Super Real Inc. All rights reserved.
        </p>
      </footer>
    </main>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mb-10">
      <h2 className="mb-3 text-xl font-medium text-neutral-100">{title}</h2>
      <div className="space-y-2 text-base leading-relaxed text-neutral-300">
        {children}
      </div>
    </section>
  );
}
