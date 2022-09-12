import { useEffect, useRef } from "react";

import TheHeader from "./containers/TheHeader";
import TheMain from "./containers/TheMain";
import TheRegistration from "./containers/TheRegistration";
import TheSidebar from "./containers/TheSidebar";
import TheSidebarOverlay from "./components/TheSidebar/TheSidebarOverlay";
import BaseToast from "./components/Base/BaseToast";

function App() {
  const toastRef = useRef();

  const contentWrapperRef = useRef(null);
  let isScrollingEnabled = true;

  const showToast = (message) => {
    toastRef.current.show(message);
  };

  const toggleScrolling = (isEnabled) => {
    isScrollingEnabled = isEnabled;
  };

  const handleScrolling = (e) => {
    if (isScrollingEnabled) return;

    e.preventDefault();
    e.stopPropagation();
  };

  useEffect(() => {
    const contentWrapper = contentWrapperRef.current;

    contentWrapper.addEventListener("wheel", handleScrolling);

    return () => contentWrapper.addEventListener("wheel", handleScrolling);
  });
  return (
    <>
      <div className="flex flex-grow overflow-auto">
        <TheSidebar />
        <TheSidebarOverlay />
        <div className="flex-1 overflow-auto" ref={contentWrapperRef}>
          <TheHeader />
          <TheMain toggleScrolling={toggleScrolling} showToast={showToast} />
        </div>
      </div>
      <TheRegistration />
      {<BaseToast ref={toastRef} />}
    </>
  );
}

export default App;
