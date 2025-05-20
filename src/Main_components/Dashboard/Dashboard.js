// src/Main_components/Dashboard.js
import React from "react";
import Sidebar from "../Sidebar";
import { Outlet } from "react-router-dom";
import { useAuth } from "../../Context/AuthContext";

const Dashboard = () => {
  const { authData, loading, logout } = useAuth();
  return (
    <div className="flex ">
      <Sidebar />
      <div className="flex-1  overflow-y-auto h-screen  mt-20">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
