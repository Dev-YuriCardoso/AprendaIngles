
import React from 'react';
import { Article } from '../types/types';
import { ArrowDown, Volume2, X } from 'lucide-react';

interface ArticlePageProps {
  article: Article;
  onClose: () => void;
}

const levelColors = {
  beginner: 'bg-green-500',
  basic: 'bg-blue-500',
  intermediate: 'bg-purple-500',
  advanced: 'bg-orange-500',
  fluent: 'bg-red-500'
};

const levelNames = {
  beginner: 'Iniciante',
  basic: 'Básico',
  intermediate: 'Intermediário',
  advanced: 'Avançado',
  fluent: 'Fluente'
};

const ArticlePage: React.FC<ArticlePageProps> = ({ article, onClose }) => {
  const playFullAudio = () => {
    const fullText = article.content.english.join(' ');
    const utterance = new SpeechSynthesisUtterance(fullText);
    utterance.lang = 'en-US';
    utterance.rate = 0.8;
    speechSynthesis.speak(utterance);
  };

  const playLineAudio = (text: string) => {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en-US';
    utterance.rate = 0.8;
    speechSynthesis.speak(utterance);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="flex items-center justify-between mb-4">
            <span className={`${levelColors[article.level]} text-white px-3 py-1 rounded-full text-sm font-medium`}>
              {levelNames[article.level]}
            </span>
            <button
              onClick={onClose}
              className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          
          <h1 className="text-3xl font-bold text-gray-800 mb-4">{article.title}</h1>
          
          <div className="flex items-center justify-between">
            <p className="text-gray-600">{article.excerpt}</p>
            <button
              onClick={playFullAudio}
              className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors"
            >
              <Volume2 className="w-5 h-5" />
              <span>Ouvir Artigo Completo</span>
            </button>
          </div>
        </div>

        {/* Article Content */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="space-y-6">
            {article.content.english.map((englishLine, index) => (
              <div key={index} className="border-b border-gray-100 pb-4 last:border-b-0">
                {/* English Line */}
                <div className="flex items-start justify-between mb-2">
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-1">
                      <span className="text-sm font-medium text-blue-600">EN</span>
                      <span className="text-xs text-gray-400">Linha {index + 1}</span>
                    </div>
                    <p className="text-lg text-gray-800 leading-relaxed">{englishLine}</p>
                  </div>
                  <button
                    onClick={() => playLineAudio(englishLine)}
                    className="ml-4 p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                    title="Ouvir esta linha"
                  >
                    <Volume2 className="w-4 h-4" />
                  </button>
                </div>

                {/* Portuguese Translation */}
                <div className="ml-6">
                  <div className="flex items-center space-x-2 mb-1">
                    <span className="text-sm font-medium text-green-600">PT</span>
                    <span className="text-xs text-gray-400">Tradução</span>
                  </div>
                  <p className="text-base text-gray-700 leading-relaxed bg-green-50 p-3 rounded-lg">
                    {article.content.portuguese[index]}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Back Button */}
        <div className="text-center mt-8">
          <button
            onClick={onClose}
            className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
          >
            Voltar aos Artigos
          </button>
        </div>
      </div>
    </div>
  );
};

export default ArticlePage;
