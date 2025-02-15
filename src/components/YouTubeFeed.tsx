
import React from "react";

const YouTubeFeed = () => {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-center mb-12">Unsere YouTube Videos</h2>
      <div className="flex justify-center">
        <iframe
          width="800"
          height="450"
          src="https://www.youtube.com/embed/?listType=user_uploads&list=freieschulewoltersdorf"
          title="YouTube-Videos der Freien Schule Woltersdorf"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="max-w-full"
        ></iframe>
      </div>
    </div>
  );
};

export default YouTubeFeed;
