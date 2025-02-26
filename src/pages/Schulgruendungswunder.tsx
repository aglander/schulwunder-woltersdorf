import React from "react";
import { Card } from "@/components/ui/card";
import { WunderHeader } from "@/components/WunderHeader";
import Footer from "../components/Footer";
import SEO from "../components/SEO";
import WunderLayout from "@/components/WunderLayout";
import WunderContent from "@/components/WunderContent";
import { EventCalendar } from "../components/EventCalendar";
import { supporters } from "../data/supporters";
import { SupporterSection } from "@/components/SupporterSection";
import { IllustrationBox } from "@/components/IllustrationBox";
import { team } from "../data/team";
import { TeamSection } from "@/components/TeamSection";

const Schulgruendungswunder = () => {
  const gruendungswunderSupporters = supporters.filter((supporter) =>
    supporter.tags.includes("schulgruendungswunder")
  );

  const gruendungswunderTeam = team.filter((member) =>
    member.tags.includes("schulgruendungswunder")
  );

  return (
    <WunderLayout>
      <SEO
        title="Schulgründungswunder - Gemeinschaftlich Bildung gestalten"
        description="Entdecken Sie unsere Vision für die neue Oberschule in Woltersdorf, die 2026 eröffnet wird. Ein zukunftsweisendes Bildungsprojekt für die nächste Generation."
      />
      <WunderHeader
        title="#schulgruendungswunder"
        imageSrc="/assets/schulgruendungswunder-hero.jpg"
        subTitle="Entdecken Sie unsere Vision für die neue Oberschule, die 2026 eröffnet wird."
      />

      <WunderContent>
        <div className="lg:w-1/4">
          <div className="sticky top-20">
            <nav className="bg-white rounded-lg shadow-lg p-4">
              <ul className="space-y-2">
                <li>
                  <a
                    href="#description"
                    className="text-schulgruendung hover:underline block py-2"
                  >
                    Beschreibung
                  </a>
                </li>
                <li>
                  <a
                    href="#updates"
                    className="text-schulgruendung hover:underline block py-2"
                  >
                    Aktuelles
                  </a>
                </li>
                <li>
                  <a
                    href="#team"
                    className="text-schulgruendung hover:underline block py-2"
                  >
                    Team
                  </a>
                </li>
                <li>
                  <a
                    href="#supporters"
                    className="text-schulgruendung hover:underline block py-2"
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
              <h2
                lang="de"
                className="text-3xl font-bold mb-6 text-schulgruendung break-words hyphens-auto"
              >
                Von Eltern für Eltern: Die neue Oberschule der Freien Schule
                Woltersdorf
              </h2>
              <div className="prose max-w-none">
                <p className="text-lg mb-6">
                  Wir, die Eltern der Freien Schule Woltersdorf, haben uns
                  zusammengetan, um eine Oberschule zu gründen, die auf den
                  Prinzipien der Reformpädagogik basiert. Unser Ziel ist es,
                  eine Schule zu schaffen, die im Schuljahr 2026/2027 ihre Türen
                  öffnet und unseren Kindern eine innovative und ganzheitliche
                  Bildung bietet.
                </p>

                <IllustrationBox
                  title="Unsere Vision"
                  illustration="/assets/illustrations/illustration-lightbulb.svg"
                  illustrationColor="filter-schulgruendung"
                  className="mb-8"
                >
                  <div>
                    <h4 className="font-semibold mb-2">Elterninitiative</h4>
                    <p>
                      Diese Schule wird von Eltern für Eltern geplant,
                      organisiert und entwickelt. Wir glauben fest daran, dass
                      wir gemeinsam Großes erreichen können.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Reformpädagogik</h4>
                    <p>
                      Unser pädagogischer Ansatz legt den Schwerpunkt auf die
                      individuellen Bedürfnisse und Potenziale der Schülerinnen
                      und Schüler. Wir fördern selbstständiges Lernen,
                      Kreativität und soziale Verantwortung.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Gemeinschaft</h4>
                    <p>
                      In unserer Schule steht die Gemeinschaft im Mittelpunkt.
                      Eltern, Lehrende und Schülerinnen und Schüler arbeiten
                      Hand in Hand, um eine unterstützende und inspirierende
                      Lernumgebung zu schaffen.
                    </p>
                  </div>
                </IllustrationBox>

                <IllustrationBox
                  title="Unsere Aufgaben"
                  illustration="/assets/illustrations/illustration-check.svg"
                  illustrationColor="filter-schulgruendung"
                  className="mt-8"
                >
                  <div>
                    <h4 className="font-semibold mb-2">Konzepte entwickeln</h4>
                    <p>
                      Wir arbeiten an der Erstellung verschiedener pädagogischer
                      und organisatorischer Konzepte, die die Grundlage unserer
                      Schule bilden.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Infrastruktur planen</h4>
                    <p>
                      Die Planung und Gestaltung der schulischen Infrastruktur
                      ist ein wesentlicher Bestandteil unseres Projekts.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Personalplanung</h4>
                    <p>
                      Wir sind auf der Suche nach engagierten Lehrkräften und
                      Mitarbeitenden, die unsere Vision teilen und mit uns
                      gemeinsam die Schule aufbauen möchten.
                    </p>
                  </div>
                </IllustrationBox>

                <div className="mt-8 text-lg">
                  <p>
                    Gemeinsam glauben wir fest daran, dass wir dieses Wunder
                    vollbringen können. Mit Leidenschaft, Engagement und der
                    Unterstützung unserer Gemeinschaft werden wir eine Schule
                    schaffen, die unseren Kindern die bestmögliche Bildung
                    bietet.
                  </p>
                </div>
              </div>
            </Card>
          </section>

          <section id="updates" className="mb-16">
            <Card className="p-8">
              <h2 className="text-3xl font-bold mb-6 text-schulgruendung">
                Kommende Termine
              </h2>
              <EventCalendar />
            </Card>
          </section>

          <TeamSection
            members={gruendungswunderTeam}
            textColor="text-schulgruendung"
          />

          <SupporterSection
            supporters={gruendungswunderSupporters}
            textColor="text-schulgruendung"
          />
        </div>
      </WunderContent>

      <Footer />
    </WunderLayout>
  );
};

export default Schulgruendungswunder;
