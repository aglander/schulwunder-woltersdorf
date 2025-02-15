
import React from "react";

const InstagramFeed = () => {
  React.useEffect(() => {
    // Elfsight Widget Script
    const script = document.createElement("script");
    script.src = "https://apps.elfsight.com/p/platform.js";
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup beim Unmounting
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-center mb-12">Aktuelles aus Instagram</h2>
      <div className="elfsight-app-9eba23a0-d0d5-4014-9d3b-87fc7e7a0cd5"></div>
    </div>
  );
};

export default InstagramFeed;
