import { Route, Routes } from "react-router-dom";

import TheSignUp from "./TheSignUp";
import TheLogin from "./TheLogin";
import TheSearch from "containers/TheSearch";
import TheLibrary from "containers/TheLibrary";
import TheHome from "components/TheMain/TheHome/TheHome";
import { useEffect, useRef } from "react";
import TheSidebar from "./TheSidebar";
import TheHeader from "components/TheMain/TheHeader/TheHeader";
import TheFooter from "components/TheMain/TheFooter/TheFooter";
import BaseToast from "components/Base/BaseToast";
import BasePopover from "components/Base/BasePopover/BasePopover";

function App() {
    const toastRef = useRef();
    const popoverRef = useRef();

    const contentWrapperRef = useRef();
    let isScrollingEnabled = true;

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
      <div className="flex flex-grow overflow-auto bg-[#121212]">
        <TheSidebar showPopover={showPopover} />
        <div className="flex-1 overflow-auto" ref={contentWrapperRef}>
          <TheHeader />
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
            <Route path="/library" element={<TheLibrary />} />
          </Routes>
        </div>
      </div>
      <TheFooter />
      <BaseToast ref={toastRef} />
      <BasePopover ref={popoverRef} />
    </>
  );
}

export default App;
