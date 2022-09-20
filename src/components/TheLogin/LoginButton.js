import googleIcon from "components/img/google.svg";
import facebookIcon from "components/img/facebook-squared.svg";
import appleIcon from "components/img/apple.svg";

function LoginButton({
  children: label,
  bgAndTextClasses = "text-[#ffffff] bg-[#fff]",
  classes,
  icon,
}) {
  const screenWidth = window.innerWidth > 700;
  let img = "";
  if (screenWidth) {
    img =
      icon === "facebook" ? (
        <img src={facebookIcon} className="pr-1 pb-[2px]" />
      ) : icon === "google" ? (
        <img src={googleIcon} className="pr-4 pb-[2px]" />
      ) : icon === "apple" ? (
        <img src={appleIcon} className="pr-1 pb-[2px]" />
      ) : (
        ""
      );
  }
  return (
    <button
      className={`flex justify-center items-center text-sm ${bgAndTextClasses} font-bold tracking-widest border-[1px] border-[#909090] uppercase w-full my-1 hover:border-[#191919] py-[13px] px-[17px] rounded-full ${classes} cursor-auto`}
    >
      {img}
      {label}
    </button>
  );
}
// #3b5999
export default LoginButton;
