
import React from "react";
import { Card } from "@/components/ui/card";
import { WunderHeader } from "@/components/WunderHeader";
import Footer from "../components/Footer";
import SEO from "../components/SEO";
import { supporters } from "../data/supporters";
import { SupporterSection } from "@/components/SupporterSection";
import { IllustrationBox } from "@/components/IllustrationBox";
import { team } from "../data/team";
import { TeamSection } from "@/components/TeamSection";
import { EventCalendar } from "@/components/EventCalendar";

const Schulinnovationswunder = () => {
  const innovationswunderSupporters = supporters.filter(supporter => 
    supporter.tags.includes('schulinnovationswunder')
  );

  const innovationswunderTeam = team.filter(member => 
    member.tags.includes('schulinnovationswunder')
  );

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <SEO
        title="Schulinnovationswunder - Gemeinschaftlich Bildung gestalten"
        description="Sehen Sie unsere Zukunftspläne für das neue Schulgelände in Woltersdorf. Innovative Bildungskonzepte und moderne Lernumgebungen für die Schule von morgen."
      />
      <WunderHeader
        title="#schulinnovationswunder"
        imageSrc="/assets/schulinnovationswunder-hero.png"
        subTitle="Entdecken Sie unsere innovativen Bauvorhaben und Zukunftspläne für das neue
          Schulgelände in Woltersdorf."
      />

      <div className="container mx-auto px-4 py-8 flex-grow">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-1/4">
            <div className="sticky top-20">
              <nav className="bg-white rounded-lg shadow-lg p-4">
                <ul className="space-y-2">
                  <li>
                    <a
                      href="#description"
                      className="text-schulinnovation hover:underline block py-2"
                    >
                      Beschreibung
                    </a>
                  </li>
                  <li>
                    <a
                      href="#updates"
                      className="text-schulinnovation hover:underline block py-2"
                    >
                      Aktuelles
                    </a>
                  </li>
                  <li>
                    <a
                      href="#team"
                      className="text-schulinnovation hover:underline block py-2"
                    >
                      Team
                    </a>
                  </li>
                  <li>
                    <a
                      href="#supporters"
                      className="text-schulinnovation hover:underline block py-2"
                    >
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

          <div className="lg:w-3/4">
            <section id="description" className="mb-16">
              <Card className="p-8">
                <h2 className="text-3xl font-bold mb-6 text-schulinnovation">
                  Entwicklung unseres Grundstücks: Ein Mehrwert für Woltersdorf
                </h2>
                <div className="prose max-w-none">
                  <p className="text-lg mb-6">
                    Die Freie Schule Woltersdorf verfügt über ein ca. 10.000 m² großes Grundstück, 
                    das derzeit ungenutzt ist. Anstatt es zu verkaufen, haben wir uns entschieden, 
                    dieses Grundstück zu entwickeln und damit einen Mehrwert für unsere Gemeinde zu schaffen.
                  </p>

                  <IllustrationBox
                    title="Unsere Vision"
                    illustration="/assets/illustrations/illustration-lightbulb.svg"
                    illustrationColor="filter-schulinnovation"
                    className="mb-8"
                  >
                    <div>
                      <h4 className="font-semibold mb-2">Nachhaltige Entwicklung</h4>
                      <p>
                        Wir möchten das Grundstück so entwickeln, dass es langfristig einen 
                        positiven Beitrag für Woltersdorf leistet.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Gemeinschaftsprojekt</h4>
                      <p>
                        Eine Arbeitsgruppe, bestehend aus Eltern der Schule, lokalen Politikern 
                        und regionalen Unternehmern, prüft die Machbarkeit und mögliche Unterstützer 
                        für dieses Projekt.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Ertrag für die Schule</h4>
                      <p>
                        Unser Ziel ist es, mit diesem Grundstück den höchstmöglichen Ertrag für 
                        die Freie Schule zu erwirtschaften, um unsere Bildungsangebote weiter zu 
                        verbessern.
                      </p>
                    </div>
                  </IllustrationBox>

                  <IllustrationBox
                    title="Unsere Arbeitsgruppe"
                    illustration="/assets/illustrations/illustration-check.svg"
                    illustrationColor="filter-schulinnovation"
                    className="mt-8"
                  >
                    <div>
                      <h4 className="font-semibold mb-2">Vielfältige Expertise</h4>
                      <p>
                        Die Arbeitsgruppe setzt sich aus engagierten Eltern, Vertretern der lokalen 
                        Politik und regionalen Unternehmern zusammen.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Machbarkeitsstudien</h4>
                      <p>
                        Wir prüfen verschiedene Nutzungsmöglichkeiten und entwickeln Konzepte, 
                        die sowohl wirtschaftlich als auch ökologisch sinnvoll sind.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Netzwerk und Unterstützung</h4>
                      <p>
                        Wir suchen nach Partnern und Unterstützern, die unsere Vision teilen und 
                        uns bei der Umsetzung helfen können.
                      </p>
                    </div>
                  </IllustrationBox>

                  <p className="text-lg mt-8">
                    Gemeinsam glauben wir fest daran, dass wir dieses Projekt erfolgreich realisieren können. 
                    Mit vereinten Kräften und der Unterstützung unserer Gemeinschaft werden wir das Grundstück 
                    zu einem wertvollen Teil von Woltersdorf machen.
                  </p>
                </div>
              </Card>
            </section>

            <section id="updates" className="mb-16">
              <Card className="p-8">
                <h2 className="text-3xl font-bold mb-6 text-schulinnovation">
                  Termine
                </h2>
                <EventCalendar />
              </Card>
            </section>

            <TeamSection 
              members={innovationswunderTeam}
              textColor="text-schulinnovation"
            />

            <SupporterSection 
              supporters={innovationswunderSupporters}
              textColor="text-schulinnovation"
              description=""
            />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Schulinnovationswunder;
