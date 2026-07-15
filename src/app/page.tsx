import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import BelongToYou from "@/components/BelongToYou";
import GreatestObstacle from "@/components/GreatestObstacle";
import CloseTheGap from "@/components/CloseTheGap";
import MindStill from "@/components/MindStill";
import ConnectSource from "@/components/ConnectSource";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <BelongToYou />
        <GreatestObstacle />
        <CloseTheGap />
        <MindStill />
        <ConnectSource />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
