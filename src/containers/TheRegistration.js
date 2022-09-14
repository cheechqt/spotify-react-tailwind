import BaseButton from "../components/Base/BaseButton";
import TheRegistrationInfo from "../components/TheRegistration/TheRegistrationInfo";

function TheRegistration() {
  return (
    <a
      className="bg-gradient-to-r from-[#af2896] to-[#509bf5] text-white py-4 px-8 justify-between items-center flex flex-wrap gap-y-2 gap-x-6"
      href="/"
    >
      <TheRegistrationInfo />
      <BaseButton primary>Sign up free</BaseButton>
    </a>
  );
}

export default TheRegistration;
