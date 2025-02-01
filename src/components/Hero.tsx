import React from 'react';
import { useTranslation } from 'react-i18next';
import { Truck, Box, Shield } from 'lucide-react';

export const Hero = () => {
  const { t } = useTranslation();
  
  const scrollToQuote = () => {
    const quoteSection = document.getElementById('quote-section');
    if (quoteSection) {
      quoteSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden pt-20">
      {/* Background image with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?auto=format&fit=crop&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/60 to-black/70 backdrop-blur-sm"></div>
      </div>
      
      <div className="relative container mx-auto px-4 py-16 md:py-32">
        <div className="max-w-3xl">
          <div className="flex flex-wrap items-center gap-4 mb-8">
            <Truck size={48} className="animate-float text-primary" />
            <Box size={32} className="animate-float delay-100 text-info" />
            <Shield size={40} className="animate-float delay-200 text-success" />
          </div>
          
          <div className="bg-black/40 backdrop-blur-md p-8 rounded-2xl border border-white/10">
            <h1 className="text-4xl xs:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="gradient-text animate-neon block">
                {t('hero.title')}
              </span>
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8">
              {t('hero.subtitle')}
            </p>
            <button
              onClick={scrollToQuote}
              className="bg-primary hover:bg-primary/90 text-dark font-semibold px-8 py-4 rounded-xl text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center space-x-2"
            >
              <span>Get Your Free Quote</span>
              <Truck size={24} />
            </button>
          </div>
        </div>
      </div>

      {/* Animated truck in the background */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden h-32 opacity-30 pointer-events-none">
        <Truck 
          size={120} 
          className="text-primary absolute -left-32 animate-drive-slow"
          style={{ bottom: '20px' }}
        />
      </div>
    </div>
  );
};