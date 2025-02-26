
import React, { useEffect } from "react";
import SimpleLayout from "@/components/SimpleLayout";
import SEO from "@/components/SEO";

const Donation = () => {
  useEffect(() => {
    // Create and append the script
    const script = document.createElement('script');
    script.type = 'text/javascript';
    // Use the proxied URL instead of direct Fundraisingbox URL
    script.src = '/fundraisingbox/app/paymentJS?hash=mfet3z2o7m5igvxp';
    script.async = true;
    script.crossOrigin = "anonymous";
    
    script.onerror = (error) => {
      console.error('Error loading FundraisingBox script:', error);
    };

    script.onload = () => {
      console.log('FundraisingBox script loaded successfully');
    };

    const container = document.getElementById('fundraisingbox-form');
    if (!container) {
      console.error('FundraisingBox container not found');
      return;
    }

    document.body.appendChild(script);

    return () => {
      const existingScript = document.querySelector(`script[src="${script.src}"]`);
      if (existingScript) {
        document.body.removeChild(existingScript);
      }
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
