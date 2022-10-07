import { signOut } from "firebase/auth";
import { auth } from "utils/firebase";
import UserProfileMenuItem from "./UserProfileMenuItem";

  function handleSignOut() {
    signOut(auth);
  }

const profileMenuItems = [
  {
    title: "Account",
    icon: true,
  },
  {
    title: "Profile",
    icon: false,
  },
  {
    title: "Upgrade to Premium",
    icon: true,
  },
  {
    title: "Support",
    icon: true,
  },
  {
    title: "Download",
    icon: true,
  },
  {
    title: "Settings",
    icon: false,
  },
  {
    title: "Log out",
    icon: false,
    classes: "before:border-t before:border-[#3E3E3E] before:block",
    onClick: handleSignOut,
  },
];
function UserProfileMenu({ isMenuOpen }) {
  return (
    <div className="z-50 absolute top-[90px] right-2 m-0 ">
      <div className="m-0 p-0 border-0">
        <div className="min-w-[196px]">
          <ul className="bg-[#282828] min-w-[160px] max-w-[360px] rounded-[4px] p-1 overflow-y-auto shadow-3xl list-none">
            {profileMenuItems.map((item) => {
              return (
                <UserProfileMenuItem
                  title={item.title}
                  icon={item.icon}
                  classes={item.classes}
                  onClick={item.onClick}
                />
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default UserProfileMenu;
