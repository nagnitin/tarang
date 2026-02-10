import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { ChipChatSection } from "@/components/ChipChatSection";
import { GadgetCornerSection } from "@/components/GadgetCornerSection";
import { BuildItSection } from "@/components/BuildItSection";
import { KnowYourPartsSection } from "@/components/KnowYourPartsSection";
import { DigitalToolkitSection } from "@/components/DigitalToolkitSection";
import { CommunitySection } from "@/components/CommunitySection";
import { GiantsSection } from "@/components/GiantsSection";
import { BargainBinSection } from "@/components/BargainBinSection";
import { HorizonSection } from "@/components/HorizonSection";
import { AchievementsSection } from "@/components/AchievementsSection";
import { FooterSection } from "@/components/FooterSection";
import { ProjectChat } from "@/components/ProjectChat";

const Index = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <HeroSection />
    <ChipChatSection />
    <GadgetCornerSection />
    <BuildItSection />
    <KnowYourPartsSection />
    <DigitalToolkitSection />
    <CommunitySection />
    <GiantsSection />
    <BargainBinSection />
    <HorizonSection />
    <AchievementsSection />
    <FooterSection />
    <ProjectChat />
  </div>
);

export default Index;
