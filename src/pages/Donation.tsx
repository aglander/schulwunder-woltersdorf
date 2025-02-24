
import React from "react";
import SimpleLayout from "@/components/SimpleLayout";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";

const Donation = () => {
  return (
    <SimpleLayout>
      <SEO 
        title="Spenden"
        description="Unterstützen Sie das Schulwunder Woltersdorf mit Ihrer Spende und helfen Sie uns, unsere Vision einer innovativen Bildung zu verwirklichen."
      />
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8 text-center">Spenden</h1>
        <div className="max-w-3xl mx-auto prose prose-lg">
          <p>
            Ihre Unterstützung hilft uns, das Schulwunder Woltersdorf Realität werden zu lassen.
            Mit Ihrer Spende tragen Sie dazu bei, dass wir unsere Vision einer innovativen und
            zukunftsorientierten Bildung verwirklichen können.
          </p>

          <div className="my-8 p-6 bg-white rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">Spendenkonto</h2>
            <div className="space-y-2">
              <p><strong>Kontoinhaber:</strong> Freie Schule Woltersdorf</p>
              <p><strong>IBAN:</strong> DE12 3456 7890 1234 5678 90</p>
              <p><strong>BIC:</strong> XXXXXXXXXXX</p>
              <p><strong>Bank:</strong> Sample Bank</p>
              <p><strong>Verwendungszweck:</strong> Schulwunder Woltersdorf</p>
            </div>
          </div>

          <p>
            Alternativ können Sie auch über unseren Partner betterplace.org spenden:
          </p>

          <div className="my-8 text-center">
            <Button 
              variant="primary"
              size="lg"
              className="inline-flex items-center gap-2"
              onClick={() => window.open('https://betterplace.org/de/projects/126303', '_blank')}
            >
              Jetzt über betterplace.org spenden
              <ArrowUpRight className="w-5 h-5" />
            </Button>
          </div>

          <h2 className="text-2xl font-semibold mb-4">Spendenquittung</h2>
          <p>
            Für Ihre Spende erhalten Sie selbstverständlich eine Spendenquittung.
            Bitte geben Sie dafür bei der Überweisung Ihre vollständige Adresse im
            Verwendungszweck an oder kontaktieren Sie uns per E-Mail.
          </p>
        </div>
      </div>
    </SimpleLayout>
  );
};

export default Donation;
