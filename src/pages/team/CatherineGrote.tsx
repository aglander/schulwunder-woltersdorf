
import React from "react";
import TeamMemberProfile from "@/components/TeamMemberProfile";
import { team } from "@/data/team";
import SEO from "@/components/SEO";

const CatherineGrote = () => {
  const member = team.find(m => m.name === "Dr. Cathérine Grote");
  
  if (!member) {
    return <div>Team member not found</div>;
  }

  const additionalInfo = {
    bio: "Als Pädagogik-Expertin gestalte ich das Konzept der Schulgruendungswunder-Initiative mit. Meine Erfahrung und mein Fachwissen bringe ich ein, um ein innovatives und kindgerechtes Bildungskonzept zu entwickeln, das auf den Prinzipien der Reformpädagogik basiert.",
    education: [
      "Promotion in Erziehungswissenschaften",
      "Studium der Pädagogik mit Schwerpunkt reformpädagogische Ansätze",
      "Fortbildungen in Montessori- und Waldorf-Pädagogik"
    ],
    experience: [
      "Langjährige Erfahrung in der Entwicklung pädagogischer Konzepte",
      "Beratung von Bildungseinrichtungen",
      "Dozentin für innovative Lernmethoden"
    ],
    quote: "Kinder brauchen Räume, in denen sie ihre Potenziale frei entfalten können. Genau solche Räume wollen wir schaffen.",
    contact: {
      email: "catherine.grote@freie-schule-woltersdorf.de"
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

export default CatherineGrote;
