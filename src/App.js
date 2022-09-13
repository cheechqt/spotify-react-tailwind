import { useEffect, useRef } from "react";

import TheHeader from "./containers/TheHeader";
import TheMain from "./containers/TheMain";
import TheRegistration from "./containers/TheRegistration";
import TheSidebar from "./containers/TheSidebar";
import TheSidebarOverlay from "./components/TheSidebar/TheSidebarOverlay";
import BaseToast from "./components/Base/BaseToast";
import BasePopover from "./components/Base/BasePopover";

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

  const showPopover = (title, description, target) => {
    popoverRef.current.show(title, description, target);
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
      <div className="flex flex-grow overflow-auto">
        <TheSidebar showPopover={showPopover} />
        <TheSidebarOverlay />
        <div className="flex-1 overflow-auto" ref={contentWrapperRef}>
          <TheHeader />
          <TheMain
            toggleScrolling={toggleScrolling}
            showToast={showToast}
          />
        </div>
      </div>
      <TheRegistration />
      {<BaseToast ref={toastRef} />}
      <BasePopover ref={popoverRef} />
    </>
  );
}

export default App;
