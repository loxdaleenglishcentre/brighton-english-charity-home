import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarDays } from "lucide-react";
import { useState } from "react";
import YearToggle from "@/components/YearToggle";

const HolidayDates2025 = () => {
  const [year, setYear] = useState<2025 | 2026>(2025);

  const holidayDates: Record<2025 | 2026, { label: string; note: string }[]> = {
    2025: [
      { label: "Fri 18 Apr", note: "Good Friday (Bank Holiday)" },
      { label: "21–25 Apr", note: "Easter holiday (school closed)" },
      { label: "Fri 16 May", note: "London School trip" },
      { label: "Mon 5 May", note: "Bank Holiday" },
      { label: "Mon 26 May", note: "Bank Holiday" },
      { label: "Mon 25 Aug", note: "Bank Holiday" },
      { label: "Fri 28 Nov", note: "London School trip" },
      { label: "Mon 1 Dec", note: "School holiday" },
    ],
    2026: [
      { label: "Fri 18 Apr", note: "Good Friday (Bank Holiday)" },
      { label: "21–25 Apr", note: "Easter holiday (school closed)" },
      { label: "Fri 16 May", note: "London School trip" },
      { label: "Mon 5 May", note: "Bank Holiday" },
      { label: "Mon 26 May", note: "Bank Holiday" },
      { label: "Mon 25 Aug", note: "Bank Holiday" },
      { label: "Fri 28 Nov", note: "London School trip" },
      { label: "Mon 1 Dec", note: "School holiday" },
    ],
  };

  return (
    <section id="holiday-dates-2025" aria-labelledby="holiday-dates-title" className="py-12 relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-8">
        <header className="mb-10 text-center">
          {/* 3D Calendar Icon */}
          <div className="mb-6 flex justify-center">
            <div className="calendar-container">
              <img 
                src="/lovable-uploads/56397cfc-a907-4d2d-85ff-8d70b929de24.png" 
                alt="3D Calendar Icon" 
                className="calendar-icon w-20 h-20 object-contain"
              />
            </div>
          </div>
          
          <Badge className="mb-4 bg-gradient-primary text-white border-0">{year}</Badge>
          <h2 id="holiday-dates-title" className="text-3xl lg:text-4xl font-bold text-gradient-green-metallic">School Holiday Dates {year}</h2>
          <p className="mt-2 text-muted-foreground max-w-2xl mx-auto">These are the dates when the school will be closed.</p>
          <div className="mt-4 flex justify-center">
            <YearToggle year={year} onYearChange={setYear} aria-label="Select year for holiday dates" />
          </div>
        </header>

        <div className="max-w-4xl mx-auto">
          <Card className="glass border-0 shadow-xl relative overflow-hidden">
            {/* Background Calendar Image */}
            <div 
              className="absolute inset-0 opacity-5"
              style={{
                backgroundImage: `url(/lovable-uploads/28aad2a0-18f4-4040-9538-7cf48f6af959.png)`,
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center'
              }}
            />
            <CardContent className="p-6 lg:p-8 relative z-10">
              <div className="text-center">
                <ul className="grid gap-4 sm:grid-cols-2 text-left max-w-3xl mx-auto">
                  {holidayDates[year].map((d, idx) => (
                    <li key={idx} className="flex items-start gap-3 p-4 rounded-lg bg-background/80 backdrop-blur-sm shadow-sm border border-border/30">
                      <CalendarDays className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <span className="font-medium text-foreground">{d.label}:</span>{" "}
                        <span className="text-muted-foreground">{d.note}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
        
        {/* 3D Calendar Icon Styles */}
        <style>{`
          .calendar-container {
            perspective: 1000px;
            display: inline-block;
          }
          
          .calendar-icon {
            transition: transform 0.3s ease, filter 0.3s ease;
            filter: drop-shadow(0 12px 24px rgba(107, 114, 128, 0.3));
          }
          
          .calendar-container:hover .calendar-icon {
            transform: scale(1.1) rotateY(5deg);
            filter: drop-shadow(0 16px 32px rgba(107, 114, 128, 0.4));
          }
        `}</style>
      </div>
      
      {/* White spacer */}
      <div className="section-spacer"></div>
    </section>
  );
};

export default HolidayDates2025;