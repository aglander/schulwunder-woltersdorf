
import React from "react";
import TeamMemberProfile from "@/components/TeamMemberProfile";
import { team } from "@/data/team";
import SEO from "@/components/SEO";

const JohannesWilk = () => {
  const member = team.find(m => m.name === "Johannes Wilk");
  
  if (!member) {
    return <div>Team member not found</div>;
  }

  const additionalInfo = {
    bio: "Als Organisator der Schulwunder-Initiative koordiniere ich die verschiedenen Projekte und sorge dafür, dass unsere Vision Wirklichkeit wird. Mit Leidenschaft für innovative Bildungskonzepte arbeite ich daran, die Freie Schule Woltersdorf weiterzuentwickeln und unsere drei Wunder zu verwirklichen.",
    experience: [
      "Mehrjährige Erfahrung im Projektmanagement",
      "Mitglied im Vorstand der Freien Schule Woltersdorf",
      "Leitung verschiedener Bildungsinitiativen"
    ],
    projects: [
      "Schulbauwunder - Koordination der Baueinsätze",
      "Schulinnovationswunder - Konzeptentwicklung",
      "Schulgruendungswunder - Organinsation des Gründungsprozesses"
    ],
    quote: "Gemeinsam können wir wunderbare Dinge erschaffen und die Zukunft der Bildung in Woltersdorf aktiv gestalten.",
    contact: {
      email: "johannes.wilk@freie-schule-woltersdorf.de"
    }
  };

  return (
    <>
      <SEO 
        title={member.name}
        description={`${member.name} - ${member.desc} bei der Freien Schule Woltersdorf und Teil unserer Schulwunder-Initiative.`}
      />
      <TeamMemberProfile member={member} additionalInfo={additionalInfo} />
    </>
  );
};

export default JohannesWilk;
