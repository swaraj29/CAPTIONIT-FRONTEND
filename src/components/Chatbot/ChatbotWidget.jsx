import React, { useState, useEffect } from 'react';
import ChatInterface from './ChatInterface';
import matchIntent from './chatbotResponse';

const ChatbotWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: 'Hi! I\'m Reely AI, your video captioning assistant! 🎬✨', sender: 'bot' },
  ]);
  const [showFeedback, setShowFeedback] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const handleSend = (msg) => {
    setMessages((prev) => [...prev, { text: msg, sender: 'user' }]);
    setShowFeedback(false);

    setTimeout(() => {
      const reply = matchIntent(msg);
      if (typeof reply === 'string') {
        setMessages((prev) => [...prev, { text: reply, sender: 'bot' }]);
      } else if (reply && reply.type === 'rich' && Array.isArray(reply.content)) {
        // Render each step as a separate message for clarity
        setMessages((prev) => [
          ...prev,
          ...reply.content.map((step) => ({ text: step, sender: 'bot', isRich: true }))
        ]);
      } else {
        setMessages((prev) => [...prev, { text: 'Sorry, something went wrong.', sender: 'bot' }]);
      }
      setShowFeedback(true);
    }, 800);
  };

  const handleFeedback = (option) => {
    setMessages((prev) => [
      ...prev,
      { text: option, sender: 'user' },
      { text: 'Thank you for your feedback! I\'m here to help with your video captioning needs! 💜✨', sender: 'bot' },
    ]);
    setShowFeedback(false);
  };

  return (
    <div className={`fixed bottom-4 right-4 z-50 transform transition-all duration-500 ${
      isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
    }`}>

      {/* Chat Window */}
      {isOpen && (
        <div className="relative w-80 sm:w-96 h-[520px] bg-white shadow-2xl rounded-2xl mb-1 flex flex-col overflow-hidden transition-all duration-300 animate-slideUp border border-gray-200 ">

          {/* Chat Header */}
          <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 text-white text-center py-3 font-bold text-base relative overflow-hidden">
            <div className="absolute inset-0 bg-white opacity-10 animate-pulse"></div>
            <div className="relative z-10 flex items-center justify-center gap-2">
              <span className="text-xl">🎬</span>
              <span className="bg-gradient-to-r from-white to-purple-100 bg-clip-text text-transparent">
                Reely AI Assistant
              </span>
              <span className="text-xl">✨</span>
            </div>
          </div>

          {/* Chat Body */}
          <ChatInterface
            messages={messages}
            onSend={handleSend}
            showFeedback={showFeedback}
            onFeedback={handleFeedback}
          />
        </div>
      )}

      {/* Floating Toggle Button (Bottom Right) */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full text-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-110 active:scale-95 relative overflow-hidden group ${
          isOpen ? 'rotate-45' : 'animate-bounce'
        }`}
      >
        <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
        <div className="relative z-10">
          {isOpen ? (
            <svg className="w-8 h-8 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <div className="flex flex-col items-center">
              <span className="text-2xl">🎬</span>
            </div>
          )}
        </div>

        {/* Notification Dot */}
        {!isOpen && (
          <div className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold animate-pulse">
            !
          </div>
        )}

        {/* Ripple Effect */}
        <div className="absolute inset-0 rounded-full border-4 border-white opacity-30 animate-ping"></div>
      </button>

      {/* Tooltip */}
      {!isOpen && (
        <div className="absolute bottom-20 right-0 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-lg text-sm font-medium shadow-lg transform transition-all duration-300 hover:scale-105 opacity-90">
          Need help with video captions?
          <div className="absolute top-full right-4 w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-t-[8px] border-t-purple-600"></div>
        </div>
      )}
    </div>
  );
};

export default ChatbotWidget;
