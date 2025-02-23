
import React from "react";
import Hero from "../components/Hero";
import WunderCard from "../components/WunderCard";
import InstagramFeed from "../components/InstagramFeed";
import YouTubeFeed from "../components/YouTubeFeed";
import Footer from "../components/Footer";
import SEO from "../components/SEO";

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
    <div className="min-h-screen flex flex-col">
      <SEO 
        title="Gemeinschaftlich Bildung gestalten"
        description="Entdecken Sie das Schulwunder Woltersdorf - ein gemeinschaftliches Projekt für innovative Bildung. Erfahren Sie mehr über unsere Baueinsätze, Schulgründung und Zukunftspläne."
      />
      <Hero />
      
      <main className="flex-grow py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {wunder.map((w) => (
              <WunderCard key={w.title} {...w} />
            ))}
          </div>
        </div>
        
        <InstagramFeed />
        <YouTubeFeed />
      </main>

      <Footer />
    </div>
  );
};

export default Index;
