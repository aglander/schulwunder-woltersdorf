
import React from "react";
import SEO from "@/components/SEO";

const VisitenkarteSG = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white p-4">
      <SEO 
        title="Visitenkarte Schulgründungswunder"
        description="Visitenkarte für Schulgründungswunder"
      />
      
      <div className="w-[8.5cm] h-[5.5cm] border border-gray-200 shadow-sm bg-white flex flex-col items-center justify-center p-4 print:border-none print:shadow-none">
        <div className="w-full relative mb-1">
          {/* Using the shared swish.svg from assets */}
          <div className="w-full">
            <img
              src="/assets/swish.svg"
              alt=""
              className="w-full h-auto filter-schulgruendung"
            />
          </div>
        </div>
        
        <p className="text-sm text-gray-700 mt-1 font-barlow">#schulgründungswunder</p>
      </div>
    </div>
  );
};

export default VisitenkarteSG;
