import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

// Import event images
import brightonTourImg from "@/assets/events/brighton-tour.jpg";
import bowlingImg from "@/assets/events/bowling.jpg";
import karaokeImg from "@/assets/events/karaoke-dance.jpg";
import cookingImg from "@/assets/events/cooking-class.jpg";
import danceImg from "@/assets/events/dance-session.jpg";
import regentImg from "@/assets/events/regent-class.jpg";
import bakingImg from "@/assets/events/baking-session.jpg";
import theatreImg from "@/assets/events/theatre.jpg";
import londonImg from "@/assets/events/london-trip.jpg";
import stonehengeImg from "@/assets/events/stonehenge.jpg";

const InteractiveSocialCalendar = () => {
  const [selectedDate, setSelectedDate] = useState<number | null>(null);
  
  // Highlighted dates with events
  const eventDates = [6, 7, 8, 9, 11, 12, 15, 18, 22, 25];
  
  // Calendar days for the month
  const calendarDays = Array.from({ length: 31 }, (_, i) => i + 1);
  
  // Sample events for highlighted dates with images
  const events: Record<number, { title: string; time: string; description: string; image: string }[]> = {
    6: [{ title: "Brighton Tour", time: "13:30-16:30", description: "Explore Brighton's main attractions", image: brightonTourImg }],
    7: [{ title: "Bowling", time: "13:30-15:00", description: "Fun bowling session with fellow students", image: bowlingImg }],
    8: [{ title: "Karaoke Night", time: "19:00-20:30", description: "Sing your favorite songs and dance", image: karaokeImg }],
    9: [{ title: "Cooking Class", time: "19:00-21:30", description: "Learn to cook traditional British dishes", image: cookingImg }],
    11: [{ title: "Dance Session", time: "18:00-19:00", description: "Learn popular dance styles", image: danceImg }],
    12: [{ title: "Regent Class Event", time: "19:00-21:00", description: "Special activity for Regent class students", image: regentImg }],
    15: [{ title: "Baking Session", time: "18:00-19:00", description: "Learn to bake traditional English treats", image: bakingImg }],
    18: [{ title: "Theatre Visit", time: "19:00-22:00", description: "Experience local theatre and culture", image: theatreImg }],
    22: [{ title: "London Trip", time: "09:00-18:00", description: "Explore England's capital city", image: londonImg }],
    25: [{ title: "Stonehenge Tour", time: "08:30-19:30", description: "Full day trip to historic sites", image: stonehengeImg }]
  };

  const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Header matching the screenshot */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-green-700">
            Example Social Programme
          </h2>
          <div className="flex justify-center mb-6">
            <img 
              src="/lovable-uploads/a8213d33-4fd2-4825-a74a-713837251096.png" 
              alt="Calendar icon showing August 2" 
              className="w-16 h-16"
            />
          </div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Click on highlighted dates to see event details and images
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
          {/* Calendar Section */}
          <div className="space-y-6">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold mb-2 text-gray-800">Example Month</h3>
              <p className="text-gray-600">Typical social programme calendar</p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              {/* Calendar Header */}
              <div className="grid grid-cols-7 gap-2 mb-4">
                {weekDays.map(day => (
                  <div key={day} className="text-center text-sm font-medium text-gray-600 py-2">
                    {day}
                  </div>
                ))}
              </div>
              
              {/* Calendar Grid */}
              <div className="grid grid-cols-7 gap-2">
                {calendarDays.map(day => {
                  const hasEvent = eventDates.includes(day);
                  const isSelected = selectedDate === day;
                  
                  return (
                    <button
                      key={day}
                      onClick={() => setSelectedDate(hasEvent ? day : null)}
                      className={`
                        aspect-square flex items-center justify-center text-sm font-medium rounded-lg transition-all duration-200
                        ${hasEvent 
                          ? 'bg-gray-800 text-white hover:bg-gray-700 cursor-pointer shadow-md' 
                          : 'text-gray-400 hover:bg-gray-200 cursor-default'
                        }
                        ${isSelected ? 'ring-2 ring-blue-500 ring-offset-2' : ''}
                      `}
                      disabled={!hasEvent}
                    >
                      {day}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right side content */}
          <div className="space-y-6">
            {selectedDate && events[selectedDate] ? (
              <div className="bg-white p-6 rounded-lg border shadow-sm">
                <div className="text-center mb-6">
                  <Badge className="mb-3 bg-blue-100 text-blue-800 border-blue-200">Day {selectedDate} Events</Badge>
                  <h4 className="text-xl font-bold mb-4">Event Details</h4>
                </div>
                
                {/* Event Image */}
                <div className="mb-6">
                  <img 
                    src={events[selectedDate][0].image}
                    alt={events[selectedDate][0].title}
                    className="w-full h-48 object-cover rounded-lg shadow-md"
                  />
                </div>
                
                <div className="space-y-4">
                  {events[selectedDate].map((event, index) => (
                    <div key={index} className="p-4 bg-gray-50 rounded-lg">
                      <h5 className="font-semibold text-lg mb-1">{event.title}</h5>
                      <p className="text-sm text-gray-600 mb-2">{event.time}</p>
                      <p className="text-sm text-gray-700">{event.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="space-y-6">
                {/* Hero Image - using a cleaner image of just people jumping */}
                <div className="relative rounded-2xl overflow-hidden shadow-xl">
                  <img 
                    src="/lovable-uploads/37d26386-9dea-4577-b213-c41e19288691.png"
                    alt="Students celebrating and jumping on Brighton beach"
                    className="w-full h-64 lg:h-80 object-cover"
                  />
                </div>
                
                {/* Call to Action matching screenshot */}
                <div className="text-center">
                  <h4 className="text-2xl font-bold mb-4 text-gray-800">Select a day to view events</h4>
                  <p className="text-lg text-gray-600">
                    Join our amazing social programme and make lifelong memories!
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveSocialCalendar;