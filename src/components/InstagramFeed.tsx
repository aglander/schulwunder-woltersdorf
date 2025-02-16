
import React, { useEffect, useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { getInstagramToken } from "@/utils/instagramToken";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface InstagramPost {
  id: string;
  caption: string;
  media_type: string;
  media_url: string;
  thumbnail_url?: string;
  permalink: string;
}

const InstagramFeed = () => {
  const [posts, setPosts] = useState<InstagramPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedPost, setSelectedPost] = useState<InstagramPost | null>(null);
  const { toast } = useToast();

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const token = await getInstagramToken();
        
        if (!token) {
          toast({
            title: "Instagram Token fehlt",
            description: "Bitte fügen Sie einen gültigen Instagram Access Token in den Einstellungen hinzu.",
            variant: "destructive",
          });
          setLoading(false);
          return;
        }

        const response = await fetch(
          `https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,thumbnail_url,permalink&access_token=${token}`
        );

        if (!response.ok) {
          throw new Error('Failed to fetch Instagram posts');
        }

        const data = await response.json();
        setPosts(data.data || []);
      } catch (error) {
        console.error('Error fetching Instagram posts:', error);
        toast({
          title: "Fehler",
          description: "Die Instagram Posts konnten nicht geladen werden.",
          variant: "destructive",
        });
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, [toast]);

  if (loading) {
    return (
      <div className="w-full max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Aktuelles aus Instagram</h2>
        <div className="flex justify-center">
          <div className="animate-pulse">Lade Posts...</div>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="w-full max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Aktuelles aus Instagram</h2>
        {posts.length === 0 ? (
          <div className="text-center text-gray-600">
            Keine Posts gefunden
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <div
                key={post.id}
                className="group cursor-pointer"
                onClick={() => setSelectedPost(post)}
              >
                <div className="relative aspect-square overflow-hidden rounded-lg">
                  <img
                    src={post.media_type === 'VIDEO' ? post.thumbnail_url : post.media_url}
                    alt={post.caption || 'Instagram post'}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300" />
                </div>
                {post.caption && (
                  <p className="mt-2 text-sm text-gray-600 line-clamp-2">
                    {post.caption}
                  </p>
                )}
              </div>
            ))}
          </div>
        )}
      </div>

      <Dialog open={!!selectedPost} onOpenChange={() => setSelectedPost(null)}>
        <DialogContent className="max-w-4xl p-0">
          <DialogHeader className="p-6">
            <DialogTitle>Instagram Post</DialogTitle>
          </DialogHeader>
          {selectedPost && (
            <div className="p-6 pt-0">
              <div className="relative aspect-square overflow-hidden rounded-lg mb-4">
                {selectedPost.media_type === 'VIDEO' ? (
                  <video
                    src={selectedPost.media_url}
                    controls
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <img
                    src={selectedPost.media_url}
                    alt={selectedPost.caption || 'Instagram post'}
                    className="w-full h-full object-cover"
                  />
                )}
              </div>
              {selectedPost.caption && (
                <p className="text-gray-700 mb-4">{selectedPost.caption}</p>
              )}
              <a
                href={selectedPost.permalink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline inline-block"
              >
                Auf Instagram ansehen
              </a>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default InstagramFeed;
