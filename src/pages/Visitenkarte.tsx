
import React from "react";
import SEO from "@/components/SEO";

const Visitenkarte = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-start bg-white p-4 py-8">
      <SEO 
        title="Visitenkarten"
        description="Visitenkarten für die Schulwunder"
      />
      
      {/* Johannes Wilk business card */}
      <div className="w-[8.5cm] h-[5.5cm] border border-gray-200 shadow-sm bg-white flex flex-col items-center justify-center p-4 print:border-none print:shadow-none mb-8">
        {/* Johannes Wilk photo above the swish */}
        <div className="mb-1">
          <img 
            src="/assets/team/johannes-wilk.jpeg" 
            alt="Johannes Wilk" 
            className="w-20 h-20 rounded-full object-cover object-center border-2 border-schulgruendung"
          />
        </div>
        
        <div className="w-full relative mb-1">
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
            <h1 className="text-3xl font-bold text-white font-indie">Johannes Wilk</h1>
          </div>
        </div>
        
        <p className="text-sm text-gray-700 mt-1 font-barlow">#schulwunderorganisator</p>
      </div>

      {/* Schulgründungswunder business card */}
      <div className="w-[8.5cm] h-[5.5cm] border border-gray-200 shadow-sm bg-white flex flex-col items-center justify-center p-4 print:border-none print:shadow-none mb-8">
        <div className="w-full relative mb-1">
          {/* Using the shared swish.svg from assets */}
          <div className="w-full">
            <img
              src="/assets/swish.svg"
              alt=""
              className="w-full h-auto filter-schulgruendung"
            />
          </div>
          
          {/* Title positioned on top of the Swish logo */}
          <div className="absolute inset-0 top-4 flex items-start justify-center">
            <h2 className="text-2xl font-bold text-white font-indie">Schulgründungswunder</h2>
          </div>
        </div>
        
        <p className="text-sm text-gray-700 mt-1 font-barlow">#schulgründungswunder</p>
      </div>
      
      {/* Schulbauwunder business card */}
      <div className="w-[8.5cm] h-[5.5cm] border border-gray-200 shadow-sm bg-white flex flex-col items-center justify-center p-4 print:border-none print:shadow-none mb-8">
        <div className="w-full relative mb-1">
          {/* Using the shared swish.svg from assets */}
          <div className="w-full">
            <img
              src="/assets/swish.svg"
              alt=""
              className="w-full h-auto filter-schulbau"
            />
          </div>
          
          {/* Title positioned on top of the Swish logo */}
          <div className="absolute inset-0 top-4 flex items-start justify-center">
            <h2 className="text-2xl font-bold text-white font-indie">Schulbauwunder</h2>
          </div>
        </div>
        
        <p className="text-sm text-gray-700 mt-1 font-barlow">#schulbauwunder</p>
      </div>
      
      {/* Schulinnovationswunder business card */}
      <div className="w-[8.5cm] h-[5.5cm] border border-gray-200 shadow-sm bg-white flex flex-col items-center justify-center p-4 print:border-none print:shadow-none">
        <div className="w-full relative mb-1">
          {/* Using the shared swish.svg from assets */}
          <div className="w-full">
            <img
              src="/assets/swish.svg"
              alt=""
              className="w-full h-auto filter-schulinnovation"
            />
          </div>
          
          {/* Title positioned on top of the Swish logo */}
          <div className="absolute inset-0 top-4 flex items-start justify-center">
            <h2 className="text-2xl font-bold text-white font-indie">Schulinnovationswunder</h2>
          </div>
        </div>
        
        <p className="text-sm text-gray-700 mt-1 font-barlow">#schulinnovationswunder</p>
      </div>
    </div>
  );
};

export default Visitenkarte;
