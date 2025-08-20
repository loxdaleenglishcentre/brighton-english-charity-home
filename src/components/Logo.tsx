type LogoProps = {
  className?: string;
  height?: number;
};

import siteLogo from "@/assets/loxdale-logo-site.png";

const Logo = ({ className = "", height }: LogoProps) => {
  return (
    <div
      className={`flex items-center ${className} bg-white/10 backdrop-blur-sm rounded-lg px-3 py-2`}
      style={height ? { height } : undefined}
      aria-label="Loxdale English Centre logo"
    >
      <img
        src={"/lovable-uploads/1e47e1d5-f045-4ebe-a39e-4665ea55a700.png"}
        alt="Loxdale English Centre"
        className="h-full w-auto object-contain select-none"
        onError={(e) => { e.currentTarget.src = siteLogo; (e.currentTarget as HTMLImageElement).style.mixBlendMode = "normal"; }}
        draggable={false}
        loading="eager"
        decoding="async"
        sizes="(min-width:1280px) 96px, (min-width:1024px) 80px, (min-width:768px) 64px, 48px"
        style={{ 
          filter: "drop-shadow(0 8px 24px hsl(var(--primary-glow) / 0.35))"
        }}
      />
    </div>
  );
};

export default Logo;
