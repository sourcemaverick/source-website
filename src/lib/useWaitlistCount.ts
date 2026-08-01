"use client";

import { useCallback, useEffect, useState } from "react";
import { WAITLIST_BASELINE } from "./constants";

/**
 * Single source of truth for the waitlist count shown anywhere on the site.
 * - null until the first response (render a loading state)
 * - falls back to WAITLIST_BASELINE if the API is unreachable
 * - never moves downward mid-session (the API caches for 60s)
 * - polls every `pollMs` so the number stays live
 */
export function useWaitlistCount(pollMs = 30000) {
  const [count, setCount] = useState<number | null>(null);

  const refetch = useCallback(async () => {
    try {
      const response = await fetch("/api/waitlist/count");
      const data = await response.json();
      if (response.ok) {
        setCount((c) => (c === null ? data.count : Math.max(c, data.count)));
      } else {
        setCount((c) => c ?? WAITLIST_BASELINE);
      }
    } catch {
      setCount((c) => c ?? WAITLIST_BASELINE);
    }
  }, []);

  /* Optimistic bump right after a successful signup, ahead of the API cache */
  const increment = useCallback(() => {
    setCount((c) => (c === null ? c : c + 1));
  }, []);

  useEffect(() => {
    refetch();
    const interval = setInterval(refetch, pollMs);
    return () => clearInterval(interval);
  }, [refetch, pollMs]);

  return { count, refetch, increment };
}
