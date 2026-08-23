import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const blocks = [
  "In our modern society, our biggest problem is that we are never truly aware when we are awake and never truly relaxed when we are asleep.",
  "We optimized everything, except the part of us that needs to feel.",
  "We have all the convenience in the world but we are lacking purpose and inner drive.",
  "You have enough information. What you need is authenticity and clarity.",
];

const Block = ({ text, index, progress }) => {
  const n = blocks.length;
  const start = index / n;
  const peak = (index + 0.5) / n;
  const end = (index + 1) / n;

  const opacity = useTransform(
    progress,
    [start, peak - 0.02, peak + 0.02, end],
    [0, 1, 1, 0]
  );
  const y = useTransform(progress, [start, peak, end], [30, 0, -30]);
  const blur = useTransform(
    progress,
    [start, peak - 0.03, peak + 0.03, end],
    ["12px", "0px", "0px", "12px"]
  );

  return (
    <div
      data-testid={`problem-block-${index}`}
      className="pointer-events-none absolute inset-0 flex items-center justify-center px-6"
    >
      <motion.p
        style={{ opacity, y, filter: blur }}
        className="mx-auto max-w-5xl text-center font-mystic text-3xl font-light leading-[1.25] text-white sm:text-4xl md:text-5xl lg:text-6xl"
      >
        {text}
      </motion.p>
    </div>
  );
};

export const ProblemSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const progressBar = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section
      data-testid="problem-section"
      ref={ref}
      className="relative bg-[#050505]"
      style={{ height: `${blocks.length * 100}vh` }}
    >
      <div className="sticky top-0 flex h-screen items-center justify-center overflow-hidden">
        {/* Ambient warm glow */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-1/2 h-[70vmin] w-[70vmin] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-40 blur-3xl"
               style={{ background: "radial-gradient(circle, rgba(200,168,106,0.18) 0%, transparent 70%)" }} />
        </div>

      <div className="pointer-events-none absolute inset-0">
        {blocks.map((t, i) => (
          <Block key={i} text={t} index={i} progress={scrollYProgress} />
        ))}
      </div>

        {/* Progress marker */}
        <div className="absolute bottom-16 left-1/2 -translate-x-1/2">
          <div className="relative h-[1px] w-40 bg-white/10">
            <motion.div
              className="absolute left-0 top-0 h-full bg-[color:var(--gold)]"
              style={{ width: progressBar }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
