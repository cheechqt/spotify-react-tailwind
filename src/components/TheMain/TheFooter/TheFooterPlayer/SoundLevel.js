import { useState } from "react";
import { SpeakerWaveIcon, SpeakerXMarkIcon } from "@heroicons/react/24/outline";
import RangeSlider from "./RangeSlider";

function SoundLevel({ volume, setVolume }) {
  const [lastVolume, setLastVolume] = useState(1);

  const soundBtn = () => {
    if (volume === 0) {
      setVolume(lastVolume);
    } else {
      setLastVolume(volume);
      setVolume(0);
    }
  };
  return (
    <button className="w-8 h-8 flex items-center">
      <div tabIndex="0" role="button" onClick={soundBtn}>
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
      </div>
      <RangeSlider
        minvalue={0}
        maxvalue={1}
        value={volume}
        handleChange={setVolume}
      />
    </button>
  );
}

export default SoundLevel;
