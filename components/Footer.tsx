import React from "react";
import { FaYoutube, FaInstagram, FaTiktok } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full text-gray-500 py-8">
      <div className="container mx-auto px-4 flex flex-col items-center space-y-4">
        {/* Social Media Icons */}
        <div className="flex space-x-4">
          <a
            href="https://www.instagram.com/helenix00/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <FaInstagram className="w-6 h-6 hover:text-pink-500 hover:scale-125 transition-all duration-300" />
          </a>
          <a
            href="https://www.youtube.com/@Helen0fArt"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
          >
            <FaYoutube className="w-6 h-6 hover:text-red-500 hover:scale-125 transition-all duration-300" />
          </a>
          <a
            href="https://www.tiktok.com/@helenofart/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="TikTok"
          >
            <FaTiktok className="w-6 h-6 hover:text-black hover:scale-125 transition-all duration-300" />
          </a>
        </div>

        {/* Name */}
        <div className="text-sm">
          <p>© 2024 HELENIX.ART</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
