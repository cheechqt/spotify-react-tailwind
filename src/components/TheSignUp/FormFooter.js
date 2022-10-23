import BaseButton from "components/Base/BaseButton";
import { Link } from "react-router-dom";

function FormFooter({ handleClick, disableSubmit }) {
  return (
    <div className="flex flex-col justify-center items-center text-center">
      <p className="text-xs pb-3">
        By clicking on sign-up, you agree to Spotify's&nbsp;
        <a
          href="https://www.spotify.com/kg-ru/legal/end-user-agreement/"
          target="_blank"
          rel="noreferrer"
          className="text-[#1DB954] underline hover:text-[#3edf76]"
        >
          Terms and Conditions of Use.
        </a>
        .
      </p>
      <p className="text-xs pb-3">
        To learn more about how Spotify collects, uses, shares and protects your
        personal data, please see&nbsp;
        <a
          href="https://www.spotify.com/kg-ru/legal/privacy-policy/"
          target="_blank"
          rel="noreferrer"
          className="text-[#1DB954] underline hover:text-[#3edf76]"
        >
          Spotify's Privacy Policy
        </a>
        .
      </p>
      <BaseButton
        disabled={disableSubmit}
        classes="text-base text-[#000] font-bold border w-[155px] bg-[#1ed760] hover:bg-[#1fdf65] whitespace-nowrap mb-6 mt-0 px-12 py-4"
        onClick={handleClick}
      >
        Sign up
      </BaseButton>
      <p className="text-base pb-3">
        Have an account?&nbsp;
        <Link
          to="/login"
          className="text-[#1DB954] underline hover:text-[#3edf76]"
        >
          Log in
        </Link>
        .
      </p>
    </div>
  );
}

export default FormFooter;
