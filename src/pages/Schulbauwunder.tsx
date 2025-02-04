import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Schulbauwunder = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-16">
        <Link to="/" className="text-primary hover:underline mb-8 inline-block">
          ← Zurück zur Startseite
        </Link>
        
        <h1 className="text-4xl font-bold text-primary mb-8">Schulbauwunder</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Hauptinhalt */}
          <div className="lg:col-span-2">
            <Tabs defaultValue="description" className="w-full">
              <TabsList className="w-full justify-start">
                <TabsTrigger value="description">Beschreibung</TabsTrigger>
                <TabsTrigger value="updates">Aktuelles</TabsTrigger>
                <TabsTrigger value="team">Team</TabsTrigger>
                <TabsTrigger value="supporters">Unterstützer</TabsTrigger>
              </TabsList>

              <TabsContent value="description" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Über das Schulbauwunder</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-lg mb-6">
                      Hier erfahren Sie mehr über unsere Baueinsätze und wie wir gemeinsam mit Sponsoren 
                      und Eltern unsere neue Schule am neuen Standort erschaffen.
                    </p>
                    <p className="mb-4">
                      Mit vereinten Kräften und dem Engagement unserer Gemeinschaft entsteht 
                      Schritt für Schritt ein Ort des Lernens und der Begegnung.
                    </p>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="updates" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Aktuelle Entwicklungen</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div className="border-b pb-6">
                        <h3 className="text-xl font-semibold mb-2">Neueste Fortschritte</h3>
                        <p>Aktuelle Bilder und Videos von unseren Baufortschritten werden hier erscheinen.</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="team" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Unser Team</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="text-center">
                        <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4" />
                        <h3 className="font-semibold">Team-Mitglied</h3>
                        <p className="text-sm text-gray-600">Position</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="supporters" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Unsere Unterstützer</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <p className="mb-4">
                        Wir danken allen Sponsoren und Unterstützern, die dieses Projekt 
                        möglich machen.
                      </p>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div className="aspect-square bg-gray-100 rounded-lg flex items-center justify-center">
                          Logo
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          {/* Seitenleiste */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle>Projektstatus</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">Standort</h3>
                    <p>Woltersdorf</p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Bauphase</h3>
                    <p>In Entwicklung</p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Nächste Schritte</h3>
                    <ul className="list-disc list-inside">
                      <li>Planung der nächsten Bauphase</li>
                      <li>Koordination der Helfer</li>
                      <li>Materialbeschaffung</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Schulbauwunder;