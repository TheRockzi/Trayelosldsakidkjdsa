import React, { useEffect, useRef } from 'react';
import { X, Send, Bot, User } from 'lucide-react';
import { useChatStore, MessageType } from '../../store/chatStore';
import { QuickQuestions } from './QuickQuestions';
import { marked } from 'marked';

const INITIAL_MESSAGE = "Hello! I'm your Moving Assistant. I can help you with information about our moving and storage services in NY, NJ, and LA. How can I assist you today?";

const AI_RESPONSES = {
  services: `We offer comprehensive moving services including:
- Residential & Commercial Moving
- Local & Long Distance Moving
- Secure Storage Solutions
- Professional Packing & Unpacking
- Specialty Item Moving (pianos, art, antiques)
- Climate-Controlled Storage Units`,
  pricing: `Our pricing varies based on several factors:
- Distance of the move
- Volume of items
- Special handling requirements
- Season and timing
- Additional services needed

Would you like a free custom quote for your specific needs?`,
  locations: `We currently operate in:
- New York (NYC and surrounding areas)
- New Jersey (statewide service)
- Los Angeles (Greater LA area)

Each location features secure storage facilities and professional moving teams.`,
};

const simulateTyping = async (
  content: string,
  addMessage: (content: string, sender: 'ai') => void,
  setIsTyping: (isTyping: boolean) => void
) => {
  setIsTyping(true);
  await new Promise((resolve) => setTimeout(resolve, 1500));
  addMessage(content, 'ai');
  setIsTyping(false);
};

export const ChatWindow = () => {
  const {
    messages,
    isOpen,
    questionCount,
    isFreeChat,
    isTyping,
    addMessage,
    setIsOpen,
    incrementQuestionCount,
    setIsFreeChat,
    setIsTyping,
  } = useChatStore();

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      simulateTyping(INITIAL_MESSAGE, addMessage, setIsTyping);
    }
  }, [isOpen]);

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleQuickQuestion = async (question: string) => {
    addMessage(question, 'user');
    incrementQuestionCount();

    let response = '';
    if (question.includes('services')) {
      response = AI_RESPONSES.services;
    } else if (question.includes('pricing')) {
      response = AI_RESPONSES.pricing;
    } else if (question.includes('locations')) {
      response = AI_RESPONSES.locations;
    }

    await simulateTyping(response, addMessage, setIsTyping);

    if (questionCount >= 2) {
      await simulateTyping(
        "You can now ask me any questions about our moving and storage services. I'm here to help!",
        addMessage,
        setIsTyping
      );
      setIsFreeChat(true);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputRef.current?.value.trim() || isTyping) return;

    const userMessage = inputRef.current.value;
    addMessage(userMessage, 'user');
    inputRef.current.value = '';

    await simulateTyping(
      "I understand you're interested in our moving services. Let me help you with that. Would you like to get a free quote or learn more about our specific services?",
      addMessage,
      setIsTyping
    );
  };

  if (!isOpen) return null;

  return (
    <div className="fixed bottom-24 right-6 w-96 h-[600px] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden z-50">
      {/* Header */}
      <div className="bg-primary p-4 text-white flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Bot size={24} />
          <span className="font-semibold">Moving Assistant</span>
        </div>
        <button
          onClick={() => setIsOpen(false)}
          className="hover:bg-white/20 p-1 rounded-full transition-colors"
        >
          <X size={20} />
        </button>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message: MessageType) => (
          <div
            key={message.id}
            className={`flex ${
              message.sender === 'user' ? 'justify-end' : 'justify-start'
            }`}
          >
            <div
              className={`max-w-[80%] rounded-2xl p-3 ${
                message.sender === 'user'
                  ? 'bg-primary text-white rounded-br-none'
                  : 'bg-gray-100 text-gray-800 rounded-bl-none'
              }`}
            >
              <div className="flex items-center space-x-2 mb-1">
                {message.sender === 'user' ? (
                  <User size={16} />
                ) : (
                  <Bot size={16} />
                )}
                <span className="text-xs opacity-75">
                  {message.timestamp.toLocaleTimeString()}
                </span>
              </div>
              <div
                className="prose prose-sm"
                dangerouslySetInnerHTML={{
                  __html: marked(message.content),
                }}
              />
            </div>
          </div>
        ))}
        {isTyping && (
          <div className="flex justify-start">
            <div className="bg-gray-100 rounded-2xl p-3 rounded-bl-none">
              <div className="flex space-x-2">
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" />
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-100" />
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-200" />
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Quick Questions */}
      {!isFreeChat && <QuickQuestions onSelect={handleQuickQuestion} />}

      {/* Input */}
      <form onSubmit={handleSubmit} className="p-4 border-t">
        <div className="flex space-x-2">
          <textarea
            ref={inputRef}
            placeholder={
              isFreeChat
                ? "Type your message..."
                : "Please select a question above..."
            }
            disabled={!isFreeChat}
            className="flex-1 resize-none rounded-lg border border-gray-200 p-2 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            rows={2}
          />
          <button
            type="submit"
            disabled={!isFreeChat || isTyping}
            className="bg-primary text-white p-2 rounded-lg hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Send size={20} />
          </button>
        </div>
      </form>
    </div>
  );
};