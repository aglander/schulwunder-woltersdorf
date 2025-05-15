
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
            Bleiben Sie informiert über die neuesten Entwicklungen, Veranstaltungen und Fortschritte bei Schulwunder Woltersdorf. Melden Sie sich für unseren Newsletter an.
          </p>
          
          <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-md">
            <iframe 
              width="100%" 
              height="305" 
              src="https://sibforms.com/serve/MUIFAIroVhUe1WFQQgqj6tdU--vy6iq2uiAfohHVWjbg7bvdn3S_9ThthUKqIEGlPs5JaGw8N7zbd1IL9HvUNEQJjH_IyC3u43vrUUbL0gLyXC45Ce8oLo56FDOZmf2fLpDhS4TTtFL5bhL2yzuN5rccqqFrLGlppsM7XkCzBtIGgMsveNwVHYHiGYsAOIUtevre6cgzKPwRju5E" 
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
