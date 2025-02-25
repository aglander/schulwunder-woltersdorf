
import React, { useEffect } from "react";
import SimpleLayout from "@/components/SimpleLayout";
import SEO from "@/components/SEO";

const Donation = () => {
  useEffect(() => {
    // Create and append the script
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://secure.fundraisingbox.com/app/paymentJS?hash=mfet3z2o7m5igvxp';
    document.body.appendChild(script);

    // Cleanup on unmount
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <SimpleLayout>
      <SEO 
        title="Spenden"
        description="Unterstützen Sie das Schulwunder Woltersdorf mit Ihrer Spende und helfen Sie uns, unsere Vision einer innovativen Bildung zu verwirklichen."
      />
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8 text-center">Spenden</h1>
        <div className="max-w-3xl mx-auto prose prose-lg">
          <p className="mb-8">
            Ihre Unterstützung hilft uns, das Schulwunder Woltersdorf Realität werden zu lassen.
            Mit Ihrer Spende tragen Sie dazu bei, dass wir unsere Vision einer innovativen und
            zukunftsorientierten Bildung verwirklichen können.
          </p>

          <div className="my-8">
            <noscript>Bitte Javascript aktivieren</noscript>
            <div id="fundraisingbox-form" className="mb-4"></div>
            <a 
              target="_blank" 
              href="https://www.fundraisingbox.com/?utm_source=donation_form"
              rel="noopener noreferrer"
              className="block text-center"
            >
              <img 
                style={{ border: 0 }}
                src="https://secure.fundraisingbox.com/images/FundraisingBox-Logo-Widget.png" 
                alt="FundraisingBox Logo" 
                className="mx-auto"
              />
            </a>
          </div>
        </div>
      </div>
    </SimpleLayout>
  );
};

export default Donation;
