
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
  const [instagramToken, setInstagramToken] = useState("");
  const { toast } = useToast();

  useEffect(() => {
    const savedYoutubeKey = localStorage.getItem("youtube_api_key");
    const savedInstagramToken = localStorage.getItem("instagram_token");
    if (savedYoutubeKey) setYoutubeKey(savedYoutubeKey);
    if (savedInstagramToken) setInstagramToken(savedInstagramToken);
  }, []);

  const handleSave = () => {
    // Save YouTube key
    localStorage.setItem("youtube_api_key", youtubeKey);
    
    // Save Instagram token with expiration date (60 days from now)
    if (instagramToken) {
      localStorage.setItem("instagram_token", instagramToken);
      const expirationDate = new Date();
      expirationDate.setDate(expirationDate.getDate() + 59); // 59 days to refresh one day early
      localStorage.setItem("instagram_token_expiration", expirationDate.toISOString());
    }

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
            <label htmlFor="instagram-token" className="text-sm font-medium">
              Instagram Access Token
            </label>
            <input
              id="instagram-token"
              type="password"
              value={instagramToken}
              onChange={(e) => setInstagramToken(e.target.value)}
              className="w-full px-3 py-2 border rounded-md"
              placeholder="Instagram Access Token eingeben"
            />
            <p className="text-xs text-gray-500">
              Der Instagram Token wird automatisch alle 60 Tage erneuert.
            </p>
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
