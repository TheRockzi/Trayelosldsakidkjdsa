import React, { useEffect } from 'react';
import { LoadingScreen } from './components/LoadingScreen';
import { Hero } from './components/Hero';
import { TrustSection } from './components/TrustSection';
import { AccessibilityWidget } from './components/AccessibilityWidget';
import { FloatingContact } from './components/FloatingContact';
import { Footer } from './components/Footer';

function App() {
  useEffect(() => {
    // Add smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <LoadingScreen />
      <Hero />
      <TrustSection />
      <AccessibilityWidget />
      <FloatingContact />
      <Footer />
    </div>
  );
}

export default App;