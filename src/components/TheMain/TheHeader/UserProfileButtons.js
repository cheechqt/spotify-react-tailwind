import { useEffect, useRef, useState } from "react";
import { SpoityState } from "Context";
import BaseButton from "components/Base/BaseButton";
import UserProfileMenu from "./UserProfileMenu";
import useClickAway from "hooks/useClickAway/useClickAway";

function UserProfileButtons() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [titleClasses, setTitleClasses] = useState("opacity-0 hidden");
  const [hoverClasses, setHoverClasses] = useState("");
  const menuRef = useRef();

  const { user } = SpoityState();
  const name = user?.displayName;
  const userImage = user?.photoURL;

  function handleClose() {
    setMenuIsOpen(false);
    console.log('closed');
    
  }

  useClickAway(menuRef, handleClose, () => menuIsOpen);


  useEffect(() => {
    if (!menuIsOpen) return;

    function handleEsc(e) {
      if (e.key === "Escape") handleClose();
    }

    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  });

  function handleMouseEnter() {
    setHoverClasses("bg-[#2a2a2a]");
    setTitleClasses("");
  }

  function handleMouseLeave() {
    setHoverClasses("");
    setTitleClasses("opacity-0");
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
      <div className="relative">
        <button
          className={`w-12 h-12 cursor-pointer p-2 gap-2 bg-[#242424] rounded-full ${hoverClasses}`}
        >
          <figure className="w-8 h-8" title={name}>
            <img
              className="w-full h-full rounded-full"
              src={userImage}
              alt={name}
            />
          </figure>
        </button>
        <div
          className="absolute top-0 left-0 w-full h-full rounded-full cursor-pointer bg-transparent z-10"
          onClick={() => setMenuIsOpen(true)}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        ></div>
      </div>

      {menuIsOpen && <UserProfileMenu ref={menuRef} />}

      <div
        className={`absolute top-[54px] r-1 bg-[#2a2a2a] px-1.5 py-0.5  rounded  transition delay-300 ease-in ${titleClasses}`}
      >
        <p className="text-sm text-white opacity-90 ">{name}</p>
      </div>
    </div>
  );
}

export default UserProfileButtons;
