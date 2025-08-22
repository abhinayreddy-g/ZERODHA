import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(() => localStorage.getItem('userToken'));

  const login = (jwtToken) => {
    setToken(jwtToken);
    localStorage.setItem('userToken', jwtToken);
  };

  const logout = () => {
    setToken(null);
    localStorage.removeItem('userToken');
  };

  return (
    <AuthContext.Provider value={{ token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
