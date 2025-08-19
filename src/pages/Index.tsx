import { Button } from "@/components/ui/button";
import HeroSection from "@/components/HeroSection";
import CourseFinder from "@/components/CourseFinder";
import LoxdaleStrengthsSlider from "@/components/LoxdaleStrengthsSlider";
import WhyChooseLoxdale from "@/components/WhyChooseLoxdale";
import CourseFeatures from "@/components/CourseFeatures";
import StudentLifeGallery from "@/components/StudentLifeGallery";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      {/* Small white spacer */}
      <div className="bg-white h-8"></div>
      <LoxdaleStrengthsSlider />
      <WhyChooseLoxdale />
      <StudentLifeGallery />
      <CourseFinder />
      <CourseFeatures />
    </div>
  );
};

export default Index;