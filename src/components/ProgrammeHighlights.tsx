import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Landmark, Mic, Calendar } from "lucide-react";
import classImg from "@/assets/loxdale-teacher-539.jpg";


const ProgrammeHighlights = () => {
  return (
    <section id="programme-highlights" aria-labelledby="programme-highlights-title" className="py-12 relative overflow-hidden">
      {/* Subtle geometric background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-20 w-40 h-40 border border-primary/20 rounded-full"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 border border-secondary/20 rounded-lg rotate-45"></div>
        <div className="absolute top-1/2 right-1/3 w-24 h-24 border border-accent/20 rotate-12"></div>
      </div>
      
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <header className="mb-10 text-center">
          <Badge className="mb-6 bg-gradient-secondary text-foreground border-0 px-6 py-2 text-sm font-medium">Programme Excellence</Badge>
          <h2 id="programme-highlights-title" className="text-4xl lg:text-5xl font-bold text-gradient-green-metallic mb-4">More Programme Highlights</h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">Beyond Applied English and our Lecture Series, these elements enrich your learning and cultural immersion.</p>
        </header>
        {/* Enhanced image card */}
        <div className="mb-12 relative">
          <div className="rounded-3xl overflow-hidden shadow-2xl border border-white/20 bg-white/10 backdrop-blur-sm">
            <img
              src={classImg}
              loading="lazy"
              alt="Classroom scene at Loxdale English Centre"
              className="w-full h-80 md:h-96 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          <Card className="bg-card/80 backdrop-blur-sm border border-border/50 shadow-xl rounded-3xl hover:scale-105 transition-all duration-300">
            <CardContent className="p-8 lg:p-10">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center shadow-lg">
                  <Landmark className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3">Britain Today</h3>
                  <p className="text-muted-foreground text-lg leading-relaxed">Two lessons each week exploring modern Britain: welfare, education, politics, law and more—helping you understand UK society.</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card/80 backdrop-blur-sm border border-border/50 shadow-xl rounded-3xl hover:scale-105 transition-all duration-300">
            <CardContent className="p-8 lg:p-10">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent to-accent/70 flex items-center justify-center shadow-lg">
                  <Mic className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3">Short Talk</h3>
                  <p className="text-muted-foreground text-lg leading-relaxed">Every Monday afternoon, enjoy a lively 45‑minute talk on cultural topics like Stonehenge, museums, music venues and British traditions.</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card/80 backdrop-blur-sm border border-border/50 shadow-xl rounded-3xl hover:scale-105 transition-all duration-300">
            <CardContent className="p-8 lg:p-10">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-secondary to-secondary/70 flex items-center justify-center shadow-lg">
                  <Calendar className="w-8 h-8 text-foreground" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3">Social Programme</h3>
                  <p className="text-muted-foreground text-lg leading-relaxed">Weekly cultural activities, excursions, and social events to practice English while exploring Brighton and beyond.</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
      </div>
    </section>
  );
};

export default ProgrammeHighlights;
