import { Button } from "@/components/ui/button";
import HeroSection from "@/components/HeroSection";
import CourseFinder from "@/components/CourseFinder";
import MemorySlider from "@/components/MemorySlider";
import WhyChooseLoxdale from "@/components/WhyChooseLoxdale";
import SchoolStats from "@/components/SchoolStats";
import CourseFeatures from "@/components/CourseFeatures";
import SchoolStrengths from "@/components/SchoolStrengths";
import TestimonialsSection from "@/components/TestimonialsSection";
import PricingSection from "@/components/PricingSection";
import BrightonFacts from "@/components/BrightonFacts";
import SecurePlaceSection from "@/components/SecurePlaceSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <MemorySlider />
      <WhyChooseLoxdale />
      <CourseFinder />
      <SchoolStats />
      <CourseFeatures />
      <SchoolStrengths />
      <TestimonialsSection />
      <PricingSection />
      <BrightonFacts />
      <SecurePlaceSection />
      <ContactSection />
    </div>
  );
};

export default Index;