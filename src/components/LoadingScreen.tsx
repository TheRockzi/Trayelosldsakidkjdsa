import React, { useEffect, useState } from 'react';
import { Truck } from 'lucide-react';

export const LoadingScreen = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 bg-[#007BFF] flex items-center justify-center z-50">
      <div className="animate-bounce">
        <Truck size={64} className="text-white animate-pulse" />
      </div>
    </div>
  );
};