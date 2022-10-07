import { useState } from "react";
import { AuthState } from "Context";
import BaseButton from "components/Base/BaseButton";
import UserProfileMenu from "./UserProfileMenu";

function UserProfileButtons() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [titleHiddenClasses, setTitleHiddenClasses] =
    useState("opacity-0 hidden");

  const { user } = AuthState();
  const name = user?.displayName;
  const userImage = user?.photoURL;

  function handleOpenMenu() {
    setMenuIsOpen(true);
  }

  function handleCloseMenu() {}

  function handleShowTitle() {
    const classes = "";
    setTitleHiddenClasses(classes);
  }

  function handleHideTitle() {
    const classes = "opacity-0";
    setTitleHiddenClasses(classes);
  }

  if (!name) {
    return (
      <div>
        <BaseButton classes="text-gray-400 hover:text-white" path="/signup">
          Sign up
        </BaseButton>
        <BaseButton primary path="/login">
          Log in
        </BaseButton>
      </div>
    );
  }

  return (
    <div className="flex gap-4 justify-end items-center">
      <button className="text-sm font-bold text-center border border-[#727272] border-opacity-70 shrink-0 text-white rounded-[500px] py-2 px-4 m-2 hover:scale-105 hover:border-white">
        Upgrade
      </button>
      <button
        className="w-12 h-12 cursor-pointer p-2 gap-2 bg-[#242424] hover:bg-[#2a2a2a] rounded-full cursor-pointer"
        onClick={handleOpenMenu}
        onMouseEnter={handleShowTitle}
        onMouseLeave={handleHideTitle}
      >
        <div
          className="w-8 h-8 cursor-pointer"
          title={name}
          onMouseEnter={handleShowTitle}
          onMouseLeave={handleHideTitle}
        >
          <img
            className="w-full h-full rounded-full cursor-pointer"
            src={userImage}
            alt={name}
            onMouseEnter={handleShowTitle}
            onMouseLeave={handleHideTitle}
          />
        </div>
      </button>
      {menuIsOpen && <UserProfileMenu />}

      <div
        className={`bg-[#2a2a2a] px-1.5 py-0.5  rounded absolute transition delay-300  ${titleHiddenClasses}`}
      >
        <p className="text-xs text-white opacity-90 ">{name}</p>
      </div>
    </div>
  );
}

export default UserProfileButtons;
