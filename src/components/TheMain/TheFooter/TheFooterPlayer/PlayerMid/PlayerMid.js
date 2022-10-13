import { useRef, useState } from "react";
import { SpotifyState } from "Context";
import Audio from "../Audio";
import ControlBox from "./ControlBox";
import ProgressBar from "./ProgressBar";

function PlayerMid({ trackData }) {
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef(null);

  const { isPlaying } = SpotifyState();

  const handleTrackClick = (position) => {
    audioRef.current.currentTime = position;
  };

  return (
    <div className=" flex flex-col items-center flex-1">
      <ControlBox trackData={trackData} />
      <ProgressBar
        currentTime={currentTime}
        duration={duration}
        handleTrackClick={handleTrackClick}
      />
      <Audio
        ref={audioRef}
        handleDuration={setDuration}
        handleCurrentTime={setCurrentTime}
        trackData={trackData}
        isPlaying={isPlaying}
      />
    </div>
  );
}

export default PlayerMid;
