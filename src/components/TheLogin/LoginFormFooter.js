import BaseButton from "components/Base/BaseButton";
import Checkbox from "components/Base/BaseCheckbox";

function LoginFormFooter({ handleClick }) {
  return (
    <div className="flex flex-col md:flex-row justify-between items-start mt-4  md:mb-[20px] mb-0 w-full">
      <Checkbox classes="pb-5">Remember me</Checkbox>

      <BaseButton
        classes="text-sm text-[#000] font-bold tracking-widest border-[1px] uppercase w-full md:w-[125px] bg-[#1ed760] hover:bg-[#1fdf65] whitespace-nowrap md:my-0"
        onClick={handleClick}
      >
        Log in
      </BaseButton>
    </div>
  );
}

export default LoginFormFooter;
