import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import TheApp from "@/components/ProductShowcase";
import Demo from "@/components/AvatarSpotlight";
import Waitlist from "@/components/Waitlist";
import Footer from "@/components/Footer";
import SectionDivider from "@/components/ui/SectionDivider";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <SectionDivider variant="gradient" />
        <HowItWorks />
        <SectionDivider variant="line" />
        <TheApp />
        <SectionDivider variant="dots" />
        <Demo />
        <SectionDivider variant="gradient" />
        <Waitlist />
      </main>
      <Footer />
    </>
  );
}
