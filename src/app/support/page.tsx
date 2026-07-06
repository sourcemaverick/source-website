import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Support — Source",
  description: "Get support for your Source app questions and issues.",
};

export default function SupportPage() {
  return (
    <>
      <Navbar />
      <main className="relative mx-auto max-w-3xl px-6 py-16 text-neutral-200 sm:py-24">
        <header className="mb-16">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-neutral-400">
            Source
          </p>
          <h1 className="mt-2 text-4xl font-light tracking-tight text-neutral-100 sm:text-5xl">
            Support
          </h1>
          <p className="mt-4 text-sm text-neutral-400">
            We're here to help
          </p>
        </header>

        <section className="mb-12 rounded-lg border border-neutral-800 bg-neutral-900/50 p-8">
          <h2 className="mb-6 text-2xl font-light text-neutral-100">
            How can we help you?
          </h2>

          <p className="mb-6 text-base leading-relaxed text-neutral-300">
            For any questions, issues, or support queries about the Source app, please reach out directly to:
          </p>

          <div className="rounded-lg bg-neutral-900 p-6">
            <p className="mb-1 text-sm text-neutral-400">Contact</p>
            <p className="mb-4 text-lg font-medium text-neutral-100">
              Animesh Anand
            </p>
            <p className="mb-1 text-sm text-neutral-400">Title</p>
            <p className="mb-4 text-base text-neutral-200">
              CEO of Source
            </p>
            <p className="mb-1 text-sm text-neutral-400">Email</p>
            <p>
              <a
                href="mailto:animesh@sourcemaverick.ai"
                className="text-blue-400 underline hover:text-blue-300"
              >
                animesh@sourcemaverick.ai
              </a>
            </p>
          </div>

          <p className="mt-6 text-sm text-neutral-400">
            We typically respond to all support inquiries within 48 hours.
          </p>
        </section>

        <footer className="border-t border-neutral-800 pt-8 text-sm text-neutral-500">
          <p>
            © {new Date().getFullYear()} Super Real Inc. All rights reserved.
          </p>
        </footer>
      </main>
      <Footer />
    </>
  );
}
