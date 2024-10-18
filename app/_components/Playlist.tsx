import React from 'react';

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
        <p className="text-lg text-foreground mb-2">Encore besoin d'être convaincu ?</p>
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
    </div>
  );
};