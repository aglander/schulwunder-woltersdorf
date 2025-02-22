
import React, { useRef, useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

interface WunderHeaderProps {
  title: string;
  children?: React.ReactNode;
  imageSrc?: string;
}

export const WunderHeader = ({ title, children, imageSrc }: WunderHeaderProps) => {
  const [isH1Visible, setIsH1Visible] = useState(true);
  const [svgWidth, setSvgWidth] = useState<number>(0);
  const h1Ref = useRef<HTMLHeadingElement>(null);
  const isMobile = useIsMobile();
  const location = useLocation();

  const getBackgroundColor = () => {
    if (location.pathname.includes('schulbau')) {
      return 'bg-schulbau';
    } else if (location.pathname.includes('schulgruendung')) {
      return 'bg-schulgruendung';
    } else if (location.pathname.includes('schulinnovation')) {
      return 'bg-schulinnovation';
    }
    return 'bg-primary';
  };

  useEffect(() => {
    const updateSvgDimensions = () => {
      if (h1Ref.current) {
        const headlineWidth = h1Ref.current.offsetWidth + 192;
        setSvgWidth(headlineWidth);
      }
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsH1Visible(entry.isIntersecting);
      },
      {
        threshold: 0,
      }
    );

    if (h1Ref.current) {
      observer.observe(h1Ref.current);
      updateSvgDimensions();
    }

    window.addEventListener('resize', updateSvgDimensions);

    return () => {
      if (h1Ref.current) {
        observer.unobserve(h1Ref.current);
      }
      window.removeEventListener('resize', updateSvgDimensions);
    };
  }, []);

  const bgColorClass = getBackgroundColor();
  const svgHeight = svgWidth / 4.83;

  const headerStyle = imageSrc ? {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${imageSrc})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  } : {};

  return (
    <>
      {/* Sticky Header */}
      <div className="fixed top-0 left-0 right-0 z-30">
        <div 
          className="backdrop-blur-sm border-b border-black/20"
          style={{
            background: 'linear-gradient(180deg, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.45) 100%)'
          }}
        >
          <div className="container mx-auto px-4 h-16 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Link 
                to="/" 
                className="flex items-center gap-2 text-white hover:text-white/80 transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
                {!isMobile && (
                  <span className="font-semibold">
                    Schulwunder Woltersdorf
                  </span>
                )}
              </Link>
            </div>
            <div className="absolute left-1/2 transform -translate-x-1/2 w-[300px] text-center">
              {!isH1Visible && (
                <span lang="de" className="text-white font-semibold whitespace-nowrap">{title}</span>
              )}
            </div>
            <div className="w-[200px]" /> {/* Spacer für Balance */}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative pt-16"> {/* Added padding-top to account for fixed header */}
        {/* Background Container */}
        <div className={`${bgColorClass} absolute inset-0 min-h-[400px]`} style={headerStyle} />
        
        {/* Content Container */}
        <div className="relative">
          {/* Hero Content */}
          <div className="container mx-auto px-4 flex flex-col items-center text-center py-20">
            <div className="relative flex flex-col items-center">
              <div className="text-white">
                <div className="relative inline-block px-24">
                  {/* Swish Effect with dynamic sizing */}
                  <div 
                    className="absolute opacity-80"
                    style={{
                      width: svgWidth > 0 ? `${svgWidth}px` : '100%',
                      height: svgHeight > 0 ? `${svgHeight}px` : 'auto',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      overflow: 'visible',
                      top: '-35px',
                      bottom: '-35px'
                    }}
                  >
                    <img 
                      src="/assets/swish.svg" 
                      alt="" 
                      className={`w-full h-full object-contain ${location.pathname.includes('schulbau') ? 'filter-red' : 'brightness-0'}`}
                      style={location.pathname.includes('schulbau') ? { filter: 'brightness(0) saturate(100%) invert(27%) sepia(91%) saturate(2760%) hue-rotate(343deg) brightness(85%) contrast(95%)' } : {}}
                      aria-hidden="true"
                    />
                  </div>
                  <h1 
                    ref={h1Ref} 
                    lang="de" 
                    className="relative text-5xl font-bold mb-6 break-words hyphens-auto"
                  >
                    {title}
                  </h1>
                </div>
                {/* Subtitle outside of Swish container */}
                <div className="relative z-10 max-w-2xl mt-6">
                  {children}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
