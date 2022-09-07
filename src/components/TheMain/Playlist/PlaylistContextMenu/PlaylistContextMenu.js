import { useEffect, useRef } from "react";
import PlaylistContextMenuItem from "./PlaylistContextMenuItem";

const PlaylistContextMenu = ({ classes, menuItems, handleClose }) => {
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickAway = (e) => {
      if (!menuRef.current.contains(e.target)) {
        handleClose();
      }
    };

    document.addEventListener("mousedown", handleClickAway);

    return () => {
      document.removeEventListener("mousedown", handleClickAway);
    };
  });

  return (
    <ul className={classes} ref={menuRef}>
      {menuItems.map(({ label, subMenuItems }) => (
        <PlaylistContextMenuItem key={label} subMenuItems={subMenuItems}>
          {label}
        </PlaylistContextMenuItem>
      ))}
    </ul>
  );
};

export default PlaylistContextMenu;
