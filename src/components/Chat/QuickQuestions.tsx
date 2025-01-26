import React from 'react';
import { MessageSquare, DollarSign, MapPin } from 'lucide-react';

const questions = [
  {
    icon: MessageSquare,
    text: 'What services do you offer?',
    value: 'services',
  },
  {
    icon: DollarSign,
    text: 'How is pricing calculated?',
    value: 'pricing',
  },
  {
    icon: MapPin,
    text: 'Where do you operate?',
    value: 'locations',
  },
];

interface QuickQuestionsProps {
  onSelect: (question: string) => void;
}

export const QuickQuestions: React.FC<QuickQuestionsProps> = ({ onSelect }) => {
  return (
    <div className="p-4 border-t bg-gray-50">
      <p className="text-sm text-gray-600 mb-3">Suggested Questions:</p>
      <div className="space-y-2">
        {questions.map((question) => (
          <button
            key={question.value}
            onClick={() => onSelect(question.value)}
            className="w-full flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-100 transition-colors text-left"
          >
            <question.icon size={18} className="text-primary" />
            <span>{question.text}</span>
          </button>
        ))}
      </div>
    </div>
  );
};