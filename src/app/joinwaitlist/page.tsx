import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import JoinWaitlist from "@/components/JoinWaitlist";

const fraunces = Fraunces({
  subsets: ["latin"],
  style: ["normal", "italic"],
  axes: ["SOFT", "opsz"],
  variable: "--font-fraunces",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Source - Join the Launch",
  description:
    "You cannot be your thoughts, emotions or body. What can you be? Unpattern your mind to unlock the power of superconsciousness.",
};

export default function JoinWaitlistPage() {
  return (
    <div className={`${fraunces.variable} ${inter.variable}`}>
      <JoinWaitlist />
    </div>
  );
}
