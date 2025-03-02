
import React from "react";
import SEO from "@/components/SEO";

const Visitenkarte = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white p-4">
      <SEO 
        title="Visitenkarte"
        description="Visitenkarte für Johannes Wilk, Schulwunderorganisator"
      />
      
      <div className="w-[8.5cm] h-[5.5cm] border border-gray-200 shadow-sm bg-white flex flex-col items-center justify-center p-4 print:border-none print:shadow-none">
        <div className="w-full mb-2">
          {/* Swish logo in blue */}
          <svg 
            viewBox="0 0 200 100" 
            className="w-full h-auto"
            fill="#2A5CAC"
          >
            <path d="M16,42 C16,42 32,10 101,10 C170,10 177,62 177,62 C177,62 168,10 102,10 C36,10 16,42 16,42 Z M14,52 C14,52 32,90 99,90 C166,90 174,38 174,38 C174,38 166,90 100,90 C34,90 14,52 14,52 Z" />
          </svg>
        </div>
        
        <h1 className="text-xl font-bold text-center text-[#2A5CAC] font-barlow">Johannes Wilk</h1>
        <p className="text-sm text-gray-700 mt-1 font-barlow">#schulwunderorganisator</p>
      </div>
    </div>
  );
};

export default Visitenkarte;
