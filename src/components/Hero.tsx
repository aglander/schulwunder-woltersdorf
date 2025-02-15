
import React from "react";

const Hero = () => {
  return (
    <div className="relative min-h-[60vh] flex items-center justify-center bg-gradient-to-r from-primary to-primary/80 text-white p-8">
      <div className="relative max-w-4xl mx-auto text-center animate-fade-up">
        <div className="relative">
          <div className="relative inline-block px-12">
            {/* SVG Hintergrund nur für die Überschrift */}
            <div className="absolute -inset-y-4 -inset-x-12 opacity-15 -translate-y-2">
              <img
                src="/assets/swish.svg"
                alt=""
                className="w-full h-full object-cover brightness-0"
                aria-hidden="true"
              />
            </div>
            <h1 className="relative text-4xl md:text-6xl font-bold mb-6">
              Schulwunder Woltersdorf
            </h1>
          </div>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            Entdecken Sie die drei Wunder unserer Schulentwicklung: Bau, Gründung und Innovation
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
