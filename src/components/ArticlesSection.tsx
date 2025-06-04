
import React, { useState } from 'react';
import { articles } from '../data/articles';
import { Article, Level } from '../types/types';
import ArticleCard from './ArticleCard';
import { BookOpen, Globe, Star, TrendingUp, Users, Award, Clock, Zap } from 'lucide-react';

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
    <div className="bg-white">
      {/* Articles Banner */}
      <div className="bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-700 text-white py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <BookOpen className="w-16 h-16 text-yellow-300" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Artigos para <span className="text-yellow-300">Praticar</span> Leitura
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed">
            Desenvolva suas habilidades de leitura em inglês com artigos cuidadosamente selecionados para cada nível de aprendizado.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <Globe className="w-12 h-12 mx-auto mb-4 text-yellow-300" />
              <h3 className="text-lg font-semibold mb-2">Temas Globais</h3>
              <p className="text-sm opacity-90">Artigos sobre temas relevantes e atuais do mundo todo</p>
            </div>
            
            <div className="text-center">
              <Zap className="w-12 h-12 mx-auto mb-4 text-yellow-300" />
              <h3 className="text-lg font-semibold mb-2">Tradução Instantânea</h3>
              <p className="text-sm opacity-90">Cada linha com tradução para português ao lado</p>
            </div>
            
            <div className="text-center">
              <Star className="w-12 h-12 mx-auto mb-4 text-yellow-300" />
              <h3 className="text-lg font-semibold mb-2">Áudio Nativo</h3>
              <p className="text-sm opacity-90">Pronuncia perfeita com tecnologia text-to-speech</p>
            </div>
          </div>
        </div>
      </div>

      {/* Reading Benefits Section */}
      <div className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Por Que Praticar Leitura em Inglês?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A leitura é uma das formas mais eficazes de expandir seu vocabulário e compreensão do inglês.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-white rounded-xl shadow-lg">
              <TrendingUp className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Expande Vocabulário</h3>
              <p className="text-gray-600 text-sm">Aprenda novas palavras em contexto natural</p>
            </div>

            <div className="text-center p-6 bg-white rounded-xl shadow-lg">
              <Clock className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Melhora Fluência</h3>
              <p className="text-gray-600 text-sm">Desenvolve compreensão rápida de textos</p>
            </div>

            <div className="text-center p-6 bg-white rounded-xl shadow-lg">
              <Users className="w-12 h-12 text-indigo-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Cultura Geral</h3>
              <p className="text-gray-600 text-sm">Conheca diferentes culturas e perspectivas</p>
            </div>

            <div className="text-center p-6 bg-white rounded-xl shadow-lg">
              <Award className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Confiança</h3>
              <p className="text-gray-600 text-sm">Ganhe segurança para ler qualquer texto</p>
            </div>
          </div>
        </div>
      </div>

      {/* Articles Content */}
      <div className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Artigos por Nível
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Escolha artigos adaptados ao seu nível de inglês. Cada artigo inclui tradução linha por linha e áudio para pronuncia.
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
                    ? 'bg-purple-600 text-white shadow-lg'
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
              <BookOpen className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-500 text-lg">
                Nenhum artigo disponível para este nível no momento.
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Study Tips Section */}
      <div className="py-16 px-4 bg-gradient-to-r from-indigo-50 to-purple-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">
            Dicas para Maximizar Seu Aprendizado
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 font-bold text-xl">1</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Leia em Voz Alta</h3>
              <p className="text-gray-600">
                Pratique a pronuncia lendo os artigos em voz alta. Use o áudio como guia para melhorar sua entonação.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-purple-600 font-bold text-xl">2</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Anote Palavras Novas</h3>
              <p className="text-gray-600">
                Mantenha um caderno de vocabulário. Anote palavras desconhecidas e suas traduções para revisar depois.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-green-600 font-bold text-xl">3</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Releia os Artigos</h3>
              <p className="text-gray-600">
                A repetição é chave para o aprendizado. Releia artigos anteriores para reforçar o vocabulário aprendido.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-orange-600 font-bold text-xl">4</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Discussão Mental</h3>
              <p className="text-gray-600">
                Após ler, tente resumir o artigo mentalmente em inglês. Isso melhora sua compreensão e retenção.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticlesSection;
