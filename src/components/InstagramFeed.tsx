
import React from "react";

const InstagramFeed = () => {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-center mb-12">Aktuelles aus Instagram</h2>
      <div className="flex justify-center">
        <iframe
          src="https://www.instagram.com/freie_schule_woltersdorf/embed"
          width="400"
          height="480"
          frameBorder="0"
          scrolling="no"
          allowTransparency={true}
        ></iframe>
      </div>
    </div>
  );
};

export default InstagramFeed;
