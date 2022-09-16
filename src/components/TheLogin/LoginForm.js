import BaseButton from "components/Base/BaseButton";
import { useState } from "react";

function LoginForm({ handleClick }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="flex flex-col items-start w-full max-w-[466px] px-2">
      <label className="text-sm font-bold block pt-4 pb-2">
        Email address or username
      </label>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email address or username"
        className="block text-base p-[14px] w-full rounded-[4px] border-[#878787] border"
      />
      <label className="text-sm font-bold block pt-4 pb-2">Password</label>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        className="block text-base p-[14px] w-full rounded-[4px] border-[#878787] border"
      />
      <a href="/" className="pt-3 hover:underline text-base cursor-pointer">
        Forgot your password?
      </a>
      <div className="flex flex-col md:flex-row justify-between items-start mt-[32px] mb-[20px] w-full">
        <div>
          <div className="flex">
            <input
              className="scale-[1.2] cursor-pointer opacity-70"
              type="checkbox"
            />
            <label className="text-sm pl-3">Remember me</label>
          </div>
        </div>
        <BaseButton
          classes="text-sm text-[#000] font-bold tracking-widest border-[1px] uppercase w-full md:w-[125px] my-5 bg-[#1ed760] hover:bg-[#1ed760] hover:scale-100 whitespace-nowrap my-[20px] md:my-0"
          onClick={() => handleClick(email, password)}
        >
          <p>Log in</p>
        </BaseButton>
      </div>
    </div>
  );
}

export default LoginForm;
