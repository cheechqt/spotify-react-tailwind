import { useState } from "react";

import Input from "components/Base/BaseAuthInput";
import LoginFormFooter from "./LoginFormFooter";

function LoginForm({ handleClick }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="flex flex-col items-start w-full max-w-[466px]">
      <form className="flex flex-col items-start w-full max-w-[466px]">
        <div className="pb-4 w-full">
          <Input
            label="Email address or username"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email address or username"
          />
        </div>
        <div className="pb-4 w-full">
          <Input
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
        </div>
      </form>

      <a href="/" className="hover:underline text-base cursor-text">
        Forgot your password?
      </a>

      <LoginFormFooter handleClick={() => handleClick(email, password)} />
    </div>
  );
}

export default LoginForm;
