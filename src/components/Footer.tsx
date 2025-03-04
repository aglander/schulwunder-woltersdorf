
import React from "react";
import { Link, useLocation } from "react-router-dom";

const Footer = () => {
  const location = useLocation();
  
  const getHoverColorClass = () => {
    if (location.pathname.includes('schulbau')) {
      return 'hover:text-schulbau hover:underline';
    } else if (location.pathname.includes('schulgruendung')) {
      return 'hover:text-schulgruendung hover:underline';
    } else if (location.pathname.includes('schulinnovation')) {
      return 'hover:text-schulinnovation hover:underline';
    }
    return 'hover:text-black hover:underline';
  };

  const hoverClass = getHoverColorClass();

  return (
    <footer className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-gray-600">
            <h4 className="font-bold text-lg mb-4">Kontakt</h4>
            <p>Freie Schule Woltersdorf</p>
            <p>Email: info@fsw.de</p>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-4">Links</h4>
            <ul className="space-y-2">
              <li><Link to="/kontakt" className={`text-gray-600 transition-colors ${hoverClass}`}>Kontakt</Link></li>
              <li><Link to="/impressum" className={`text-gray-600 transition-colors ${hoverClass}`}>Impressum</Link></li>
              <li><Link to="/datenschutz" className={`text-gray-600 transition-colors ${hoverClass}`}>Datenschutz</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-4">Folgen Sie uns</h4>
            <div className="flex space-x-4">
              <a href="#" className={`text-gray-600 transition-colors ${hoverClass}`}>Instagram</a>
              <a href="#" className={`text-gray-600 transition-colors ${hoverClass}`}>YouTube</a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t text-center text-gray-600">
          <p>&copy; {new Date().getFullYear()} Schulwunder Woltersdorf. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
