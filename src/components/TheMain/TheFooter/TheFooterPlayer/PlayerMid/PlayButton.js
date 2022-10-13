import React from "react";
import { PlayIcon, PauseIcon } from "@heroicons/react/24/solid";
import { SpotifyState } from "Context";

function PlayButton({ audioRef }) {
  const { isPlaying, setIsPlaying } = SpotifyState();

  const handleTogglePausePlay = (isPlaying) => {
    const prevValue = isPlaying;
    setIsPlaying(!prevValue);
    if (!prevValue) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  };

  return (
    <div
      className="w-8 h-8 rounded-3xl border-none bg-white p-0 transition-transform duration-200 hover:scale-110"
      tabIndex="0"
      role="button"
      onClick={() => handleTogglePausePlay(isPlaying)}
    >
      {isPlaying ? <PauseIcon /> : <PlayIcon />}
    </div>
  );
}

export default PlayButton;
