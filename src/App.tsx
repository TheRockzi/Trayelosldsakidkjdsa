import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { LoadingScreen } from './components/LoadingScreen';
import { Hero } from './components/Hero';
import { TrustSection } from './components/TrustSection';
import { AccessibilityWidget } from './components/AccessibilityWidget';
import { FloatingContact } from './components/FloatingContact';
import { Footer } from './components/Footer';
import { LanguageSelector } from './components/LanguageSelector';

function App() {
  const { t } = useTranslation();

  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  return (
    <div className="min-h-screen bg-light">
      <LoadingScreen />
      <LanguageSelector />
      <Hero />
      <TrustSection />
      <AccessibilityWidget />
      <FloatingContact />
      <Footer />
    </div>
  );
}

export default App;