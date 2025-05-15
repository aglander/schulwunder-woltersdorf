
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Youtube, Instagram } from "lucide-react";

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
          <div>
            <h4 className="font-bold text-lg mb-4">Kontakt</h4>
            <p>Freie Schule Woltersdorf e.V.</p>
            <p>Telefon: <a href="tel:+493362700973" rel="noopener noreferrer" className={`text-gray-600 transition-colors ${hoverClass}`}>03362 700973</a></p>
            <p>Email: <a href="mailto:info@freie-schule-woltersdorf.de" rel="noopener noreferrer" className={`text-gray-600 transition-colors ${hoverClass}`}>info@freie-schule-woltersdorf.de</a></p>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-4">Links</h4>
            <ul className="space-y-2">
              <li><Link to="/newsletter" className={`text-gray-600 transition-colors ${hoverClass}`}>Newsletter</Link></li>
              <li><Link to="/kontakt" className={`text-gray-600 transition-colors ${hoverClass}`}>Kontakt</Link></li>
              <li><Link to="/impressum" className={`text-gray-600 transition-colors ${hoverClass}`}>Impressum</Link></li>
              <li><Link to="/datenschutz" className={`text-gray-600 transition-colors ${hoverClass}`}>Datenschutz</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-4">Folgen Sie uns</h4>
            <div className="flex space-x-4">
              <a href="https://www.youtube.com/@freieschulewoltersdorf" target="_blank" rel="noopener noreferrer" className={`text-gray-600 transition-colors ${hoverClass} flex items-center gap-2`}>
                <Youtube size={20} />
                <span>YouTube</span>
              </a>
              <a href="https://www.instagram.com/freie_schule_woltersdorf/" target="_blank" rel="noopener noreferrer" className={`text-gray-600 transition-colors ${hoverClass} flex items-center gap-2`}>
                <Instagram size={20} />
                <span>Instagram</span>
              </a>
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
