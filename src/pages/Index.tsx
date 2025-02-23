
import React from "react";
import WunderCard from "../components/WunderCard";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "../hooks/use-mobile";

type WunderColor = "schulbau" | "schulgruendung" | "schulinnovation";

interface Wunder {
  title: string;
  description: string;
  image: string;
  link: string;
  color: WunderColor;
}

const Index = () => {
  const isMobile = useIsMobile();

  const wunder: Wunder[] = [
    {
      title: "#schulbauwunder",
      description:
        "Erfahren Sie mehr über unsere Baueinsätze und wie wir gemeinsam unsere neue Schule erschaffen.",
      image: "/assets/schulbauwunder-hero.jpg",
      link: "/schulbauwunder",
      color: "schulbau" as WunderColor,
    },
    {
      title: "#schulgründungswunder",
      description:
        "Entdecken Sie unsere Vision für die neue Oberschule, die 2026 eröffnet wird.",
      image: "/assets/schulgruendungswunder-hero.jpg",
      link: "/schulgruendungswunder",
      color: "schulgruendung" as WunderColor,
    },
    {
      title: "#schulinnovationswunder",
      description: "Sehen Sie unsere Zukunftspläne für das neue Schulgelände.",
      image: "/assets/schulinnovationswunder-hero.png",
      link: "/schulinnovationswunder",
      color: "schulinnovation" as WunderColor,
    },
  ];

  return (
    <>
      {!isMobile && (
        <div className="fixed top-0 left-0 right-0 z-50">
          <div
            className="backdrop-blur-sm border-b border-black/20"
            style={{
              background:
                "linear-gradient(180deg, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.45) 100%)",
            }}
          >
            <div className="container mx-auto px-4 h-16 flex items-center justify-between">
              <div className="w-[200px]" />
              <span className="font-semibold text-white">
                Schulwunder Woltersdorf
              </span>
              <div className="w-[200px] flex justify-end">
                <Button 
                  variant="secondary" 
                  className="bg-white text-black hover:bg-white/90"
                  onClick={() => window.open('https://betterplace.org/de/projects/126303', '_blank')}
                >
                  Jetzt spenden
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
      
      <div className={`min-h-screen h-screen flex flex-col md:flex-row ${isMobile ? 'pb-24' : ''}`}>
        {wunder.map((w) => (
          <div key={w.title} className="flex-1">
            <WunderCard {...w} />
          </div>
        ))}
      </div>

      {isMobile && (
        <div 
          className="fixed bottom-0 left-0 right-0 backdrop-blur-sm border-t border-black/20"
          style={{
            background:
              "linear-gradient(180deg, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.45) 100%)",
          }}
        >
          <div className="p-4">
            <Button 
              variant="secondary" 
              className="w-full bg-white text-black hover:bg-white/90"
              onClick={() => window.open('https://betterplace.org/de/projects/126303', '_blank')}
            >
              Jetzt spenden
            </Button>
          </div>
        </div>
      )}
    </>
  );
};

export default Index;
