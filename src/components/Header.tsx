
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Car, User, Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-40">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Car className="h-6 w-6 text-primary" />
          <h1 className="text-xl font-bold text-primary">Sober Wheels</h1>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#home" className="text-gray-700 hover:text-primary font-medium">Home</a>
          <a href="#customers" className="text-gray-700 hover:text-primary font-medium">Customers</a>
          <a href="#drivers" className="text-gray-700 hover:text-primary font-medium">Drivers</a>
          <a href="#safety" className="text-gray-700 hover:text-primary font-medium">Safety</a>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" className="gap-1">
              <User className="h-4 w-4" /> Sign In
            </Button>
            <Button size="sm" className="bg-secondary hover:bg-secondary/90 text-white gap-1">
              <Car className="h-4 w-4" /> Book Now
            </Button>
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-500 hover:text-primary"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t p-4">
          <nav className="flex flex-col space-y-4">
            <a 
              href="#home" 
              className="text-gray-700 hover:text-primary font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </a>
            <a 
              href="#customers" 
              className="text-gray-700 hover:text-primary font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Customers
            </a>
            <a 
              href="#drivers" 
              className="text-gray-700 hover:text-primary font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Drivers
            </a>
            <a 
              href="#safety" 
              className="text-gray-700 hover:text-primary font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Safety
            </a>
            <div className="flex flex-col gap-2 pt-2">
              <Button variant="outline" size="sm" className="gap-1 justify-center">
                <User className="h-4 w-4" /> Sign In
              </Button>
              <Button size="sm" className="bg-secondary hover:bg-secondary/90 text-white gap-1 justify-center">
                <Car className="h-4 w-4" /> Book Now
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
