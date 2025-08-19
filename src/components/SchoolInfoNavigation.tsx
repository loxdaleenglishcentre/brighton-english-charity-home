import { useState } from "react";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger, DropdownMenuSeparator } from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";

interface NavigationProps {
  activeTab: string;
  onTabChange: (value: string) => void;
  onSectionScroll: (sectionId: string) => void;
}

const SchoolInfoNavigation = ({ activeTab, onTabChange, onSectionScroll }: NavigationProps) => {
  const navigationItems = [
    {
      value: "accommodation",
      label: "Accommodation",
      sections: [
        { id: "homestay-info", label: "Homestay Options" },
        { id: "self-catered", label: "Self-Catered" }
      ]
    },
    {
      value: "accreditation", 
      label: "Accreditation",
      sections: [
        { id: "accreditation-badges", label: "Our Accreditations" },
        { id: "school-strengths", label: "School Strengths" }
      ]
    },
    {
      value: "brighton",
      label: "Brighton",
      sections: [
        { id: "brighton-facts", label: "Brighton Facts" }
      ]
    },
    {
      value: "travel",
      label: "Travel Journey", 
      sections: [
        { id: "travel-info", label: "Getting Here" }
      ]
    },
    {
      value: "holidays",
      label: "Holiday Dates",
      sections: [
        { id: "holiday-dates", label: "2025 Dates" }
      ]
    },
    {
      value: "faq",
      label: "FAQ",
      sections: [
        { id: "faq-section", label: "Common Questions" }
      ]
    },
    {
      value: "more",
      label: "More",
      sections: [
        { id: "price-calculator", label: "Price Calculator" },
        { id: "ready-to-begin", label: "Ready to Begin Your Journey" },
        { id: "testimonials", label: "Testimonials" },
        { id: "course-times", label: "Course Times" },
        { id: "get-in-touch", label: "Get In Touch" },
        { id: "kinetic-sentence", label: "Kinetic Sentence Composer" }
      ]
    }
  ];

  const handleSectionClick = (tabValue: string, sectionId: string) => {
    onTabChange(tabValue);
    // Small delay to ensure tab content is rendered before scrolling
    setTimeout(() => {
      onSectionScroll(sectionId);
    }, 100);
  };

  return (
    <div className="flex flex-wrap gap-2 mb-8 justify-center">
      {navigationItems.map((item) => (
        <DropdownMenu key={item.value}>
          <DropdownMenuTrigger asChild>
            <Button 
              variant={activeTab === item.value ? "default" : "outline"}
              className="flex items-center gap-2 text-xs lg:text-sm"
            >
              {item.label}
              <ChevronDown className="w-3 h-3" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="bg-background/95 backdrop-blur-sm border border-border/50 shadow-lg">
            <DropdownMenuItem 
              onClick={() => onTabChange(item.value)}
              className="font-medium"
            >
              View {item.label} Overview
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            {item.sections.map((section) => (
              <DropdownMenuItem 
                key={section.id}
                onClick={() => handleSectionClick(item.value, section.id)}
                className="text-sm"
              >
                {section.label}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      ))}
    </div>
  );
};

export default SchoolInfoNavigation;