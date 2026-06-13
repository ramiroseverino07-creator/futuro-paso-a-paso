import HeroSection from "@/components/landing/HeroSection";
import ProblemSection from "@/components/landing/ProblemSection";
import SolutionSection from "@/components/landing/SolutionSection";
import IncludedSection from "@/components/landing/IncludedSection";
import BenefitsSection from "@/components/landing/BenefitsSection";
import TestimonialsSection from "@/components/landing/TestimonialsSection";
import WhoIsForSection from "@/components/landing/WhoIsForSection";
import AboutSection from "@/components/landing/AboutSection";
import PriceSection from "@/components/landing/PriceSection";
import GuaranteeSection from "@/components/landing/GuaranteeSection";
import WhyDifferentSection from "@/components/landing/WhyDifferentSection";
import FirstSaleSection from "@/components/landing/FirstSaleSection";
import FAQSection from "@/components/landing/FAQSection";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <main>
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <IncludedSection />
      <BenefitsSection />

      {/* Separador decorativo dorado */}
      <div className="flex items-center justify-center gap-4 px-4 -mt-6 mb-6">
        <div className="h-px flex-1 max-w-xs bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
        <div className="w-2 h-2 rotate-45 bg-primary/60" />
        <div className="h-px flex-1 max-w-xs bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
      </div>

      <FirstSaleSection />
      <WhyDifferentSection />
      <WhoIsForSection />
      <TestimonialsSection />
      <AboutSection />
      <PriceSection />
      <GuaranteeSection />
      <FAQSection />
      <Footer />
    </main>
  );
};

export default Index;
