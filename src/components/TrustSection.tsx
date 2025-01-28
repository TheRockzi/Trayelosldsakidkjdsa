import React from 'react';
import { useTranslation } from 'react-i18next';
import { Shield, Clock, Package } from 'lucide-react';

export const TrustSection = () => {
  const { t } = useTranslation();

  const features = [
    {
      icon: Shield,
      title: t('trust.secure.title'),
      description: t('trust.secure.description'),
      color: 'text-success',
    },
    {
      icon: Clock,
      title: t('trust.onTime.title'),
      description: t('trust.onTime.description'),
      color: 'text-info',
    },
    {
      icon: Package,
      title: t('trust.professional.title'),
      description: t('trust.professional.description'),
      color: 'text-primary',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-light relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-10"></div>
      
      <div className="container mx-auto px-4 relative">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 md:mb-16 gradient-text animate-neon">
          {t('trust.title')}
        </h2>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-secondary p-6 md:p-8 rounded-2xl shadow-card transform transition-all duration-500 hover:scale-105 hover:shadow-lg"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <feature.icon size={48} className={`${feature.color} mb-6 animate-float`} />
              <h3 className="text-xl md:text-2xl font-bold mb-4 text-dark">{feature.title}</h3>
              <p className="text-dark/80">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};