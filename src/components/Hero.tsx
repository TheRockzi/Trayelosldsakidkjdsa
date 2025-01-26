import React from 'react';
import { QuoteForm } from './QuoteForm';

export const Hero = () => {
  return (
    <div className="relative min-h-screen">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url("https://images.unsplash.com/photo-1600518464441-9154a4dea21b?auto=format&fit=crop&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/70" />
      </div>
      
      <div className="relative container mx-auto px-4 py-32 flex flex-col lg:flex-row items-center justify-between">
        <div className="text-white max-w-2xl mb-12 lg:mb-0 backdrop-blur-sm bg-black/20 p-8 rounded-2xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Effortless Moving & Storage Solutions in NY, NJ, and LA
          </h1>
          <p className="text-xl opacity-90 mb-8">
            Your trusted partner for seamless relocations and secure storage across major cities
          </p>
        </div>
        
        <div className="w-full max-w-md backdrop-blur-sm">
          <QuoteForm />
        </div>
      </div>
    </div>
  );
};