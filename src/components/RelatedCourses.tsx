import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";

const courses = [
  { name: "English Plus", href: "https://www.loxdale.com/english-plus-course/" },
  { name: "Intensive English", href: "https://www.loxdale.com/intensive-english-course/" },
  { name: "Summer General English", href: "https://www.loxdale.com/summer-general-english-course/" },
];

const RelatedCourses = () => {
  return (
    <section id="related-courses" aria-labelledby="related-courses-title" className="py-12 relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-8">
        <header className="mb-10 text-center">
          <Badge className="mb-4 bg-gradient-secondary text-foreground border-0">Explore</Badge>
          <h2 id="related-courses-title" className="text-3xl lg:text-4xl font-bold text-gradient-green-metallic">Related Courses</h2>
          <p className="mt-2 text-muted-foreground max-w-2xl mx-auto">Discover similar options that might fit your goals.</p>
        </header>

        <div className="grid gap-6 md:grid-cols-3">
          {courses.map((c) => (
            <a key={c.name} href={c.href} target="_blank" rel="noopener noreferrer" aria-label={`Learn more about ${c.name}`}>
              <Card className="glass border-0 shadow-xl hover:translate-y-[-2px] transition-transform">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold">{c.name}</h3>
                    <ArrowRight className="w-5 h-5 text-muted-foreground" />
                  </div>
                </CardContent>
              </Card>
            </a>
          ))}
        </div>
      </div>
      
      {/* White spacer */}
      <div className="section-spacer"></div>
    </section>
  );
};

export default RelatedCourses;
