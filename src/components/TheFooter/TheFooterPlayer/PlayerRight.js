import { useState } from "react";
import SoundLevel from "./SoundLevel";
import useVisibility from "hooks/useVisibility";
import {
  ComputerDesktopIcon,
  QueueListIcon,
} from "@heroicons/react/24/outline";

function PlayerRight({ audioRef, volume, setVolume }) {
  const { isSmallScreen } = useVisibility(toggleVisibilityImage);
  const [hiddenClass, setHiddenClass] = useState("");

  function getHiddenClasses() {
    return isSmallScreen ? "" : "hidden";
  }

  function toggleVisibilityImage() {
    setHiddenClass(getHiddenClasses);
  }

  return (
    <div className={`flex justify-end items-center -translate-x-[141px] ${hiddenClass}`}>
      <button className="w-8 h-8 cursor-default">
        <QueueListIcon className="h-5 w-5 text-[#BABABA] hover:text-white" />
      </button>
      <button className="w-8 h-8 cursor-default">
        <ComputerDesktopIcon className="h-5 w-5 text-[#BABABA] hover:text-white" />
      </button>
      <SoundLevel audioRef={audioRef} volume={volume} setVolume={setVolume} />
    </div>
  );
}

export default PlayerRight;
