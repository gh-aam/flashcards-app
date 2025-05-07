import React from "react";

// Navigation bar component
const Navigation = ({
  onPrev,
  onNext,
  onToggleAnswer,
  isFirst,
  isLast,
  showAnswer
}) => {
  return (
    <div className="h-6 mt-[0.125rem] flex justify-between items-center bg-gray-100 rounded-md font-normal">
      { /* Previous button */ }
      <button
        onClick={onPrev}
        disabled={isFirst}
        className={`ml-1 ${
          isFirst
            ? "text-gray-300 cursor-not-allowed"
            : "text-black-900"
        }`}
      >
        ‹ Previous
      </button>
      
      { /* Q/A Toggle */ }
      <button onClick={onToggleAnswer}>
        {showAnswer ? "Hide Answer" : "Show Answer"}
      </button>
      
      { /* Next button */ }
      <button
        onClick={onNext}
        disabled={isLast}
        className={`mr-1 ${
          isLast
            ? "text-gray-300 cursor-not-allowed"
            : "text-black-900"
        }`}
      >
        Next ›
      </button>
    </div>
  );
};

export default Navigation;