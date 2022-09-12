const BaseButton = ({
  primary,
  classes,
  children: label,
  onClick: handleOnClick,
}) => {
  const typeClasses = primary
    ? "bg-white hover:bg-gray text-[#2e2e2e]"
    : "text-white";

  return (
    <button
      className={`font-semibold leading-5 py-[9px] px-[17px] sm:px-[38px] rounded-full hover:scale-105 ${typeClasses} ${classes}`}
      onClick={handleOnClick}
    >
      {label}
    </button>

    //  <button className="bg-white text-[#2e2e2e] ">
    //    Log In
    //  </button>
    //      <button className=" text-[#fff] ">
    //     Sign Up
    //   </button>
  );
};

export default BaseButton;
