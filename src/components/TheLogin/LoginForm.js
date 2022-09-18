import { useState } from "react";

import BaseButton from "components/Base/BaseButton";
import AuthInput from "components/Base/BaseAuthInput";
import BaseCheckBox from "./LoginRememberMe";

function LoginForm({ handleClick }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="flex flex-col items-start w-full max-w-[466px] px-2">
      <AuthInput
        label="Email address or username"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email address or username"
      />
      <AuthInput
        label="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        className="block text-base p-[14px] w-full rounded-[4px] border-[#878787] border"
      />

      <a href="/" className="pt-3 hover:underline text-base cursor-text">
        Forgot your password?
      </a>

      <div className="flex flex-col md:flex-row justify-between items-start mt-[32px] md:mb-[20px] mb-0 w-full">
        <BaseCheckBox>Remember me</BaseCheckBox>

        <BaseButton
          classes="text-sm text-[#000] font-bold tracking-widest border-[1px] uppercase w-full md:w-[125px] my-5 bg-[#1ed760] hover:bg-[#1fdf65] whitespace-nowrap my-[20px] md:my-0"
          onClick={() => handleClick(email, password)}
        >
          Log in
        </BaseButton>
      </div>
    </div>
  );
}

export default LoginForm;
