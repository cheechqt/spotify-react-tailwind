import { useEffect, useRef, useState } from "react";

import { ChevronRightIcon } from "@heroicons/react/24/outline";
import PlaylistContextMenu from "./PlaylistContextMenu";

const PlaylistContextMenuItemWithSubmenu = ({
  children: label,
  subMenuItems,
  onMouseEnter: closePreviousSubmenuIfOpen,
}) => {
  const [menuState, setMenuState] = useState({
    isOpen: false,
    positionClasses: "",
  });

  const menuItemRef = useRef(null);
  const closeMenuTimer = useRef(null);
  const bgClass = menuState.isOpen ? "bg-[#3e3e3e]" : "hover:bg-[#3e3e3e]";

  const getMenuPositionY = () => {
    const windowHeight = window.innerHeight;
    const menuItem = menuItemRef.current;
    const menuHeight = menuItem.offsetHeight * subMenuItems.length;
    const menuItemBottomCoordY = menuItem.getBoundingClientRect().bottom;
    const shouldMoveMenuUp = menuHeight > windowHeight - menuItemBottomCoordY;

    return shouldMoveMenuUp ? "bottom-0" : "top-0";
  };

  const getMenuPositionX = () => {
    const menuItem = menuItemRef.current;
    const menuWidth = menuItem.offsetWidth;
    const windowWidth = window.innerWidth;
    const menuCoordRightX = menuItem.getBoundingClientRect().right;
    const shoudMoveMenuLeft = menuWidth > windowWidth - menuCoordRightX;

    return shoudMoveMenuLeft ? "right-full" : "left-full";
  };

  const getMenuPositionClasses = () => {
    return `${getMenuPositionX()} ${getMenuPositionY()}`;
  };

  const handleOpenMenu = () => {
    closePreviousSubmenuIfOpen(startCloseMenuTimer);

    setMenuState({
      isOpen: true,
      positionClasses: getMenuPositionClasses(),
    });
  };

  const handleCloseMenu = () => {
    setMenuState({
      isOpen: false,
      positionClasses: "",
    });
  };

  const startCloseMenuTimer = () => {
    closeMenuTimer.current = setTimeout(() => {
      handleCloseMenu();
    }, 300);
  };

  const stopCloseMenuTimer = () => {
    clearTimeout(closeMenuTimer.current);
  };

  useEffect(() => stopCloseMenuTimer);

  return (
    <li className="relative" onMouseEnter={handleOpenMenu} ref={menuItemRef}>
      <button
        className={`w-full p-3 text-left hover:text-white cursor-default flex justify-between items-center ${bgClass}`}
      >
        {label} <ChevronRightIcon className="h-4 w-4" />
      </button>
      {menuState.isOpen && (
        <PlaylistContextMenu
          menuItems={subMenuItems}
          classes={`absolute ${menuState.positionClasses}`}
        />
      )}
    </li>
  );
};

export default PlaylistContextMenuItemWithSubmenu;
