import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Award, Heart, TrendingUp, Users, Star, Shield, DollarSign, Globe } from "lucide-react";
import React, { useEffect, useMemo, useRef, useState } from "react";

// Rolling counter hook for animated numbers
function easeOutCubic(t: number) {
  return 1 - Math.pow(1 - t, 3);
}

function useCountUp(target: number, duration = 2000, start = false) {
  const [value, setValue] = useState(0);
  const rafRef = useRef<number | null>(null);
  const startTime = useRef<number | null>(null);

  useEffect(() => {
    if (!start) return;

    const step = (timestamp: number) => {
      if (startTime.current === null) startTime.current = timestamp;
      const progress = Math.min(1, (timestamp - startTime.current) / duration);
      const eased = easeOutCubic(progress);
      setValue(Math.round(target * eased));
      if (progress < 1) {
        rafRef.current = requestAnimationFrame(step);
      }
    };

    rafRef.current = requestAnimationFrame(step);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      startTime.current = null;
    };
  }, [target, duration, start]);

  return value;
}

const WhyChooseLoxdale = () => {
  const advantages = [
    {
      imageUrl: "https://yourwebsite.com/path/to/charity-image.jpg",
      title: "Educational Charity",
      description: "We're a non-profit organization dedicated to affordable, quality education. Every penny goes back into improving your learning experience.",
      color: "bg-gradient-primary"
    },
    {
      imageUrl: "https://yourwebsite.com/path/to/award-badge-image.jpg",
      title: "Top 8% UK School",
      description: "Ranked among the UK's elite language schools by EL Gazette. Our Centre of Excellence award speaks to our commitment to outstanding education.",
      color: "bg-gradient-secondary"
    },
    {
      imageUrl: "https://yourwebsite.com/path/to/value-pricing-image.jpg",
      title: "Unbeatable Value",
      description: "Get premium education at charity prices. Our non-profit status means you pay 30-50% less than commercial schools without compromising quality.",
      color: "bg-gradient-accent"
    },
    {
      imageUrl: "https://yourwebsite.com/path/to/teaching-method-image.jpg",
      title: "Applied English Method",
      description: "Our unique teaching approach lets you personalize your learning with specialized subjects like Business English, Creative Writing, and Cultural Studies.",
      color: "bg-gradient-primary"
    }
  ];

  const achievements = [
    { label: "YEARS OF EXCELLENCE", value: 45, suffix: "+" },
    { label: "TOTAL STUDENTS SINCE OPENING", value: 20000, suffix: "+" },
    { label: "NATIONALITIES REPRESENTED", value: 80, suffix: "+" },
    { label: "AVERAGE AGE", value: 24, suffix: "" }
  ];

  return (
    <section className="py-16 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-primary opacity-5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-secondary opacity-5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 lg:px-8">
        {/* School Building Video with Title Overlay */}
        <div className="relative w-full mb-16">
          <div className="w-full">
            <div className="aspect-video w-full relative overflow-hidden">
              <iframe
                src="https://player.cloudinary.com/embed/?cloud_name=dw4q8cuuc&public_id=The_incredible_Loxdale_building_home_to_Loxdale_English_Centre_itjj2c&autoplay=true"
                width="100%"
                height="100%"
                title="The Incredible Loxdale Building - Home to Loxdale English Centre"
                className="w-full h-full object-cover"
                allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
                allowFullScreen
                frameBorder="0"
              />
               {/* Title Overlay */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
                <div className="text-center px-8 py-8 bg-black/40 backdrop-blur-sm rounded-2xl border border-white/10">
                  <div className="mb-4">
                    <div className="inline-flex items-center gap-2 bg-gradient-primary text-white px-6 py-2 rounded-full text-sm font-medium border-0">
                      🏆 EL Gazette Centre of Excellence
                    </div>
                  </div>
                  <h2 className="text-4xl lg:text-6xl font-bold tracking-tight text-white mb-4 drop-shadow-lg">
                    Ranked in UK's Top 8% Schools
                  </h2>
                  <p className="text-white/90 text-lg max-w-2xl mx-auto drop-shadow-md">
                    Award-winning education that delivers exceptional results for students from over 60 countries worldwide
                  </p>
                </div>
              </div>
              
              {/* CTA Overlay */}
              <div className="absolute bottom-0 left-0 right-0 z-20">
                <div className="text-center px-8 py-12 bg-gradient-to-t from-purple-900/60 via-purple-800/40 to-transparent backdrop-blur-sm">
                  <h3 className="text-2xl lg:text-3xl font-bold text-white mb-6 drop-shadow-lg">
                    Ready to Start Your English Journey?
                  </h3>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <Button size="lg" className="bg-gradient-primary hover:bg-gradient-primary/90 text-white border-0 px-8 py-3 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                      Enquire Now
                    </Button>
                    <Button variant="outline" size="lg" className="bg-white/10 text-white border-white/30 hover:bg-white/20 px-8 py-3 text-lg font-semibold backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                      Watch Preview
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


        {/* Rolling Achievement Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {achievements.map((achievement, index) => {
            const StatItem = ({ stat }) => {
              const ref = useRef<HTMLDivElement | null>(null);
              const [inView, setInView] = useState(false);

              useEffect(() => {
                const el = ref.current;
                if (!el) return;
                const io = new IntersectionObserver(
                  (entries) => {
                    entries.forEach((entry) => {
                      if (entry.isIntersecting) {
                        setInView(true);
                        io.disconnect();
                      }
                    });
                  },
                  { threshold: 0.2 }
                );
                io.observe(el);
                return () => io.disconnect();
              }, []);

              const current = useCountUp(stat.value, 2000, inView);
              const formatted = useMemo(() => {
                const base = new Intl.NumberFormat().format(current);
                return `${base}${stat.suffix ?? ""}`;
              }, [current, stat.suffix]);

              return (
                <div ref={ref} className="group rounded-3xl bg-card/80 backdrop-blur-sm p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-border/50">
                  <div className="flex flex-col items-center gap-4 text-center">
                    <div className={`text-5xl font-bold tracking-tight text-foreground transition-all duration-700 ${
                      inView ? 'animate-fade-in scale-100' : 'scale-90 opacity-0'
                    }`}>
                      <span className="inline-block animate-pulse text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-red-500 to-red-600">
                        {formatted}
                      </span>
                    </div>
                    <div className={`h-2 w-20 rounded-full bg-gradient-to-r from-primary to-primary/70 transition-all duration-500 ${
                      inView ? 'scale-x-100' : 'scale-x-0'
                    }`} aria-hidden />
                    <p className={`text-sm font-medium text-muted-foreground uppercase tracking-wide transition-all duration-500 ${
                      inView ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                    }`}>{stat.label}</p>
                  </div>
                </div>
              );
            };

            return <StatItem key={index} stat={achievement} />;
          })}
        </div>

        {/* Main Advantages Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {advantages.map((advantage, index) => (
            <Card 
              key={index} 
              className="hover-float border-0 shadow-lg overflow-hidden group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8">
                <div className="flex items-start gap-4 mb-4">
                  <div className="loxdale-feature-icon group-hover:scale-110 transition-transform duration-300" style={{ width: '56px', height: '56px', borderRadius: '14px', overflow: 'hidden', flexShrink: 0 }}>
                    <img 
                      src={advantage.imageUrl} 
                      alt={`${advantage.title} Icon`} 
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3">{advantage.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {advantage.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>


      </div>
      
      {/* White spacer */}
      <div className="section-spacer"></div>
    </section>
  );
};

export default WhyChooseLoxdale;