import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import PainValidationSection from "@/components/PainValidationSection";
import FirstCycleSection from "@/components/FirstCycleSection";
import TransparentFundraisingSection from "@/components/TransparentFundraisingSection";
import SocialProofSection from "@/components/SocialProofSection";
import ConversionSection from "@/components/ConversionSection";
import FinalCallSection from "@/components/FinalCallSection";
import SocialSharingBanner from "@/components/SocialSharingBanner";
import heroBackground from "@/assets/hubcsr-01.png";
import { useMetaTags } from "@/hooks/useMetaTags";

const Index = () => {
  useMetaTags({
    title: "hubCSR - 100% das doações para sua OSC",
    description: "Organize projetos, engaje voluntários e apresente dados confiáveis. 100% das doações vão direto para sua OSC. Apenas R$ 350/mês, sem fidelidade.",
    image: "/hubcsr-01.png",
    url: "https://lp.hubcsr.tech/"
  });

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
