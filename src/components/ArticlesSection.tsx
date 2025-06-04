
import React, { useState } from 'react';
import { articles } from '../data/articles';
import { Article, Level } from '../types/types';
import ArticleCard from './ArticleCard';

interface ArticlesSectionProps {
  onArticleClick: (article: Article) => void;
}

const levelNames = {
  beginner: 'Iniciante',
  basic: 'Básico',
  intermediate: 'Intermediário',
  advanced: 'Avançado',
  fluent: 'Fluente'
};

const ArticlesSection: React.FC<ArticlesSectionProps> = ({ onArticleClick }) => {
  const [selectedLevel, setSelectedLevel] = useState<Level>('beginner');

  const filteredArticles = articles.filter(article => article.level === selectedLevel);

  return (
    <div className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Artigos por Nível
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Pratique leitura com artigos adaptados ao seu nível de inglês. Cada artigo inclui tradução linha por linha e áudio.
          </p>
        </div>

        {/* Level Selector */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {Object.entries(levelNames).map(([level, name]) => (
            <button
              key={level}
              onClick={() => setSelectedLevel(level as Level)}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-200 ${
                selectedLevel === level
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {name}
            </button>
          ))}
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredArticles.map(article => (
            <ArticleCard
              key={article.id}
              article={article}
              onClick={onArticleClick}
            />
          ))}
        </div>

        {filteredArticles.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">
              Nenhum artigo disponível para este nível no momento.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ArticlesSection;
