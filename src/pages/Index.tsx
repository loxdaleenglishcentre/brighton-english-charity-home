import { Button } from "@/components/ui/button";
import HeroSection from "@/components/HeroSection";
import CourseFinder from "@/components/CourseFinder";
import LoxdaleStrengthsSlider from "@/components/LoxdaleStrengthsSlider";
import WhyChooseLoxdale from "@/components/WhyChooseLoxdale";
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
      <LoxdaleStrengthsSlider />
      <WhyChooseLoxdale />
      <CourseFinder />
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