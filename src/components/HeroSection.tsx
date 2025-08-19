import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { PlayCircle, ArrowRight, Users, Clock, Award, Star } from "lucide-react";
import heroImage from "@/assets/loxdale-teacher-036.jpg";
const HeroSection = () => {
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden pb-8" aria-labelledby="hero-title">
      {/* Video Background - Full height covering header + hero */}
      <div className="absolute inset-0 z-0" style={{
      top: '-80px',
      height: 'calc(100% + 80px)'
    }}>
        <iframe title="Loxdale English Centre campus video" src="https://player.cloudinary.com/embed/?cloud_name=dw4q8cuuc&public_id=The_incredible_Loxdale_building_home_to_Loxdale_English_Centre_itjj2c&profile=LOXDALE%20HOMEPAGE%20VIDEO&poster_options[transformation][start_offset]=15&autoplay=true&muted=true&loop=true&controls=false&preload=auto&playsinline=true" className="absolute inset-0 w-full h-full object-cover pointer-events-none" allow="autoplay; fullscreen; encrypted-media; picture-in-picture" frameBorder="0"></iframe>
        
        
        {/* Animated Pattern Overlay */}
        <div className="absolute inset-0 animated-bg opacity-[0.06] pointer-events-none"></div>
      </div>
      
      
      <div className="absolute top-40 right-12 glass rounded-full p-4 animate-float z-30" style={{
      animationDelay: '2s'
    }}>
        <Award className="w-8 h-8 text-primary" />
      </div>
      
      <div className="container mx-auto px-8 lg:px-10 relative z-20">
        <div className="grid grid-cols-1 gap-12 items-center pt-48 md:pt-44" style={{
        paddingTop: '12rem'
      }}>
          
          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="flex items-center gap-3 mb-8 justify-center lg:justify-start">
              
            </div>
            
            {/* Title */}
            <h1 id="hero-title" className="text-6xl lg:text-8xl font-bold mb-8 leading-tight animate-fade-in relative">
              <span className="bg-gradient-to-r from-white via-amber-300 to-white bg-clip-text text-transparent mix-blend-difference">
                Loxdale
                <br />
                English
                <br />
                Centre
              </span>
            </h1>
            
            {/* Stats */}
            <div className="flex flex-wrap gap-8 mb-12 justify-center lg:justify-start animate-fade-in" style={{
            animationDelay: '0.6s'
          }}>
              
              
              
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start animate-fade-in" style={{
            animationDelay: '0.9s'
          }}>
              <Button size="lg" className="bg-gradient-red-3d shadow-red-glow transition-all duration-500 hover:scale-105 border-0 text-white px-10 py-6 text-xl rounded-full">
                Explore Programmes
                <ArrowRight className="w-6 h-6 ml-3" />
              </Button>
              
              
            </div>
          </div>
          
        </div>
      </div>
      
      {/* Right side description text */}
      <div className="absolute top-64 right-8 lg:right-16 z-30 max-w-md">
        <p className="text-lg lg:text-xl text-white/95 leading-relaxed animate-fade-in mix-blend-difference text-right" style={{
        animationDelay: '0.3s'
      }}>
          Join the UK's top 8% English schools as an educational charity offering world-class teaching at unbeatable prices. Experience our unique Applied English approach in beautiful Brighton.
        </p>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce z-30">
        <div className="w-8 h-12 border-2 border-white/40 rounded-full flex justify-center glass">
          <div className="w-2 h-4 bg-white/80 rounded-full mt-3 animate-pulse"></div>
        </div>
      </div>
      
      {/* Small white spacer between hero and next section */}
      <div className="h-4 bg-background"></div>
    </section>;
};
export default HeroSection;