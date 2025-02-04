import React from "react";
import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";

const Schulgruendungswunder = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sticky Header */}
      <div className="sticky top-0 z-50 bg-primary/95 backdrop-blur supports-[backdrop-filter]:bg-primary/60">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ArrowLeft className="w-5 h-5 text-white" />
            <Link to="/" className="text-white hover:text-white/80 font-semibold">
              Schulwunder Woltersdorf
            </Link>
          </div>
          <div className="absolute left-1/2 transform -translate-x-1/2">
            <span className="text-white font-semibold">Schulgründungswunder</span>
          </div>
          <div className="w-[200px]" /> {/* Spacer für Balance */}
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-primary text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-6">Schulgründungswunder</h1>
          <p className="text-xl max-w-2xl">
            Entdecken Sie unsere Vision für die neue Oberschule, die 2026 eröffnet wird.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sticky Navigation */}
          <div className="lg:w-1/4">
            <div className="sticky top-4">
              <nav className="bg-white rounded-lg shadow-lg p-4">
                <ul className="space-y-2">
                  <li>
                    <a href="#description" className="text-primary hover:underline block py-2">
                      Beschreibung
                    </a>
                  </li>
                  <li>
                    <a href="#updates" className="text-primary hover:underline block py-2">
                      Aktuelles
                    </a>
                  </li>
                  <li>
                    <a href="#team" className="text-primary hover:underline block py-2">
                      Team
                    </a>
                  </li>
                  <li>
                    <a href="#supporters" className="text-primary hover:underline block py-2">
                      Unterstützer
                    </a>
                  </li>
                </ul>

                {/* Project Status */}
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

          {/* Main Content */}
          <div className="lg:w-3/4">
            {/* Description Section */}
            <section id="description" className="mb-16">
              <Card className="p-8">
                <h2 className="text-3xl font-bold mb-6">Über das Schulgründungswunder</h2>
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
                    <h3 className="text-xl font-semibold mb-4">Unsere Vision</h3>
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

            {/* Updates Section */}
            <section id="updates" className="mb-16">
              <Card className="p-8">
                <h2 className="text-3xl font-bold mb-6">Aktuelles</h2>
                <div className="space-y-8">
                  <div className="border-b pb-8">
                    <h3 className="text-xl font-semibold mb-4">Baufortschritt</h3>
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

            {/* Team Section */}
            <section id="team" className="mb-16">
              <Card className="p-8">
                <h2 className="text-3xl font-bold mb-6">Unser Team</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4" />
                    <h3 className="font-semibold">Team-Mitglied</h3>
                    <p className="text-sm text-gray-600">Position</p>
                  </div>
                </div>
              </Card>
            </section>

            {/* Supporters Section */}
            <section id="supporters" className="mb-16">
              <Card className="p-8">
                <h2 className="text-3xl font-bold mb-6">Unsere Unterstützer</h2>
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
              </Card>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Schulgruendungswunder;
