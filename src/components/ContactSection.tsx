import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  ArrowRight, 
  MessageCircle,
  Calendar,
  Globe,
  Facebook,
  Instagram,
  Twitter,
  Linkedin
} from "lucide-react";

const ContactSection = () => {
  const contactMethods = [
    {
      icon: MessageCircle,
      title: "Enquire Now",
      description: "Get instant answers to your questions",
      action: "Start Chat",
      color: "bg-gradient-primary"
    },
    {
      icon: Calendar,
      title: "Book Consultation",
      description: "Free 15-minute consultation call",
      action: "Schedule Call",
      color: "bg-gradient-secondary"
    },
    {
      icon: Mail,
      title: "Email Us",
      description: "Detailed course information sent to you",
      action: "Send Email",
      color: "bg-gradient-accent"
    }
  ];

  const quickInfo = [
    {
      icon: MapPin,
      title: "Location",
      details: ["Brighton, East Sussex", "United Kingdom", "Seaside learning environment"]
    },
    {
      icon: Clock,
      title: "Course Times",
      details: ["Monday - Friday", "9:00 AM - 12:15 PM", "15 hours per week"]
    },
    {
      icon: Globe,
      title: "Start Dates",
      details: ["Summer 2025 only", "Flexible start dates", "1-4 week options"]
    }
  ];

  return (
    <section id="contact" className="py-12 relative overflow-hidden">
      {/* Circuit-like pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-40 h-1 bg-primary"></div>
        <div className="absolute top-20 left-60 w-1 h-40 bg-primary"></div>
        <div className="absolute top-60 left-60 w-40 h-1 bg-secondary"></div>
        <div className="absolute bottom-40 right-40 w-60 h-1 bg-accent"></div>
        <div className="absolute bottom-40 right-40 w-1 h-20 bg-accent"></div>
        <div className="absolute top-40 right-60 w-30 h-1 bg-secondary"></div>
      </div>
      
      {/* Background Effects */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-primary opacity-10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-secondary opacity-10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-10">
          <Badge className="mb-6 bg-gradient-primary text-white border-0 px-6 py-2 text-sm font-medium">
            📞 Get Started
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gradient-green-metallic relative">
            Ready to Begin Your Journey?
            <div className="gradient-shooting-line"></div>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Take the first step towards English fluency. Our team is here to help you choose the perfect course for your goals.
          </p>
        </div>

        {/* Main CTA Section */}
        <Card className="glass hover-float border-0 shadow-2xl mb-10 overflow-hidden">
          <CardContent className="p-8 lg:p-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <Badge className="mb-4 bg-gradient-secondary text-foreground border-0">
                  🌟 Limited Summer Spots
                </Badge>
                <h3 className="text-3xl lg:text-4xl font-bold mb-6 text-gradient-green-metallic">
                  Secure Your Place for Summer 2025
                </h3>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  Our General English Course runs exclusively during summer months. 
                  With limited spots available and high demand from international students, 
                  early booking is essential to guarantee your preferred dates.
                </p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>Early bird discounts available until March 31st</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>Flexible payment plans accepted</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>Free course placement assessment</span>
                  </div>
                </div>
                
                <Button 
                  size="lg"
                  className="bg-gradient-red-3d shadow-red-glow hover:scale-105 transition-all duration-300 text-white border-0 text-lg px-8 py-4 rounded-full"
                >
                  Enquire Now - Get Started
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </div>
              
              <div className="space-y-6">
                {contactMethods.map((method, index) => (
                  <Card 
                    key={index}
                    className="hover-float border-0 shadow-md cursor-pointer group transition-all duration-300 hover:shadow-lg"
                  >
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4">
                        <div className={`w-12 h-12 ${method.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                          <method.icon className={`w-6 h-6 ${method.color.includes("secondary") ? "text-foreground" : "text-white"}`} />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-lg mb-1">{method.title}</h4>
                          <p className="text-muted-foreground text-sm">{method.description}</p>
                        </div>
                        <Button 
                          variant="outline" 
                          size="sm"
                          className="group-hover:bg-primary group-hover:text-white transition-colors duration-300"
                        >
                          {method.action}
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Quick Information Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {quickInfo.map((info, index) => (
            <Card 
              key={index}
              className="hover-float border-0 shadow-lg text-center"
            >
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <info.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-bold mb-4">{info.title}</h4>
                <div className="space-y-2">
                  {info.details.map((detail, dIndex) => (
                    <p key={dIndex} className="text-muted-foreground">
                      {detail}
                    </p>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Get in Touch Section */}
        <Card className="glass border-0 shadow-lg mb-8">
          <CardContent className="p-8">
            <h4 className="text-3xl font-bold mb-8 text-foreground text-center">Get in Touch</h4>
            
            {/* Still have questions? Section - Centered under header */}
            <div className="text-center mb-12">
              <h4 className="text-2xl font-bold mb-4 text-gradient-red-3d">Still have questions?</h4>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Can't find what you're looking for? Our friendly team is here to help answer any questions you might have.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg"
                  className="bg-gradient-red-3d shadow-red-glow text-white border-0 px-8 py-3 rounded-full font-medium hover:scale-105 transition-all duration-300"
                >
                  Contact Us
                </Button>
                <Button 
                  variant="outline"
                  size="lg"
                  className="border-border hover:bg-muted px-8 py-3 rounded-full font-medium"
                >
                  Email Us
                </Button>
              </div>
            </div>

            {/* Social Media - Centered */}
            <div className="text-center">
              <h5 className="text-xl font-bold mb-4">Follow Us</h5>
              <div className="flex gap-4 justify-center">
                <div className="w-12 h-12 bg-gray-100 rounded-2xl flex items-center justify-center hover:bg-primary hover:text-white transition-colors cursor-pointer">
                  <Facebook className="w-5 h-5" />
                </div>
                <div className="w-12 h-12 bg-gray-100 rounded-2xl flex items-center justify-center hover:bg-primary hover:text-white transition-colors cursor-pointer">
                  <Instagram className="w-5 h-5" />
                </div>
                <div className="w-12 h-12 bg-gray-100 rounded-2xl flex items-center justify-center hover:bg-primary hover:text-white transition-colors cursor-pointer">
                  <Twitter className="w-5 h-5" />
                </div>
                <div className="w-12 h-12 bg-gray-100 rounded-2xl flex items-center justify-center hover:bg-primary hover:text-white transition-colors cursor-pointer">
                  <Linkedin className="w-5 h-5" />
                </div>
              </div>
            </div>
            
            {/* Need Immediate Assistance - Full width below */}
            <div className="text-center pt-12 mt-12 border-t border-border">
              <h4 className="text-2xl font-bold mb-4">Need Immediate Assistance?</h4>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Our student support team is available to help with urgent inquiries about applications, 
                visa requirements, or course selection.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Phone className="w-4 h-4" />
                  <span>+44 (0) 1273 322 777</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Mail className="w-4 h-4" />
                  <span>info@loxdale.com</span>
                </div>
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

export default ContactSection;