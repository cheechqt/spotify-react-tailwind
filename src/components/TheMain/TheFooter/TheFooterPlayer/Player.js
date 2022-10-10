import { useState } from "react";

import PlayerRight from "./PlayerRight";
import PlayerLeft from "./PlayerLeft";

function Player() {
  const [volume, setVolume] = useState(1);
  return (
    <footer className="py-4 px-8 justify-between items-center flex flex-wrap gap-y-2 gap-x-6">
      <div className="">
        <PlayerLeft />
        <PlayerRight volume={volume} setVolume={setVolume} />
      </div>
    </footer>
  );
}

export default Player;
