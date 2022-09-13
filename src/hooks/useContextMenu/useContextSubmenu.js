import { useEffect, useRef, useState } from "react";

const useContextSubmenu = (items, menuItemRef, closePreviousIfOpen) => {
  const [state, setState] = useState({
    isOpen: false,
    positionClasses: "",
  });

  const closeMenuTimer = useRef(null);

  const handleOpen = () => {
    closePreviousIfOpen(startCloseTimer);

    setState({
      isOpen: true,
      positionClasses: getPositionClasses(),
    });
  };

  const handleClose = () => {
    setState({
      isOpen: false,
      positionClasses: "",
    });
  };

  const startCloseTimer = () => {
    closeMenuTimer.current = setTimeout(() => {
      handleClose();
    }, 300);
  };

  const stopCloseTimer = () => {
    clearTimeout(closeMenuTimer.current);
  };

  useEffect(() => stopCloseTimer);

  const getPositionClasses = () => {
    return `${getPositionX()} ${getPositionY()}`;
  };

  const getPositionY = () => {
    const windowHeight = window.innerHeight;
    const menuItem = menuItemRef.current;
    const menuHeight = menuItem.offsetHeight * items.length;
    const menuItemBottomCoordY = menuItem.getBoundingClientRect().bottom;
    const shouldMoveUp = menuHeight > windowHeight - menuItemBottomCoordY;

    return shouldMoveUp ? "bottom-0" : "top-0";
  };

  const getPositionX = () => {
    const menuItem = menuItemRef.current;
    const menuWidth = menuItem.offsetWidth;
    const windowWidth = window.innerWidth;
    const menuCoordRightX = menuItem.getBoundingClientRect().right;
    const shoudMoveLeft = menuWidth > windowWidth - menuCoordRightX;

    return shoudMoveLeft ? "right-full" : "left-full";
  };

  return {
    handleOpen,
    items,
    ...state,
  };
};

export default useContextSubmenu;
