import React, { createContext, useState, useContext } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authData, setAuthData] = useState(null);

  const login = (data) => {
    setAuthData(data);
    localStorage.setItem("token", data.token);
  };

  const logout = () => {
    setAuthData(null);
    localStorage.removeItem("token");
  };

  return (
    <AuthContext.Provider value={{ authData, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook for convenience
export const useAuth = () => useContext(AuthContext);
