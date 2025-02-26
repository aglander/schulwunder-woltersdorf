
import React, { useEffect } from "react";
import SimpleLayout from "@/components/SimpleLayout";
import SEO from "@/components/SEO";

const Donation = () => {
  useEffect(() => {
    const loadFundraisingBox = () => {
      // Create and append the script
      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.src = '/fundraisingbox/app/paymentJS?hash=mfet3z2o7m5igvxp';
      script.async = false; // Changed to synchronous loading
      script.defer = true; // Add defer attribute
      script.crossOrigin = "anonymous";
      
      script.onerror = (error) => {
        console.error('Error loading FundraisingBox script:', error);
      };

      script.onload = () => {
        console.log('FundraisingBox script loaded successfully');
      };

      // Create a new document write to ensure the form is properly initialized
      document.write('<div id="fundraisingbox-form"></div>');
      document.body.appendChild(script);
    };

    // Wait for DOMContentLoaded event if document is not already loaded
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', loadFundraisingBox);
    } else {
      loadFundraisingBox();
    }

    return () => {
      document.removeEventListener('DOMContentLoaded', loadFundraisingBox);
      const existingScript = document.querySelector(`script[src="/fundraisingbox/app/paymentJS?hash=mfet3z2o7m5igvxp"]`);
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
            <a 
              target="_blank" 
              href="https://www.fundraisingbox.com/?utm_source=donation_form"
              rel="noopener noreferrer"
              className="block text-center mt-4"
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
