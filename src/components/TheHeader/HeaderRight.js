import { SpotifyState } from "Context";
import BaseButton from "components/Base/BaseButton";
import UserButtons from "./UserButtons";

function UserProfileButtons() {


  const { user } = SpotifyState();
  const name = user?.displayName;
  const userImage = user?.photoURL;



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

  return <UserButtons name={name} userImage={userImage} />
}

export default UserProfileButtons;
