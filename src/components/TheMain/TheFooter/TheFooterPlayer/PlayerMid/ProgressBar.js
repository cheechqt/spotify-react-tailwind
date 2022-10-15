import convertTime from "utils/convertTime";

import RangeSlider from "../RangeSlider";
function ProgressBar({ currentTime, duration, handleTrackClick }) {
  return (
    <div className="flex justify-center w-full">
      <span>
        <p className="my-0 mx-2 text-xs text-[#b3b3b3]">{convertTime(currentTime)}</p>
      </span>
      <RangeSlider
        className="flex items-center w-full"
        value={currentTime}
        minvalue={0}
        maxvalue={duration}
        handleChange={handleTrackClick}
      />
      <span>
        <p className="my-0 mx-2 text-xs text-[#b3b3b3]">{convertTime(duration)}</p>
      </span>
    </div>
  );
}

export default ProgressBar;
