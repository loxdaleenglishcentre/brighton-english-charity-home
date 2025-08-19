import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Users, Clock, Globe, CheckCircle } from "lucide-react";

const BritainToday = () => {
  const programmes = [
    {
      title: "Short Talk",
      description: "Each Monday afternoon, you will be able to enjoy a 45-minute talk. These lively and interesting talks explore topics such as Stonehenge, London Museums, Brighton Music Venues, St George's Day, Guy Fawkes, Birdwatching, Finding a Dinosaur, and Christmas in Victorian England.",
      icon: BookOpen,
      time: "Monday afternoons",
      duration: "45 minutes"
    },
    {
      title: "Britain Today Programme",
      description: "Through our 'Britain Today' programme, you will find out more about British society. You will have two lessons each week on different aspects of modern Britain, with subjects including the welfare, educational, political, and legal systems.",
      icon: Globe,
      time: "Twice weekly",
      duration: "2 lessons per week"
    }
  ];

  const benefits = [
    "Experience and learn about life in the UK and British culture",
    "Personalise your studies at no extra cost",
    "Life-long learning encouraged",
    "Unique teaching syllabus developed over 40 years",
    "Designed with feedback from staff and students"
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-background via-primary/5 to-secondary/10">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge className="mb-6 bg-gradient-primary text-white border-0 px-6 py-2 text-sm font-medium">
            🇬🇧 Britain Today
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gradient-green-metallic">
            Beyond English Learning
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We want you to make the most of your time here. During your course at Loxdale, you will both experience and learn about life in the UK and British culture, and be able to personalise your studies—all this at no extra cost!
          </p>
        </div>

        {/* Programmes Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {programmes.map((programme, index) => (
            <Card key={index} className="hover-float border-0 shadow-lg overflow-hidden">
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center">
                    <programme.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-xl font-bold">{programme.title}</CardTitle>
                    <div className="flex items-center gap-4 mt-2">
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4 text-muted-foreground" />
                        <span className="text-sm text-muted-foreground">{programme.time}</span>
                      </div>
                      <Badge variant="outline" className="text-xs">
                        {programme.duration}
                      </Badge>
                    </div>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {programme.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Why Choose Loxdale */}
        <Card className="glass hover-float border-0 shadow-xl">
          <CardContent className="p-8 lg:p-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <Badge className="mb-4 bg-gradient-accent text-white border-0">
                  ✨ Why Choose Loxdale
                </Badge>
                <h3 className="text-3xl font-bold mb-6 text-gradient-green-metallic">
                  More Than Just English
                </h3>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  We have a passion for encouraging life-long learning and have designed our unique teaching syllabus over the past 40 years with feedback and input from our staff and students. We are sure you will enjoy it.
                </p>
              </div>
              
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default BritainToday;