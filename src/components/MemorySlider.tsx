import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Memory {
  id: string;
  url: string;
  title: string;
  description: string;
  category: "excellence" | "community" | "exploration" | "facilities";
}

const memories: Memory[] = [
  {
    id: "excellence-1",
    url: "/lovable-uploads/4079b7b1-e649-4edb-a852-465edcd360ba.png",
    title: "Teaching Excellence",
    description: "Students immersed in learning within our historic Victorian library, where traditional elegance meets modern education",
    category: "excellence"
  },
  {
    id: "community-1", 
    url: "/lovable-uploads/5d5e1a9a-7693-47b2-9bde-db2524ba7c83.png",
    title: "International Family",
    description: "Our formal dining hall brings together students from around the world, creating lifelong friendships over shared meals",
    category: "community"
  },
  {
    id: "exploration-1",
    url: "/lovable-uploads/664cc247-9d60-40ff-9efc-dc9deaf1aa2c.png", 
    title: "Brighton Adventures",
    description: "Exploring the iconic Brighton Pier at sunset - where English learning extends beyond the classroom into real-world experiences",
    category: "exploration"
  },
  {
    id: "facilities-1",
    url: "/lovable-uploads/67f8db19-2355-4914-a3ea-9aa4335132ac.png",
    title: "Historic Elegance", 
    description: "Our grand Victorian staircase welcomes students into a building steeped in educational tradition and architectural beauty",
    category: "facilities"
  }
];

const MemorySlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false);

  const nextMemory = () => {
    if (isFlipping) return;
    setIsFlipping(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % memories.length);
      setIsFlipping(false);
    }, 300);
  };

  const prevMemory = () => {
    if (isFlipping) return;
    setIsFlipping(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev - 1 + memories.length) % memories.length);
      setIsFlipping(false);
    }, 300);
  };

  const goToMemory = (index: number) => {
    if (isFlipping || index === currentIndex) return;
    setIsFlipping(true);
    setTimeout(() => {
      setCurrentIndex(index);
      setIsFlipping(false);
    }, 300);
  };

  const currentMemory = memories[currentIndex];

  return (
    <section className="py-16 bg-gradient-to-br from-background via-muted/30 to-background relative overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 opacity-5 bg-[url('/src/assets/paper-texture.png')] bg-repeat"></div>
      
      <div className="container mx-auto px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gradient-green-metallic">
            Memories That Last a Lifetime
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Every page tells a story of growth, friendship, and discovery at Loxdale English Centre
          </p>
        </div>

        {/* Memory Book */}
        <div className="max-w-5xl mx-auto">
          <div className="relative bg-card rounded-3xl shadow-2xl border border-border/20 overflow-hidden" 
               style={{ 
                 background: "linear-gradient(145deg, hsl(var(--card)), hsl(var(--muted))), url('/src/assets/paper-texture.png')",
                 backgroundBlendMode: "soft-light"
               }}>
            
            {/* Book spine effect */}
            <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-border/40 to-transparent"></div>
            <div className="absolute left-2 top-0 bottom-0 w-px bg-border/30"></div>
            <div className="absolute left-4 top-0 bottom-0 w-px bg-border/20"></div>

            {/* Main content area */}
            <div className="grid lg:grid-cols-2 min-h-[500px]">
              {/* Image side */}
              <div className="relative overflow-hidden">
                <div className={`w-full h-full transition-all duration-500 ease-in-out ${
                  isFlipping ? 'scale-95 opacity-0 rotate-y-90' : 'scale-100 opacity-100 rotate-y-0'
                }`}>
                  <img
                    src={currentMemory.url}
                    alt={currentMemory.title}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                    style={{
                      filter: "sepia(8%) saturate(115%) contrast(98%) brightness(102%) hue-rotate(2deg)"
                    }}
                  />
                  
                  {/* Photo frame effect */}
                  <div className="absolute inset-0 border-8 border-white/80 shadow-inset"></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                </div>
              </div>

              {/* Content side */}
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className={`transition-all duration-500 ease-in-out ${
                  isFlipping ? 'translate-x-8 opacity-0' : 'translate-x-0 opacity-100'
                }`}>
                  
                  {/* Category badge */}
                  <div className="mb-6">
                    <span className="inline-block px-4 py-2 bg-gradient-primary text-white rounded-full text-sm font-medium border border-primary/20">
                      {currentMemory.category.charAt(0).toUpperCase() + currentMemory.category.slice(1)}
                    </span>
                  </div>

                  {/* Memory title */}
                  <h3 className="text-3xl lg:text-4xl font-bold mb-6 text-gradient-green-metallic leading-tight">
                    {currentMemory.title}
                  </h3>

                  {/* Memory description */}
                  <p className="text-lg text-muted-foreground leading-relaxed mb-8 font-light italic">
                    "{currentMemory.description}"
                  </p>

                  {/* Navigation dots */}
                  <div className="flex gap-3 mb-8">
                    {memories.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => goToMemory(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${
                          index === currentIndex 
                            ? "bg-primary scale-125 shadow-md" 
                            : "bg-border hover:bg-primary/50"
                        }`}
                      />
                    ))}
                  </div>

                  {/* Page number */}
                  <div className="text-sm text-muted-foreground/60 font-medium">
                    Page {currentIndex + 1} of {memories.length}
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation arrows */}
            <Button
              variant="ghost"
              size="icon"
              onClick={prevMemory}
              disabled={isFlipping}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-background/80 backdrop-blur-sm hover:bg-background border border-border/30 shadow-lg disabled:opacity-50"
            >
              <ChevronLeft className="w-6 h-6" />
            </Button>

            <Button
              variant="ghost"
              size="icon"
              onClick={nextMemory}
              disabled={isFlipping}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-background/80 backdrop-blur-sm hover:bg-background border border-border/30 shadow-lg disabled:opacity-50"
            >
              <ChevronRight className="w-6 h-6" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MemorySlider;