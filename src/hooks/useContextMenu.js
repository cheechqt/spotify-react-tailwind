import { useEffect, useLayoutEffect, useRef, useState } from "react";

const clickPosition = { x: null, y: null };

const useContextMenu = () => {
  const [isContextMenuOpen, setIsContextMenuOpen] = useState(false);
  const contextMenuRef = useRef(null);

  const updateContextMenuHorizontalPosition = () => {
    const MenuWidth = contextMenuRef.current.offsetWidth;
    const shoudMoveLeft = MenuWidth > window.innerWidth - clickPosition.x;

    contextMenuRef.current.style.left = shoudMoveLeft
      ? `${clickPosition.x - MenuWidth}px`
      : `${clickPosition.x}px`;
  };

  const updateContextMenuVerticalPosition = () => {
    const MenuHeight = contextMenuRef.current.offsetHeight;
    const shoudMoveUp = MenuHeight > window.innerHeight - clickPosition.y;

    contextMenuRef.current.style.top = shoudMoveUp
      ? `${clickPosition.y - MenuHeight}px`
      : `${clickPosition.y}px`;
  };

  const updateContextMenuPosition = () => {
    updateContextMenuHorizontalPosition();
    updateContextMenuVerticalPosition();
  };

  useLayoutEffect(() => {
    if (isContextMenuOpen) updateContextMenuPosition();
  });

  const handleContextMenuOpen = (e) => {
    e.preventDefault();
    setIsContextMenuOpen(true);

    clickPosition.x = e.clientX;
    clickPosition.y = e.clientY;
  };

  const handleContextMenuClose = () => {
    setIsContextMenuOpen(false);
  };

  useEffect(() => {
    if (!isContextMenuOpen) return;

    function handleClickAway(e) {
      if (!contextMenuRef.current.contains(e.target)) handleContextMenuClose();
    }
    function handleEsc(e) {
      if (e.key === "Escape") handleContextMenuClose();
    }

    document.addEventListener("mousedown", handleClickAway);
    document.addEventListener("keydown", handleEsc);

    return () => {
      document.removeEventListener("mousedown", handleClickAway);
      document.removeEventListener("keydown", handleEsc);
    };
  });

  return {
    handleContextMenuOpen,
    isContextMenuOpen,
    contextMenuRef,
  };
};

export default useContextMenu;
