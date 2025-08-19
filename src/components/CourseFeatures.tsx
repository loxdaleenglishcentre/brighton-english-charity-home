import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BookOpen, Users, Mic, PenTool, Globe, Music, Briefcase, Palette, ArrowRight, CheckCircle } from "lucide-react";
import FeaturedTestimonial from "./FeaturedTestimonial";
import lectureSeriesImage from "@/assets/lecture-series.jpg";
const CourseFeatures = () => {
  const features = [{
    icon: BookOpen,
    title: "Core English Skills",
    description: "Master speaking, listening, reading, and writing through interactive lessons",
    color: "bg-gradient-primary"
  }, {
    icon: Mic,
    title: "Pronunciation & Fluency",
    description: "Perfect your accent and speak with confidence using cutting-edge techniques",
    color: "bg-gradient-secondary"
  }, {
    icon: Users,
    title: "Global Community",
    description: "Learn alongside international students and build lifelong connections",
    color: "bg-gradient-accent"
  }, {
    icon: Briefcase,
    title: "Business English",
    description: "Advance your career with specialized business communication skills",
    color: "bg-gradient-primary"
  }];
  const appliedEnglishOptions = [{
    icon: Mic,
    title: "Speaking & Pronunciation",
    level: "All Levels"
  }, {
    icon: PenTool,
    title: "Grammar Mastery",
    level: "All Levels"
  }, {
    icon: Palette,
    title: "Art Appreciation",
    level: "B2+"
  }, {
    icon: Briefcase,
    title: "Business English",
    level: "B2+"
  }, {
    icon: PenTool,
    title: "Creative Writing",
    level: "B1+"
  }, {
    icon: Music,
    title: "Music & Lyrics",
    level: "All Levels"
  }, {
    icon: Globe,
    title: "Cultural Studies",
    level: "B2+"
  }, {
    icon: BookOpen,
    title: "Literature",
    level: "C1+"
  }];
  return <section className="py-12 relative overflow-hidden">
      {/* Modern geometric background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 border-2 border-primary rounded-full"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-secondary/30 rounded-lg rotate-45"></div>
        <div className="absolute bottom-32 left-1/3 w-40 h-40 border border-accent/40 rotate-12"></div>
        <div className="absolute bottom-20 right-10 w-28 h-28 bg-primary/20 rounded-full"></div>
      </div>
      
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-primary opacity-5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-accent opacity-5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-10">
          <Badge className="mb-6 bg-gradient-primary text-white border-0 px-6 py-2 text-sm font-medium">
            🎯 Course Description
          </Badge>
          <h2 className="text-4xl lg:text-6xl font-bold mb-6 text-gradient-green-metallic">
            Learn English Like Never Before
          </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Learn English in the company of like-minded people from around the world on this highly popular course! This lively and imaginative general English course offered by Loxdale English Centre in Brighton will help you to communicate confidently and fluently in everyday English.
            </p>
        </div>

        {/* Core Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {features.map((feature, index) => <Card key={index} className="group hover-float border-0 shadow-lg overflow-hidden" style={{
          animationDelay: `${index * 0.1}s`
        }}>
              <CardContent className="p-8 text-center relative">
                <div className={`w-16 h-16 ${feature.color} rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className={`w-8 h-8 ${feature.color.includes("secondary") ? "text-foreground" : "text-white"}`} />
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                
                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
              </CardContent>
            </Card>)}
        </div>

        {/* White spacer */}
        <div className="section-spacer"></div>

        {/* Applied English Section */}
        <div className="glass rounded-3xl p-8 lg:p-12 mb-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-gradient-accent text-white border-0">
                ✨ Unique Feature
              </Badge>
              <h3 className="text-3xl lg:text-4xl font-bold mb-6 text-gradient-green-metallic">
                Applied English
                <span className="block text-2xl text-accent font-normal mt-2">
                  Personalize Your Learning
                </span>
              </h3>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Loxdale's unique teaching programme offers you the chance to personalise your learning experience depending on your academic needs and interests. As part of the course, you will focus in more detail on various aspects of English for four lessons per week. This is called "Applied English," and you can choose from subjects such as speaking, pronunciation & fluency, grammar, film, art appreciation, business English, creative writing, music & lyrics, etc.
              </p>
              
              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>4 specialized lessons per week</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>Small class sizes for personal attention</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>B2+ students study with C1 and C2 levels</span>
                </div>
              </div>
              
              <Button className="bg-gradient-red-3d hover:scale-105 transition-transform duration-300 text-white border-0 shadow-red-glow">
                Explore Options
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              {appliedEnglishOptions.map((option, index) => <Card key={index} className="hover-float border-0 shadow-md bg-card/50 backdrop-blur-sm" style={{
              animationDelay: `${index * 0.05}s`
            }}>
                  <CardContent className="p-4 text-center">
                    <option.icon className="w-6 h-6 text-primary mx-auto mb-2" />
                    <h4 className="font-semibold text-sm mb-1">{option.title}</h4>
                    <Badge variant="outline" className="text-xs">
                      {option.level}
                    </Badge>
                  </CardContent>
                </Card>)}
            </div>
          </div>
        </div>

        {/* White spacer */}
        <div className="section-spacer"></div>

        {/* Two Column Section: Loxdale Lecture Series + Student Testimonial */}
        <div className="text-center mb-8">
          <h3 className="text-3xl lg:text-4xl font-bold text-gradient-green-metallic">
            Real Results from Real Students
          </h3>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mt-4">
            See how our Loxdale Lecture Series and personalized approach help students achieve their English learning goals.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left Column: Loxdale Lecture Series */}
          <Card className="glass hover-float border-0 shadow-xl h-full">
            <CardContent className="p-6 lg:p-8 h-full flex flex-col">
              <div className="mb-6">
                <img src={lectureSeriesImage} alt="Students attending Loxdale Lecture Series on British culture" className="w-full h-48 lg:h-64 object-cover rounded-xl" />
              </div>
              
              <div className="flex-1 flex flex-col">
                <div className="w-16 h-16 bg-gradient-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-8 h-8 text-foreground" />
                </div>
                <h4 className="text-xl lg:text-2xl font-bold mb-4 text-center">Loxdale Lecture Series</h4>
                <p className="text-muted-foreground mb-6 leading-relaxed text-center flex-1">
                  As part of our commitment to making study time as stimulating and enlightening as possible, our students enjoy a weekly lecture on a Friday morning which focuses on various aspects of British life. Popular past lectures have included Homelessness, Things to do in London, British History, HIV and the Terence Higgins Trust, Presentation Techniques, Brighton Music Scene, London Architecture, Street Art, Acupuncture, and Nutrition.
                </p>
                <div className="text-center">
                  <Button variant="outline" className="hover-float">
                    Learn More About Lectures
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Right Column: Student Testimonial */}
          <FeaturedTestimonial />
        </div>
      </div>
      
      {/* White spacer */}
      <div className="section-spacer"></div>
    </section>;
};
export default CourseFeatures;