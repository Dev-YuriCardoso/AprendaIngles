
import { UserProgress, Difficulty } from '../types/types';

export const calculateNextReview = (
  progress: UserProgress,
  difficulty: Difficulty
): { nextReview: Date; interval: number; easeFactor: number; repetitions: number } => {
  let { interval, easeFactor, repetitions } = progress;

  // Adjust ease factor based on difficulty
  switch (difficulty) {
    case 'again':
      easeFactor = Math.max(1.3, easeFactor - 0.2);
      repetitions = 0;
      interval = 1;
      break;
    case 'hard':
      easeFactor = Math.max(1.3, easeFactor - 0.15);
      interval = Math.max(1, Math.floor(interval * 1.2));
      repetitions += 1;
      break;
    case 'good':
      if (repetitions === 0) {
        interval = 1;
      } else if (repetitions === 1) {
        interval = 6;
      } else {
        interval = Math.floor(interval * easeFactor);
      }
      repetitions += 1;
      break;
    case 'easy':
      easeFactor = Math.min(2.5, easeFactor + 0.15);
      if (repetitions === 0) {
        interval = 4;
      } else {
        interval = Math.floor(interval * easeFactor * 1.3);
      }
      repetitions += 1;
      break;
  }

  const nextReview = new Date();
  nextReview.setDate(nextReview.getDate() + interval);

  return {
    nextReview,
    interval,
    easeFactor,
    repetitions
  };
};

export const getDueCards = (userProgress: UserProgress[]): string[] => {
  const now = new Date();
  return userProgress
    .filter(progress => new Date(progress.nextReview) <= now)
    .map(progress => progress.phraseId);
};
