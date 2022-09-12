import { ChevronRightIcon } from "@heroicons/react/24/outline";
import { useRef } from "react";
import useSubmenu from "../../../../hooks/useContextSubmenu";
import PlaylistContextMenu from "./PlaylistContextMenu";

const PlaylistContextMenuItemWithSubmenu = ({
  children: label,
  submenuItems,
  onMouseEnter: closePreviousSubmenuIfOpen,
}) => {
  const ref = useRef(null);
  const submenu = useSubmenu(submenuItems, ref, closePreviousSubmenuIfOpen);
  const bgClass = submenu.isOpen ? "bg-[#3e3e3e]" : "hover:bg-[#3e3e3e]";

  return (
    <li className="relative" onMouseEnter={submenu.handleOpen} ref={ref}>
      <button
        className={`w-full p-3 text-left hover:text-white cursor-default flex justify-between items-center ${bgClass}`}
      >
        {label} <ChevronRightIcon className="h-4 w-4" />
      </button>
      {submenu.isOpen && (
        <PlaylistContextMenu
          menuItems={submenu.items}
          classes={`absolute ${submenu.positionClasses}`}
        />
      )}
    </li>
  );
};

export default PlaylistContextMenuItemWithSubmenu;
