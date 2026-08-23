import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionEyebrow } from "@/components/sections/SectionHeading";

const testimonials = [
  { quote: "I didn't expect an app to change how I see myself. This did.", name: "A." },
  {
    quote:
      "For the first time, I feel like I'm making decisions from who I am, not who I'm supposed to be.",
    name: "M.",
  },
  { quote: "It doesn't feel like using a product. It feels like being understood.", name: "R." },
  {
    quote:
      "I came for curiosity. I stayed because I found something I didn't know I was looking for.",
    name: "S.",
  },
];

export const TestimonialsSection = () => {
  const [i, setI] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setI((v) => (v + 1) % testimonials.length), 6500);
    return () => clearInterval(id);
  }, []);

  const t = testimonials[i];

  return (
    <section
      data-testid="testimonials-section"
      className="relative overflow-hidden bg-[#050505] px-6 py-40 md:py-56"
    >
      <div className="mx-auto max-w-4xl text-center">
        <SectionEyebrow className="mx-auto">Voices from the path</SectionEyebrow>

        <div className="relative mt-16 min-h-[240px] md:min-h-[220px]">
          <AnimatePresence mode="wait">
            <motion.figure
              key={i}
              data-testid={`testimonial-${i}`}
              initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -20, filter: "blur(8px)" }}
              transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
              className="mx-auto flex flex-col items-center"
            >
              {/* Abstract avatar */}
              <div className="relative mb-10 h-14 w-14">
                <div
                  className="absolute inset-0 rounded-full"
                  style={{
                    background:
                      "radial-gradient(circle, rgba(232,194,132,0.5) 0%, rgba(232,194,132,0.05) 60%, transparent 100%)",
                  }}
                />
                <div className="absolute left-1/2 top-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[color:var(--gold)]" />
              </div>

              <blockquote className="mx-auto max-w-2xl font-mystic text-2xl font-light italic leading-[1.4] text-white/90 md:text-3xl lg:text-4xl">
                "{t.quote}"
              </blockquote>
              <figcaption className="mt-8 font-ui text-[10px] uppercase tracking-[0.4em] text-white/50">
                {t.name}
              </figcaption>
            </motion.figure>
          </AnimatePresence>
        </div>

        {/* Progress dots */}
        <div className="mt-14 flex items-center justify-center gap-3">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              data-testid={`testimonial-dot-${idx}`}
              onClick={() => setI(idx)}
              aria-label={`Show testimonial ${idx + 1}`}
              className="h-[2px] w-8 bg-white/15 transition-colors hover:bg-white/40"
            >
              <span
                className="block h-full bg-[color:var(--gold)] transition-opacity"
                style={{ opacity: i === idx ? 1 : 0 }}
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};
