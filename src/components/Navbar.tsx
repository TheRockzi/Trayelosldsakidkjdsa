import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Truck, Menu, X, Languages } from 'lucide-react';

export const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToQuote = () => {
    const quoteSection = document.getElementById('quote-section');
    if (quoteSection) {
      quoteSection.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'es' : 'en';
    i18n.changeLanguage(newLang);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className={`p-2 rounded-xl transition-colors ${
              isScrolled ? 'bg-primary/10' : 'bg-white/10'
            }`}>
              <Truck size={32} className="text-primary animate-float" />
            </div>
            <span className="text-2xl font-bold gradient-text">VyseMove</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className={`nav-link group ${
              isScrolled ? 'text-gray-600' : 'text-white'
            }`}>
              Home
              <span className="nav-link-underline"></span>
            </a>
            <a href="#services" className={`nav-link group ${
              isScrolled ? 'text-gray-600' : 'text-white'
            }`}>
              Services
              <span className="nav-link-underline"></span>
            </a>
            <a href="#about" className={`nav-link group ${
              isScrolled ? 'text-gray-600' : 'text-white'
            }`}>
              About
              <span className="nav-link-underline"></span>
            </a>
            <a href="#contact" className={`nav-link group ${
              isScrolled ? 'text-gray-600' : 'text-white'
            }`}>
              Contact
              <span className="nav-link-underline"></span>
            </a>
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
            {/* Language Toggle */}
            <button
              onClick={toggleLanguage}
              className={`p-2 rounded-xl transition-colors flex items-center space-x-2 ${
                isScrolled 
                  ? 'hover:bg-gray-100 text-gray-600' 
                  : 'hover:bg-white/10 text-white'
              }`}
              aria-label="Toggle language"
            >
              <Languages size={20} />
              <span className="text-sm font-medium">
                {i18n.language.toUpperCase()}
              </span>
            </button>

            {/* Quote Button */}
            <button
              onClick={scrollToQuote}
              className="bg-gradient-to-r from-primary to-amber-500 hover:from-amber-500 hover:to-primary text-dark font-semibold px-6 py-2.5 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg hidden md:flex items-center space-x-2"
            >
              <span>Get Quote</span>
              <Truck size={18} />
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`md:hidden p-2 rounded-xl transition-colors ${
                isScrolled 
                  ? 'hover:bg-gray-100 text-gray-600' 
                  : 'hover:bg-white/10 text-white'
              }`}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden absolute left-0 right-0 bg-white border-t transform transition-transform duration-300 ease-in-out ${
            isMenuOpen ? 'translate-y-0' : '-translate-y-full'
          }`}
        >
          <div className="container mx-auto px-4 py-4 space-y-4">
            <a href="#" className="block py-2 text-gray-600 hover:text-primary transition-colors">
              Home
            </a>
            <a href="#services" className="block py-2 text-gray-600 hover:text-primary transition-colors">
              Services
            </a>
            <a href="#about" className="block py-2 text-gray-600 hover:text-primary transition-colors">
              About
            </a>
            <a href="#contact" className="block py-2 text-gray-600 hover:text-primary transition-colors">
              Contact
            </a>
            <button
              onClick={scrollToQuote}
              className="w-full bg-gradient-to-r from-primary to-amber-500 hover:from-amber-500 hover:to-primary text-dark font-semibold px-6 py-3 rounded-xl transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <span>Get Quote</span>
              <Truck size={18} />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};