
import React from "react";
import { Card } from "@/components/ui/card";
import { TeamMember } from "../data/team";

interface TeamSectionProps {
  members: TeamMember[];
  title?: string;
  textColor: string;
}

export const TeamSection = ({
  members,
  title = "Unser Team",
  textColor
}: TeamSectionProps) => {
  return (
    <section id="team" className="mb-16">
      <Card className="p-8">
        <h2 className={`text-3xl font-bold mb-6 ${textColor}`}>
          {title}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {members.map((member) => (
            <div key={member.name} className="text-center">
              <div className="w-24 h-24 lg:w-28 lg:h-28 bg-gray-200 rounded-full mx-auto mb-3 overflow-hidden">
                <img
                  src={member.filename 
                    ? `/assets/team/${member.filename}`
                    : `https://images.unsplash.com/photo-1581092795360-fd1ca04f0952`
                  }
                  alt={member.name}
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <h3 className="font-semibold text-base lg:text-lg">
                {member.name}
              </h3>
              <p className="text-gray-600 text-sm">{member.desc}</p>
            </div>
          ))}
        </div>
      </Card>
    </section>
  );
};
