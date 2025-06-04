
import { User, UserProgress, StudySession } from '../types/types';

const STORAGE_KEYS = {
  CURRENT_USER: 'englishApp_currentUser',
  USERS: 'englishApp_users',
  USER_PROGRESS: 'englishApp_userProgress',
  STUDY_SESSIONS: 'englishApp_studySessions'
};

export const storage = {
  // User management
  getCurrentUser: (): User | null => {
    const userStr = localStorage.getItem(STORAGE_KEYS.CURRENT_USER);
    return userStr ? JSON.parse(userStr) : null;
  },

  setCurrentUser: (user: User | null): void => {
    if (user) {
      localStorage.setItem(STORAGE_KEYS.CURRENT_USER, JSON.stringify(user));
    } else {
      localStorage.removeItem(STORAGE_KEYS.CURRENT_USER);
    }
  },

  getUsers: (): User[] => {
    const usersStr = localStorage.getItem(STORAGE_KEYS.USERS);
    return usersStr ? JSON.parse(usersStr) : [];
  },

  saveUser: (user: User): void => {
    const users = storage.getUsers();
    const existingIndex = users.findIndex(u => u.id === user.id);
    
    if (existingIndex >= 0) {
      users[existingIndex] = user;
    } else {
      users.push(user);
    }
    
    localStorage.setItem(STORAGE_KEYS.USERS, JSON.stringify(users));
  },

  // User progress
  getUserProgress: (userId: string): UserProgress[] => {
    const progressStr = localStorage.getItem(STORAGE_KEYS.USER_PROGRESS);
    const allProgress: UserProgress[] = progressStr ? JSON.parse(progressStr) : [];
    return allProgress.filter(p => p.userId === userId);
  },

  saveUserProgress: (progress: UserProgress): void => {
    const allProgress = JSON.parse(localStorage.getItem(STORAGE_KEYS.USER_PROGRESS) || '[]');
    const existingIndex = allProgress.findIndex(
      (p: UserProgress) => p.userId === progress.userId && p.phraseId === progress.phraseId
    );

    if (existingIndex >= 0) {
      allProgress[existingIndex] = progress;
    } else {
      allProgress.push(progress);
    }

    localStorage.setItem(STORAGE_KEYS.USER_PROGRESS, JSON.stringify(allProgress));
  },

  // Study sessions
  saveStudySession: (session: StudySession): void => {
    const sessions = JSON.parse(localStorage.getItem(STORAGE_KEYS.STUDY_SESSIONS) || '[]');
    sessions.push(session);
    localStorage.setItem(STORAGE_KEYS.STUDY_SESSIONS, JSON.stringify(sessions));
  },

  getStudySessions: (userId: string): StudySession[] => {
    const sessionsStr = localStorage.getItem(STORAGE_KEYS.STUDY_SESSIONS);
    const allSessions: StudySession[] = sessionsStr ? JSON.parse(sessionsStr) : [];
    return allSessions.filter(s => s.userId === userId);
  }
};
