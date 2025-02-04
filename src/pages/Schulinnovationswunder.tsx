import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";

const Schulinnovationswunder = () => {
  const [isH1Visible, setIsH1Visible] = useState(true);
  const h1Ref = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsH1Visible(entry.isIntersecting);
      },
      {
        threshold: 0,
      }
    );

    if (h1Ref.current) {
      observer.observe(h1Ref.current);
    }

    return () => {
      if (h1Ref.current) {
        observer.unobserve(h1Ref.current);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sticky Header */}
      <div className="sticky top-0 z-50 bg-primary/95 backdrop-blur supports-[backdrop-filter]:bg-primary/60">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Link to="/" className="text-white hover:text-white/80">
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <Link to="/" className="text-white hover:text-white/80 font-semibold">
              Schulwunder Woltersdorf
            </Link>
          </div>
          <div className="absolute left-1/2 transform -translate-x-1/2">
            {!isH1Visible && (
              <span className="text-white font-semibold">Schulinnovationswunder</span>
            )}
          </div>
          <div className="w-[200px]" /> {/* Spacer für Balance */}
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-primary text-white py-20">
        <div className="container mx-auto px-4">
          <h1 ref={h1Ref} className="text-5xl font-bold mb-6">
            Schulinnovationswunder
          </h1>
          <p className="text-xl max-w-2xl">
            Entdecken Sie unsere innovativen Bauvorhaben und Zukunftspläne für das neue 
            Schulgelände der Freien Schule Woltersdorf.
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
                      <p className="font-medium">Status</p>
                      <p className="text-gray-600">Konzeptphase</p>
                    </div>
                    <div>
                      <p className="font-medium">Nächste Schritte</p>
                      <ul className="list-disc list-inside text-gray-600">
                        <li>Ideensammlung</li>
                        <li>Machbarkeitsstudien</li>
                        <li>Konzeptentwicklung</li>
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
                <h2 className="text-3xl font-bold mb-6">Über das Schulinnovationswunder</h2>
                <div className="prose max-w-none">
                  <p className="text-lg mb-6">
                    Auf unserem neuen Schulgelände gibt es noch viel Raum für innovative 
                    Ideen und zukunftsweisende Projekte. Hier entstehen die Bildungsräume 
                    von morgen.
                  </p>
                  <p className="mb-6">
                    Mit dem Schulinnovationswunder schaffen wir Platz für neue Lernformen, 
                    nachhaltige Technologien und gemeinschaftliche Begegnungsräume.
                  </p>
                  <div className="bg-gray-50 p-6 rounded-lg mt-8">
                    <h3 className="text-xl font-semibold mb-4">Unsere Innovationen</h3>
                    <ul className="list-disc list-inside space-y-2">
                      <li>Moderne Lernwerkstätten</li>
                      <li>Nachhaltige Energiekonzepte</li>
                      <li>Digitale Lernumgebungen</li>
                      <li>Naturnahe Außenräume</li>
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
                    <h3 className="text-xl font-semibold mb-4">Innovationsfortschritt</h3>
                    <div className="aspect-video bg-gray-100 rounded-lg mb-4">
                      <div className="w-full h-full flex items-center justify-center text-gray-400">
                        Bild/Video von Innovationsprojekten
                      </div>
                    </div>
                    <p className="text-gray-600">
                      Aktuelle Informationen zu unseren Innovationsprojekten werden hier erscheinen.
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
                  Wir danken allen Unterstützern, die uns bei der Realisierung unserer 
                  innovativen Projekte zur Seite stehen.
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

export default Schulinnovationswunder;