import { useState } from "react";

import {
  SpeakerWaveIcon,
  SpeakerXMarkIcon,
  ComputerDesktopIcon,
  QueueListIcon,
} from "@heroicons/react/24/outline";

function TheFooterPlayerRight() {
  const [isMuted, setIsMuted] = useState(false);

  return (
    <div className="flex flex-row">
      <button className="w-8 h-8">
        <QueueListIcon className="h-5 w-5" />
      </button>
      <button className="w-8 h-8">
        <ComputerDesktopIcon className="h-5 w-5" />
      </button>
      <button className="w-8 h-8">
        {isMuted ? (
          <SpeakerXMarkIcon
            className="h-5 w-5"
            onClick={() => setIsMuted(true)}
          />
        ) : (
          <SpeakerWaveIcon
            className="h-5 w-5"
            onClick={() => setIsMuted(false)}
          />
        )}
      </button>
    </div>
  );
}

export default TheFooterPlayerRight;
