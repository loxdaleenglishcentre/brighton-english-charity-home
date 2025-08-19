import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star, Quote, ExternalLink, MessageCircle } from "lucide-react";
import mariaImage from "@/assets/testimonials/maria-gonzalez.jpg";

const FeaturedTestimonial = () => {
  const testimonial = {
    name: "Maria González",
    country: "Spain",
    age: 28,
    image: mariaImage,
    rating: 5,
    text: "The Applied English approach was exactly what I needed! I chose Business English and Creative Writing, which helped me land my dream job in London. The teachers are incredibly supportive and the international atmosphere is amazing.",
    course: "4 weeks, Business English focus",
    reviewLink: "https://www.languagecourse.net/school-loxdale-english-centre-brighton.php3"
  };

  return (
    <div className="flex items-center justify-center lg:justify-start">
      <Card className="glass hover-float border-0 shadow-lg overflow-hidden max-w-md">
        <CardContent className="p-6 lg:p-8">
          <div className="flex flex-col gap-6">
            {/* Student Image */}
            <div className="flex items-center gap-4">
              <div className="w-20 h-20 lg:w-24 lg:h-24 rounded-full overflow-hidden shadow-lg flex-shrink-0">
                <img 
                  src={testimonial.image}
                  alt={`${testimonial.name} profile photo`}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div>
                <h4 className="text-xl font-bold">{testimonial.name}</h4>
                <p className="text-muted-foreground">
                  {testimonial.country} • Age {testimonial.age}
                </p>
                <div className="flex items-center gap-1 mt-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>
            </div>
            
            {/* Testimonial Content */}
            <div className="flex-1">
              <Quote className="w-8 h-8 text-primary/20 mb-3" />
              
              <p className="text-lg leading-relaxed text-foreground font-medium italic mb-4">
                "{testimonial.text}"
              </p>
              
              <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20 text-xs mb-4">
                {testimonial.course}
              </Badge>
              
                <div className="flex flex-col gap-3 items-center">
                  <a 
                    href={testimonial.reviewLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-primary hover:text-primary/80 font-medium transition-colors"
                  >
                    <Star className="w-4 h-4 fill-green-400 text-green-400" />
                    Read More Reviews
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="flex items-center gap-2 text-sm hover-float"
                  >
                    <MessageCircle className="w-4 h-4" />
                    Get in touch with this student
                  </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default FeaturedTestimonial;