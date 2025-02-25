import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useIsMobile } from "@/hooks/use-mobile";

const BottomBar = () => {
  const isMobile = useIsMobile();

  if (!isMobile) {
    return null;
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50">
      <div
        className="backdrop-blur-sm border-t border-black/20 w-full"
        style={{
          background:
            "linear-gradient(0deg, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.35) 100%)",
        }}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div
              style={{
                filter: "drop-shadow(-1px 6px 3px rgba(50, 50, 0, 0.5))",
              }}
            >
              <div
                className="bg-white/90 p-2 w-[100px]"
                style={{
                  clipPath: "polygon(0 6%, 100% 0%, 100% 100%, 0% 100%)",
                  transform: "translateY(-15%)",
                }}
              >
                <a
                  href="https://www.freie-schule-woltersdorf.de"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="/assets/FSW_Logo.png"
                    alt="FSW Logo"
                    className="w-full h-auto p-2"
                  />
                </a>
              </div>
            </div>
            <Link to="/spenden">
              <Button
                variant="secondary"
                size="sm"
                className="bg-white text-black hover:bg-white/90"
              >
                Jetzt spenden
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BottomBar;
