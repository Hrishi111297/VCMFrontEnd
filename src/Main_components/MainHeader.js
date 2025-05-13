import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose, AiOutlineLogin, AiOutlineLogout, AiOutlineSearch, AiOutlineEdit } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { removeToken } from "../Utils/Auth";

const MainHeader = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [loginHandle, setLoginHandle] = useState("Logout");
  const [userName, setUserName] = useState("John Doe"); // Replace with dynamic user name if needed
  const [searchQuery, setSearchQuery] = useState(""); // For the search bar
  
  const navigate = useNavigate();

  const handleLogin = () => {
    if (loginHandle === "Logout") {
      setLoginHandle("Login");
      setUserName(""); // Optionally clear user name on logout
      removeToken();
      navigate("/login");
    } else {
      setLoginHandle("Logout");
      setUserName("John Doe"); // Restore user name after login
    }
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleEditProfile = () => {

    navigate("/main/editprofile")
   
  };

  return (
    <header className="shadow-md fixed z-20 w-full  bg-white">
      <nav className="px-4 py-2 flex items-center justify-between">
        {/* Logo and Site Name */}
        <div className="flex items-center space-x-2 p-2">
          <img src="/LOGO.jpg" alt="Logo" className="w-10 h-10" />
          <span className="text-xl font-bold">Shree Vidya Classes</span>
        </div>

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex space-x-6 text-sm font-medium">
          <li className="hover:underline cursor-pointer">
            <Link to="/">Front Side</Link>
          </li>
          <li className="hover:underline cursor-pointer">
            <Link to="/main/">Home</Link>
          </li>
          <li className="hover:underline cursor-pointer">
            <Link to="/courses">Courses</Link>
          </li>
          <li className="hover:underline cursor-pointer">
            <Link to="/about">About</Link>
          </li>
          <li className="hover:underline cursor-pointer">
            <Link to="/staff">Staff</Link>
          </li>
        </ul>

        {/* Desktop Search Bar */}
        <div className="hidden md:flex items-center space-x-4">
          <div className="flex items-center border rounded-lg px-3 py-1">
            <AiOutlineSearch className="text-gray-500 mr-2" />
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearchChange}
              placeholder="Search..."
              className="outline-none border-none"
            />
          </div>
        </div>

        {/* Auth Links with Profile */}
        <div className="hidden md:flex space-x-4 items-center">
          <img
            src="/profile.jpg" // Replace with dynamic user image
            alt="Profile"
            className="w-10 h-10 rounded-full border-2 border-purple-500"
          />
          <span className="text-sm font-semibold">{userName}</span>
          <button
            className="text-purple-700 hover:underline flex items-center"
            onClick={handleLogin}
          >
            {loginHandle === "Logout" ? (
              <AiOutlineLogout className="mr-2" />
            ) : (
              <AiOutlineLogin className="mr-2" />
            )}
            {loginHandle}
          </button>

          {/* Edit Profile Button */}
          <button
            onClick={handleEditProfile}
            className="text-purple-700 hover:underline flex items-center"
          >
            <AiOutlineEdit className="mr-2" />
   Edit Profile
          </button>
        </div>
      </nav>

      {/* Mobile Menu Button */}
      <div className="md:hidden font-extrabold">
        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? (
            <AiOutlineClose className="text-3xl" />
          ) : (
            <AiOutlineMenu className="text-3xl" />
          )}
        </button>
      </div>

      {/* Mobile Menu Items */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-gray-200 px-4 py-3 space-y-2">
          <ul className="text-sm space-y-2">
            <li className="hover:underline border-b-2">
              <Link to="/">Front Side</Link>
            </li>
            <li className="hover:underline border-b-2">
              <Link to="/main/">Home</Link>
            </li>
            <li className="hover:underline border-b-2">
              <Link to="main/courses">Courses</Link>
            </li>
            <li className="hover:underline border-b-2">
              <Link to="/about">About</Link>
            </li>
            <li className="hover:underline border-b-2">
              <Link to="/staff">Staff</Link>
            </li>
          </ul>

          {/* Mobile Search Bar */}
          <div className="flex items-center border rounded-lg px-3 py-1 mt-4">
            <AiOutlineSearch className="text-gray-500 mr-2" />
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearchChange}
              placeholder="Search..."
              className="outline-none border-none"
            />
          </div>

          <div className="pt-4 border-t border-gray-300 space-y-2 flex items-center justify-between">
            <img
              src="/profile.jpg" // Replace with dynamic user image
              alt="Profile"
              className="w-10 h-10 rounded-full border-2 border-purple-500"
            />
            <span className="text-sm font-semibold">{userName}</span>
            <a
              href="#login"
              onClick={handleLogin}
              className="text-purple-700 hover:underline flex items-center"
            >
              {loginHandle === "Logout" ? (
                <AiOutlineLogout className="mr-2" />
              ) : (
                <AiOutlineLogin className="mr-2" />
              )}
              {loginHandle}
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default MainHeader;
