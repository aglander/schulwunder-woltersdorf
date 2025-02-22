
import React from "react";
import { WunderHeader } from "@/components/WunderHeader";
import { WunderSidebar } from "@/components/WunderSidebar";
import { WunderContentSection } from "@/components/WunderContentSection";
import { EventCalendar } from "../components/EventCalendar";
import Footer from "../components/Footer";
import SEO from "../components/SEO";
import { supporters } from "../data/supporters";

const Schulbauwunder = () => {
  const navigation = [
    { href: "#description", label: "Beschreibung" },
    { href: "#updates", label: "Aktuelles" },
    { href: "#team", label: "Team" },
    { href: "#supporters", label: "Unterstützer" },
  ];

  const projectStatus = {
    location: "Woltersdorf",
    phase: "In Entwicklung",
    nextSteps: [
      "Planung der nächsten Bauphase",
      "Koordination der Helfer",
      "Materialbeschaffung",
    ],
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-['Barlow_Semi_Condensed']">
      <SEO 
        title="Schulbauwunder - Gemeinschaftlich Bildung gestalten"
        description="Erfahren Sie mehr über unsere Baueinsätze und wie wir gemeinsam unsere neue Schule erschaffen. Ein innovatives Bildungsprojekt in Woltersdorf."
      />
      <WunderHeader 
        title="#schulbauwunder"
        imageSrc="/assets/schulbauwunder-hero.jpg"
      >
        <p className="text-xl max-w-2xl">
          Gemeinsam erschaffen wir einen neuen Ort des Lernens. Erfahren Sie mehr über unsere 
          Baueinsätze und wie wir mit vereinten Kräften unsere neue Schule bauen.
        </p>
      </WunderHeader>

      <div className="container mx-auto px-4 py-8 flex-grow">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-1/4">
            <WunderSidebar navigation={navigation} status={projectStatus} />
          </div>

          <div className="lg:w-3/4">
            <WunderContentSection id="description" title="Über das Schulbauwunder">
              <div className="prose max-w-none">
                <p className="text-lg mb-6">
                  Mit vereinten Kräften erschaffen wir einen Ort, an dem Bildung lebendig wird. 
                  Unser Schulbauwunder ist mehr als nur ein Bauprojekt - es ist die Geschichte 
                  einer Gemeinschaft, die zusammenkommt, um etwas Außergöhnliches zu schaffen.
                </p>
                <p className="mb-6">
                  In Woltersdorf entsteht Schritt für Schritt unsere neue Schule. Ein Ort, 
                  der nicht nur Klassenräume bietet, sondern ein lebendiger Raum für Entwicklung, 
                  Kreativität und gemeinsames Lernen sein wird.
                </p>
                <div className="bg-gray-50 p-6 rounded-lg mt-8">
                  <h3 className="text-xl font-semibold mb-4 text-schulbau">Unsere Vision</h3>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Nachhaltige Bauweise mit natürlichen Materialien</li>
                    <li>Flexible Lernräume für moderne Pädagogik</li>
                    <li>Gemeinschaftsflächen für Begegnung und Austausch</li>
                    <li>Naturnahe Außengestaltung mit Lern- und Spielbereichen</li>
                  </ul>
                </div>
              </div>
            </WunderContentSection>

            <WunderContentSection id="events" title="Termine">
              <EventCalendar />
            </WunderContentSection>

            <WunderContentSection id="team" title="Unser Team">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4" />
                  <h3 className="font-semibold">Johannes Wilk</h3>
                  <p className="text-sm text-gray-600">Organisation</p>
                </div>
                <div className="text-center">
                  <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4" />
                  <h3 className="font-semibold">Philip Preuß</h3>
                  <p className="text-sm text-gray-600">Social Media</p>
                </div>
                <div className="text-center">
                  <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4" />
                  <h3 className="font-semibold">Johann Schindler</h3>
                  <p className="text-sm text-gray-600">Praktische Ausführung</p>
                </div>
              </div>
            </WunderContentSection>

            <WunderContentSection id="supporters" title="Unsere Unterstützer">
              <p className="mb-8">
                Wir danken allen Sponsoren und Unterstützern, die dieses Projekt möglich machen.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                {supporters.map((supporter) => (
                  <a
                    key={supporter.filename}
                    href={supporter.url}
                    className="block hover:opacity-80 transition-opacity"
                    title={supporter.title}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={`/assets/support/${supporter.filename}`}
                      alt={supporter.title}
                      className="w-full h-auto object-contain"
                    />
                  </a>
                ))}
              </div>
            </WunderContentSection>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Schulbauwunder;
