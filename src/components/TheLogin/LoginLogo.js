import BaseLogo from "components/Base/BaseLogo";

function LoginLogo() {
  return (
    <div className="mb-3 p-3 w-full text-center after:border-b-0  after:border after:border-[#dadadb] after:block">
      <BaseLogo
        classes="text-black inline-block pb-2"
        sizeClass="md:w-[184px] w-[140px]"
      />
    </div>
  );
}

export default LoginLogo;
