import Playlist from "components/TheHome/Playlist";
import { PLAYLIST } from "data";

function CurrentTab({ type, toggleScrolling, showToast }) {
  return (
    <div>
      <div className="flex flex-wrap justify-between items-end gap-x-6 mb-[18px]">
        <div>
          <h2 className="text-2xl font-semibold hover:underline capitalize">
            <a href="/">{type}s</a>
          </h2>
        </div>
      </div>
      <div className="grid sm:grid-cols-playlists-mobile md:grid-cols-playlists-tablet lg:grid-cols-playlists-desktop gap-5">
        {PLAYLIST.filter((playlist) => playlist.type === type).map(
          (playlist, arr) => {
            if (arr.length === 0) {
              return <div className="bg-[#121212] w-screen"></div>
            }
              return (
                <Playlist
                  {...playlist}
                  key={playlist.title}
                  toggleScrolling={toggleScrolling}
                  showToast={showToast}
                />
              );
          }
        )}
      </div>
    </div>
  );
}

export default CurrentTab;
