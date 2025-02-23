
import React from "react";
import { Link } from "react-router-dom";

interface WunderCardProps {
  title: string;
  description: string;
  image: string;
  link: string;
  color: "schulbau" | "schulgruendung" | "schulinnovation";
}

const WunderCard = ({ title, description, image, link, color }: WunderCardProps) => {
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
        <h2 lang="de" className="text-3xl md:text-4xl font-bold mb-4 break-words hyphens-auto">
          {title}
        </h2>
        <p className="text-lg md:text-xl max-w-md">{description}</p>
      </div>
    </Link>
  );
};

export default WunderCard;
