
export interface User {
  id: string;
  email: string;
  name: string;
  currentLevel: Level;
  createdAt: Date;
}

export interface AuthUser {
  email: string;
  password: string;
  name?: string;
}

export type Level = 'beginner' | 'basic' | 'intermediate' | 'advanced' | 'fluent';

export type Difficulty = 'again' | 'hard' | 'good' | 'easy';

export interface Phrase {
  id: string;
  english: string;
  portuguese: string;
  level: Level;
  audioUrl?: string;
  complementaryText?: {
    english: string[];
    portuguese: string[];
  };
}

export interface UserProgress {
  phraseId: string;
  userId: string;
  lastReviewed: Date;
  nextReview: Date;
  interval: number;
  easeFactor: number;
  repetitions: number;
  difficulty: Difficulty | null;
}

export interface StudySession {
  userId: string;
  phrasesStudied: number;
  correctAnswers: number;
  sessionDate: Date;
}

export interface Article {
  id: string;
  title: string;
  excerpt: string;
  level: Level;
  content: {
    english: string[];
    portuguese: string[];
  };
}

export interface VideoLesson {
  id: string;
  title: string;
  description: string;
  level: Level;
  youtubeId: string;
  duration: string;
  thumbnail: string;
  subtitles: {
    english: string[];
    portuguese: string[];
  };
}
