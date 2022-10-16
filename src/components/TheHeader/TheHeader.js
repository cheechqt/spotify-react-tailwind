import {
  Bars3Icon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/outline";
import UserProfileButtons from "./UserProfileButtons";
import SearchBar from "./SearchBar";
import TabButtons from "./TabButtons";

function TheHeader({ search = false, tabButtons = false }) {
  return (
    <header
      className={`sticky z-10 top-0 bg-[#070707] flex-1 flex items-center justify-between  sm:pl-[32px] pl-[13px] pr-1 py-4`}
    >
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
      {search && <SearchBar />}
      {tabButtons && <TabButtons />}
      </div>
      <UserProfileButtons />
    </header>
  );
}

export default TheHeader;
