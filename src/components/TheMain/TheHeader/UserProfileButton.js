import BaseButton from "components/Base/BaseButton";
import { AuthState } from "Context";
import { signOut } from "firebase/auth";
import { auth } from "utils/firebase";

function UserProfileButton() {

  const { user } = AuthState();
  const name = user?.displayName;

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
    <div className="text-white">
      {name}
      <button className="text-white" onClick={handleSignOut}>
        LOG OUT
      </button>
    </div>
  );
}

export default UserProfileButton;
