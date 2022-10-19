import { useNavigate } from "react-router-dom";
import {
  Bars3Icon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/solid";
import UserProfileButtons from "components/TheHeader/HeaderRight";
import SearchBar from "components/TheHeader/SearchBar";
import TabButtons from "components/TheHeader/TabButtons";

function TheHeader({ search = false, tabButtons = false }) {
  const navigate = useNavigate();

  return (
    <header className="sticky z-50 top-0 bg-transparent flex-1 flex items-center justify-between sm:px-[32px] px-[13px] py-4">
      <div className="flex gap-3.5">
        <a
          className="mr-[8px] text-[#969696] p-1 -ml-1.5 inline-block lg:hidden"
          href="#sidebar"
        >
          <Bars3Icon className="h-6 w-6" />
        </a>
        <button
          className="relative bg-black rounded-full p-5 text-[#fff] cursor-default"
          onClick={() => {
            navigate(-1);
            console.log();
          }}
        >
          <ChevronLeftIcon className="h-7 w-7 absolute top-1.5 left-1" />
        </button>
        <button
          className="relative bg-black rounded-full p-5 w-1 h-1 text-[#fff] cursor-default"
          onClick={() => {
            navigate(1);
          }}
        >
          <ChevronRightIcon className="h-7 w-7 absolute top-1.5 left-1.5" />
        </button>
        {search && <SearchBar />}
        {tabButtons && <TabButtons />}
      </div>
      <UserProfileButtons />
    </header>
  );
}

export default TheHeader;
