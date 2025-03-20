import React, { useState } from "react";
import {
  FaWhatsapp,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import { MdAttachEmail } from "react-icons/md";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { BsFillTelephoneOutboundFill } from "react-icons/bs";
const notifications = [
  "Welcome to our website!",
  "Check out our latest updates.",
  "Don't miss our special offers.",
  "Contact us for more information.",
];

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const notificationText = notifications.join(
    "\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0"
  );
  const repeatedText = `${notificationText}\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0${notificationText}`;

  return (
    <header className="bg-white text-green-950  cursor-pointer shadow-lg  ">
      {/* Top Notification Bar */}
      <div className="flex bg-green-950  ">
        {/* Marquee Section (2/3) */}
        <div className="bg-lime-500 text-white text-sm py-1 overflow-hidden  ">
          <div className="relative w-full">
            {/* Marquee container */}
            <div className="whitespace-nowrap animate-marquee-left-right">
              {repeatedText}
            </div>
          </div>
        </div>
      </div>
      {/* Contact & Login Row */}
      <div className="px-2 py-1 border-b shadow-md  flex justify-between">
        {/* Email Section (Upper Part on Mobile) */}
        <ul>
          <li className="cursor-pointer hover:text-blue-500 flex gap-2 items-center">
            <MdAttachEmail className="text-base " />
            <p className="py-1">svc@gmail.com</p>
          </li>
        </ul>
        <ul className="flex justify-center itr md:justify-start gap-4">
          <li className="cursor-pointer hover:text-green-500">
            <FaWhatsapp className=" text-base" />
          </li>
          <li className="cursor-pointer hover:text-blue-500">
            <FaFacebookF className=" text-base" />
          </li>

          <li className="cursor-pointer hover:text-sky-500">
            <FaTwitter className="text-base" />
          </li>

          <li className="cursor-pointer hover:text-pink-500">
            <FaInstagram className=" text-base" />
          </li>
        </ul>
      </div>

      {/* Navigation */}
      <nav className="px-2 py-1 flex flex-col md:flex-row md:justify-between items-center ">
        {/* logo and toggle */}
        <div className="flex w-full justify-between ">
          <div className="flex gap-2 items-center  w-3/5 py-1">
            {
              <div className=" ">
                <img
                  alt="logoVcm"
                  src="/LOGO.png"
                  className="w-full h-14 md:w-full md:h-14  object-contain "
                />
              </div>
            }

            {/* <div className="  text-2xl font-bold bg-clip-text  decoration-2 underline-offset-8 ">
              <span className="text-lime-500 ">Shree </span>
              <span className="text-black">Vidya Classes</span>
            </div> */}
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden  items-center p-1 ">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-green-950 font-extrabold"
            >
              {isMobileMenuOpen ? (
                <AiOutlineClose className="text-2xl " />
              ) : (
                <AiOutlineMenu className="text-2xl " />
              )}
            </button>
          </div>
        </div>

        <div className="flex  items-center gap-8 justify-center w-3/5 md:w-auto ">
          <div className=" text-green-950 flex items-center gap-4 ">
            <div className="h-full w-full md:w-auto flex items-center justify-center ">
              <BsFillTelephoneOutboundFill className="text-xl align-middle " />
            </div>
            <div className="flex flex-col">
              {" "}
              <span className="text-sm ">Call Us</span>
              <span className="text-sm font-semibold">2345934592</span>
            </div>
          </div>
          <button className="bg-blue-500 font-semibold  text-white text-xs h-7 w-14 p-1 rounded-sm border border-white border-e-lime-200 border-1 ">
            Login
          </button>
        </div>
      </nav>
      {/* Desktop Navigation */}
      <ul className="hidden md:flex justify-start gap-4 relative left-5 px-1 py-1 text-xs text-green-950">
        <li className="hover:shadow-md  text-green-950">Home</li>
        <li className="hover:shadow-md text-green-950">About</li>
        <li className="hover:shadow-md text-green-950">Services</li>
        <li className="hover:shadow-md text-green-950">Contact</li>
      </ul>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <ul className="md:hidden bg-white text-green-950 p-4 space-y-2 text-xs ">
          <li className="border-b-2  hover:shadow-md">Home</li>
          <li className="hover:shadow-md border-b-2">About</li>
          <li className="hover:shadow-md border-b-2">Services</li>
          <li className="hover:shadow-md border-b-2">Contact</li>
        </ul>
      )}
    </header>
  );
};

export default Header;
