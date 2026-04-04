"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

function easeOutCubic(t: number) {
  return 1 - Math.pow(1 - t, 3);
}

interface CountUpResult {
  display: string;
  done: boolean;
}

export function useCountUp(
  raw: string,
  duration = 2000,
): CountUpResult {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref as React.RefObject<Element>, { once: true, margin: "-40px" });
  const [value, setValue] = useState(0);
  const [done, setDone] = useState(false);
  const hasStarted = useRef(false);

  // Parse the raw value
  const isLessThan = raw.startsWith("<");
  const cleaned = raw.replace(/[^0-9.]/g, "");
  const target = parseFloat(cleaned) || 0;
  const suffix = raw.replace(/[0-9.<]/g, ""); // e.g. "%" or "ms"
  const isCountDown = isLessThan; // "<200ms" counts from higher to target

  useEffect(() => {
    if (!inView || hasStarted.current) return;
    hasStarted.current = true;

    const startValue = isCountDown ? target * 2 : 0;
    const startTime = performance.now();

    function tick(now: number) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = easeOutCubic(progress);

      if (isCountDown) {
        setValue(Math.round(startValue - (startValue - target) * eased));
      } else {
        setValue(Math.round(target * eased));
      }

      if (progress < 1) {
        requestAnimationFrame(tick);
      } else {
        setValue(target);
        setDone(true);
      }
    }

    requestAnimationFrame(tick);
  }, [inView, target, duration, isCountDown]);

  const display = `${isLessThan ? "<" : ""}${value}${suffix}`;

  return { display, done, ref } as CountUpResult & { ref: React.RefObject<HTMLSpanElement> };
}
