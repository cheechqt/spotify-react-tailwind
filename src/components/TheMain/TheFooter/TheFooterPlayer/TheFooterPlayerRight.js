import TheFooterPlaylistRightSoundLevel from "./TheFooterPlayerRightSoundLevel";

import {
  ComputerDesktopIcon,
  QueueListIcon,
} from "@heroicons/react/24/outline";

function TheFooterPlayerRight({ volume, setVolume }) {
  return (
    <div className="flex flex-row">
      <button className="w-8 h-8">
        <QueueListIcon className="h-5 w-5" />
      </button>
      <button className="w-8 h-8">
        <ComputerDesktopIcon className="h-5 w-5" />
      </button>
      <TheFooterPlaylistRightSoundLevel volume={volume} setVolume={setVolume} />
    </div>
  );
}

export default TheFooterPlayerRight;
