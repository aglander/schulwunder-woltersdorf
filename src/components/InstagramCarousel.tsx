
import React from "react";
import { Card } from "@/components/ui/card";
import { useQuery } from "@tanstack/react-query";
import { useToast } from "@/hooks/use-toast";
import { getInstagramToken } from "@/utils/instagramToken";

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
    `https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,thumbnail_url,permalink&limit=10&access_token=${token}`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch Instagram posts");
  }

  const data = await response.json();
  return data.data as InstagramPost[];
};

interface InstagramCarouselProps {
  title?: string;
  textColor?: string;
}

export const InstagramCarousel: React.FC<InstagramCarouselProps> = ({
  title = "Aktuelles",
  textColor = "text-primary",
}) => {
  const { toast } = useToast();

  const { data: instagramPosts, isLoading, error } = useQuery({
    queryKey: ["instagram-posts"],
    queryFn: fetchInstagramPosts,
    meta: {
      onError: (error: Error) => {
        console.error("Error fetching Instagram posts:", error);
        toast({
          title: "Fehler",
          description: "Die Instagram Posts konnten nicht geladen werden.",
          variant: "destructive",
        });
      },
    },
  });

  return (
    <Card className="p-8">
      <h2 className={`text-3xl font-bold mb-6 ${textColor}`}>
        {title}
      </h2>
      
      {isLoading && (
        <div className="flex justify-center items-center h-48">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
        </div>
      )}
      
      {error && (
        <div className="text-center text-red-500 p-4 border border-red-300 rounded-md">
          Fehler beim Laden der Instagram-Beiträge. Bitte versuchen Sie es später erneut.
        </div>
      )}
      
      {instagramPosts && instagramPosts.length > 0 && (
        <div className="relative">
          <div className="flex overflow-x-auto gap-4 pb-4 snap-x snap-mandatory">
            {instagramPosts.map((post) => (
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
                      src={post.media_type === 'VIDEO' ? post.thumbnail_url : post.media_url}
                      alt={post.caption?.substring(0, 50) || 'Instagram post'}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    {post.media_type === 'VIDEO' && (
                      <div className="absolute top-2 right-2 bg-black/70 text-white px-2 py-1 rounded text-xs">
                        Video
                      </div>
                    )}
                    {post.media_type === 'CAROUSEL_ALBUM' && (
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
          </div>
        </div>
      )}
      
      {instagramPosts && instagramPosts.length === 0 && (
        <div className="text-center text-gray-500 p-4 border border-gray-300 rounded-md">
          Keine Instagram-Beiträge gefunden.
        </div>
      )}
    </Card>
  );
};
