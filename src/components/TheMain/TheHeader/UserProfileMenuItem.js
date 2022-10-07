import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";

function UserProfileMenuItem({ title, icon, classes }) {
  return (
    <li className={`${classes} m-0 p-0 border-none hover:bg-`}>
      <button
        className={`bg-transparent border-none rounded-[2px] text-white text-opacity-90 no-underline w-full items-center flex gap-2 h-10 justify-between p-3 relative text-start cursor-default`}
      >
        <span className={`text-sm font-normal whitespace-nowrap flex-1`}>
          {title}
        </span>
        {icon && <ArrowTopRightOnSquareIcon className="h-4 w-4" />}
      </button>
    </li>
  );
}

export default UserProfileMenuItem;
