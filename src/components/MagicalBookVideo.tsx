import { useState, useEffect } from 'react';
import magicalBookImage from '@/assets/magical-book-open.png';

const MagicalBookVideo = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [bookOpen, setBookOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Delay the book opening animation
          setTimeout(() => setBookOpen(true), 500);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('magical-book-section');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id="magical-book-section"
      className="py-20 bg-gradient-to-b from-slate-900 via-purple-900/20 to-slate-900 relative overflow-hidden"
    >
      {/* Magical background effects */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-20 w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-32 w-1 h-1 bg-blue-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-32 left-40 w-1.5 h-1.5 bg-purple-400 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 right-20 w-2 h-2 bg-emerald-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
      </div>

      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Discover the Magic of
            <span className="bg-gradient-to-r from-yellow-400 via-amber-500 to-orange-500 bg-clip-text text-transparent"> Learning</span>
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Open the pages of possibility and watch our story unfold
          </p>
        </div>

        <div className={`book-wrapper transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="relative flex justify-center items-center">
            {/* Magical book image */}
            <img 
              src={magicalBookImage} 
              alt="Magical Open Spellbook" 
              className={`book-image w-full max-w-6xl transition-transform duration-1000 ${bookOpen ? 'scale-100' : 'scale-95'}`}
            />

            {/* Video embedded in the right page */}
            <div className={`video-page absolute transition-all duration-1000 ${bookOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
              {/* Parchment background */}
              <div className="parchment-bg"></div>
              
              {/* Page binding effect */}
              <div className="page-binding"></div>
              
              {/* Video container with book page styling */}
              <div className="video-container">
                <iframe
                  src="https://player.cloudinary.com/embed/?cloud_name=dw4q8cuuc&public_id=Loxdale_Short_2024_Version_1_V1_t9os8s&autoplay=true&source_types[0]=webm%2Fvp9&poster_options[transformation][start_offset]=1"
                  allow="autoplay; fullscreen; encrypted-media"
                  allowFullScreen
                  className="w-full h-full border-none rounded-sm"
                  title="Loxdale English Centre Video"
                />
                
                {/* Page texture overlay */}
                <div className="page-texture"></div>
              </div>
              
              {/* Book page shadow/depth */}
              <div className="page-shadow"></div>
            </div>

            {/* Magical sparkles around the video */}
            <div className={`magical-sparkles absolute transition-all duration-1000 ${bookOpen ? 'opacity-100' : 'opacity-0'}`}>
              <div className="sparkle sparkle-1"></div>
              <div className="sparkle sparkle-2"></div>
              <div className="sparkle sparkle-3"></div>
              <div className="sparkle sparkle-4"></div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .book-wrapper {
          perspective: 1000px;
        }

        .book-image {
          filter: drop-shadow(0 20px 40px rgba(0, 0, 0, 0.5));
        }

        .video-page {
          top: 24%;
          left: 54%;
          width: 37%;
          height: 52%;
          border-radius: 8px;
          overflow: hidden;
          transform-style: preserve-3d;
        }

        .parchment-bg {
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, 
            #f4f1e8 0%, 
            #ede4d3 25%, 
            #e8dcc6 50%, 
            #ddd2ba 75%, 
            #d4c7a8 100%
          );
          border-radius: 8px;
          opacity: 0.15;
        }

        .page-binding {
          position: absolute;
          left: -2px;
          top: 0;
          width: 6px;
          height: 100%;
          background: linear-gradient(to right, 
            rgba(139, 115, 85, 0.4) 0%,
            rgba(160, 130, 98, 0.2) 50%,
            transparent 100%
          );
          border-radius: 2px 0 0 2px;
        }

        .video-container {
          width: 100%;
          height: 100%;
          position: relative;
          border-radius: 6px;
          overflow: hidden;
          box-shadow: 
            inset 0 0 25px rgba(101, 67, 33, 0.3),
            inset 0 0 8px rgba(139, 115, 85, 0.2),
            0 2px 15px rgba(0, 0, 0, 0.15);
        }

        .page-texture {
          position: absolute;
          inset: 0;
          background: 
            radial-gradient(circle at 20% 80%, rgba(139, 115, 85, 0.03) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(160, 130, 98, 0.03) 0%, transparent 50%),
            linear-gradient(45deg, transparent 48%, rgba(101, 67, 33, 0.02) 49%, rgba(101, 67, 33, 0.02) 51%, transparent 52%);
          pointer-events: none;
          border-radius: 6px;
          mix-blend-mode: multiply;
        }

        .page-shadow {
          position: absolute;
          inset: -4px;
          background: radial-gradient(ellipse, 
            rgba(101, 67, 33, 0.1) 0%, 
            rgba(139, 115, 85, 0.05) 30%, 
            transparent 70%
          );
          border-radius: 12px;
          pointer-events: none;
        }

        .magical-sparkles {
          top: 22%;
          left: 52%;
          width: 41%;
          height: 56%;
          pointer-events: none;
        }

        .sparkle {
          position: absolute;
          width: 4px;
          height: 4px;
          background: radial-gradient(circle, 
            rgba(255, 215, 0, 0.8) 0%, 
            rgba(255, 165, 0, 0.4) 50%, 
            transparent 100%
          );
          border-radius: 50%;
          animation: sparkleFloat 3s infinite ease-in-out;
        }

        .sparkle-1 {
          top: 10%;
          left: 85%;
          animation-delay: 0s;
        }

        .sparkle-2 {
          top: 30%;
          right: 10%;
          animation-delay: 1s;
        }

        .sparkle-3 {
          bottom: 25%;
          left: 90%;
          animation-delay: 2s;
        }

        .sparkle-4 {
          bottom: 10%;
          right: 15%;
          animation-delay: 0.5s;
        }

        @keyframes sparkleFloat {
          0%, 100% {
            transform: translateY(0px) scale(1);
            opacity: 0.6;
          }
          50% {
            transform: translateY(-8px) scale(1.2);
            opacity: 1;
          }
        }

        /* Responsive adjustments */
        @media (max-width: 768px) {
          .video-page {
            top: 25%;
            left: 52%;
            width: 40%;
            height: 50%;
          }
          
          .magical-sparkles {
            top: 23%;
            left: 50%;
            width: 44%;
            height: 54%;
          }
        }

        @media (max-width: 480px) {
          .video-page {
            top: 26%;
            left: 51%;
            width: 42%;
            height: 48%;
          }
          
          .magical-sparkles {
            top: 24%;
            left: 49%;
            width: 46%;
            height: 52%;
          }
        }
      `}</style>
    </section>
  );
};

export default MagicalBookVideo;