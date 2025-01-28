import React from 'react';
import { useTranslation } from 'react-i18next';
import { Languages } from 'lucide-react';

export const LanguageSelector = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'es' : 'en';
    i18n.changeLanguage(newLang);
  };

  return (
    <button
      onClick={toggleLanguage}
      className="fixed top-4 right-4 z-50 bg-primary hover:bg-primary/90 text-secondary p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
      aria-label="Toggle language"
    >
      <Languages size={24} />
    </button>
  );
};