import React from "react";
import { FaGlobe } from "react-icons/fa";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-white shadow-md py-4 px-6">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold text-green-500">GRIN.perú</div>

        {/* Links */}
        <ul className="flex flex-wrap justify-center md:justify-start space-x-4 md:space-x-8 text-gray-700 font-medium text-sm md:text-base mt-4 md:mt-0">
          <li>
            <a href="#" className="hover:text-green-500 transition">
              Usuarios
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-green-500 transition">
              Ciudades y socios
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-green-500 transition">
              Centro de Ayuda
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-green-500 transition">
              Redes Sociales
            </a>
          </li>
        </ul>

        {/* Language Selector */}
        <div className="mt-4 md:mt-0 flex items-center border border-gray-300 rounded-full px-4 py-2 text-gray-700 hover:border-gray-400 transition text-sm md:text-base">
          <FaGlobe className="mr-2 text-gray-500" />
          Español
          <span className="ml-1">▼</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
