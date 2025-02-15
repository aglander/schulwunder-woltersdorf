
import React, { useRef, useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

interface WunderHeaderProps {
  title: string;
  children?: React.ReactNode;
}

export const WunderHeader = ({ title, children }: WunderHeaderProps) => {
  const [isH1Visible, setIsH1Visible] = useState(true);
  const h1Ref = useRef<HTMLHeadingElement>(null);
  const isMobile = useIsMobile();
  const location = useLocation();

  // Bestimme die Farbe basierend auf der aktuellen Route
  const getBackgroundColor = () => {
    if (location.pathname.includes('schulbau')) {
      return 'bg-schulbau';
    } else if (location.pathname.includes('schulgruendung')) {
      return 'bg-schulgruendung';
    } else if (location.pathname.includes('schulinnovation')) {
      return 'bg-schulinnovation';
    }
    return 'bg-primary'; // Fallback
  };

  useEffect(() => {
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
    }

    return () => {
      if (h1Ref.current) {
        observer.unobserve(h1Ref.current);
      }
    };
  }, []);

  const bgColorClass = getBackgroundColor();

  return (
    <>
      {/* Sticky Header */}
      <div className={`sticky top-0 z-30 ${bgColorClass}/95 backdrop-blur supports-[backdrop-filter]:${bgColorClass}/60`}>
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

      {/* Hero Section */}
      <div className={`${bgColorClass} text-white py-20`}>
        <div className="container mx-auto px-4">
          <h1 ref={h1Ref} lang="de" className="text-5xl font-bold mb-6 break-words hyphens-auto">
            {title}
          </h1>
          {children}
        </div>
      </div>
    </>
  );
};
