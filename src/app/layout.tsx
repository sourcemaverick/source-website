import type { Metadata } from "next";
import { Sora, DM_Mono } from "next/font/google";
import "./globals.css";
import CursorGlow from "@/components/ui/CursorGlow";

const sora = Sora({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
  variable: "--font-sora",
  display: "swap",
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-dm-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Source : Inner Transformation",
  description:
    "Experience genuine, immersive conversations with AI avatars powered by deep personality cloning. Realistic voices, expressions, and presence.",
  metadataBase: new URL("https://source.ai"),
  openGraph: {
    title: "Source : Inner Transformation",
    description:
      "Face-to-face conversations with AI avatars of extraordinary people. Their voice, their expressions, their presence.",
    type: "website",
    siteName: "Source",
  },
  twitter: {
    card: "summary_large_image",
    title: "Source : Inner Transformation",
    description:
      "Face-to-face conversations with AI avatars of extraordinary people.",
  },
  other: {
    "theme-color": "#0a0a0a",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${sora.variable} ${dmMono.variable} h-full antialiased`}>
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
