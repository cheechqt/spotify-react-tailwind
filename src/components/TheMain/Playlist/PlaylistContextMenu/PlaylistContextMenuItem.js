import { useRef, useState } from "react";

import { ChevronRightIcon } from "@heroicons/react/24/outline";
import PlaylistContextMenu from "./PlaylistContextMenu";

const PlaylistContextMenuItem = ({ children: label, subMenuItems }, ref) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [menuPositionClassX, setMenuPositionClassX] = useState("left-full");
  const [menuPositionClassY, setMenuPositionClassY] = useState("top-0");

  const menuItemRef = useRef(null);

  const updateMenuPositionY = () => {
    const windowHeight = window.innerHeight;
    const menuItem = menuItemRef.current;
    const menuHeight = menuItem.offsetHeight * subMenuItems.length;
    const menuItemBottomCoordY = menuItem.getBoundingClientRect().bottom;
    const shouldMoveMenuUp = menuHeight > windowHeight - menuItemBottomCoordY;

    return shouldMoveMenuUp ? "bottom-0" : "top-0";
  };

  const updateMenuPositionX = () => {
    const menuItem = menuItemRef.current;
    const menuWidth = menuItem.offsetWidth;
    const windowWidth = window.innerWidth;
    const menuCoordRightX = menuItem.getBoundingClientRect().right;
    const shoudMoveMenuLeft = menuWidth > windowWidth - menuCoordRightX;

    return shoudMoveMenuLeft ? "right-full" : "left-full";
  };

  const handleOpenMenu = () => {
    setIsMenuOpen(true);
    setMenuPositionClassX(updateMenuPositionX());
    setMenuPositionClassY(updateMenuPositionY());
  };

  const handleCloseMenu = () => {
    setIsMenuOpen(false);
  };

  if (subMenuItems) {
    return (
      <li
        className="relative"
        onMouseEnter={handleOpenMenu}
        onMouseLeave={handleCloseMenu}
        ref={menuItemRef}
      >
        <button className="w-full p-3 text-left hover:text-white hover:bg-[#3e3e3e] cursor-default flex justify-between items-center">
          {label} <ChevronRightIcon className="h-4 w-4" />
        </button>
        {isMenuOpen && (
          <PlaylistContextMenu
            menuItems={subMenuItems}
            classes={`bg-[#282828] text-[#eaeaea] text-sm p-1 rounded shadow-xl cursor-default absolute ${menuPositionClassX} ${menuPositionClassY}`}
          />
        )}
      </li>
    );
  }

  return (
    <li>
      <button className="w-full p-3 text-left hover:text-white hover:bg-[#3e3e3e] cursor-default ">
        {label}
      </button>
    </li>
  );
};

export default PlaylistContextMenuItem;
