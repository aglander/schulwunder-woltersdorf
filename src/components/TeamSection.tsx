
import React from "react";
import { TeamMember } from "../data/team";
import { Section } from "./Section";
import ResponsiveImage from "./ResponsiveImage";
import { Link } from "react-router-dom";

interface TeamSectionProps {
  members: TeamMember[];
  textColor: string;
}

export const TeamSection = ({ members, textColor }: TeamSectionProps) => {
  // Helper function to generate URL-friendly name
  const getProfileUrl = (name: string) => {
    return `/team/${name.replace(/\s+/g, "").replace(/\./g, "")}`;
  };

  return (
    <Section title="Unser Team" id="team" textColor={textColor}>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {members.map((member) => (
          <Link 
            key={member.name} 
            to={getProfileUrl(member.name)}
            className="text-center group hover:no-underline"
          >
            <div className="text-center transition-transform duration-200 hover:scale-105">
              <div className="w-24 h-24 lg:w-28 lg:h-28 bg-gray-200 rounded-full mx-auto mb-3 overflow-hidden">
                {member.filename ? (
                  <ResponsiveImage
                    imageUrl={`assets/${member.filename}`}
                    alt={member.name}
                    className="w-full h-full object-cover rounded-full"
                  />
                ) : (
                  <div className="w-full h-full bg-gray-200 rounded-full" />
                )}
              </div>
              <h3 className="font-semibold text-base lg:text-lg text-black group-hover:text-gray-700">
                {member.name}
              </h3>
              <p className="text-gray-600 text-sm">{member.desc}</p>
            </div>
          </Link>
        ))}
      </div>
    </Section>
  );
};
