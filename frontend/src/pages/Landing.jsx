import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { MysticCursor } from "@/components/MysticCursor";
import { ProblemSection } from "@/components/sections/ProblemSection";
import { ProductSection } from "@/components/sections/ProductSection";
import { BenefitsSection } from "@/components/sections/BenefitsSection";
import { DifferenceSection } from "@/components/sections/DifferenceSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { AppDownloadSection } from "@/components/sections/AppDownloadSection";
import { PartnersSection } from "@/components/sections/PartnersSection";
import { SiteFooter } from "@/components/SiteFooter";

export default function Landing() {
  return (
    <main data-testid="landing-page" className="grain relative w-full bg-[#050505]">
      <Header />
      <Hero />
      <ProblemSection />
      <ProductSection />
      <BenefitsSection />
      <DifferenceSection />
      <TestimonialsSection />
      <AppDownloadSection />
      <PartnersSection />
      <SiteFooter />
      <MysticCursor />
    </main>
  );
}
