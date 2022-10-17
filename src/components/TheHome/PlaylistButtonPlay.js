import Icon from "components/Base/BaseIcon";
import { SpotifyState } from "Context";

const PlaylistButtonPlay = ({ isThisPlaying }) => {
  const { setIsPlaying, isPlaying } = SpotifyState();
  const playingClasses =
    isThisPlaying && isPlaying
      ? "scale-105 opacity-100 translate-y-0"
      : "hover:scale-105 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0";

  return (
    <button
      className={`h-10 w-10 bg-[#1cb955] rounded-full shadow-xl absolute right-2 bottom-2 flex justify-center items-center cursor-auto duration-200 ${playingClasses}`}
      onClick={() => {
        if (isThisPlaying && isPlaying) {
          setIsPlaying(false);
        } else {
          setIsPlaying(true);
        }
      }}
    >
      <Icon value={isThisPlaying && isPlaying ? "pause" : "play"} />
    </button>
  );
};

export default PlaylistButtonPlay;
