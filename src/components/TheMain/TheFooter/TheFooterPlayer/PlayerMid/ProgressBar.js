import convertTime from "utils/convertTime";

import RangeSlider from "../RangeSlider";
function ProgressBar({ currentTime, duration, handleTrackClick }) {
  return (
    <div className="flex justify-center w-full">
      <span>
        <p className="my-0 mx-2">{convertTime(currentTime)}</p>
      </span>
      <RangeSlider
        className="flex items-center w-full"
        inputClasses="w-full mx-auto"
        value={currentTime}
        minvalue={0}
        maxvalue={duration}
        handleChange={handleTrackClick}
      />
      <span>
        <p className="my-0 mx-2">{convertTime(duration)}</p>
      </span>
    </div>
  );
}

export default ProgressBar;
