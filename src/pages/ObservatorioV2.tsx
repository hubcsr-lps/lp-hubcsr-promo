import Header from "@/components/Header";
import HeroSectionV2 from "@/components/observatorio-v2/HeroSectionV2";
import PainPointsSectionV2 from "@/components/observatorio-v2/PainPointsSectionV2";
import PartnershipSectionV2 from "@/components/observatorio-v2/PartnershipSectionV2";
import BenefitsSectionV2 from "@/components/observatorio-v2/BenefitsSectionV2";
import TestimonialSectionV2 from "@/components/observatorio-v2/TestimonialSectionV2";
import InvestmentSectionV2 from "@/components/observatorio-v2/InvestmentSectionV2";
import OfferSectionV2 from "@/components/observatorio-v2/OfferSectionV2";
import FinalCTASectionV2 from "@/components/observatorio-v2/FinalCTASectionV2";

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
    </div>
  );
};

export default ObservatorioV2;