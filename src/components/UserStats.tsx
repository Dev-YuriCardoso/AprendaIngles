
import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import { storage } from '../utils/storage';
import { phrases } from '../data/phrases';
import { BarChart3, Calendar, Trophy, Target } from 'lucide-react';

const UserStats: React.FC = () => {
  const { user } = useAuth();

  if (!user) return null;

  const userProgress = storage.getUserProgress(user.id);
  const studySessions = storage.getStudySessions(user.id);
  const levelPhrases = phrases.filter(p => p.level === user.currentLevel);
  
  const studiedPhrases = userProgress.length;
  const totalPhrases = levelPhrases.length;
  const progressPercentage = totalPhrases > 0 ? Math.round((studiedPhrases / totalPhrases) * 100) : 0;
  
  const totalSessions = studySessions.length;
  const totalPhrasesStudied = studySessions.reduce((acc, session) => acc + session.phrasesStudied, 0);
  const averageAccuracy = studySessions.length > 0 
    ? Math.round(studySessions.reduce((acc, session) => 
        acc + (session.correctAnswers / session.phrasesStudied), 0) / studySessions.length * 100) 
    : 0;

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 space-y-6">
      <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
        <BarChart3 className="w-6 h-6 text-blue-500" />
        Seu Progresso
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg p-4 text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-blue-100 text-sm">Progresso do Nível</p>
              <p className="text-2xl font-bold">{progressPercentage}%</p>
              <p className="text-blue-100 text-xs">{studiedPhrases}/{totalPhrases} frases</p>
            </div>
            <Target className="w-8 h-8 text-blue-200" />
          </div>
        </div>

        <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-lg p-4 text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-green-100 text-sm">Sessões de Estudo</p>
              <p className="text-2xl font-bold">{totalSessions}</p>
              <p className="text-green-100 text-xs">sessões completas</p>
            </div>
            <Calendar className="w-8 h-8 text-green-200" />
          </div>
        </div>

        <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg p-4 text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-purple-100 text-sm">Frases Estudadas</p>
              <p className="text-2xl font-bold">{totalPhrasesStudied}</p>
              <p className="text-purple-100 text-xs">total acumulado</p>
            </div>
            <BarChart3 className="w-8 h-8 text-purple-200" />
          </div>
        </div>

        <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg p-4 text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-orange-100 text-sm">Precisão Média</p>
              <p className="text-2xl font-bold">{averageAccuracy}%</p>
              <p className="text-orange-100 text-xs">nas avaliações</p>
            </div>
            <Trophy className="w-8 h-8 text-orange-200" />
          </div>
        </div>
      </div>

      <div className="bg-gray-50 rounded-lg p-4">
        <h3 className="font-semibold text-gray-800 mb-2">Progresso no Nível {user.currentLevel}</h3>
        <div className="w-full bg-gray-200 rounded-full h-3">
          <div 
            className="bg-gradient-to-r from-blue-500 to-purple-500 h-3 rounded-full transition-all duration-300"
            style={{ width: `${progressPercentage}%` }}
          ></div>
        </div>
        <p className="text-sm text-gray-600 mt-2">
          {totalPhrases - studiedPhrases} frases restantes para completar este nível
        </p>
      </div>
    </div>
  );
};

export default UserStats;
