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
      {/* Bottom black overlay to hide subtitles */}
      <div className="fixed inset-x-0 bottom-0 h-[18vh]" style={{
        background: "linear-gradient(to top, rgba(0,0,0,0.85), rgba(0,0,0,0.5), rgba(0,0,0,0))"
      }} />
    </div>
  );
};

export default BackgroundVideo;
