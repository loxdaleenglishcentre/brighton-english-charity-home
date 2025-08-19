import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Award, Heart, TrendingUp, Users, Star, Shield, DollarSign, Globe } from "lucide-react";

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
    { label: "Years of Excellence", value: "40+" },
    { label: "Student Satisfaction", value: "98%" },
    { label: "Nationalities Welcome", value: "60+" },
    { label: "IELTS Success Rate", value: "95%" }
  ];

  return (
    <section className="py-16 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-primary opacity-5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-secondary opacity-5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge className="mb-6 bg-gradient-primary text-white border-0 px-6 py-2 text-sm font-medium">
            🏆 Why Choose Us
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gradient-green-metallic">
            The UK's Most Trusted English School
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            As an educational charity, we offer world-class English teaching at accessible prices. 
            Join thousands of successful students who've transformed their English skills with us.
          </p>
        </div>

        {/* Achievement Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          {achievements.map((achievement, index) => (
            <Card key={index} className="hover-float border-0 shadow-lg text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-gradient-green-metallic mb-2">
                  {achievement.value}
                </div>
                <p className="text-sm text-muted-foreground font-medium">
                  {achievement.label}
                </p>
              </CardContent>
            </Card>
          ))}
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

        {/* Visual Banner with Generated Image */}
        <div className="mb-12">
          <img 
            src="/lovable-uploads/c336b1bb-062a-4a43-b3ab-23dee6360707.png"
            alt="International students celebrating success at Loxdale English Centre Brighton"
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