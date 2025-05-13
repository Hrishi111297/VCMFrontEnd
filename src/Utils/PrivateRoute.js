import React from "react";
import { Navigate } from "react-router-dom";
import { isTokenValid, removeToken } from "./Auth";

const PrivateRoute = ({ children }) => {
  const token = localStorage.getItem("token");

  if (!isTokenValid(token)) {
    // Token is invalid or expired, clear the token and redirect to login
    removeToken();
    return <Navigate to="/login" />;
  }

  return children;
};

export default PrivateRoute;
