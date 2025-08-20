import React from "react";

const BackgroundVideo: React.FC = () => {
  return (
    <div
      className="absolute inset-0 -z-10 overflow-hidden pointer-events-none"
      aria-hidden="true"
    >
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="https://res.cloudinary.com/dw4q8cuuc/video/upload/Loxdale_Promo_Video_Full_version_V2_cpfv5b.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster="/images/brighton-pier-unsplash.jpg"
      />
      
      {/* Animated text overlay */}
      <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
        <h1 className="text-6xl md:text-8xl lg:text-9xl text-white font-handwritten animate-text-appear">
          Loxdale English Centre
        </h1>
      </div>
      {/* Attractive CTA tabs at bottom corners */}
      <div className="absolute bottom-12 left-8 z-20 pointer-events-auto">
        <a 
          href="#homestay" 
          className="group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600/90 to-purple-600/90 backdrop-blur-md border border-white/30 rounded-2xl text-white shadow-2xl hover:shadow-blue-500/50 transition-all duration-500 hover:scale-110 hover:from-blue-500/95 hover:to-purple-500/95 overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <svg className="w-5 h-5 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>
          <span className="text-sm font-semibold relative z-10">Homestay Info</span>
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full animate-pulse"></div>
        </a>
      </div>
      
      <div className="absolute bottom-12 right-8 z-20 pointer-events-auto">
        <a 
          href="#quote" 
          className="group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-emerald-500/90 to-teal-600/90 backdrop-blur-md border border-white/30 rounded-2xl text-white shadow-2xl hover:shadow-emerald-500/50 transition-all duration-500 hover:scale-110 hover:from-emerald-400/95 hover:to-teal-500/95 overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <svg className="w-5 h-5 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
          </svg>
          <span className="text-sm font-semibold relative z-10">Get Quote</span>
          <svg className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </a>
      </div>

      {/* Bottom black overlay to hide subtitles with text */}
      <div className="absolute inset-x-0 bottom-0 h-[18vh] bg-black flex items-center justify-center">
        <div className="text-center text-white px-6">
          <p className="text-lg font-medium">
            Experience world-class English education in beautiful Brighton
          </p>
        </div>
      </div>
    </div>
  );
};

export default BackgroundVideo;
