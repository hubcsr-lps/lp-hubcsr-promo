import Header from "@/components/Header";
import HeroSectionV2 from "@/components/observatorio-v2/HeroSectionV2";
import PainPointsSectionV2 from "@/components/observatorio-v2/PainPointsSectionV2";
import PartnershipSectionV2 from "@/components/observatorio-v2/PartnershipSectionV2";
import BenefitsSectionV2 from "@/components/observatorio-v2/BenefitsSectionV2";
import TestimonialSectionV2 from "@/components/observatorio-v2/TestimonialSectionV2";
import InvestmentSectionV2 from "@/components/observatorio-v2/InvestmentSectionV2";
import OfferSectionV2 from "@/components/observatorio-v2/OfferSectionV2";
import FinalCTASectionV2 from "@/components/observatorio-v2/FinalCTASectionV2";
import SocialSharingBanner from "@/components/SocialSharingBanner";
import heroBackground from "@/assets/hero-background.jpg";

const ObservatorioV2 = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSectionV2 />
      <PainPointsSectionV2 />
      <PartnershipSectionV2 />
      <BenefitsSectionV2 />
      <TestimonialSectionV2 />
      <InvestmentSectionV2 />
      <OfferSectionV2 />
      <FinalCTASectionV2 />
      <SocialSharingBanner 
        title="Sua OSC conectada ao futuro do Terceiro Setor"
        description="O Observatório do Terceiro Setor e a hubCSR se uniram para fortalecer organizações sociais com infraestrutura digital completa: visibilidade, gestão e rede de voluntários em um só lugar."
        imageUrl={heroBackground}
      />
    </div>
  );
};

export default ObservatorioV2;