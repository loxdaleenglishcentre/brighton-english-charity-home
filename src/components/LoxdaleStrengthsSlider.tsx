import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Award, Users, Globe, BookOpen, Heart, MapPin, GraduationCap, Palmtree, Target, FileText, Building, Settings, Leaf, Calendar, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface Strength {
  id: string;
  title: string;
  description: string;
  image: string;
  icon: React.ElementType;
  highlights: string[];
}

const strengths: Strength[] = [
  {
    id: "teaching-excellence",
    title: "Teaching Excellence",
    description: "Experience world-class English education in our historic Victorian building, where traditional elegance meets cutting-edge teaching methods.",
    image: "/lovable-uploads/4079b7b1-e649-4edb-a852-465edcd360ba.png",
    icon: BookOpen,
    highlights: ["Top 8% of UK English schools", "British Council accredited", "Expert qualified teachers", "Historic Victorian setting"]
  },
  {
    id: "international-community",
    title: "International Community", 
    description: "Join students from over 60 countries in our warm, family-like environment where lifelong friendships and cultural exchange flourish.",
    image: "/lovable-uploads/5d5e1a9a-7693-47b2-9bde-db2524ba7c83.png",
    icon: Globe,
    highlights: ["60+ nationalities welcome", "International dining hall", "Cultural celebration events", "Family atmosphere"]
  },
  {
    id: "classroom-learning",
    title: "Dynamic Classroom Experience",
    description: "Our vibrant classrooms bring together international students in an engaging, supportive environment where English comes alive.",
    image: "/lovable-uploads/055e2379-f8ff-48c2-ac54-35a812d4ed33.png", 
    icon: GraduationCap,
    highlights: ["Small class sizes", "Interactive learning", "International mix", "Modern teaching methods"]
  },
  {
    id: "brighton-exploration",
    title: "Brighton & Beyond Adventures",
    description: "Explore vibrant Brighton and iconic English destinations. Learning extends far beyond the classroom into real-world experiences.",
    image: "/lovable-uploads/62225732-2c4f-4ce0-9825-60191dc95842.png",
    icon: MapPin,
    highlights: ["Brighton seaside location", "London day trips", "Cultural excursions", "Real-world English practice"]
  },
  {
    id: "outdoor-activities",
    title: "Outdoor Learning & Sports",
    description: "Combine English learning with outdoor adventures and sports activities. We believe in learning through experience and fun.",
    image: "/lovable-uploads/3f1f4f61-65be-4efa-a47e-fe3ed78a4eac.png",
    icon: Palmtree,
    highlights: ["Outdoor classroom sessions", "Sports activities", "Nature exploration", "Team building events"]
  },
  {
    id: "creative-workshops",
    title: "Creative Arts & Workshops",
    description: "Express yourself through art, crafts, and creative projects while practicing English in a fun, relaxed environment.",
    image: "/lovable-uploads/ece82a4c-b751-4a3f-9d65-1b86efdcf5d9.png",
    icon: Heart,
    highlights: ["Art & craft workshops", "Creative expression", "English through arts", "Relaxed learning environment"]
  },
  {
    id: "social-celebration",
    title: "Celebrations & Social Events",
    description: "Experience British culture through themed parties, international celebrations, and social gatherings throughout the year.",
    image: "/lovable-uploads/efc7b0d6-eeb0-40e1-a1ce-f561e604974d.png",
    icon: Users,
    highlights: ["Cultural celebrations", "Themed social events", "International festivals", "British traditions"]
  },
  {
    id: "historic-facilities",
    title: "Historic Victorian Facilities",
    description: "Study in our magnificent Victorian mansion with grand staircases and period features that create a unique learning atmosphere.",
    image: "/lovable-uploads/67f8db19-2355-4914-a3ea-9aa4335132ac.png",
    icon: Award,
    highlights: ["Victorian mansion setting", "Historic architecture", "Inspiring atmosphere", "Unique learning environment"]
  }
];

// 12 Areas of Strength data
const areasOfStrength = [
  { id: "strategic", title: "Strategic & Quality Management", icon: Target, color: "bg-green-500" },
  { id: "staff", title: "Staff Management", icon: Users, color: "bg-green-400" },
  { id: "student", title: "Student Administration", icon: FileText, color: "bg-blue-500" },
  { id: "publicity", title: "Publicity", icon: Globe, color: "bg-purple-500" },
  { id: "premises", title: "Premises and Facilities", icon: Building, color: "bg-orange-500" },
  { id: "academic-staff", title: "Academic Staff Profile", icon: GraduationCap, color: "bg-blue-600" },
  { id: "academic-mgmt", title: "Academic Management", icon: Settings, color: "bg-slate-600" },
  { id: "course-design", title: "Course Design", icon: Leaf, color: "bg-teal-500" },
  { id: "teaching", title: "Teaching", icon: Award, color: "bg-orange-400" },
  { id: "care", title: "Care of Students", icon: Heart, color: "bg-red-500" },
  { id: "leisure", title: "Leisure Opportunities", icon: Calendar, color: "bg-pink-500" },
  { id: "safeguarding", title: "Safeguarding under 18s", icon: Shield, color: "bg-green-600" }
];

const LoxdaleStrengthsSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [activeStrengthTab, setActiveStrengthTab] = useState(areasOfStrength[0].id);

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % strengths.length);
    }, 4000);

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

  const goToStrength = (index: number) => {
    setIsAutoPlaying(false);
    setCurrentIndex(index);
  };

  const currentStrength = strengths[currentIndex];

  return (
    <section className="relative w-full overflow-hidden">
      {/* Clean Green Gradient Header */}
      <div className="bg-gradient-to-br from-primary/10 via-accent/5 to-primary/5 py-16">
        <div className="container mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gradient-green-metallic">
            What Makes Loxdale Special
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-12">
            Discover the unique strengths that have made us one of the UK's top 8% of English language schools
          </p>

          {/* 12 Areas of Strength Section */}
          <div className="mb-8">
            <div className="bg-gray-800 text-white rounded-full px-8 py-4 inline-block mb-6">
              <h3 className="text-2xl font-bold">
                12 Areas of Strength
              </h3>
            </div>
            
            {/* British Council Link and El Gazette Logo */}
            <div className="flex flex-col items-center gap-4 mb-8">
              <Button
                variant="ghost"
                className="text-green-600 hover:text-white text-base font-medium flex items-center gap-1 transition-colors duration-300"
                onClick={() => window.open('https://www.britishcouncil.org/education/accreditation', '_blank')}
              >
                Read the full British Council report ↗
              </Button>
              
              <div className="flex items-center gap-6">
                <div className="border-2 border-red-500 rounded-lg p-3 bg-white">
                  <div className="text-red-500 font-bold text-base">el-gazette</div>
                  <div className="text-xs text-gray-600">Centre of Excellence</div>
                  <div className="text-xs text-gray-600">2024 – 2025</div>
                </div>
                <div className="bg-green-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                  Top 8% UK
                </div>
              </div>
            </div>

            {/* Slow Moving Slider */}
            <div className="relative overflow-hidden">
              <div className="flex animate-[slide_60s_linear_infinite] hover:[animation-play-state:paused]">
                {[...areasOfStrength, ...areasOfStrength].map((area, index) => {
                  const IconComponent = area.icon;
                  return (
                    <div key={`${area.id}-${index}`} className="flex-shrink-0 w-80 mx-4">
                    <div className="bg-white rounded-2xl shadow-sm border p-6 hover:shadow-md transition-all duration-300 hover-scale">
                      <div className="text-center">
                        <div className={`w-16 h-16 ${area.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                          <IconComponent className="w-8 h-8 text-white" />
                        </div>
                        <h4 className="font-semibold text-lg text-gray-900 mb-2">
                          {area.title}
                        </h4>
                        <p className="text-sm text-gray-600 leading-relaxed">
                          Excellence in {area.title.toLowerCase()} - part of our comprehensive approach to delivering outstanding English language education.
                        </p>
                      </div>
                    </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Small white spacer */}
      <div className="bg-white h-8"></div>

      {/* Interactive Slider */}
      <div className="relative bg-background">
        <div className="relative h-[70vh] w-full overflow-hidden">
          <div className="absolute inset-0 transition-all duration-1000 ease-in-out">
            <img
              src={currentStrength.image}
              alt={currentStrength.title}
              className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105"
              style={{
                filter: "sepia(3%) saturate(115%) contrast(105%) brightness(110%) hue-rotate(2deg)"
              }}
            />
            
            {/* Content Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent">
              <div className="absolute left-0 top-1/2 -translate-y-1/2 p-8 lg:p-16 text-white max-w-2xl">
                {/* Icon */}
                <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6 border border-white/20">
                  <currentStrength.icon className="w-8 h-8 text-white" />
                </div>
                
                {/* Title */}
                <h3 className="text-4xl lg:text-5xl font-bold mb-6 text-outline-sm">
                  {currentStrength.title}
                </h3>
                
                {/* Description */}
                <p className="text-xl lg:text-2xl text-white/90 mb-8 leading-relaxed text-outline-sm">
                  {currentStrength.description}
                </p>

                {/* Highlights */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                  {currentStrength.highlights.map((highlight, index) => (
                    <div 
                      key={index}
                      className="flex items-center gap-3 p-3 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20"
                    >
                      <div className="w-2 h-2 bg-white rounded-full flex-shrink-0"></div>
                      <span className="text-sm font-medium text-white">
                        {highlight}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Progress indicator */}
                <div className="flex items-center gap-4">
                  <span className="text-sm text-white/70 font-medium">
                    {currentIndex + 1} of {strengths.length}
                  </span>
                  <div className="flex-1 h-1 bg-white/20 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-white transition-all duration-300"
                      style={{ width: `${((currentIndex + 1) / strengths.length) * 100}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <Button
            variant="ghost"
            size="icon"
            onClick={prevStrength}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-14 h-14 bg-white/10 backdrop-blur-sm hover:bg-white/20 border border-white/30 text-white"
          >
            <ChevronLeft className="w-7 h-7" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            onClick={nextStrength}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-14 h-14 bg-white/10 backdrop-blur-sm hover:bg-white/20 border border-white/30 text-white"
          >
            <ChevronRight className="w-7 h-7" />
          </Button>
        </div>

        {/* Thumbnail Navigation */}
        <div className="bg-card/95 backdrop-blur-sm border-t">
          <div className="container mx-auto px-6 py-6">
            <div className="flex gap-4 overflow-x-auto scrollbar-hide">
              {strengths.map((strength, index) => (
                <button
                  key={strength.id}
                  onClick={() => goToStrength(index)}
                  className={`flex-shrink-0 group ${
                    index === currentIndex ? 'opacity-100' : 'opacity-60 hover:opacity-80'
                  }`}
                >
                  <div className="flex items-center gap-3 p-3 rounded-lg transition-all duration-300">
                    <div className={`w-12 h-12 rounded-lg overflow-hidden transition-all duration-300 ${
                      index === currentIndex ? 'ring-2 ring-primary scale-110' : ''
                    }`}>
                      <img
                        src={strength.image}
                        alt={strength.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="text-left">
                      <h4 className="font-semibold text-sm text-foreground">
                        {strength.title}
                      </h4>
                      <div className="flex items-center gap-1 mt-1">
                        <strength.icon className="w-3 h-3 text-primary" />
                        <span className="text-xs text-muted-foreground">
                          {strength.highlights[0]}
                        </span>
                      </div>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoxdaleStrengthsSlider;