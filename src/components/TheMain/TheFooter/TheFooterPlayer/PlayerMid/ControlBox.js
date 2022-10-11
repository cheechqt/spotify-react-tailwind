import {
  ArrowsRightLeftIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ArrowPathRoundedSquareIcon,
} from "@heroicons/react/24/outline";

import { PLAYLIST } from "data";
import PlayButton from "./PlayButton";

function ControlBox(props) {
  // function decreaseIndex() {
  //   if (props.trackData.trackKey[1] == 0) {
  //   } else {
  //     props.changeTrack([
  //       props.trackData.trackKey[0],
  //       props.trackData.trackKey[1] - 1,
  //     ]);
  //   }
  // }
  // function increaseIndex() {
  //   if (
  //     props.trackData.trackKey[1] ==
  //     PLAYLIST[props.trackData.trackKey[0]].playlistData.length - 1
  //   ) {
  //   } else {
  //     props.changeTrack([
  //       props.trackData.trackKey[0],
  //       parseInt(props.trackData.trackKey[1]) + 1,
  //     ]);
  //   }
  // }

  function increaseIndex() {
    return "";
  }

  function decreaseIndex() {
    return "";
  }

  return (
    <div className="w-[224px] flex items-center justify-between mb-3">
      <ArrowsRightLeftIcon className="h-5 w-5" />
      <button
        className="border-none bg-transparent w-8 h-8 p-0 flex items-center justify-center"
        onClick={decreaseIndex}
      >
        <ChevronLeftIcon className="h-5 w-5" />
      </button>
      <PlayButton isthisplay={true} />
      <button
        className="border-none bg-transparent w-8 h-8 p-0 flex items-center justify-center"
        onClick={increaseIndex}
      >
        <ChevronRightIcon className="h-5 w-5" />
      </button>
      <ArrowPathRoundedSquareIcon className="h-5 w-5" />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    trackData: state.trackData,
  };
};

export default ControlBox;
