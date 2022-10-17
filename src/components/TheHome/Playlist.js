import { useEffect, useLayoutEffect, useState } from "react";
import useMenu from "hooks/useContextMenu/useContextMenu";
import { SpotifyState } from "Context";

import PlaylistCover from "./PlaylistCover";
import PlaylistDescription from "./PlaylistDescription";
import PlaylistTitle from "./PlaylistTitle";
import PlaylistContextMenu from "./PlaylistContextMenu/PlaylistContextMenu";
import PlaylistButtonPlay from "./PlaylistButtonPlay";

const Playlist = ({
  classes,
  imgUrl,
  title,
  artist,
  toggleScrolling,
  showToast,
  index,
}) => {
  const generateMenuItems = (isAlternate = false) => {
    return [
      {
        label: "Add to Your Library",
        action: () => {
          menu.handleClose();
          document.querySelector("nav a:nth-child(4)").click();
        },
      },
      {
        label: "Share",
        submenuItems: [
          {
            label: isAlternate ? "Copy Spotify URL" : "Copy link to playlist",
            classes: "min-w-[150px]",
            action: () => {
              navigator.clipboard.writeText(title).then(() => {
                menu.handleClose();
                showToast(title);
              });
            },
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

  const { changeTrack, trackData } = SpotifyState();

  const [isThisPlaying, setIsThisPlaying] = useState(false);

  const [menuItems, setMenuItems] = useState(generateMenuItems);
  const menu = useMenu(menuItems);

  useEffect(() => {
    setIsThisPlaying(index === trackData.trackKey[0]);
  }, [index, trackData.trackKey]);

  useLayoutEffect(() => toggleScrolling(!menu.isOpen));

  useEffect(() => {
    const handleAltKeydown = (e) => {
      if (!menu.isOpen) return;
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

  const bgClasses = menu.isOpen
    ? "bg-[#272727]"
    : "bg-[#181818] hover:bg-[#272727]";

  return (
    <a
      href="/"
      className={`p-4 rounded-mb  duration-200 group relative ${classes} ${bgClasses}`}
      onContextMenu={menu.handleOpen}
      onTouchStart={menu.handleOpen}
      onClick={(e) => {
        e.preventDefault();
        changeTrack(index, 0);
      }}
    >
      <div className="relative">
        <PlaylistCover url={imgUrl} />
        <PlaylistButtonPlay isThisPlaying={isThisPlaying} />
      </div>
      <PlaylistTitle title={title} />
      <PlaylistDescription description={artist} />
      {menu.isOpen && (
        <PlaylistContextMenu
          menuItems={menu.items}
          classes="fixed divide-y divide-[#3e3e3e]"
          ref={menu.ref}
        />
      )}
    </a>
  );
};

export default Playlist;
