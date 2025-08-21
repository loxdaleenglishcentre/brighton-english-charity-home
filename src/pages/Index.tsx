import { Button } from "@/components/ui/button";
import HeroSection from "@/components/HeroSection";
import CourseFinder from "@/components/CourseFinder";
import LoxdaleStrengthsSlider from "@/components/LoxdaleStrengthsSlider";
import WhyChooseLoxdale from "@/components/WhyChooseLoxdale";
import CourseFeatures from "@/components/CourseFeatures";
import StudentLifeGallery from "@/components/StudentLifeGallery";
import MagicalBookVideo from "@/components/MagicalBookVideo";
import { ArrowRight } from "lucide-react";
const Index = () => {
  return <div className="min-h-screen bg-transparent">
      <HeroSection />
      
      {/* Black section with text content */}
      <section className="bg-black py-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="flex justify-center text-white">
            <div className="flex flex-col items-center text-center max-w-4xl">
              <Button size="lg" className="bg-gradient-red-3d shadow-red-glow transition-all duration-500 hover:scale-105 border-0 text-white/90 px-8 py-4 text-lg rounded-full mb-8">
                Apply Now
                <ArrowRight className="w-5 h-5 ml-3" />
              </Button>
              <p className="text-xl lg:text-2xl leading-relaxed text-white/90 mb-6">Join us and learn in a breathtaking Victorian building surrounded by the natural beauty of Sussex—discover language, culture, and lifelong friendships. We are the UK's top 8% of English schools as an educational charity offering world-class teaching at unbeatable prices. Over 45 years of excellence.</p>
              
            </div>
          </div>
        </div>
      </section>
      
      {/* Small white spacer */}
      <div className="bg-white h-8"></div>
      <LoxdaleStrengthsSlider />
      <WhyChooseLoxdale />
      
      {/* Strategic Get Quote Button after Why Choose */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-6 text-center">
          <Button className="bg-gradient-to-r from-emerald-500/90 to-teal-600/90 backdrop-blur-md border border-white/30 rounded-2xl text-white shadow-2xl hover:shadow-emerald-500/50 transition-all duration-500 hover:scale-110 hover:from-emerald-400/95 hover:to-teal-500/95 px-8 py-4 text-lg">
            Get Your Personal Quote
            <ArrowRight className="w-5 h-5 ml-3" />
          </Button>
        </div>
      </section>
      
      <StudentLifeGallery />
      <MagicalBookVideo />
      <CourseFinder />
      <CourseFeatures />
      
      {/* Final Get Quote Button */}
      <section className="py-16 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-2xl font-bold mb-6">Ready to Start Your English Journey?</h3>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-gradient-to-r from-emerald-500/90 to-teal-600/90 backdrop-blur-md border border-white/30 rounded-2xl text-white shadow-2xl hover:shadow-emerald-500/50 transition-all duration-500 hover:scale-110 hover:from-emerald-400/95 hover:to-teal-500/95 px-8 py-4">
              Get Quote Now
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            <Button variant="outline" className="px-8 py-4">
              Download Brochure
            </Button>
          </div>
        </div>
      </section>
    </div>;
};
export default Index;