import React from "react";
import { Link } from "react-router-dom";

const Schulgruendungswunder = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-16">
        <Link to="/" className="text-primary hover:underline mb-8 inline-block">
          ← Zurück zur Startseite
        </Link>
        
        <h1 className="text-4xl font-bold text-primary mb-8">Schulgründungswunder</h1>
        
        <div className="prose max-w-none">
          <p className="text-lg mb-6">
            Entdecken Sie unsere Vision für die neue Oberschule, die 2026 eröffnet wird.
          </p>
          
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold mb-4">Unsere Vision</h2>
            <p>
              Weitere Informationen zu unseren Plänen für die Oberschule 
              werden in Kürze hier verfügbar sein.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Schulgruendungswunder;