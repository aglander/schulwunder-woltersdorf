
import React, { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const ApiKeyDialog = () => {
  const [youtubeKey, setYoutubeKey] = useState("");
  const [instagramKey, setInstagramKey] = useState("");
  const { toast } = useToast();

  useEffect(() => {
    const savedYoutubeKey = localStorage.getItem("youtube_api_key");
    const savedInstagramKey = localStorage.getItem("instagram_api_key");
    if (savedYoutubeKey) setYoutubeKey(savedYoutubeKey);
    if (savedInstagramKey) setInstagramKey(savedInstagramKey);
  }, []);

  const handleSave = () => {
    localStorage.setItem("youtube_api_key", youtubeKey);
    localStorage.setItem("instagram_api_key", instagramKey);
    toast({
      title: "API Keys gespeichert",
      description: "Die API-Keys wurden erfolgreich gespeichert.",
    });
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="text-gray-600 transition-colors hover:text-black hover:underline">
          API Keys verwalten
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>API Keys verwalten</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid gap-2">
            <label htmlFor="youtube-key" className="text-sm font-medium">
              YouTube API Key
            </label>
            <input
              id="youtube-key"
              type="password"
              value={youtubeKey}
              onChange={(e) => setYoutubeKey(e.target.value)}
              className="w-full px-3 py-2 border rounded-md"
              placeholder="YouTube API Key eingeben"
            />
          </div>
          <div className="grid gap-2">
            <label htmlFor="instagram-key" className="text-sm font-medium">
              Instagram API Key
            </label>
            <input
              id="instagram-key"
              type="password"
              value={instagramKey}
              onChange={(e) => setInstagramKey(e.target.value)}
              className="w-full px-3 py-2 border rounded-md"
              placeholder="Instagram API Key eingeben"
            />
          </div>
        </div>
        <div className="flex justify-end">
          <Button onClick={handleSave}>Speichern</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ApiKeyDialog;
