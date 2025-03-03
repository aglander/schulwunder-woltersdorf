
import React, { useState } from "react";
import SimpleLayout from "@/components/SimpleLayout";
import SEO from "@/components/SEO";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { getInstagramToken } from "@/utils/instagramToken";
import { useQuery } from "@tanstack/react-query";
import { useToast } from "@/hooks/use-toast";

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

const Instagram = () => {
  const { toast } = useToast();
  const [selectedPost, setSelectedPost] = useState<InstagramPost | null>(null);

  const { data: posts, isLoading, error } = useQuery({
    queryKey: ["instagram-posts"],
    queryFn: fetchInstagramPosts,
    onError: (error) => {
      console.error("Error fetching Instagram posts:", error);
      toast({
        title: "Fehler",
        description: "Die Instagram Posts konnten nicht geladen werden.",
        variant: "destructive",
      });
    },
  });

  return (
    <>
      <SEO
        title="Instagram"
        description="Folgen Sie uns auf Instagram und bleiben Sie auf dem Laufenden zu allen Aktivitäten des Schulwunder Woltersdorf."
      />
      <SimpleLayout>
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold text-center mb-8">
            Unsere Instagram Beiträge
          </h1>

          {isLoading && (
            <div className="flex justify-center items-center h-64">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
            </div>
          )}

          {error && (
            <div className="text-center text-red-500 p-4 border border-red-300 rounded-md">
              Fehler beim Laden der Instagram Beiträge. Bitte stellen Sie sicher, dass ein gültiger Instagram Token hinterlegt ist.
            </div>
          )}

          {posts && posts.length > 0 && (
            <Tabs defaultValue="grid">
              <div className="flex justify-center mb-6">
                <TabsList>
                  <TabsTrigger value="grid">Grid</TabsTrigger>
                  <TabsTrigger value="masonry">Masonry</TabsTrigger>
                  <TabsTrigger value="carousel">Carousel</TabsTrigger>
                  <TabsTrigger value="list">Liste</TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value="grid" className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {posts.map((post) => (
                    <a
                      key={post.id}
                      href={post.permalink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block group"
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
                        </div>
                        <CardContent className="flex-grow p-4">
                          {post.caption && (
                            <p className="text-sm line-clamp-3">{post.caption}</p>
                          )}
                        </CardContent>
                      </Card>
                    </a>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="masonry" className="mt-6">
                <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
                  {posts.map((post) => (
                    <a
                      key={post.id}
                      href={post.permalink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block group mb-6 break-inside-avoid"
                    >
                      <Card className="overflow-hidden">
                        <div className="relative overflow-hidden">
                          <img
                            src={post.media_type === 'VIDEO' ? post.thumbnail_url : post.media_url}
                            alt={post.caption?.substring(0, 50) || 'Instagram post'}
                            className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                          />
                          {post.media_type === 'VIDEO' && (
                            <div className="absolute top-2 right-2 bg-black/70 text-white px-2 py-1 rounded text-xs">
                              Video
                            </div>
                          )}
                        </div>
                        <CardContent className="p-4">
                          {post.caption && (
                            <p className="text-sm line-clamp-3">{post.caption}</p>
                          )}
                        </CardContent>
                      </Card>
                    </a>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="carousel" className="mt-6">
                <div className="flex overflow-x-auto gap-4 pb-4 snap-x snap-mandatory">
                  {posts.map((post) => (
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
                        </div>
                        <CardContent className="flex-grow p-4">
                          {post.caption && (
                            <p className="text-sm line-clamp-3">{post.caption}</p>
                          )}
                        </CardContent>
                      </Card>
                    </a>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="list" className="mt-6">
                <div className="space-y-6">
                  {posts.map((post) => (
                    <a
                      key={post.id}
                      href={post.permalink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block group"
                    >
                      <Card className="overflow-hidden">
                        <div className="flex flex-col md:flex-row">
                          <div className="relative w-full md:w-1/3 aspect-square md:aspect-auto">
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
                          </div>
                          <CardContent className="p-4 md:w-2/3">
                            {post.caption && (
                              <p className="text-sm md:text-base">{post.caption}</p>
                            )}
                          </CardContent>
                        </div>
                      </Card>
                    </a>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          )}

          {posts && posts.length === 0 && (
            <div className="text-center text-gray-500 p-4 border border-gray-300 rounded-md">
              Keine Instagram Beiträge gefunden.
            </div>
          )}
        </div>
      </SimpleLayout>
    </>
  );
};

export default Instagram;
