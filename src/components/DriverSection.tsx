
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Clock, DollarSign, ShieldCheck, Star } from "lucide-react";

const DriverSection = () => {
  return (
    <section id="drivers" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Drive With Us</h2>
          <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
            Join our team of professional drivers and earn money on your own schedule.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="order-2 lg:order-1">
            <div className="space-y-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="card-hover border-none shadow-md">
                  <CardContent className="pt-6">
                    <DollarSign className="h-10 w-10 text-secondary mb-4" />
                    <h3 className="text-xl font-medium mb-2">Competitive Pay</h3>
                    <p className="text-gray-600">Earn up to $25/hour plus tips with weekly payouts.</p>
                  </CardContent>
                </Card>
                
                <Card className="card-hover border-none shadow-md">
                  <CardContent className="pt-6">
                    <Clock className="h-10 w-10 text-secondary mb-4" />
                    <h3 className="text-xl font-medium mb-2">Flexible Hours</h3>
                    <p className="text-gray-600">Work when you want. Set your own schedule and availability.</p>
                  </CardContent>
                </Card>
                
                <Card className="card-hover border-none shadow-md">
                  <CardContent className="pt-6">
                    <ShieldCheck className="h-10 w-10 text-secondary mb-4" />
                    <h3 className="text-xl font-medium mb-2">Safety First</h3>
                    <p className="text-gray-600">Comprehensive insurance coverage while on the job.</p>
                  </CardContent>
                </Card>
                
                <Card className="card-hover border-none shadow-md">
                  <CardContent className="pt-6">
                    <Star className="h-10 w-10 text-secondary mb-4" />
                    <h3 className="text-xl font-medium mb-2">Rewards Program</h3>
                    <p className="text-gray-600">Earn bonuses for consistently high ratings and performance.</p>
                  </CardContent>
                </Card>
              </div>
              
              <div className="flex justify-center lg:justify-start">
                <Button size="lg" className="bg-primary hover:bg-primary/90">Apply to Drive</Button>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-medium mb-4">Requirements to Drive</h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-secondary shrink-0" />
                    <span>21+ years of age</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-secondary shrink-0" />
                    <span>Valid driver's license with at least 3 years of driving experience</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-secondary shrink-0" />
                    <span>Clean driving record</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-secondary shrink-0" />
                    <span>Pass our background check</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-secondary shrink-0" />
                    <span>Smartphone with iOS or Android</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <Card className="border-none shadow-xl overflow-hidden">
              <CardHeader className="bg-primary text-white">
                <CardTitle>Driver Dashboard Preview</CardTitle>
                <CardDescription className="text-white/80">See what it's like to drive with Sober Wheels</CardDescription>
              </CardHeader>
              <CardContent className="p-0">
                <img 
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1500&auto=format&fit=crop"
                  alt="Driver app dashboard" 
                  className="w-full h-auto object-cover"
                />
                <div className="p-6 space-y-4">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="font-medium">Today's Earnings</p>
                      <p className="text-2xl font-bold">$124.75</p>
                    </div>
                    <div>
                      <p className="font-medium">Completed Rides</p>
                      <p className="text-2xl font-bold">6</p>
                    </div>
                  </div>
                  
                  <div className="bg-gray-100 p-4 rounded-lg">
                    <p className="font-medium mb-2">Next Scheduled Pickup</p>
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="text-sm text-gray-600">8:30 PM</p>
                        <p className="font-medium">Downtown Bar District</p>
                      </div>
                      <Button size="sm" variant="outline">View Details</Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DriverSection;
