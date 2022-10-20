import { useState, useEffect } from "react";
import { SpotifyState } from "Context";
import Playgif from "./images/now-play.gif";
import Icon from "components/Base/BaseIcon";
import { PLAYLIST } from "data";

function Track({ song, playlist }) {
  const { trackData, isPlaying, setIsPlaying, changeTrack } = SpotifyState();
  const [thisSong, setThisSong] = useState(false);

  /*setInterval(function(){
        setthisSong(props.data.song.link == localStorage.getItem('playedSong'));
    }, 50);*/

  useEffect(() => {
    if (song.link === trackData.track && isPlaying === true) {
      setThisSong(true);
    } else {
      setThisSong(false);
    }
  });

  return (
    <div
      className={` md:w-full w-100-8 bg-none border border-transparent rounded text-white relative grid grid-cols-trackDiv items-center text-left md:py-0 md:px-4 p-0 pl-[6px] gap-x-4 h-14 hover:bg-black hover:bg-opacity-10 group ${
        thisSong ? "activeTrack" : ""
      }`}
      style={
        playlist.type === "album"
          ? { gridTemplateColumns: "16px 1fr 38px" }
          : {}
      }
    >
      <button
        className="absolute opacity-0 bg-transparent left-[5px] z-20 w-8 h-8 border-none group-hover:opacity-100"
        onClick={() => {
          changeTrack(
            PLAYLIST.indexOf(playlist),
            playlist.playlistData.indexOf(song)
          );
                  if (thisSong && isPlaying) {
                    setIsPlaying(false);
                  } else {
                    setIsPlaying(true);
                  }
        }}
      >
        <Icon value={thisSong ? "pause" : "play"} svgClass="fill-[#fff]" />
      </button>

      {thisSong ? (
        <img
          className="w-[14px] h-[14px] group-hover:opacity-0"
          src={Playgif}
          alt="playing now"
        />
      ) : (
        <p className="group-hover:opacity-0">{song.index}</p>
      )}

      {playlist.type === "album" ? "" : <img src={song.songimg} img="song" />}

      <span>
        <p className="text-base font-bold text-white">{song.songName}</p>
        <p className="text-sm text-[#B3B3B3]">{song.songArtist}</p>
      </span>

      <p>{song.trackTime}</p>
    </div>
  );
}

export default Track;
