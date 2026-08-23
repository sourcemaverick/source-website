import { motion } from "framer-motion";
import { Eye, Flame, Circle, Compass } from "lucide-react";
import { SectionEyebrow, SectionTitle } from "@/components/sections/SectionHeading";

const benefits = [
  {
    icon: Eye,
    title: "Know Who You Are",
    body: "Reconnect with your values beneath the roles and expectations you've carried.",
  },
  {
    icon: Flame,
    title: "Live From Authenticity",
    body: "Make choices from conviction, not from conditioning.",
  },
  {
    icon: Circle,
    title: "Live in Harmony",
    body: "Move through relationships and your environment with less friction.",
  },
  {
    icon: Compass,
    title: "Clarity and Commitment",
    body: "Build the foundation to pursue what success truly means to you.",
  },
];

export const BenefitsSection = () => (
  <section
    data-testid="benefits-section"
    className="relative bg-[#050505] px-6 py-40 md:py-56"
  >
    <div className="mx-auto max-w-6xl">
      <div className="max-w-2xl">
        <SectionEyebrow>What you leave with</SectionEyebrow>
        <div className="mt-6">
          <SectionTitle italic>The shape of a life<br />lived in truth.</SectionTitle>
        </div>
      </div>

      <div className="mt-24 grid grid-cols-1 gap-x-20 gap-y-20 md:grid-cols-2">
        {benefits.map((b, i) => {
          const Icon = b.icon;
          return (
            <motion.div
              key={b.title}
              data-testid={`benefit-${i}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-15% 0px" }}
              transition={{ duration: 1.1, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              <Icon
                className="h-7 w-7 stroke-[color:var(--gold)]"
                strokeWidth={1}
                aria-hidden="true"
              />
              <h3 className="mt-8 font-mystic text-3xl font-light leading-tight text-white md:text-4xl">
                {b.title}
              </h3>
              <p className="mt-5 max-w-md font-ui text-sm font-light leading-relaxed text-white/60 md:text-base">
                {b.body}
              </p>
            </motion.div>
          );
        })}
      </div>
    </div>
  </section>
);
