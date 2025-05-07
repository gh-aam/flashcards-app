import { useState } from "react";
import ProgressBar from "./components/ProgressBar";
import FlashCard from "./components/FlashCard";
import Navigation from "./components/Navigation";
import { flashcards } from "./data/flashcards";

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  
  // Get current card info
  const currentCard = flashcards[currentIndex];
  
  // Go to next card
  const handleNext = () => {
    if (currentIndex < flashcards.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setShowAnswer(false);
    }
  };
  
  // Go back to previous card
  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setShowAnswer(false);
    }
  };
  
  // Toggle Q/A
  const toggleAnswer = () => {
    setShowAnswer(!showAnswer);
  };

  return (
    <div className="flex flex-col justify-center items-center p-4">
      <h1 className="font-bold mb-1">Flash Cards</h1>
      
      { /* Progress bar */  }
      <ProgressBar currentIndex={currentIndex} total={flashcards.length} />
      
      <div className="w-full max-w-xl mx-auto rounded-lg border-[0.0625rem] p-[0.125rem]">
        { /* Flash cards */ }
        <FlashCard
          question={currentCard.question}
          answer={currentCard.answer}
          showAnswer={showAnswer}
        />
        
        { /* Navigation bar */ }
        <Navigation
          onPrev={handlePrev}
          onNext={handleNext}
          onToggleAnswer={toggleAnswer}
          isFirst={currentIndex === 0}
          isLast={currentIndex === flashcards.length - 1}
          showAnswer={showAnswer}
        />
      </div>
    </div>
  );
}

export default App;