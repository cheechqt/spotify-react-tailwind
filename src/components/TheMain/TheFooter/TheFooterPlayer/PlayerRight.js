import SoundLevel from "./SoundLevel";

import {
  ComputerDesktopIcon,
  QueueListIcon,
} from "@heroicons/react/24/outline";

function PlayerRight({audioRef, volume, setVolume}) {
  return (
    <div className="flex justify-end items-center -translate-x-[127px]">
      <button className="w-8 h-8">
        <QueueListIcon className="h-5 w-5 text-white" />
      </button>
      <button className="w-8 h-8">
        <ComputerDesktopIcon className="h-5 w-5 text-white" />
      </button>
      <SoundLevel audioRef={audioRef} volume={volume} setVolume={setVolume} />
    </div>
  );
}

export default PlayerRight;
