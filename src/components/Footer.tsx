import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h4 className="font-bold text-lg mb-4">Kontakt</h4>
            <p>Freie Schule Woltersdorf</p>
            <p>Email: info@fsw.de</p>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-4">Links</h4>
            <ul className="space-y-2">
              <li><a href="/kontakt" className="hover:text-primary">Kontakt</a></li>
              <li><a href="/impressum" className="hover:text-primary">Impressum</a></li>
              <li><a href="/datenschutz" className="hover:text-primary">Datenschutz</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-4">Folgen Sie uns</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-primary">Instagram</a>
              <a href="#" className="text-gray-600 hover:text-primary">YouTube</a>
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