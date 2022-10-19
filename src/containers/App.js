import { useEffect, useRef } from "react";
import { Route, Routes, useLocation } from "react-router-dom";

import TheSignUp from "./TheSignUp";
import TheLogin from "./TheLogin";
import TheSearch from "containers/main/TheSearch";
import TheLibrary from "containers/main/TheLibrary";
import TheHome from "containers/main/TheHome";
import TheSidebar from "containers/main/TheSidebar";
import TheFooter from "containers/main/TheFooter";
import BaseToast from "components/Base/BaseToast";
import BasePopover from "components/Base/BasePopover/BasePopover";
import ThePlaylist from "./main/ThePlaylist";

function App() {
  const toastRef = useRef();
  const popoverRef = useRef();

  const contentWrapperRef = useRef();
  let isScrollingEnabled = true;

  const router = useLocation();
  const currentPath = router.pathname;
  const bgColor =
    currentPath === "/login"
      ? "bg-white"
      : currentPath === "/signup"
      ? "bg-white"
      : "bg-transparent";

  useEffect(() => {
    const contentWrapper = contentWrapperRef.current;

    contentWrapper.addEventListener("wheel", handleScrolling);
    return () => contentWrapper.addEventListener("wheel", handleScrolling);
  });

  const showToast = (message) => {
    toastRef.current.show(message);
  };

  const showPopover = (title, description, target, offset) => {
    popoverRef.current.show(title, description, target, offset);
  };

  const toggleScrolling = (isEnabled) => {
    isScrollingEnabled = isEnabled;
  };

  const handleScrolling = (e) => {
    if (isScrollingEnabled) return;

    e.preventDefault();
    e.stopPropagation();
  };
  return (
    <>
      <div className={`flex flex-grow overflow-auto ${bgColor}`}>
        <TheSidebar showPopover={showPopover} currentPath={currentPath} />
        <div className="flex-1 overflow-auto" ref={contentWrapperRef}>
          <Routes>
            <Route
              path="/"
              element={
                <TheHome
                  toggleScrolling={toggleScrolling}
                  showToast={showToast}
                />
              }
            />
            <Route path="/signup" element={<TheSignUp />} />
            <Route path="/login" element={<TheLogin />} />
            <Route path="/search" element={<TheSearch />} />
            <Route
              path="/library/*"
              element={
                <TheLibrary
                  showToast={showToast}
                  toggleScrolling={toggleScrolling}
                />
              }
            />
            <Route path="/playlist/:path" element={<ThePlaylist />} />
          </Routes>
        </div>
      </div>
      <TheFooter currentPath={currentPath} />
      <BaseToast ref={toastRef} />
      <BasePopover ref={popoverRef} />
    </>
  );
}

export default App;
