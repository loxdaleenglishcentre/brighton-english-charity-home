import { 
  Target, 
  Users, 
  FileText, 
  Globe, 
  Building, 
  GraduationCap,
  Settings,
  Leaf,
  Award,
  Heart,
  Calendar,
  Shield
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const SchoolStrengths = () => {
  const strengths = [
    {
      icon: Target,
      title: "Strategic & Quality Management",
      color: "bg-green-500"
    },
    {
      icon: Users,
      title: "Staff Management", 
      color: "bg-green-400"
    },
    {
      icon: FileText,
      title: "Student Administration",
      color: "bg-blue-500"
    },
    {
      icon: Globe,
      title: "Publicity",
      color: "bg-purple-500"
    },
    {
      icon: Building,
      title: "Premises and Facilities",
      color: "bg-orange-500"
    },
    {
      icon: GraduationCap,
      title: "Academic Staff Profile",
      color: "bg-blue-600"
    },
    {
      icon: Settings,
      title: "Academic Management",
      color: "bg-slate-600"
    },
    {
      icon: Leaf,
      title: "Course Design",
      color: "bg-teal-500"
    },
    {
      icon: Award,
      title: "Teaching",
      color: "bg-orange-400"
    },
    {
      icon: Heart,
      title: "Care of Students",
      color: "bg-red-500"
    },
    {
      icon: Calendar,
      title: "Leisure Opportunities",
      color: "bg-pink-500"
    },
    {
      icon: Shield,
      title: "Safeguarding under 18s",
      color: "bg-green-600"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-2">
            12 Areas of Strength
          </h2>
        </div>

        {/* Strengths Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12 max-w-6xl mx-auto">
          {strengths.map((strength, index) => {
            const IconComponent = strength.icon;
            return (
              <Card 
                key={index}
                className="p-6 bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition-all duration-200"
              >
                <div className="flex items-center gap-4">
                  <div className={`w-14 h-14 ${strength.color} rounded-full flex items-center justify-center flex-shrink-0`}>
                    <IconComponent className="w-7 h-7 text-white" />
                  </div>
                  
                  <h3 className="font-semibold text-base text-gray-900 leading-tight">
                    {strength.title}
                  </h3>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Awards and Links */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 max-w-6xl mx-auto">
          <div className="flex items-center gap-4">
            <div className="border-2 border-red-500 rounded-lg p-4 bg-white">
              <div className="text-red-500 font-bold text-lg">el-gazette</div>
              <div className="text-sm text-gray-600">Centre of Excellence</div>
              <div className="text-sm text-gray-600">2024 – 2025</div>
            </div>
            <Badge className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full text-sm font-medium">
              Top 8% UK
            </Badge>
          </div>
          
          <Button
            variant="ghost"
            className="text-green-600 hover:text-green-700 text-base font-medium flex items-center gap-1"
            onClick={() => window.open('https://www.britishcouncil.org/education/accreditation', '_blank')}
          >
            Read the full British Council report ↗
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SchoolStrengths;