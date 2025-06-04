
import React, { useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { phrases } from '../data/phrases';
import { storage } from '../utils/storage';
import { calculateNextReview, getDueCards } from '../utils/spacedRepetition';
import { UserProgress, Difficulty, Level } from '../types/types';
import StudyCard from '../components/StudyCard';
import UserStats from '../components/UserStats';
import LevelSelector from '../components/LevelSelector';
import AuthModal from '../components/AuthModal';
import { LogOut, User, BookOpen, Settings } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

const Index = () => {
  const { user, logout, updateUserLevel } = useAuth();
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [currentPhrases, setCurrentPhrases] = useState(phrases.filter(p => p.level === 'beginner'));
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [sessionStats, setSessionStats] = useState({ studied: 0, correct: 0 });

  useEffect(() => {
    if (user) {
      updateCurrentPhrases();
    }
  }, [user]);

  const updateCurrentPhrases = () => {
    if (!user) return;

    const levelPhrases = phrases.filter(p => p.level === user.currentLevel);
    const userProgress = storage.getUserProgress(user.id);
    
    // Get cards due for review
    const dueCardIds = getDueCards(userProgress);
    const duePhrases = levelPhrases.filter(p => dueCardIds.includes(p.id));
    
    // If no due cards, get new ones
    const studiedPhraseIds = userProgress.map(p => p.phraseId);
    const newPhrases = levelPhrases.filter(p => !studiedPhraseIds.includes(p.id));
    
    const phrasesToStudy = duePhrases.length > 0 ? duePhrases : newPhrases.slice(0, 10);
    
    setCurrentPhrases(phrasesToStudy);
    setCurrentPhraseIndex(0);
  };

  const handleDifficultySelect = (difficulty: Difficulty) => {
    if (!user || !currentPhrases[currentPhraseIndex]) return;

    const phrase = currentPhrases[currentPhraseIndex];
    const userProgress = storage.getUserProgress(user.id);
    const existingProgress = userProgress.find(p => p.phraseId === phrase.id);

    const currentProgress: UserProgress = existingProgress || {
      phraseId: phrase.id,
      userId: user.id,
      lastReviewed: new Date(),
      nextReview: new Date(),
      interval: 1,
      easeFactor: 2.5,
      repetitions: 0,
      difficulty: null
    };

    const updatedProgress = calculateNextReview(currentProgress, difficulty);
    
    const newProgress: UserProgress = {
      ...currentProgress,
      ...updatedProgress,
      lastReviewed: new Date(),
      difficulty
    };

    storage.saveUserProgress(newProgress);
    
    setSessionStats(prev => ({
      studied: prev.studied + 1,
      correct: prev.correct + (difficulty === 'good' || difficulty === 'easy' ? 1 : 0)
    }));

    toast({
      title: "Progresso salvo!",
      description: `Próxima revisão em ${updatedProgress.interval} dia(s)`,
    });
  };

  const handleNext = () => {
    if (currentPhraseIndex < currentPhrases.length - 1) {
      setCurrentPhraseIndex(currentPhraseIndex + 1);
    } else {
      // Session completed
      if (user) {
        storage.saveStudySession({
          userId: user.id,
          phrasesStudied: sessionStats.studied,
          correctAnswers: sessionStats.correct,
          sessionDate: new Date()
        });
        
        toast({
          title: "Sessão concluída!",
          description: `Você estudou ${sessionStats.studied} frases com ${Math.round((sessionStats.correct / sessionStats.studied) * 100)}% de precisão.`,
        });
      }
      
      updateCurrentPhrases();
      setSessionStats({ studied: 0, correct: 0 });
    }
  };

  const handleLevelChange = (level: Level) => {
    updateUserLevel(level);
    updateCurrentPhrases();
    setShowSettings(false);
    toast({
      title: "Nível atualizado!",
      description: `Agora você está estudando no nível ${level}`,
    });
  };

  if (!user) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
        <div className="text-center space-y-8 max-w-md">
          <div className="space-y-4">
            <BookOpen className="w-16 h-16 text-blue-600 mx-auto" />
            <h1 className="text-4xl font-bold text-gray-800">English Cards</h1>
            <p className="text-gray-600 text-lg">
              Aprenda inglês com o sistema de repetição espaçada, baseado no Anki.
            </p>
          </div>
          
          <div className="space-y-4">
            <button
              onClick={() => setShowAuthModal(true)}
              className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 px-6 rounded-xl font-medium hover:from-blue-600 hover:to-purple-700 transition-all duration-200 transform hover:scale-105"
            >
              Começar a Estudar
            </button>
            
            <p className="text-sm text-gray-500">
              • Sistema de repetição espaçada<br/>
              • 5 níveis de dificuldade<br/>
              • Acompanhamento de progresso<br/>
              • Pronunciação em inglês
            </p>
          </div>
        </div>

        <AuthModal isOpen={showAuthModal} onClose={() => setShowAuthModal(false)} />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <BookOpen className="w-8 h-8 text-blue-600" />
              <h1 className="text-xl font-bold text-gray-800">English Cards</h1>
            </div>
            
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-600">
                Olá, {user.name}! Nível: <span className="font-medium capitalize">{user.currentLevel}</span>
              </span>
              
              <button
                onClick={() => setShowSettings(!showSettings)}
                className="p-2 text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <Settings className="w-5 h-5" />
              </button>
              
              <button
                onClick={logout}
                className="p-2 text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <LogOut className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Study Area */}
          <div className="lg:col-span-2 space-y-6">
            {showSettings ? (
              <div className="bg-white rounded-xl shadow-lg p-6">
                <LevelSelector
                  currentLevel={user.currentLevel}
                  onLevelChange={handleLevelChange}
                />
              </div>
            ) : (
              <>
                {currentPhrases.length > 0 ? (
                  <div className="space-y-6">
                    <div className="text-center">
                      <div className="flex justify-between items-center mb-4">
                        <span className="text-sm text-gray-600">
                          Progresso da sessão: {sessionStats.studied} frases estudadas
                        </span>
                        <span className="text-sm text-gray-600">
                          {currentPhraseIndex + 1} de {currentPhrases.length}
                        </span>
                      </div>
                      
                      <div className="w-full bg-gray-200 rounded-full h-2 mb-6">
                        <div 
                          className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-300"
                          style={{ width: `${((currentPhraseIndex + 1) / currentPhrases.length) * 100}%` }}
                        ></div>
                      </div>
                    </div>

                    <StudyCard
                      phrase={currentPhrases[currentPhraseIndex]}
                      onDifficultySelect={handleDifficultySelect}
                      onNext={handleNext}
                      isLast={currentPhraseIndex === currentPhrases.length - 1}
                    />
                  </div>
                ) : (
                  <div className="bg-white rounded-xl shadow-lg p-8 text-center">
                    <BookOpen className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                      Parabéns! Você completou todas as frases disponíveis.
                    </h3>
                    <p className="text-gray-600 mb-6">
                      Volte mais tarde para revisar ou mude de nível para continuar aprendendo.
                    </p>
                    <button
                      onClick={() => setShowSettings(true)}
                      className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-2 px-6 rounded-lg font-medium hover:from-blue-600 hover:to-purple-700 transition-all duration-200"
                    >
                      Mudar Nível
                    </button>
                  </div>
                )}
              </>
            )}
          </div>

          {/* Stats Sidebar */}
          <div className="lg:col-span-1">
            <UserStats />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
