
import React from 'react';
import { Car, Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Car className="h-6 w-6 text-secondary" />
              <h2 className="text-xl font-bold">Sober Wheels</h2>
            </div>
            <p className="text-gray-400">
              Providing safe rides home since 2020. Our mission is to reduce drunk driving incidents and keep everyone safe on the road.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="hover:text-secondary transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-secondary transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="hover:text-secondary transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
              <li><a href="#customers" className="text-gray-400 hover:text-white transition-colors">Book a Ride</a></li>
              <li><a href="#drivers" className="text-gray-400 hover:text-white transition-colors">Become a Driver</a></li>
              <li><a href="#safety" className="text-gray-400 hover:text-white transition-colors">Safety</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Support</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Help Center</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contact Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">FAQ</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact</h3>
            <address className="text-gray-400 not-italic space-y-2">
              <p>1234 Safe Drive Lane</p>
              <p>New York, NY 10001</p>
              <p className="pt-2">Email: info@soberwheels.com</p>
              <p>Phone: (123) 456-7890</p>
            </address>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-6 text-gray-400 text-sm text-center">
          <p>&copy; {new Date().getFullYear()} Sober Wheels. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
