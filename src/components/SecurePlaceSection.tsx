import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Check, MessageCircle, Calendar, Mail } from "lucide-react";

const SecurePlaceSection = () => {
  const benefits = [
    "Early bird discounts available until March 31st",
    "Flexible payment plans accepted", 
    "Free course placement assessment"
  ];

  const contactOptions = [
    {
      icon: MessageCircle,
      title: "Enquire Now",
      subtitle: "Get instant answers to your questions",
      action: "Start Chat"
    },
    {
      icon: Calendar,
      title: "Book Consultation", 
      subtitle: "Free 15-minute consultation call",
      action: "Schedule Call"
    },
    {
      icon: Mail,
      title: "Email Us",
      subtitle: "Detailed course information sent to you", 
      action: "Send Email"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-3 gap-8 items-center">
          {/* Left Content */}
          <div className="lg:col-span-2">
            <Badge className="bg-yellow-100 text-yellow-800 border-yellow-200 mb-6">
              ⭐ Limited Autumn Spots
            </Badge>
            
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Secure Your <span className="text-green-600">Place for Autumn</span> 2025
            </h2>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Our General English Course runs exclusively during autumn months. With limited spots 
              available and high demand from international students, early booking is essential to guarantee 
              your preferred dates.
            </p>
            
            <div className="space-y-4 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-green-600" />
                  </div>
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>
            
            <Button className="bg-gradient-red-3d hover:scale-105 transition-all duration-300 text-white px-8 py-3 text-lg rounded-full border-0 shadow-lg">
              Enquire Now - Get Started →
            </Button>
          </div>
          
          {/* Right Contact Options */}
          <div className="space-y-4">
            {contactOptions.map((option, index) => (
              <Card key={index} className="p-4 hover:shadow-md transition-shadow cursor-pointer">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gray-900 rounded-full flex items-center justify-center">
                      <option.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{option.title}</h4>
                      <p className="text-sm text-gray-600">{option.subtitle}</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    {option.action}
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecurePlaceSection;