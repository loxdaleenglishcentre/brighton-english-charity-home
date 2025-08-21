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
              <div className="video-container">
                <iframe
                  src="https://player.cloudinary.com/embed/?cloud_name=dw4q8cuuc&public_id=Loxdale_Short_2024_Version_1_V1_t9os8s&autoplay=true&source_types[0]=webm%2Fvp9&poster_options[transformation][start_offset]=1"
                  allow="autoplay; fullscreen; encrypted-media"
                  allowFullScreen
                  className="w-full h-full border-none"
                  title="Loxdale English Centre Video"
                />
              </div>
            </div>

            {/* Magical glow effect around video */}
            <div className={`magical-glow absolute transition-all duration-1000 ${bookOpen ? 'opacity-100' : 'opacity-0'}`}></div>
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

        .video-container {
          width: 100%;
          height: 100%;
          background: linear-gradient(145deg, rgba(212, 185, 143, 0.1), rgba(139, 115, 85, 0.1));
          border-radius: 8px;
          box-shadow: 
            inset 0 0 20px rgba(0, 0, 0, 0.3),
            0 0 30px rgba(255, 215, 0, 0.2);
          position: relative;
        }

        .video-container::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(145deg, 
            rgba(255, 215, 0, 0.1) 0%,
            transparent 20%,
            transparent 80%,
            rgba(255, 165, 0, 0.1) 100%
          );
          border-radius: 8px;
          pointer-events: none;
        }

        .magical-glow {
          top: 22%;
          left: 52%;
          width: 41%;
          height: 56%;
          background: radial-gradient(ellipse, rgba(255, 215, 0, 0.3) 0%, transparent 70%);
          border-radius: 50%;
          animation: pulseGlow 4s infinite ease-in-out;
          pointer-events: none;
        }

        @keyframes pulseGlow {
          0%, 100% {
            transform: scale(1);
            opacity: 0.3;
          }
          50% {
            transform: scale(1.05);
            opacity: 0.6;
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
          
          .magical-glow {
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
          
          .magical-glow {
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