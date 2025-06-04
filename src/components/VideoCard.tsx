
import React from 'react';
import { VideoLesson } from '../types/types';
import { Play, Clock, Youtube } from 'lucide-react';

interface VideoCardProps {
  video: VideoLesson;
  onClick: (video: VideoLesson) => void;
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

const VideoCard: React.FC<VideoCardProps> = ({ video, onClick }) => {
  return (
    <div 
      className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:scale-105 overflow-hidden"
      onClick={() => onClick(video)}
    >
      {/* Video Thumbnail */}
      <div className="relative h-48 overflow-hidden">
        <img 
          src={video.thumbnail} 
          alt={video.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
          <div className="bg-red-600 rounded-full p-4">
            <Play className="w-8 h-8 text-white fill-white" />
          </div>
        </div>
        <div className="absolute top-3 left-3">
          <span className={`${levelColors[video.level]} text-white px-2 py-1 rounded-full text-xs font-medium`}>
            {levelNames[video.level]}
          </span>
        </div>
        <div className="absolute bottom-3 right-3 bg-black bg-opacity-70 text-white px-2 py-1 rounded text-xs flex items-center">
          <Clock className="w-3 h-3 mr-1" />
          {video.duration}
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-3 line-clamp-2">{video.title}</h3>
        <p className="text-gray-600 mb-4 leading-relaxed line-clamp-3">{video.description}</p>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center text-gray-500 text-sm">
            <Youtube className="w-4 h-4 mr-1 text-red-600" />
            <span>Vídeo Aula</span>
          </div>
          <div className="flex items-center text-blue-600 text-sm font-medium">
            <span>Assistir</span>
            <Play className="w-4 h-4 ml-1" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
