
import React from 'react';
import { BookOpen, Brain, Clock, Target } from 'lucide-react';

const InfoSection = () => {
  return (
    <div className="py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Por Que Nosso Método Funciona?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Utilizamos o sistema de repetição espaçada, comprovado cientificamente para maximizar a retenção de memória e acelerar o aprendizado.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
            <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <Brain className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Repetição Espaçada</h3>
            <p className="text-gray-600">
              Baseado em pesquisas neurocientíficas, nosso algoritmo otimiza o momento ideal para revisar cada palavra ou frase.
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
            <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <BookOpen className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Conteúdo Estruturado</h3>
            <p className="text-gray-600">
              Frases e artigos organizados por níveis de dificuldade, do básico ao fluente, garantindo progressão constante.
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
            <div className="bg-purple-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <Clock className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Aprendizado Eficiente</h3>
            <p className="text-gray-600">
              Apenas 15-20 minutos por dia são suficientes para ver resultados significativos em seu inglês.
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
            <div className="bg-orange-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <Target className="w-6 h-6 text-orange-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Foco em Resultados</h3>
            <p className="text-gray-600">
              Acompanhe seu progresso em tempo real e veja sua evolução através de estatísticas detalhadas.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoSection;
