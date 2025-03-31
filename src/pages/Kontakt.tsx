import React from "react";
import SimpleLayout from "@/components/SimpleLayout";
import SEO from "@/components/SEO";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import ResponsiveImage from "@/components/ResponsiveImage";

const Kontakt = () => {
  return (
    <SimpleLayout>
      <SEO
        title="Kontakt"
        description="Kontaktieren Sie die Freie Schule Woltersdorf - Wir freuen uns auf Ihre Nachricht."
      />
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8 text-center">Kontakt</h1>
        <div className="max-w-3xl mx-auto">
          <p className="text-lg mb-8 text-center">
            Haben Sie Fragen oder Anregungen? Wir freuen uns auf Ihre Nachricht.
          </p>
          <p>
            <ResponsiveImage
              imageUrl="assets/kontakt.jpg"
              alt="Kontakt"
              className="w-full h-auto p-2 mb-8"
            />
          </p>

          <div className="bg-white p-8 rounded-lg shadow-md">
            <form
              action="https://form.taxi/s/ok36qg1u"
              method="POST"
              accept-charset="utf-8"
              className="space-y-6"
            >
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input type="text" name="Name" id="name" required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="mail">E-Mail-Adresse</Label>
                <Input type="email" name="E-Mail" id="mail" required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="msg">Ihre Nachricht</Label>
                <Textarea rows={5} name="Nachricht" id="msg" required />
              </div>

              <div className="flex items-start space-x-2">
                <Checkbox
                  id="datenschutz"
                  name="Datenverarbeitung bestätigt"
                  value="Ja"
                  required
                />
                <Label
                  htmlFor="datenschutz"
                  className="text-sm font-normal leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Ich bin mit der Verarbeitung meiner Eingaben zum Zwecke der
                  Anfragebearbeitung durch{" "}
                  <a
                    href="https://form.taxi/de"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    Form.taxi
                  </a>{" "}
                  einverstanden.
                </Label>
              </div>

              {/* Honeypot field to prevent spam */}
              <input
                type="text"
                name="_gotcha"
                value=""
                style={{ display: "none" }}
              />

              <Button type="submit" className="w-full">
                Absenden
              </Button>
            </form>
          </div>
        </div>
      </div>
    </SimpleLayout>
  );
};

export default Kontakt;
