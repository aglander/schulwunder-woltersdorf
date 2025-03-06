import React, { useRef, useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ArrowLeft, Youtube, Instagram } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { Button } from "./ui/button";

interface WunderHeaderProps {
  title: string;
  subTitle?: string;
  imageSrc?: string;
}

export const WunderHeader = ({
  title,
  subTitle,
  imageSrc,
}: WunderHeaderProps) => {
  const [isH1Visible, setIsH1Visible] = useState(true);
  const [svgWidth, setSvgWidth] = useState<number>(0);
  const [svgOffset, setSvgOffset] = useState<number>(0);
  const h1Ref = useRef<HTMLHeadingElement>(null);
  const isMobile = useIsMobile();
  const location = useLocation();

  const getBackgroundColor = () => {
    if (location.pathname.includes("schulbau")) {
      return "bg-schulbau";
    } else if (location.pathname.includes("schulgruendung")) {
      return "bg-schulgruendung";
    } else if (location.pathname.includes("schulinnovation")) {
      return "bg-schulinnovation";
    }
    return "bg-primary";
  };

  const getSwishFilter = () => {
    if (location.pathname.includes("schulbau")) {
      return "filter-schulbau";
    } else if (location.pathname.includes("schulgruendung")) {
      return "filter-schulgruendung";
    } else if (location.pathname.includes("schulinnovation")) {
      return "filter-schulinnovation";
    }
    return "";
  };

  useEffect(() => {
    const updateSvgDimensions = () => {
      if (h1Ref.current) {
        const headlineWidth = h1Ref.current.offsetWidth + 150;
        const headlineHeight = h1Ref.current.offsetHeight;
        const svgHeight = headlineWidth / 4.83;
        setSvgWidth(headlineWidth);
        setSvgOffset((svgHeight - headlineHeight) / 2);
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

    window.addEventListener("resize", updateSvgDimensions);

    return () => {
      if (h1Ref.current) {
        observer.unobserve(h1Ref.current);
      }
      window.removeEventListener("resize", updateSvgDimensions);
    };
  }, []);

  const bgColorClass = getBackgroundColor();
  const svgHeight = svgWidth / 4.83;

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50">
        <div
          className="backdrop-blur-sm border-b border-black/20"
          style={{
            background:
              "linear-gradient(180deg, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.45) 100%)",
          }}
        >
          <div className="container mx-auto px-4 h-16 flex items-center justify-between">
            <div className="ml-[30px]">
              <Link
                to="/"
                className="flex items-center gap-2 text-white hover:text-white/80 transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
                {!isMobile && (
                  <span className="font-semibold">Schulwunder Woltersdorf</span>
                )}
              </Link>
            </div>
            <div className="absolute left-1/2 transform -translate-x-1/2 w-[300px] text-center">
              {!isH1Visible && (
                <span
                  lang="de"
                  className="text-white font-semibold whitespace-nowrap"
                >
                  {title}
                </span>
              )}
            </div>
            {!isMobile && (
              <div className="mr-[30px] flex items-center gap-4">
                <div className="flex gap-3">
                  <a href="https://www.youtube.com/@freieschule_woltersdorf" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                    <Youtube size={24} color="white" />
                  </a>
                  <a href="https://www.instagram.com/freieschule_woltersdorf/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                    <Instagram size={24} color="white" />
                  </a>
                </div>
                <Link to="/spenden">
                  <Button 
                    variant="secondary" 
                    className="bg-white text-black hover:bg-white/90"
                  >
                    Jetzt spenden
                  </Button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="relative pt-16">
        <div className="absolute inset-0 min-h-[300px]">
          {imageSrc && (
            <>
              <div className="absolute inset-0 bg-black/50 z-[1]" />
              <img
                src={imageSrc}
                alt=""
                className="w-full h-full object-cover z-0"
                loading="eager"
                decoding="async"
                sizes="100vw"
              />
            </>
          )}
        </div>

        <div className="relative z-[2]">
          <div className="container mx-auto px-4 flex flex-col items-center text-center py-20 min-h-[300px] overflow-hidden">
            <div className="relative flex flex-col items-center">
              <div className="text-white">
                <div className="relative inline-block">
                  <div
                    className="absolute opacity-80"
                    style={{
                      width: svgWidth > 0 ? `${svgWidth}px` : "100%",
                      height: svgHeight > 0 ? `${svgHeight}px` : "auto",
                      left: "50%",
                      transform: "translateX(-50%)",
                      overflow: "hidden",
                      top: `-${svgOffset}px`,
                      pointerEvents: "none",
                    }}
                  >
                    <img
                      src="/assets/swish.svg"
                      alt=""
                      className={`w-full h-full object-contain filter ${getSwishFilter()}`}
                      aria-hidden="true"
                    />
                  </div>
                  <h1
                    ref={h1Ref}
                    lang="de"
                    className="relative text-5xl font-bold mb-6 break-words hyphens-auto font-indie"
                  >
                    {title}
                  </h1>
                </div>
                <div className="relative z-10 max-w-2xl mt-6">
                  <p className="text-xl max-w-2xl">{subTitle}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
