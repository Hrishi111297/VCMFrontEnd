// Sidebar.js
import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { BiAtom } from "react-icons/bi";
import {
  AiOutlineCodepenCircle,
  AiOutlineArrowRight,
  AiOutlineArrowLeft,
  AiOutlineBank,
  AiOutlineApartment,
  AiOutlineAreaChart,
} from "react-icons/ai";

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  // Add route paths to each item
  const navItems = [
    { icon: <FaHome />, label: "Home", path: "/" },
    { icon: <BiAtom />, label: "Courses", path: "/courses" },
    {
      icon: <AiOutlineApartment />,
      label: "Assignments",
      path: "/assignments",
    },
    { icon: <AiOutlineBank />, label: "Attendance", path: "/attendance" },
    { icon: <AiOutlineAreaChart />, label: "Fees", path: "/fees" },
    { icon: <AiOutlineCodepenCircle />, label: "About", path: "/about" },
  ];

  return (
    <div className="flex mt-14 h-[75vh]">
      {/* Sidebar */}
      <div
        className={`transition-all duration-700 bg-purple-600 text-white ${
          isCollapsed ? "w-12" : "w-48"
        }`}
      >
        <button
          onClick={toggleSidebar}
          className={`p-3 w-full flex transition-all duration-800  bg-purple-700 hover:bg-purple-800  ${
            isCollapsed ? "items-center" : " justify-end items-end"
          }`}
        >
          {isCollapsed ? <AiOutlineArrowRight /> : <AiOutlineArrowLeft />}
        </button>
        <ul className="mt-4 space-y-2">
          {navItems.map((item, index) => (
            <li key={index} title={item.label}>
              <Link
                to={item.path}
                className="flex items-center p-2 px-4 transition-colors duration-300 hover:bg-purple-700 hover:text-yellow-300"
              >
                <span className="text-lg">{item.icon}</span>
                {!isCollapsed && (
                  <span className="ml-4 text-sm font-medium">{item.label}</span>
                )}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6">
        <Outlet />
      </div>
    </div>
  );
};

export default Sidebar;
