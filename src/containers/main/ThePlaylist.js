import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { SpotifyState } from "Context";
import { PLAYLIST } from "data/index";

import TheHeader from "components/TheHeader/TheHeader";
import Details from "components/ThePlaylist/Details";
import Track from "components/ThePlaylist/Track";
import PlayButton from "components/Base/BasePlayButton";
import {
  HeartIcon,
  EllipsisHorizontalIcon,
  ClockIcon,
} from "@heroicons/react/24/outline";

function ThePlaylist() {
  const { trackData, changeTrack } = SpotifyState();
  const [playlistIndex, setPlaylistIndex] = useState(undefined);
  const [isThisPlaying, setIsThisPlaying] = useState(false);
  const [bgColor, setBgColor] = useState("bg-[#121212]")
  const { path } = useParams();

  function changeBg(color) {
    setBgColor(`bg-[${color}]`)
  }

  useEffect(() => {
    setIsThisPlaying(playlistIndex === trackData.trackKey[0]);
  }, [playlistIndex, trackData.trackKey]);

  return (
    <div className="overflow-y-scroll overflow-x-scroll relative pb-4 text-white">
      <div className={`h-[340px] w-full absolute left-0 top-0 -z-20 bg-gradient-to-t from-[#121212] ${bgColor}`}></div>
      <div className="absolute top-[340px] right-0 left-0 bottom-0 -z-30 bg-[#121212]"></div>
      <TheHeader />

      {PLAYLIST.map((playlist) => {
        if (playlist.link === path) {
          return (
            <div
              key={playlist.title}
              onLoad={() => {
                changeBg(playlist.playlistBg);
                setPlaylistIndex(PLAYLIST.indexOf(playlist));
              }}
            >
              <Details playlistData={playlist} />

              <div className="flex items-center flex-row py-6 px-8 relative">
                <button
                  className="border-none bg-transparent"
                  onClick={() => changeTrack([PLAYLIST.indexOf(playlist), 0])}
                >
                  <PlayButton
                    isThisPlaying={isThisPlaying}
                    classes="bg-[#1DB954] mr-8 w-[56px] h-[56px]"
                    svgClass="w-7 h-7"
                  />
                </button>
                <HeartIcon className="w-7 h-7 text-[#B3B3B3] hover:text-[#fff]" />
                <EllipsisHorizontalIcon className="w-7 h-7 text-[#B3B3B3] hover:text-[#fff]  ml-6" />
              </div>

              <div className="mr-[20px] mb-4 ml-10 py-2 px-4 text-[#b3b3b3]border-b border-white grid gap-4 grid-cols-listHead">
                <p className="text-lg leading-4 m-0 tracking-wide text-[#B3B3B3]">
                  #
                </p>
                <p className="text-sm leading-4 m-0 tracking-wide text-[#B3B3B3]">
                  TITLE
                </p>
                <ClockIcon className="w-4 h-4 text-[#B3B3B3]" />
              </div>

              <div className="md:py-0 md:px-8 py-0 px-4">
                {playlist.playlistData.map((song) => {
                  return (
                    <button
                      key={song.index}
                      className="block w-full bg-none border border-transparent rounded-md"
                    >
                      <Track playlist={playlist} song={song} />
                    </button>
                  );
                })}
              </div>
            </div>
          );
        } else {
          return "";
        }
      })}
    </div>
  );
}

export default ThePlaylist;
