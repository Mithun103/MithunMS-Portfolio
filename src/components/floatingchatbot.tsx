import React, { useState, useEffect, useRef, MutableRefObject } from 'react';
import { X, Send, Brain } from 'lucide-react';
import { useAutoAnimate } from '@formkit/auto-animate/react';

const FloatingChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ text: string; fromUser: boolean; timestamp: number }[]>([]);
  const [inputText, setInputText] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [showPopup, setShowPopup] = useState<boolean>(true);
  const [popupText, setPopupText] = useState<string>('');
  const messagesEndRef = useRef<HTMLDivElement | null>(null);
  // const [parent] = useAutoAnimate();
  const popupTimeoutRef = useRef<number | undefined>();
  const typingTimeoutRef = useRef<number | undefined>();

  // Smooth scroll to bottom when new messages arrive
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Format text with markdown-style bold
  const formatText = (text: string) => {
    const boldRegex = /\*\*(.*?)\*\*/g;
    const semiBoldRegex = /\*(.*?)\*/g;
    
    const parts = text.split(/((?:\*\*.*?\*\*)|(?:\*.*?\*))/g);
    
    return parts.map((part: string, index: number) => {
      if (part.match(boldRegex)) {
        return <span key={index} className="font-bold">{part.replace(/\*\*/g, '')}</span>;
      } else if (part.match(semiBoldRegex)) {
        return <span key={index} className="font-semibold">{part.replace(/\*/g, '')}</span>;
      }
      return part;
    });
  };

  // Enhanced popup message animation with better timing
  useEffect(() => {
    const messages = [
      "Hi! I'm Mithun's Neural AI Assistant",
      "How can I assist you today?",
      "Ask me anything about your data!",
    ];

    let messageIndex = 0;
    let charIndex = 0;

    const typeMessage = () => {
      if (!showPopup) return;
      
      if (charIndex < messages[messageIndex].length) {
        setPopupText(messages[messageIndex].substring(0, charIndex + 1));
        charIndex++;
        typingTimeoutRef.current = setTimeout(typeMessage, 40);
      } else {
        popupTimeoutRef.current = setTimeout(() => {
          setShowPopup(false);
          charIndex = 0;
          messageIndex = (messageIndex + 1) % messages.length;
          
          popupTimeoutRef.current = setTimeout(() => {
            setShowPopup(true);
            setPopupText('');
            typeMessage();
          }, 1500);
        }, 2000);
      }
    };

    typeMessage();

    return () => {
      clearTimeout(popupTimeoutRef.current);
      clearTimeout(typingTimeoutRef.current);
    };
  }, []);

  const handleSend = async () => {
    if (inputText.trim()) {
      try {
        setIsLoading(true);
        const userMessage = { text: inputText, fromUser: true, timestamp: Date.now() };
        setMessages(prev => [...prev, userMessage]);
        
        const response = await fetch('http://127.0.0.1:5000/api/chat', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ message: inputText })
        });
        
        const data = await response.json();
        
        if (data?.response) {
          setMessages(prev => [...prev, {
            text: data.response,
            fromUser: false,
            timestamp: Date.now()
          }]);
        }
      } catch (error) {
        console.error('Error:', error);
        setMessages(prev => [...prev, {
          text: "Sorry, I'm having trouble connecting. Please try again.",
          fromUser: false,
          timestamp: Date.now()
        }]);
      } finally {
        setIsLoading(false);
        setInputText('');
      }
    }
  };

  const Message = ({ text, fromUser }: { text: string; fromUser: boolean }) => (
    <div className={`mb-4 ${fromUser ? 'ml-auto' : 'mr-auto'} max-w-[80%]`}>
      <div
        className={`p-3 rounded-lg shadow-sm
          ${fromUser 
            ? 'bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-br-none' 
            : 'bg-gradient-to-r from-gray-100 to-gray-50 text-gray-800 rounded-bl-none'
          }`}
      >
        <div className="message-content">
          {formatText(text)}
        </div>
      </div>
    </div>
  );

  return (
    <div className="fixed bottom-6 right-6 z-50 font-sans">
      {/* Neural-themed Popup with improved animation */}
      {!isOpen && showPopup && (
        <div className="absolute bottom-20 right-0 w-72 transform transition-all duration-300 ease-out">
          <div className="bg-white p-4 rounded-lg shadow-lg border border-blue-100 relative">
            <div className="absolute -left-2 top-1/2 w-4 h-4 bg-blue-600 rounded-full animate-pulse" />
            <div className="text-sm text-gray-700">
              <span className="typing-text">{popupText}</span>
            </div>
          </div>
        </div>
      )}

      {/* Enhanced Chat Window */}
      {isOpen && (
        <div className="absolute bottom-20 right-0 w-96 h-[32rem] bg-white rounded-lg shadow-2xl flex flex-col overflow-hidden transform transition-all duration-300 ease-out">
          {/* Header with neural design */}
          <div className="bg-gradient-to-r from-blue-700 to-blue-500 p-4 text-white flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Brain className="animate-pulse" size={24} />
              <h3 className="font-semibold">Mithun's Personal Ai Agent</h3>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="hover:bg-white/20 p-1 rounded-full transition-colors"
            >
              <X size={20} />
            </button>
          </div>
          
          {/* Messages container with auto-animation */}
          <div ref={parent} className="flex-1 p-4 overflow-y-auto bg-gray-50">
            {messages.map((msg) => (
              <Message key={msg.timestamp} text={msg.text} fromUser={msg.fromUser} />
            ))}
            {isLoading && (
              <div className="flex gap-2 p-2">
                <div className="w-2 h-2 bg-blue-600 rounded-full" />
                <div className="w-2 h-2 bg-blue-600 rounded-full" />
                <div className="w-2 h-2 bg-blue-600 rounded-full" />
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Enhanced input area */}
          <div className="border-t bg-white p-4 flex gap-2">
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Type your message..."
              className="flex-1 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50"
            />
            <button 
              onClick={handleSend}
              disabled={!inputText.trim() || isLoading}
              className={`
                p-3 rounded-lg transition-all duration-200
                ${inputText.trim() && !isLoading
                  ? 'bg-blue-600 hover:bg-blue-700 text-white'
                  : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                }
              `}
            >
              <Send size={20} />
            </button>
          </div>
        </div>
      )}

      {/* Floating button with neural theme */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-4 bg-gradient-to-r from-blue-700 to-blue-500 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 relative group"
      >
        <Brain 
          size={24}
          className="transform group-hover:scale-110 transition-transform duration-300" 
        />
        <div className="absolute inset-0 bg-blue-400 rounded-full animate-ping opacity-20" />
      </button>
    </div>
  );
};

export default FloatingChatbot;

