
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
        return "from-schulbau/70 to-schulbau/50";
      case "schulgruendung":
        return "from-schulgruendung/70 to-schulgruendung/50";
      case "schulinnovation":
        return "from-schulinnovation/70 to-schulinnovation/50";
      default:
        return "from-primary/70 to-primary/50";
    }
  };

  const getSwishFilter = () => {
    switch (color) {
      case "schulbau":
        return "filter-schulbau opacity-70";
      case "schulgruendung":
        return "filter-schulgruendung opacity-70";
      case "schulinnovation":
        return "filter-schulinnovation opacity-70";
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
          width="800"
          height="600"
          loading={color === "schulbau" ? "eager" : "lazy"}
          decoding={color === "schulbau" ? "sync" : "async"}
          fetchpriority={color === "schulbau" ? "high" : "auto"}
        />
      </div>
      <div className={`absolute inset-0 bg-gradient-to-br from-black/80 to-black/70 group-hover:${getGradientClass()} opacity-90 transition-all duration-500`} />
      <div className="relative h-full flex flex-col items-center text-center p-6 text-white">
        <div className="flex-1" />
        <div className="relative mb-8">
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
              width="400"
              height="83"
              loading="lazy"
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
        <p className="text-lg md:text-xl max-w-md h-[84px]">{description}</p>
        <div className="flex-1" />
      </div>
    </Link>
  );
};

export default WunderCard;
