
import React from "react";
import WunderCard from "../components/WunderCard";

type WunderColor = "schulbau" | "schulgruendung" | "schulinnovation";

interface Wunder {
  title: string;
  description: string;
  image: string;
  link: string;
  color: WunderColor;
}

const Index = () => {
  const wunder: Wunder[] = [
    {
      title: "Schulbauwunder",
      description: "Erfahren Sie mehr über unsere Baueinsätze und wie wir gemeinsam unsere neue Schule erschaffen.",
      image: "/assets/schulbauwunder-hero.jpg",
      link: "/schulbauwunder",
      color: "schulbau" as WunderColor
    },
    {
      title: "Schulgründungswunder",
      description: "Entdecken Sie unsere Vision für die neue Oberschule, die 2026 eröffnet wird.",
      image: "/assets/schulgruendungswunder-hero.jpg",
      link: "/schulgruendungswunder",
      color: "schulgruendung" as WunderColor
    },
    {
      title: "Schulinnovationswunder",
      description: "Sehen Sie unsere Zukunftspläne für das neue Schulgelände.",
      image: "/assets/schulinnovationswunder-hero.png",
      link: "/schulinnovationswunder",
      color: "schulinnovation" as WunderColor
    },
  ];

  return (
    <div className="min-h-screen h-screen flex flex-col md:flex-row">
      {wunder.map((w) => (
        <div key={w.title} className="flex-1">
          <WunderCard {...w} />
        </div>
      ))}
    </div>
  );
};

export default Index;
