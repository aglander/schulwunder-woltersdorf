
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
      className="group block rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
    >
      <div className="aspect-video overflow-hidden relative">
        {/* Overlay mit dem entsprechenden Farbverlauf */}
        <div className={`absolute inset-0 bg-gradient-to-br ${getGradientClass()} opacity-90 transition-opacity group-hover:opacity-100`} />
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6 bg-white">
        <h3 lang="de" className={`text-2xl font-bold mb-3 text-${color} break-words hyphens-auto`}>{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </Link>
  );
};

export default WunderCard;
