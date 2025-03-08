import React from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import { ArrowLeft, Youtube, Instagram } from "lucide-react";
import BottomBar from "./BottomBar";
import { Button } from "./ui/button";

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
            background:
              "linear-gradient(180deg, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.45) 100%)",
          }}
        >
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between h-16">
              <div className="ml-[30px]">
                <Link
                  to="/"
                  className="flex items-center gap-2 text-white hover:text-white/90 transition-colors"
                >
                  <ArrowLeft className="w-5 h-5" />
                  <span className="font-semibold">
                    {isMobile ? "Zurück" : "Schulwunder Woltersdorf"}
                  </span>
                </Link>
              </div>
              {!isMobile && (
                <div className="mr-[30px] flex items-center gap-4">
                  <div className="flex gap-3">
                    <a
                      href="https://www.youtube.com/@freieschulewoltersdorf"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="YouTube"
                    >
                      <Youtube size={24} color="white" />
                    </a>
                    <a
                      href="https://www.instagram.com/freie_schule_woltersdorf/"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Instagram"
                    >
                      <Instagram size={24} color="white" />
                    </a>
                  </div>
                  <div className="flex gap-2">
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
              )}
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

      <BottomBar />
      <Footer />
    </div>
  );
};

export default SimpleLayout;
