import React from 'react';

const FeedbackOptions = ({ onSelect }) => {
  const feedbackOptions = [
    { text: '✅ My issue is resolved', color: 'from-green-500 to-emerald-500', hoverColor: 'hover:from-green-600 hover:to-emerald-600' },
    { text: '🧍 I would like to speak with someone', color: 'from-blue-500 to-cyan-500', hoverColor: 'hover:from-blue-600 hover:to-cyan-600' },
    { text: '❓ I have another question', color: 'from-yellow-500 to-orange-500', hoverColor: 'hover:from-yellow-600 hover:to-orange-600' },
    { text: '💡 Suggest a feature', color: 'from-purple-500 to-pink-500', hoverColor: 'hover:from-purple-600 hover:to-pink-600' },
    { text: '🔄 Try again', color: 'from-indigo-500 to-purple-500', hoverColor: 'hover:from-indigo-600 hover:to-purple-600' }
  ];

  return (
    <div className="flex flex-col gap-3 mt-4 p-4 bg-gradient-to-br from-gray-50 to-white rounded-xl shadow-inner">
      <div className="text-center mb-2">
        <p className="text-sm font-bold text-gray-700 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
          Was this answer helpful?
        </p>
        <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mt-2 rounded-full"></div>
      </div>
      
      {feedbackOptions.map((option, index) => (
        <button
          key={index}
          className={`
            bg-gradient-to-r ${option.color} ${option.hoverColor}
            text-white font-medium rounded-lg px-4 py-3 text-sm
            transform hover:scale-105 transition-all duration-300
            shadow-md hover:shadow-lg
            border-0 focus:outline-none focus:ring-2 focus:ring-purple-300
            relative overflow-hidden group
          `}
          onClick={() => onSelect(option.text)}
        >
          <span className="relative z-10">{option.text}</span>
          <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
        </button>
      ))}
      
      <div className="flex justify-center mt-2">
        <div className="flex gap-1">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className={`w-2 h-2 rounded-full bg-purple-400 animate-bounce`}
              style={{ animationDelay: `${i * 0.2}s` }}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeedbackOptions;