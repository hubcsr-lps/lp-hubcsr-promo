import Header from "@/components/Header";
import HeroSection from "@/components/observatorio/HeroSection";
import PainValidationSection from "@/components/observatorio/PainValidationSection";
import FirstCycleSection from "@/components/observatorio/FirstCycleSection";
import SocialProofSection from "@/components/observatorio/SocialProofSection";
import ConversionSection from "@/components/observatorio/ConversionSection";
import LaunchOfferSection from "@/components/observatorio/LaunchOfferSection";
import InvestmentSection from "@/components/observatorio/InvestmentSection";
// aaa
import HumanSupportSection from "@/components/observatorio/HumanSupportSection";
import SolutionsSection from "@/components/observatorio/SolutionsSection";
import BenefitsOsc from "@/components/observatorio/BenefitsOsc";

const ObservatorioDo3Setor = () => {

    return (
        <div className="min-h-screen">
            <Header />
            <HeroSection />
            <HumanSupportSection />
            <PainValidationSection />
            <SocialProofSection />
            <BenefitsOsc />
            {/* <SolutionsSection /> */}
            <LaunchOfferSection />
            {/* <FirstCycleSection /> */}
            <InvestmentSection />
        </div>
    );
};

export default ObservatorioDo3Setor;
