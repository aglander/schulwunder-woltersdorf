
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
import { getInstagramToken } from "@/utils/instagramToken";
import { useQuery } from "@tanstack/react-query";
import { useToast } from "@/hooks/use-toast";

interface InstagramPost {
  id: string;
  caption: string;
  media_type: string;
  media_url: string;
  thumbnail_url?: string;
  permalink: string;
}

const fetchInstagramPosts = async () => {
  const token = await getInstagramToken();
  if (!token) {
    throw new Error("Instagram token not found");
  }

  const response = await fetch(
    `https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,thumbnail_url,permalink&limit=10&access_token=${token}`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch Instagram posts");
  }

  const data = await response.json();
  return data.data as InstagramPost[];
};

const Schulgruendungswunder = () => {
  const { toast } = useToast();
  const gruendungswunderSupporters = supporters.filter((supporter) =>
    supporter.tags.includes("schulgruendungswunder")
  );

  const gruendungswunderTeam = team.filter((member) =>
    member.tags.includes("schulgruendungswunder")
  );

  const { data: instagramPosts, isLoading, error } = useQuery({
    queryKey: ["instagram-posts"],
    queryFn: fetchInstagramPosts,
    meta: {
      onError: (error: Error) => {
        console.error("Error fetching Instagram posts:", error);
        toast({
          title: "Fehler",
          description: "Die Instagram Posts konnten nicht geladen werden.",
          variant: "destructive",
        });
      },
    },
  });

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
                    href="#instagram"
                    className="text-schulgruendung hover:underline block py-2"
                  >
                    Instagram
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

          <section id="instagram" className="mb-16">
            <Card className="p-8">
              <h2 className="text-3xl font-bold mb-6 text-schulgruendung">
                Aktuelles
              </h2>
              
              {isLoading && (
                <div className="flex justify-center items-center h-48">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-schulgruendung"></div>
                </div>
              )}
              
              {error && (
                <div className="text-center text-red-500 p-4 border border-red-300 rounded-md">
                  Fehler beim Laden der Instagram-Beiträge. Bitte versuchen Sie es später erneut.
                </div>
              )}
              
              {instagramPosts && instagramPosts.length > 0 && (
                <div className="relative">
                  <div className="flex overflow-x-auto gap-4 pb-4 snap-x snap-mandatory">
                    {instagramPosts.map((post) => (
                      <a
                        key={post.id}
                        href={post.permalink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="snap-start shrink-0 w-[280px] md:w-[320px] group"
                      >
                        <Card className="overflow-hidden h-full flex flex-col">
                          <div className="relative overflow-hidden aspect-square">
                            <img
                              src={post.media_type === 'VIDEO' ? post.thumbnail_url : post.media_url}
                              alt={post.caption?.substring(0, 50) || 'Instagram post'}
                              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                            />
                            {post.media_type === 'VIDEO' && (
                              <div className="absolute top-2 right-2 bg-black/70 text-white px-2 py-1 rounded text-xs">
                                Video
                              </div>
                            )}
                            {post.media_type === 'CAROUSEL_ALBUM' && (
                              <div className="absolute top-2 right-2 bg-black/70 text-white px-2 py-1 rounded text-xs">
                                Galerie
                              </div>
                            )}
                          </div>
                          <div className="p-4">
                            {post.caption && (
                              <p className="text-sm line-clamp-3">{post.caption}</p>
                            )}
                          </div>
                        </Card>
                      </a>
                    ))}
                  </div>
                </div>
              )}
              
              {instagramPosts && instagramPosts.length === 0 && (
                <div className="text-center text-gray-500 p-4 border border-gray-300 rounded-md">
                  Keine Instagram-Beiträge gefunden.
                </div>
              )}
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
