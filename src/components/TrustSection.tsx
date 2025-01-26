import React from 'react';
import { Shield, Clock, Package } from 'lucide-react';

export const TrustSection = () => {
  const features = [
    {
      icon: Shield,
      title: 'Secure Storage',
      description: 'State-of-the-art security systems protecting your belongings',
    },
    {
      icon: Clock,
      title: 'On-Time Service',
      description: 'Punctual and efficient moving services you can rely on',
    },
    {
      icon: Package,
      title: 'Professional Packing',
      description: 'Expert packing services ensuring safe transport',
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">Why Choose Us</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="p-6 bg-white rounded-lg shadow-lg transform transition-all duration-300 hover:-translate-y-2"
            >
              <feature.icon size={40} className="text-[#007BFF] mb-4" />
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};