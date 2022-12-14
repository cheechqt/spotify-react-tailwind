import { SpotifyState } from "Context";
import Icon from "components/Base/BaseIcon";
import { PLAYLIST } from "data";
import PlayButton from "components/Base/BasePlayButton";

function ControlBox() {
  const { trackData, changeTrack } = SpotifyState();

  function decreaseIndex() {
    if (trackData.trackKey[1] === 0) {
      return;
    } else {
      changeTrack(trackData.trackKey[0], trackData.trackKey[1] - 1);
    }
  }
  function increaseIndex() {
    if (
      trackData.trackKey[1] ===
      PLAYLIST[trackData.trackKey[0]].playlistData.length - 1
    ) {
    } else {
      changeTrack(trackData.trackKey[0], parseInt(trackData.trackKey[1]) + 1);
    }
  }

  return (
    <div className="w-[224px] flex items-center justify-between mb-2">
      <Icon value="mix" />
      <button
        className="border-none bg-transparent w-8 h-8 p-0 flex items-center justify-center cursor-default"
        onClick={decreaseIndex}
      >
        <Icon value="prev" />
      </button>
      <PlayButton isThisPlaying={true}/>
      <button
        className="border-none bg-transparent w-8 h-8 p-0 flex items-center justify-center cursor-default"
        onClick={increaseIndex}
      >
        <Icon value="next" />
      </button>
      <Icon value="loop" />
    </div>
  );
}

export default ControlBox;
