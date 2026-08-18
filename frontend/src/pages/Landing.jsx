import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { FooterStrip } from "@/components/FooterStrip";
import { MysticCursor } from "@/components/MysticCursor";

export default function Landing() {
  return (
    <main data-testid="landing-page" className="grain relative h-screen w-full bg-[#050505]">
      <Hero />
      <Header />
      <FooterStrip />
      <MysticCursor />
    </main>
  );
}
