import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "utils/firebase";

// import Form from "components/TheLogin/LoginForm";
import LoginLogo from "components/TheLogin/LoginLogo";
import LoginButtonsGroup from "components/TheLogin/LoginButtonsGroup";
import LoginFooter from "components/TheLogin/LoginFooter";

// form inputs
import Checkbox from "components/Base/BaseCheckbox";
import BaseButton from "components/Base/BaseButton";
import Input from "components/Base/BaseAuthInput";


function TheLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const result = await signInWithEmailAndPassword(auth, email, password);
      console.log(result);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col h-screen overflow-x-hidden">
      <LoginLogo />

      <div className="max-w-[450px] w-full mx-auto p-3 md:px-0">
        <LoginButtonsGroup />

        {/* <Form handleClick={handleLogin} /> */}

        <div className="flex flex-col items-start w-full max-w-[466px]">
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

          <a href="/" className="hover:underline text-base cursor-text">
            Forgot your password?
          </a>

          <div className="flex flex-col md:flex-row justify-between items-start mt-4  md:mb-[20px] mb-0 w-full">
            <Checkbox classes="pb-5">Remember me</Checkbox>

            <BaseButton
              classes="text-sm text-[#000] font-bold tracking-widest border-[1px] uppercase w-full md:w-[125px] bg-[#1ed760] hover:bg-[#1fdf65] whitespace-nowrap md:my-0"
              onClick={handleLogin}
            >
              Log in
            </BaseButton>
          </div>
        </div>

        <LoginFooter />
      </div>
    </div>
  );
}

export default TheLogin;
