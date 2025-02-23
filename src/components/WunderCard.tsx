
import React, { useRef } from "react";
import { Link } from "react-router-dom";

interface WunderCardProps {
  title: string;
  description: string;
  image: string;
  link: string;
  color: "schulbau" | "schulgruendung" | "schulinnovation";
}

const WunderCard = ({ title, description, image, link, color }: WunderCardProps) => {
  const h2Ref = useRef<HTMLHeadingElement>(null);

  const getGradientClass = () => {
    switch (color) {
      case "schulbau":
        return "from-schulbau to-schulbau/60";
      case "schulgruendung":
        return "from-schulgruendung to-schulgruendung/60";
      case "schulinnovation":
        return "from-schulinnovation to-schulinnovation/60";
      default:
        return "from-primary to-primary/60";
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

  return (
    <Link 
      to={link}
      className="group block w-full h-full relative overflow-hidden"
    >
      <div className="absolute inset-0">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0 group-hover:scale-105"
        />
      </div>
      <div className={`absolute inset-0 bg-gradient-to-br from-black/90 to-black/70 group-hover:${getGradientClass()} opacity-80 transition-all duration-500`} />
      <div className="relative h-full flex flex-col items-center justify-center text-center p-6 text-white">
        <div className="relative inline-block mb-8">
          <div
            className="absolute opacity-80"
            style={{
              width: "400px",
              height: "83px",
              left: "50%",
              transform: "translateX(-50%)",
              top: "-20px",
              overflow: "hidden",
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
