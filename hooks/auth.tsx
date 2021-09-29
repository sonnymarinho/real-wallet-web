import React, { createContext, useContext, useState } from 'react';
import { STORAGE_KEY } from '../config/constants';

interface AuthContextData {
  setToken: (value: string) => void;
  getToken: () => string;
  clearToken: () => void;
}

const AuthContext = createContext({} as AuthContextData);

const AuthProvider: React.FC = ({ children }) => {
  const onServer = typeof window === 'undefined';

  const { setToken, getToken, clearToken } = {
    setToken: (value: string): void => {
      onServer ? {} : localStorage.setItem(STORAGE_KEY.TOKEN, value);
    },
    getToken: (): string => (onServer ? '' : localStorage.getItem(STORAGE_KEY.TOKEN) || ''),
    clearToken: (): void => {
      onServer ? {} : localStorage.removeItem(STORAGE_KEY.TOKEN);
    },
  };

  return (
    <AuthContext.Provider value={{ setToken, getToken, clearToken }}>
      {children}
    </AuthContext.Provider>
  );
};

function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
}

export { AuthProvider, useAuth };
