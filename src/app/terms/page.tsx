import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Terms and Conditions — Source",
  description:
    "Terms and Conditions of Use for the Source platform.",
};

const EFFECTIVE_DATE = "07-01-2026";
const CONTACT_EMAIL = "animesh@sourcemaverick.ai";

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main className="relative mx-auto max-w-3xl px-6 py-16 text-neutral-200 sm:py-24">
        <header className="mb-12 text-center">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-neutral-400">
            Source
          </p>
          <h1 className="mt-2 text-4xl font-light tracking-tight text-neutral-100 sm:text-5xl">
            Terms and Conditions of Use
          </h1>
          <p className="mt-2 text-sm text-neutral-400">
            Source Platform · Version 3.0
          </p>
          <p className="mt-2 text-sm text-neutral-400">
            Effective Date: {EFFECTIVE_DATE}
          </p>
        </header>

        <div className="mb-8 space-y-4 text-base leading-relaxed text-neutral-300">
          <p>
            These Terms and Conditions ("Terms") constitute a legally binding agreement between you ("User," "you," or "your") and Super Real Inc., a Delaware corporation ("Super Real," "we," "us," or "our"), governing your access to and use of the Source mobile application and all related services, features, AI-generated content, and digital experiences (collectively, the "Platform"). By downloading, installing, accessing, or using the Platform in any manner, you acknowledge that you have read, understood, and agree to be bound by these Terms in their entirety. If you do not agree to any provision of these Terms, you must immediately discontinue all use of the Platform and uninstall the application.
          </p>
        </div>

        <WarningBanner>
          PLEASE READ THESE TERMS CAREFULLY. THEY CONTAIN A MANDATORY ARBITRATION AGREEMENT, A CLASS ACTION WAIVER, AND LIMITATIONS ON SUPER REAL'S LIABILITY. YOUR CONTINUED USE OF THE PLATFORM CONSTITUTES YOUR ACCEPTANCE OF THESE TERMS.
        </WarningBanner>

        <nav className="mb-12 rounded-lg border border-neutral-800 bg-neutral-900/50 p-6">
          <h2 className="mb-4 text-sm font-medium uppercase tracking-widest text-neutral-400">
            Contents
          </h2>
          <ol className="grid grid-cols-1 gap-2 text-sm text-neutral-300 md:grid-cols-2">
            <li><a href="#s1" className="text-blue-400 hover:underline">1. The Source Platform</a></li>
            <li><a href="#s2" className="text-blue-400 hover:underline">2. Eligibility and Account Registration</a></li>
            <li><a href="#s3" className="text-blue-400 hover:underline">3. Intellectual Property</a></li>
            <li><a href="#s4" className="text-blue-400 hover:underline">4. Acceptable Use</a></li>
            <li><a href="#s5" className="text-blue-400 hover:underline">5. AI-Generated Content Disclaimer</a></li>
            <li><a href="#s6" className="text-blue-400 hover:underline">6. Privacy and Data</a></li>
            <li><a href="#s7" className="text-blue-400 hover:underline">7. Export Controls</a></li>
            <li><a href="#s8" className="text-blue-400 hover:underline">8. Payments and Subscriptions</a></li>
            <li><a href="#s9" className="text-blue-400 hover:underline">9. Termination</a></li>
            <li><a href="#s10" className="text-blue-400 hover:underline">10. Disclaimer of Warranties</a></li>
            <li><a href="#s11" className="text-blue-400 hover:underline">11. Limitation of Liability</a></li>
            <li><a href="#s12" className="text-blue-400 hover:underline">12. Indemnification</a></li>
            <li><a href="#s13" className="text-blue-400 hover:underline">13. Force Majeure</a></li>
            <li><a href="#s14" className="text-blue-400 hover:underline">14. Dispute Resolution</a></li>
            <li><a href="#s15" className="text-blue-400 hover:underline">15. Modifications</a></li>
            <li><a href="#s16" className="text-blue-400 hover:underline">16. General Provisions</a></li>
          </ol>
        </nav>

        <Section id="s1" title="1. The Source Platform">
          <SubSection title="1.1 Platform Description">
            <p>
              Source is an AI-powered cognitive twin platform that enables interactions with hyper-realistic digital avatars of public figures, including spiritual leaders, thought leaders, wellness practitioners, and other high-value individuals, whether living or historical (each, a "Featured Individual"). In the case of deceased individuals, their estate, heirs, or authorized rights holders have granted or confirmed Super Real's authorization to incorporate such individual's name, likeness, voice, and teachings into the Platform. Avatars are powered by custom large language models ("LLMs"), voice synthesis technology, and generative AI systems trained on content incorporated pursuant to documented authorization. The Platform is operated by Super Real Inc. and made available via mobile application.
            </p>
          </SubSection>

          <SubSection title="1.2 Nature of Interactions">
            <p>
              All interactions on the Platform occur exclusively with AI-generated digital representations. No communication through the Platform constitutes direct, real-time, or any other form of personal contact with any Featured Individual. Responses generated by avatar LLMs reflect algorithmically synthesized representations based on training data and do not, under any circumstances, constitute the personal views, advice, endorsements, religious guidance, professional opinions, or legally binding statements of the Featured Individual.
            </p>
          </SubSection>

          <div className="my-6 rounded-lg border-l-4 border-blue-400 bg-neutral-900/50 p-4 italic font-medium text-neutral-300">
            ⊳ NEW – Beta and Alpha Services
          </div>

          <SubSection title="1.3 Pre-Release and Beta Services">
            <p>
              Certain features, avatars, or capabilities of the Platform may be offered in a pre-release, alpha, or beta state (collectively, "Beta Services"). Beta Services are provided for evaluation and feedback purposes only. They are inherently experimental, may contain errors or instabilities, and are not subject to the same quality or availability standards as generally available features. Super Real provides Beta Services "AS IS" with no warranties of any kind and expressly disclaims all liability for any harm, data loss, or output errors arising from your use of Beta Services. Super Real may discontinue, modify, or graduate Beta Services to general availability at any time without notice or liability.
            </p>
          </SubSection>
        </Section>

        <Section id="s2" title="2. Eligibility and Account Registration">
          <SubSection title="2.1 Age Requirement">
            <p>
              You must be at least 18 years of age to access or use the Platform in any jurisdiction. By accessing the Platform, you represent and warrant that you meet this age requirement and that you have the legal capacity to enter into a binding agreement. Super Real reserves the right to immediately terminate accounts where age misrepresentation is suspected and to report such misrepresentation to relevant authorities where required by law.
            </p>
          </SubSection>

          <SubSection title="2.2 Account Obligations">
            <p>You are solely responsible for maintaining the security and confidentiality of your account credentials and for all activity that occurs under your account. You agree to:</p>
            <ul className="ml-5 list-disc space-y-2">
              <li>Provide accurate, current, and complete registration information at all times</li>
              <li>Promptly update your account information if any details change</li>
              <li>Notify Super Real immediately at {CONTACT_EMAIL} of any actual or suspected unauthorized access to or use of your account</li>
              <li>Not share, sell, rent, transfer, or sublicense your account or account credentials to any third party</li>
              <li>Not create more than one account per individual without Super Real's prior written consent</li>
            </ul>
            <p className="mt-2">Super Real shall not be liable for any loss or damage arising from your failure to comply with these obligations.</p>
          </SubSection>
        </Section>

        <Section id="s3" title="3. Intellectual Property">
          <SubSection title="3.1 Super Real's Proprietary Rights">
            <p>
              All technology, software, AI models, LLMs, voice synthesis systems, neural networks, training methodologies, user interface elements, design assets, trademarks, service marks, trade dress, and branding associated with the Platform (collectively, "Platform IP") are the exclusive property of Super Real Inc. and are protected under applicable intellectual property laws, including without limitation United States copyright, patent, and trademark laws and applicable international treaties. These Terms do not transfer to you any ownership interest in any Platform IP. The limited license granted herein is the sole right you acquire to interact with the Platform.
            </p>
          </SubSection>

          <SubSection title="3.2 Avatar and Likeness Rights">
            <p>
              Each Featured Individual, or where applicable their authorized estate, heirs, rights holders, or designated representatives (collectively, "Rights Holders"), has granted or confirmed Super Real's authorization to use their name, image, likeness, voice, persona, and personal attributes ("Persona Rights") for the purpose of creating and operating their digital avatar on the Platform. Such authorization may take the form of a formal license agreement, a no-objection certificate, an estate consent, or such other instrument as Super Real deems sufficient. These authorizations are personal to Super Real and do not extend to Users under any circumstances. You may not reproduce, distribute, publicly display, modify, create derivative works of, reverse engineer, reconstruct, extract, or otherwise exploit any avatar, its underlying AI model, generated outputs, voice outputs, or any Persona Rights, in whole or in part, without the prior written consent of both Super Real Inc. and the applicable Rights Holders.
            </p>
          </SubSection>

          <SubSection title="3.3 User-Generated Content">
            <p>
              To the extent you submit, post, upload, or transmit any content to the Platform ("User Content"), you grant Super Real a worldwide, perpetual, irrevocable, royalty-free, sublicensable, non-exclusive license to use, reproduce, process, adapt, modify, publish, translate, and display such User Content for the purposes of operating, improving, and promoting the Platform. You represent and warrant that (a) you own or have all necessary rights to grant this license; (b) your User Content does not infringe, misappropriate, or violate any third-party intellectual property, privacy, publicity, or other rights; and (c) your User Content does not violate any applicable law or regulation.
            </p>
          </SubSection>

          <SubSection title="3.4 Copyright Policy and DMCA Agent">
            <p>
              Super Real respects intellectual property rights and complies with the Digital Millennium Copyright Act ("DMCA"). If you believe that any content on the Platform infringes your copyright, you may submit a written notice to our designated Copyright Agent at:
            </p>
            <Table headers={["Contact", "Details"]} rows={[
              ["Copyright Agent", "Super Real Inc."],
              ["Email", CONTACT_EMAIL],
              ["Subject Line", "DMCA Takedown Notice"]
            ]} />
            <p>
              Your notice must include: (i) your signature or electronic signature; (ii) identification of the copyrighted work claimed to be infringed; (iii) identification of the infringing material and its location on the Platform; (iv) your contact information; (v) a statement that you have a good-faith belief that the use is not authorized; and (vi) a statement, under penalty of perjury, that the information in the notice is accurate and you are the copyright owner or authorized to act on their behalf. Counter-notifications and repeat infringer policies are governed by the DMCA.
            </p>
          </SubSection>
        </Section>

        <Section id="s4" title="4. Acceptable Use">
          <SubSection title="4.1 Permitted Uses">
            <p>
              You may use the Platform solely for lawful, personal, non-commercial purposes in strict accordance with these Terms and all applicable laws.
            </p>
          </SubSection>

          <SubSection title="4.2 Prohibited Conduct">
            <p>You expressly agree not to engage in, facilitate, or encourage any of the following:</p>
            <ul className="ml-5 list-disc space-y-2">
              <li>Impersonate, defame, harass, threaten, stalk, or generate harmful, abusive, or demeaning content targeting any Featured Individual, other User, or any third party</li>
              <li>Use the Platform to generate, distribute, or facilitate the creation of deepfake content, synthetic media, non-consensual intimate imagery, or AI-generated content that falsely attributes statements or views to any Featured Individual outside the Platform</li>
              <li>Attempt to extract, copy, reconstruct, or replicate any LLM, voice model, or AI system underlying the Platform through any means, including prompt injection, jailbreaking, adversarial attacks, model inversion, membership inference attacks, or systematic querying</li>
              <li>Use automated bots, scrapers, crawlers, or data harvesting tools to access, collect, index, or aggregate Platform content or outputs</li>
              <li>Circumvent, disable, reverse engineer, or interfere with any security, authentication, access control, digital rights management, or rate-limiting mechanism of the Platform</li>
              <li>Use the Platform for any commercial purpose, including reselling, sublicensing, or monetizing access to Platform interactions or outputs, without Super Real's prior written consent</li>
              <li>Upload, transmit, or introduce malicious code, viruses, ransomware, spyware, or any software designed to damage, disrupt, or gain unauthorized access to the Platform or its infrastructure</li>
              <li>Use the Platform in any manner that violates applicable federal, state, local, or international laws, regulations, or the rights of any third party</li>
              <li>Engage in any conduct that could damage Super Real's reputation or relationship with any Featured Individual</li>
            </ul>
            <p className="mt-3">
              If you encounter content on the Platform that you believe violates these Terms, is inaccurate, harmful, or otherwise objectionable, you may report it by using the in-app "Report" function available within each conversation, or by contacting Super Real at {CONTACT_EMAIL} with the subject line "Content Report." Super Real will review all reports and take such action as it deems appropriate in its sole discretion, which may include removal of content, account warnings, or account termination. Super Real does not guarantee any particular outcome or response time for content reports.
            </p>
          </SubSection>
        </Section>

        <Section id="s5" title="5. AI-Generated Content Disclaimer">
          <p>
            The Platform employs generative artificial intelligence technologies that produce dynamic, algorithmically generated outputs. These outputs are inherently probabilistic and are subject to error. Super Real does not guarantee the accuracy, completeness, reliability, timeliness, or fitness for any particular purpose of any content generated by avatar LLMs.
          </p>
          <p className="mt-3">AI-generated content on the Platform:</p>
          <ul className="ml-5 list-disc space-y-2">
            <li>Does not constitute professional advice of any kind, including without limitation legal, financial, medical, psychological, psychiatric, or spiritual advice</li>
            <li>May contain factual errors, hallucinations, fabrications, or outputs that do not reflect the actual views, beliefs, or teachings of the Featured Individual</li>
            <li>Must not be relied upon as a substitute for consultation with a qualified, licensed professional</li>
            <li>Is not reviewed or approved by the Featured Individual prior to delivery</li>
          </ul>
          <LegalWarning>
            <p>Super Real expressly disclaims any and all liability for any decision made, action taken, or harm suffered in reliance on AI-generated content on the Platform.</p>
            <p>IMPORTANT MENTAL AND SPIRITUAL WELLNESS NOTICE: The Source Platform features AI-generated representations of spiritual leaders and wellness practitioners. THESE REPRESENTATIONS DO NOT PROVIDE SPIRITUAL DIRECTION, RELIGIOUS COUNSEL, MENTAL HEALTH THERAPY, CRISIS INTERVENTION, OR ANY FORM OF CLINICAL OR PASTORAL CARE. If you are experiencing a mental health crisis, suicidal ideation, spiritual distress, or any psychological emergency, please contact a licensed mental health professional or call your local emergency services immediately. DO NOT rely on any Platform interaction as a substitute for qualified human support. Super Real expressly disclaims all liability for harm arising from reliance on Platform content in any wellness, mental health, or spiritual context.</p>
          </LegalWarning>
        </Section>

        <Section id="s6" title="6. Privacy and Data">
          <p>
            Your use of the Platform is governed by Super Real's Privacy Policy, which is incorporated herein by reference and available within the Platform. By using the Platform, you consent to the collection, use, processing, and sharing of your information as described in the Privacy Policy. Super Real collects and processes interaction data for the purposes of operating and improving AI model performance and Platform functionality. Interaction data is de-identified before use in any model training pipeline.
          </p>

          <SubSection title="6.1 International Distribution and Applicable Law">
            <p>
              The Platform is operated by Super Real Inc., a Delaware corporation, and is distributed globally through the Apple App Store and other authorized channels. Where Super Real makes the Platform available in a jurisdiction, it does so in compliance with applicable distribution requirements for that territory, including Apple's App Store guidelines and relevant local laws. If you access the Platform from a jurisdiction where its use is restricted or prohibited by law, you do so at your own initiative and are solely responsible for compliance with applicable local law. Super Real expressly excludes the Platform from distribution in jurisdictions where it has determined that legal or regulatory requirements cannot be met, including the People's Republic of China and the Russian Federation.
            </p>
          </SubSection>

          <SubSection title="6.2 Data Subject Rights">
            <p>
              Where applicable law grants you rights in respect of your personal data, including under the EU General Data Protection Regulation ("GDPR"), the UK GDPR, Turkey's Personal Data Protection Law ("KVKK"), or India's Digital Personal Data Protection Act ("DPDP Act"), you may exercise the following rights by contacting Super Real at {CONTACT_EMAIL}:
            </p>
            <ul className="ml-5 list-disc space-y-2">
              <li><strong>Right of Access:</strong> request a copy of the personal data Super Real holds about you</li>
              <li><strong>Right to Erasure:</strong> request deletion of your personal data, subject to any retention obligations required by law</li>
              <li><strong>Right to Rectification:</strong> request correction of inaccurate personal data</li>
              <li><strong>Right to Data Portability:</strong> request your personal data in a structured, machine-readable format where technically feasible</li>
              <li><strong>Right to Object or Restrict Processing:</strong> object to or request restriction of certain processing activities</li>
            </ul>
            <p className="mt-3">
              To exercise any of the foregoing rights, please submit a written request to {CONTACT_EMAIL} with the subject line "Data Rights Request." Super Real will respond within the timeframe required by applicable law (typically 30 days). You may also exercise your right to erasure directly through the "Delete My Account and Data" function in the Platform settings. Super Real will not discriminate against you for exercising any applicable data rights.
            </p>
          </SubSection>
        </Section>

        <Section id="s7" title="7. Export Controls and Sanctions Compliance">
          <p>
            The Platform incorporates artificial intelligence technology and software that may be subject to United States export control laws and regulations, including the Export Administration Regulations ("EAR") administered by the U.S. Department of Commerce and economic sanctions programs administered by the U.S. Department of the Treasury's Office of Foreign Assets Control ("OFAC"). You represent and warrant that:
          </p>
          <ul className="ml-5 list-disc space-y-2">
            <li>You are not located in, or a national or resident of, any country subject to a U.S. government embargo or designated as a "terrorist-supporting" country</li>
            <li>You are not listed on any U.S. government list of prohibited or restricted parties, including OFAC's Specially Designated Nationals List</li>
            <li>You will not use the Platform for any purpose prohibited by U.S. export laws, including without limitation the development, design, manufacture, or production of weapons of mass destruction</li>
          </ul>
          <p className="mt-3">Violation of this section will result in immediate account termination and may be reported to relevant authorities.</p>
        </Section>

        <Section id="s8" title="8. Payments and Subscriptions">
          <SubSection title="8.1 Pricing and Billing">
            <p>
              Certain features of the Platform may require a paid subscription or in-app purchase. All pricing is displayed in United States Dollars unless otherwise indicated. By subscribing or making a purchase, you authorize Super Real to charge the applicable fees to your designated payment method on a recurring basis where applicable. All fees are exclusive of applicable taxes, which are your sole responsibility.
            </p>
          </SubSection>

          <SubSection title="8.2 Refund Policy">
            <p>
              All purchases and subscription fees are final and non-refundable except where expressly required by applicable law. Super Real may, in its sole and absolute discretion, issue account credits or partial refunds in exceptional circumstances. Refund requests must be submitted to {CONTACT_EMAIL} within seven (7) calendar days of the disputed charge, with sufficient detail to identify the transaction.
            </p>
          </SubSection>

          <SubSection title="8.3 Free Trials">
            <p>
              Where a free trial is offered, you must cancel your subscription before the expiration of the trial period to avoid incurring the applicable subscription fee. Super Real will provide advance notice of the upcoming charge in accordance with applicable law. Failure to cancel before the trial period ends constitutes your authorization for the subscription charge.
            </p>
          </SubSection>

          <SubSection title="8.4 Avatar Availability and Service Modifications">
            <p>
              The availability of specific Featured Individuals and their digital avatars on the Platform is contingent upon the continuation of applicable licensing agreements between Super Real and those Featured Individuals. Super Real reserves the right to remove, suspend, or modify any avatar, content, or feature at any time, including in the event that a Featured Individual withdraws their consent or terminates their agreement with Super Real. In such circumstances:
            </p>
            <ul className="ml-5 list-disc space-y-2">
              <li>Super Real will use commercially reasonable efforts to provide advance notice where practicable</li>
              <li>Your sole remedy shall be a pro-rated credit for any unused prepaid subscription period attributable to the removed avatar, at Super Real's discretion</li>
              <li>Super Real shall not be liable for any consequential, indirect, or other damages arising from such removal</li>
            </ul>
            <p className="mt-2">The unavailability of a specific avatar does not entitle you to terminate your subscription or receive a full refund.</p>
          </SubSection>

          <SubSection title="8.5 Managing Your Apple App Store Subscription">
            <p>
              If you subscribed to the Platform through the Apple App Store, your subscription is managed by Apple and is subject to Apple's terms and conditions in addition to these Terms. To manage, modify, or cancel your subscription, go to Settings &gt; [Your Name] &gt; Subscriptions on your iOS device, or visit your Apple ID account page at appleid.apple.com. Super Real does not have access to your Apple payment information and cannot cancel or modify App Store subscriptions on your behalf. All billing inquiries relating to App Store purchases must be directed to Apple. Cancellation of a subscription through Apple takes effect at the end of the current billing period; you will continue to have access to paid features until that date.
            </p>
          </SubSection>
        </Section>

        <Section id="s9" title="9. Termination">
          <SubSection title="9.1 Termination by Super Real">
            <p>
              Super Real reserves the right to immediately suspend or permanently terminate your account and access to the Platform, with or without prior notice, for any violation of these Terms, conduct that Super Real, in its sole discretion, deems harmful to the Platform, other Users, Featured Individuals, Super Real's business interests, or the public, or for any other reason at Super Real's sole discretion. Termination does not entitle you to any refund of prepaid fees, except as expressly provided in Section 8.4.
            </p>
          </SubSection>

          <SubSection title="9.2 Termination by User">
            <p>
              You may terminate your account at any time by following the account deletion process within the Platform settings. Termination takes effect upon completion of the deletion process. Termination does not affect any obligations, liabilities, or rights that accrued prior to the termination date.
            </p>
          </SubSection>

          <SubSection title="9.3 Effect of Termination">
            <p>
              Upon termination for any reason, your license to access and use the Platform ceases immediately. Sections 3 (Intellectual Property), 5 (AI-Generated Content Disclaimer), 7 (Export Controls), 10 (Disclaimer of Warranties), 11 (Limitation of Liability), 12 (Indemnification), 13 (Dispute Resolution), and 14 (General Provisions) shall survive termination indefinitely.
            </p>
          </SubSection>
        </Section>

        <Section id="s10" title="10. Disclaimer of Warranties">
          <LegalWarning>
            <p>
              THE PLATFORM, INCLUDING ALL CONTENT, AI-GENERATED OUTPUTS, AVATARS, AND RELATED SERVICES, IS PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS, WITHOUT WARRANTIES OF ANY KIND, WHETHER EXPRESS, IMPLIED, STATUTORY, OR OTHERWISE. TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, SUPER REAL INC. EXPRESSLY DISCLAIMS ALL WARRANTIES, INCLUDING WITHOUT LIMITATION WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, NON-INFRINGEMENT, ACCURACY, RELIABILITY, AND ANY WARRANTIES ARISING OUT OF COURSE OF DEALING, USAGE, OR TRADE PRACTICE. SUPER REAL DOES NOT WARRANT THAT: (A) THE PLATFORM WILL OPERATE WITHOUT INTERRUPTION OR ERROR; (B) THE PLATFORM IS FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS; (C) AI-GENERATED OUTPUTS WILL BE ACCURATE, COMPLETE, OR APPROPRIATE FOR YOUR PURPOSES; OR (D) ANY ERRORS OR DEFECTS IN THE PLATFORM WILL BE CORRECTED. NO ORAL OR WRITTEN INFORMATION OR ADVICE PROVIDED BY SUPER REAL OR ITS REPRESENTATIVES SHALL CREATE ANY WARRANTY.
            </p>
          </LegalWarning>
        </Section>

        <Section id="s11" title="11. Limitation of Liability">
          <LegalWarning>
            <p>
              TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, SUPER REAL INC., AND ITS OFFICERS, DIRECTORS, EMPLOYEES, AGENTS, LICENSORS, FEATURED INDIVIDUALS, AND SERVICE PROVIDERS SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, PUNITIVE, OR EXEMPLARY DAMAGES OF ANY KIND, INCLUDING WITHOUT LIMITATION LOSS OF PROFITS, REVENUE, DATA, BUSINESS, GOODWILL, OR ANTICIPATED SAVINGS, ARISING OUT OF OR IN ANY WAY RELATED TO: (A) YOUR ACCESS TO OR USE OF, OR INABILITY TO ACCESS OR USE, THE PLATFORM; (B) ANY AI-GENERATED CONTENT OR AVATAR OUTPUT; (C) ANY UNAUTHORIZED ACCESS TO OR ALTERATION OF YOUR ACCOUNT OR DATA; (D) ANY DECISION MADE OR ACTION TAKEN IN RELIANCE ON PLATFORM CONTENT; OR (E) ANY OTHER MATTER RELATING TO THE PLATFORM. THIS LIMITATION APPLIES REGARDLESS OF THE LEGAL THEORY UNDER WHICH LIABILITY IS SOUGHT AND EVEN IF SUPER REAL HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
            </p>
            <p className="mt-3">
              IN NO EVENT SHALL SUPER REAL'S TOTAL AGGREGATE LIABILITY TO YOU FOR ALL CLAIMS ARISING OUT OF OR RELATING TO THESE TERMS OR THE PLATFORM EXCEED THE GREATER OF: (A) THE TOTAL AMOUNTS ACTUALLY PAID BY YOU TO SUPER REAL IN THE TWELVE (12) CALENDAR MONTHS IMMEDIATELY PRECEDING THE EVENT GIVING RISE TO THE CLAIM; OR (B) ONE HUNDRED UNITED STATES DOLLARS (USD $100.00). THE EXISTENCE OF MORE THAN ONE CLAIM WILL NOT EXPAND THIS LIMIT.
            </p>
          </LegalWarning>
          <p className="mt-4 text-sm italic text-neutral-400">
            Some jurisdictions do not allow the exclusion or limitation of certain damages. In such jurisdictions, Super Real's liability shall be limited to the maximum extent permitted by applicable law.
          </p>
        </Section>

        <Section id="s12" title="12. Indemnification">
          <p>
            To the fullest extent permitted by applicable law, you agree to defend, indemnify, and hold harmless Super Real Inc. and its officers, directors, shareholders, employees, contractors, agents, licensors, Featured Individuals, and service providers (collectively, "Indemnified Parties") from and against any and all claims, liabilities, damages, losses, judgments, awards, costs, and expenses (including reasonable attorneys' fees and litigation costs) arising out of or relating to:
          </p>
          <ul className="ml-5 list-disc space-y-2">
            <li>Your violation of any provision of these Terms</li>
            <li>Your User Content</li>
            <li>Your use of the Platform in a manner not authorized by these Terms</li>
            <li>Your violation of any applicable law or regulation</li>
            <li>Your infringement of any intellectual property, privacy, or other right of any person or entity</li>
            <li>Any dispute between you and any third party in connection with your use of the Platform</li>
          </ul>
          <p className="mt-3">
            Super Real reserves the right, at its own expense, to assume the exclusive defense and control of any matter otherwise subject to indemnification by you. You agree to cooperate fully with Super Real's defense of such claims. Your indemnification obligation shall survive termination of these Terms. For the avoidance of doubt, your indemnification obligations under this Section are not subject to the liability cap set forth in Section 11.
          </p>
        </Section>

        <Section id="s13" title="13. Force Majeure">
          <p>
            Super Real shall not be liable for any delay, interruption, or failure in the performance of its obligations under these Terms to the extent such delay, interruption, or failure is caused by circumstances beyond Super Real's reasonable control, including without limitation: acts of God; natural disasters; war, terrorism, or civil unrest; pandemic or epidemic; government action or regulation; Internet outages or telecommunications failures; failures of third-party AI infrastructure providers, cloud platforms, or API services; labor disputes; or power failures ("Force Majeure Event"). Super Real shall use commercially reasonable efforts to resume performance as promptly as practicable following a Force Majeure Event. A Force Majeure Event does not excuse your payment obligations for services already rendered.
          </p>
        </Section>

        <Section id="s14" title="14. Dispute Resolution and Governing Law">
          <SubSection title="14.1 Governing Law">
            <p>
              These Terms shall be governed by and construed in accordance with the laws of the State of Delaware, United States of America, without regard to its conflict of law principles or any choice of law provisions that might otherwise direct the application of the laws of any other jurisdiction.
            </p>
          </SubSection>

          <SubSection title="14.2 Binding Arbitration Agreement">
            <p>
              <strong>PLEASE READ THIS SECTION CAREFULLY. IT AFFECTS YOUR LEGAL RIGHTS.</strong> Any dispute, claim, or controversy of any kind arising out of or relating to these Terms, the Platform, or your relationship with Super Real that cannot be resolved informally shall be exclusively resolved by final and binding individual arbitration administered by the American Arbitration Association ("AAA") in accordance with its Consumer Arbitration Rules then in effect, except as modified by these Terms. The arbitration shall be conducted in the English language in Wilmington, Delaware, United States. The arbitrator shall have exclusive authority to resolve all issues of arbitrability. Judgment on the arbitrator's award may be entered in any court of competent jurisdiction.
            </p>
          </SubSection>

          <SubSection title="14.3 Class Action and Jury Trial Waiver">
            <LegalWarning>
              <p>
                YOU AND SUPER REAL EACH WAIVE THE RIGHT TO A TRIAL BY JURY AND THE RIGHT TO PARTICIPATE IN ANY CLASS ACTION, COLLECTIVE ACTION, PRIVATE ATTORNEY GENERAL ACTION, OR OTHER REPRESENTATIVE PROCEEDING OF ANY KIND. ALL ARBITRATIONS SHALL PROCEED ON AN INDIVIDUAL BASIS ONLY. IF THIS CLASS ACTION WAIVER IS FOUND TO BE UNENFORCEABLE IN WHOLE OR IN PART, THE ARBITRATION AGREEMENT IN SECTION 14.2 SHALL BE NULL AND VOID WITH RESPECT TO THOSE CLAIMS.
              </p>
            </LegalWarning>
          </SubSection>

          <SubSection title="14.4 Informal Resolution Requirement">
            <p>
              Before initiating any arbitration, you agree to first contact Super Real at {CONTACT_EMAIL} and provide a written description of your dispute, the relief sought, and your contact information. The parties shall attempt to resolve the dispute informally for a period of thirty (30) days from the date of receipt. This informal resolution process is a prerequisite to arbitration.
            </p>
          </SubSection>

          <SubSection title="14.5 Equitable Relief Exception">
            <p>
              Notwithstanding the foregoing, either party may seek temporary or permanent injunctive or other equitable relief in any court of competent jurisdiction without first submitting to arbitration, solely to prevent the actual or threatened infringement, misappropriation, or violation of intellectual property rights, confidential information, or Persona Rights. The seeking of such relief shall not waive the right to arbitrate other claims.
            </p>
          </SubSection>

          <SubSection title="14.6 Statute of Limitations">
            <p>
              To the maximum extent permitted by applicable law, any claim or cause of action arising out of or relating to these Terms or the Platform must be filed within one (1) year after the claim or cause of action arose, regardless of any statute of limitations to the contrary. Claims not filed within this period are permanently barred.
            </p>
          </SubSection>
        </Section>

        <Section id="s15" title="15. Modifications to the Terms">
          <p>
            Super Real reserves the right to modify, update, or replace these Terms at any time in its sole discretion. When material changes are made, Super Real will provide notice through the Platform and via the email address associated with your account no less than fourteen (14) calendar days before the changes take effect. Non-material changes take effect immediately upon posting. Your continued use of the Platform after the effective date of any revised Terms constitutes your binding acceptance of those changes. If you do not agree to the revised Terms, you must immediately discontinue use of the Platform and may terminate your account pursuant to Section 9.2.
          </p>
        </Section>

        <Section id="s16" title="16. General Provisions">
          <SubSection title="16.1 Entire Agreement">
            <p>
              These Terms, together with the Privacy Policy and any other policies or agreements expressly incorporated herein by reference, constitute the entire agreement between you and Super Real with respect to the Platform and supersede all prior and contemporaneous agreements, representations, warranties, and understandings of any kind.
            </p>
          </SubSection>

          <SubSection title="16.2 Severability">
            <p>
              If any provision of these Terms is held by a court or arbitrator of competent jurisdiction to be invalid, illegal, or unenforceable, such provision shall be modified to the minimum extent necessary to make it enforceable, or if not capable of modification, severed from these Terms. The remaining provisions shall continue in full force and effect without impairment.
            </p>
          </SubSection>

          <SubSection title="16.3 No Waiver">
            <p>
              No failure or delay by Super Real in exercising any right, power, or remedy under these Terms shall operate as a waiver of that right, power, or remedy. No waiver by Super Real of any breach shall be deemed a waiver of any subsequent or continuing breach.
            </p>
          </SubSection>

          <SubSection title="16.4 Assignment">
            <p>
              You may not assign, delegate, or transfer any of your rights or obligations under these Terms, by operation of law or otherwise, without Super Real's prior written consent. Any purported assignment in violation of this section is void. Super Real may freely assign these Terms and its rights and obligations hereunder without restriction, including in connection with any merger, acquisition, corporate reorganization, or sale of all or substantially all of Super Real's assets. These Terms shall be binding upon and inure to the benefit of each party's permitted successors and assigns.
            </p>
          </SubSection>

          <SubSection title="16.5 Relationship of the Parties">
            <p>
              Nothing in these Terms shall be construed to create a partnership, joint venture, agency, employment, or fiduciary relationship between you and Super Real. You have no authority to bind Super Real in any manner.
            </p>
          </SubSection>

          <SubSection title="16.6 Notices">
            <p>
              All legal notices to Super Real under these Terms must be in writing and sent to {CONTACT_EMAIL}. Super Real may provide notices to you via the email address associated with your account or through in-app notifications. Notices sent by email are deemed received 24 hours after transmission, absent evidence of non-delivery.
            </p>
          </SubSection>

          <SubSection title="16.7 Headings">
            <p>
              Section headings in these Terms are for reference and convenience only and shall not affect the interpretation of any provision.
            </p>
          </SubSection>
        </Section>

        <footer className="mt-16 border-t border-neutral-800 pt-8 text-center text-sm text-neutral-500">
          <p>
            <strong>Super Real Inc.</strong><br />
            {CONTACT_EMAIL}<br />
            Last Updated: {EFFECTIVE_DATE} | Version 3.0<br />
            © {new Date().getFullYear()} Super Real Inc. All rights reserved.
          </p>
        </footer>
      </main>
      <Footer />
    </>
  );
}

function Section({
  id,
  title,
  children,
}: {
  id?: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="mb-10 scroll-mt-20">
      <h2 className="mb-4 text-2xl font-light text-neutral-100">{title}</h2>
      <div className="space-y-3 text-base leading-relaxed text-neutral-300">
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
      <h3 className="mb-2 text-lg font-medium text-neutral-200">{title}</h3>
      <div className="space-y-2 text-base leading-relaxed text-neutral-300">
        {children}
      </div>
    </div>
  );
}

function WarningBanner({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-12 rounded-lg border border-red-900 bg-red-950/30 p-6 font-medium text-red-200">
      {children}
    </div>
  );
}

function LegalWarning({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-6 rounded-lg border border-red-900 bg-red-950/20 p-4 text-sm font-medium text-red-200">
      {children}
    </div>
  );
}

function Table({
  headers,
  rows,
}: {
  headers: string[];
  rows: (string | React.ReactNode)[][];
}) {
  return (
    <div className="my-4 overflow-x-auto">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-neutral-700">
            {headers.map((header) => (
              <th
                key={header}
                className="bg-neutral-900 px-4 py-3 text-left font-medium text-neutral-100"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, idx) => (
            <tr
              key={idx}
              className="border-b border-neutral-800 hover:bg-neutral-900/30"
            >
              {row.map((cell, cellIdx) => (
                <td
                  key={cellIdx}
                  className="px-4 py-3 text-neutral-300"
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
