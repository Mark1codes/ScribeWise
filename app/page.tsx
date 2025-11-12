import FAQsThree from "@/components/faqs-3";
import Features from "@/components/features-3";
import Footer from "@/components/footer";
import HeroSection from "@/components/hero-section";
import IntegrationsSection from "@/components/integrations-7";
import StatsSection from "@/components/stats-3";
import TeamSection from "@/components/team";
import { ThemeToggleButton } from "@/components/ThemeToggleButton";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <Features />
      <IntegrationsSection />
      <StatsSection />
      <TeamSection />
      <FAQsThree />
      <Footer />
      <ThemeToggleButton />
    </div>
  );
}

