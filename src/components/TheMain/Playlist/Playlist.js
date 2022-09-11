import { useEffect, useLayoutEffect, useState } from "react";
import useContextMenu from "../../../hooks/useContextMenu";

import PlaylistButtonPlay from "./PlaylistButtonPlay";
import PlaylistCover from "./PlaylistCover";
import PlaylistDescription from "./PlaylistDescription";
import PlaylistTitle from "./PlaylistTitle";
import PlaylistContextMenu from "./PlaylistContextMenu/PlaylistContextMenu";

const generateMenuItems = (isAlternate = false) => {
  return [
    {
      label: "Add to Your Library",
    },
    {
      label: "Share",
      subMenuItems: [
        {
          label: isAlternate ? "Copy Spotify URL" : "Copy link to playlist",
          classes: "min-w-[150px]",
        },
        {
          label: "Embed playlist",
        },
      ],
    },
    {
      label: "About recommendations",
    },
    {
      label: "Open in Desktop app",
    },
  ];
};

const Playlist = ({
  classes,
  coverUrl,
  title,
  description,
  toggleScrolling,
}) => {
  const [menuItems, setMenuItems] = useState(generateMenuItems());

  const {
    handleContextMenuOpen: handleMenuOpen,
    isContextMenuOpen: isMenuOpen,
    contextMenuRef: menuRef,
  } = useContextMenu();

  useLayoutEffect(() => toggleScrolling(!isMenuOpen));

  useEffect(() => {
    const handleAltKeydown = (e) => {
      if (!isMenuOpen) return;
      if (e.key === "Alt") {
        setMenuItems(generateMenuItems(true));
        e.preventDefault();
      }
    };
    const handleAltKeyup = ({ key }) => {
      if (key === "Alt") setMenuItems(generateMenuItems());
    };

    document.addEventListener("keydown", handleAltKeydown);
    document.addEventListener("keyup", handleAltKeyup);

    return () => {
      document.removeEventListener("keydown", handleAltKeydown);
      document.removeEventListener("keyup", handleAltKeyup);
    };
  });

  const bgClasses = isMenuOpen
    ? "bg-[#272727]"
    : "bg-[#181818] hover:bg-[#272727]";

  return (
    <a
      href="/"
      className={`p-4 rounded-mb  duration-200 group relative ${classes} ${bgClasses}`}
      onContextMenu={handleMenuOpen}
      onClick={(e) => e.preventDefault()}
    >
      <div className="relative">
        <PlaylistCover url={coverUrl} />
        <PlaylistButtonPlay />
      </div>
      <PlaylistTitle title={title} />
      <PlaylistDescription description={description} />
      {isMenuOpen && (
        <PlaylistContextMenu
          menuItems={menuItems}
          classes="fixed divide-y divide-[#3e3e3e]"
          ref={menuRef}
        />
      )}
    </a>
  );
};

export default Playlist;
