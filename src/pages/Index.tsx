import { Button } from "@/components/ui/button";
import HeroSection from "@/components/HeroSection";
import CourseFinder from "@/components/CourseFinder";
import LoxdaleStrengthsSlider from "@/components/LoxdaleStrengthsSlider";
import WhyChooseLoxdale from "@/components/WhyChooseLoxdale";
import CourseFeatures from "@/components/CourseFeatures";
import StudentLifeGallery from "@/components/StudentLifeGallery";
import YoungLearnersVideo from "@/components/MagicalBookVideo";
import { ArrowRight } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
const Index = () => {
  return <div className="min-h-screen bg-transparent">
      <HeroSection />
      
      {/* Black section with text content */}
      <section className="relative bg-black py-16 px-6 overflow-hidden">
        {/* Subtle purple accent glow */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/8 rounded-full blur-3xl opacity-40"></div>
        
        <div className="container mx-auto max-w-6xl relative">
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
      
      {/* Gradient spacer with color accent */}
      <div className="bg-gradient-to-r from-white via-primary/5 to-white h-8"></div>
      <YoungLearnersVideo />
      <LoxdaleStrengthsSlider />
      <WhyChooseLoxdale />
      
      {/* Strategic Get Quote Button after Why Choose */}
      <section className="relative py-12 bg-gradient-to-r from-blue-600 to-purple-600 overflow-hidden">
        {/* Subtle color accent */}
        <div className="absolute top-0 left-1/3 w-64 h-32 bg-primary/8 rounded-full blur-2xl opacity-60"></div>
        
        <div className="container mx-auto px-6 text-center relative">
          <Button className="bg-gradient-to-r from-emerald-500/90 to-teal-600/90 backdrop-blur-md border border-white/30 rounded-2xl text-white shadow-2xl hover:shadow-emerald-500/50 transition-all duration-500 hover:scale-110 hover:from-emerald-400/95 hover:to-teal-500/95 px-8 py-4 text-lg">
            Get Your Personal Quote
            <ArrowRight className="w-5 h-5 ml-3" />
          </Button>
        </div>
      </section>
      
      <StudentLifeGallery />
      <CourseFinder />
      <CourseFeatures />
      
      
      {/* Final Get Quote Button */}
      <section className="relative py-20 bg-gradient-to-r from-blue-600 to-purple-600 overflow-hidden">
        <div className="container mx-auto px-6 text-center relative">
          <h3 className="text-2xl font-bold mb-6 text-white">Ready to Start Your English Journey?</h3>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <Button className="bg-gradient-to-r from-emerald-500/90 to-teal-600/90 backdrop-blur-md border border-white/30 rounded-2xl text-white shadow-2xl hover:shadow-emerald-500/50 transition-all duration-500 hover:scale-110 hover:from-emerald-400/95 hover:to-teal-500/95 px-8 py-4">
              Get Quote Now
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            <Button variant="outline" className="px-8 py-4 border-white/30 text-black hover:bg-white/10">
              Download Brochure
            </Button>
          </div>
          {/* Integrated promo video */}
          <div className="max-w-5xl mx-auto">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-card/80 to-card border border-border/20 backdrop-blur-sm">
              <AspectRatio ratio={16 / 9}>
                <iframe
                  src="https://player.cloudinary.com/embed/?cloud_name=dw4q8cuuc&public_id=Loxdale_Promo_Video_Full_version_V1_zoqjhn&autoplay=true&loop=true"
                  width="100%"
                  height="100%"
                  title="Loxdale English Centre Promotional Video"
                  className="w-full h-full"
                  allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
                  allowFullScreen
                  frameBorder="0"
                ></iframe>
              </AspectRatio>
              <div className="absolute inset-0 bg-gradient-to-t from-primary/5 via-transparent to-transparent pointer-events-none rounded-3xl"></div>
            </div>
          </div>
        </div>
      </section>
    </div>;
};
export default Index;