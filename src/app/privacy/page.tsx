import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — Source",
  description:
    "How Source collects, uses, and protects your information.",
};

const EFFECTIVE_DATE = "May 11, 2026";
const CONTACT_EMAIL = "anubhav@sourcemaverick.ai";

export default function PrivacyPolicyPage() {
  return (
    <main className="relative mx-auto max-w-3xl px-6 py-16 text-neutral-200 sm:py-24">
      <header className="mb-12">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-neutral-400">
          Source
        </p>
        <h1 className="mt-2 text-4xl font-light tracking-tight text-neutral-100 sm:text-5xl">
          Privacy Policy
        </h1>
        <p className="mt-4 text-sm text-neutral-400">
          Effective {EFFECTIVE_DATE}
        </p>
      </header>

      <Section title="In one paragraph">
        <p>
          Source is a mobile and web app made by Super Real Inc. that lets you
          have voice conversations with AI personas of contemplative teachers.
          To make that work we collect your account email, the messages you
          send, the audio you record, basic device timezone information, and
          anonymous usage analytics. We use this only to run the conversation,
          keep continuity across sessions, fix bugs, and improve the product.
          We do not sell your data. You can ask us to delete your account and
          conversations at any time by emailing{" "}
          <a className="underline" href={`mailto:${CONTACT_EMAIL}`}>
            {CONTACT_EMAIL}
          </a>
          .
        </p>
      </Section>

      <Section title="Who we are">
        <p>
          Source (&quot;the App&quot;, &quot;we&quot;, &quot;our&quot;) is
          operated by Super Real Inc. (&quot;the Company&quot;). The data
          controller for the purposes of GDPR and the business contact for the
          purposes of CCPA is Super Real Inc.
        </p>
      </Section>

      <Section title="What we collect">
        <SubSection title="Information you provide">
          <ul className="ml-5 list-disc space-y-1">
            <li>
              <strong>Account information.</strong> When you sign up we collect
              your email address, display name, and a Firebase account
              identifier. If you sign in with Google or Apple, we receive the
              email address and display name those providers share.
            </li>
            <li>
              <strong>Messages you send.</strong> The text of your
              conversations with the AI persona is stored so the persona can
              remember context across sessions.
            </li>
            <li>
              <strong>Voice recordings.</strong> If you choose to use voice
              input, the App captures short audio clips while you are
              speaking. The audio is sent to a transcription service to be
              converted to text, and then it is discarded. We do not retain
              your voice recordings after transcription.
            </li>
            <li>
              <strong>Generated audio replies.</strong> The persona&apos;s
              spoken replies are synthesized as audio files and stored so you
              can replay them in your conversation history.
            </li>
          </ul>
        </SubSection>

        <SubSection title="Information we collect automatically">
          <ul className="ml-5 list-disc space-y-1">
            <li>
              <strong>Device timezone.</strong> Used to greet you with the
              correct time of day.
            </li>
            <li>
              <strong>Usage analytics.</strong> We use Firebase Analytics to
              record anonymous events (e.g. screen visits, sign-up funnel,
              session duration) so we can understand how the App is used.
            </li>
            <li>
              <strong>Crash and error logs.</strong> If the App crashes or
              errors, basic diagnostic information is sent to our backend so
              we can fix the bug.
            </li>
            <li>
              <strong>IP address and approximate region.</strong> Standard
              server-log information collected by our hosting provider.
            </li>
          </ul>
        </SubSection>

        <p className="mt-4 text-sm text-neutral-400">
          We do <strong>not</strong> collect: contacts, calendar, photos
          beyond a profile avatar, location coordinates, advertising
          identifiers, or contact lists. We do not access your device
          microphone except while you are actively recording a message in the
          App.
        </p>
      </Section>

      <Section title="How we use your information">
        <ul className="ml-5 list-disc space-y-1">
          <li>To create and maintain your account.</li>
          <li>
            To run the conversation: passing your messages to language and
            speech models that generate the persona&apos;s replies.
          </li>
          <li>
            To remember context across sessions, so the persona can reference
            things you have shared previously.
          </li>
          <li>
            To diagnose and fix problems with the App.
          </li>
          <li>
            To understand aggregate product usage so we can improve the App.
          </li>
          <li>
            To send you in-app notifications related to your conversations
            (e.g. a reflection from a previous session). We do not send
            marketing emails.
          </li>
        </ul>
      </Section>

      <Section title="Third-party processors">
        <p>
          Source does not run all of its infrastructure in-house. We use the
          following sub-processors. Each receives only the data needed for
          their specific function:
        </p>
        <ul className="ml-5 mt-3 list-disc space-y-1">
          <li>
            <strong>Google Firebase</strong> (auth, analytics, crash
            reporting, push notifications). Receives: email, account
            identifier, anonymous events.
          </li>
          <li>
            <strong>Google Cloud Platform</strong> (server hosting, database,
            audio file storage). Receives: messages, account identifier,
            generated audio replies.
          </li>
          <li>
            <strong>Anthropic</strong> (language model that generates the
            persona&apos;s replies). Receives: your messages and a system
            prompt. Anthropic processes inputs in transit and does not train
            on customer API data.
          </li>
          <li>
            <strong>Groq</strong> (speech-to-text transcription). Receives:
            short audio clips during voice input. Used only to convert speech
            to text.
          </li>
          <li>
            <strong>ElevenLabs</strong> (text-to-speech). Receives: the text
            of the persona&apos;s reply. Returns synthesized audio.
          </li>
          <li>
            <strong>Qdrant Cloud</strong> (vector database). Receives: derived
            embeddings of your messages used for memory retrieval.
          </li>
        </ul>
        <p className="mt-3">
          We do not share your information with any party outside this list,
          except where required by law (for example, in response to a valid
          legal order).
        </p>
      </Section>

      <Section title="Voice recordings — explicit notice">
        <p>
          Because microphone access is sensitive, here is the full lifecycle
          of a voice recording in plain language:
        </p>
        <ol className="ml-5 mt-3 list-decimal space-y-1">
          <li>You tap and hold the microphone button. The App records audio.</li>
          <li>
            When you release the button, the audio file is sent over an
            encrypted connection to our backend.
          </li>
          <li>
            Our backend forwards the audio to Groq for transcription.
          </li>
          <li>
            Groq returns the text. Our backend then deletes the audio file.
          </li>
          <li>
            The text is processed as your message and stored in the
            conversation. The audio itself is not retained.
          </li>
        </ol>
        <p className="mt-3">
          The App does not record audio when you are not actively pressing
          the microphone button.
        </p>
      </Section>

      <Section title="Data retention">
        <ul className="ml-5 list-disc space-y-1">
          <li>
            <strong>Account information.</strong> Retained until you delete
            your account.
          </li>
          <li>
            <strong>Conversation messages and audio replies.</strong> Retained
            until you delete your account, after which they are removed
            within 30 days.
          </li>
          <li>
            <strong>Voice recordings.</strong> Not retained — discarded after
            transcription, typically within seconds.
          </li>
          <li>
            <strong>Usage analytics.</strong> Retained for up to 14 months in
            an anonymized form by Firebase.
          </li>
          <li>
            <strong>Crash logs.</strong> Retained for up to 90 days.
          </li>
        </ul>
      </Section>

      <Section title="Your rights">
        <p>
          Depending on where you live, you may have the right to access,
          correct, export, restrict, or delete your personal information, and
          to object to certain processing. Source honors these rights for all
          users regardless of jurisdiction.
        </p>
        <p className="mt-3">
          To exercise any of these rights, email us at{" "}
          <a className="underline" href={`mailto:${CONTACT_EMAIL}`}>
            {CONTACT_EMAIL}
          </a>
          . We typically respond within 7 days. There is also an in-app
          &quot;Delete account&quot; option that removes your account and all
          associated conversation data.
        </p>
      </Section>

      <Section title="Security">
        <p>
          All connections between the App and our backend use TLS. Account
          credentials are managed by Firebase Authentication and are never
          stored in plaintext on our servers. Conversation data is stored in
          Google Cloud SQL and Qdrant Cloud, both with at-rest encryption.
        </p>
        <p className="mt-3">
          No system is perfectly secure. If we ever become aware of a breach
          affecting your data, we will notify you by email and through the
          App as soon as practicable, and within the timelines required by
          applicable law.
        </p>
      </Section>

      <Section title="International data transfers">
        <p>
          Source&apos;s servers are hosted in Google Cloud&apos;s
          <code className="px-1 font-mono text-sm">us-central1</code> region.
          Sub-processors are located primarily in the United States. If you
          access the App from outside the United States, your information is
          transferred to and processed in the United States. By using the
          App you consent to this transfer.
        </p>
      </Section>

      <Section title="Children">
        <p>
          Source is not directed at children under 13, and we do not
          knowingly collect personal information from children under 13. If
          we learn that we have inadvertently collected such information, we
          will delete it. If you believe a child has provided us with
          personal information, please contact us at{" "}
          <a className="underline" href={`mailto:${CONTACT_EMAIL}`}>
            {CONTACT_EMAIL}
          </a>
          .
        </p>
      </Section>

      <Section title="Health and well-being disclaimer">
        <p>
          Source is a contemplative companion. It is not a medical device,
          mental-health service, or substitute for professional advice. The
          AI does not diagnose, treat, or counsel. If you are in crisis or
          need urgent support, please contact local emergency services or a
          qualified human professional.
        </p>
      </Section>

      <Section title="Changes to this policy">
        <p>
          We will update this page when our practices change. Material
          changes will be announced in the App. The &quot;Effective&quot;
          date at the top of this page reflects the most recent revision.
        </p>
      </Section>

      <Section title="Contact">
        <p>
          For privacy questions, data requests, or any other concern, email{" "}
          <a className="underline" href={`mailto:${CONTACT_EMAIL}`}>
            {CONTACT_EMAIL}
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

function SubSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mb-4">
      <h3 className="mb-1 text-base font-medium text-neutral-200">{title}</h3>
      <div className="space-y-2 text-base leading-relaxed text-neutral-300">
        {children}
      </div>
    </div>
  );
}
