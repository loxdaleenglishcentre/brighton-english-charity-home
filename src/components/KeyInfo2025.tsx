import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Clock, Users, MapPin, Award, Gauge, BookOpenCheck } from "lucide-react";
import heroImage from "@/assets/loxdale-teacher-036.jpg";

const KeyInfo2025 = () => {
  return (
    <section id="course-info" aria-labelledby="info-2025-title" className="py-6 relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Image */}
          <div className="relative rounded-3xl overflow-hidden shadow-xl hover-float">
            <img
              src={heroImage}
              loading="lazy"
              alt="Adult General English class in Brighton classroom"
              className="w-full h-[480px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </div>

          {/* Info Card */}
          <Card className="glass border-0 shadow-xl bg-gradient-to-br from-white via-red-50/30 to-orange-50/20">
            <CardContent className="p-6 lg:p-8">
              <Badge className="mb-4 bg-gradient-red-3d text-white border-0 shadow-red-glow">2025</Badge>
              <h2 id="info-2025-title" className="text-3xl lg:text-4xl font-bold mb-2 text-gradient-green-metallic">Information</h2>
              <p className="text-sm mb-6 text-muted-foreground">Out of the summer only</p>

              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Clock className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold">Lessons per week</p>
                    <p className="text-muted-foreground">20 lessons p/w ≈ 15 hours p/w</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-red-600 flex items-center justify-center">
                    <Users className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold">Adults</p>
                    <p className="text-muted-foreground">Age 16+</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center">
                    <Users className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold">Max classroom size</p>
                    <p className="text-muted-foreground">14 students</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Gauge className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold">Difficulty</p>
                    <p className="text-muted-foreground">Pre‑intermediate (B1) to Proficiency (C2)</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-green-600 flex items-center justify-center">
                    <BookOpenCheck className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold">FREE Teacher Led Self-Study Sessions</p>
                    <p className="text-muted-foreground">Included</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Award className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold">End of Course Certificate</p>
                    <p className="text-muted-foreground">Yes</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-purple-600 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold">Location</p>
                    <p className="text-muted-foreground">Brighton, UK</p>
                  </div>
                </li>
              </ul>

              <div className="mt-6 flex flex-wrap gap-3">
                <Button asChild className="bg-gradient-red-3d text-white border-0 shadow-red-glow">
                  <a href="https://www.loxdale.com/price-calculator/" target="_blank" rel="noopener noreferrer">Price Calculator</a>
                </Button>
                <Button asChild variant="outline" className="glass">
                  <a href="https://www.loxdale.com/summer-general-english-course/" target="_blank" rel="noopener noreferrer">Sample Social Programme</a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default KeyInfo2025;
