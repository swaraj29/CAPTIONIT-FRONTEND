import React from 'react';

const ChatHeader = () => {
  return (
    <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 text-white p-4 flex items-center justify-between relative overflow-hidden">
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-20 h-20 bg-white rounded-full animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-16 h-16 bg-white rounded-full animate-pulse delay-300"></div>
        <div className="absolute top-1/2 left-1/4 w-12 h-12 bg-white rounded-full animate-pulse delay-700"></div>
      </div>
      
      <div className="flex items-center gap-3 relative z-10">
        <div className="relative">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-white to-gray-100 flex items-center justify-center text-2xl shadow-lg transform hover:scale-105 transition-transform duration-300">
            🎬
          </div>
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-white animate-pulse"></div>
        </div>
        <div>
          <p className="font-bold text-lg bg-gradient-to-r from-white to-purple-100 bg-clip-text text-transparent">
            Reely AI Assistant
          </p>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-ping"></div>
            <p className="text-sm text-purple-100 font-medium">Online & Ready</p>
          </div>
        </div>
      </div>
      
      <div className="flex items-center gap-2 relative z-10">
        <div className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition-all duration-300 cursor-pointer">
          <span className="text-sm">⚡</span>
        </div>
        <div className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition-all duration-300 cursor-pointer">
          <span className="text-sm">🔧</span>
        </div>
      </div>
    </div>
  );
};

export default ChatHeader;