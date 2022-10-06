import BaseButton from "components/Base/BaseButton";
import { AuthState } from "Context";
import { signOut } from "firebase/auth";
import { auth } from "utils/firebase";

function UserProfileButtons() {
  const { user } = AuthState();
  const name = user?.displayName;
  const userImage = user?.photoURL;

  function handleSignOut() {
    signOut(auth);
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
      <button className="w-12 h-12 cursor-pointer p-2 gap-2 bg-[#242424] hover:bg-[#2a2a2a] rounded-full">
        <figure className="w-8 h-8">
          <img
            className="w-full h-full rounded-full"
            src={userImage}
            alt={name}
          />
        </figure>
      </button>
      {name}
      <button className="text-white" onClick={handleSignOut}>
        LOG OUT
      </button>
    </div>
  );
}

export default UserProfileButtons;
