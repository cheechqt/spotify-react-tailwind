import { useEffect, useLayoutEffect, useState } from "react";
import { Link } from "react-router-dom";
import useMenu from "hooks/useContextMenu/useContextMenu";
import { SpotifyState } from "Context";

import PlaylistCover from "../TheHome/PlaylistCover";
import PlaylistDescription from "../TheHome/PlaylistDescription";
import PlaylistTitle from "../TheHome/PlaylistTitle";
import PlaylistContextMenu from "../TheHome/PlaylistContextMenu/PlaylistContextMenu";
import PlayButton from "components/Base/BasePlayButton";

const Playlist = ({
  name,
  classes,
  imgUrl,
  title,
  artist,
  toggleScrolling,
  showToast,
  index,
  link,
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
    <div className="group relative overflow-hidden rounded-mb">
      <Link to={`/playlist/${link}`}>
        <div
          className={`p-4 rounded-mb  duration-200 relative bg-red h-full ${classes} ${bgClasses}`}
          onContextMenu={menu.handleOpen}
          onTouchStart={menu.handleOpen}
        >
          <PlaylistCover url={imgUrl} />
          <PlaylistTitle title={title} />
          <PlaylistDescription description={artist} />
          {menu.isOpen && (
            <PlaylistContextMenu
              menuItems={menu.items}
              classes="fixed divide-y divide-[#3e3e3e]"
              ref={menu.ref}
            />
          )}
        </div>
      </Link>
      <div
        className="bg-transparent w-11 h-11 rounded-full absolute z-10 right-[25px] top-[124px]"
        onClick={(e) => {
          e.stopPropagation();
          changeTrack(index, 0);
        }}
      >
        {" "}
        {name && (
          <PlayButton
            isThisPlaying={isThisPlaying}
            opacityClasses={true}
            classes="absolute top-0 right-0 bg-[#1cb955] z-20 w-11 h-11"
            svgClass="h-6 w-6"
          />
        )}
      </div>
    </div>
  );
};

export default Playlist;
