"use client";

import { motion } from "framer-motion";
import { useEffect, useState, useImperativeHandle, forwardRef } from "react";

const WaitlistCount = forwardRef((_, ref) => {
  const [count, setCount] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);

  const fetchCount = async () => {
    try {
      const response = await fetch("/api/waitlist/count");
      const data = await response.json();
      if (response.ok) {
        setCount(data.count);
      }
    } catch (error) {
      console.error("Failed to fetch waitlist count:", error);
    } finally {
      setLoading(false);
    }
  };

  useImperativeHandle(ref, () => ({
    refetch: fetchCount,
  }));

  useEffect(() => {
    fetchCount();
    // Refresh count every 30 seconds
    const interval = setInterval(fetchCount, 30000);
    return () => clearInterval(interval);
  }, []);

  if (loading) {
    return (
      <div className="h-16 animate-pulse rounded-xl bg-[rgba(255,255,255,0.05)]" />
    );
  }

  if (count === null) {
    return null;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="text-center"
    >
      <motion.div
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.2, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <p className="text-[clamp(3rem,8vw,5.5rem)] font-serif font-semibold leading-none gold-text">
          {count.toLocaleString()}
        </p>
        <p className="mt-4 font-serif italic text-[var(--text-secondary)] text-base sm:text-lg">
          users are currently on the waitlist
        </p>
      </motion.div>
    </motion.div>
  );
});

WaitlistCount.displayName = "WaitlistCount";
export default WaitlistCount;
