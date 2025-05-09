import React from "react";
import ResponsiveImage from "./ResponsiveImage";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import SimpleLayout from "./SimpleLayout";
import { TeamMember } from "../data/team";
import { Link } from "react-router-dom";
import { Mail, Phone } from "lucide-react";

interface TeamMemberProfileProps {
  member: TeamMember;
}

const TeamMemberProfile: React.FC<TeamMemberProfileProps> = ({
  member,
}) => {
  const { bio, skills, quote, quoteBy, contact, hobbies, funFacts } = member;

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
                let link = "/";
                
                if (tag === "schulgruendungswunder") {
                  color = "bg-schulgruendung/10 text-schulgruendung";
                  link = "/schulgruendungswunder";
                }
                if (tag === "schulbauwunder") {
                  color = "bg-schulbau/10 text-schulbau";
                  link = "/schulbauwunder";
                }
                if (tag === "schulinnovationswunder") {
                  color = "bg-schulinnovation/10 text-schulinnovation";
                  link = "/schulinnovationswunder";
                }
                
                return (
                  <Link 
                    key={tag} 
                    to={link}
                    className={`${color} px-3 py-1 rounded-full text-sm font-medium hover:opacity-80 transition-opacity`}
                  >
                    #{tag}
                  </Link>
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
                      <Mail size={18} className="text-gray-600" />
                      <a 
                        href={`mailto:${contact.email}`} 
                        className="text-blue-600 hover:underline"
                        dangerouslySetInnerHTML={{ 
                          __html: contact.email.replace('@', '<br />@') 
                        }}
                      />
                    </div>
                  )}
                  {contact.phone && (
                    <div className="flex items-center gap-2">
                      <Phone size={18} className="text-gray-600" />
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
              <div className="bg-gray-50 border-l-4 border-gray-300 p-4 mb-6 md:mt-8 md:mb-20 italic">
                <p className="text-lg md:text-4xl">{quote}</p>
                {quoteBy && (<p className="text-gray-600 mt-6">{quoteBy}</p>)}
              </div>
            )}
            
            {bio && (
              <Card className="mb-6">
                <CardHeader className="pb-2">
                  <h2 className="text-xl font-semibold">Über mich</h2>
                </CardHeader>
                <CardContent>
                  {Array.isArray(bio) ? (
                    <div className="space-y-4">
                      {bio.map((paragraph, index) => (
                        <p key={index} className="text-gray-700">{paragraph}</p>
                      ))}
                    </div>
                  ) : (
                    <p className="text-gray-700">{bio}</p>
                  )}
                </CardContent>
              </Card>
            )}
            
            {skills && skills.length > 0 && (
              <Card className="mb-6">
                <CardHeader className="pb-2">
                  <h2 className="text-xl font-semibold">Kompetenzen</h2>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-1">
                    {skills.map((item, index) => (
                      <li key={index} className="text-gray-700">{item}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )}
            
            {hobbies && hobbies.length > 0 && (
              <Card className="mb-6">
                <CardHeader className="pb-2">
                  <h2 className="text-xl font-semibold">Hobbys</h2>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-1">
                    {hobbies.map((item, index) => (
                      <li key={index} className="text-gray-700">{item}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )}
            
            {funFacts && (
              <Card className="mb-6">
                <CardHeader className="pb-2">
                  <h2 className="text-xl font-semibold">Fun Facts</h2>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">{funFacts}</p>
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
