import { useEffect, useRef, useState } from "react";
import usePosition from "./useContextMenuPosition";

const useContextMenu = (items) => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);
  const move = usePosition(ref, isOpen); // position

  useEffect(() => {
    if (!isOpen) return;

    function handleClickAway(e) {
      if (!ref.current.contains(e.target)) handleClose();
    }
    function handleEsc(e) {
      if (e.key === "Escape") handleClose();
    }

    document.addEventListener("mousedown", handleClickAway);
    document.addEventListener("keydown", handleEsc);

    return () => {
      document.removeEventListener("mousedown", handleClickAway);
      document.removeEventListener("keydown", handleEsc);
    };
  });

  const handleOpen = (e) => {
    e.preventDefault();
    move(e.clientX, e.clientY); // position
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return {
    handleOpen,
    isOpen,
    ref,
    items,
  };
};

export default useContextMenu;
