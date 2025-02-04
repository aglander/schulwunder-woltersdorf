import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
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

  return (
    <>
      {/* Sticky Header */}
      <div className="sticky top-0 z-50 bg-primary/95 backdrop-blur supports-[backdrop-filter]:bg-primary/60">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Link to="/" className="text-white hover:text-white/80">
              <ArrowLeft className="w-5 h-5" />
            </Link>
            {!isMobile && (
              <Link to="/" className="text-white hover:text-white/80 font-semibold">
                Schulwunder Woltersdorf
              </Link>
            )}
          </div>
          <div className="absolute left-1/2 transform -translate-x-1/2">
            {!isH1Visible && (
              <span className="text-white font-semibold">{title}</span>
            )}
          </div>
          <div className="w-[200px]" /> {/* Spacer für Balance */}
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-primary text-white py-20">
        <div className="container mx-auto px-4">
          <h1 ref={h1Ref} className="text-5xl font-bold mb-6">
            {title}
          </h1>
          {children}
        </div>
      </div>
    </>
  );
};