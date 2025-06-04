
import React from 'react';
import { Level } from '../types/types';

interface LevelSelectorProps {
  currentLevel: Level;
  onLevelChange: (level: Level) => void;
  className?: string;
}

const levelInfo = {
  beginner: { name: 'Iniciante', color: 'bg-green-500 hover:bg-green-600', description: 'Frases básicas do dia a dia' },
  basic: { name: 'Básico', color: 'bg-blue-500 hover:bg-blue-600', description: 'Conversações simples' },
  intermediate: { name: 'Intermediário', color: 'bg-purple-500 hover:bg-purple-600', description: 'Estruturas mais complexas' },
  advanced: { name: 'Avançado', color: 'bg-orange-500 hover:bg-orange-600', description: 'Linguagem profissional' },
  fluent: { name: 'Fluente', color: 'bg-red-500 hover:bg-red-600', description: 'Vocabulário sofisticado' }
};

const LevelSelector: React.FC<LevelSelectorProps> = ({ currentLevel, onLevelChange, className = '' }) => {
  return (
    <div className={`space-y-4 ${className}`}>
      <h3 className="text-lg font-semibold text-gray-800 mb-4">Selecione seu nível</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {Object.entries(levelInfo).map(([level, info]) => (
          <button
            key={level}
            onClick={() => onLevelChange(level as Level)}
            className={`p-4 rounded-lg text-white font-medium transition-all duration-200 transform hover:scale-105 ${
              currentLevel === level 
                ? `${info.color} ring-4 ring-opacity-50 ring-offset-2` 
                : `${info.color} opacity-80`
            }`}
          >
            <div className="text-sm font-bold">{info.name}</div>
            <div className="text-xs opacity-90 mt-1">{info.description}</div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default LevelSelector;
