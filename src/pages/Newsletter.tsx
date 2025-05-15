
import React from "react";
import SimpleLayout from "../components/SimpleLayout";
import SEO from "../components/SEO";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Newsletter = () => {
  return (
    <>
      <SEO 
        title="Newsletter" 
        description="Abonnieren Sie unseren Newsletter und bleiben Sie über die neuesten Entwicklungen bei Schulwunder Woltersdorf informiert."
      />
      <SimpleLayout>
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">Newsletter</h1>
          <p className="text-lg mb-8 text-center max-w-2xl mx-auto">
            Dieser Newsletter bietet Einblicke in den Schulalltag und die verschiedenen Projekte unserer Schule. Ob Schulneubau, Gründung einer Oberschule oder die Entwicklung der ungenutzten Fläche an der Vogelsdorfer Straße – wir halten Sie auf dem Laufenden. Außerdem informieren wir regelmäßig über Veranstaltungen. Sie erhalten diese Mails 2-3 Mal im Monat.
          </p>
          
          <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-md">
            <Tabs defaultValue="anmeldung" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-4">
                <TabsTrigger value="anmeldung">Anmeldung</TabsTrigger>
                <TabsTrigger value="abmeldung">Abmeldung</TabsTrigger>
              </TabsList>
              
              <TabsContent value="anmeldung" className="mt-4">
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
              </TabsContent>
              
              <TabsContent value="abmeldung" className="mt-4">
                <iframe 
                  width="540" 
                  height="500" 
                  src="https://348013a9.sibforms.com/serve/MUIFAL4tKiS8BJ7e3rV3mwXvBk4FFM2zAkZglIXloi9jLdZZybVwudE7rHz115ppRTBMf_wIsNktzonlojqUoqiD7CzeQ5NkEzcTY4zQ5W6TonwvgP8pmvlFaNd7HB4MWMH3vRET1SVnqBckEArUyPW2CqiOjnelgVaWJmHez8mVvF1-oeIXo8nlgDCrQ6-YISkhH-nOKdftkBKY" 
                  frameBorder="0" 
                  scrolling="auto" 
                  allowFullScreen 
                  style={{ display: "block", margin: "0 auto", maxWidth: "100%" }}
                  title="Newsletter Abmeldung"
                />
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </SimpleLayout>
    </>
  );
};

export default Newsletter;
