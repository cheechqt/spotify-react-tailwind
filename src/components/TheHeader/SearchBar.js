import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

function SearchBar() {
 return (
   <div className="relative max-w-[368px]">
     <MagnifyingGlassIcon className="h-6 w-6 text-black absolute top-2 left-3" />
     <input
       placeholder="What do you want to listen to?"
       maxLength="80"
       className="text-black py-[6px] px-12 h-7 w-full border-none rounded-full overflow-ellipsis text-sm leading-4"
     />
   </div>
 );
};

export default SearchBar