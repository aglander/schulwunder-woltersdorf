import React from "react";
import { Link } from "react-router-dom";

const Schulinnovationswunder = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-16">
        <Link to="/" className="text-primary hover:underline mb-8 inline-block">
          ← Zurück zur Startseite
        </Link>
        
        <h1 className="text-4xl font-bold text-primary mb-8">Schulinnovationswunder</h1>
        
        <div className="prose max-w-none">
          <p className="text-lg mb-6">
            Sehen Sie unsere Zukunftspläne für das neue Schulgelände.
          </p>
          
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold mb-4">Zukunftspläne</h2>
            <p>
              Weitere Informationen zu unseren innovativen Bauvorhaben 
              werden in Kürze hier verfügbar sein.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Schulinnovationswunder;