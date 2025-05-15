
import React from "react";
import SimpleLayout from "../components/SimpleLayout";
import SEO from "../components/SEO";

const Newsletter = () => {
  return (
    <>
      <SEO 
        title="Newsletter" 
        description="Abonnieren Sie unseren Newsletter und bleiben Sie über die neuesten Entwicklungen bei Schulwunder Woltersdorf informiert."
      />
      <SimpleLayout>
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">Newsletter Anmeldung</h1>
          <p className="text-lg mb-8 text-center max-w-2xl mx-auto">
            Dieser Newsletter bietet Einblicke in den Schulalltag und die verschiedenen Projekte unserer Schule. Ob Schulneubau, Gründung einer Oberschule oder die Entwicklung der ungenutzten Fläche an der Vogelsdorfer Straße – wir halten Sie auf dem Laufenden. Außerdem informieren wir regelmäßig über Veranstaltungen. Sie erhalten diese Mails 2-3 Mal im Monat.
          </p>
          
          <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-md">
            <iframe 
              width="540" 
              height="500" 
              src="https://sibforms.com/serve/MUIFAMGcywXxD36ijPHSgIT8eWhSbQjMUTVFD24x4bKfGWA7xzk2MzakwmJZp_YzhmlzU1wGF0Sx80V2AZK8cOowpDUkCNwTWBfoiByI1hoHJzC01MZjuaLxq8WKJC9Z84RFkaGsOMRhwFlrmN2Rl2Aj_87QxxYH0507G1PHzfqu0kFR9QYUYmY7X9ulWuG24mhKy_XYhcb0Bj2_" 
              frameBorder="0" 
              scrolling="auto" 
              allowFullScreen 
              style={{ display: "block", margin: "0 auto", maxWidth: "100%" }}
              title="Newsletter Anmeldung"
            />
          </div>
        </div>
      </SimpleLayout>
    </>
  );
};

export default Newsletter;
