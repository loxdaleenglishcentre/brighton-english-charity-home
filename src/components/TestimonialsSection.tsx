import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Quote } from "lucide-react";
import { useState, useEffect } from "react";
import { removeBackground, loadImage } from "@/utils/imageBgRemoval";

// Import testimonial images
import mariaImage from "@/assets/testimonials/maria-gonzalez.jpg";
import hiroshiImage from "@/assets/testimonials/hiroshi-tanaka.jpg";
import sofiaImage from "@/assets/testimonials/sofia-petrov.jpg";
import ahmedImage from "@/assets/testimonials/ahmed-hassan.jpg";
import luisaImage from "@/assets/testimonials/luisa-silva.jpg";

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [processedImages, setProcessedImages] = useState<Record<string, string>>({});
  const [isProcessing, setIsProcessing] = useState(false);

  const testimonials = [
    {
      name: "Maria González",
      country: "Spain",
      age: 28,
      avatar: "MG",
      image: mariaImage,
      rating: 5,
      text: "The Applied English approach was exactly what I needed! I chose Business English and Creative Writing, which helped me land my dream job in London. The teachers are incredibly supportive and the international atmosphere is amazing.",
      course: "4 weeks, Business English focus"
    },
    {
      name: "Hiroshi Tanaka", 
      country: "Japan",
      age: 22,
      avatar: "HT",
      image: hiroshiImage,
      rating: 5,
      text: "Brighton is such a beautiful city to study in! The Loxdale Lecture Series opened my mind to British culture, and my pronunciation improved dramatically. I made friends from 15 different countries!",
      course: "3 weeks, Pronunciation & Fluency"
    },
    {
      name: "Sofia Petrov",
      country: "Bulgaria", 
      age: 35,
      avatar: "SP",
      image: sofiaImage,
      rating: 5,
      text: "As a working professional, I appreciated the flexible approach. The Art Appreciation and Literature classes were fascinating, and I loved how they connected English learning with cultural understanding.",
      course: "2 weeks, Art & Literature focus"
    },
    {
      name: "Ahmed Hassan",
      country: "Egypt",
      age: 26,
      avatar: "AH",
      image: ahmedImage,
      rating: 5,
      text: "The small class sizes made all the difference. I went from B1 to B2+ level in just 4 weeks! The homestay experience was incredible - my host family became like my British family.",
      course: "4 weeks, Grammar & Speaking"
    },
    {
      name: "Luisa Silva",
      country: "Brazil",
      age: 19,
      avatar: "LS",
      image: luisaImage,
      rating: 5,
      text: "I loved the Music & Lyrics sessions! Learning English through songs made it so much more enjoyable. The social programme was fantastic too - we explored Brighton and made amazing memories.",
      course: "2 weeks, Music & Creative focus"
    }
  ];

  // Process images to remove backgrounds
  useEffect(() => {
    const processImages = async () => {
      if (Object.keys(processedImages).length === testimonials.length) return;
      
      setIsProcessing(true);
      const processed: Record<string, string> = {};
      
      for (const testimonial of testimonials) {
        try {
          const response = await fetch(testimonial.image);
          const blob = await response.blob();
          const img = await loadImage(blob);
          const processedBlob = await removeBackground(img);
          const processedUrl = URL.createObjectURL(processedBlob);
          processed[testimonial.name] = processedUrl;
        } catch (error) {
          console.warn(`Failed to process background for ${testimonial.name}:`, error);
          // Fallback to original image
          processed[testimonial.name] = testimonial.image;
        }
      }
      
      setProcessedImages(processed);
      setIsProcessing(false);
    };

    processImages();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section className="py-12 relative overflow-hidden">
      {/* Wave pattern background */}
      <div className="absolute inset-0 opacity-5">
        <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 1200 800">
          <path d="M0,300 Q300,100 600,300 T1200,300 L1200,0 L0,0 Z" fill="hsl(var(--secondary))" fillOpacity="0.1"/>
          <path d="M0,500 Q300,700 600,500 T1200,500 L1200,800 L0,800 Z" fill="hsl(var(--primary))" fillOpacity="0.1"/>
        </svg>
      </div>
      
      {/* Background Effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-accent opacity-5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-primary opacity-5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-10">
          <Badge className="mb-6 bg-gradient-red-3d text-white border-0 shadow-red-glow px-6 py-2 text-sm font-medium">
            Testimonials
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-gradient-green-metallic">
            Student Success Stories
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Real feedback from international students who have transformed their English skills at Loxdale.
          </p>
        </div>

        {/* Main Testimonial Display */}
        <div className="max-w-3xl mx-auto mb-12">
          <Card className="glass hover-float border-0 shadow-lg overflow-hidden">
            <CardContent className="p-6 lg:p-8 text-center relative">
              <Quote className="w-12 h-12 text-primary/20 mx-auto mb-4" />
              
              <div className="mb-6">
                <p className="text-lg lg:text-xl leading-relaxed text-foreground font-medium italic">
                  "{testimonials[activeIndex].text}"
                </p>
              </div>
              
              <div className="flex items-center justify-center gap-4 mb-4">
                <div className="w-20 h-20 flex items-center justify-center rounded-full overflow-hidden">
                  <img 
                    src={processedImages[testimonials[activeIndex].name] || testimonials[activeIndex].image}
                    alt={`${testimonials[activeIndex].name} profile photo`}
                    className="w-full h-full object-cover"
                    style={{ filter: isProcessing ? 'blur(2px)' : 'none' }}
                  />
                </div>
                
                <div className="text-left">
                  <h4 className="text-lg font-bold">{testimonials[activeIndex].name}</h4>
                  <p className="text-muted-foreground text-sm">
                    {testimonials[activeIndex].country} • Age {testimonials[activeIndex].age}
                  </p>
                  <div className="flex items-center gap-1 mt-1">
                    {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
              </div>
              
              <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20 text-xs">
                {testimonials[activeIndex].course}
              </Badge>
            </CardContent>
          </Card>
        </div>

        {/* Testimonial Navigation */}
        <div className="flex justify-center gap-3 mb-12">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === activeIndex 
                  ? 'bg-primary scale-125' 
                  : 'bg-primary/30 hover:bg-primary/60'
              }`}
              aria-label={`View testimonial ${index + 1}`}
            />
          ))}
        </div>

        {/* Testimonial Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <Card 
              key={index}
              className="hover-float border-0 shadow-md bg-card/80 backdrop-blur-sm cursor-pointer transition-all duration-300 hover:shadow-lg"
              onClick={() => setActiveIndex(index)}
            >
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-28 h-28 flex items-center justify-center">
                    <img 
                      src={processedImages[testimonial.name] || testimonial.image}
                      alt={`${testimonial.name} profile photo`}
                      className="w-full h-full object-cover"
                      style={{ filter: isProcessing ? 'blur(2px)' : 'none' }}
                    />
                  </div>
                  <div>
                    <h5 className="font-semibold">{testimonial.name}</h5>
                    <p className="text-sm text-muted-foreground">{testimonial.country}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                
                <p className="text-sm text-muted-foreground line-clamp-3">
                  "{testimonial.text}"
                </p>
                
                {/* LanguageCourse.Net Reviews link for Maria */}
                {testimonial.name === "Maria González" && (
                  <a 
                    href="https://www.languagecourse.net/school-loxdale-english-centre-brighton.php3"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex items-center gap-1 text-xs text-primary hover:text-primary/80 font-medium transition-colors"
                  >
                    <Star className="w-3 h-3 fill-green-400 text-green-400" />
                    View LanguageCourse.Net Reviews
                  </a>
                )}

                {/* Google Reviews link for Hiroshi */}
                {testimonial.name === "Hiroshi Tanaka" && (
                  <a 
                    href="https://www.google.com/search?q=loxdale+english+centre+google+reviews&sca_esv=e77f9c08ad4d25ad&sxsrf=AE3TifMsfaSEuZlK770mPSC_m_aoeNyBpw%3A1755202993091&ei=sUWeaJClBfiDm9cPmuHlsAc&ved=0ahUKEwjQwaXXkIuPAxX4weYEHZpwGXYQ4dUDCBA&uact=5&oq=loxdale+english+centre+google+reviews&gs_lp=Egxnd3Mtd2l6LXNlcnAiJWxveGRhbGUgZW5nbGlzaCBjZW50cmUgZ29vZ2xlIHJldmlld3MyCBAAGIAEGKIESI0zUIMXWPYwcAV4AZABAJgBsgGgAZ0RqgEEMC4xN7gBA8gBAPgBAZgCEKAC2wvCAgoQABiwAxjWBBhHwgIKECEYoAEYwwQYCpgDAIgGAZAGA5IHBDUuMTGgB8w3sgcEMC4xMbgHzAvCBwYxLjE0LjHIBxk&sclient=gws-wiz-serp#lrd=0x48759a9c98773233:0xbb1f6a9fe45bdb63,1,,,,"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex items-center gap-1 text-xs text-primary hover:text-primary/80 font-medium transition-colors"
                  >
                    <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                    View Google Reviews
                  </a>
                )}

                {/* Facebook Reviews link for Sofia */}
                {testimonial.name === "Sofia Petrov" && (
                  <a 
                    href="https://www.facebook.com/LoxdaleEnglishCentre/reviews"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex items-center gap-1 text-xs text-primary hover:text-primary/80 font-medium transition-colors"
                  >
                    <Star className="w-3 h-3 fill-blue-400 text-blue-400" />
                    View Facebook Reviews
                  </a>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TestimonialsSection;