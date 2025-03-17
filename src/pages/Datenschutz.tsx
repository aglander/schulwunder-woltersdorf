
import React from "react";
import SimpleLayout from "@/components/SimpleLayout";
import SEO from "@/components/SEO";

const Datenschutz = () => {
  return (
    <SimpleLayout>
      <SEO 
        title="Datenschutz"
        description="Datenschutzerklärung der Freien Schule Woltersdorf - Informationen zum Umgang mit Ihren Daten."
      />
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8 text-center">Datenschutzerklärung</h1>
        <div className="max-w-3xl mx-auto prose prose-lg">
          <h2 className="text-2xl font-bold mt-8 mb-4">1. Verantwortliche Stelle</h2>
          <p>
            Johannes Wilk<br />
            ATW Management Solutions GmbH<br />
            Schleusenstr. 50<br />
            15569 Woltersdorf<br />
            Telefon: 0176 23648894<br />
            E-Mail: j.wilk@atw-management.de
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">2. Hosting und Content Delivery Network (CDN)</h2>
          <p>
            Unsere Webseite wird bei <strong>Netlify</strong> gehostet. Dies bedeutet, dass alle Daten, 
            die über die Webseite verarbeitet werden, auch über die Server von Netlify laufen. Es ist möglich, 
            dass ein Content Delivery Network (CDN) genutzt wird, um die Ladezeiten zu optimieren. 
            Weitere Informationen zur Datenverarbeitung durch Netlify finden Sie unter:<br />
            <a href="https://www.netlify.com/privacy/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
              https://www.netlify.com/privacy/
            </a>
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">3. Verwendung von Piwik PRO (Web-Analyse)</h2>
          <p>
            Wir setzen <strong>Piwik PRO</strong> als Web-Analyse-Tool ein. Dabei werden unter anderem folgende Daten erfasst:
          </p>
          <ul className="list-disc pl-5 my-4">
            <li>IP-Adresse (anonymisiert)</li>
            <li>Besuchte Seiten</li>
            <li>Verweildauer auf den Seiten</li>
            <li>Klickverhalten</li>
          </ul>
          <p>
            Rechtsgrundlage ist <strong>Art. 6 Abs. 1 lit. f DSGVO</strong> (berechtigtes Interesse an der Analyse 
            zur Verbesserung unserer Webseite). Piwik PRO setzt Cookies ein, um das Nutzerverhalten zu analysieren. 
            Die Einwilligung zur Speicherung von Cookies erfolgt über das Piwik-eigene <strong>Cookie-Consent-Banner</strong>. 
            Weitere Informationen finden Sie hier:<br />
            <a href="https://piwik.pro/privacy-policy/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
              https://piwik.pro/privacy-policy/
            </a>
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">4. Verwendung von Form.Taxi (Kontaktformular)</h2>
          <p>
            Unser Kontaktformular nutzt den Service <strong>Form.Taxi</strong>. Beim Absenden einer Nachricht werden 
            die eingegebenen Daten an Form.Taxi übertragen, dort verarbeitet und an uns per E-Mail weitergeleitet.
            Zusätzlich werden von Form.Taxi automatisch folgende Daten erhoben:
          </p>
          <ul className="list-disc pl-5 my-4">
            <li>IP-Adresse</li>
            <li>Browsertyp</li>
            <li>Domain der Webseite</li>
            <li>Datum und Uhrzeit des Zugriffs</li>
          </ul>
          <p>
            Rechtsgrundlage ist <strong>Art. 6 Abs. 1 lit. f DSGVO</strong> (berechtigtes Interesse). 
            Die Verarbeitung erfolgt innerhalb der EU. Weitere Informationen:<br />
            <a href="https://form.taxi/de/privacy" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
              https://form.taxi/de/privacy
            </a>
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">5. Nutzung von FundraisingBox (Spendenformular) und Stripe (Zahlungsabwicklung)</h2>
          <p>
            Wir verwenden den Service <strong>FundraisingBox</strong>, um Spendengelder zu sammeln. 
            Bei Nutzung des Spendenformulars werden Cookies gesetzt und Local Storage verwendet, 
            um die Funktionalität sicherzustellen.
          </p>
          <p className="font-medium mt-4">Cookies von FundraisingBox:</p>
          <ul className="list-disc pl-5 my-4">
            <li><strong>AWSALBCORS / AWSALB</strong>: Steuerung des Loadbalancers zur Lastverteilung (keine personenbezogenen Daten).</li>
            <li><strong>box</strong>: Speichert die ID der User-Session, enthält jedoch keine personenbezogenen Daten.</li>
          </ul>
          <p>
            Abhängig von der gewählten Zahlungsart können zusätzliche Cookies durch Drittanbieter gesetzt werden.
          </p>
          <p className="font-medium mt-4">Zahlungsabwicklung über Stripe:</p>
          <p>
            Für die Abwicklung von Kreditkartenzahlungen nutzen wir den Zahlungsdienstleister <strong>Stripe</strong>. 
            Sobald Sie eine Zahlung mit Kreditkarte tätigen, erfolgt eine Weitergabe Ihrer Zahlungsdaten an Stripe. Dazu gehören:
          </p>
          <ul className="list-disc pl-5 my-4">
            <li>Name</li>
            <li>Kreditkartendaten (verschlüsselt)</li>
            <li>Rechnungsadresse</li>
            <li>IP-Adresse</li>
          </ul>
          <p>
            Stripe setzt eigene Cookies, um eine sichere Zahlungsabwicklung zu gewährleisten. 
            Die Verarbeitung Ihrer Daten erfolgt auf Grundlage von <strong>Art. 6 Abs. 1 lit. b DSGVO</strong> (Vertragserfüllung) 
            sowie unseres berechtigten Interesses gemäß <strong>Art. 6 Abs. 1 lit. f DSGVO</strong> (sichere Zahlungsabwicklung).
            Weitere Informationen zur Datenverarbeitung durch Stripe finden Sie in der Datenschutzerklärung von Stripe:<br />
            <a href="https://stripe.com/de/privacy" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
              https://stripe.com/de/privacy
            </a>
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">6. Nutzung der Instagram API</h2>
          <p>
            Wir verwenden die <strong>Instagram API</strong>, um Instagram-Beiträge auf unserer Webseite einzubinden. 
            Beim Laden der Instagram-Posts werden Daten an die Server von Instagram (Meta Platforms, Inc.) übertragen. 
            Hierbei können folgende Daten erfasst werden:
          </p>
          <ul className="list-disc pl-5 my-4">
            <li>IP-Adresse</li>
            <li>Browser-Informationen</li>
            <li>Interaktionen mit den eingebetteten Inhalten</li>
          </ul>
          <p>
            Rechtsgrundlage ist <strong>Art. 6 Abs. 1 lit. f DSGVO</strong> (berechtigtes Interesse an der ansprechenden 
            Darstellung unserer Social-Media-Aktivitäten). Weitere Informationen finden Sie hier:<br />
            <a href="https://privacycenter.instagram.com/policy" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
              https://privacycenter.instagram.com/policy
            </a>
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">7. Google Fonts</h2>
          <p>
            Wir verwenden <strong>Google Fonts</strong>, die im Rahmen des Build-Prozesses heruntergeladen und lokal 
            auf unserer Webseite eingebunden werden. Es erfolgt daher keine automatische Verbindung zu den Google-Servern 
            beim Laden der Webseite. Weitere Informationen zu Google Fonts:<br />
            <a href="https://developers.google.com/fonts/faq" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
              https://developers.google.com/fonts/faq
            </a>
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">8. Ihre Rechte als betroffene Person</h2>
          <p>
            Sie haben nach der DSGVO folgende Rechte in Bezug auf Ihre Daten:
          </p>
          <ul className="list-disc pl-5 my-4">
            <li><strong>Auskunftsrecht (Art. 15 DSGVO)</strong>: Sie können Auskunft darüber verlangen, welche personenbezogenen Daten wir über Sie speichern.</li>
            <li><strong>Recht auf Berichtigung (Art. 16 DSGVO)</strong>: Falls Ihre Daten unrichtig oder unvollständig sind, können Sie eine Korrektur verlangen.</li>
            <li><strong>Recht auf Löschung (Art. 17 DSGVO)</strong>: Sie können unter bestimmten Voraussetzungen die Löschung Ihrer Daten verlangen.</li>
            <li><strong>Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)</strong>: In bestimmten Fällen haben Sie das Recht, die Verarbeitung Ihrer Daten einzuschränken.</li>
            <li><strong>Recht auf Datenübertragbarkeit (Art. 20 DSGVO)</strong>: Sie haben das Recht, Ihre Daten in einem strukturierten, gängigen Format zu erhalten.</li>
            <li><strong>Widerspruchsrecht (Art. 21 DSGVO)</strong>: Sie können der Verarbeitung Ihrer Daten widersprechen, wenn diese auf einem berechtigten Interesse beruht.</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4">9. Kontakt zur Datenschutzbehörde</h2>
          <p>
            Sollten Sie Bedenken oder Beschwerden zur Verarbeitung Ihrer Daten haben, können Sie sich an die zuständige Datenschutzbehörde wenden:<br />
            <a href="https://www.lda.brandenburg.de" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
              https://www.lda.brandenburg.de
            </a>
          </p>
        </div>
      </div>
    </SimpleLayout>
  );
};

export default Datenschutz;
