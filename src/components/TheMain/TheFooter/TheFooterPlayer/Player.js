import { useState } from "react";
import { SpotifyState } from "Context";

import PlayerRight from "./PlayerRight";
import PlayerLeft from "./PlayerLeft";
import PlayerMid from "./PlayerMid/PlayerMid";

function Player() {
  const [volume, setVolume] = useState(1);
  const { trackData } = SpotifyState();
  console.log(trackData);
  

  return (
    <footer className="grid grid-cols-footer py-4 px-8 gap-y-2 gap-x-6 bg-black">
      <PlayerLeft trackData={trackData} />
      <PlayerMid trackData={trackData} />
      <PlayerRight volume={volume} setVolume={setVolume} />
    </footer>
  );
}

export default Player;
