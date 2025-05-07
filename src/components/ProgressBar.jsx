import React from "react";

// Progress bar component
const ProgressBar = ({ currentIndex, total }) => {
  const percentage = ((currentIndex + 1) / total) * 100;

  return (
    <div className="w-full max-w-xl mb-2 flex justify-between items-center gap-x-4 border-[0.0625rem] rounded-lg h-6">
      <div className="w-max ml-[0.12rem] bg-gray-300 h-[1.15rem] rounded-md transition-all duration-300" style={{ width: `${percentage}%` }}></div>
      <div className="w-1/4 mr-[0.12rem] text-right text-sm text-gray-500">
        {currentIndex + 1} / {total}
      </div>
    </div>
  );
};

export default ProgressBar;