import { useEffect } from "react";

function useClickAway(ref, handle, shoudHandle = () => true) {
  useEffect(() => {
    // function handleClickAway(e) {
    //   if (!ref.current.contains(e.target)) handleClose();
    // }
    function handleMouseDown(e) {
      if (shoudHandle(e) && !ref.current.contains(e.target)) handle();
    }

    document.addEventListener("mousedown", handleMouseDown);
    return () => document.removeEventListener("mousedown", handleMouseDown);
  });
}

export default useClickAway;
