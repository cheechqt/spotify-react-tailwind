import { SpotifyState } from "Context";
import Playlist from "./Playlist/Playlist";
import { PLAYLIST } from "data";

function TheHome({ toggleScrolling, showToast }) {
  const { user } = SpotifyState();
  const name = user?.displayName;

  return (
    <main className="text-white relative">
      <div className="h-[275px] bg-gradient-to-b from-[#1f1f1f] to-[#121212] absolute w-full"></div>
      <div className="relative pt-[24px] pb-[48px] px-[32px] space-y-9  max-w-screen-5xl">
        <div>
          <div className="flex flex-wrap justify-between items-end gap-x-6 mb-[18px]">
            <div>
              <h2 className="text-2xl font-semibold hover:underline capitalize">
                <a href="/">Good afternoon</a>
              </h2>
            </div>
            <a
              className="uppercase text-xs font-semibold tracking-widest hover:underline text-[#b3b3b3] leading-6"
              href="/"
            >
              See all
            </a>
          </div>
          <div className="grid sm:grid-cols-playlists-mobile md:grid-cols-playlists-tablet lg:grid-cols-playlists-desktop gap-5">
            {PLAYLIST.map((playlist) => {
              return (
                <Playlist
                  {...playlist}
                  key={playlist.title}
                  toggleScrolling={toggleScrolling}
                  showToast={showToast}
                />
              );
            })}
          </div>
        </div>
        <div>
          <div className="flex flex-wrap justify-between items-end gap-x-6 mb-[18px]">
            <div>
              <h2 className="text-2xl font-semibold hover:underline capitalize">
                <a href="/">Made For {name}</a>
              </h2>
            </div>
            <a
              className="uppercase text-xs font-semibold tracking-widest hover:underline text-[#b3b3b3] leading-6"
              href="/"
            >
              See all
            </a>
          </div>
          <div className="grid sm:grid-cols-playlists-mobile md:grid-cols-playlists-tablet lg:grid-cols-playlists-desktop gap-5">
            {PLAYLIST.map((playlist) => {
              return (
                <Playlist
                  {...playlist}
                  key={playlist.title}
                  toggleScrolling={toggleScrolling}
                  showToast={showToast}
                />
              );
            })}
          </div>
        </div>
      </div>
    </main>
  );
}

export default TheHome;
