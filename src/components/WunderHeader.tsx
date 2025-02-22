
import React, { ReactNode } from "react";

interface WunderHeaderProps {
  title: string;
  children: ReactNode;
  imageSrc?: string;
}

export const WunderHeader = ({ title, children, imageSrc }: WunderHeaderProps) => {
  return (
    <div className="relative min-h-[40vh] flex items-center justify-center bg-gradient-to-r from-[#6B7075] to-[#6B7075]/80 text-white p-8">
      {imageSrc && (
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${imageSrc})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.3
          }}
        />
      )}
      <div className="relative z-10 max-w-4xl mx-auto text-center animate-fade-up">
        <h1 
          className="text-4xl md:text-6xl font-bold mb-6 font-indie"
          style={{
            fontFamily: "'Indie Flower', cursive"
          }}
        >
          {title}
        </h1>
        {children}
      </div>
    </div>
  );
};
