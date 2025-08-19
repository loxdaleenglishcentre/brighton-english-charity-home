import { useState } from "react";
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
  Home
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

  const questions = [
    {
      id: "age",
      title: "What's your age?",
      type: "age-range",
      description: "This helps us recommend age-appropriate courses"
    },
    {
      id: "goals",
      title: "What are your main goals?",
      type: "multiple-choice",
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
      description: "Minimum 1 week, maximum 52 weeks"
    },
    {
      id: "learning-style",
      title: "What's your preferred learning style?",
      type: "single-choice",
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

  if (recommendations.length > 0) {
    return (
      <section className="py-24 bg-gradient-to-br from-background via-background to-muted/20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent">
              Perfect Courses for You
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

  const currentQuestion = questions[currentStep];
  const progress = ((currentStep + 1) / questions.length) * 100;

  return (
    <section className="py-24 bg-gradient-to-br from-background via-background to-muted/20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 gradient-text">
              Find Your Perfect Course
            </h2>
            <p className="text-xl text-muted-foreground">
              Answer a few questions to discover the ideal English course for your goals
            </p>
          </div>

          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex justify-between text-sm text-muted-foreground mb-2">
              <span>Question {currentStep + 1} of {questions.length}</span>
              <span>{Math.round(progress)}% complete</span>
            </div>
            <div className="w-full bg-muted rounded-full h-2">
              <div 
                className="bg-gradient-to-r from-primary to-primary/80 h-2 rounded-full transition-all duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          <Card className="border-2">
            <CardHeader>
              <CardTitle className="text-2xl">{currentQuestion.title}</CardTitle>
              {currentQuestion.description && (
                <CardDescription className="text-base">
                  {currentQuestion.description}
                </CardDescription>
              )}
            </CardHeader>

            <CardContent className="space-y-6">
              {currentQuestion.type === "age-range" && (
                <div className="space-y-6">
                  <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-green-3d rounded-2xl blur-sm opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
                    <div className="relative bg-gradient-to-br from-background via-background to-muted/10 border-2 border-muted-foreground/10 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 group-hover:scale-[1.02]">
                      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-primary/5 to-primary/10"></div>
                      <div className="relative p-8">
                        <div className="text-center mb-6">
                          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-green-3d rounded-full mb-4 shadow-lg">
                            <User className="w-8 h-8 text-white" />
                          </div>
                          <h3 className="text-xl font-semibold text-foreground mb-2">What's your age?</h3>
                          <p className="text-muted-foreground">This helps us recommend the perfect course for you</p>
                        </div>
                        
                        <div className="relative">
                          <input
                            type="number"
                            placeholder="Enter your age (8-100)"
                            className="w-full p-6 bg-background/80 backdrop-blur-sm border-2 border-muted-foreground/20 rounded-2xl text-2xl text-center font-bold focus:border-primary focus:outline-none focus:ring-4 focus:ring-primary/20 transition-all duration-300 hover:border-primary/60 hover:shadow-lg"
                            onChange={(e) => handleAnswer(currentQuestion.id, parseInt(e.target.value))}
                            min="8"
                            max="100"
                            style={{
                              background: 'linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.7) 100%)',
                              boxShadow: 'inset 0 2px 10px rgba(0,0,0,0.1), 0 4px 20px rgba(0,0,0,0.05)'
                            }}
                          />
                          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-primary/5 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                        </div>
                        
                        <div className="mt-6 flex justify-center gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-2 bg-muted/50 rounded-full px-4 py-2">
                            <div className="w-2 h-2 bg-gradient-green-3d rounded-full"></div>
                            <span>8-12: Pre-teens</span>
                          </div>
                          <div className="flex items-center gap-2 bg-muted/50 rounded-full px-4 py-2">
                            <div className="w-2 h-2 bg-gradient-green-3d rounded-full"></div>
                            <span>13-17: Teens</span>
                          </div>
                          <div className="flex items-center gap-2 bg-muted/50 rounded-full px-4 py-2">
                            <div className="w-2 h-2 bg-gradient-green-3d rounded-full"></div>
                            <span>18+: Adults</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {currentQuestion.type === "multiple-choice" && (
                <div className="grid md:grid-cols-2 gap-4">
                  {currentQuestion.options?.map((option) => {
                    const IconComponent = option.icon;
                    const isSelected = Array.isArray(answers[currentQuestion.id]) 
                      ? answers[currentQuestion.id]?.includes(option.value)
                      : answers[currentQuestion.id] === option.value;
                    
                    return (
                      <Button
                        key={option.value}
                        variant={isSelected ? "default" : "outline"}
                        className="p-6 h-auto text-left justify-start"
                        onClick={() => {
                          const current = answers[currentQuestion.id] || [];
                          const newValue = Array.isArray(current)
                            ? current.includes(option.value)
                              ? current.filter(v => v !== option.value)
                              : [...current, option.value]
                            : [option.value];
                          handleAnswer(currentQuestion.id, newValue);
                        }}
                      >
                        <IconComponent className="w-6 h-6 mr-3 flex-shrink-0" />
                        <span>{option.label}</span>
                      </Button>
                    );
                  })}
                </div>
              )}

              {currentQuestion.type === "single-choice" && (
                <div className="space-y-3">
                  {currentQuestion.options?.map((option) => {
                    const IconComponent = option.icon;
                    return (
                      <Button
                        key={option.value}
                        variant={answers[currentQuestion.id] === option.value ? "default" : "outline"}
                        className="w-full p-6 h-auto text-left justify-start"
                        onClick={() => handleAnswer(currentQuestion.id, option.value)}
                      >
                        <IconComponent className="w-6 h-6 mr-4" />
                        <span>{option.label}</span>
                      </Button>
                    );
                  })}
                </div>
              )}

              {currentQuestion.type === "slider" && (
                <div className="space-y-6">
                  <div className="px-4">
                    <Slider
                      value={[answers[currentQuestion.id] || currentQuestion.min]}
                      onValueChange={(value) => handleAnswer(currentQuestion.id, value[0])}
                      max={currentQuestion.max}
                      min={currentQuestion.min}
                      step={1}
                      className="w-full"
                    />
                  </div>
                  <div className="text-center">
                    <span className="text-2xl font-bold text-primary">
                      {answers[currentQuestion.id] || currentQuestion.min} {currentQuestion.unit}
                    </span>
                  </div>
                </div>
              )}

              <div className="flex justify-between pt-6">
                <Button
                  variant="outline"
                  onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
                  disabled={currentStep === 0}
                >
                  Previous
                </Button>
                
                <Button
                  onClick={handleNext}
                  disabled={!answers[currentQuestion.id]}
                  size="lg"
                  className="bg-gradient-red-3d shadow-red-glow"
                >
                  {currentStep === questions.length - 1 ? "Get Recommendations" : "Next"}
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CourseFinderTool;