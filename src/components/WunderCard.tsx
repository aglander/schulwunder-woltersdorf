
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

interface WunderCardProps {
  title: string;
  description: string;
  image: string;
  link: string;
  color: "schulbau" | "schulgruendung" | "schulinnovation";
}

const WunderCard = ({ title, description, image, link, color }: WunderCardProps) => {
  const [svgWidth, setSvgWidth] = useState<number>(0);
  const [svgOffset, setSvgOffset] = useState<number>(0);
  const h2Ref = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const updateSvgDimensions = () => {
      if (h2Ref.current) {
        const headlineWidth = h2Ref.current.offsetWidth + 150;
        const headlineHeight = h2Ref.current.offsetHeight;
        const svgHeight = headlineWidth / 4.83;
        setSvgWidth(headlineWidth);
        setSvgOffset((svgHeight - headlineHeight) / 2);
      }
    };

    updateSvgDimensions();
    window.addEventListener("resize", updateSvgDimensions);

    return () => {
      window.removeEventListener("resize", updateSvgDimensions);
    };
  }, []);

  const getGradientClass = () => {
    switch (color) {
      case "schulbau":
        return "from-schulbau to-schulbau/80";
      case "schulgruendung":
        return "from-schulgruendung to-schulgruendung/80";
      case "schulinnovation":
        return "from-schulinnovation to-schulinnovation/80";
      default:
        return "from-primary to-primary/80";
    }
  };

  const getSwishFilter = () => {
    switch (color) {
      case "schulbau":
        return "filter-schulbau";
      case "schulgruendung":
        return "filter-schulgruendung";
      case "schulinnovation":
        return "filter-schulinnovation";
      default:
        return "";
    }
  };

  const svgHeight = svgWidth / 4.83;

  return (
    <Link 
      to={link}
      className="group block w-full h-full relative overflow-hidden"
    >
      <div className="absolute inset-0">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover grayscale transition-all duration-300 group-hover:grayscale-0"
        />
      </div>
      <div className={`absolute inset-0 bg-gradient-to-br from-black to-black/80 group-hover:${getGradientClass()} opacity-90 transition-all duration-300`} />
      <div className="relative h-full flex flex-col items-center justify-center text-center p-6 text-white">
        <div className="relative inline-block mb-8">
          <div
            className="absolute opacity-80"
            style={{
              width: svgWidth > 0 ? `${svgWidth}px` : "100%",
              height: svgHeight > 0 ? `${svgHeight}px` : "auto",
              left: "50%",
              transform: "translateX(-50%)",
              overflow: "hidden",
              top: `-${svgOffset}px`,
              pointerEvents: "none"
            }}
          >
            <img
              src="/assets/swish.svg"
              alt=""
              className={`w-full h-full object-contain filter ${getSwishFilter()}`}
              aria-hidden="true"
            />
          </div>
          <h2 
            ref={h2Ref}
            lang="de" 
            className="text-3xl md:text-4xl font-bold mb-4 break-words hyphens-auto font-indie relative"
          >
            {title}
          </h2>
        </div>
        <p className="text-lg md:text-xl max-w-md">{description}</p>
      </div>
    </Link>
  );
};

export default WunderCard;
