import { Route, Routes } from "react-router-dom";
import TheHeader from "components/TheHeader/TheHeader";
import CurrentTab from "components/TheLibrary/CurrentTab";

function Library({ showToast, toggleScrolling }) {
  return (
    <div className="bg-[#121212] text-white overflow-y-scroll overflow-x-hidden">
      <TheHeader tabButtons={true} />
      <div className="p-8 mb-[95px]">
        <Routes>
          <Route
            path="/library"
            element={
              <CurrentTab
                type="playlist"
                showToast={showToast}
                toggleScrolling={toggleScrolling}
              />
            }
          />
          <Route
            path="/library/podcasts"
            element={
              <CurrentTab
                type="podcast"
                showToast={showToast}
                toggleScrolling={toggleScrolling}
              />
            }
          />
          <Route
            path="/library/artists"
            element={
              <CurrentTab
                type="artist"
                showToast={showToast}
                toggleScrolling={toggleScrolling}
              />
            }
          />
          <Route
            path="/library/albums"
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
