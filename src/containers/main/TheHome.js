import { SpotifyState } from "Context";
import TheHeader from "components/TheHeader/TheHeader";
import Playlist from "components/TheHome/Playlist/Playlist";
import { PLAYLIST } from "data";

function TheHome({ toggleScrolling, showToast }) {
  const { user } = SpotifyState();
  const name = user?.displayName;

  return (
    <div className="flex-1 overflow-auto">
      <TheHeader />
      <main className="text-white relative">
        <div className="h-[275px] bg-gradient-to-b from-[#1f1f1f] to-[#121212] absolute w-full"></div>
        <div className="relative bg-[#121212] pt-[24px] pb-[48px] px-[32px] space-y-9  max-w-screen-5xl">
          <div>
            <div className="flex flex-wrap justify-between items-end gap-x-6 mb-[18px]">
              <div>
                <h2 className="text-2xl font-semibold hover:underline capitalize">
                  <a href="/">Good afternoon</a>
                </h2>
              </div>
            </div>
            <div className="grid sm:grid-cols-playlists-mobile md:grid-cols-playlists-tablet lg:grid-cols-playlists-desktop gap-5">
              {PLAYLIST.slice(0, 8).map((playlist) => {
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
            </div>
            <div className="grid sm:grid-cols-playlists-mobile md:grid-cols-playlists-tablet lg:grid-cols-playlists-desktop gap-5">
              {PLAYLIST.slice(-8)
                .reverse()
                .map((playlist) => {
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
    </div>
  );
}

export default TheHome;
