
import React, { useEffect, useRef, useState } from "react";

const Hero = () => {
  const [svgWidth, setSvgWidth] = useState<number>(0);
  const headlineRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const updateSvgDimensions = () => {
      if (headlineRef.current) {
        const headlineWidth = headlineRef.current.offsetWidth + 192;
        setSvgWidth(headlineWidth);
      }
    };

    updateSvgDimensions();
    window.addEventListener('resize', updateSvgDimensions);

    return () => {
      window.removeEventListener('resize', updateSvgDimensions);
    };
  }, []);

  const svgHeight = svgWidth / 4.83;

  return (
    <div className="relative min-h-[40vh] flex items-center justify-center text-white p-8">
      <div 
        className="absolute inset-0 z-0"
        style={{
          background: 'linear-gradient(to right, rgba(107, 112, 117, 0.9), rgba(107, 112, 117, 0.7))'
        }}
      />
      <img
        src="/assets/hero-bg.jpg"
        alt=""
        className="absolute inset-0 w-full h-full object-cover -z-10"
        loading="eager"
        fetchPriority="high"
      />
      <div className="relative max-w-4xl mx-auto text-center animate-fade-up z-10">
        <div className="relative">
          <div className="relative inline-block px-24">
            <div 
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-15"
              style={{
                width: svgWidth > 0 ? `${svgWidth}px` : '100%',
                height: svgHeight > 0 ? `${svgHeight}px` : 'auto'
              }}
            >
              <img
                src="/assets/swish.svg"
                alt=""
                className="w-full h-full object-contain"
                aria-hidden="true"
              />
            </div>
            <h1 ref={headlineRef} className="relative text-4xl md:text-6xl font-bold mb-6 font-indie">
              Schulwunder Woltersdorf
            </h1>
          </div>
          <p className="relative z-10 text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            Entdecken Sie die drei Wunder unserer Schulentwicklung: Bau, Gründung und Innovation
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
