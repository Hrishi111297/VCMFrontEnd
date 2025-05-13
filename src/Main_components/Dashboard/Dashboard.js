// src/Main_components/Dashboard.js
import React from "react";
import Sidebar from "../Sidebar";
import { Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 p-6 bg-gray-100 overflow-y-auto mt-20">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
