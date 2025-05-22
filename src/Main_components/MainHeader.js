import React, { useState, useEffect } from "react";
import {
  AiOutlineMenu,
  AiOutlineClose,
  AiOutlineLogin,
  AiOutlineLogout,
  AiOutlineSearch,
  AiOutlineEdit,
} from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { removeToken } from "../Utils/Auth";
import getProfileImage from "./Profile/Util/useProfileImage";
import { useAuth } from "../Context/AuthContext";
const MainHeader = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [loginHandle, setLoginHandle] = useState("Logout");
  const [userName, setUserName] = useState("John Doe"); // Replace with dynamic user name if needed
  const [searchQuery, setSearchQuery] = useState(""); // For the search bar
  const [preview, setPreview] = useState(null);
  const { authData, getData } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (authData !== null) {
      setUserName(
        authData.user.DATA.firstName + " " + authData.user.DATA.lastName
      );
      getProfileImage(authData, setPreview);
    }
  }, [authData]);
  const handleLogin = () => {
    if (loginHandle === "Logout") {
      setLoginHandle("Login");
      setUserName("");
      removeToken();
      navigate("/login");
    } else {
      setLoginHandle("Logout");
      setUserName(
        authData.user.DATA.firstName + " " + authData.user.DATA.lastName
      ); // Restore user name after login
    }
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleEditProfile = () => {
    navigate("/main/editprofile");
  };
  console.log("dswdwd", authData);
  return (
    <header className="shadow-md fixed z-20 w-full bg-white">
      <nav className="px-4 py-3 flex justify-between items-center">
        {/* Logo and Site Name */}
        <div className="flex items-center space-x-3">
          <img src="/LOGO.jpg" alt="Logo" className="w-10 h-10 object-cover" />
          <span className="text-xl font-bold">Shree Vidya Classes</span>
        </div>

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex space-x-6 text-sm font-medium">
          <li className="hover:underline">
            <Link to="/">Front Side</Link>
          </li>
          <li className="hover:underline">
            <Link to="/main/">Home</Link>
          </li>
          <li className="hover:underline">
            <Link to="/courses">Courses</Link>
          </li>
          <li className="hover:underline">
            <Link to="/about">About</Link>
          </li>
          <li className="hover:underline">
            <Link to="/staff">Staff</Link>
          </li>
        </ul>

        {/* Desktop Search and Profile */}
        <div className="hidden md:flex items-center space-x-6">
          {/* Search Bar */}
          <div className="flex items-center border rounded-lg px-3 py-1 w-56">
            <AiOutlineSearch className="text-gray-500 mr-2" />
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearchChange}
              placeholder="Search..."
              className="outline-none border-none w-full text-sm"
            />
          </div>

          {/* Profile and Buttons */}
          <div className="flex items-center space-x-4">
            {" "}
            <Link to="/main/editprofile">
              <img
                src={preview}
                alt="Profile"
                className="w-10 h-10 rounded-full border-2 border-purple-500"
              />
            </Link>
            <span className="text-sm font-semibold">{userName}</span>
            <button
              className="text-purple-700 hover:underline flex items-center text-sm"
              onClick={handleLogin}
            >
              {loginHandle === "Logout" ? (
                <AiOutlineLogout className="mr-1" />
              ) : (
                <AiOutlineLogin className="mr-1" />
              )}
              {loginHandle}
            </button>
            <button
              onClick={handleEditProfile}
              className="text-purple-700 hover:underline flex items-center text-sm"
            >
              <AiOutlineEdit className="mr-1" />
              Edit Profile
            </button>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? (
              <AiOutlineClose className="text-3xl" />
            ) : (
              <AiOutlineMenu className="text-3xl" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden px-4 py-3 space-y-3 border-t border-gray-200 bg-white">
          <ul className="text-sm space-y-2">
            <li className="hover:underline border-b pb-1">
              <Link to="/">Front Side</Link>
            </li>
            <li className="hover:underline border-b pb-1">
              <Link to="/main/">Home</Link>
            </li>
            <li className="hover:underline border-b pb-1">
              <Link to="/main/courses">Courses</Link>
            </li>
            <li className="hover:underline border-b pb-1">
              <Link to="/about">About</Link>
            </li>
            <li className="hover:underline border-b pb-1">
              <Link to="/staff">Staff</Link>
            </li>
          </ul>

          {/* Mobile Profile & Login */}
          <div className="pt-3 border-t border-gray-300 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Link to="/main/editprofile">
                <img
                  src={preview}
                  alt="Profile"
                  className="w-10 h-10 rounded-full border-2 border-purple-500"
                />
              </Link>
              <span className="text-sm font-semibold">{userName}</span>
            </div>
            <button
              onClick={handleLogin}
              className="text-purple-700 hover:underline flex items-center text-sm"
            >
              {loginHandle === "Logout" ? (
                <AiOutlineLogout className="mr-1" />
              ) : (
                <AiOutlineLogin className="mr-1" />
              )}
              {loginHandle}
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default MainHeader;
