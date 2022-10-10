import googleIcon from "components/img/google.svg";
import facebookIcon from "components/img/facebook.svg";

function Button({
  children: label,
  bgAndTextClasses = "text-[#ffffff] bg-[#fff]",
  classes,
  icon,
}) {
  const img =
    icon === "facebook" ? (
      <img src={facebookIcon} className="pr-4" />
    ) : icon === "google" ? (
      <img src={googleIcon} className="pr-4" />
    ) : (
      ""
    );

  return (
    <button
      className={` flex justify-center items-center font-bold border-[1px] border-[#909090] w-full my-1 mb-[18px] mt-0 hover:border-[#191919] hover:scale-105 py-[9px] px-[24px] rounded-full w-[312px] ${classes} ${bgAndTextClasses} cursor-auto`}
    >
      {img}
      {label}
    </button>
  );
}
export default Button;
