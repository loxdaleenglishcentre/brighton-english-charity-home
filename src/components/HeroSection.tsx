import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { PlayCircle, ArrowRight, Users, Clock, Award, Star } from "lucide-react";
import heroImage from "@/assets/loxdale-teacher-036.jpg";

const HeroSection = () => {
  return (
    <section 
      className="relative min-h-screen flex items-center justify-center overflow-hidden pb-8" 
      aria-labelledby="hero-title"
    >
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          poster={heroImage}
        >
          <source src="/videos/loxdale-building.mp4" type="video/mp4" />
        </video>
        
        {/* Lighter Gradient Overlay */}
        <div className="absolute inset-0" style={{ background: "radial-gradient(1200px 800px at 8% 12%, hsl(var(--card) / 0.85) 0%, hsl(var(--card) / 0.55) 35%, transparent 60%), linear-gradient(135deg, hsl(var(--primary) / 0.05) 0%, transparent 50%, hsl(var(--accent) / 0.08) 100%)" }}></div>
        
        {/* Animated Pattern Overlay */}
        <div className="absolute inset-0 animated-bg opacity-3"></div>
      </div>
      
      
      <div className="absolute top-40 right-12 glass rounded-full p-4 animate-float z-30" style={{ animationDelay: '2s' }}>
        <Award className="w-8 h-8 text-primary" />
      </div>
      
      <div className="container mx-auto px-8 lg:px-10 relative z-20">
        <div className="grid grid-cols-1 gap-12 items-center pt-48 md:pt-44"style={{ paddingTop: '12rem' }}>
          
          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="flex items-center gap-3 mb-8 justify-center lg:justify-start">
              <Badge className="bg-gradient-chrome-3d text-white border-white/40 shadow-chrome-glow text-base px-6 py-3 animate-bounce-in">
                📚 Out Of Summer Only
              </Badge>
            </div>
            
            <h1 id="hero-title" className="text-6xl lg:text-8xl font-bold mb-8 leading-tight animate-fade-in">
              <span className="bg-gradient-to-r from-white via-amber-300 to-white bg-clip-text text-transparent">
                Transform Your English
              </span>
              <br />
              <span className="bg-gradient-to-r from-primary via-amber-400 to-white bg-clip-text text-transparent">
                At Brighton's #1 Charity School
              </span>
            </h1>
            
            <p className="text-xl lg:text-2xl mb-10 text-white/95 leading-relaxed max-w-2xl animate-fade-in" style={{ animationDelay: '0.3s' }}>
              Join the UK's top 8% English schools as an educational charity offering world-class teaching at unbeatable prices. Experience our unique Applied English approach in beautiful Brighton.
            </p>
            
            {/* Stats */}
            <div className="flex flex-wrap gap-8 mb-12 justify-center lg:justify-start animate-fade-in" style={{ animationDelay: '0.6s' }}>
              <div className="flex items-center gap-3 glass rounded-full px-6 py-3">
                <Users className="w-6 h-6 text-primary" />
                <span className="font-semibold text-white">16+ Age Group</span>
              </div>
              <div className="flex items-center gap-3 glass rounded-full px-6 py-3">
                <Clock className="w-6 h-6 text-secondary" />
                <span className="font-semibold text-white">20 Lessons/Week</span>
              </div>
              <div className="flex items-center gap-3 glass rounded-full px-6 py-3">
                <Award className="w-6 h-6 text-yellow-400" />
                <span className="font-semibold text-white">Applied English</span>
              </div>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start animate-fade-in" style={{ animationDelay: '0.9s' }}>
              <Button 
                size="lg" 
                className="bg-gradient-red-3d shadow-red-glow transition-all duration-500 hover:scale-105 border-0 text-white px-10 py-6 text-xl rounded-full"
              >
                Start Your Journey
                <ArrowRight className="w-6 h-6 ml-3" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="glass border-white/30 text-white hover:bg-white/20 px-10 py-6 text-xl rounded-full hover:scale-105 transition-all duration-300"
              >
                <PlayCircle className="w-6 h-6 mr-3" />
                Watch Our Story
              </Button>
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
      
      {/* Small white spacer between hero and next section */}
      <div className="h-4 bg-background"></div>
    </section>
  );
};

export default HeroSection;