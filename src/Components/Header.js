import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { removeToken } from "../Utils/Auth";
import { useAuth } from "../Context/AuthContext";
const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [loginhandle, setLoginHandle] = useState("Logout");
  const navigate = useNavigate();
  const { logout } = useAuth();
  const handleLogin = () => {
    debugger;
    if (loginhandle === "Logout") {
      setLoginHandle(!loginhandle);
      logout();
      navigate("/login");
    } else {
      setLoginHandle("Logout");
    }
  };
  return (
    <header className="shadow-md  fixed z-20  w-full bg-white">
      <nav className="px-4 py-2 flex items-center justify-between  ">
        {/* Logo and Site Name */}
        <div className="flex items-center space-x-2 p-2">
          <img src="/LOGO.jpg" alt="Logo" className="w-10 h-10" />
          <span className="text-xl font-bold ">Shree Vidya Classes</span>
        </div>

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex space-x-6 text-sm  font-medium">
          <li className="hover:underline cursor-pointer">
            {" "}
            <Link to="/">Front Side</Link>
          </li>
          <li className="hover:underline cursor-pointer">
            {" "}
            <Link to="/main/">Home</Link>
          </li>
          <li className="hover:underline cursor-pointer">
            {" "}
            <Link to="/courses">courses</Link>
          </li>
          <li className="hover:underline cursor-pointer">
            {" "}
            <Link to="/about">About</Link>
          </li>
          <li className="hover:underline cursor-pointer">
            {" "}
            <Link to="/staff">Staff</Link>
          </li>
        </ul>

        {/* Auth Links */}
        <div className="hidden md:flex space-x-4 items-center">
          <button
            className="text-purple-700 hover:underline"
            onClick={handleLogin}
          >
            {loginhandle}
          </button>
          <Link
  to="/register"
  className="bg-purple-700 text-white px-4 py-1 rounded hover:bg-purple-800"
>
  Sign Up
</Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden  font-extrabold">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? (
              <AiOutlineClose className="text-3xl" />
            ) : (
              <AiOutlineMenu className="text-3xl" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Items */}
      {isMobileMenuOpen && (
        <div className="md:hidden  border-t border-gray-200 px-4 py-3 space-y-2">
          <ul className="text-sm space-y-2 ">
            <li className="hover:underline border-b-2">
              {" "}
              <Link to="/">Front Side</Link>
            </li>
            <li className="hover:underline border-b-2">
              {" "}
              <Link to="/main/">Home</Link>
            </li>
            <li className="hover:underline border-b-2">
              {" "}
              <Link to="main/courses">courses</Link>
            </li>
            <li className="hover:underlineborder-b-2">
              {" "}
              <Link to="/about">About</Link>
            </li>
            <li className="hover:underlineborder-b-2">
              {" "}
              <Link to="/staff">Staff</Link>
            </li>
          </ul>
          <div className="pt-4 border-t border-gray-300 space-y-2">
            <a
              href="#login"
              onClick={handleLogin}
              className="block text-purple-700 hover:underline"
            >
              {loginhandle}
            </a>
            <Link
              to="/register"
              className="block bg-purple-700 text-white text-center px-4 py-1 rounded hover:bg-purple-800"
            >
              Sign Up
            </Link>
          </div>
        </div>
      )}
      
    </header>
  );
};

export default Header;
