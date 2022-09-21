import BaseLogo from "components/Base/BaseLogo";

function SignUpLogo() {
  return (
    <div className="pt-[40px] pb-[32px] flex flex-col justify-center items-center">
      <BaseLogo
        classes="text-black inline-block"
        sizeClass="md:w-[130px] w-[90px]"
      />
      <h2 className="mt-[32px] text-center text-3xl font-bold tracking-tighter">
        Sign up for free to start listening.
      </h2>
    </div>
  );
}

export default SignUpLogo;
