import { useState } from "react";

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

const Playlist = ({ classes, coverUrl, title, description }) => {
  const [isContextMenuOpen, setIsContextMenuOpen] = useState(false);

  const handleContextMenuOpen = (e) => {
    e.preventDefault();
    setIsContextMenuOpen(true);
  };

  const handleContextMenuClose = (e) => {
    setIsContextMenuOpen(false);
  };

  return (
    <a
      href="/"
      className={`p-4 rounded-mb bg-[#181818] hover:bg-[#272727] duration-200 group relative ${classes}`}
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
          classes="bg-[#282828] text-[#eaeaea] text-sm p-1 rounded shadow-x1 absolute top-9 left-9 cursor-default whitespace-nowrap divide-y divide-[#3e3e3e]"
          handleClose={handleContextMenuClose}
        />
      )}
    </a>
  );
};

export default Playlist;
