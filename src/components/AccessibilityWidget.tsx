import React, { useState } from 'react';
import { Settings, Sun, Moon, ZoomIn, ZoomOut } from 'lucide-react';

export const AccessibilityWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [fontSize, setFontSize] = useState(100);

  return (
    <div className="fixed bottom-24 right-6 z-50">
      <div className={`bg-white/90 backdrop-blur-sm rounded-2xl shadow-2xl p-4 mb-4 transition-all duration-300 ${
        isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
      }`}>
        <button
          onClick={() => setIsDarkMode(!isDarkMode)}
          className="flex items-center space-x-2 p-3 hover:bg-gray-100/80 rounded-xl w-full mb-2 transition-all duration-300"
        >
          {isDarkMode ? <Sun size={20} className="text-amber-500" /> : <Moon size={20} className="text-blue-600" />}
          <span className="font-medium">Toggle Dark Mode</span>
        </button>
        
        <div className="flex items-center justify-between p-3 hover:bg-gray-100/80 rounded-xl transition-all duration-300">
          <button
            onClick={() => setFontSize(Math.max(70, fontSize - 10))}
            className="p-2 hover:bg-white rounded-lg transition-all duration-300"
          >
            <ZoomOut size={20} className="text-blue-600" />
          </button>
          <span className="font-medium">Font Size</span>
          <button
            onClick={() => setFontSize(Math.min(130, fontSize + 10))}
            className="p-2 hover:bg-white rounded-lg transition-all duration-300"
          >
            <ZoomIn size={20} className="text-blue-600" />
          </button>
        </div>
      </div>
      
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white p-4 rounded-2xl shadow-lg transition-all duration-500 hover:scale-110 relative overflow-hidden"
      >
        <Settings size={24} className="animate-spin-slow relative z-10" />
        <div className="absolute inset-0 bg-white/20 group-hover:animate-pulse" />
      </button>
    </div>
  );
};