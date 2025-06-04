
import React, { useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { phrases } from '../data/phrases';
import { storage } from '../utils/storage';
import { calculateNextReview, getDueCards } from '../utils/spacedRepetition';
import { UserProgress, Difficulty, Level, Article, VideoLesson } from '../types/types';
import StudyCard from '../components/StudyCard';
import UserStats from '../components/UserStats';
import LevelSelector from '../components/LevelSelector';
import AuthModal from '../components/AuthModal';
import Banner from '../components/Banner';
import InfoSection from '../components/InfoSection';
import ArticlesSection from '../components/ArticlesSection';
import ArticlePage from '../components/ArticlePage';
import VideoLessonsSection from '../components/VideoLessonsSection';
import VideoLessonPage from '../components/VideoLessonPage';
import { LogOut, User, BookOpen, Settings, Play } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

const Index = () => {
  const { user, logout, updateUserLevel } = useAuth();
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [currentPhrases, setCurrentPhrases] = useState(phrases.filter(p => p.level === 'beginner'));
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [activeSection, setActiveSection] = useState<'study' | 'articles' | 'videos'>('articles');
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const [selectedVideo, setSelectedVideo] = useState<VideoLesson | null>(null);
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

  const handleArticleClick = (article: Article) => {
    setSelectedArticle(article);
  };

  const handleCloseArticle = () => {
    setSelectedArticle(null);
  };

  const handleVideoClick = (video: VideoLesson) => {
    setSelectedVideo(video);
  };

  const handleCloseVideo = () => {
    setSelectedVideo(null);
  };

  // Show article page if an article is selected
  if (selectedArticle) {
    return <ArticlePage article={selectedArticle} onClose={handleCloseArticle} />;
  }

  // Show video lesson page if a video is selected
  if (selectedVideo) {
    return <VideoLessonPage video={selectedVideo} onClose={handleCloseVideo} />;
  }

  if (!user) {
    return (
      <div className="min-h-screen bg-white">
        <Banner />
        <InfoSection />
        <ArticlesSection onArticleClick={handleArticleClick} />
        
        {/* Call to Action */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 py-16 px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Pronto para Começar Sua Jornada?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Junte-se a milhares de estudantes que já estão transformando suas vidas com o inglês.
            </p>
            <button
              onClick={() => setShowAuthModal(true)}
              className="bg-white text-blue-600 py-4 px-8 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-200 transform hover:scale-105"
            >
              Começar Gratuitamente
            </button>
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
              
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setActiveSection('study')}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    activeSection === 'study' 
                      ? 'bg-blue-600 text-white' 
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  Estudar
                </button>
                
                <button
                  onClick={() => setActiveSection('videos')}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors flex items-center space-x-1 ${
                    activeSection === 'videos' 
                      ? 'bg-red-600 text-white' 
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <Play className="w-4 h-4" />
                  <span>Aulas em Vídeo</span>
                </button>
                
                <button
                  onClick={() => setActiveSection('articles')}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    activeSection === 'articles' 
                      ? 'bg-purple-600 text-white' 
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  Artigos
                </button>
              </div>
              
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
        {activeSection === 'study' ? (
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
        ) : activeSection === 'videos' ? (
          <div className="space-y-8">
            <VideoLessonsSection onVideoClick={handleVideoClick} />
          </div>
        ) : (
          <div className="space-y-8">
            <ArticlesSection onArticleClick={handleArticleClick} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Index;
