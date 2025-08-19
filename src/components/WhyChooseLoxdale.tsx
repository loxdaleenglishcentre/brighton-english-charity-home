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
      icon: Heart,
      title: "Educational Charity",
      description: "We're a non-profit organization dedicated to affordable, quality education. Every penny goes back into improving your learning experience.",
      color: "bg-gradient-primary"
    },
    {
      icon: Award,
      title: "Top 8% UK School",
      description: "Ranked among the UK's elite language schools by EL Gazette. Our Centre of Excellence award speaks to our commitment to outstanding education.",
      color: "bg-gradient-secondary"
    },
    {
      icon: DollarSign,
      title: "Unbeatable Value",
      description: "Get premium education at charity prices. Our non-profit status means you pay 30-50% less than commercial schools without compromising quality.",
      color: "bg-gradient-accent"
    },
    {
      icon: Globe,
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
        {/* Header */}
        <div className="text-center mb-16">
          <div className="mb-6">
            <div className="inline-flex items-center gap-2 bg-gradient-primary text-white px-6 py-2 rounded-full text-sm font-medium border-0">
              🏆 EL Gazette Centre of Excellence
            </div>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-gradient-green-metallic mb-4">
            Ranked in UK's Top 8% Schools
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Award-winning education that delivers exceptional results for students from over 60 countries worldwide
          </p>
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
                  <div className={`w-12 h-12 ${advantage.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}>
                    <advantage.icon className={`w-6 h-6 ${advantage.color.includes("secondary") ? "text-foreground" : "text-white"}`} />
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

        {/* Visual Banner with Students High-Five Image */}
        <div className="mb-12">
          <img 
            src="/lovable-uploads/2f4eedc8-47fb-468a-b754-f7d4d99657f4.png"
            alt="Students celebrating together with high-fives in the garden at Loxdale English Centre"
            className="w-full h-80 lg:h-96 object-cover rounded-3xl shadow-2xl"
          />
        </div>

        {/* Call to Action */}
        <Card className="glass border-0 shadow-xl">
          <CardContent className="p-8 lg:p-12 text-center">
            <div className="max-w-3xl mx-auto">
              <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-3xl font-bold mb-6 text-gradient-green-metallic">
                Ready to Start Your English Journey?
              </h3>
              
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Join our community of international learners and experience the difference that charity-driven, 
                award-winning education makes. Limited places available for our exclusive programmes.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg"
                  className="bg-gradient-red-3d shadow-red-glow text-white border-0 px-8 py-4 hover:scale-105 transition-all duration-300"
                >
                  Book Your Place Now
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-border hover:bg-muted px-8 py-4"
                >
                  Download Brochure
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      
      {/* White spacer */}
      <div className="section-spacer"></div>
    </section>
  );
};

export default WhyChooseLoxdale;