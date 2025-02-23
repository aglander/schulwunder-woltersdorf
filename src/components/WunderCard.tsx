
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
  const getBgColor = () => {
    switch (color) {
      case "schulbau":
        return "bg-schulbau";
      case "schulgruendung":
        return "bg-schulgruendung";
      case "schulinnovation":
        return "bg-schulinnovation";
      default:
        return "bg-primary";
    }
  };

  return (
    <Link
      to={link}
      className="group block overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
    >
      <div className="relative">
        <div className="aspect-w-16 aspect-h-9">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <div className={`${getBgColor()} p-6 text-white`}>
          <h2 className="text-2xl font-bold mb-2">{title}</h2>
          <p className="text-white/90">{description}</p>
        </div>
      </div>
    </Link>
  );
};

export default WunderCard;
