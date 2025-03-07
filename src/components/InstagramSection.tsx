
import React, { useRef } from "react";
import { Card } from "@/components/ui/card";
import { useQuery } from "@tanstack/react-query";
import { useToast } from "@/hooks/use-toast";
import { getInstagramToken } from "@/utils/instagramToken";
import { Instagram, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface InstagramPost {
  id: string;
  caption: string;
  media_type: string;
  media_url: string;
  thumbnail_url?: string;
  permalink: string;
}

const fetchInstagramPosts = async () => {
  const token = await getInstagramToken();
  if (!token) {
    throw new Error("Instagram token not found");
  }

  const response = await fetch(
    `https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,thumbnail_url,permalink&limit=20&access_token=${token}`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch Instagram posts");
  }

  const data = await response.json();
  return data.data as InstagramPost[];
};

interface InstagramSectionProps {
  title?: string;
  textColor?: string;
  filterTag?: string;
}

export const InstagramSection: React.FC<InstagramSectionProps> = ({
  title = "Aktuelles",
  textColor = "text-primary",
  filterTag,
}) => {
  const { toast } = useToast();
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const {
    data: instagramPosts,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["instagram-posts"],
    queryFn: fetchInstagramPosts,
    meta: {
      onError: (error: Error) => {
        console.error("Error fetching Instagram posts:", error);
        const errorMessage =
          error.message === "Instagram token not found"
            ? "Bitte Instagram Access Token in den API-Einstellungen hinterlegen."
            : "Die Instagram Posts konnten nicht geladen werden.";

        toast({
          title: "Fehler",
          description: errorMessage,
          variant: "destructive",
        });
      },
    },
  });

  // Filter posts by tag if filterTag is provided
  const filteredPosts = React.useMemo(() => {
    if (!instagramPosts || !filterTag) return instagramPosts;

    let tagsToCheck = [filterTag];
    
    // Special case for schulgründungswunder to also check for schulgruendungswunder
    if (filterTag === "#schulgruendungswunder") {
      tagsToCheck.push("#schulgründungswunder");
    } else if (filterTag === "#schulgründungswunder") {
      tagsToCheck.push("#schulgruendungswunder");
    }

    return instagramPosts.filter((post) => {
      if (!post.caption) return false;
      
      // Check if any of the specified tags are in the caption
      return tagsToCheck.some(tag => 
        post.caption.toLowerCase().includes(tag.toLowerCase())
      );
    });
  }, [instagramPosts, filterTag]);

  const handleScroll = (direction: 'left' | 'right') => {
    if (!scrollContainerRef.current) return;
    
    const container = scrollContainerRef.current;
    const scrollAmount = direction === 'left' ? -400 : 400;
    
    container.scrollBy({
      left: scrollAmount,
      behavior: 'smooth'
    });
  };

  return (
    <section id="instagram" className="mb-16">
      <Card className="p-8">
        <h2 className={`text-3xl font-bold mb-6 ${textColor}`}>{title}</h2>

        {isLoading && (
          <div className="flex justify-center items-center h-48">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
          </div>
        )}

        {error && (
          <div className="text-center text-red-500 p-4 border border-red-300 rounded-md">
            {(error as Error).message === "Instagram token not found"
              ? "Kein Instagram-Token gefunden. Bitte in den API-Einstellungen hinterlegen."
              : "Fehler beim Laden der Instagram-Beiträge. Bitte versuchen Sie es später erneut."}
          </div>
        )}

        {filteredPosts && filteredPosts.length > 0 && (
          <div className="relative">
            <div 
              ref={scrollContainerRef}
              className="flex overflow-x-auto gap-4 pb-4 snap-x snap-mandatory hide-scrollbar"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {filteredPosts.map((post) => (
                <a
                  key={post.id}
                  href={post.permalink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="snap-start shrink-0 w-[280px] md:w-[320px] group"
                >
                  <Card className="overflow-hidden h-full flex flex-col">
                    <div className="relative overflow-hidden aspect-square">
                      <img
                        src={
                          post.media_type === "VIDEO"
                            ? post.thumbnail_url
                            : post.media_url
                        }
                        alt={post.caption?.substring(0, 50) || "Instagram post"}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      {post.media_type === "VIDEO" && (
                        <div className="absolute top-2 right-2 bg-black/70 text-white px-2 py-1 rounded text-xs">
                          Video
                        </div>
                      )}
                      {post.media_type === "CAROUSEL_ALBUM" && (
                        <div className="absolute top-2 right-2 bg-black/70 text-white px-2 py-1 rounded text-xs">
                          Galerie
                        </div>
                      )}
                    </div>
                    <div className="p-4">
                      {post.caption && (
                        <p className="text-sm line-clamp-3">{post.caption}</p>
                      )}
                    </div>
                  </Card>
                </a>
              ))}

              {/* Instagram Profile Card */}
              <a
                href="https://www.instagram.com/freie_schule_woltersdorf/"
                target="_blank"
                rel="noopener noreferrer"
                className="snap-start shrink-0 w-[280px] md:w-[320px] group"
              >
                <Card className="overflow-hidden h-full flex flex-col justify-center items-center p-6 text-center">
                  <div className="mb-4 p-4 rounded-full bg-gradient-to-tr from-purple-500 via-pink-500 to-orange-400">
                    <Instagram size={40} className="text-white" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Folge uns auf Instagram</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    @freie_schule_woltersdorf
                  </p>
                  <p className="text-sm">
                    Bleibe immer auf dem Laufenden mit unseren neuesten Aktivitäten und Projekten.
                  </p>
                </Card>
              </a>
            </div>

            {/* Navigation controls */}
            <div className="flex justify-center gap-4 mt-4">
              <Button 
                variant="outline" 
                size="icon"
                onClick={() => handleScroll('left')}
                aria-label="Vorherige Beiträge"
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              
              <Button 
                variant="outline" 
                size="icon"
                onClick={() => handleScroll('right')}
                aria-label="Nächste Beiträge"
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        )}

        {filteredPosts && filteredPosts.length === 0 && (
          <div className="text-center text-gray-500 p-4 border border-gray-300 rounded-md">
            {filterTag ? `Keine Instagram-Beiträge mit dem Hashtag ${filterTag} gefunden.` : "Keine Instagram-Beiträge gefunden."}
          </div>
        )}
      </Card>
    </section>
  );
};
