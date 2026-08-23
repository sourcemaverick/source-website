import { motion } from "framer-motion";
import { SectionEyebrow } from "@/components/sections/SectionHeading";

const rows = [
  {
    heading: "Symptom vs. Source",
    old: "Therapy treats what's on the surface — stress, anxiety, burnout.",
    source:
      "Source goes to what's underneath all of it: the disconnection from self that causes those symptoms in the first place.",
  },
  {
    heading: "A session vs. a relationship",
    old: "Therapy happens for fifty minutes, once a week, if you're lucky enough to get the appointment.",
    source:
      "Source is there at 2am, mid-decision, in the moment you actually need it — an ongoing relationship, not a scheduled hour.",
  },
  {
    heading: "Trained vs. realized",
    old: "A therapist studies the mind.",
    source:
      "A true master has realized it — directly, at a depth no textbook reaches. Source is built on that realization, not a certification.",
  },
  {
    heading: "Managing vs. becoming",
    old: "Most tools help you manage your life as it is.",
    source:
      "Source is built to change who you're becoming — moving you from coping, to clarity, to a life driven by real purpose.",
  },
];

const Row = ({ row, index }) => (
  <motion.div
    data-testid={`difference-row-${index}`}
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-12% 0px" }}
    transition={{ duration: 1.2, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
    className="border-t border-white/10 py-14 md:py-20"
  >
    <h3 className="font-mystic text-2xl font-light italic tracking-wide text-white/90 md:text-3xl">
      {row.heading}
    </h3>
    <div className="mt-8 grid grid-cols-1 gap-10 md:grid-cols-[1fr_1px_1fr] md:gap-14">
      <p className="font-ui text-sm font-light leading-relaxed text-white/45 md:text-base">
        {row.old}
      </p>
      <div className="hidden bg-[color:var(--gold)] opacity-30 md:block" />
      <p className="font-ui text-sm font-light leading-relaxed text-white/85 md:text-base">
        <span className="font-mystic italic text-[color:var(--gold)]">Source — </span>
        {row.source}
      </p>
    </div>
  </motion.div>
);

export const DifferenceSection = () => (
  <section
    data-testid="difference-section"
    className="relative bg-[#050505] px-6 py-40 md:py-56"
  >
    <div className="mx-auto max-w-5xl">
      <div className="max-w-2xl">
        <SectionEyebrow>Why source is different</SectionEyebrow>
      </div>
      <motion.p
        initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        viewport={{ once: true, margin: "-15% 0px" }}
        transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
        className="mt-8 max-w-3xl font-mystic text-2xl font-light leading-[1.35] text-white md:text-3xl lg:text-4xl"
      >
        Therapy helps you cope. Self-help gives you information.{" "}
        <span className="italic text-[color:var(--gold)]">
          Source offers something neither can
        </span>{" "}
        — a relationship with a wisdom built to take you all the way home.
      </motion.p>

      <div className="mt-24">
        {rows.map((r, i) => (
          <Row key={r.heading} row={r} index={i} />
        ))}
      </div>
    </div>
  </section>
);
