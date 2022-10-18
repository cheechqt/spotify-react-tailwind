import Playlist from "components/TheHome/Playlist";
import { PLAYLIST } from "data";

function CurrentTab({ type, toggleScrolling, showToast }) {
  return (
    <div>
      <h2 className="text-2xl font-bold m-0">{type}s</h2>
      <div className="mt-6 grid md:gap-6 md:grid-cols-libraryTab gap-4 grid-cols-libraryTabSmall">
        {PLAYLIST.filter((playlist) => playlist.type === type).map(
          (playlist) => {
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
