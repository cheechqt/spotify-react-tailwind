import { Link } from "react-router-dom";
import { SpotifyState } from "Context";
import BaseButton from "components/Base/BaseButton";
import TheFooterNotSignedUp from "components/TheFooter/TheFooterNotSignedUp";
import Player from "components/TheFooter/TheFooterPlayer/Player";

function TheFooter({ currentPath }) {
  const { user } = SpotifyState();
  const name = user?.displayName;

  if (currentPath === "/login" || currentPath === "/signup") return "";

  if (!name) {
    return (
      <Link
        className="bg-gradient-to-r from-[#af2896] to-[#509bf5] text-white py-4 px-8 justify-between items-center flex flex-wrap gap-y-2 gap-x-6"
        to="/signup"
      >
        <TheFooterNotSignedUp />
        <BaseButton primary classes="font-semibold">
          Sign up free
        </BaseButton>
      </Link>
    );
  }

  return <Player />;
}

export default TheFooter;
