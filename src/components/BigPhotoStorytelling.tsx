import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";

interface StoryPhoto {
  id: string;
  url: string;
  title: string;
  description: string;
  category: "classroom" | "social" | "trips" | "culture" | "sports";
  isVideo?: boolean;
}

const storyPhotos: StoryPhoto[] = [
  {
    id: "classroom-1",
    url: "/lovable-uploads/37506b5b-a6c5-42f9-b42a-c1afa7a6ba3f.png",
    title: "Learning Together",
    description: "Students engaged in interactive English lessons in our beautiful Victorian building",
    category: "classroom"
  },
  {
    id: "social-1", 
    url: "/lovable-uploads/c336b1bb-062a-4a43-b3ab-23dee6360707.png",
    title: "Friendships That Last",
    description: "International students sharing meals and creating lifelong connections",
    category: "social"
  },
  {
    id: "trips-1",
    url: "/lovable-uploads/28aad2a0-18f4-4040-9538-7cf48f6af959.png", 
    title: "Exploring England",
    description: "Group excursions to Brighton, London, and historic English landmarks",
    category: "trips"
  },
  {
    id: "culture-1",
    url: "/lovable-uploads/3472d932-5645-47a9-8ada-ad38f8983094.png",
    title: "Cultural Immersion", 
    description: "Experiencing British culture through local events and traditions",
    category: "culture"
  },
  {
    id: "classroom-2",
    url: "/lovable-uploads/9a9b973f-7604-41a4-a640-e4db407eaa1f.png",
    title: "Expert Teaching",
    description: "Small classes with experienced teachers in our inspiring learning environment",
    category: "classroom"
  },
  {
    id: "social-2",
    url: "/lovable-uploads/740a421e-576b-4700-8c00-40bb104594ee.png",
    title: "Community Spirit",
    description: "Students from around the world coming together as one family",
    category: "social"  
  }
];

const BigPhotoStorytelling = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % storyPhotos.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [isAutoPlaying]);

  const nextPhoto = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % storyPhotos.length);
  };

  const prevPhoto = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + storyPhotos.length) % storyPhotos.length);
  };

  const goToPhoto = (index: number) => {
    setIsAutoPlaying(false);
    setCurrentIndex(index);
  };

  const currentPhoto = storyPhotos[currentIndex];

  return (
    <section className="relative w-full overflow-hidden">
      {/* Main Photo Display */}
      <div className="relative h-[80vh] w-full">
        <div className="absolute inset-0 transition-all duration-1000 ease-in-out">
          <img
            src={currentPhoto.url}
            alt={currentPhoto.title}
            className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105"
            style={{
              filter: "sepia(10%) saturate(110%) contrast(95%) brightness(105%) hue-rotate(5deg)"
            }}
          />
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
          
          {/* Content Overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16 text-white">
            <div className="max-w-4xl mx-auto">
              <div className="mb-4">
                <span className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium border border-white/30">
                  {currentPhoto.category.charAt(0).toUpperCase() + currentPhoto.category.slice(1)}
                </span>
              </div>
              
              <h2 className="text-4xl md:text-6xl font-bold mb-4 text-outline-sm">
                {currentPhoto.title}
              </h2>
              
              <p className="text-xl md:text-2xl text-white/90 max-w-2xl leading-relaxed text-outline-sm">
                {currentPhoto.description}
              </p>

              {currentPhoto.isVideo && (
                <Button
                  size="lg"
                  className="mt-6 bg-white/20 backdrop-blur-sm hover:bg-white/30 border border-white/30"
                >
                  <Play className="w-5 h-5 mr-2" />
                  Watch Story
                </Button>
              )}
            </div>
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevPhoto}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300 border border-white/30"
        >
          <ChevronLeft className="w-6 h-6 text-white" />
        </button>

        <button
          onClick={nextPhoto}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300 border border-white/30"
        >
          <ChevronRight className="w-6 h-6 text-white" />
        </button>

        {/* Dots Indicator */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {storyPhotos.map((_, index) => (
            <button
              key={index}
              onClick={() => goToPhoto(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? "bg-white scale-125" 
                  : "bg-white/50 hover:bg-white/75"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Thumbnail Strip */}
      <div className="bg-background/95 backdrop-blur-sm border-t">
        <div className="container mx-auto px-6 py-6">
          <div className="flex gap-4 overflow-x-auto scrollbar-hide">
            {storyPhotos.map((photo, index) => (
              <button
                key={photo.id}
                onClick={() => goToPhoto(index)}
                className={`flex-shrink-0 w-24 h-16 rounded-lg overflow-hidden transition-all duration-300 ${
                  index === currentIndex 
                    ? "ring-2 ring-primary scale-110" 
                    : "opacity-70 hover:opacity-100"
                }`}
              >
                <img
                  src={photo.url}
                  alt={photo.title}
                  className="w-full h-full object-cover"
                  style={{
                    filter: "sepia(10%) saturate(110%) contrast(95%) brightness(105%) hue-rotate(5deg)"
                  }}
                />
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Story Quote Section */}
      <div className="bg-gradient-to-br from-muted/50 to-background py-16">
        <div className="container mx-auto px-6 text-center">
          <blockquote className="text-2xl md:text-3xl font-light italic text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            "This is more than a school—it's a place where language comes alive, 
            friendships bloom, and memories are made that last a lifetime."
          </blockquote>
          <div className="mt-8 flex justify-center">
            <div className="w-16 h-px bg-gradient-green-3d"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BigPhotoStorytelling;