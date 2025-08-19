import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Slider } from "@/components/ui/slider";
import { 
  GraduationCap, 
  Users, 
  Calendar, 
  Clock, 
  Star, 
  BookOpen, 
  Camera,
  Palette,
  Music,
  Heart,
  Globe,
  ArrowRight,
  User,
  UsersIcon,
  Home,
  CheckCircle,
  Trophy,
  MapPin
} from "lucide-react";

interface Course {
  id: string;
  title: string;
  description: string;
  ageRange: string;
  duration: string;
  season: string;
  level: string;
  groupSize: string;
  highlights: string[];
  icon: React.ComponentType<any>;
  price: string;
  idealFor: string[];
}

const courses: Course[] = [
  {
    id: "general-english-adult",
    title: "General English Course",
    description: "Comprehensive English language course focusing on all four skills: speaking, listening, reading, and writing.",
    ageRange: "18+",
    duration: "2-52 weeks",
    season: "Year-round",
    level: "A1-C2",
    groupSize: "Max 14 students",
    highlights: ["Small classes", "Experienced teachers", "All levels welcome", "Flexible duration"],
    icon: BookOpen,
    price: "From £240/week",
    idealFor: ["career development", "university preparation", "general fluency"]
  },
  {
    id: "english-plus-adult",
    title: "English Plus Course",
    description: "Combine General English with exciting cultural subjects like photography, gardening, drama, British culture, yoga, and creative English.",
    ageRange: "18+",
    duration: "4-week blocks",
    season: "Out of summer",
    level: "B1-C2",
    groupSize: "Small groups",
    highlights: ["Photography classes", "British culture", "Gardening", "Drama & singing", "Yoga philosophy"],
    icon: Camera,
    price: "From £310/week",
    idealFor: ["creative interests", "cultural immersion", "hobby development"]
  },
  {
    id: "teenage-adult",
    title: "Teenage Adult Course (16-17)",
    description: "Specially supported adult courses for mature 16-17 year olds seeking independence and academic challenge.",
    ageRange: "16-17 years",
    duration: "2-20 weeks",
    season: "End Aug - Mid June",
    level: "A2-C1",
    groupSize: "Mixed age classes",
    highlights: ["Extra pastoral care", "Adult course content", "Independent learning", "British culture focus"],
    icon: GraduationCap,
    price: "From £240/week",
    idealFor: ["independence", "academic challenge", "mature learning"]
  },
  {
    id: "summer-teens",
    title: "Summer Young Learner Teens (13-17)",
    description: "Comprehensive summer programme with English lessons, activities, and cultural excursions for teenagers.",
    ageRange: "13-17 years",
    duration: "2-8 weeks",
    season: "Summer only",
    level: "A1-B2",
    groupSize: "Max 15 students",
    highlights: ["Daily activities", "Weekend excursions", "Cultural immersion", "Age-appropriate content"],
    icon: Users,
    price: "From £680/week",
    idealFor: ["summer holidays", "first UK experience", "social learning"]
  },
  {
    id: "summer-preteens",
    title: "Summer Young Learner Pre-Teens (8-12)",
    description: "Fun, engaging summer English programme designed specifically for younger children with plenty of activities.",
    ageRange: "8-12 years",
    duration: "2-6 weeks",
    season: "Summer only",
    level: "A1-A2",
    groupSize: "Max 12 students",
    highlights: ["Play-based learning", "Creative activities", "Safe environment", "Age-specific teaching"],
    icon: Heart,
    price: "From £680/week",
    idealFor: ["first English experience", "fun learning", "confidence building"]
  },
  {
    id: "family-course",
    title: "Family Course",
    description: "Study English together as a family with courses tailored for different age groups while staying together.",
    ageRange: "All ages",
    duration: "2-12 weeks",
    season: "Year-round",
    level: "A1-C1",
    groupSize: "Family groups",
    highlights: ["Family bonding", "Age-appropriate classes", "Shared experiences", "Family accommodation"],
    icon: Home,
    price: "Custom pricing",
    idealFor: ["family bonding", "shared learning", "cultural exploration"]
  },
  {
    id: "one-to-one",
    title: "One-to-One Lessons",
    description: "Personalised English tuition with a dedicated teacher focusing on your specific needs and goals.",
    ageRange: "All ages",
    duration: "Flexible",
    season: "Year-round",
    level: "A1-C2",
    groupSize: "Individual",
    highlights: ["Personalised curriculum", "Flexible schedule", "Rapid progress", "Specific goals focus"],
    icon: User,
    price: "From £65/hour",
    idealFor: ["specific goals", "exam preparation", "business English", "rapid progress"]
  }
];

const CourseFinderTool = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, any>>({});
  const [recommendations, setRecommendations] = useState<Course[]>([]);
  const [typingText, setTypingText] = useState("");
  
  const fullText = "Type your age";
  
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setTypingText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 150);
    
    return () => clearInterval(timer);
  }, []);

  const questions = [
    {
      id: "age",
      title: "What's your age?",
      type: "age-range",
      description: "This helps us recommend age-appropriate courses",
      icon: User
    },
    {
      id: "goals",
      title: "What are your main goals?",
      type: "multiple-choice",
      description: "Select all that apply",
      icon: Trophy,
      options: [
        { value: "general-english", label: "Improve general English skills", icon: BookOpen },
        { value: "career", label: "Career development", icon: GraduationCap },
        { value: "university", label: "University preparation", icon: Star },
        { value: "creative", label: "Combine English with creative activities", icon: Palette },
        { value: "cultural", label: "Experience British culture", icon: Globe },
        { value: "exam", label: "Exam preparation", icon: Clock },
        { value: "business", label: "Business English", icon: Users },
        { value: "family", label: "Learn as a family", icon: Home }
      ]
    },
    {
      id: "timing",
      title: "When would you like to study?",
      type: "single-choice",
      description: "Choose your preferred time",
      icon: Calendar,
      options: [
        { value: "summer", label: "Summer holidays", icon: Calendar },
        { value: "year-round", label: "Any time of year", icon: Clock },
        { value: "specific", label: "Specific dates in mind", icon: Star }
      ]
    },
    {
      id: "duration",
      title: "How long would you like to study?",
      type: "slider",
      min: 1,
      max: 52,
      unit: "weeks",
      description: "Minimum 1 week, maximum 52 weeks",
      icon: MapPin
    },
    {
      id: "learning-style",
      title: "What's your preferred learning style?",
      type: "single-choice",
      description: "How do you learn best?",
      icon: Heart,
      options: [
        { value: "group", label: "Group classes with other students", icon: Users },
        { value: "individual", label: "One-to-one lessons", icon: User },
        { value: "mixed", label: "Combination of both", icon: UsersIcon }
      ]
    }
  ];

  const findRecommendations = () => {
    let scored = courses.map(course => {
      let score = 0;
      
      // Age matching
      if (answers.age) {
        if (answers.age < 13 && course.id === "summer-preteens") score += 10;
        else if (answers.age >= 13 && answers.age <= 17 && course.id === "summer-teens") score += 10;
        else if (answers.age >= 16 && answers.age <= 17 && course.id === "teenage-adult") score += 8;
        else if (answers.age >= 18 && (course.id === "general-english-adult" || course.id === "english-plus-adult")) score += 10;
        else if (course.id === "family-course" || course.id === "one-to-one") score += 5;
      }

      // Goals matching
      if (answers.goals) {
        const goals = Array.isArray(answers.goals) ? answers.goals : [answers.goals];
        goals.forEach(goal => {
          if (goal === "creative" && course.id === "english-plus-adult") score += 8;
          if (goal === "family" && course.id === "family-course") score += 10;
          if ((goal === "exam" || goal === "business") && course.id === "one-to-one") score += 8;
          if (goal === "general-english" && course.id === "general-english-adult") score += 8;
          if (goal === "cultural" && (course.id === "english-plus-adult" || course.id.includes("summer"))) score += 6;
        });
      }

      // Timing matching
      if (answers.timing === "summer" && course.season.includes("Summer")) score += 8;
      if (answers.timing === "year-round" && course.season === "Year-round") score += 8;

      // Learning style matching
      if (answers["learning-style"] === "individual" && course.id === "one-to-one") score += 10;
      if (answers["learning-style"] === "group" && course.groupSize !== "Individual") score += 6;

      return { ...course, score };
    });

    scored.sort((a, b) => b.score - a.score);
    setRecommendations(scored.slice(0, 3));
  };

  const handleNext = () => {
    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      findRecommendations();
    }
  };

  const handleAnswer = (questionId: string, answer: any) => {
    setAnswers(prev => ({ ...prev, [questionId]: answer }));
  };

  const resetQuiz = () => {
    setCurrentStep(0);
    setAnswers({});
    setRecommendations([]);
  };

  const currentQuestion = questions[currentStep];
  const progress = ((currentStep + 1) / questions.length) * 100;
  const questionsRemaining = questions.length - currentStep - 1;

  if (recommendations.length > 0) {
    return (
      <section className="py-24 bg-gradient-to-br from-background via-muted/30 to-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              <span className="text-gradient-green-metallic">Perfect</span> Courses for You
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Based on your preferences, here are our top recommendations
            </p>
            <Button onClick={resetQuiz} variant="outline" size="lg">
              Start Over
            </Button>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {recommendations.map((course, index) => {
              const IconComponent = course.icon;
              return (
                <Card key={course.id} className={`relative overflow-hidden transition-all duration-300 hover:shadow-xl ${index === 0 ? 'ring-2 ring-primary border-primary' : ''}`}>
                  {index === 0 && (
                    <Badge className="absolute top-4 right-4 bg-primary text-primary-foreground">
                      Best Match
                    </Badge>
                  )}
                  
                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 rounded-lg bg-primary/10">
                        <IconComponent className="w-6 h-6 text-primary" />
                      </div>
                      <Badge variant="secondary">{course.ageRange}</Badge>
                    </div>
                    <CardTitle className="text-xl">{course.title}</CardTitle>
                    <CardDescription className="text-sm">
                      {course.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="font-medium text-muted-foreground">Duration:</span>
                        <p>{course.duration}</p>
                      </div>
                      <div>
                        <span className="font-medium text-muted-foreground">Season:</span>
                        <p>{course.season}</p>
                      </div>
                      <div>
                        <span className="font-medium text-muted-foreground">Level:</span>
                        <p>{course.level}</p>
                      </div>
                      <div>
                        <span className="font-medium text-muted-foreground">Group Size:</span>
                        <p>{course.groupSize}</p>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-medium mb-2">Course Highlights:</h4>
                      <div className="flex flex-wrap gap-1">
                        {course.highlights.slice(0, 3).map((highlight, i) => (
                          <Badge key={i} variant="outline" className="text-xs">
                            {highlight}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4 border-t">
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-lg font-bold text-primary">{course.price}</span>
                      </div>
                      <Button className="w-full" size="lg">
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="text-center">
            <p className="text-muted-foreground mb-6">
              Need help choosing? Our team is here to guide you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-red-3d shadow-red-glow">
                Apply Now
              </Button>
              <Button size="lg" variant="outline">
                Speak to an Advisor
              </Button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-24 bg-gradient-to-br from-background via-muted/30 to-background">
      <div className="container mx-auto px-6">
        {/* Enhanced Header */}
        <div className="text-center mb-16">
          <div className="mb-4">
            <Badge className="bg-gradient-primary text-white border-0 px-6 py-2 text-sm font-medium">
              🎯 Course Finder
            </Badge>
          </div>
          <h2 className="text-5xl lg:text-6xl font-bold mb-6">
            Find Your <span className="text-gradient-green-metallic">Perfect</span> Course
          </h2>
          <p className="text-xl text-muted-foreground font-light mb-4">
            Answer 5 quick questions to unlock your ideal English journey
          </p>
          <p className="text-sm text-muted-foreground/80">
            ✨ Personalized recommendations • 🚀 Takes 2 minutes • 🎓 Expert guidance
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto justify-center">
          {/* Left Column - Enhanced Student-Teacher Image */}
          <div className="relative group order-2 lg:order-1">
            <div className="absolute inset-0 bg-gradient-primary rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
            <div className="relative overflow-hidden rounded-3xl shadow-2xl">
              <img 
                src="/lovable-uploads/4079b7b1-e649-4edb-a852-465edcd360ba.png" 
                alt="Students and teacher engaged in dynamic English lesson"
                className="w-full h-[500px] object-cover object-center transition-transform duration-700 group-hover:scale-105"
                style={{
                  filter: "brightness(110%) contrast(105%) saturate(110%)"
                }}
              />
              {/* Soft gradient overlay for text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
              
              {/* Student quote overlay */}
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                  <p className="text-lg font-medium mb-2 italic">
                    "This quiz helped me find the perfect course — now I'm studying in Brighton!"
                  </p>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    </div>
                    <span className="text-sm font-medium">Maria, Spain</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Enhanced Form */}
          <div className="space-y-8 order-1 lg:order-2">
            {/* Chunked Progress Bar */}
            <div className="space-y-4">
              <div className="space-y-3">
                {/* Step dots */}
                <div className="flex items-center justify-center gap-3">
                  {Array.from({ length: questions.length }, (_, i) => (
                    <div
                      key={i}
                      className={`w-3 h-3 rounded-full transition-colors ${i <= currentStep ? 'bg-primary' : 'bg-muted'}`}
                    />
                  ))}
                </div>
                {/* Gradient progress bar */}
                <div className="h-3 w-full bg-muted rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-primary transition-all duration-500"
                    style={{ width: `${progress}%` }}
                  />
                </div>
              </div>
            </div>

            {/* Enhanced Form Card */}
            <Card className="border border-border ring-1 ring-primary/25 shadow-2xl bg-gradient-to-b from-background/60 to-card/90 backdrop-blur-md rounded-3xl overflow-hidden">
              <CardContent className="p-8">
                <div className="space-y-6">
                  {/* Question Header with Icon */}
                    <div className="flex flex-col items-center gap-4 mb-6 text-center">
                      <div className="w-14 h-14 bg-gradient-primary rounded-2xl flex items-center justify-center shadow-red-glow">
                        <currentQuestion.icon className="w-7 h-7 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-foreground">
                          {currentQuestion.title}
                        </h3>
                        <p className="text-muted-foreground text-sm">
                          {currentQuestion.description}
                        </p>
                      </div>
                    </div>

                  {/* Age Input */}
                  {currentQuestion.type === "age-range" && (
                    <div className="space-y-4">
                      <div className="flex justify-center">
                        <input
                          type="number"
                          min="8"
                          max="80"
                          placeholder={typingText}
                          value={answers[currentQuestion.id] || ""}
                          onChange={(e) => handleAnswer(currentQuestion.id, parseInt(e.target.value))}
                          className="w-64 h-16 text-2xl font-bold text-center border-2 border-border rounded-xl bg-background focus:border-primary focus:outline-none transition-colors placeholder:text-muted-foreground"
                        />
                      </div>
                    </div>
                  )}

                  {/* Multiple Choice */}
                  {currentQuestion.type === "multiple-choice" && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {currentQuestion.options?.map((option) => {
                        const isSelected = Array.isArray(answers[currentQuestion.id]) 
                          ? answers[currentQuestion.id]?.includes(option.value)
                          : answers[currentQuestion.id] === option.value;
                        
                        return (
                          <button
                            key={option.value}
                            onClick={() => {
                              const currentAnswers = answers[currentQuestion.id] || [];
                              const newAnswers = Array.isArray(currentAnswers) 
                                ? (currentAnswers.includes(option.value)
                                    ? currentAnswers.filter(a => a !== option.value)
                                    : [...currentAnswers, option.value])
                                : [option.value];
                              handleAnswer(currentQuestion.id, newAnswers);
                            }}
                            className={`flex items-center gap-3 p-4 rounded-xl border-2 transition-all hover:scale-[1.02] ${
                              isSelected 
                                ? 'border-primary bg-primary/10 text-primary' 
                                : 'border-border hover:border-primary/50'
                            }`}
                          >
                            <option.icon className="w-5 h-5 flex-shrink-0" />
                            <span className="text-sm font-medium">{option.label}</span>
                            {isSelected && <CheckCircle className="w-4 h-4 ml-auto" />}
                          </button>
                        );
                      })}
                    </div>
                  )}

                  {/* Single Choice */}
                  {currentQuestion.type === "single-choice" && (
                    <div className="space-y-3">
                      {currentQuestion.options?.map((option) => {
                        const isSelected = answers[currentQuestion.id] === option.value;
                        
                        return (
                          <button
                            key={option.value}
                            onClick={() => handleAnswer(currentQuestion.id, option.value)}
                            className={`flex items-center gap-3 p-4 rounded-xl border-2 transition-all hover:scale-[1.02] w-full ${
                              isSelected 
                                ? 'border-primary bg-primary/10 text-primary' 
                                : 'border-border hover:border-primary/50'
                            }`}
                          >
                            <option.icon className="w-5 h-5 flex-shrink-0" />
                            <span className="text-sm font-medium">{option.label}</span>
                            {isSelected && <CheckCircle className="w-4 h-4 ml-auto" />}
                          </button>
                        );
                      })}
                    </div>
                  )}

                  {/* Slider */}
                  {currentQuestion.type === "slider" && (
                    <div className="space-y-4">
                      <div className="text-center">
                        <span className="text-3xl font-bold text-primary">
                          {answers[currentQuestion.id] || currentQuestion.min} {currentQuestion.unit}
                        </span>
                      </div>
                      <Slider
                        value={[answers[currentQuestion.id] || currentQuestion.min]}
                        onValueChange={(value) => handleAnswer(currentQuestion.id, value[0])}
                        max={currentQuestion.max}
                        min={currentQuestion.min}
                        step={1}
                        className="w-full"
                      />
                      <div className="flex justify-between text-sm text-muted-foreground">
                        <span>{currentQuestion.min} {currentQuestion.unit}</span>
                        <span>{currentQuestion.max} {currentQuestion.unit}</span>
                      </div>
                    </div>
                  )}

                  {/* Enhanced Next Button */}
                  <div className="pt-6 space-y-3 text-center">
                    <Button
                      onClick={handleNext}
                      disabled={!answers[currentQuestion.id]}
                      size="lg"
                      className="w-full sm:w-auto mx-auto bg-gradient-red-3d shadow-red-glow text-white border-0 px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300 disabled:opacity-90 disabled:cursor-not-allowed disabled:hover:scale-100"
                    >
                      {currentStep === questions.length - 1 ? "Get My Recommendations" : "Next Question"}
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Button>
                    
                    {/* Encouraging microcopy */}
                    {questionsRemaining > 0 && (
                      <p className="text-sm text-muted-foreground">
                        Just {questionsRemaining} more question{questionsRemaining > 1 ? 's' : ''}! 🎉
                      </p>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseFinderTool;