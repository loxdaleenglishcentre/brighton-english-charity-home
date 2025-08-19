import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ChevronDown, ChevronUp, Info } from "lucide-react";
import HeroSection from "@/components/HeroSection";
import CourseFeatures from "@/components/CourseFeatures";
import PricingSection from "@/components/PricingSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import KineticSentenceComposer from "@/components/KineticSentenceComposer";
import KeyInfo2025 from "@/components/KeyInfo2025";
import ProgrammeHighlights from "@/components/ProgrammeHighlights";
import HolidayDates2025 from "@/components/HolidayDates2025";
import RelatedCourses from "@/components/RelatedCourses";
import SchoolStats from "@/components/SchoolStats";
import CourseQuoteCalculator from "@/components/CourseQuoteCalculator";
import BrightonFacts from "@/components/BrightonFacts";
import TravelJourney from "@/components/TravelJourney";
import FAQSection from "@/components/FAQSection";
import SampleSocialProgramme from "@/components/SampleSocialProgramme";
import InteractiveSocialCalendar from "@/components/InteractiveSocialCalendar";
import BritainToday from "@/components/BritainToday";
import SchoolStrengths from "@/components/SchoolStrengths";
import SchoolInfoNavigation from "@/components/SchoolInfoNavigation";
import SecurePlaceSection from "@/components/SecurePlaceSection";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import YearToggle from "@/components/YearToggle";
const Index = () => {
  const [isSchoolInfoOpen, setIsSchoolInfoOpen] = useState(false);
  const [accomYear, setAccomYear] = useState<2025 | 2026>(2025);
  const [activeTab, setActiveTab] = useState("accommodation");
  const ACCOM_PRICES: Record<2025 | 2026, { 'bed-breakfast': number; 'half-board-lunch': number; 'half-board-dinner': number; 'full-board': number; }> = {
    2025: { 'bed-breakfast': 148, 'half-board-lunch': 180, 'half-board-dinner': 180, 'full-board': 212 },
    2026: { 'bed-breakfast': 170, 'half-board-lunch': 218, 'half-board-dinner': 218, 'full-board': 252 },
  };
  const currentAccom = ACCOM_PRICES[accomYear];
  const minHomestay = Math.min(...Object.values(currentAccom));

  const handleSectionScroll = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen">
      <HeroSection />
      
      {/* Course Specific Information */}
      {/* White spacer */}
      <div className="section-spacer section-bg-white"></div>
      
      <div className="section-bg-white">
        <KeyInfo2025 />
      </div>
      
      {/* White spacer */}
      <div className="section-spacer section-bg-white"></div>
      
      
      <div className="section-bg-white">
        <CourseFeatures />
      </div>
      
      {/* White spacer */}
      <div className="section-spacer section-bg-white"></div>
      
      <div className="section-bg-white">
        <ProgrammeHighlights />
      </div>
      
      {/* White spacer */}
      <div className="section-spacer section-bg-white"></div>
      
      <div className="section-bg-white">
        <BritainToday />
      </div>
      
      {/* White spacer */}
      <div className="section-spacer section-bg-white"></div>
      
      
      <div className="section-bg-white">
        <PricingSection />
      </div>
      
      {/* White spacer */}
      <div className="section-spacer section-bg-white"></div>

      {/* Accommodation Pricing */}
      <div className="section-bg-white">
        <div className="container mx-auto px-6 py-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl lg:text-4xl font-bold mb-6 text-gradient-green-metallic">Host Family Accommodation</h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose the accommodation that fits your lifestyle and budget. All options are carefully selected for quality and comfort.
            </p>
            <div className="mt-4 flex justify-center">
              <YearToggle year={accomYear} onYearChange={setAccomYear} aria-label="Select year for accommodation prices" />
            </div>
          </div>
          
          {/* Accommodation Images */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            <img
              src="/lovable-uploads/c15112bf-f2d4-44e2-9c2d-8b6e68bb9e0b.png"
              loading="lazy"
              alt="Homestay accommodation welcome at Brighton host family home"
              className="w-full h-64 md:h-80 object-cover rounded-2xl shadow-lg"
            />
            <img
              src="/lovable-uploads/37506b5b-a6c5-42f9-b42a-c1afa7a6ba3f.png"
              loading="lazy"
              alt="Student support for accommodation arrangements at Loxdale English Centre"
              className="w-full h-64 md:h-80 object-cover rounded-2xl shadow-lg"
            />
          </div>
          
          {/* Accommodation Types */}
          <div className="grid md:grid-cols-2 gap-8 mb-12 max-w-4xl mx-auto">
            <div className="p-8 bg-white rounded-2xl shadow-lg border">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-green-700 rounded-xl flex items-center justify-center">
                  <span className="text-white text-2xl">🏠</span>
                </div>
                <div>
                  <h4 className="text-xl font-bold">Homestay</h4>
                  <p className="text-2xl font-bold text-green-600">from £{minHomestay}/week</p>
                </div>
              </div>
              <p className="text-muted-foreground mb-4">Live with a local family. Prices for {accomYear}:</p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  Bed &amp; Breakfast — £{currentAccom["bed-breakfast"]}/week
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  Half Board Lunch — £{currentAccom["half-board-lunch"]}/week
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  Half Board Dinner — £{currentAccom["half-board-dinner"]}/week
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  Full Board — £{currentAccom["full-board"]}/week
                </li>
              </ul>
              <Button variant="outline" className="w-full mt-4">Learn More</Button>
            </div>
            
            <div className="p-8 bg-white rounded-2xl shadow-lg border">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center">
                  <span className="text-white text-2xl">🍴</span>
                </div>
                <div>
                  <h4 className="text-xl font-bold">Self-Catered</h4>
                  <p className="text-2xl font-bold text-blue-600">£185/week</p>
                </div>
              </div>
              <p className="text-muted-foreground mb-4">Independent living options</p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  Shared facilities
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  Kitchen access
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  More independence
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  Budget-friendly
                </li>
              </ul>
              <Button variant="outline" className="w-full mt-4">Learn More</Button>
            </div>
          </div>
        </div>
      </div>
      
      {/* White spacer */}
      <div className="section-spacer section-bg-white"></div>
      
      <div className="section-bg-white">
        <InteractiveSocialCalendar />
      </div>
      
      {/* White spacer */}
      <div className="section-spacer section-bg-white"></div>
      
      <div className="section-bg-white">
        <RelatedCourses />
      </div>
      
      {/* White spacer */}
      <div className="section-spacer section-bg-white"></div>

      {/* General School Information Toggle with full-width shading */}
      <div className="section-bg-white">
        <div className="container mx-auto px-6 py-12 relative">
          {/* 3D Banner Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-background/90 via-muted/80 to-background/70 backdrop-blur-sm rounded-2xl shadow-[0_20px_40px_rgba(0,0,0,0.15),inset_0_1px_0_rgba(255,255,255,0.1),inset_0_-1px_0_rgba(0,0,0,0.1)] transform perspective-1000 rotate-x-2 hover:rotate-x-0 transition-all duration-500 border border-border/50"></div>
          <div className="relative z-10">
            <Collapsible open={isSchoolInfoOpen} onOpenChange={setIsSchoolInfoOpen}>
              <div className="relative">
                {/* Grey metallic gradient directly behind button */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-600/20 via-gray-700/30 to-gray-800/20 rounded-xl blur-lg transform scale-110"></div>
                
                <CollapsibleTrigger asChild>
                  <Button 
                    variant="outline" 
                    size="lg"
                    className="mx-auto flex items-center justify-center gap-3 px-20 py-8 text-xl font-bold bg-gradient-to-br from-red-600 via-red-700 to-red-800 text-white border-0 hover:from-red-700 hover:via-red-800 hover:to-red-900 transition-all duration-300 rounded-xl transform hover:scale-105 active:scale-95 hover:-translate-y-1 relative z-10"
                  >
                    <Info className="w-6 h-6" />
                    <span className="font-bold text-xl">
                      General School Information
                    </span>
                    {isSchoolInfoOpen ? (
                      <ChevronUp className="w-6 h-6 animate-pulse" />
                    ) : (
                      <ChevronDown className="w-6 h-6 animate-bounce" />
                    )}
                  </Button>
                </CollapsibleTrigger>
              </div>
            
            <CollapsibleContent className="animate-in slide-in-from-top-5 duration-300">
              {/* White spacer */}
              <div className="section-spacer section-bg-white"></div>
              
              <div className="section-bg-white">
                <div className="container mx-auto px-6">
                  {/* Navigation Dropdowns */}
                  <SchoolInfoNavigation 
                    activeTab={activeTab}
                    onTabChange={setActiveTab}
                    onSectionScroll={handleSectionScroll}
                  />
                  
                  <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                    <TabsList className="hidden">
                      <TabsTrigger value="accommodation">Accommodation</TabsTrigger>
                      <TabsTrigger value="accreditation">Accreditation</TabsTrigger>
                      <TabsTrigger value="brighton">Brighton</TabsTrigger>
                      <TabsTrigger value="travel">Travel Journey</TabsTrigger>
                      <TabsTrigger value="holidays">Holiday Dates</TabsTrigger>
                      <TabsTrigger value="faq">FAQ</TabsTrigger>
                      <TabsTrigger value="more">More</TabsTrigger>
                    </TabsList>
                    
                    <TabsContent value="accommodation" id="accommodation-content">
                      <div className="text-center mb-12">
                        <h3 className="text-3xl lg:text-4xl font-bold mb-6 text-gradient-green-metallic">Your Home in Brighton</h3>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                          Choose the accommodation that fits your lifestyle and budget. All options are carefully selected for quality and comfort.
                        </p>
                      </div>
                    </TabsContent>
                    
                    <TabsContent value="accreditation">
                      <div className="text-center mb-12">
                        <h3 className="text-3xl lg:text-4xl font-bold mb-6 text-gradient-green-metallic">🏆 Accredited Excellence</h3>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                          Our commitment to quality is validated by prestigious international accreditations and memberships
                        </p>
                      </div>

                      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
                        <div className="text-center p-6 bg-white rounded-xl shadow-lg border">
                          <img 
                            src="/lovable-uploads/british-council-logo.png" 
                            alt="British Council logo"
                            className="w-16 h-16 object-contain mx-auto mb-4"
                          />
                          <h5 className="font-medium text-sm mb-1">British Council</h5>
                          <p className="text-xs text-muted-foreground">Quality Assurance</p>
                        </div>
                        
                        <div className="text-center p-6 bg-white rounded-xl shadow-lg border">
                          <img 
                            src="/lovable-uploads/english-uk-logo.png" 
                            alt="English UK logo"
                            className="w-16 h-16 object-contain mx-auto mb-4"
                          />
                          <h5 className="font-medium text-sm mb-1">English UK</h5>
                          <p className="text-xs text-muted-foreground">Professional Standards</p>
                        </div>
                        
                        <div className="text-center p-6 bg-white rounded-xl shadow-lg border">
                          <img 
                            src="/lovable-uploads/ialc-logo.png" 
                            alt="IALC logo"
                            className="w-16 h-16 object-contain mx-auto mb-4"
                          />
                          <h5 className="font-medium text-sm mb-1">IALC</h5>
                          <p className="text-xs text-muted-foreground">International Standards</p>
                        </div>
                        
                        <div className="text-center p-6 bg-white rounded-xl shadow-lg border">
                          <img 
                            src="/lovable-uploads/quality-english-logo.png" 
                            alt="Quality English logo"
                            className="w-16 h-16 object-contain mx-auto mb-4"
                          />
                          <h5 className="font-medium text-sm mb-1">Quality English</h5>
                          <p className="text-xs text-muted-foreground">Excellence Network</p>
                        </div>
                      </div>

                      <SchoolStrengths />
                    </TabsContent>
                    
                    <TabsContent value="brighton">
                      <BrightonFacts />
                    </TabsContent>
                    
                    <TabsContent value="travel">
                      <TravelJourney />
                    </TabsContent>
                    
                    <TabsContent value="holidays">
                      <HolidayDates2025 />
                    </TabsContent>
                    
                    <TabsContent value="faq">
                      <FAQSection />
                    </TabsContent>
                    
                    <TabsContent value="more">
                      <div className="space-y-8">
                        <div id="kinetic-sentence">
                          <h4 className="text-2xl font-bold mb-6 text-gradient-green-metallic">Practice Your English</h4>
                          <KineticSentenceComposer />
                        </div>
                        <div className="section-spacer"></div>
                        <div id="price-calculator">
                          <h4 className="text-2xl font-bold mb-6 text-gradient-green-metallic">2026 Adult Out of Summer Pricing Calculator</h4>
                          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
                            Calculate your course cost for our 2026 adult programmes outside of summer period (4 January to 6 June and 16 August to 20 December 2026).
                          </p>
                          <CourseQuoteCalculator />
                        </div>
                        <div className="section-spacer"></div>
                        <div id="get-in-touch">
                          <div className="text-center mb-8">
                            <h4 className="text-2xl font-bold mb-4 text-gradient-green-metallic">Get In Touch</h4>
                            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                              Have questions about our courses? Contact us for personalized assistance.
                            </p>
                          </div>
                          <div className="flex justify-center gap-4">
                            <Button className="bg-gradient-red-3d hover:scale-105 transition-transform duration-300 text-white border-0 shadow-red-glow">
                              Contact Us
                            </Button>
                            <Button variant="outline">
                              Call +44 1273 384 300
                            </Button>
                          </div>
                        </div>
                        <div className="section-spacer section-bg-white"></div>
                        <div id="course-times">
                          <SchoolStats />
                        </div>
                        <div className="section-spacer section-bg-white"></div>
                        <div id="testimonials">
                          <h4 className="text-2xl font-bold mb-6 text-gradient-green-metallic">Student Reviews & Testimonials</h4>
                          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
                            Read authentic reviews from our international students and see what they say about their experience at Loxdale English Centre.
                          </p>
                          <TestimonialsSection />
                        </div>
                        <div className="section-spacer section-bg-white"></div>
                        <div id="ready-to-begin">
                          <div className="text-center p-12 bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl">
                            <h4 className="text-3xl font-bold mb-6 text-gradient-green-metallic">Ready to Begin Your Journey?</h4>
                            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
                              Join thousands of international students who have transformed their English skills at Loxdale English Centre in Brighton.
                            </p>
                            <Button className="bg-gradient-red-3d hover:scale-105 transition-transform duration-300 text-white border-0 shadow-red-glow">
                              Start Your Application
                            </Button>
                          </div>
                        </div>
                      </div>
                    </TabsContent>
                  </Tabs>
                </div>
              </div>
            </CollapsibleContent>
          </Collapsible>
          </div>
        </div>
      </div>

      {/* White spacer */}
      <div className="section-spacer section-bg-white"></div>

      {/* Secure Your Place Section */}
      <SecurePlaceSection />
    </div>
  );
};

export default Index;
