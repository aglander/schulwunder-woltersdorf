
import React from "react";

const WunderContent: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <div className="container mx-auto px-4 py-8 flex-grow">
      <div className="flex flex-col lg:flex-row gap-8">{children}</div>
    </div>
  );
};

export default WunderContent;

