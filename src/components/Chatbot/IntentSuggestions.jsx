import React from 'react';

// Pass an array of intent suggestion objects: [{ label, value }]
const IntentSuggestions = ({ suggestions, onSelect }) => {
  if (!suggestions || suggestions.length === 0) return null;
  return (
    <div className="flex flex-wrap gap-2 mt-2">
      {suggestions.map((intent, idx) => (
        <button
          key={idx}
          className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-xs font-semibold shadow hover:scale-105 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-purple-300"
          onClick={() => onSelect(intent.value)}
        >
          {intent.label}
        </button>
      ))}
    </div>
  );
};

export default IntentSuggestions;
