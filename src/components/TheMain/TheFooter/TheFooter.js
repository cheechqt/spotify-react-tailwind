import BaseButton from "../../Base/BaseButton";
import TheFooterSignupText from "./TheFooterSignupText";
import TheFooterPlayer from "./TheFooterPlayer/TheFooterPlayer";
import { Link } from "react-router-dom";
import { AuthState } from "Context";

function TheFooter() {
    const { user } = AuthState();
    const name = user?.displayName;

  if (!name) {
    return (
      <Link
        className="bg-gradient-to-r from-[#af2896] to-[#509bf5] text-white py-4 px-8 justify-between items-center flex flex-wrap gap-y-2 gap-x-6"
        to="/signup"
      >
        <TheFooterSignupText />
        <BaseButton primary classes="font-semibold">
          Sign up free
        </BaseButton>
      </Link>
    );
  }

  return <TheFooterPlayer/>;
}

export default TheFooter;
