
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
        <div
          className="backdrop-blur-sm border-b border-black/20 w-full"
          style={{
            background: "linear-gradient(180deg, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.35) 100%)"
          }}
        >
          <div className="container mx-auto px-4">
            <div className="flex items-center h-16">
              <Link to="/" className="flex items-center gap-2 text-white hover:text-white/90 transition-colors">
                <ArrowLeft className="w-5 h-5" />
                <span className="font-semibold">
                  {isMobile ? "Zurück" : "Schulwunder Woltersdorf"}
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <main className="flex-1 pt-16 pb-20">
        <div className="container mx-auto">
          <div className="w-full max-w-[1700px] mx-auto relative">
            {children}
          </div>
        </div>
      </main>

      <div className="fixed bottom-0 left-0 right-0 z-50">
        <div
          className="backdrop-blur-sm border-t border-black/20 w-full"
          style={{
            background: "linear-gradient(0deg, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.35) 100%)"
          }}
        >
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between h-16">
              <div className="bg-white/90 rounded-md p-2">
                <a 
                  href="https://www.freie-schule-woltersdorf.de" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-[80px] block"
                >
                  <img 
                    src="/assets/FSW_Logo.png" 
                    alt="FSW Logo" 
                    className="w-full h-auto"
                  />
                </a>
              </div>
              <Link to="/spenden">
                <Button 
                  variant="secondary"
                  size={isMobile ? "sm" : "default"}
                  className="bg-white text-black hover:bg-white/90"
                >
                  Jetzt spenden
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default SimpleLayout;
