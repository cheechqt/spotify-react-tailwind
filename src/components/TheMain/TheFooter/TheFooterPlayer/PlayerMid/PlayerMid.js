import { useRef, useState } from "react";
import Audio from "../Audio";
import ControlBox from "./ControlBox";
import ProgressBar from "./ProgressBar";

function PlayerMid(props) {
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef(null);

  const handleTrackClick = (position) => {
    audioRef.current.currentTime = position;
  };

  return (
    <div className=" flex flex-col items-center">
      <ControlBox />
      <ProgressBar
        currentTime={currentTime}
        duration={duration}
        handleTrackClick={handleTrackClick}
      />
      <Audio
        ref={audioRef}
        handleDuration={setDuration}
        handleCurrentTime={setCurrentTime}
        trackData={props.trackData}
        isPlaying={props.isPlaying}
      />
    </div>
  );
}

export default PlayerMid;
