import { AppearanceVanitySection } from "@/components/appearance-vanity-section";
import { FacialAnalysisHeroSection } from "@/components/facial-analysis-hero-section";
import { FaqSection } from "@/components/faq-section";
import { IntroducingVideoSection } from "@/components/introducing-video-section";
import { QovesPersonalizedPlanSection } from "@/components/qoves-personalized-plan-section";

export default function Home() {
  return (
    <div className="flex min-h-full flex-1 flex-col bg-white">
      <QovesPersonalizedPlanSection />
      <FacialAnalysisHeroSection />
      <FaqSection />
      <IntroducingVideoSection />
      <AppearanceVanitySection />
    </div>
  );
}
