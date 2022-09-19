function SignUpButton({
  children: label,
  bgAndTextClasses = "text-[#ffffff] bg-[#fff]",
  classes,
  icon,
}) {
  return (
    <button
      className={`font-bold border-[1px] border-[#909090] w-full my-1 mb-[18px] mt-0 hover:border-[#191919] hover:scale-105 py-[9px] px-[24px] rounded-full w-[312px] ${classes} ${bgAndTextClasses} cursor-auto`}
    >
      {icon}
      {label}
    </button>
  );
}
export default SignUpButton;
