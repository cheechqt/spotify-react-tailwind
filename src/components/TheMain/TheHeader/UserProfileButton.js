import BaseButton from "components/Base/BaseButton";
import { signOut } from "firebase/auth";
import { auth } from "utils/firebase";

function UserProfileButton({ isAuth, email }) {
  function handleSignOut() {
    signOut(auth);
  }

  if (!isAuth) {
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
    <div className="text-white">
      {email}
      <button className="text-white" onClick={handleSignOut}>
        LOG OUT
      </button>
    </div>
  );
}

export default UserProfileButton;
