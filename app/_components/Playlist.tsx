import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"


interface PlaylistProps {
  playlistId: string;
  minWidth?: string;
  maxWidth?: string;
  height?: number | string;
}

export const Playlist: React.FC<PlaylistProps> = ({ 
  playlistId, 
  minWidth = '300px',
  maxWidth = '20%',
  height = 420
}) => {
  const playlistUrl = `https://open.spotify.com/embed/playlist/${playlistId}?utm_source=generator&theme=0`;

  return (
    <div style={{
      minWidth: minWidth,
      maxWidth: maxWidth,
      width: '100%',
      margin: '0 auto'
    }}>
  
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-md text-muted-foreground">Encore besoin d&apos;être convaincu.e ? 🤔</AccordionTrigger>
          <AccordionContent>
          <iframe
            style={{
              borderRadius: '12px',
              border: 'none',
              width: '100%',
              height: typeof height === 'number' ? `${height}px` : height
            }}
            src={playlistUrl}
            allowFullScreen
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            title="Spotify Playlist Embed"
          />
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};