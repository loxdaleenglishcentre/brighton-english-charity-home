import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { PlayCircle, ArrowRight, Users, Clock, Award } from "lucide-react";
import heroImage from "@/assets/loxdale-teacher-036.jpg";
import geometricBg from "@/assets/geometric-bg.jpg";
import teacherBubble1 from "@/assets/loxdale-teacher-539.jpg";
import teacherBubble2 from "@/assets/loxdale-teacher-036.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-muted/30 to-background" aria-labelledby="hero-title">
      {/* Animated Background */}
      <div className="absolute inset-0 animated-bg"></div>
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url(${geometricBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      ></div>
      
      {/* Floating Elements (image bubbles) */}
      <img
        src={teacherBubble1}
        loading="lazy"
        alt="Teacher working one-to-one with an adult learner at Loxdale"
        className="absolute top-20 left-10 w-24 h-24 sm:w-28 sm:h-28 rounded-full object-cover shadow-lg hover-scale opacity-90 z-20"
      />
      
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        {/* Corner Enquire Button */}
        <div className="absolute top-4 right-4 z-50">
          <Button asChild size="sm" className="bg-gradient-primary text-white border-0 hover-glow shadow-md">
            <a href="#contact">Enquire</a>
          </Button>
        </div>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <Badge className="mb-6 bg-gradient-secondary text-white border-0 hover-glow-secondary text-sm px-4 py-2">
              🌟 Out of Summer Only - Limited Time
            </Badge>
            
            <h1 id="hero-title" className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
                Master English
              </span>
              <br />
              <span className="bg-gradient-to-r from-orange-200 via-white to-purple-200 bg-clip-text text-transparent">
                With Confidence
              </span>
            </h1>
            
            <p className="text-xl lg:text-2xl mb-8 text-white/90 leading-relaxed max-w-2xl">
              Join like-minded learners from around the world in Brighton's most innovative English course. 
              Transform your communication skills with our unique Applied English approach.
            </p>
            
            {/* Stats */}
            <div className="flex flex-wrap gap-6 mb-10 justify-center lg:justify-start">
              <div className="flex items-center gap-2 text-white/80">
                <Users className="w-5 h-5 text-blue-300" />
                <span className="font-semibold">16+ Age Group</span>
              </div>
              <div className="flex items-center gap-2 text-white/80">
                <Clock className="w-5 h-5 text-orange-300" />
                <span className="font-semibold">20 Lessons/Week</span>
              </div>
              <div className="flex items-center gap-2 text-white/80">
                <Award className="w-5 h-5 text-purple-300" />
                <span className="font-semibold">Applied English</span>
              </div>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                className="bg-gradient-secondary hover:scale-105 transition-all duration-300 border-0 text-white shadow-lg hover-glow-secondary px-8 py-4 text-lg"
              >
                Enquire Now
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="glass border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg hover-float"
              >
                <PlayCircle className="w-5 h-5 mr-2" />
                Watch Preview
              </Button>
            </div>
          </div>
          
          {/* Hero Image */}
          <div className="relative">
            <div className="relative glass rounded-3xl overflow-hidden hover-float">
              <img 
                src={heroImage} 
                alt="Diverse students learning English in modern Brighton classroom" 
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              
              {/* Floating Info Card */}
              <div className="absolute bottom-6 left-6 right-6 glass rounded-2xl p-6">
                <div className="flex items-center justify-between text-white">
                  <div>
                    <p className="text-sm opacity-80">Next Course Starts</p>
                    <p className="font-bold text-lg">Summer 2025</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm opacity-80">Brighton, UK</p>
                    <p className="font-bold text-lg">15 Hours/Week</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* EL Gazette Excellence Award - Moved lower to avoid overlap */}
            <div className="absolute -bottom-24 -right-8 glass rounded-2xl p-4 animate-bounce-in border border-white/20 z-30" style={{ animationDelay: '2s' }}>
              <div className="text-center">
                <Award className="w-8 h-8 text-amber-400 mb-2 mx-auto" />
                <p className="text-xs font-bold text-white/90 leading-tight">EL Gazette</p>
                <p className="text-xs font-semibold text-amber-300">Centre of Excellence</p>
                <p className="text-xs text-white/80">2024-2025</p>
                <p className="text-xs font-bold text-amber-400">Top 8% School</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;