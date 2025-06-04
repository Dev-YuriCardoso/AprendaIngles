
import React from 'react';
import { VideoLesson } from '../types/types';
import { X, Youtube, Clock, User } from 'lucide-react';

interface VideoLessonPageProps {
  video: VideoLesson;
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

const VideoLessonPage: React.FC<VideoLessonPageProps> = ({ video, onClose }) => {
  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-3">
              <span className={`${levelColors[video.level]} text-white px-3 py-1 rounded-full text-sm font-medium`}>
                {levelNames[video.level]}
              </span>
              <div className="flex items-center text-gray-500 text-sm">
                <Clock className="w-4 h-4 mr-1" />
                <span>{video.duration}</span>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          
          <h1 className="text-3xl font-bold text-gray-800 mb-4">{video.title}</h1>
          <p className="text-gray-600 text-lg">{video.description}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Video Player */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="aspect-video">
                <iframe
                  src={`https://www.youtube.com/embed/${video.youtubeId}`}
                  title={video.title}
                  className="w-full h-full"
                  allowFullScreen
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                />
              </div>
            </div>
          </div>

          {/* Video Info */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center space-x-2 mb-4">
                <Youtube className="w-6 h-6 text-red-600" />
                <h3 className="text-lg font-semibold text-gray-800">Informações da Aula</h3>
              </div>
              
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Nível:</span>
                  <span className="font-medium">{levelNames[video.level]}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Duração:</span>
                  <span className="font-medium">{video.duration}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Legendas:</span>
                  <span className="font-medium">PT/EN</span>
                </div>
              </div>

              <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                <h4 className="font-semibold text-blue-800 mb-2">💡 Dica de Aprendizado</h4>
                <p className="text-blue-700 text-sm">
                  Assista primeiro sem legendas, depois com legendas em inglês, e por último compare com o português.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Subtitles Section */}
        <div className="mt-8 bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
            <User className="w-6 h-6 mr-2 text-blue-600" />
            Legendas da Aula
          </h2>
          
          <div className="space-y-6">
            {video.subtitles.english.map((englishLine, index) => (
              <div key={index} className="border-b border-gray-100 pb-4 last:border-b-0">
                {/* English Line */}
                <div className="mb-3">
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="text-sm font-medium text-blue-600 bg-blue-100 px-2 py-1 rounded">EN</span>
                    <span className="text-xs text-gray-400">Linha {index + 1}</span>
                  </div>
                  <p className="text-lg text-gray-800 leading-relaxed font-medium">{englishLine}</p>
                </div>

                {/* Portuguese Translation */}
                <div className="ml-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="text-sm font-medium text-green-600 bg-green-100 px-2 py-1 rounded">PT</span>
                    <span className="text-xs text-gray-400">Tradução</span>
                  </div>
                  <p className="text-base text-gray-700 leading-relaxed bg-green-50 p-3 rounded-lg">
                    {video.subtitles.portuguese[index]}
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
            className="bg-gray-600 hover:bg-gray-700 text-white px-8 py-3 rounded-lg font-medium transition-colors"
          >
            Voltar às Aulas em Vídeo
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoLessonPage;
