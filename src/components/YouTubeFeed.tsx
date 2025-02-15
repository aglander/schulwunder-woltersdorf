
import React, { useEffect, useState } from "react";
import { useToast } from "@/hooks/use-toast";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface YouTubeVideo {
  id: string;
  title: string;
  thumbnail: string;
}

const YouTubeFeed = () => {
  const [videos, setVideos] = useState<YouTubeVideo[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedVideo, setSelectedVideo] = useState<YouTubeVideo | null>(null);
  const { toast } = useToast();

  useEffect(() => {
    const fetchVideos = async () => {
      const apiKey = localStorage.getItem("youtube_api_key");
      
      if (!apiKey) {
        toast({
          title: "API Key fehlt",
          description: "Bitte fügen Sie einen YouTube API Key in den Einstellungen hinzu.",
          variant: "destructive",
        });
        setLoading(false);
        return;
      }

      try {
        console.log("Starte API-Anfrage mit Key:", apiKey);
        // Erhöhe maxResults um Shorts zu kompensieren
        const videosResponse = await fetch(
          `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=UC6JPid2VWnlODcaAoYsli3g&maxResults=20&order=date&type=video&key=${apiKey}`
        );
        
        if (!videosResponse.ok) {
          const errorData = await videosResponse.json();
          console.error("API-Fehler:", errorData);
          throw new Error(`API-Fehler: ${errorData.error?.message || 'Unbekannter Fehler'}`);
        }

        const videosData = await videosResponse.json();
        console.log("API-Antwort:", videosData);

        if (!videosData.items) {
          console.error("Keine Items in der API-Antwort gefunden");
          throw new Error("Keine Videos gefunden");
        }

        // Filtere Shorts anhand der Videodauer und Titel
        const formattedVideos = videosData.items
          .filter((item: any) => !item.snippet.title.toLowerCase().includes('#shorts'))
          .map((item: any) => ({
            id: item.id.videoId,
            title: item.snippet.title,
            thumbnail: item.snippet.thumbnails.medium.url,
          }))
          .slice(0, 9); // Nimm nur die ersten 9 Videos

        console.log("Formatierte Videos (ohne Shorts):", formattedVideos);
        setVideos(formattedVideos);
      } catch (error) {
        console.error("Detaillierter Fehler:", error);
        toast({
          title: "Fehler beim Laden der Videos",
          description: error instanceof Error ? error.message : "Die Videos konnten nicht geladen werden. Bitte überprüfen Sie Ihren API Key.",
          variant: "destructive",
        });
      } finally {
        setLoading(false);
      }
    };

    fetchVideos();
  }, [toast]);

  if (loading) {
    return (
      <div className="w-full max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Unsere YouTube Videos</h2>
        <div className="flex justify-center">
          <div className="animate-pulse">Lade Videos...</div>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="w-full max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Unsere YouTube Videos</h2>
        {videos.length === 0 ? (
          <div className="text-center text-gray-600">
            Keine Videos gefunden
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {videos.map((video) => (
              <div 
                key={video.id} 
                className="group cursor-pointer"
                onClick={() => setSelectedVideo(video)}
              >
                <div className="block">
                  <div className="relative aspect-video overflow-hidden rounded-lg">
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300" />
                  </div>
                  <h3 className="mt-2 text-sm font-medium text-gray-900 line-clamp-2 group-hover:text-schulbau">
                    {video.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <Dialog open={!!selectedVideo} onOpenChange={() => setSelectedVideo(null)}>
        <DialogContent className="max-w-4xl p-0">
          <DialogHeader className="p-6">
            <DialogTitle>{selectedVideo?.title}</DialogTitle>
          </DialogHeader>
          {selectedVideo && (
            <div className="aspect-video w-full">
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${selectedVideo.id}?autoplay=1`}
                title={selectedVideo.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="border-0"
              />
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default YouTubeFeed;
