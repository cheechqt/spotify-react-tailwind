import SoundLevel from "./SoundLevel";

import {
  ComputerDesktopIcon,
  QueueListIcon,
} from "@heroicons/react/24/outline";

function PlayerRight({ volume, setVolume }) {
  return (
    <div className="flex flex-row justify-end">
      <button className="w-8 h-8">
        <QueueListIcon className="h-5 w-5 text-white" />
      </button>
      <button className="w-8 h-8">
        <ComputerDesktopIcon className="h-5 w-5 text-white" />
      </button>
      <SoundLevel volume={volume} setVolume={setVolume} />
    </div>
  );
}

export default PlayerRight;
