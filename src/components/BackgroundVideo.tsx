import React from "react";

const BackgroundVideo: React.FC = () => {
  return (
    <div
      className="fixed inset-0 -z-10 overflow-hidden pointer-events-none"
      aria-hidden="true"
    >
      <video
        className="fixed inset-0 w-full h-full object-cover"
        src="https://res.cloudinary.com/dw4q8cuuc/video/upload/f_auto,vc_auto,q_auto/QUIK_20181108_150856_V1_qcjvrz.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster="/images/brighton-pier-unsplash.jpg"
      />
      {/* Bottom black overlay to hide subtitles with text */}
      <div className="fixed inset-x-0 bottom-0 h-[18vh] bg-black flex items-center justify-center">
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
