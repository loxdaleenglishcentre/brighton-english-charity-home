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
