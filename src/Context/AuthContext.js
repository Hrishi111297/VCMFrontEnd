import React, { createContext, useState, useContext, useEffect } from "react";
import { useLoader } from "../Context/LoaderContext";
import { getUSerDetails } from "../Main_components/Profile/Constant";
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authData, setAuthData] = useState(null);
  const { showLoader, hideLoader } = useLoader();

  const fetchProfile = async (token) => {
debugger;
    showLoader();
    try {
      const response = await fetch(getUSerDetails, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Failed to fetch profile");
      }

      const userData = await response.json();

      setAuthData({
        token,
        user: userData,
      });
      console.log("login",authData)
        } catch (error) {
      console.error("Fetch profile error:", error);
      logout();
    } finally {
      hideLoader();
    }
  };

  const login = async (data) => {
    localStorage.setItem("token", data.token);
      await fetchProfile(data.token);
  };

  const logout = () => {
    setAuthData(null);
    localStorage.removeItem("token");
  };
 const refreshData = () => {
   const token = localStorage.getItem("token");
    if (token) {
      fetchProfile(token);
    } 
   
  };
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      fetchProfile(token);
    } else {
    }
  }, []);

  return (
    <AuthContext.Provider value={{ authData, login, logout,refreshData }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
