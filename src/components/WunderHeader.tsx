
import React, { useEffect, useRef, useState } from "react";

interface WunderHeaderProps {
  title: string;
  children?: React.ReactNode;
}

export const WunderHeader = ({ title, children }: WunderHeaderProps) => {
  const [svgWidth, setSvgWidth] = useState<number>(0);
  const headlineRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const updateSvgDimensions = () => {
      if (headlineRef.current) {
        // Get the width of the headline plus padding
        const headlineWidth = headlineRef.current.offsetWidth + 192; // 192px = 6rem (px-24) * 2
        setSvgWidth(headlineWidth);
      }
    };

    updateSvgDimensions();
    window.addEventListener('resize', updateSvgDimensions);

    return () => {
      window.removeEventListener('resize', updateSvgDimensions);
    };
  }, []);

  // Calculate height based on the 4.83:1 aspect ratio
  const svgHeight = svgWidth / 4.83;

  return (
    <div className="relative min-h-[40vh] flex items-center justify-center bg-gradient-to-r from-[#DB3F36] to-[#DB3F36]/80 text-white p-8">
      <div className="relative max-w-4xl mx-auto text-center animate-fade-up">
        <div className="relative">
          <div className="relative inline-block px-24">
            {/* SVG background with dynamic dimensions */}
            <div 
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-15"
              style={{
                width: svgWidth > 0 ? `${svgWidth}px` : '100%',
                height: svgHeight > 0 ? `${svgHeight}px` : 'auto',
                overflow: 'visible' // Ensure SVG is not cropped
              }}
            >
              <img
                src="/assets/swish.svg"
                alt=""
                className="w-full h-full object-contain"
                aria-hidden="true"
              />
            </div>
            <h1 ref={headlineRef} className="relative text-4xl md:text-6xl font-bold mb-6">
              {title}
            </h1>
          </div>
          <div className="relative z-10">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};
