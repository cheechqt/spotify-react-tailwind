import React from "react";
import { PlayIcon, PauseIcon } from "@heroicons/react/24/solid";
import { SpotifyState } from "Context";

function PlayButton() {
  const { isPlaying, setIsPlaying } = SpotifyState();

  return (
    <div
      className="w-8 h-8 rounded-3xl border-none bg-white p-0 transition-transform duration-200 hover:scale-110"
      tabIndex="0"
      role="button"
      onClick={() => setIsPlaying(!isPlaying)}
    >
      {isPlaying ? <PlayIcon /> : <PauseIcon />}
    </div>
  );
}

export default PlayButton;
