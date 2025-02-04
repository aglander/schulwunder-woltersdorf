import React from "react";

const Hero = () => {
  return (
    <div className="relative min-h-[60vh] flex items-center justify-center bg-gradient-to-r from-primary to-primary/80 text-white p-8">
      <div className="max-w-4xl mx-auto text-center animate-fade-up">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Schulwunder Woltersdorf
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
          Entdecken Sie die drei Wunder unserer Schulentwicklung: Bau, Gründung und Innovation
        </p>
      </div>
    </div>
  );
};

export default Hero;