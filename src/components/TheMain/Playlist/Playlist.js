import { useEffect, useLayoutEffect, useRef, useState } from "react";

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
      {
        label: "Embed playlist 1",
      },
      {
        label: "Embed playlist 2",
      },
      {
        label: "Embed playlist 3",
      },
      {
        label: "Embed playlist 4",
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

const Playlist = ({
  classes,
  coverUrl,
  title,
  description,
  toggleScrolling,
}) => {
  const [isContextMenuOpen, setIsContextMenuOpen] = useState(false);
  const contextMenuRef = useRef(null);

  const bgClasses = isContextMenuOpen
    ? "bg-[#272727]"
    : "bg-[#181818] hover:bg-[#272727]";

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
    toggleScrolling(!isContextMenuOpen);

    if (isContextMenuOpen) {
      updateContextMenuPosition();
    }
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

    function handleClickAway(event) {
      if (!contextMenuRef.current.contains(event.target)) {
        handleContextMenuClose();
      }
    }
    function handleEsc(event) {
      if (event.keyCode === 27) {
        handleContextMenuClose();
      }
    }

    document.addEventListener("mousedown", handleClickAway);
    document.addEventListener("keydown", handleEsc);

    return () => {
      document.removeEventListener("mousedown", handleClickAway);
      document.removeEventListener("keydown", handleEsc);
    };
  });

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
          ref={contextMenuRef}
        />
      )}
    </a>
  );
};

export default Playlist;
