
import React from 'react';
import { Button } from "@/components/ui/button";
import { Car, User } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="hero-gradient text-white py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Get Home Safe with Sober Wheels
            </h1>
            <p className="text-lg md:text-xl opacity-90">
              Need a ride when you've had a few too many? Our professional drivers 
              will get you and your vehicle home safely.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white gap-2">
                <Car className="h-5 w-5" />
                Book a Ride Now
              </Button>
              <Button variant="outline" size="lg" className="bg-white/10 hover:bg-white/20 backdrop-blur text-white border-white/20 gap-2">
                <User className="h-5 w-5" />
                Become a Driver
              </Button>
            </div>
          </div>
          <div className="hidden md:flex justify-center">
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-secondary/30 rounded-full blur-2xl"></div>
              <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-primary/30 rounded-full blur-2xl"></div>
              <div className="bg-white/10 backdrop-blur p-6 rounded-xl border border-white/20 shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1611407935667-a8adc81bb6f7?q=80&w=500&auto=format&fit=crop" 
                  alt="Designated driver service" 
                  className="w-full rounded-lg object-cover h-[300px]"
                />
                <div className="flex justify-between items-center mt-4 bg-white/10 p-3 rounded-lg">
                  <div>
                    <p className="font-medium">Next available driver</p>
                    <p className="text-white/70 text-sm">5 min away</p>
                  </div>
                  <Button size="sm" className="bg-secondary text-white">Book</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
