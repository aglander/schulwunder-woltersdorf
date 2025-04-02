
import React from "react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import ResponsiveImage from "./ResponsiveImage";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import SimpleLayout from "./SimpleLayout";
import { TeamMember } from "../data/team";

interface TeamMemberProfileProps {
  member: TeamMember;
  additionalInfo?: {
    bio?: string;
    education?: string[];
    experience?: string[];
    projects?: string[];
    quote?: string;
    contact?: {
      email?: string;
      phone?: string;
    };
  };
}

const TeamMemberProfile: React.FC<TeamMemberProfileProps> = ({
  member,
  additionalInfo = {},
}) => {
  const { bio, education, experience, projects, quote, contact } = additionalInfo;

  return (
    <SimpleLayout>
      <div className="mt-8 px-4 md:px-6 max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row items-start gap-8">
          {/* Profile Image Section */}
          <div className="w-full md:w-1/3 flex flex-col items-center">
            <div className="w-48 h-48 rounded-full overflow-hidden mb-4">
              {member.filename ? (
                <ResponsiveImage
                  imageUrl={`assets/${member.filename}`}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-500 text-2xl">
                    {member.name.split(" ").map((n) => n[0]).join("")}
                  </span>
                </div>
              )}
            </div>
            <h1 className="text-2xl md:text-3xl font-bold text-center">{member.name}</h1>
            <p className="text-gray-600 text-lg text-center mb-4">{member.desc}</p>
            
            {/* Tags */}
            <div className="flex flex-wrap gap-2 justify-center mb-6">
              {member.tags.map((tag) => {
                let color = "bg-gray-200 text-gray-800";
                if (tag === "schulgruendungswunder") color = "bg-blue-100 text-blue-800";
                if (tag === "schulbauwunder") color = "bg-green-100 text-green-800";
                if (tag === "schulinnovationswunder") color = "bg-purple-100 text-purple-800";
                
                return (
                  <span 
                    key={tag} 
                    className={`${color} px-3 py-1 rounded-full text-sm font-medium`}
                  >
                    #{tag}
                  </span>
                );
              })}
            </div>
            
            {/* Contact Info */}
            {contact && (Object.keys(contact).length > 0) && (
              <Card className="w-full">
                <CardHeader className="pb-2">
                  <h3 className="text-lg font-semibold">Kontakt</h3>
                </CardHeader>
                <CardContent>
                  {contact.email && (
                    <div className="flex items-center gap-2 mb-2">
                      <span className="font-medium">Email:</span>
                      <a href={`mailto:${contact.email}`} className="text-blue-600 hover:underline">
                        {contact.email}
                      </a>
                    </div>
                  )}
                  {contact.phone && (
                    <div className="flex items-center gap-2">
                      <span className="font-medium">Telefon:</span>
                      <a href={`tel:${contact.phone}`} className="text-blue-600 hover:underline">
                        {contact.phone}
                      </a>
                    </div>
                  )}
                </CardContent>
              </Card>
            )}
          </div>
          
          {/* Profile Details Section */}
          <div className="w-full md:w-2/3">
            {quote && (
              <div className="bg-gray-50 border-l-4 border-gray-300 p-4 mb-6 italic">
                <p className="text-lg">{quote}</p>
              </div>
            )}
            
            {bio && (
              <Card className="mb-6">
                <CardHeader className="pb-2">
                  <h2 className="text-xl font-semibold">Über mich</h2>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">{bio}</p>
                </CardContent>
              </Card>
            )}
            
            {education && education.length > 0 && (
              <Card className="mb-6">
                <CardHeader className="pb-2">
                  <h2 className="text-xl font-semibold">Ausbildung</h2>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-1">
                    {education.map((item, index) => (
                      <li key={index} className="text-gray-700">{item}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )}
            
            {experience && experience.length > 0 && (
              <Card className="mb-6">
                <CardHeader className="pb-2">
                  <h2 className="text-xl font-semibold">Erfahrung</h2>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-1">
                    {experience.map((item, index) => (
                      <li key={index} className="text-gray-700">{item}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )}
            
            {projects && projects.length > 0 && (
              <Card className="mb-6">
                <CardHeader className="pb-2">
                  <h2 className="text-xl font-semibold">Projekte</h2>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-1">
                    {projects.map((item, index) => (
                      <li key={index} className="text-gray-700">{item}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </SimpleLayout>
  );
};

export default TeamMemberProfile;
