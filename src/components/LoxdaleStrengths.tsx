import React from "react";
import { Award, Users, Globe, BookOpen, Heart, MapPin, GraduationCap, Palmtree } from "lucide-react";

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
    description: "Experience world-class English education in our historic Victorian building, where traditional elegance meets cutting-edge teaching methods. Our expert teachers create an inspiring learning environment.",
    image: "/lovable-uploads/4079b7b1-e649-4edb-a852-465edcd360ba.png",
    icon: BookOpen,
    highlights: [
      "Top 8% of UK English schools",
      "British Council accredited", 
      "Expert qualified teachers",
      "Historic Victorian setting"
    ]
  },
  {
    id: "international-community",
    title: "International Community", 
    description: "Join students from over 60 countries in our warm, family-like environment. Our international dining hall and social spaces foster lifelong friendships and cultural exchange.",
    image: "/lovable-uploads/5d5e1a9a-7693-47b2-9bde-db2524ba7c83.png",
    icon: Globe,
    highlights: [
      "60+ nationalities welcome",
      "International dining hall",
      "Cultural celebration events",
      "Family atmosphere"
    ]
  },
  {
    id: "classroom-learning",
    title: "Dynamic Classroom Experience",
    description: "Our vibrant classrooms bring together international students in an engaging, supportive environment where English comes alive through interactive learning and collaboration.",
    image: "/lovable-uploads/ecacf8b5-7576-472f-a7d4-aec2195676bf.png", 
    icon: GraduationCap,
    highlights: [
      "Small class sizes",
      "Interactive learning",
      "International mix",
      "Modern teaching methods"
    ]
  },
  {
    id: "brighton-exploration",
    title: "Brighton & Beyond Adventures",
    description: "Explore the vibrant seaside city of Brighton and iconic destinations across England. From Brighton Pier sunsets to London excursions, learning extends far beyond the classroom.",
    image: "/lovable-uploads/664cc247-9d60-40ff-9efc-dc9deaf1aa2c.png",
    icon: MapPin,
    highlights: [
      "Brighton seaside location", 
      "London day trips",
      "Cultural excursions",
      "Real-world English practice"
    ]
  },
  {
    id: "outdoor-activities",
    title: "Outdoor Learning & Sports",
    description: "Combine English learning with outdoor adventures and sports activities. From countryside exploration to beach volleyball, we believe in learning through experience and fun.",
    image: "/lovable-uploads/3f1f4f61-65be-4efa-a47e-fe3ed78a4eac.png",
    icon: Palmtree,
    highlights: [
      "Outdoor classroom sessions",
      "Sports activities", 
      "Nature exploration",
      "Team building events"
    ]
  },
  {
    id: "creative-workshops",
    title: "Creative Arts & Workshops",
    description: "Express yourself through art, crafts, and creative projects while practicing English. Our creative workshops provide a fun, relaxed environment for language development.",
    image: "/lovable-uploads/ece82a4c-b751-4a3f-9d65-1b86efdcf5d9.png",
    icon: Heart,
    highlights: [
      "Art & craft workshops",
      "Creative expression",
      "English through arts",
      "Relaxed learning environment"
    ]
  },
  {
    id: "social-celebration",
    title: "Celebrations & Social Events",
    description: "Experience British culture through themed parties, international celebrations, and social gatherings. From casino nights to cultural festivals, there's always something exciting happening.",
    image: "/lovable-uploads/efc7b0d6-eeb0-40e1-a1ce-f561e604974d.png",
    icon: Users,
    highlights: [
      "Cultural celebrations",
      "Themed social events", 
      "International festivals",
      "British traditions"
    ]
  },
  {
    id: "historic-facilities",
    title: "Historic Victorian Facilities",
    description: "Study in our magnificent Victorian mansion with its grand staircases, period features, and inspiring architecture. Our building creates a unique atmosphere that enhances the learning experience.",
    image: "/lovable-uploads/67f8db19-2355-4914-a3ea-9aa4335132ac.png",
    icon: Award,
    highlights: [
      "Victorian mansion setting",
      "Historic architecture",
      "Inspiring atmosphere",
      "Unique learning environment"
    ]
  }
];

const LoxdaleStrengths = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-background via-muted/30 to-background">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gradient-green-metallic">
            What Makes Loxdale Special
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Discover the unique strengths that have made us one of the UK's top 8% of English language schools. 
            Every aspect of Loxdale is designed to create an exceptional learning experience.
          </p>
        </div>

        {/* Strengths Grid */}
        <div className="space-y-16">
          {strengths.map((strength, index) => (
            <div 
              key={strength.id}
              className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
            >
              {/* Image */}
              <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div className="relative overflow-hidden rounded-2xl shadow-2xl group">
                  <img
                    src={strength.image}
                    alt={strength.title}
                    className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-105"
                    style={{
                      filter: "sepia(5%) saturate(110%) contrast(98%) brightness(103%) hue-rotate(2deg)"
                    }}
                  />
                  
                  {/* Overlay with icon */}
                  <div className="absolute top-6 left-6">
                    <div className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-lg">
                      <strength.icon className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                </div>
              </div>

              {/* Content */}
              <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''} space-y-6`}>
                <div>
                  <h3 className="text-3xl lg:text-4xl font-bold mb-4 text-gradient-green-metallic">
                    {strength.title}
                  </h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {strength.description}
                  </p>
                </div>

                {/* Highlights */}
                <div className="grid sm:grid-cols-2 gap-3">
                  {strength.highlights.map((highlight, highlightIndex) => (
                    <div 
                      key={highlightIndex}
                      className="flex items-center gap-3 p-3 bg-card/50 rounded-lg border border-border/20"
                    >
                      <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                      <span className="text-sm font-medium text-foreground">
                        {highlight}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Call to action */}
                <div className="pt-4">
                  <div className="inline-flex items-center gap-2 text-primary font-medium">
                    <span>Experience this yourself</span>
                    <div className="w-12 h-px bg-gradient-primary"></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LoxdaleStrengths;