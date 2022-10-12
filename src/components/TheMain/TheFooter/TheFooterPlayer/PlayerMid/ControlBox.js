import {
  ArrowsRightLeftIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ArrowPathRoundedSquareIcon,
} from "@heroicons/react/24/solid";
import { SpotifyState } from "Context";

import { PLAYLIST } from "data";
import PlayButton from "./PlayButton";

function ControlBox({ trackData }) {
  const { setCurrentTrackData } = SpotifyState();
  console.log(parseInt(trackData.trackKey[1]) + 1);

  function decreaseIndex() {
    if (trackData.trackKey[1] === 0) {
      return;
    } else {
      setCurrentTrackData(trackData.trackKey[0], trackData.trackKey[1] - 1);
    }
  }
  function increaseIndex() {
    if (
      trackData.trackKey[1] ===
      PLAYLIST[trackData.trackKey[0]].playlistData.length - 1
    ) {
    } else {
      setCurrentTrackData(
        trackData.trackKey[0],
        parseInt(trackData.trackKey[1]) + 1
      );
    }
  }

  return (
    <div className="w-[224px] flex items-center justify-between mb-3">
      <ArrowsRightLeftIcon className="h-5 w-5 text-white" />
      <button
        className="border-none bg-transparent w-8 h-8 p-0 flex items-center justify-center"
        onClick={decreaseIndex}
      >
        <ChevronLeftIcon className="h-5 w-5 text-white" />
      </button>
      <PlayButton />
      <button
        className="border-none bg-transparent w-8 h-8 p-0 flex items-center justify-center"
        onClick={increaseIndex}
      >
        <ChevronRightIcon className="h-5 w-5 text-white" />
      </button>
      <ArrowPathRoundedSquareIcon className="h-5 w-5 text-white" />
    </div>
  );
}

export default ControlBox;
