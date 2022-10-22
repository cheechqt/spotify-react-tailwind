import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

function SearchBar() {
  return (
    <form className=" relative max-w-[368px] w-full" role="search">
      <MagnifyingGlassIcon className="h-7 w-7 text-black absolute top-1.5 left-3" />
      <input
        placeholder="What do you want to listen to?"
        maxLength="80"
        className="text-black py-5 px-12 h-10 min-w-[273px] w-full border-0 rounded-full overflow-ellipsis text-sm leading-4"
      />
    </form>
  );
}

export default SearchBar;
