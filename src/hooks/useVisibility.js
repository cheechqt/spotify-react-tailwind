import { useEffect, useRef, useState } from "react";
import { MIN_VISIBILITY_WIDTH } from "constants/constants";
import { debounce } from "utils/debounce";

function isCurrentWindowWidthSmall() {
  return window.innerWidth < MIN_VISIBILITY_WIDTH;
}

function isCurrentWindowWidthBig() {
  return window.innerWidth >= MIN_VISIBILITY_WIDTH;
}

function useVisibility(changeVisibilityCallback) {
  const [isSmallScreen, setIsSmallScreen] = useState(isCurrentWindowWidthSmall);
  const changeWidthTimer = useRef();

  useEffect(() => {
    function handleResize() {
      if (!screenHasBecomeSmall() && !screenHasBecomeBig()) return;

      changeVisibilityCallback();
      clearTimeout(changeWidthTimer.current);

      changeWidthTimer.current = setTimeout(() => {
        setIsSmallScreen(isCurrentWindowWidthSmall);
      }, 300);
    }

    const debounceResize = debounce.bind(null, handleResize, 300);

    window.addEventListener("resize", debounceResize);
    return () => window.removeEventListener("resize", debounceResize);
  });

  function screenHasBecomeSmall() {
    return isCurrentWindowWidthSmall() && !isSmallScreen;
  }

  function screenHasBecomeBig() {
    return isCurrentWindowWidthBig() && isSmallScreen;
  }

  return {
    isSmallScreen,
  };
}

export default useVisibility;
