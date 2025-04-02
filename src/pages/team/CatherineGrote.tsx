
import React from "react";
import TeamMemberProfile from "@/components/TeamMemberProfile";
import { team } from "@/data/team";
import SEO from "@/components/SEO";

const CatherineGrote = () => {
  const member = team.find(m => m.name === "Dr. Cathérine Grote");
  
  if (!member) {
    return <div>Team member not found</div>;
  }

  return (
    <>
      <SEO 
        title={member.name}
        description={`${member.name} - ${member.desc} bei der Freien Schule Woltersdorf und Teil unserer Schulwunder-Initiative.`}
      />
      <TeamMemberProfile member={member} />
    </>
  );
};

export default CatherineGrote;
