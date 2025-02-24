
import React from "react";
import SimpleLayout from "@/components/SimpleLayout";
import SEO from "@/components/SEO";

const Impressum = () => {
  return (
    <SimpleLayout>
      <SEO 
        title="Impressum"
        description="Impressum der Freien Schule Woltersdorf - Rechtliche Informationen und Kontaktdaten."
      />
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8">Impressum</h1>
        <div className="max-w-3xl mx-auto prose prose-lg">
          <h2>Angaben gemäß § 5 TMG</h2>
          <p>
            Freie Schule Woltersdorf e.V.<br />
            Musterstraße 1<br />
            15569 Woltersdorf
          </p>

          <h2>Vertreten durch</h2>
          <p>
            Vorstandsvorsitzende/r [Name]<br />
            Stellvertretende/r Vorsitzende/r [Name]
          </p>

          <h2>Kontakt</h2>
          <p>
            Telefon: [Telefonnummer]<br />
            E-Mail: info@freie-schule-woltersdorf.de
          </p>

          <h2>Registereintrag</h2>
          <p>
            Eintragung im Vereinsregister<br />
            Registergericht: Amtsgericht [Stadt]<br />
            Registernummer: VR [Nummer]
          </p>

          <h2>Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
          <p>
            [Name]<br />
            [Adresse]
          </p>
        </div>
      </div>
    </SimpleLayout>
  );
};

export default Impressum;
