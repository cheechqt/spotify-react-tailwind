import { createContext, useContext, useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./utils/firebase";
import { PLAYLIST } from "data";

const Spotify = createContext();

const SpotifyContext = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false)
  const [trackData, setTrackData] = useState({
    trackKey: [0, 0],
    track: PLAYLIST[0].playlistData[0].link,
    trackName: PLAYLIST[0].playlistData[0].songName,
    trackImg: PLAYLIST[0].playlistData[0].songimg,
    trackArtist: PLAYLIST[0].playlistData[0].songArtist,
  });

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else setUser(null);
    });
  });

  function changeTrack(playlistIndex, trackIndex = 0) {
    setTrackData({
      trackKey: [playlistIndex, trackIndex],
      track: PLAYLIST[playlistIndex].playlistData[trackIndex].link,
      trackName: PLAYLIST[playlistIndex].playlistData[trackIndex].songName,
      trackImg: PLAYLIST[playlistIndex].playlistData[trackIndex].songimg,
      trackArtist: PLAYLIST[playlistIndex].playlistData[trackIndex].songArtist,
    });
  }

  return (
    <Spotify.Provider
      value={{
        user,
        setUser,
        trackData,
        changeTrack,
        isPlaying,
        setIsPlaying
      }}
    >
      {children}
    </Spotify.Provider>
  );
};

export default SpotifyContext;

export const SpotifyState = () => {
  return useContext(Spotify);
};
