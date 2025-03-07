import React from "react";
import { TeamMember } from "../data/team";
import { Section } from "./Section";

interface TeamSectionProps {
  members: TeamMember[];
  textColor: string;
}

export const TeamSection = ({
  members,
  textColor,
}: TeamSectionProps) => {
  return (
    <Section title="Unser Team" id="team" textColor={textColor}>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {members.map((member) => (
          <div key={member.name} className="text-center">
            <div className="w-24 h-24 lg:w-28 lg:h-28 bg-gray-200 rounded-full mx-auto mb-3 overflow-hidden">
              {member.filename ? (
                <img
                  src={`/assets/team/${member.filename}`}
                  alt={member.name}
                  className="w-full h-full object-cover rounded-full"
                />
              ) : (
                <div className="w-full h-full bg-gray-200 rounded-full" />
              )}
            </div>
            <h3 className="font-semibold text-base lg:text-lg">
              {member.name}
            </h3>
            <p className="text-gray-600 text-sm">{member.desc}</p>
          </div>
        ))}
      </div>
    </Section>
  );
};
