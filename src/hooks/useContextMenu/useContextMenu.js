import { useEffect, useRef, useState } from "react";
import useClickAway from "../useClickAway/useClickAway";
import usePosition from "./useContextMenuPosition";

function useContextMenu(items) {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);
  const move = usePosition(ref, isOpen); // position

  useClickAway(ref, handleClose, () => isOpen);

  useEffect(() => {
    if (!isOpen) return;

    function handleEsc(e) {
      if (e.key === "Escape") handleClose();
    }

    return () => document.removeEventListener("keydown", handleEsc);
  });

  function handleOpen(e) {
    e.preventDefault();
    move(e.clientX, e.clientY); // position
    setIsOpen(true);
  }

  function handleClose() {
    setIsOpen(false);
  }

  return {
    handleOpen,
    handleClose,
    isOpen,
    ref,
    items,
  };
}

export default useContextMenu;
