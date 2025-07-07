
import React from 'react';
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Youtube, X, MessageCircle } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-orange-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">EH</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">ElectroHub Solutions</h3>
              </div>
            </div>
            <p className="text-gray-300 mb-4">
              Your trusted partner for all electrical supplies, CCTV systems, and professional installation services.
            </p>
            <div className="space-y-2 text-sm text-gray-400">
              <div className="flex items-center space-x-2">
                <MapPin size={16} />
                <span>123 Electric Ave, Tech City, TC 12345</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone size={16} />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail size={16} />
                <span>info@electrohubsolutions.com</span>
              </div>
            </div>
            
            {/* Social Media Links */}
            <div className="mt-6">
              <h5 className="text-sm font-semibold mb-3">Follow Us</h5>
              <div className="flex space-x-3">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                  <Facebook size={20} />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                  <Instagram size={20} />
                </a>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                  <Youtube size={20} />
                </a>
                <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                  <X size={20} />
                </a>
                <a href="https://t.me" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                  <MessageCircle size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Products</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-white transition-colors">Cables & Wires</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Electrical Accessories</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Lighting Solutions</a></li>
              <li><a href="#" className="hover:text-white transition-colors">CCTV Systems</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Tools & Equipment</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Smart Home</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-white transition-colors">Electrical Wiring</a></li>
              <li><a href="#" className="hover:text-white transition-colors">CCTV Installation</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Lighting Installation</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Maintenance & Repair</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Emergency Service</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Consultation</a></li>
            </ul>
          </div>

          {/* Business Hours */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Business Hours</h4>
            <div className="space-y-2 text-gray-300">
              <div className="flex items-center space-x-2">
                <Clock size={16} />
                <div>
                  <p className="font-medium">Monday - Friday</p>
                  <p className="text-sm">8:00 AM - 6:00 PM</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Clock size={16} />
                <div>
                  <p className="font-medium">Saturday</p>
                  <p className="text-sm">9:00 AM - 4:00 PM</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Clock size={16} />
                <div>
                  <p className="font-medium">Sunday</p>
                  <p className="text-sm">Closed</p>
                </div>
              </div>
            </div>
            <div className="mt-4 p-3 bg-red-600 rounded-lg">
              <p className="font-semibold text-sm">24/7 Emergency Service</p>
              <p className="text-sm">Call: (555) 123-4568</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 ElectroHub Solutions. All rights reserved. | Licensed Electrical Contractor #EC-2024-001</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
