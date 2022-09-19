import BaseButton from "components/Base/BaseButton";

function SignUpFooter({ handleClick, email, password, name }) {
  return (
    <BaseButton
      classes="text-sm text-[#000] font-bold tracking-widest border w-full md:w-[125px] my-5 bg-[#1ed760] hover:bg-[#1fdf65] whitespace-nowrap my-[20px] md:my-0"
      onClick={() => handleClick(email, password)}
    >
      Sign up
    </BaseButton>
  );
}

export default SignUpFooter;
