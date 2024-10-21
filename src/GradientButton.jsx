import React from 'react';

const GradientButton = ({ text, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="fixed bottom-8 right-8 z-50 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold py-2 px-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
    >
      {text}
    </button>
  );
};

export default GradientButton;