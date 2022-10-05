import { useEffect, useRef } from "react";

import TheHeader from "../components/TheMain/TheHeader/TheHeader";
import TheHome from "../components/TheMain/TheHome/TheHome";
import TheFooter from "../components/TheMain/TheFooter/TheFooter";
import TheSidebar from "../components/TheMain/TheSidebar/TheSidebar";
import BaseToast from "../components/Base/BaseToast";
import BasePopover from "../components/Base/BasePopover/BasePopover";

function TheMain() {
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
          <TheHome toggleScrolling={toggleScrolling} showToast={showToast} />
        </div>
      </div>
      <TheFooter />
      <BaseToast ref={toastRef} />
      <BasePopover ref={popoverRef} />
    </>
  );
}

export default TheMain;
