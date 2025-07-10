import React, { useState, useEffect, useRef } from 'react';
import FeedbackOptions from './FeedbackOptions';
import ChatHeader from './ChatHeader';
import IntentSuggestions from './IntentSuggestions';
import intents from './intents';

const ChatInterface = ({ messages, onSend, showFeedback, onFeedback }) => {
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = () => {
    if (!input.trim()) return;
    onSend(input);
    setInput('');
    setIsTyping(true);
    
    // Simulate bot typing
    setTimeout(() => {
      setIsTyping(false);
    }, 1000);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  // Suggest top intents as quick replies
  const intentSuggestions = [
    { label: 'How to use', value: 'How to use' },
    { label: 'Upload video', value: 'How to upload video' },
    { label: 'Pricing', value: 'Pricing' },
    { label: 'Features', value: 'Features' },
    { label: 'Support', value: 'Support' },
    { label: 'Languages', value: 'Languages' },
  ];

  // Show suggestions only if last message is from bot and not typing
  const showSuggestions =
    messages.length > 0 &&
    messages[messages.length - 1].sender === 'bot' &&
    !isTyping &&
    !showFeedback;

  return (
    <div className="flex flex-col h-96 sm:h-[500px] bg-gradient-to-br from-white via-purple-50 to-pink-50 rounded-2xl shadow-2xl border border-purple-100 overflow-hidden">
      <ChatHeader />
      <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gradient-to-br from-slate-50 via-purple-50 to-pink-50 relative">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-10 pointer-events-none select-none">
          <div className="absolute top-10 left-10 w-32 h-32 bg-purple-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-24 h-24 bg-pink-400 rounded-full blur-2xl"></div>
        </div>
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'} relative z-10`}
          >
            <div
              className={`max-w-xs px-4 py-3 rounded-2xl text-sm font-medium shadow-lg transition-all duration-300 ${
                msg.sender === 'user'
                  ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-br-md'
                  : 'bg-gradient-to-r from-white to-gray-100 text-gray-800 border border-gray-200 rounded-bl-md'
              }`}
            >
              {msg.text}
              <div className={`absolute w-0 h-0 ${
                msg.sender === 'user' 
                  ? 'border-l-[10px] border-l-transparent border-t-[10px] border-t-purple-600 right-0 bottom-0 translate-x-1'
                  : 'border-r-[10px] border-r-transparent border-t-[10px] border-t-white left-0 bottom-0 -translate-x-1'
              }`}></div>
            </div>
          </div>
        ))}
        {isTyping && (
          <div className="flex justify-start relative z-10">
            <div className="bg-white px-4 py-3 rounded-2xl rounded-bl-md shadow-lg border border-gray-200">
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-purple-500 rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-purple-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                <div className="w-2 h-2 bg-purple-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
              </div>
            </div>
          </div>
        )}
        {showFeedback && <FeedbackOptions onSelect={onFeedback} />}
        {/* Intent suggestions below chat, only when appropriate */}
        {showSuggestions && (
          <IntentSuggestions
            suggestions={intentSuggestions}
            onSelect={onSend}
          />
        )}
        <div ref={messagesEndRef} />
      </div>
      <div className="flex border-t border-gray-200 p-3 bg-white/90 backdrop-blur-sm relative">
        <div className="flex-1 relative">
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            className="w-full px-4 py-3 text-sm border-2 border-gray-200 rounded-xl focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-200 resize-none transition-all duration-300 bg-gray-50 hover:bg-white shadow-sm"
            placeholder="Type your message here..."
            rows={1}
          />
          <div className="absolute right-2 top-2 text-xs text-gray-400 select-none">
            Enter to send
          </div>
        </div>
        <button
          onClick={handleSend}
          disabled={!input.trim()}
          className={`ml-3 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl text-sm font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 ${
            input.trim() ? 'animate-pulse' : ''
          }`}
        >
          <span className="flex items-center gap-2">
            Send
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
            </svg>
          </span>
        </button>
      </div>
    </div>
  );
};

export default ChatInterface;