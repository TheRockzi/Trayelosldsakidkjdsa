import React from 'react';
import { useTranslation } from 'react-i18next';
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';

export const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-dark text-secondary py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h4 className="text-xl font-bold mb-4 text-primary">{t('footer.contact')}</h4>
            <div className="space-y-2">
              <a href="tel:1234567890" className="flex items-center space-x-2 hover:text-primary transition-colors">
                <Phone size={18} />
                <span>(123) 456-7890</span>
              </a>
              <a href="mailto:info@moving.com" className="flex items-center space-x-2 hover:text-primary transition-colors">
                <Mail size={18} />
                <span>info@moving.com</span>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-xl font-bold mb-4 text-primary">{t('footer.locations')}</h4>
            <div className="space-y-2">
              {['New York', 'New Jersey', 'Los Angeles'].map((location) => (
                <div key={location} className="flex items-center space-x-2">
                  <MapPin size={18} className="text-info" />
                  <span>{location}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-xl font-bold mb-4 text-primary">{t('footer.quickLinks')}</h4>
            <ul className="space-y-2">
              {['About Us', 'Services', 'Pricing', 'Contact'].map((link) => (
                <li key={link}>
                  <a href="#" className="hover:text-primary transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-xl font-bold mb-4 text-primary">{t('footer.followUs')}</h4>
            <div className="flex space-x-4">
              {[
                { Icon: Facebook, color: 'hover:text-[#1877F2]' },
                { Icon: Twitter, color: 'hover:text-[#1DA1F2]' },
                { Icon: Instagram, color: 'hover:text-[#E4405F]' }
              ].map(({ Icon, color }, index) => (
                <a
                  key={index}
                  href="#"
                  className={`transform transition-all duration-300 hover:scale-125 ${color}`}
                >
                  <Icon size={24} />
                </a>
              ))}
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} Moving & Storage. {t('footer.rights')}</p>
        </div>
      </div>
    </footer>
  );
};