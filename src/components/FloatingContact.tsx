import React from 'react';
import { MessageCircle, Phone } from 'lucide-react';
import { useChatStore } from '../store/chatStore';
import { ChatWindow } from './Chat/ChatWindow';

export const FloatingContact = () => {
  const { isOpen, setIsOpen } = useChatStore();

  return (
    <>
      <ChatWindow />
      <div className="fixed bottom-6 right-6 z-50 flex flex-col space-y-4">
        <a
          href="tel:1234567890"
          className="group bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-400 hover:to-red-400 text-white p-4 rounded-2xl shadow-lg transition-all duration-500 hover:scale-110 relative overflow-hidden"
        >
          <Phone size={24} className="relative z-10" />
          <div className="absolute inset-0 bg-white/20 group-hover:animate-pulse" />
        </a>
        
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="group bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white p-4 rounded-2xl shadow-lg transition-all duration-500 hover:scale-110 relative overflow-hidden"
        >
          <MessageCircle size={24} className="relative z-10" />
          <div className="absolute inset-0 bg-white/20 group-hover:animate-pulse" />
        </button>
      </div>
    </>
  );
};