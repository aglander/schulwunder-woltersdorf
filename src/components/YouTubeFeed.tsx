
import React, { useEffect, useState } from "react";
import { useToast } from "@/hooks/use-toast";

interface YouTubeVideo {
  id: string;
  title: string;
  thumbnail: string;
}

const YouTubeFeed = () => {
  const [videos, setVideos] = useState<YouTubeVideo[]>([]);
  const [loading, setLoading] = useState(true);
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
        const channelResponse = await fetch(
          `https://www.googleapis.com/youtube/v3/channels?part=contentDetails&forUsername=FreieSchuleWoltersdorf&key=${apiKey}`
        );
        const channelData = await channelResponse.json();
        
        if (!channelData.items || channelData.items.length === 0) {
          throw new Error("Kanal nicht gefunden");
        }

        const uploadsPlaylistId = channelData.items[0].contentDetails.relatedPlaylists.uploads;
        
        const videosResponse = await fetch(
          `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=9&playlistId=${uploadsPlaylistId}&key=${apiKey}`
        );
        const videosData = await videosResponse.json();

        const formattedVideos = videosData.items.map((item: any) => ({
          id: item.snippet.resourceId.videoId,
          title: item.snippet.title,
          thumbnail: item.snippet.thumbnails.medium.url,
        }));

        setVideos(formattedVideos);
      } catch (error) {
        toast({
          title: "Fehler beim Laden der Videos",
          description: "Die Videos konnten nicht geladen werden. Bitte überprüfen Sie Ihren API Key.",
          variant: "destructive",
        });
        console.error("Fehler beim Laden der YouTube Videos:", error);
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
    <div className="w-full max-w-7xl mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-center mb-12">Unsere YouTube Videos</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {videos.map((video) => (
          <div key={video.id} className="group cursor-pointer">
            <a
              href={`https://www.youtube.com/watch?v=${video.id}`}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
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
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default YouTubeFeed;
