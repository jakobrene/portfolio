"use client";

import { useState } from "react";

export default function VideoBlock({
  embedUrl,
  corner,
}: {
  embedUrl?: string;
  corner: string;
}) {
  const [playing, setPlaying] = useState(false);
  const [poked, setPoked] = useState(false);

  function activate() {
    if (embedUrl) {
      setPlaying(true);
    } else {
      setPoked(true);
    }
  }

  if (playing && embedUrl) {
    return (
      <div className="video">
        <iframe
          src={embedUrl}
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          title="Introduction video"
        />
      </div>
    );
  }

  return (
    <div
      className="video"
      role="button"
      tabIndex={0}
      aria-label="Play introduction video"
      onClick={activate}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          activate();
        }
      }}
    >
      <span className="corner">{corner}</span>
      <div className="play">
        <span className="ring">
          <svg viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z" />
          </svg>
        </span>
        <span className="cap">
          {poked ? "Embed your Vimeo / Mux video here" : "Click to play"}
        </span>
      </div>
    </div>
  );
}
