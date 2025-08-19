import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Award, Users, Globe, BookOpen, Heart, MapPin, GraduationCap, Palmtree, Clock, Star, Target, Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Strength {
  id: string;
  title: string;
  description: string;
  image: string;
  icon: React.ElementType;
}

const strengths: Strength[] = [
  {
    id: "teaching-excellence",
    title: "Teaching Excellence",
    description: "Experience world-class English education with qualified teachers in our historic Victorian building.",
    image: "/lovable-uploads/4079b7b1-e649-4edb-a852-465edcd360ba.png",
    icon: BookOpen,
  },
  {
    id: "international-community",
    title: "International Community", 
    description: "Join students from over 60 countries in our warm, family-like environment.",
    image: "/lovable-uploads/5d5e1a9a-7693-47b2-9bde-db2524ba7c83.png",
    icon: Globe,
  },
  {
    id: "classroom-learning",
    title: "Dynamic Classroom Experience",
    description: "Our vibrant classrooms bring together international students in an engaging environment.",
    image: "/lovable-uploads/055e2379-f8ff-48c2-ac54-35a812d4ed33.png", 
    icon: GraduationCap,
  },
  {
    id: "brighton-exploration",
    title: "Brighton & Beyond Adventures",
    description: "Explore vibrant Brighton and iconic English destinations beyond the classroom.",
    image: "/lovable-uploads/62225732-2c4f-4ce0-9825-60191dc95842.png",
    icon: MapPin,
  },
  {
    id: "outdoor-activities",
    title: "Outdoor Learning & Sports",
    description: "Combine English learning with outdoor adventures and sports activities.",
    image: "/lovable-uploads/3f1f4f61-65be-4efa-a47e-fe3ed78a4eac.png",
    icon: Palmtree,
  },
  {
    id: "creative-workshops",
    title: "Creative Arts & Workshops",
    description: "Express yourself through art, crafts, and creative projects while practicing English.",
    image: "/lovable-uploads/ece82a4c-b751-4a3f-9d65-1b86efdcf5d9.png",
    icon: Heart,
  },
  {
    id: "social-celebration",
    title: "Celebrations & Social Events",
    description: "Experience British culture through themed parties and international celebrations.",
    image: "/lovable-uploads/efc7b0d6-eeb0-40e1-a1ce-f561e604974d.png",
    icon: Users,
  },
  {
    id: "historic-facilities",
    title: "Historic Victorian Facilities",
    description: "Study in our magnificent Victorian mansion with grand staircases and period features.",
    image: "/lovable-uploads/67f8db19-2355-4914-a3ea-9aa4335132ac.png",
    icon: Award,
  },
  {
    id: "flexible-scheduling",
    title: "Flexible Study Options",
    description: "Choose from morning, afternoon, or intensive programmes to fit your lifestyle.",
    image: "/lovable-uploads/4079b7b1-e649-4edb-a852-465edcd360ba.png",
    icon: Clock,
  },
  {
    id: "premium-quality",
    title: "Premium Quality Education",
    description: "British Council accredited with top 8% ranking among UK English schools.",
    image: "/lovable-uploads/5d5e1a9a-7693-47b2-9bde-db2524ba7c83.png",
    icon: Star,
  },
  {
    id: "personalized-learning",
    title: "Personalized Learning Path",
    description: "Tailored lessons and specialized subjects to meet your individual goals.",
    image: "/lovable-uploads/055e2379-f8ff-48c2-ac54-35a812d4ed33.png",
    icon: Target,
  },
  {
    id: "innovative-methods",
    title: "Innovative Teaching Methods",
    description: "Cutting-edge teaching techniques combined with traditional academic excellence.",
    image: "/lovable-uploads/62225732-2c4f-4ce0-9825-60191dc95842.png",
    icon: Lightbulb,
  }
];

const StrengthsSlimSlideshow = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % strengths.length);
    }, 3000);

    return () => clearInterval(timer);
  }, [isAutoPlaying]);

  const nextStrength = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % strengths.length);
  };

  const prevStrength = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + strengths.length) % strengths.length);
  };

  const currentStrength = strengths[currentIndex];

  return (
    <section className="relative w-full bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5 py-8">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-2xl lg:text-3xl font-bold mb-4 text-gradient-green-metallic">
            12 Areas of Strength
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-4">
            Discover what makes us one of the UK's top-rated English language schools
          </p>
          <Button 
            variant="outline" 
            size="sm"
            className="text-primary border-primary hover:bg-primary hover:text-white transition-all duration-300"
          >
            Read Full Article →
          </Button>
        </div>

        {/* Slim Slideshow */}
        <div className="relative bg-background rounded-2xl shadow-lg overflow-hidden">
          <div className="relative h-32 sm:h-40 w-full">
            <div className="absolute inset-0 transition-all duration-1000 ease-in-out">
              <img
                src={currentStrength.image}
                alt={currentStrength.title}
                className="w-full h-full object-cover"
                style={{
                  filter: "sepia(3%) saturate(115%) contrast(105%) brightness(110%) hue-rotate(2deg)"
                }}
              />
              
              {/* Content Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent">
                <div className="absolute left-0 top-1/2 -translate-y-1/2 p-4 lg:p-6 text-white max-w-xl">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
                      <currentStrength.icon className="w-4 h-4 text-white" />
                    </div>
                    <h3 className="text-lg lg:text-xl font-bold">
                      {currentStrength.title}
                    </h3>
                    <span className="text-xs text-white/70 ml-auto">
                      {currentIndex + 1}/{strengths.length}
                    </span>
                  </div>
                  <p className="text-sm lg:text-base text-white/90 leading-relaxed">
                    {currentStrength.description}
                  </p>
                </div>
              </div>
            </div>

            {/* Navigation Arrows */}
            <Button
              variant="ghost"
              size="icon"
              onClick={prevStrength}
              className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/10 backdrop-blur-sm hover:bg-white/20 border border-white/30 text-white"
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>

            <Button
              variant="ghost"
              size="icon"
              onClick={nextStrength}
              className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/10 backdrop-blur-sm hover:bg-white/20 border border-white/30 text-white"
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>

          {/* Progress Bar */}
          <div className="bg-card/95 backdrop-blur-sm border-t p-3">
            <div className="flex items-center justify-center gap-2">
              <div className="flex-1 h-1 bg-muted rounded-full overflow-hidden max-w-xs">
                <div 
                  className="h-full bg-primary transition-all duration-300"
                  style={{ width: `${((currentIndex + 1) / strengths.length) * 100}%` }}
                ></div>
              </div>
              <span className="text-xs text-muted-foreground font-medium">
                {((currentIndex + 1) / strengths.length * 100).toFixed(0)}%
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StrengthsSlimSlideshow;