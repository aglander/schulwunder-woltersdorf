
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
      title: "#schulgründungswunder",
      description:
        "Entdecken Sie unsere Vision für die neue Oberschule, die 2026 eröffnet wird.",
      image: "/assets/schulgruendungswunder-hero.jpg",
      link: "/schulgruendungswunder",
      color: "schulgruendung" as WunderColor,
    },
    {
      title: "#schulbauwunder",
      description:
        "Erfahren Sie mehr über unsere Baueinsätze und wie wir gemeinsam unsere neue Schule erschaffen.",
      image: "/assets/schulbauwunder-hero.jpg",
      link: "/schulbauwunder",
      color: "schulbau" as WunderColor,
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
    <div className="min-h-screen bg-neutral-800">
      <div className="max-w-[1700px] mx-auto relative">
        {!isMobile && (
          <div className="fixed top-0 left-[30px] z-[60] w-[100px] bg-white/95 shadow-lg" style={{
            clipPath: 'polygon(0% 0%, 100% 0%, 100% 89%, 0% 95%)'
          }}>
            <a href="https://www.freie-schule-woltersdorf.de" target="_blank" rel="noopener noreferrer">
              <img src="/assets/FSW_Logo.png" alt="FSW Logo" className="w-full h-auto p-2" />
            </a>
          </div>
        )}

        {!isMobile && (
          <div className="fixed top-0 left-0 right-0 z-50">
            <div
              className="backdrop-blur-sm border-b border-black/20"
              style={{
                background:
                  "linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.25) 100%)",
              }}
            >
              <div className="max-w-[1700px] mx-auto">
                <div className="flex items-center justify-between h-16">
                  <div className="ml-[150px]">
                    <span className="font-semibold text-white">
                      Schulwunder Woltersdorf
                    </span>
                  </div>
                  <div className="mr-[30px]">
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
          </div>
        )}
        
        <div className={`${isMobile ? 'h-[calc(100dvh-64px)] flex flex-col' : 'min-h-screen h-screen flex flex-col md:flex-row'} max-w-[1700px] mx-auto`}>
          {wunder.map((w) => (
            <div key={w.title} className={`${isMobile ? 'h-1/3' : 'flex-1'}`}>
              <WunderCard {...w} />
            </div>
          ))}
        </div>

        {isMobile && (
          <div 
            className="fixed bottom-0 left-0 right-0 z-50 h-16"
          >
            <div
              className="backdrop-blur-sm border-t border-black/20 h-full"
              style={{
                background:
                  "linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.25) 100%)",
              }}
            >
              <div className="max-w-[1700px] mx-auto">
                <div className="container mx-auto px-4 h-full flex items-center justify-between gap-4">
                  <div className="relative">
                    <a 
                      href="https://www.freie-schule-woltersdorf.de" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="absolute bottom-2 left-0 bg-white/95 shadow-lg w-[90px]"
                      style={{
                        clipPath: 'polygon(0 6%, 100% 0%, 100% 100%, 0% 100%)',
                        transform: 'translateY(50%)'
                      }}
                    >
                      <img src="/assets/FSW_Logo.png" alt="FSW Logo" className="w-full h-auto p-2" />
                    </a>
                  </div>
                  <Button 
                    variant="secondary" 
                    size="sm"
                    className="bg-white text-black hover:bg-white/90 ml-[100px]"
                    onClick={() => window.open('https://betterplace.org/de/projects/126303', '_blank')}
                  >
                    Jetzt spenden
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Index;
