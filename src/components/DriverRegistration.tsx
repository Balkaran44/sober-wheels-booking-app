
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";
import { toast } from "sonner";
import { User, Phone, Car, Check } from "lucide-react";

const DriverRegistration = () => {
  const [step, setStep] = useState(1);
  const [registrationComplete, setRegistrationComplete] = useState(false);

  const handleNextStep = () => {
    if (step < 3) {
      setStep(step + 1);
      window.scrollTo(0, 0);
    } else {
      setRegistrationComplete(true);
      toast.success("Application submitted successfully!", {
        description: "We'll review your information and be in touch soon.",
      });
    }
  };

  const handlePrevStep = () => {
    if (step > 1) {
      setStep(step - 1);
      window.scrollTo(0, 0);
    }
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900">Apply to Drive With Us</h2>
          <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
            Join our team of professional drivers and start earning on your own schedule.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          {!registrationComplete ? (
            <Card className="border-none shadow-lg">
              <CardHeader>
                <div className="flex justify-center mb-6">
                  <div className="flex items-center">
                    <div className={`rounded-full w-8 h-8 flex items-center justify-center ${step >= 1 ? 'bg-primary text-white' : 'bg-gray-200 text-gray-500'}`}>
                      1
                    </div>
                    <div className={`h-1 w-16 ${step > 1 ? 'bg-primary' : 'bg-gray-200'}`}></div>
                    <div className={`rounded-full w-8 h-8 flex items-center justify-center ${step >= 2 ? 'bg-primary text-white' : 'bg-gray-200 text-gray-500'}`}>
                      2
                    </div>
                    <div className={`h-1 w-16 ${step > 2 ? 'bg-primary' : 'bg-gray-200'}`}></div>
                    <div className={`rounded-full w-8 h-8 flex items-center justify-center ${step >= 3 ? 'bg-primary text-white' : 'bg-gray-200 text-gray-500'}`}>
                      3
                    </div>
                  </div>
                </div>
                <CardTitle>
                  {step === 1 && "Personal Information"}
                  {step === 2 && "Driving Experience"}
                  {step === 3 && "Vehicle & Availability"}
                </CardTitle>
                <CardDescription>
                  {step === 1 && "Tell us about yourself"}
                  {step === 2 && "Tell us about your driving history"}
                  {step === 3 && "Tell us about your vehicle and when you can work"}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                {step === 1 && (
                  <form className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name</Label>
                        <div className="flex">
                          <User className="h-4 w-4 text-gray-400 absolute mt-3 ml-3" />
                          <Input id="firstName" className="pl-10" placeholder="John" required />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input id="lastName" placeholder="Doe" required />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="johndoe@example.com" required />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <div className="flex">
                        <Phone className="h-4 w-4 text-gray-400 absolute mt-3 ml-3" />
                        <Input id="phone" className="pl-10" placeholder="(123) 456-7890" required />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="address">Address</Label>
                      <Input id="address" placeholder="123 Main St" required />
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="city">City</Label>
                        <Input id="city" placeholder="New York" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="zip">ZIP Code</Label>
                        <Input id="zip" placeholder="10001" required />
                      </div>
                    </div>
                  </form>
                )}
                
                {step === 2 && (
                  <form className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="license">Driver's License Number</Label>
                      <Input id="license" placeholder="DL12345678" required />
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="state">License State</Label>
                        <Input id="state" placeholder="NY" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="expiration">Expiration Date</Label>
                        <Input id="expiration" type="date" required />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="experience">Years of Driving Experience</Label>
                      <Input id="experience" type="number" min="3" placeholder="5" required />
                    </div>
                    
                    <Separator className="my-4" />
                    
                    <div className="space-y-4">
                      <p className="font-medium">Have you been involved in any accidents in the last 3 years?</p>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="accidents-no" />
                        <Label htmlFor="accidents-no" className="font-normal">No</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="accidents-yes" />
                        <Label htmlFor="accidents-yes" className="font-normal">Yes (please provide details below)</Label>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="accident-details">Accident Details (if applicable)</Label>
                        <Input id="accident-details" placeholder="Please describe any accidents" />
                      </div>
                    </div>
                  </form>
                )}
                
                {step === 3 && (
                  <form className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="vehicle-make">Vehicle Make</Label>
                      <div className="flex">
                        <Car className="h-4 w-4 text-gray-400 absolute mt-3 ml-3" />
                        <Input id="vehicle-make" className="pl-10" placeholder="Toyota" required />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="vehicle-model">Vehicle Model</Label>
                        <Input id="vehicle-model" placeholder="Camry" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="vehicle-year">Year</Label>
                        <Input id="vehicle-year" placeholder="2018" required />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="vehicle-insurance">Insurance Provider</Label>
                      <Input id="vehicle-insurance" placeholder="State Farm" required />
                    </div>
                    
                    <Separator className="my-4" />
                    
                    <div className="space-y-3">
                      <p className="font-medium">Availability</p>
                      <p className="text-sm text-gray-600">Please check the days you are available to work</p>
                      
                      <div className="grid grid-cols-2 gap-2">
                        <div className="flex items-center space-x-2">
                          <Checkbox id="monday" />
                          <Label htmlFor="monday" className="font-normal">Monday</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="tuesday" />
                          <Label htmlFor="tuesday" className="font-normal">Tuesday</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="wednesday" />
                          <Label htmlFor="wednesday" className="font-normal">Wednesday</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="thursday" />
                          <Label htmlFor="thursday" className="font-normal">Thursday</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="friday" />
                          <Label htmlFor="friday" className="font-normal">Friday</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="saturday" />
                          <Label htmlFor="saturday" className="font-normal">Saturday</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="sunday" />
                          <Label htmlFor="sunday" className="font-normal">Sunday</Label>
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <p className="font-medium">Preferred working hours</p>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="start-time">Start Time</Label>
                          <Input id="start-time" type="time" required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="end-time">End Time</Label>
                          <Input id="end-time" type="time" required />
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-2 pt-4">
                      <Checkbox id="terms" required />
                      <Label htmlFor="terms" className="text-sm font-normal">
                        I agree to the <a href="#" className="text-primary hover:underline">terms and conditions</a> and background check
                      </Label>
                    </div>
                  </form>
                )}
              </CardContent>
              
              <CardFooter className="flex justify-between">
                {step > 1 && (
                  <Button variant="outline" onClick={handlePrevStep}>
                    Back
                  </Button>
                )}
                {step === 1 && <div></div>}
                <Button onClick={handleNextStep}>
                  {step < 3 ? "Continue" : "Submit Application"}
                </Button>
              </CardFooter>
            </Card>
          ) : (
            <Card className="border-none shadow-lg">
              <CardContent className="pt-10 pb-10 text-center">
                <div className="mx-auto bg-green-100 text-green-800 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                  <Check className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Application Submitted!</h3>
                <p className="text-gray-600 mb-6">
                  Thank you for applying to be a Sober Wheels driver. Our team will review your application and be in touch within 1-2 business days.
                </p>
                <div className="space-y-4">
                  <p className="font-medium">What happens next?</p>
                  <ol className="text-left space-y-3">
                    <li className="flex items-start gap-2">
                      <span className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center shrink-0 mt-0.5">1</span>
                      <span>We'll review your application and driving history</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center shrink-0 mt-0.5">2</span>
                      <span>You'll complete a brief phone interview with our team</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center shrink-0 mt-0.5">3</span>
                      <span>Complete our online driver orientation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center shrink-0 mt-0.5">4</span>
                      <span>Begin accepting ride requests!</span>
                    </li>
                  </ol>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </section>
  );
};

export default DriverRegistration;
