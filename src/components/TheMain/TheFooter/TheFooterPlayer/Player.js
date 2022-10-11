import { useState } from "react";

import PlayerRight from "./PlayerRight";
import PlayerLeft from "./PlayerLeft";
import PlayerMid from "./PlayerMid/PlayerMid";

function Player() {
  const [volume, setVolume] = useState(1);
  return (
    <footer className="py-4 px-8 justify-between items-center flex-row flex gap-y-2 gap-x-6">
      <PlayerLeft />
      <PlayerMid />
      <PlayerRight volume={volume} setVolume={setVolume} />
    </footer>
  );
}

export default Player;
