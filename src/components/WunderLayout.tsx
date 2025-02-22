
import React from "react";
import { WunderSidebar } from "./WunderSidebar";
import { WunderHeader } from "./WunderHeader";
import Footer from "./Footer";
import SEO from "./SEO";

interface WunderLayoutProps {
  title: string;
  description: string;
  heroImage: string;
  heroText: string;
  navigation: Array<{ href: string; label: string }>;
  projectStatus: {
    location: string;
    phase: string;
    nextSteps: string[];
  };
  children: React.ReactNode;
}

export const WunderLayout = ({
  title,
  description,
  heroImage,
  heroText,
  navigation,
  projectStatus,
  children
}: WunderLayoutProps) => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-['Barlow_Semi_Condensed']">
      <SEO 
        title={title}
        description={description}
      />
      
      <WunderHeader 
        title={title}
        imageSrc={heroImage}
      >
        <p className="text-xl max-w-2xl">
          {heroText}
        </p>
      </WunderHeader>

      <div className="container mx-auto px-4 py-8 flex-grow">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-1/4">
            <WunderSidebar 
              navigation={navigation} 
              status={projectStatus} 
            />
          </div>
          <div className="lg:w-3/4">
            {children}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};
