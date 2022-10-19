import { SpotifyState } from "Context";
import Icon from "components/Base/BaseIcon";

function PlayButton({
  isThisPlaying,
  classes = "bg-white",
  opacityClasses = false,
}) {
  const { setIsPlaying, isPlaying } = SpotifyState();
  const hideClasses = opacityClasses
    ? isThisPlaying && isPlaying
      ? "scale-105 opacity-100 translate-y-0"
      : "hover:scale-105 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0"
    : "";
  return (
    <div
      className={`flex justify-center items-center h-9 w-9 rounded-full shadow-xl flex justify-center items-center cursor-default duration-200 ${hideClasses} ${classes} `}
      tabIndex="0"
      role="button"
      onClick={() => {
        if (isThisPlaying && isPlaying) {
          setIsPlaying(false);
        } else {
          setIsPlaying(true);
        }
      }}
    >
      <Icon value={isThisPlaying && isPlaying ? "pause" : "play"} />
    </div>
  );
}

export default PlayButton;
