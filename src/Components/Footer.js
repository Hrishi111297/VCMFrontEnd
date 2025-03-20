import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      className="bg-cover bg-center text-white"
      style={{
        backgroundImage:
          "url(https://demo.smart-school.in/uploads/gallery/media/courseimg1.jpg)",
        backgroundBlendMode: "darken",
        backgroundColor: "rgba(0, 0, 0, 0.7)",
      }}
    >
      <div className="container mx-auto py-10 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Links Section */}
          <div>
            <h2 className="text-lg font-semibold mb-4">Links</h2>
            <ul className="space-y-2">
              {[
                "Home",
                "About Us",
                "Course",
                "Gallery",
                "Events",
                "News",
                "Contact Us",
              ].map((link) => (
                <li
                  key={link}
                  className="hover:text-gray-300 transition cursor-pointer"
                >
                  <h3 href="#">{link}</h3>
                </li>
              ))}
            </ul>
          </div>

          {/* Follow Us Section */}
          <div>
            <h2 className="text-lg font-semibold mb-4">Follow Us</h2>
            <div className="flex space-x-4">
              <FaFacebook className="w-6 h-6 hover:text-gray-300 transition cursor-pointer" />
              <FaTwitter className="w-6 h-6 hover:text-gray-300 transition cursor-pointer" />
              <FaInstagram className="w-6 h-6 hover:text-gray-300 transition cursor-pointer" />
              <FaLinkedin className="w-6 h-6 hover:text-gray-300 transition cursor-pointer" />
              <FaYoutube className="w-6 h-6 hover:text-gray-300 transition cursor-pointer" />
            </div>
          </div>

          {/* Contact Section */}
          <div>
            <h2 className="text-lg font-semibold mb-4 cursor-pointer">
              Contact
            </h2>
            <ul className="space-y-2">
              <li className=" hover:text-gray-300 transition cursor-pointer">
                Feedback
              </li>
              <li className=" hover:text-gray-300 transition cursor-pointer">
                Complain
              </li>
              <li className=" hover:text-gray-300 transition cursor-pointer">
                Contact: 2270561589
              </li>
              <li className="hover:text-gray-300 transition cursor-pointer">
                Email Us: vcm@gmail.com
              </li>
              <li className="hover:text-gray-300 transition cursor-pointer">
                Address:{" "}
                <span>
                  Borate Vasti, Chandan Nagar, Kharadi, Pune, Maharashtra 411014
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-gray-700 pt-4 text-center">
          <p className="text-sm">© VCM 2025 All rights reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
