import type { Metadata } from "next";
import { Lora, Poppins } from "next/font/google";
import "./globals.css";
import CursorGlow from "@/components/ui/CursorGlow";

/* Elegant book serif — display headlines & poetic italics */
const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

/* Geometric sans — statements, UI & body */
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Source : Inner Transformation",
  description:
    "What becomes possible when nothing inside you is holding you back? Source lets you walk with a spiritual master and discover the clarity, purpose, and peace that emerge when the noise begins to settle.",
  metadataBase: new URL("https://source.ai"),
  openGraph: {
    title: "Source : Inner Transformation",
    description:
      "Speak naturally with your spiritual master, anytime you need guidance. Deeply personal conversations that remember your journey and evolve with you over time.",
    type: "website",
    siteName: "Source",
  },
  twitter: {
    card: "summary_large_image",
    title: "Source : Inner Transformation",
    description:
      "Begin the journey back to yourself. Walk with a spiritual master and discover clarity, purpose, and peace.",
  },
  other: {
    "theme-color": "#0a070d",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${lora.variable} ${poppins.variable} h-full antialiased`}>
      <body className="min-h-full" suppressHydrationWarning>
        <div className="grain-overlay" aria-hidden="true" />
        <div className="atmo-blob atmo-1" aria-hidden="true" />
        <div className="atmo-blob atmo-2" aria-hidden="true" />
        <div className="atmo-blob atmo-3" aria-hidden="true" />
        <CursorGlow />
        {children}
      </body>
    </html>
  );
}
