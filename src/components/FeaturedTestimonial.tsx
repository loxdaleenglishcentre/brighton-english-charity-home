import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star, Quote, ExternalLink, Facebook, Chrome, Volume2, VolumeX } from "lucide-react";
import { useState } from "react";
const micheleImage = "/lovable-uploads/1cb42d7a-ac62-4ee1-8755-5e79c146e1a0.png";

const FeaturedTestimonial = () => {
  const [isMuted, setIsMuted] = useState(true);
  
  const testimonial = {
    name: "Michele Zaccagnino",
    country: "Italy",
    age: 25,
    image: micheleImage,
    rating: 5,
    text: "Perfect for experience abroad. The school as a building is really very beautiful, surrounded by greenery, with a very suggestive entrance driveway. The organized activities are truly fantastic, especially the trips to discover English places.",
    verified: "Verified Student • August 2024"
  };

  const reviewPlatforms = [
    {
      name: "Facebook Reviews",
      icon: Facebook,
      link: "https://www.facebook.com/LoxdaleEnglishCentre/reviews",
      color: "text-blue-600 hover:text-blue-700"
    },
    {
      name: "LanguageCourse.net",
      icon: Chrome,
      link: "https://www.languagecourse.net/school-loxdale-english-centre-brighton.php3",
      color: "text-green-600 hover:text-green-700"
    },
    {
      name: "Google Reviews",
      icon: Chrome,
      link: "https://www.google.com/search?q=loxdale+english+centre+brighton+reviews",
      color: "text-red-600 hover:text-red-700"
    }
  ];

  return (
    <section className="relative py-16 overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="https://res.cloudinary.com/dw4q8cuuc/raw/upload/v1755885823/68a8ad3229e2adc86855943a_d2liud" type="video/mp4" />
        </video>
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      <div className="max-w-2xl mx-auto relative z-10">
        <div className="text-center mb-8">
          <h3 className="text-4xl lg:text-5xl font-bold mb-4 text-white drop-shadow-lg">
            <span className="inline-block bg-gradient-to-r from-emerald-400 via-teal-400 to-blue-400 bg-clip-text text-transparent animate-gradient drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
              What Our Students Say
            </span>
          </h3>
          <p className="text-lg text-white drop-shadow-lg backdrop-blur-sm bg-black/30 rounded-full px-6 py-3 inline-block border border-white/30">
            Real feedback from real students
          </p>
        </div>

        {/* Review Video */}
        <div className="mb-8 text-center">
          <div className="relative inline-block">
            <video
              autoPlay
              loop
              muted={isMuted}
              playsInline
              className="w-full max-w-md mx-auto rounded-2xl shadow-2xl border border-white/30"
            >
              <source src="https://res.cloudinary.com/dw4q8cuuc/video/upload/v1755886523/Loxdale_English_Centre_Brighton_Review_V2_z1q3rg.webm" type="video/webm" />
            </video>
            <button
              onClick={() => setIsMuted(!isMuted)}
              className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-200"
              aria-label={isMuted ? "Enable sound" : "Disable sound"}
            >
              {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
            </button>
          </div>
          <p className="text-sm text-white/80 mt-3 backdrop-blur-sm bg-black/20 rounded-full px-4 py-2 inline-block">
            (or keep sound off and just take a look around the inside of our school)
          </p>
        </div>

      <Card className="bg-white/95 backdrop-blur-md border border-white/30 shadow-2xl rounded-2xl">
        <CardContent className="p-8">
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Student Image */}
            <div className="flex-shrink-0 text-center lg:text-left">
              <div className="w-32 h-32 rounded-full overflow-hidden shadow-lg mx-auto lg:mx-0 mb-4">
                <img 
                  src={testimonial.image}
                  alt={`${testimonial.name} profile photo`}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="lg:w-32">
                <h4 className="text-lg font-semibold text-gray-900">{testimonial.name}</h4>
                <p className="text-sm text-gray-600 mb-2">
                  {testimonial.country} • Age {testimonial.age}
                </p>
                <div className="flex items-center justify-center lg:justify-start gap-1 mb-2">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-xs text-green-600 font-medium">
                  {testimonial.verified}
                </p>
              </div>
            </div>
            
            {/* Testimonial Content */}
            <div className="flex-1">
              <Quote className="w-6 h-6 text-gray-300 mb-3" />
              
              <p className="text-gray-700 leading-relaxed mb-4 text-base">
                {testimonial.text}
              </p>
            </div>
          </div>

          {/* Review Platform Links */}
          <div className="border-t border-gray-100 pt-6 mt-6">
            <p className="text-sm text-gray-600 mb-4 text-center">
              Read more reviews on:
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {reviewPlatforms.map((platform, index) => (
                <a
                  key={index}
                  href={platform.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-200 hover:border-gray-300 transition-all duration-200 ${platform.color} hover:shadow-sm`}
                >
                  <platform.icon className="w-4 h-4" />
                  <span className="text-sm font-medium">{platform.name}</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
      </div>
    </section>
  );
};

export default FeaturedTestimonial;