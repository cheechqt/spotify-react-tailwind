import {
  HomeIcon,
  MagnifyingGlassIcon,
  ViewColumnsIcon,
  PlusCircleIcon,
  HeartIcon,
} from "@heroicons/react/24/outline";
import NavItem from "./NavItem";
import { MIN_DESKTOP_WIDTH } from "constants/constants";

const activeNavItemClasses =
  "flex items-center text-white bg-[#282828] mx-2 px-4 py-2 rounded";

const navItemClasses =
  "flex items-center hover:text-white  mx-2 px-4 py-2 rounded duration-300";

const TheNav = ({ showPopover }) => {
  const navItems = [
    {
      label: "Home",
      classes: activeNavItemClasses,
      icon: <HomeIcon className="w-6 h-6" />,
      path: "/",
    },
    {
      label: "Search",
      classes: navItemClasses,
      icon: <MagnifyingGlassIcon className="w-6 h-6" />,
      path: "/search",
    },
    {
      label: "Your Library",
      classes: `${navItemClasses} mb-6`,
      icon: <ViewColumnsIcon className="w-6 h-6" />,
      path: "/library",
      action: (target) => {
        showPopover(
          "Enjoy Your Library",
          "Log in to see saved songs, podcasts, artists and playlist in Your Library.",
          target
        );
      },
    },
    {
      label: "Create Playlist",
      classes: navItemClasses,
      icon: <PlusCircleIcon className="w-6 h-6" />,
      action: (target) => {
        showPopover(
          "Create a playlist",
          "Log in to create and share playlist.",
          target
        );
      },
    },
    {
      label: "Liked Songs",
      classes: navItemClasses,
      icon: <HeartIcon className="w-6 h-6" />,
      action: (target) => {
        let offset = null;
        if (window.innerWidth >= MIN_DESKTOP_WIDTH) {
          const { top, right, height } = target.getBoundingClientRect();
          offset = {
            top: top - (height / 3) * 2,
            left: right + 130,
          };
        }
        showPopover(
          "Enjoy Your Liked Songs",
          "Log in to see all the songs you've liked in one easy playlist.",
          target,
          offset
        );
      },
    },
  ];

  return (
    <nav>
      {navItems.map(({ classes, icon, label, path, action }) => (
        <NavItem
          key={label}
          classes={classes}
          icon={icon}
          onClick={action}
          path={path}
        >
          {label}
        </NavItem>
      ))}
    </nav>
  );
};

export default TheNav;