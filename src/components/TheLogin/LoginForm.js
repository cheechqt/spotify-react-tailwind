import { useState } from "react";

import BaseButton from "components/Base/BaseButton";
import Input from "components/Base/BaseAuthInput";
import Checkbox from "../Base/BaseCheckbox";

function LoginForm({ handleClick }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="flex flex-col items-start w-full max-w-[466px] px-2">
      <Input
        label="Email address or username"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email address or username"
      />
      <Input
        label="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />

      <a href="/" className="pt-3 hover:underline text-base cursor-text">
        Forgot your password?
      </a>

      <div className="flex flex-col md:flex-row justify-between items-start mt-[32px] md:mb-[20px] mb-0 w-full">
        <Checkbox>Remember me</Checkbox>

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
