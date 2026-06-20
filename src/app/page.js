import BannerPage from "@/components/Banner";
import CTASection from "@/components/CTASection";
import JobSection from "@/components/FiendSersing";
import HeroSection from "@/components/Joobsekers";
import PricingSection from "@/components/Pay";
import FeaturesSection from "@/components/Succeed";

export default function Home() {
  return (
    <div className="bg-white dark:bg-black text-black dark:text-white">
      <BannerPage />
      <HeroSection />
      <JobSection />
      <FeaturesSection />
      <PricingSection />
      <CTASection />
    </div>
  );
}
