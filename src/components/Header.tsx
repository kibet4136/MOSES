
import React from 'react';
import { Phone, MapPin, Clock } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      {/* Top bar with contact info */}
      <div className="bg-gradient-to-r from-slate-800 to-slate-700 text-white py-3">
        <div className="container mx-auto px-4 flex flex-wrap justify-between items-center text-sm">
          <div className="flex items-center space-x-8">
            <div className="flex items-center space-x-2 hover:text-blue-300 transition-colors duration-200">
              <Phone size={16} className="animate-pulse" />
              <span className="font-medium">+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center space-x-2 hover:text-orange-300 transition-colors duration-200">
              <MapPin size={16} />
              <span>123 Electric Ave, Tech City, TC 12345</span>
            </div>
            <div className="flex items-center space-x-2 hover:text-green-300 transition-colors duration-200">
              <Clock size={16} />
              <span>Mon-Sat: 8AM-6PM</span>
            </div>
          </div>
          <div className="text-orange-400 font-semibold animate-pulse">
            🚚 Free Delivery on Orders Over $100!
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3 group">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-orange-500 rounded-lg flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
              <span className="text-white font-bold text-xl">EH</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-slate-800 group-hover:text-blue-600 transition-colors duration-300">ElectroHub Solutions</h1>
              <p className="text-sm text-gray-600">Your Complete Electrical Partner</p>
            </div>
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-700 hover:text-blue-600 font-medium transition-all duration-200 hover:scale-105 relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full">Home</a>
            <a href="#about" className="text-gray-700 hover:text-blue-600 font-medium transition-all duration-200 hover:scale-105 relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full">About</a>
            <a href="#products" className="text-gray-700 hover:text-blue-600 font-medium transition-all duration-200 hover:scale-105 relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full">Products</a>
            <a href="#services" className="text-gray-700 hover:text-blue-600 font-medium transition-all duration-200 hover:scale-105 relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full">Services</a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600 font-medium transition-all duration-200 hover:scale-105 relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full">Contact</a>
          </div>
          <button className="btn-electric shadow-lg hover:shadow-xl transition-all duration-300">
            Get Quote
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
