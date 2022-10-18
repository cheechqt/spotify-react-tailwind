import { Route, Routes } from "react-router-dom";
import TheHeader from "components/TheHeader/TheHeader";
import CurrentTab from "components/TheLibrary/CurrentTab";

function Library({ showToast, toggleScrolling }) {
  return (
    <div className="bg-[#121212] h-full text-white overflow-y-scroll overflow-x-hidden">
      <TheHeader tabButtons={true} />
      <div className="p-8 mb-[95px]">
        <Routes>
          <Route
            path="playlists"
            element={
              <CurrentTab
                type="playlist"
                showToast={showToast}
                toggleScrolling={toggleScrolling}
              />
            }
            end
          />
          <Route
            path="podcasts"
            element={
              <CurrentTab
                type="podcast"
                showToast={showToast}
                toggleScrolling={toggleScrolling}
              />
            }
          />
          <Route
            path="artists"
            element={
              <CurrentTab
                type="artist"
                showToast={showToast}
                toggleScrolling={toggleScrolling}
              />
            }
          />
          <Route
            path="albums"
            element={
              <CurrentTab
                type="album"
                showToast={showToast}
                toggleScrolling={toggleScrolling}
              />
            }
          />
        </Routes>
      </div>
    </div>
  );
}

export default Library;
