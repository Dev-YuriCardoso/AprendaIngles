
import React, { useState } from 'react';
import { Phrase, Difficulty } from '../types/types';
import { Volume2, RotateCcw } from 'lucide-react';

interface StudyCardProps {
  phrase: Phrase;
  onDifficultySelect: (difficulty: Difficulty) => void;
  onNext: () => void;
  isLast: boolean;
}

const StudyCard: React.FC<StudyCardProps> = ({ phrase, onDifficultySelect, onNext, isLast }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [showDifficulty, setShowDifficulty] = useState(false);

  const handleCardClick = () => {
    if (!isFlipped) {
      setIsFlipped(true);
      setShowDifficulty(true);
    }
  };

  const handleDifficultySelect = (difficulty: Difficulty) => {
    onDifficultySelect(difficulty);
    setIsFlipped(false);
    setShowDifficulty(false);
    setTimeout(() => {
      onNext();
    }, 300);
  };

  const playAudio = () => {
    // Text-to-speech functionality
    const utterance = new SpeechSynthesisUtterance(phrase.english);
    utterance.lang = 'en-US';
    utterance.rate = 0.8;
    speechSynthesis.speak(utterance);
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="relative h-80 perspective-1000">
        <div 
          className={`relative w-full h-full transition-transform duration-700 transform-style-preserve-3d cursor-pointer ${
            isFlipped ? 'rotate-y-180' : ''
          }`}
          onClick={handleCardClick}
        >
          {/* Front of card */}
          <div className="absolute inset-0 w-full h-full backface-hidden">
            <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl p-6 h-full flex flex-col justify-center items-center text-white shadow-xl">
              <div className="text-center space-y-4">
                <p className="text-xl font-medium leading-relaxed">{phrase.english}</p>
                <div className="flex items-center justify-center space-x-2 text-blue-200">
                  <Volume2 className="w-5 h-5" />
                  <span className="text-sm">Clique para ver a tradução</span>
                </div>
              </div>
            </div>
          </div>

          {/* Back of card */}
          <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180">
            <div className="bg-gradient-to-br from-green-500 to-teal-600 rounded-xl p-6 h-full flex flex-col justify-between text-white shadow-xl">
              <div className="space-y-4">
                <div className="text-center">
                  <p className="text-lg font-medium mb-2">{phrase.english}</p>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      playAudio();
                    }}
                    className="bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full p-2 transition-colors"
                  >
                    <Volume2 className="w-5 h-5" />
                  </button>
                </div>
                <div className="border-t border-white border-opacity-30 pt-4">
                  <p className="text-lg text-center font-medium">{phrase.portuguese}</p>
                </div>
              </div>

              {showDifficulty && (
                <div className="space-y-3">
                  <p className="text-sm text-center opacity-90">Como foi a dificuldade?</p>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleDifficultySelect('again');
                      }}
                      className="bg-red-500 hover:bg-red-600 text-white px-3 py-2 rounded-lg text-sm font-medium transition-colors"
                    >
                      Difícil
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleDifficultySelect('hard');
                      }}
                      className="bg-orange-500 hover:bg-orange-600 text-white px-3 py-2 rounded-lg text-sm font-medium transition-colors"
                    >
                      Moderado
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleDifficultySelect('good');
                      }}
                      className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-2 rounded-lg text-sm font-medium transition-colors"
                    >
                      Bom
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleDifficultySelect('easy');
                      }}
                      className="bg-green-500 hover:bg-green-600 text-white px-3 py-2 rounded-lg text-sm font-medium transition-colors"
                    >
                      Fácil
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudyCard;
