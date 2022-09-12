import {
  Bars3Icon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/outline";
import BaseButton from "../components/Base/BaseButton";

function TheHeader() {
  return (
    <header className="sticky z-10 top-0 bg-[#070707] flex-1 flex items-center justify-between py-[10px] sm:px-[32px] px-[13px]">
      <div className="flex">
        <a
          className="mr-[8px] text-[#969696] p-1 -ml-1.5 inline-block lg:hidden"
          href="#sidebar"
        >
          <Bars3Icon className="h-6 w-6" />
        </a>
        <a className="mr-[8px] text-[#969696] p-1 cursor-not-allowed" href="/">
          <ChevronLeftIcon className="h-6 w-6" />
        </a>
        <a className="ml-[8px] text-[#969696] p-1 cursor-not-allowed" href="/">
          <ChevronRightIcon className="h-6 w-6" />
        </a>
      </div>
      <div className="">
        <BaseButton classes="text-gray-400 hover:text-white">Sign up</BaseButton>
        <BaseButton primary>Log in</BaseButton>
      </div>
    </header>
  );
}

export default TheHeader;
