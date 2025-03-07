import React from "react";
import WunderCard from "../components/WunderCard";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "../hooks/use-mobile";
import { Link } from "react-router-dom";
import BottomBar from "@/components/BottomBar";
import { Youtube, Instagram } from "lucide-react";
import ResponsiveImage from "@/components/ResponsiveImage";

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
      image:
        "assets/schulgruendungswunder-hero.jpg",
      link: "/schulgruendungswunder",
      color: "schulgruendung" as WunderColor,
    },
    {
      title: "#schulbauwunder",
      description:
        "Erfahren Sie mehr über unsere Baueinsätze und wie wir gemeinsam unsere neue Schule erschaffen.",
      image:
        "assets/schulbauwunder-hero.jpg",
      link: "/schulbauwunder",
      color: "schulbau" as WunderColor,
    },
    {
      title: "#schulinnovationswunder",
      description: "Sehen Sie unsere Zukunftspläne für das neue Schulgelände.",
      image:
        "assets/schulinnovationswunder-hero.png",
      link: "/schulinnovationswunder",
      color: "schulinnovation" as WunderColor,
    },
  ];

  return (
    <div className="min-h-screen bg-neutral-800 relative overflow-hidden">
      {!isMobile && (
        <div className="fixed top-0 left-0 right-0 z-50">
          <div
            className="backdrop-blur-sm border-b border-black/20"
            style={{
              background:
                "linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.25) 100%)",
            }}
          >
            <div className="container mx-auto relative px-4">
              <div
                className="absolute ml-[30px] top-0 z-[60] w-[100px] bg-white/90"
                style={{
                  clipPath: "polygon(0% 0%, 100% 0%, 100% 89%, 0% 95%)",
                }}
              >
                <a
                  href="https://www.freie-schule-woltersdorf.de"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ResponsiveImage
                    imageUrl="assets/FSW_Logo.png"
                    alt="FSW Logo2"
                    className="w-full h-auto p-2"
                  />
                </a>
              </div>
              <div className="flex items-center justify-between h-16">
                <div className="ml-[150px]">
                  <span className="font-semibold text-white">
                    Schulwunder Woltersdorf
                  </span>
                </div>
                <div className="mr-[30px] flex items-center gap-4">
                  <div className="flex gap-3">
                    <a
                      href="https://www.youtube.com/@freieschule_woltersdorf"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="YouTube"
                    >
                      <Youtube size={24} color="white" />
                    </a>
                    <a
                      href="https://www.instagram.com/freie_schule_woltersdorf/"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Instagram"
                    >
                      <Instagram size={24} color="white" />
                    </a>
                  </div>
                  <Link to="/spenden">
                    <Button
                      variant="secondary"
                      className="bg-white text-black hover:bg-white/90"
                    >
                      Jetzt spenden
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className={`container mx-auto ${isMobile ? "px-2 pt-2" : ""}`}>
        <div
          className={`w-full max-w-[1700px] mx-auto relative ${
            !isMobile
              ? "shadow-[35px_0_35px_-25px_rgba(0,0,0,0.5),-35px_0_35px_-25px_rgba(0,0,0,0.5)]"
              : ""
          }`}
        >
          <div
            className={`${
              isMobile
                ? "h-[calc(100dvh-74px)] flex flex-col gap-2"
                : "min-h-screen h-screen flex flex-col md:flex-row"
            }`}
          >
            {wunder.map((w) => (
              <div
                key={w.title}
                className={`${
                  isMobile
                    ? "h-[calc((100dvh-74px-4px)/3)] shadow-[0_35px_35px_-25px_rgba(0,0,0,0.5)]"
                    : "flex-1"
                }`}
              >
                <WunderCard {...w} />
              </div>
            ))}
          </div>

          {/* Decorative illustrations */}
          {!isMobile && (
            <div className="absolute inset-0 overflow-visible pointer-events-none z-[45]">
              <img
                src="/assets/illustrations/illustration-lightbulb.svg"
                alt=""
                className="absolute top-[15%] right-[62%] w-32 h-32 opacity-70 brightness-[10]"
              />
              <img
                src="/assets/illustrations/illustration-paper-airplane.svg"
                alt=""
                className="absolute top-[70%] right-[27%] w-48 h-48 opacity-70 brightness-[10]"
              />
            </div>
          )}
        </div>
      </div>

      <BottomBar />
    </div>
  );
};

export default Index;
