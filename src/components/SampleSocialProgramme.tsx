import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, MapPin, Users, Star, Camera, Music, Utensils } from "lucide-react";

// Use uploaded images for events
const bowlingImage = "/lovable-uploads/1e47e1d5-f045-4ebe-a39e-4665ea55a700.png";
const brightonTourImage = "/lovable-uploads/235af1d3-4ed1-4b55-95d9-bbfd898626d8.png";
const karaokeDanceImage = "/lovable-uploads/37506b5b-a6c5-42f9-b42a-c1afa7a6ba3f.png";
const cookingImage = "/lovable-uploads/3933214a-7cda-47f0-90c9-47fe7f40bcb5.png";
const londonTripImage = "/lovable-uploads/4d70188d-5f9f-4a85-a941-be526438046d.png";
const stonehenge = "/lovable-uploads/9a9b973f-7604-41a4-a640-e4db407eaa1f.png";
const theatreImage = "/lovable-uploads/9de526c9-99d1-4966-a67e-9b061db86dff.png";
const fishChipsImage = "/lovable-uploads/bb4ca7e8-905a-4684-a834-0bac97a6d8be.png";
const windsorCastleImage = "/lovable-uploads/bd6a9da6-9fb7-465c-8f2e-ccbd6aee23f2.png";
const canterburyCathedralImage = "/lovable-uploads/c15112bf-f2d4-44e2-9c2d-8b6e68bb9e0b.png";

const SampleSocialProgramme = () => {
  const weeklyActivities = [
    {
      day: "Monday",
      activities: [
        {
          time: "13:30 to 16:30",
          title: "Brighton Orientation Tour",
          description: "Explore Brighton's main attractions and landmarks",
          price: "Free",
          icon: MapPin,
          category: "Tour",
          image: brightonTourImage
        },
        {
          time: "14:15 to 15:45",
          title: "Art & Crafts Workshop",
          description: "Creative activities and team building",
          price: "£5",
          icon: Star,
          category: "Workshop",
          image: theatreImage
        }
      ]
    },
    {
      day: "Tuesday", 
      activities: [
        {
          time: "13:30 to 15:00",
          title: "Bowling at Brighton",
          description: "Fun bowling session with fellow students",
          price: "£15",
          icon: Users,
          category: "Sports",
          image: bowlingImage
        },
        {
          time: "19:00 to 21:00",
          title: "Social Evening",
          description: "Meet other students and practice English",
          price: "Free",
          icon: Music,
          category: "Social",
          image: fishChipsImage
        }
      ]
    },
    {
      day: "Wednesday",
      activities: [
        {
          time: "19:00 to 20:30",
          title: "Karaoke & Let's Dance",
          description: "Sing your favorite songs and dance",
          price: "Free",
          icon: Music,
          category: "Entertainment",
          image: karaokeDanceImage
        },
        {
          time: "19:00 to 21:30",
          title: "Cooking Evening",
          description: "Learn to cook traditional British dishes",
          price: "£8",
          icon: Utensils,
          category: "Cultural",
          image: cookingImage
        }
      ]
    },
    {
      day: "Thursday",
      activities: [
        {
          time: "18:00 to 19:00",
          title: "Let's Dance Session",
          description: "Learn popular dance styles",
          price: "Free",
          icon: Music,
          category: "Entertainment",
          image: windsorCastleImage
        },
        {
          time: "19:00 to 21:00",
          title: "Regent Class Event",
          description: "Special activity for Regent class students",
          price: "£10",
          icon: Star,
          category: "Class Event",
          image: canterburyCathedralImage
        }
      ]
    },
    {
      day: "Friday",
      activities: [
        {
          time: "18:00 to 19:00",
          title: "OR Baking Session",
          description: "Learn to bake traditional English treats",
          price: "Free",
          icon: Utensils,
          category: "Cultural",
          image: cookingImage
        },
        {
          time: "19:00 to 21:30",
          title: "Karaoke Evening",
          description: "Sing and have fun with other students",
          price: "£5",
          icon: Music,
          category: "Entertainment",
          image: karaokeDanceImage
        }
      ]
    },
    {
      day: "Weekend",
      activities: [
        {
          time: "08:30 to 19:30",
          title: "Salisbury & Stonehenge",
          description: "Full day trip to historic sites",
          price: "£70",
          icon: Camera,
          category: "Excursion",
          image: stonehenge
        },
        {
          time: "09:00 to 18:00",
          title: "London Day Trip",
          description: "Explore England's capital city",
          price: "£35",
          icon: Camera,
          category: "Excursion",
          image: londonTripImage
        }
      ]
    }
  ];

  const getCategoryColor = (category: string) => {
    const colors = {
      "Tour": "bg-blue-500/10 text-blue-600 border-blue-200",
      "Workshop": "bg-purple-500/10 text-purple-600 border-purple-200",
      "Sports": "bg-green-500/10 text-green-600 border-green-200",
      "Social": "bg-orange-500/10 text-orange-600 border-orange-200",
      "Entertainment": "bg-pink-500/10 text-pink-600 border-pink-200",
      "Cultural": "bg-amber-500/10 text-amber-600 border-amber-200",
      "Class Event": "bg-indigo-500/10 text-indigo-600 border-indigo-200",
      "Excursion": "bg-red-500/10 text-red-600 border-red-200"
    };
    return colors[category as keyof typeof colors] || "bg-gray-500/10 text-gray-600 border-gray-200";
  };

  return (
    <section className="py-16 bg-gradient-to-br from-background via-primary/5 to-secondary/10">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-primary/10 backdrop-blur-sm rounded-full px-6 py-2 mb-6">
            <img 
              src="/lovable-uploads/011eb42c-c090-499f-a365-820984aa1dd9.png" 
              alt="Calendar icon" 
              className="w-5 h-5"
              onLoad={() => console.log("Calendar icon loaded successfully")}
              onError={(e) => console.error("Calendar icon failed to load", e)}
            />
            <span className="text-sm font-semibold text-primary">Sample Social Programme</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary via-primary to-secondary bg-clip-text text-transparent">
            Your Week at Loxdale
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Experience Brighton's culture while practicing English with students from around the world. 
            All activities include language support and cultural immersion opportunities.
          </p>
        </div>

        {/* Important Notice */}
        <Card className="mb-12 border-amber-200 bg-amber-50/50 backdrop-blur-sm">
          <CardContent className="p-6">
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-amber-500 mt-2 flex-shrink-0"></div>
              <div className="space-y-2">
                <p className="text-sm font-medium text-amber-800">
                  <strong>Important:</strong> Activities & timings are subject to change if necessary (weather, bookings).
                </p>
                <p className="text-sm text-amber-700">
                  • We normally need 10 people to run a trip and 6/8 people to run an activity<br/>
                  • A member of staff will be on these activities<br/>
                  • If you sign up for an activity, you must pay for it, even if you don't come
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Weekly Schedule */}
        <div className="grid gap-8 md:gap-12">
          {weeklyActivities.map((dayData, dayIndex) => (
            <div key={dayData.day} className="relative">
              {/* Day Header */}
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-gradient-to-r from-primary to-secondary text-white rounded-xl px-6 py-3 shadow-lg">
                  <h3 className="font-bold text-lg">{dayData.day}</h3>
                </div>
                <div className="h-px bg-gradient-to-r from-primary/20 to-transparent flex-1"></div>
              </div>

              {/* Activities Grid */}
              <div className="grid md:grid-cols-2 gap-6">
                {dayData.activities.map((activity, activityIndex) => {
                  const IconComponent = activity.icon;
                  return (
                    <Card key={activityIndex} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-card/80 backdrop-blur-sm border-border/50 overflow-hidden">
                      {/* Activity Image */}
                      {activity.image && (
                        <div className="h-32 overflow-hidden">
                          <img 
                            src={activity.image} 
                            alt={activity.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            onLoad={() => console.log(`Image loaded: ${activity.image}`)}
                            onError={(e) => console.error(`Image failed to load: ${activity.image}`, e)}
                          />
                        </div>
                      )}
                      <CardHeader className="pb-3">
                        <div className="flex items-start justify-between">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                              <IconComponent className="w-5 h-5 text-primary" />
                            </div>
                            <div>
                              <CardTitle className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                                {activity.title}
                              </CardTitle>
                              <div className="flex items-center gap-2 mt-1">
                                <Clock className="w-4 h-4 text-muted-foreground" />
                                <span className="text-sm text-muted-foreground font-medium">
                                  {activity.time}
                                </span>
                              </div>
                            </div>
                          </div>
                          <Badge className={`${getCategoryColor(activity.category)} border text-xs font-medium`}>
                            {activity.category}
                          </Badge>
                        </div>
                      </CardHeader>
                      <CardContent className="pt-0">
                        <p className="text-muted-foreground mb-4 leading-relaxed">
                          {activity.description}
                        </p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <span className="text-sm font-medium text-muted-foreground">Price:</span>
                            <span className={`font-bold text-lg ${activity.price === "Free" ? "text-green-600" : "text-primary"}`}>
                              {activity.price}
                            </span>
                          </div>
                          {activity.price !== "Free" && (
                            <Badge variant="outline" className="text-xs">
                              Payment Required
                            </Badge>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <Card className="mt-10 bg-gradient-to-r from-primary/5 to-secondary/5 border-primary/20">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold mb-4 text-foreground">School Open Hours</h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              The school is open until 17:00. You can stay at school to use the garden, 
              computer room, self-study room or classrooms to continue your studies or just to socialise with your friends.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default SampleSocialProgramme;