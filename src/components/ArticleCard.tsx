
import React from 'react';
import { Article } from '../types/types';
import { ArrowRight, Clock, BookOpen, Volume2 } from 'lucide-react';

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
  const estimatedReadTime = Math.max(2, Math.ceil(article.content.english.length * 0.3));

  return (
    <div 
      className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:scale-105 overflow-hidden group"
      onClick={() => onClick(article)}
    >
      {/* Card Header with Gradient */}
      <div className={`h-24 bg-gradient-to-r ${
        article.level === 'beginner' ? 'from-green-400 to-green-600' :
        article.level === 'basic' ? 'from-blue-400 to-blue-600' :
        article.level === 'intermediate' ? 'from-purple-400 to-purple-600' :
        article.level === 'advanced' ? 'from-orange-400 to-orange-600' :
        'from-red-400 to-red-600'
      } relative`}>
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        <div className="relative p-4 flex items-center justify-between h-full">
          <span className={`${levelColors[article.level]} text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg`}>
            {levelNames[article.level]}
          </span>
          <BookOpen className="w-6 h-6 text-white" />
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-3 leading-tight group-hover:text-purple-600 transition-colors">
          {article.title}
        </h3>
        <p className="text-gray-600 mb-4 leading-relaxed line-clamp-3">{article.excerpt}</p>
        
        {/* Article Stats */}
        <div className="flex items-center justify-between mb-4 text-sm text-gray-500">
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-1" />
              <span>~{estimatedReadTime} min</span>
            </div>
            <div className="flex items-center">
              <BookOpen className="w-4 h-4 mr-1" />
              <span>{article.content.english.length} linhas</span>
            </div>
            <div className="flex items-center">
              <Volume2 className="w-4 h-4 mr-1" />
              <span>Áudio</span>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <span className="text-sm text-gray-500">Tradução linha por linha</span>
          <div className="flex items-center text-purple-600 font-medium group-hover:text-purple-700 transition-colors">
            <span className="mr-2">Ler artigo</span>
            <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
