
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { Calendar as CalendarIcon, Clock, MapPin, Phone, Check } from "lucide-react";
import { format } from "date-fns";
import { toast } from "sonner";

const CustomerSection = () => {
  const [date, setDate] = useState<Date>();
  const [bookingSubmitted, setBookingSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Booking request submitted successfully!", {
      description: "A driver will be assigned to you shortly.",
    });
    setBookingSubmitted(true);
  };

  return (
    <section id="customers" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Need a Ride Home?</h2>
          <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
            Had a few drinks? Don't risk it. Our professional drivers will get you and your car home safely.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">How It Works</h3>
            
            <div className="space-y-4">
              <div className="flex gap-4 items-start">
                <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center shrink-0">
                  1
                </div>
                <div>
                  <h4 className="font-medium text-lg">Book a Driver</h4>
                  <p className="text-gray-600">Fill out our simple booking form with your location and time.</p>
                </div>
              </div>
              
              <div className="flex gap-4 items-start">
                <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center shrink-0">
                  2
                </div>
                <div>
                  <h4 className="font-medium text-lg">Driver Arrives</h4>
                  <p className="text-gray-600">A vetted, professional driver will arrive at your location.</p>
                </div>
              </div>
              
              <div className="flex gap-4 items-start">
                <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center shrink-0">
                  3
                </div>
                <div>
                  <h4 className="font-medium text-lg">Get Home Safe</h4>
                  <p className="text-gray-600">The driver takes you home in your own car, ensuring both you and your vehicle arrive safely.</p>
                </div>
              </div>
            </div>
            
            <Card className="card-hover border-none shadow-lg">
              <CardHeader className="bg-primary text-white rounded-t-lg">
                <CardTitle>Premium Package</CardTitle>
                <CardDescription className="text-white/80">Our most popular option</CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-secondary" />
                    <span>Licensed & insured drivers</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-secondary" />
                    <span>Drive you in your own car</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-secondary" />
                    <span>Available 24/7</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-secondary" />
                    <span>Contactless payment</span>
                  </li>
                </ul>
                <div className="mt-6">
                  <p className="text-2xl font-bold">$35<span className="text-sm font-normal text-gray-500"> base fare</span></p>
                  <p className="text-sm text-gray-500">+$2.50 per mile</p>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div>
            <Card className="border-none shadow-lg">
              <CardHeader>
                <CardTitle>Book a Driver Now</CardTitle>
                <CardDescription>Fill out the form below to request a driver</CardDescription>
              </CardHeader>
              <CardContent>
                {bookingSubmitted ? (
                  <div className="text-center py-6 space-y-4">
                    <div className="mx-auto bg-green-100 text-green-800 rounded-full w-16 h-16 flex items-center justify-center">
                      <Check className="h-8 w-8" />
                    </div>
                    <h3 className="text-xl font-medium">Booking Confirmed!</h3>
                    <p className="text-gray-600">Your driver will be assigned shortly. You'll receive a confirmation text message with driver details.</p>
                    <Button 
                      className="mt-4" 
                      variant="outline"
                      onClick={() => setBookingSubmitted(false)}
                    >
                      Book Another Ride
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid gap-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="firstName">First Name</Label>
                          <Input id="firstName" placeholder="John" required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="lastName">Last Name</Label>
                          <Input id="lastName" placeholder="Doe" required />
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <div className="flex">
                          <Phone className="h-4 w-4 text-gray-400 absolute mt-3 ml-3" />
                          <Input id="phone" placeholder="(123) 456-7890" className="pl-10" required />
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="pickup">Pickup Location</Label>
                        <div className="flex">
                          <MapPin className="h-4 w-4 text-gray-400 absolute mt-3 ml-3" />
                          <Input id="pickup" placeholder="Enter your current location" className="pl-10" required />
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="destination">Destination</Label>
                        <div className="flex">
                          <MapPin className="h-4 w-4 text-gray-400 absolute mt-3 ml-3" />
                          <Input id="destination" placeholder="Where are you going?" className="pl-10" required />
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label>Pickup Date</Label>
                          <Popover>
                            <PopoverTrigger asChild>
                              <Button
                                variant="outline"
                                className={cn(
                                  "w-full justify-start text-left font-normal",
                                  !date && "text-muted-foreground"
                                )}
                              >
                                <CalendarIcon className="mr-2 h-4 w-4" />
                                {date ? format(date, "PPP") : <span>Pick a date</span>}
                              </Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto p-0 pointer-events-auto">
                              <Calendar
                                mode="single"
                                selected={date}
                                onSelect={setDate}
                                initialFocus
                                className={cn("p-3 pointer-events-auto")}
                              />
                            </PopoverContent>
                          </Popover>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="time">Pickup Time</Label>
                          <div className="flex">
                            <Clock className="h-4 w-4 text-gray-400 absolute mt-3 ml-3" />
                            <Input id="time" type="time" className="pl-10" required />
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <Button type="submit" className="w-full bg-secondary hover:bg-secondary/90 text-white mt-6">
                      Book Your Driver
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerSection;
