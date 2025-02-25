
import React from "react";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

interface SimpleLayoutProps {
  children: React.ReactNode;
}

const SimpleLayout: React.FC<SimpleLayoutProps> = ({ children }) => {
  const isMobile = useIsMobile();

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <div className="fixed top-0 left-0 right-0 z-50">
        <div className="container mx-auto">
          <div className="w-full max-w-[1700px] mx-auto relative shadow-[35px_0_35px_-25px_rgba(0,0,0,0.5),-35px_0_35px_-25px_rgba(0,0,0,0.5)]">
            {!isMobile && (
              <>
                <div className="absolute top-0 left-[30px] z-[60] w-[100px] bg-white/95 shadow-lg" style={{
                  clipPath: 'polygon(0% 0%, 100% 0%, 100% 89%, 0% 95%)'
                }}>
                  <a href="https://www.freie-schule-woltersdorf.de" target="_blank" rel="noopener noreferrer">
                    <img src="/assets/FSW_Logo.png" alt="FSW Logo" className="w-full h-auto p-2" />
                  </a>
                </div>
                <div
                  className="backdrop-blur-sm bg-white border-b border-black/20"
                >
                  <div className="flex items-center justify-between h-16">
                    <div className="ml-[150px] flex items-center gap-2">
                      <Link to="/" className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors">
                        <ArrowLeft className="w-5 h-5" />
                        <span className="font-semibold">
                          Schulwunder Woltersdorf
                        </span>
                      </Link>
                    </div>
                    <div className="mr-[30px]">
                      <Link to="/spenden">
                        <Button 
                          variant="secondary" 
                          className="bg-white text-black hover:bg-white/90"
                        >
                          Jetzt spenden
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      <main className="flex-1 pt-16">
        <div className="container mx-auto">
          <div className="w-full max-w-[1700px] mx-auto relative shadow-[35px_0_35px_-25px_rgba(0,0,0,0.5),-35px_0_35px_-25px_rgba(0,0,0,0.5)] bg-white">
            {children}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default SimpleLayout;
