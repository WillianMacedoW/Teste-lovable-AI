
import React, { createContext, useState, useContext, ReactNode } from 'react';

type UserType = {
  name: string;
  email: string;
  isBarberShop?: boolean;
  shopName?: string;
} | null;

interface AuthContextType {
  user: UserType;
  login: (userData: Omit<NonNullable<UserType>, 'isBarberShop' | 'shopName'> & { isBarberShop?: boolean, shopName?: string }) => void;
  logout: () => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<UserType>(() => {
    // Check if we have a saved user in localStorage
    const savedUser = localStorage.getItem('barberTimeUser');
    return savedUser ? JSON.parse(savedUser) : null;
  });

  const isAuthenticated = !!user;

  const login = (userData: Omit<NonNullable<UserType>, 'isBarberShop' | 'shopName'> & { isBarberShop?: boolean, shopName?: string }) => {
    setUser(userData);
    localStorage.setItem('barberTimeUser', JSON.stringify(userData));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('barberTimeUser');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  
  return context;
};
