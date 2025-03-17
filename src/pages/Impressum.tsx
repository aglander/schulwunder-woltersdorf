
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
        <h1 className="text-4xl font-bold mb-8 text-center">Impressum</h1>
        <div className="max-w-3xl mx-auto prose prose-lg">
          <h2 className="mt-8 mb-2 text-xl">Angaben gemäß § 5 TMG</h2>
          <p>
            Freie Schule Woltersdorf e.V.<br />
            Vogelsdorfer Straße 106<br />
            15569 Woltersdorf
          </p>

          <h2 className="mt-8 mb-2 text-xl">Vertreten durch</h2>
          <p>
            Vorstandsvorsitzende: Susann Tröger<br />
            Geschäftsführer: Johannes Wilk
          </p>

          <h2 className="mt-8 mb-2 text-xl">Kontakt</h2>
          <p>
            Telefon: <a href="tel:+493362700973">03362 700973</a><br />
            E-Mail: <a href="mailto:info@freie-schule-woltersdorf.de">info@freie-schule-woltersdorf.de</a>
          </p>

          <h2 className="mt-8 mb-2 text-xl">Registereintrag</h2>
          <p>
            Eintragung im Vereinsregister Frankfurt (Oder)<br />
            Registergericht: Amtsgericht Frankfurt (Oder)<br />
            Registernummer: VR 5179 FF
          </p>

          <h2 className="mt-8 mb-2 text-xl">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
          <p>
            Freie Schule Woltersdorf e.V.<br />
            Vogelsdorfer Straße 106<br />
            15569 Woltersdorf
          </p>
        </div>
      </div>
    </SimpleLayout>
  );
};

export default Impressum;
