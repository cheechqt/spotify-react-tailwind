import { Link } from "react-router-dom";

function LoginFooter() {
  return (
    <div className=" w-full">
      <hr className="border-[1px] my-5"></hr>
      <div className="flex flex-col text-center justify-center items-center pb-2">
        <p className="font-bold text-lg pb-5">Don't have an account?</p>
        <Link
          to="/signup"
          className="bg-[#fff] text-[#6a6a6a] border-[1px] border-[#909090] hover:border-[#191919] text-sm uppercase py-3 px-4 rounded-full w-full tracking-widest font-bold"
        >
          sign up for Spotify
        </Link>
      </div>
    </div>
  );
}

export default LoginFooter;
