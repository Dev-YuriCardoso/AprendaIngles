
import React, { createContext, useContext, useState, useEffect } from 'react';
import { User, AuthUser, Level } from '../types/types';
import { storage } from '../utils/storage';

interface AuthContextType {
  user: User | null;
  login: (authUser: AuthUser) => Promise<boolean>;
  register: (authUser: AuthUser) => Promise<boolean>;
  logout: () => void;
  updateUserLevel: (level: Level) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const currentUser = storage.getCurrentUser();
    setUser(currentUser);
  }, []);

  const login = async (authUser: AuthUser): Promise<boolean> => {
    const users = storage.getUsers();
    const foundUser = users.find(u => u.email === authUser.email);
    
    if (foundUser) {
      // In a real app, you'd verify the password hash
      setUser(foundUser);
      storage.setCurrentUser(foundUser);
      return true;
    }
    return false;
  };

  const register = async (authUser: AuthUser): Promise<boolean> => {
    const users = storage.getUsers();
    const existingUser = users.find(u => u.email === authUser.email);
    
    if (existingUser) {
      return false; // User already exists
    }

    const newUser: User = {
      id: crypto.randomUUID(),
      email: authUser.email,
      name: authUser.name || 'User',
      currentLevel: 'beginner',
      createdAt: new Date()
    };

    storage.saveUser(newUser);
    setUser(newUser);
    storage.setCurrentUser(newUser);
    return true;
  };

  const logout = () => {
    setUser(null);
    storage.setCurrentUser(null);
  };

  const updateUserLevel = (level: Level) => {
    if (user) {
      const updatedUser = { ...user, currentLevel: level };
      setUser(updatedUser);
      storage.saveUser(updatedUser);
      storage.setCurrentUser(updatedUser);
    }
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout, updateUserLevel }}>
      {children}
    </AuthContext.Provider>
  );
};
