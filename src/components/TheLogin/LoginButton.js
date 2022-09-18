function LoginButton({
  children: label,
  bgAndTextClasses = "text-[#ffffff] bg-[#fff]",
  classes,
  icon,
}) {
  return (
    <button
      className={`text-sm ${bgAndTextClasses} font-bold tracking-widest border-[1px] border-[#909090] uppercase w-full my-1 hover:border-[#191919] py-[14px] px-[17px] rounded-full ${classes} cursor-auto`}
    >
      {icon}
      {label}
    </button>
  );
}
// #3b5999
export default LoginButton;
