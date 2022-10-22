import { useState } from "react";
import useVisibility from "hooks/useVisibility";

import googleIcon from "components/img/google.svg";
import facebookIcon from "components/img/facebook-squared.svg";
import appleIcon from "components/img/apple.svg";

function Button({
  children: label,
  bgAndTextClasses = "text-[#ffffff] bg-[#fff]",
  classes,
  icon,
}) {
  const { isSmallScreen } = useVisibility(toggleVisibilityImage);
  const [hiddenClass, setHiddenClass] = useState("");

  function getHiddenClasses() {
    return isSmallScreen ? "" : "hidden";
  }

  function toggleVisibilityImage() {
    setHiddenClass(getHiddenClasses);
  }

  const img =
    icon === "facebook" ? (
      <img
        src={facebookIcon}
        alt="icon"
        className={`pr-1 pb-[2px] ${hiddenClass}`}
      />
    ) : icon === "google" ? (
      <img
        src={googleIcon}
        alt="icon"
        className={`pr-4 pb-[2px] ${hiddenClass}`}
      />
    ) : icon === "apple" ? (
      <img
        src={appleIcon}
        alt="icon"
        className={`pr-1 pb-[2px] ${hiddenClass}`}
      />
    ) : (
      ""
    );

  return (
    <button
      className={`flex justify-center items-center text-sm ${bgAndTextClasses} font-bold tracking-widest border-[1px] border-[#909090] uppercase w-full hover:border-[#191919] py-[13px] px-[17px] rounded-full ${classes} cursor-auto`}
    >
      {img}
      {label}
    </button>
  );
}
// #3b5999
export default Button;
