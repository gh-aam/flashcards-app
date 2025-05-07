import React from "react";

// Flash crad component
const FlashCard = ({ question, answer, showAnswer }) => {
  return (
    <div className="w-full max-w-xl min-h-48 mx-auto p-4 bg-gray-100 rounded-md flex justify-center items-center">
      <div className="text-md font-normal text-gray-900 text-center">
        {showAnswer ? answer : question}
      </div>
    </div>
  );
};

export default FlashCard;