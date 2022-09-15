import { Link } from "react-router-dom";

const BaseButton = ({
  primary,
  classes,
  children: label,
  onClick: handleOnClick,
  path,
}) => {
  const typeClasses = primary
    ? "bg-white hover:bg-gray-100 text-[#2e2e2e]"
    : "text-white";

  if (path) {
    return (
      <Link
        className={`font-semibold leading-5 py-[14px] px-[17px] sm:px-[38px] rounded-full hover:scale-105 ${typeClasses} ${classes}`}
        onClick={handleOnClick}
        to={path}
      >
        {label}
      </Link>
    );
  }

  return (
    <button
      className={`font-semibold leading-5 py-[14px] px-[17px] sm:px-[38px] rounded-full hover:scale-105 ${typeClasses} ${classes}`}
      onClick={handleOnClick}
    >
      {label}
    </button>
  );
};

export default BaseButton;
