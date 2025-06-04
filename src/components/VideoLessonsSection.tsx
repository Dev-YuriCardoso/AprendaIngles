
import React, { useState } from 'react';
import { videoLessons } from '../data/videoLessons';
import { VideoLesson, Level } from '../types/types';
import VideoCard from './VideoCard';
import { Play, Youtube, Star } from 'lucide-react';

interface VideoLessonsSectionProps {
  onVideoClick: (video: VideoLesson) => void;
}

const levelNames = {
  beginner: 'Iniciante',
  basic: 'Básico',
  intermediate: 'Intermediário',
  advanced: 'Avançado',
  fluent: 'Fluente'
};

const VideoLessonsSection: React.FC<VideoLessonsSectionProps> = ({ onVideoClick }) => {
  const [selectedLevel, setSelectedLevel] = useState<Level>('beginner');

  const filteredVideos = videoLessons.filter(video => video.level === selectedLevel);

  return (
    <div className="bg-white">
      {/* Video Lessons Banner */}
      <div className="bg-gradient-to-r from-red-600 via-purple-600 to-pink-600 text-white py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <Youtube className="w-16 h-16 text-yellow-300" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Aulas em <span className="text-yellow-300">Vídeo</span> Interativas
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed">
            Aprenda inglês com vídeos envolventes, legendas bilíngues e exercícios práticos para acelerar seu aprendizado.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <Play className="w-12 h-12 mx-auto mb-4 text-yellow-300" />
              <h3 className="text-lg font-semibold mb-2">Vídeos HD</h3>
              <p className="text-sm opacity-90">Conteúdo de alta qualidade com áudio cristalino</p>
            </div>
            
            <div className="text-center">
              <Star className="w-12 h-12 mx-auto mb-4 text-yellow-300" />
              <h3 className="text-lg font-semibold mb-2">Legendas Bilíngues</h3>
              <p className="text-sm opacity-90">Inglês e português lado a lado para melhor compreensão</p>
            </div>
            
            <div className="text-center">
              <Youtube className="w-12 h-12 mx-auto mb-4 text-yellow-300" />
              <h3 className="text-lg font-semibold mb-2">Conteúdo Exclusivo</h3>
              <p className="text-sm opacity-90">Aulas criadas especialmente para brasileiros</p>
            </div>
          </div>
        </div>
      </div>

      {/* Video Content */}
      <div className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Aulas por Nível
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Escolha vídeos adaptados ao seu nível de inglês. Cada aula inclui legendas em inglês e português para facilitar o aprendizado.
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
                    ? 'bg-red-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {name}
              </button>
            ))}
          </div>

          {/* Videos Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredVideos.map(video => (
              <VideoCard
                key={video.id}
                video={video}
                onClick={onVideoClick}
              />
            ))}
          </div>

          {filteredVideos.length === 0 && (
            <div className="text-center py-12">
              <Youtube className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-500 text-lg">
                Nenhuma aula em vídeo disponível para este nível no momento.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default VideoLessonsSection;
