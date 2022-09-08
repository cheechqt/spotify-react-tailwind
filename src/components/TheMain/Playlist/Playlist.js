import { useEffect, useRef, useState } from "react";

import PlaylistButtonPlay from "./PlaylistButtonPlay";
import PlaylistCover from "./PlaylistCover";
import PlaylistDescription from "./PlaylistDescription";
import PlaylistTitle from "./PlaylistTitle";
import PlaylistContextMenu from "./PlaylistContextMenu/PlaylistContextMenu";

const menuItems = [
  {
    label: "Add to Your Library",
  },
  {
    label: "Share",
    subMenuItems: [
      {
        label: "Copy link to playlist",
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

const clickPosition = { x: null, y: null };

const Playlist = ({ classes, coverUrl, title, description }) => {
  const [isContextMenuOpen, setIsContextMenuOpen] = useState(false);
  const contextMenuRef=useRef(null)

  const bgClasses = isContextMenuOpen
    ? "bg-[#272727]"
    : "bg-[#181818] hover:bg-[#272727]";
  
  const updateContextMenuPosition = () => {
    contextMenuRef.current.style.top = `${clickPosition.y}px`;
    contextMenuRef.current.style.left = `${clickPosition.x}px`;
  }
  
  useEffect(() => {
    if (isContextMenuOpen) {
      updateContextMenuPosition()
    }
  })

  const handleContextMenuOpen = (e) => {
    e.preventDefault();
    setIsContextMenuOpen(true);

    clickPosition.x = e.clientX;
    clickPosition.y = e.clientY;
  };

  const handleContextMenuClose = () => {
    setIsContextMenuOpen(false);
  };

  return (
    <a
      href="/"
      className={`p-4 rounded-mb  duration-200 group relative ${classes} ${bgClasses}`}
      onContextMenu={handleContextMenuOpen}
      onClick={(e) => e.preventDefault()}
    >
      <div className="relative">
        <PlaylistCover url={coverUrl} />
        <PlaylistButtonPlay />
      </div>
      <PlaylistTitle title={title} />
      <PlaylistDescription description={description} />
      {isContextMenuOpen && (
        <PlaylistContextMenu
          menuItems={menuItems}
          classes="bg-[#282828] text-[#eaeaea] text-sm p-1 rounded shadow-x1 fixed cursor-default whitespace-nowrap divide-y divide-[#3e3e3e] z-10"
          onClose={handleContextMenuClose}
          ref={contextMenuRef}
        />
      )}
    </a>
  );
};

export default Playlist;
