
import React from 'react';
import { Article } from '../types/types';
import { ArrowDown, Clock, BookOpen } from 'lucide-react';

interface ArticleCardProps {
  article: Article;
  onClick: (article: Article) => void;
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

const ArticleCard: React.FC<ArticleCardProps> = ({ article, onClick }) => {
  return (
    <div 
      className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:scale-105"
      onClick={() => onClick(article)}
    >
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <span className={`${levelColors[article.level]} text-white px-3 py-1 rounded-full text-sm font-medium`}>
            {levelNames[article.level]}
          </span>
          <div className="flex items-center text-gray-500 text-sm">
            <Clock className="w-4 h-4 mr-1" />
            <span>~5 min</span>
          </div>
        </div>
        
        <h3 className="text-xl font-semibold text-gray-800 mb-3">{article.title}</h3>
        <p className="text-gray-600 mb-4 leading-relaxed">{article.excerpt}</p>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center text-gray-500 text-sm">
            <BookOpen className="w-4 h-4 mr-1" />
            <span>{article.content.english.length} linhas</span>
          </div>
          <div className="flex items-center text-blue-600 text-sm font-medium">
            <span>Ler artigo</span>
            <ArrowDown className="w-4 h-4 ml-1 transform rotate-[-45deg]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
