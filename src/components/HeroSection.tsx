import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { PlayCircle, ArrowRight, Users, Clock, Award, Star } from "lucide-react";
import heroImage from "@/assets/loxdale-teacher-036.jpg";
const HeroSection = () => {
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden pb-8" aria-labelledby="hero-title">
      {/* Video Background - Full height including header */}
      <div className="absolute inset-0 z-0" style={{
      top: '-100px',
      height: 'calc(100% + 100px)'
    }}>
        <iframe title="Loxdale English Centre promo video" src="https://player.cloudinary.com/embed/?cloud_name=dw4q8cuuc&public_id=Loxdale_Promo_Video_Full_version_V2_cpfv5b&profile=LOXDALE%20HOMEPAGE%20VIDEO2&autoplay=true&loop=true&colors[base]=%23FFFFFF&colors[accent]=%23FFFFFF&muted=true&controls=false&preload=auto&playsinline=true" className="absolute inset-0 w-full h-full object-cover pointer-events-none" allow="autoplay; fullscreen; encrypted-media; picture-in-picture" frameBorder="0"></iframe>
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
            <h1 id="hero-title" className="text-6xl lg:text-8xl font-bold mb-6 leading-tight animate-fade-in relative text-left" style={{
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
      
      {/* Text content section below video */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-r from-blue-600/95 via-purple-600/95 to-indigo-700/95 backdrop-blur-sm z-30 py-8 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-white">
            <div className="flex flex-col items-start">
              <Button size="lg" className="bg-gradient-red-3d shadow-red-glow transition-all duration-500 hover:scale-105 border-0 text-white px-8 py-4 text-lg rounded-full mb-6">
                Apply Now
                <ArrowRight className="w-5 h-5 ml-3" />
              </Button>
              <p className="text-lg lg:text-xl leading-relaxed">
                Join us and learn in a breathtaking Victorian building surrounded by the natural beauty of Sussex—discover language, culture, and lifelong friendships.
              </p>
            </div>
            <div className="flex flex-col items-start">
              <Button size="lg" variant="outline" className="bg-white/10 text-white border-white/30 hover:bg-white/20 px-8 py-4 text-lg rounded-full backdrop-blur-sm transition-all duration-500 hover:scale-105 mb-6">
                <PlayCircle className="w-5 h-5 mr-3" />
                Watch Student Stories
              </Button>
              <p className="text-lg lg:text-xl leading-relaxed">
                Join the UK's top 8% of English schools as an educational charity offering world-class teaching at unbeatable prices. Over 45 years of excellence in beautiful Sussex.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Small white spacer between hero and next section */}
      <div className="h-4 bg-background"></div>
    </section>;
};
export default HeroSection;