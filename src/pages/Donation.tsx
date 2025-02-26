
import React, { useRef } from "react";
import SimpleLayout from "@/components/SimpleLayout";
import SEO from "@/components/SEO";

const Donation = () => {
  const iframeRef = useRef<HTMLIFrameElement>(null);

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
            <iframe
              ref={iframeRef}
              title="Fundraisingbox Spendenformular"
              className="w-full min-h-[800px] border-0"
              src="/fundraisingbox/app/paymentJS?hash=mfet3z2o7m5igvxp"
              sandbox="allow-scripts allow-forms allow-popups"
            />
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
