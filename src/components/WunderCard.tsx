import React from "react";
import { Link } from "react-router-dom";

interface WunderCardProps {
  title: string;
  description: string;
  image: string;
  link: string;
}

const WunderCard = ({ title, description, image, link }: WunderCardProps) => {
  return (
    <Link 
      to={link}
      className="group block bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
    >
      <div className="aspect-video overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transform transition-transform group-hover:scale-105"
        />
      </div>
      <div className="p-6">
        <h3 lang="de" className="text-2xl font-bold mb-3 text-primary break-words hyphens-auto">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </Link>
  );
};

export default WunderCard;