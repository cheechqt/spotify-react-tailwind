import Button from "./Button";

function ButtonsGroup() {
  return (
    <div className="text-center w-full flex flex-col gap-2">
      <p className="text-sm font-bold block">To continue, log in to Spotify.</p>

      <Button icon="facebook" bgAndTextClasses="bg-[#3b5999] text-[#fff]">
        Continue with Facebook
      </Button>
      <Button icon="apple" bgAndTextClasses="bg-[#191919] text-[#fff]">
        Continue with Apple
      </Button>
      <Button icon="google" bgAndTextClasses="bg-[#fff] text-[#6a6a6a]">
        Continue with Google
      </Button>

      <div className="flex flex-row my-3">
        <hr className="flex-1 ml-[12px] mr-[20px] border-t-1 border-[#eeeeef] border"></hr>
        <span className="text-center text-xs font-bold">OR</span>
        <hr className="flex-1 ml-[20px] mr-[12px] border-t-1 border-[#eeeeef] border"></hr>
      </div>
    </div>
  );
}

export default ButtonsGroup;
