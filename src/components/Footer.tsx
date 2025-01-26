import React from 'react';
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-[#2C2C2C] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h4 className="text-xl font-bold mb-4">Contact Us</h4>
            <div className="space-y-2">
              <a href="tel:1234567890" className="flex items-center space-x-2 hover:text-[#FF5733] transition-colors">
                <Phone size={18} />
                <span>(123) 456-7890</span>
              </a>
              <a href="mailto:info@moving.com" className="flex items-center space-x-2 hover:text-[#FF5733] transition-colors">
                <Mail size={18} />
                <span>info@moving.com</span>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-xl font-bold mb-4">Locations</h4>
            <div className="space-y-2">
              {['New York', 'New Jersey', 'Los Angeles'].map((location) => (
                <div key={location} className="flex items-center space-x-2">
                  <MapPin size={18} />
                  <span>{location}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-xl font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['About Us', 'Services', 'Pricing', 'Contact'].map((link) => (
                <li key={link}>
                  <a href="#" className="hover:text-[#FF5733] transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-xl font-bold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              {[Facebook, Twitter, Instagram].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="hover:text-[#FF5733] transform transition-all duration-300 hover:scale-125"
                >
                  <Icon size={24} />
                </a>
              ))}
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} Moving & Storage. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};