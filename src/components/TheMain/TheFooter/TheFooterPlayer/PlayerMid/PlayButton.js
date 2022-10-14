import React from "react";
import Icon from "./ControlBoxIcon";

function PlayButton({ isPlaying, setIsPlaying }) {
  return (
    <div
      className="flex justify-center items-center w-8 h-8 rounded-3xl border-none bg-white p-0 transition-transform duration-200 hover:scale-110"
      tabIndex="0"
      role="button"
      onClick={() => {
        setIsPlaying(!isPlaying);
        console.log(isPlaying);
      }}
    >
      <Icon value={isPlaying ? "pause" : "play"} />
    </div>
  );
}

export default PlayButton;
