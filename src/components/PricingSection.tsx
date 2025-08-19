import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { CheckCircle, Star, Calendar, Home, Utensils, Calculator } from "lucide-react";
import { useState } from "react";
import YearToggle from "@/components/YearToggle";
import CourseQuoteCalculator from "@/components/CourseQuoteCalculator";

const PricingSection = () => {
  const [year, setYear] = useState<2025 | 2026>(2025);

  const pricingByYear = {
    2025: {
      courseOptions: [
        {
          duration: "1 Week",
          price: "£320",
          popular: false,
          description: "Perfect for a quick English boost",
        },
        {
          duration: "2 Weeks",
          price: "£610",
          popular: true,
          description: "Most popular choice for rapid improvement",
        },
        {
          duration: "3 Weeks",
          price: "£870",
          popular: false,
          description: "Comprehensive language development",
        },
        {
          duration: "4 Weeks",
          price: "£1,120",
          popular: false,
          description: "Complete transformation experience",
        },
      ],
      accommodationOptions: [
        {
          icon: Home,
          title: "Homestay",
          price: "£210/week",
          description: "Live with a local family",
          features: [
            "Half board included",
            "Cultural immersion",
            "Practice English daily",
            "Safe and welcoming",
          ],
        },
        {
          icon: Utensils,
          title: "Self-Catered",
          price: "£185/week",
          description: "Independent living options",
          features: [
            "Shared facilities",
            "Kitchen access",
            "More independence",
            "Budget-friendly",
          ],
        },
      ],
    },
    2026: {
      courseOptions: [
        {
          duration: "1 Week",
          price: "£320",
          popular: false,
          description: "Perfect for a quick English boost",
        },
        {
          duration: "2 Weeks",
          price: "£610",
          popular: true,
          description: "Most popular choice for rapid improvement",
        },
        {
          duration: "3 Weeks",
          price: "£870",
          popular: false,
          description: "Comprehensive language development",
        },
        {
          duration: "4 Weeks",
          price: "£1,120",
          popular: false,
          description: "Complete transformation experience",
        },
      ],
      accommodationOptions: [
        {
          icon: Home,
          title: "Homestay",
          price: "£210/week",
          description: "Live with a local family",
          features: [
            "Half board included",
            "Cultural immersion",
            "Practice English daily",
            "Safe and welcoming",
          ],
        },
        {
          icon: Utensils,
          title: "Self-Catered",
          price: "£185/week",
          description: "Independent living options",
          features: [
            "Shared facilities",
            "Kitchen access",
            "More independence",
            "Budget-friendly",
          ],
        },
      ],
    },
  } as const;

  const courseOptions = pricingByYear[year].courseOptions;
  

  const included = [
    "20 lessons per week (15 hours)",
    "4 Applied English sessions weekly",
    "Loxdale Lecture Series access",
    "Course materials included",
    "Certificate of completion",
    "Student support services",
    "Activity programme access",
    "Free Wi-Fi throughout"
  ];

  return (
    <section id="pricing" aria-labelledby="pricing-title" className="py-12 relative overflow-hidden">
      {/* Modern geometric background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-48 h-48 border-2 border-white/30 rounded-full"></div>
        <div className="absolute bottom-10 right-20 w-36 h-36 bg-white/20 rounded-2xl rotate-45"></div>
        <div className="absolute top-1/2 right-1/4 w-28 h-28 border border-white/20 rotate-12"></div>
        <div className="absolute bottom-1/3 left-1/3 w-20 h-20 bg-white/15 rounded-full"></div>
      </div>
      
      {/* Background Effects */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-gradient-primary opacity-10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-gradient-secondary opacity-10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <Badge className="mb-6 bg-gradient-secondary text-foreground border-0 px-6 py-2 text-sm font-medium">
            💰 {year} Pricing
          </Badge>
          <div className="flex items-center justify-center gap-6 mb-6">
            <h2 id="pricing-title" className="text-4xl lg:text-5xl font-bold text-gradient-green-metallic">
              Invest in Your Future
            </h2>
            <Dialog>
              <DialogTrigger asChild>
                <div className="relative cursor-pointer hover:scale-110 transition-transform duration-300 group">
                  <img 
                    src="/lovable-uploads/3472d932-5645-47a9-8ada-ad38f8983094.png" 
                    alt="Course Calculator" 
                    className="w-40 h-40 hover:shadow-lg rounded-lg"
                  />
                  <div className="absolute -top-2 -right-2 bg-gradient-to-r from-red-600 to-red-700 text-white text-xs px-3 py-1 rounded-full shadow-lg transform -rotate-12 group-hover:rotate-0 transition-transform duration-300">
                    Click to calculate price
                  </div>
                </div>
              </DialogTrigger>
              <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle className="text-2xl font-bold text-gradient-green-metallic">
                    Course Quote Calculator
                  </DialogTitle>
                </DialogHeader>
                <CourseQuoteCalculator />
              </DialogContent>
            </Dialog>
          </div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Transparent pricing with everything included. No hidden fees, just exceptional value for transformative learning. Find more information about accommodation prices here.
          </p>
          <div className="mt-4 flex justify-center">
            <YearToggle year={year} onYearChange={setYear} aria-label="Select year for pricing" />
          </div>
        </div>

        {/* Course Pricing Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {courseOptions.map((option, index) => (
            <Card 
              key={index}
              className={`relative hover-float border-0 overflow-hidden ${
                option.popular 
                  ? 'ring-2 ring-secondary shadow-xl scale-105' 
                  : 'shadow-lg'
              }`}
            >
              {option.popular && (
                <div className="absolute top-0 left-0 right-0 bg-gradient-secondary text-foreground text-center py-2 text-sm font-semibold">
                  <Star className="w-4 h-4 inline mr-1" />
                  Most Popular
                </div>
              )}
              
              <CardHeader className={`text-center ${option.popular ? 'pt-12' : 'pt-6'}`}>
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calendar className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold">{option.duration}</CardTitle>
                <div className="text-3xl font-bold text-primary mt-2">{option.price}</div>
                <p className="text-sm text-muted-foreground">{option.description}</p>
              </CardHeader>
              
              <CardContent className="pt-0">
                <Button 
                  className={`w-full ${
                    option.popular 
                      ? 'bg-gradient-secondary hover:scale-105 text-foreground border-0' 
                      : 'bg-gradient-primary hover:scale-105 text-white border-0'
                  } transition-all duration-300`}
                >
                  Select {option.duration}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* What's Included */}
        <Card className="glass hover-float border-0 shadow-xl mb-12">
          <CardContent className="p-8 lg:p-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <Badge className="mb-4 bg-gradient-accent text-white border-0">
                  ✅ What's Included
                </Badge>
                <h3 className="text-3xl font-bold mb-6 text-gradient-green-metallic">Everything You Need to Succeed</h3>
                <p className="text-lg text-muted-foreground mb-8">
                  Our comprehensive package ensures you have everything needed for an exceptional learning experience. One of the advantages of studying at Loxdale English Centre is that your course is about more than just English.
                </p>
                
                <div className="grid sm:grid-cols-2 gap-3">
                  {included.map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="text-center">
                <div className="bg-gradient-to-br from-red-600 via-red-700 to-red-800 rounded-3xl p-8 text-white shadow-[0_8px_20px_rgba(239,68,68,0.4),inset_0_3px_0_rgba(255,255,255,0.3),inset_0_-3px_0_rgba(239,68,68,0.3)]">
                  <h4 className="text-2xl font-bold mb-4">Summer 2026 Early Bird</h4>
                  <div className="text-4xl font-bold mb-2">Save 5%</div>
                  <p className="mb-6 opacity-90">Book before March 31st, 2026</p>
                  <Button 
                    variant="outline" 
                    className="bg-white/10 border-white/40 text-white hover:bg-white/20 hover-float"
                  >
                    Claim Early Bird Discount
                  </Button>
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

export default PricingSection;