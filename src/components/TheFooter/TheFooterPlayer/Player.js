import { useEffect, useRef, useState } from "react";
import { SpotifyState } from "Context";

import PlayerRight from "./PlayerRight";
import PlayerLeft from "./PlayerLeft";
import { PLAYLIST } from "data";
import ControlBox from "./PlayerMid/ControlBox";
import ProgressBar from "./PlayerMid/ProgressBar";
import Audio from "./Audio";

function Player() {
  const { trackData, changeTrack, isPlaying } = SpotifyState();


  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  const audioRef = useRef(null);

  const handleTrackClick = (position) => {
    audioRef.current.currentTime = position;
  };

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [audioRef, isPlaying]);

  useEffect(() => {
    audioRef.current.volume = volume;
  }, [audioRef, volume]);

  useEffect(() => {
    audioRef.current.addEventListener("ended", () => {
      if (
        trackData.trackKey[1] ===
        PLAYLIST[trackData.trackKey[0]].playlistData.length - 1
      ) {
        changeTrack(trackData.trackKey[0], 0);
      } else {
        changeTrack(trackData.trackKey[0], parseInt(trackData.trackKey[1]) + 1);
      }
    });
  });

  return (
    <footer className="grid md:grid-cols-footer grid-cols-footerSmall py-4 px-4 gap-y-2 gap-x-6 bg-[#181818] border-t-2 border-[#282828] h-[90px]">
      <PlayerLeft trackData={trackData} />
      <div className=" flex flex-col items-center h-[57px]">
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
          trackData={trackData}
          isPlaying={isPlaying}
        />
      </div>
      <PlayerRight audioRef={audioRef} volume={volume} setVolume={setVolume} />
    </footer>
  );
}

export default Player;
