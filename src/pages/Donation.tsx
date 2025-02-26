
import React from "react";
import SimpleLayout from "@/components/SimpleLayout";
import SEO from "@/components/SEO";

const Donation = () => {
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
            <iframe 
              src="/donation-form.html"
              className="w-full min-h-[800px] border-0"
              title="Spendenformular"
            />
          </div>
        </div>
      </div>
    </SimpleLayout>
  );
};

export default Donation;
