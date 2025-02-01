import React from 'react';
import { useTranslation } from 'react-i18next';
import { QuoteForm } from './QuoteForm';
import { Truck, Shield, Clock } from 'lucide-react';

export const QuoteSection = () => {
  const { t } = useTranslation();

  return (
    <section id="quote-section" className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative">
      <div className="absolute inset-0 grid-pattern opacity-5"></div>
      
      <div className="container mx-auto px-4 relative">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left side content */}
          <div className="flex-1 text-white">
            <div className="max-w-xl">
              <div className="flex items-center space-x-4 mb-6">
                <Truck size={48} className="text-primary animate-float" />
                <Shield size={32} className="text-info animate-float delay-100" />
                <Clock size={40} className="text-success animate-float delay-200" />
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
                Get Your Moving Quote Today
              </h2>
              
              <p className="text-lg text-gray-300 mb-8">
                Ready to start your journey? Get an instant quote for your move and join thousands of satisfied customers who trusted us with their relocations.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                {[
                  { title: '10K+', subtitle: 'Successful Moves' },
                  { title: '98%', subtitle: 'Customer Satisfaction' },
                  { title: '24/7', subtitle: 'Support Available' }
                ].map((stat, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-sm p-4 rounded-xl">
                    <div className="text-2xl font-bold text-primary mb-1">{stat.title}</div>
                    <div className="text-sm text-gray-300">{stat.subtitle}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Quote Form */}
          <div className="lg:w-[600px] w-full">
            <QuoteForm />
          </div>
        </div>
      </div>
    </section>
  );
};