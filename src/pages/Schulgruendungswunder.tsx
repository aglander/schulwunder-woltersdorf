
import React from "react";
import { WunderLayout } from "@/components/WunderLayout";
import { WunderContentSection } from "@/components/WunderContentSection";
import { Card } from "@/components/ui/card";

const Schulgruendungswunder = () => {
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
    <WunderLayout
      title="#schulgründungswunder"
      description="Entdecken Sie unsere Vision für die neue Oberschule in Woltersdorf, die 2026 eröffnet wird. Ein zukunftsweisendes Bildungsprojekt für die nächste Generation."
      heroImage="/assets/schulgruendungswunder-hero.jpg"
      heroText="Entdecken Sie unsere Vision für die neue Oberschule, die 2026 eröffnet wird."
      navigation={navigation}
      projectStatus={projectStatus}
    >
      <WunderContentSection id="description" title="Über das Schulgründungswunder">
        <div className="prose max-w-none">
          <p className="text-lg mb-6">
            Mit vereinten Kräften erschaffen wir einen Ort, an dem Bildung lebendig wird. 
            Unser Schulgründungswunder ist mehr als nur ein Bauprojekt - es ist die Geschichte 
            einer Gemeinschaft, die zusammenkommt, um etwas Außergewöhnliches zu schaffen.
          </p>
          <p className="mb-6">
            In Woltersdorf entsteht Schritt für Schritt unsere neue Schule. Ein Ort, 
            der nicht nur Klassenräume bietet, sondern ein lebendiger Raum für Entwicklung, 
            Kreativität und gemeinsames Lernen sein wird.
          </p>
          <div className="bg-gray-50 p-6 rounded-lg mt-8">
            <h3 className="text-xl font-semibold mb-4 text-schulgruendung">Unsere Vision</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Nachhaltige Bauweise mit natürlichen Materialien</li>
              <li>Flexible Lernräume für moderne Pädagogik</li>
              <li>Gemeinschaftsflächen für Begegnung und Austausch</li>
              <li>Naturnahe Außengestaltung mit Lern- und Spielbereichen</li>
            </ul>
          </div>
        </div>
      </WunderContentSection>

      <WunderContentSection id="updates" title="Aktuelles">
        <div className="space-y-8">
          <div className="border-b pb-8">
            <h3 className="text-xl font-semibold mb-4 text-schulgruendung">Baufortschritt</h3>
            <div className="aspect-video bg-gray-100 rounded-lg mb-4">
              <div className="w-full h-full flex items-center justify-center text-gray-400">
                Bild/Video vom Baufortschritt
              </div>
            </div>
            <p className="text-gray-600">
              Aktuelle Bilder und Updates von unseren Baufortschritten werden hier erscheinen.
            </p>
          </div>
        </div>
      </WunderContentSection>

      <WunderContentSection id="team" title="Unser Team">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4" />
            <h3 className="font-semibold">Team-Mitglied</h3>
            <p className="text-sm text-gray-600">Position</p>
          </div>
        </div>
      </WunderContentSection>

      <WunderContentSection id="supporters" title="Unsere Unterstützer">
        <p className="mb-8">
          Wir danken allen Sponsoren und Unterstützern, die dieses Projekt möglich machen.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="aspect-square bg-gray-100 rounded-lg flex items-center justify-center">
            Logo
          </div>
          <div className="aspect-square bg-gray-100 rounded-lg flex items-center justify-center">
            Logo
          </div>
          <div className="aspect-square bg-gray-100 rounded-lg flex items-center justify-center">
            Logo
          </div>
          <div className="aspect-square bg-gray-100 rounded-lg flex items-center justify-center">
            Logo
          </div>
        </div>
      </WunderContentSection>
    </WunderLayout>
  );
};

export default Schulgruendungswunder;
