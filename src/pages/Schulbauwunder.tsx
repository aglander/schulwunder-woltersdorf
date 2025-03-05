
import React from "react";
import { Card } from "@/components/ui/card";
import { WunderHeader } from "@/components/WunderHeader";
import Footer from "../components/Footer";
import SEO from "../components/SEO";
import { supporters } from "../data/supporters";
import { EventCalendar } from "../components/EventCalendar";
import WunderContent from "@/components/WunderContent";
import WunderLayout from "@/components/WunderLayout";
import { SupporterSection } from "@/components/SupporterSection";
import { IllustrationBox } from "@/components/IllustrationBox";
import { team } from "../data/team";
import { TeamSection } from "@/components/TeamSection";
import WunderSideNav from "@/components/WunderSideNav";

const Schulbauwunder = () => {
  const bauwunderSupporters = supporters.filter((supporter) =>
    supporter.tags.includes("schulbauwunder")
  );

  const bauwunderTeam = team.filter((member) =>
    member.tags.includes("schulbauwunder")
  );

  const navLinks = [
    { href: "#description", label: "Beschreibung" },
    { href: "#updates", label: "Aktuelles" },
    { href: "#team", label: "Team" },
    { href: "#supporters", label: "Unterstützer" },
  ];

  return (
    <WunderLayout>
      <SEO
        title="Schulbauwunder - Gemeinschaftlich Bildung gestalten"
        description="Erfahren Sie mehr über unsere Baueinsätze und wie wir gemeinsam unsere neue Schule erschaffen. Ein innovatives Bildungsprojekt in Woltersdorf."
      />
      <WunderHeader
        title="#schulbauwunder"
        imageSrc="/assets/schulbauwunder-hero.jpg"
        subTitle="Gemeinsam erschaffen wir einen neuen Ort des Lernens. Erfahren Sie mehr über unsere 
          Baueinsätze und wie wir mit vereinten Kräften unsere neue Schule bauen."
      />

      <WunderContent>
        <div className="lg:w-1/4">
          <div className="sticky top-20">
            <WunderSideNav navLinks={navLinks} textColorClass="text-schulbau" />
          </div>
        </div>

        <div className="lg:w-3/4">
          <section id="description" className="mb-16">
            <Card className="p-8">
              <h2 className="text-3xl font-bold mb-6 text-schulbau">
                Über das Schulbauwunder
              </h2>
              <div className="prose max-w-none">
                <p className="text-lg mb-6">
                  Mit vereinten Kräften erschaffen wir einen Ort, an dem Bildung
                  lebendig wird. Unser Schulbauwunder ist mehr als nur ein
                  Bauprojekt - es ist die Geschichte einer Gemeinschaft, die
                  zusammenkommt, um etwas Außergöhnliches zu schaffen.
                </p>
                <p className="mb-6">
                  In Woltersdorf entsteht Schritt für Schritt unsere neue
                  Schule. Ein Ort, der nicht nur Klassenräume bietet, sondern
                  ein lebendiger Raum für Entwicklung, Kreativität und
                  gemeinsames Lernen sein wird.
                </p>

                <IllustrationBox
                  title="Unsere Vision"
                  illustration="/assets/illustrations/illustration-lightbulb.svg"
                  illustrationColor="filter-schulbau"
                  className="mb-8"
                >
                  <ul className="list-none space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="font-semibold">Nachhaltige Bauweise</span> mit natürlichen Materialien
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-semibold">Flexible Lernräume</span> für moderne Pädagogik
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-semibold">Gemeinschaftsflächen</span> für Begegnung und Austausch
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-semibold">Naturnahe Außengestaltung</span> mit Lern- und Spielbereichen
                    </li>
                  </ul>
                </IllustrationBox>
              </div>
            </Card>
          </section>

          <section id="events" className="mb-16">
            <Card className="p-8">
              <EventCalendar />
            </Card>
          </section>

          <TeamSection 
            members={bauwunderTeam}
            textColor="text-schulbau"
          />

          <SupporterSection
            supporters={bauwunderSupporters}
            textColor="text-schulbau"
          />
        </div>
      </WunderContent>

      <Footer />
    </WunderLayout>
  );
};

export default Schulbauwunder;
