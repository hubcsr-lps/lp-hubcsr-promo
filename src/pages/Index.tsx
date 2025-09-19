import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import PainValidationSection from "@/components/PainValidationSection";
import FirstCycleSection from "@/components/FirstCycleSection";
import TransparentFundraisingSection from "@/components/TransparentFundraisingSection";
import SocialProofSection from "@/components/SocialProofSection";
import ConversionSection from "@/components/ConversionSection";
import FinalCallSection from "@/components/FinalCallSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <PainValidationSection />
      <FirstCycleSection />
      {/* <TransparentFundraisingSection /> */}
      {/* <HumanSupportSection /> */}
      <SocialProofSection />
      <ConversionSection />
      {/* <FinalCallSection /> */}
    </div>
  );
};

export default Index;
