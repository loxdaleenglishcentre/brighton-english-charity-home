import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MessageCircle, Calendar, Mail, CheckCircle } from "lucide-react";

const SecurePlaceSection = () => {
  return (
    <div className="section-bg-white">
      <div className="container mx-auto px-6 py-16">
        <div className="bg-gray-50 rounded-3xl p-8 lg:p-12 shadow-lg border">
          <div className="grid lg:grid-cols-3 gap-8 items-center">
            
            {/* Left Column - Main Content */}
            <div className="lg:col-span-2">
              <Badge variant="secondary" className="mb-6 bg-yellow-100 text-yellow-800 hover:bg-yellow-200">
                ⭐ Limited Summer Spots
              </Badge>
              
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Secure Your <span className="text-green-600">Place for Summer</span> 2025
              </h2>
              
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Our General English Course runs exclusively during summer months. With limited spots available and high demand from international students, early booking is essential to guarantee your preferred dates.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">Early bird discounts available until March 31st</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">Flexible payment plans accepted</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">Free course placement assessment</span>
                </div>
              </div>
              
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                Enquire Now - Get Started →
              </Button>
            </div>
            
            {/* Right Column - Contact Options */}
            <div className="space-y-4">
              <div className="bg-white rounded-2xl p-6 shadow-md border hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center">
                      <MessageCircle className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Enquire Now</h4>
                      <p className="text-sm text-gray-600">Get instant answers to your questions</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm" className="text-xs">
                    Start Chat
                  </Button>
                </div>
              </div>
              
              <div className="bg-white rounded-2xl p-6 shadow-md border hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center">
                      <Calendar className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Book Consultation</h4>
                      <p className="text-sm text-gray-600">Free 15-minute consultation call</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm" className="text-xs">
                    Schedule Call
                  </Button>
                </div>
              </div>
              
              <div className="bg-white rounded-2xl p-6 shadow-md border hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Email Us</h4>
                      <p className="text-sm text-gray-600">Detailed course information sent to you</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm" className="text-xs">
                    Send Email
                  </Button>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecurePlaceSection;