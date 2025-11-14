import FAQsThree from "@/components/faqs-3";
import Features from "@/components/features-3";
import Footer from "@/components/footer";
import HeroSection from "@/components/hero-section";
import IntegrationsSection from "@/components/integrations-7";
import StatsSection from "@/components/stats-3";
import Pricing from "@/components/pricing";
import ContentSection from "@/components/content-2";
import { ThemeToggleButton } from "@/components/ThemeToggleButton";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <Features />
      <IntegrationsSection />
      <StatsSection />
      <ContentSection />
      <Pricing />
      <FAQsThree />
      <Footer />
      <ThemeToggleButton />
    </div>
  );
}

