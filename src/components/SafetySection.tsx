
import React from 'react';
import { Shield, Users, CheckCircle, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const SafetySection = () => {
  return (
    <section id="safety" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Your Safety is Our Priority</h2>
          <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
            Every driver is thoroughly vetted and our service is designed with your safety in mind.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <Shield className="h-12 w-12 text-primary shrink-0" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Verified Drivers</h3>
                <p className="text-gray-600">
                  Every driver undergoes a rigorous background check, driving record verification, and in-person interview. We only work with the most reliable professionals.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <Users className="h-12 w-12 text-primary shrink-0" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Share Your Trip</h3>
                <p className="text-gray-600">
                  Easily share your trip details and driver information with trusted friends or family. They can track your journey until you arrive safely at your destination.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <CheckCircle className="h-12 w-12 text-primary shrink-0" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Comprehensive Insurance</h3>
                <p className="text-gray-600">
                  Our service is fully insured, covering both you and your vehicle during the entire journey, giving you peace of mind.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <Clock className="h-12 w-12 text-primary shrink-0" />
              <div>
                <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
                <p className="text-gray-600">
                  Our customer support team is available 24/7 to assist with any questions or concerns you may have before, during, or after your trip.
                </p>
              </div>
            </div>

            <div className="pt-4">
              <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white">
                Book a Safe Ride Home
              </Button>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="aspect-square bg-white rounded-2xl overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1556122071-e404cb0f88fa?q=80&w=500&auto=format&fit=crop"
                  alt="Driver verification process" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-square bg-white rounded-2xl overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?q=80&w=500&auto=format&fit=crop"
                  alt="24/7 support" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="space-y-4 mt-8">
              <div className="aspect-square bg-white rounded-2xl overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=500&auto=format&fit=crop"
                  alt="Customer safety" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-square bg-white rounded-2xl overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1637763723578-79a4ca9225f7?q=80&w=500&auto=format&fit=crop"
                  alt="Insurance coverage" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-20 bg-white p-8 rounded-2xl shadow-lg">
          <h3 className="text-2xl font-bold mb-6 text-center">Frequently Asked Questions</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-lg mb-2">How does the service work?</h4>
              <p className="text-gray-600">
                Our driver arrives at your location, drives you home in your own car, and then uses a separate transportation method to leave. This ensures both you and your vehicle get home safely.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-2">How much does it cost?</h4>
              <p className="text-gray-600">
                Our base rate is $35 plus $2.50 per mile. You'll receive the exact price before confirming your booking.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-2">How quickly can a driver arrive?</h4>
              <p className="text-gray-600">
                In busy areas, drivers typically arrive within 15-30 minutes. In less populated areas, it may take up to 45 minutes.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-2">Can I schedule a pickup in advance?</h4>
              <p className="text-gray-600">
                Absolutely! You can schedule a pickup up to 7 days in advance to ensure you have a driver ready when you need one.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SafetySection;
