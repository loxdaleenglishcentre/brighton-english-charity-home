import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const YoungLearnersVideo = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('young-learners-section');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id="young-learners-section"
      className="py-20 bg-gradient-to-b from-slate-900 via-purple-900/20 to-slate-900 relative overflow-hidden"
    >
      {/* Magical background effects */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-20 w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-32 w-1 h-1 bg-blue-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-32 left-40 w-1.5 h-1.5 bg-purple-400 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 right-20 w-2 h-2 bg-emerald-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-1 h-1 bg-pink-400 rounded-full animate-pulse" style={{ animationDelay: '3s' }}></div>
        <div className="absolute top-1/3 right-1/4 w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content Side */}
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                Where Young Minds
                <span className="bg-gradient-to-r from-yellow-400 via-amber-500 to-orange-500 bg-clip-text text-transparent"> Flourish</span>
              </h2>
              <p className="text-xl text-white mb-8 leading-relaxed">
                From children as young as 8 to teenagers and adults, we create magical learning experiences that spark curiosity and build confidence.
              </p>
              <div className="space-y-4 text-white/90 mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full"></div>
                  <span>Junior courses for ages 8-17</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full"></div>
                  <span>Interactive games and creative activities</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full"></div>
                  <span>Safe, nurturing environment for all ages</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-gradient-to-r from-pink-400 to-rose-500 rounded-full"></div>
                  <span>Building friendships across cultures</span>
                </div>
              </div>
              
              {/* Young Learner Courses Button */}
              <div className="text-center">
                <Button className="bg-gradient-to-r from-yellow-500 to-orange-600 hover:from-yellow-400 hover:to-orange-500 text-white px-8 py-3 rounded-full shadow-lg hover:shadow-yellow-500/25 transition-all duration-300 hover:scale-105">
                  Young Learner Courses
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>
          </div>

          {/* Video Side */}
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="relative">
              <div className="video-container rounded-2xl overflow-hidden shadow-2xl">
                <iframe
                  src="https://player.cloudinary.com/embed/?cloud_name=dw4q8cuuc&public_id=Loxdale_Short_2024_Version_1_V1_t9os8s&fluid=true&controls=true&muted=true&autoplay=true&loop=true&source_types[0]=webm%2Fvp9&poster_options[transformation][start_offset]=1"
                  allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
                  allowFullScreen
                  className="w-full h-80 lg:h-96 border-none"
                  title="Loxdale Young Learners Video"
                />
              </div>
              
              {/* Magical glow effect around video */}
              <div className="absolute -inset-4 bg-gradient-to-r from-yellow-400/20 via-purple-500/20 to-blue-500/20 rounded-3xl blur-xl opacity-60 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .video-container {
          background: linear-gradient(145deg, rgba(59, 130, 246, 0.1), rgba(147, 51, 234, 0.1));
          border: 1px solid rgba(255, 255, 255, 0.1);
          position: relative;
        }

        .video-container::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(145deg, 
            rgba(255, 215, 0, 0.05) 0%,
            transparent 20%,
            transparent 80%,
            rgba(147, 51, 234, 0.05) 100%
          );
          border-radius: inherit;
          pointer-events: none;
        }
      `}</style>
    </section>
  );
};

export default YoungLearnersVideo;