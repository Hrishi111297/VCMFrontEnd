import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { BiAtom } from "react-icons/bi";
import {
  AiOutlineCodepenCircle,
  AiOutlineArrowRight,
  AiOutlineArrowLeft,
  AiOutlineBank,
  AiOutlineApartment,
  AiOutlineAreaChart,
  AiOutlineDown,
  AiOutlineRight,
} from "react-icons/ai";

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [openDropdowns, setOpenDropdowns] = useState({});

  const toggleSidebar = () => setIsCollapsed(!isCollapsed);

  const toggleDropdown = (index) => {
    setOpenDropdowns((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const navItems = [
    { icon: <FaHome />, label: "Home", path: "/main/" },
    ,
    {
      icon:  <BiAtom />,
      label: "Courses",
      path: "/main/courses",
      subItems: [
        { label: "add", path: "/main/courses/add" },
        { label: "details", path: "/main/courses/details" },
      ],
    },
    {
      icon: <AiOutlineBank />,
      label: "Staff",
      path: "/main/staff",
      subItems: [
        { label: "add", path: "/main/staff/add" },
      ],
    },
    { icon: <AiOutlineAreaChart />, label: "Fees", path: "/main/fees",
      subItems: [
        { label: "add", path: "/main/fees/add" },
      ], },
      { icon: <AiOutlineAreaChart />, label: "Attendance", path: "/main/attendance",
        subItems: [
          { label: "add", path: "/main/attendance/add" },
        ], },
  
  ];

  return (
    <div
      className={`transition-all duration-700 bg-purple-600 text-white mt-20 ${
        isCollapsed ? "w-12" : "w-56"
      } `}
    >
      <button
        onClick={toggleSidebar}
        className={`p-3 w-full flex transition-all duration-800 bg-purple-700 hover:bg-purple-800 ${
          isCollapsed ? "items-center justify-center" : "justify-end"
        }`}
      >
        {isCollapsed ? <AiOutlineArrowRight /> : <AiOutlineArrowLeft />}
      </button>

      <ul className="mt-4 space-y-2">
        {navItems.map((item, index) => (
          <li key={index}>
            <div
              className={`flex items-center justify-between px-4 py-2 hover:bg-purple-700`}
            >
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center gap-3 text-sm font-medium w-full ${
                    isActive ? "text-yellow-300 font-semibold" : "text-white"
                  }`
                }
                title={item.label}
              >
                <span className="text-lg">{item.icon}</span>
                {!isCollapsed && <span>{item.label}</span>}
              </NavLink>

              {!isCollapsed && item.subItems && (
                <button
                  onClick={() => toggleDropdown(index)}
                  className="ml-2 focus:outline-none"
                >
                  {openDropdowns[index] ? <AiOutlineDown /> : <AiOutlineRight />}
                </button>
              )}
            </div>

            {/* Sub Items */}
            {!isCollapsed && item.subItems && openDropdowns[index] && (
              <ul className="pl-12 text-sm bg-purple-700/40">
                {item.subItems.map((sub, subIndex) => (
                  <li key={subIndex}>
                    <NavLink
                      to={sub.path}
                      className={({ isActive }) =>
                        `block py-1 transition ${
                          isActive
                            ? "text-yellow-300 font-medium"
                            : "text-white"
                        }`
                      }
                    >
                      {sub.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
