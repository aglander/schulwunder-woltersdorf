import React from "react";
import { Card } from "@/components/ui/card";
import { WunderHeader } from "@/components/WunderHeader";
import Footer from "../components/Footer";
import SEO from "../components/SEO";
import unterstuetzerImage from "../assets/unterstuetzer.png";

const Schulbauwunder = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <SEO 
        title="Schulbauwunder - Gemeinschaftlich Bildung gestalten"
        description="Erfahren Sie mehr über unsere Baueinsätze und wie wir gemeinsam unsere neue Schule erschaffen. Ein innovatives Bildungsprojekt in Woltersdorf."
      />
      <WunderHeader title="Schulbauwunder">
        <p className="text-xl max-w-2xl">
          Gemeinsam erschaffen wir einen neuen Ort des Lernens. Erfahren Sie mehr über unsere 
          Baueinsätze und wie wir mit vereinten Kräften unsere neue Schule bauen.
        </p>
      </WunderHeader>

      <div className="container mx-auto px-4 py-8 flex-grow">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-1/4">
            <div className="sticky top-20">
              <nav className="bg-white rounded-lg shadow-lg p-4">
                <ul className="space-y-2">
                  <li>
                    <a href="#description" className="text-schulbau hover:underline block py-2">
                      Beschreibung
                    </a>
                  </li>
                  <li>
                    <a href="#updates" className="text-schulbau hover:underline block py-2">
                      Aktuelles
                    </a>
                  </li>
                  <li>
                    <a href="#team" className="text-schulbau hover:underline block py-2">
                      Team
                    </a>
                  </li>
                  <li>
                    <a href="#supporters" className="text-schulbau hover:underline block py-2">
                      Unterstützer
                    </a>
                  </li>
                </ul>

                <div className="mt-8 pt-8 border-t">
                  <h3 className="font-semibold mb-4">Projektstatus</h3>
                  <div className="space-y-4 text-sm">
                    <div>
                      <p className="font-medium">Standort</p>
                      <p className="text-gray-600">Woltersdorf</p>
                    </div>
                    <div>
                      <p className="font-medium">Bauphase</p>
                      <p className="text-gray-600">In Entwicklung</p>
                    </div>
                    <div>
                      <p className="font-medium">Nächste Schritte</p>
                      <ul className="list-disc list-inside text-gray-600">
                        <li>Planung der nächsten Bauphase</li>
                        <li>Koordination der Helfer</li>
                        <li>Materialbeschaffung</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </nav>
            </div>
          </div>

          <div className="lg:w-3/4">
            <section id="description" className="mb-16">
              <Card className="p-8">
                <h2 className="text-3xl font-bold mb-6 text-schulbau">Über das Schulbauwunder</h2>
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
              </Card>
            </section>

            <section id="updates" className="mb-16">
              <Card className="p-8">
                <h2 className="text-3xl font-bold mb-6 text-schulbau">Aktuelles</h2>
                <div className="space-y-8">
                  <div className="border-b pb-8">
                    <h3 className="text-xl font-semibold mb-4 text-schulbau">Baufortschritt</h3>
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
              </Card>
            </section>

            <section id="team" className="mb-16">
              <Card className="p-8">
                <h2 className="text-3xl font-bold mb-6 text-schulbau">Unser Team</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4" />
                    <h3 className="font-semibold">Team-Mitglied</h3>
                    <p className="text-sm text-gray-600">Position</p>
                  </div>
                </div>
              </Card>
            </section>

            <section id="supporters" className="mb-16">
              <Card className="p-8">
                <h2 className="text-3xl font-bold mb-6 text-schulbau">Unsere Unterstützer</h2>
                <p className="mb-8">
                  Wir danken allen Sponsoren und Unterstützern, die dieses Projekt möglich machen.
                </p>
                <div className="w-full">
                  <img 
                    src={unterstuetzerImage} 
                    alt="Unsere Unterstützer und Partner" 
                    className="w-full rounded-lg"
                  />
                </div>
              </Card>
            </section>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Schulbauwunder;
