import React from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 py-4">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6">
        {/* Social Media Icons */}
        <div className="flex space-x-4 mb-4 md:mb-0">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-blue-600 transition"
          >
            <FaFacebook size={24} />
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-pink-500 transition"
          >
            <FaInstagram size={24} />
          </a>
        </div>
        {/* Footer Text */}
        <div className="text-gray-600 text-sm text-center md:text-right">
          © GRIN PERÚ 2024 Todos los derechos reservados
        </div>
      </div>
    </footer>
  );
};

export default Footer;
