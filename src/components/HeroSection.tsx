import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { PlayCircle, ArrowRight, Users, Clock, Award, Star } from "lucide-react";
import heroImage from "@/assets/loxdale-teacher-036.jpg";
const HeroSection = () => {
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden pb-0" aria-labelledby="hero-title">
      {/* Video Background - Full viewport coverage behind header */}
      <div className="fixed inset-0 z-0 overflow-hidden bg-slate-50" style={{ top: 0, height: '100vh', width: '100vw' }}>
        <video
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
          src="https://res.cloudinary.com/dw4q8cuuc/video/upload/f_auto,vc_auto,q_auto/Loxdale_Promo_Video_Full_version_V2_cpfv5b.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster="/images/brighton-pier-unsplash.jpg"
          aria-hidden="true"
        />
      </div>
      
      
      <div className="absolute top-40 right-12 glass rounded-full p-4 animate-float z-30" style={{
      animationDelay: '2s'
    }}>
        <Award className="w-8 h-8 text-primary" />
      </div>
      
      <div className="container mx-auto px-8 lg:px-10 relative z-20">
        <div className="grid grid-cols-1 gap-12 items-start pt-2 md:pt-1" style={{
        paddingTop: '0.25rem'
      }}>
          
          {/* Content */}
          <div className="text-left">
            <div className="flex items-center gap-3 mb-8 justify-start">
              
            </div>
            
            {/* Title */}
            <h1 id="hero-title" className="text-6xl lg:text-8xl font-bold mb-6 leading-tight animate-fade-in relative text-left -mt-8" style={{
              animation: 'titleVisible 30s infinite'
            }}>
              <span className="bg-gradient-to-b from-yellow-200 via-yellow-400 via-amber-500 to-orange-700 bg-clip-text text-transparent drop-shadow-2xl font-black">
                Loxdale<br />
                English<br />
                Centre
              </span>
            </h1>
            
            {/* Stats */}
            <div className="flex flex-wrap gap-8 mb-12 justify-center lg:justify-start animate-fade-in" style={{
            animationDelay: '0.6s'
          }}>
              
              
              
            </div>
          </div>
          
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce z-30">
        <div className="w-8 h-12 border-2 border-white/40 rounded-full flex justify-center glass">
          <div className="w-2 h-4 bg-white/80 rounded-full mt-3 animate-pulse"></div>
        </div>
      </div>
      
    </section>;
};
export default HeroSection;