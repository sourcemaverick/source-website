import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { smoothScrollTo } from "@/components/SmoothScroll";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { MysticCursor } from "@/components/MysticCursor";
import { SmoothScroll } from "@/components/SmoothScroll";
import { ProblemSection } from "@/components/sections/ProblemSection";
import { ProductSection } from "@/components/sections/ProductSection";
import { BenefitsSection } from "@/components/sections/BenefitsSection";
import { DifferenceSection } from "@/components/sections/DifferenceSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { AppDownloadSection } from "@/components/sections/AppDownloadSection";
import { PartnersSection } from "@/components/sections/PartnersSection";
import { SiteFooter } from "@/components/SiteFooter";

export default function Landing() {
  const { state } = useLocation();

  // Header links on sub-pages navigate here with a target section to reveal.
  useEffect(() => {
    const target = state?.scrollTo;
    if (!target) return;
    const id = setTimeout(() => smoothScrollTo(target), 600);
    return () => clearTimeout(id);
  }, [state]);

  return (
    <main data-testid="landing-page" className="grain relative w-full bg-[#050505]">
      <SmoothScroll />
      <Header />
      <Hero />
      <ProblemSection />
      <ProductSection />
      <BenefitsSection />
      <DifferenceSection />
      <TestimonialsSection />
      <AppDownloadSection />
      <PartnersSection />
      <ContactSection />
      <SiteFooter />
      <MysticCursor />
    </main>
  );
}
