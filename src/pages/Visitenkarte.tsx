
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
        <div className="w-full relative mb-2">
          {/* Using the shared swish.svg from assets */}
          <div className="w-full">
            <img
              src="/assets/swish.svg"
              alt=""
              className="w-full h-auto"
              style={{ filter: "brightness(0) saturate(100%) invert(34%) sepia(11%) saturate(4605%) hue-rotate(196deg) brightness(92%) contrast(88%)" }}
            />
          </div>
          
          {/* Name positioned on top of the Swish logo */}
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-2xl font-bold text-white font-indie">Johannes Wilk</h1>
          </div>
        </div>
        
        <p className="text-sm text-gray-700 mt-1 font-barlow">#schulwunderorganisator</p>
      </div>
    </div>
  );
};

export default Visitenkarte;
