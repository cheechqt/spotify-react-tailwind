import { useEffect, useState } from "react";
import { SpeakerWaveIcon, SpeakerXMarkIcon } from "@heroicons/react/24/outline";
import RangeSlider from "./RangeSlider";

function SoundLevel({ audioRef, volume, setVolume }) {
  const [lastVolume, setLastVolume] = useState(1);

  const soundBtn = () => {
    if (volume === 0) {
      setVolume(lastVolume);
    } else {
      setLastVolume(volume);
      setVolume(0);
    }
  };

  useEffect(() => {
    audioRef.current.volume = volume;
  }, [audioRef, volume]);

  return (
    <div className="w-8 h-8 flex items-center">
      <button className="h-8 w-8 mr-2" tabIndex="0" onClick={soundBtn}>
        {volume === 0 ? (
          <SpeakerXMarkIcon
            className="h-5 w-5 text-white"
            onClick={() => setVolume(0)}
          />
        ) : (
          <SpeakerWaveIcon
            className="h-5 w-5 text-white"
            onClick={() => setVolume(lastVolume)}
          />
        )}
      </button>
        <RangeSlider
          minvalue={0}
          maxvalue={1}
          value={volume}
          handleChange={setVolume}
        />
    </div>
  );
}

export default SoundLevel;
