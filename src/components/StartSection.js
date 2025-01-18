import React from "react";

const StartSection = () => {
  return (
    <div>
      {/* Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-16">
        <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-lg p-8 text-center transform transition-transform duration-300 hover:scale-105 hover:border-purple-500">
          <div className="text-4xl font-bold text-white">500K+</div>
          <div className="text-gray-400 mt-2">Data Points Analyzed</div>
        </div>
        <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-lg p-8 text-center transform transition-transform duration-300 hover:scale-105 hover:border-purple-500">
          <div className="text-4xl font-bold text-white">98%</div>
          <div className="text-gray-400 mt-2">Accuracy Rate</div>
        </div>
        <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-lg p-8 text-center transform transition-transform duration-300 hover:scale-105 hover:border-purple-500">
          <div className="text-4xl font-bold text-white">50x</div>
          <div className="text-gray-400 mt-2">Faster Research</div>
        </div>
      </div>
    </div>
  );
};

export default StartSection;
