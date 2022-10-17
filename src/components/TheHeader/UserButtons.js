import { useEffect, useRef, useState } from "react";
import useClickAway from "hooks/useClickAway/useClickAway";
import UserMenu from "./UserMenu";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/solid";

function UserButtons({ name, userImage }) {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const menuRef = useRef();

  function handleClose() {
    setMenuIsOpen(false);
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
  return (
    <div className="flex gap-4 justify-end items-center">
      <button className="text-sm font-bold text-center border border-[#727272] border-opacity-70 shrink-0 text-white rounded-[500px] py-[7px] px-4 m-2 hover:scale-105 hover:border-white hover:bg-black hover:bg-opacity-70">
        Upgrade
      </button>
      <div className="relative">
        <button
          className="flex gap-3  items-center cursor-pointer p-0.5 gap-2 bg-[#000] bg-opacity-70 rounded-full hover:bg-[#2a2a2a]"
          onClick={() => {
            setMenuIsOpen(true);
          }}
        >
          <figure className="w-8 h-8" title={name}>
            <img
              className="w-full h-full rounded-full"
              src={userImage}
              alt={name}
            />
          </figure>
          <span className="text-white text-sm font-bold">{name}</span>
          <span className="pr-2">
            {menuIsOpen ? (
              <ChevronUpIcon className="w-4 h-4 text-white" />
            ) : (
              <ChevronDownIcon className="w-4 h-4 text-white" />
            )}
          </span>
        </button>
      </div>

      {menuIsOpen && <UserMenu ref={menuRef} />}
    </div>
  );
}

export default UserButtons;
