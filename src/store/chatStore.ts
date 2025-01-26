import { create } from 'zustand';

export type MessageType = {
  id: string;
  content: string;
  sender: 'user' | 'ai';
  timestamp: Date;
};

type ChatState = {
  messages: MessageType[];
  isOpen: boolean;
  questionCount: number;
  isFreeChat: boolean;
  isTyping: boolean;
  addMessage: (content: string, sender: 'user' | 'ai') => void;
  setIsOpen: (isOpen: boolean) => void;
  incrementQuestionCount: () => void;
  setIsFreeChat: (isFreeChat: boolean) => void;
  setIsTyping: (isTyping: boolean) => void;
};

export const useChatStore = create<ChatState>((set) => ({
  messages: [],
  isOpen: false,
  questionCount: 0,
  isFreeChat: false,
  isTyping: false,
  addMessage: (content, sender) =>
    set((state) => ({
      messages: [
        ...state.messages,
        {
          id: Math.random().toString(36).substring(7),
          content,
          sender,
          timestamp: new Date(),
        },
      ],
    })),
  setIsOpen: (isOpen) => set({ isOpen }),
  incrementQuestionCount: () =>
    set((state) => ({ questionCount: state.questionCount + 1 })),
  setIsFreeChat: (isFreeChat) => set({ isFreeChat }),
  setIsTyping: (isTyping) => set({ isTyping }),
}));