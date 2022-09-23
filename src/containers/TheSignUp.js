import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "utils/firebase";

// import SignUpForm from "components/TheSignUp/SignUpForm";
import SignUpButton from "components/TheSignUp/SignUpButton";
import SignUpLogo from "components/TheSignUp/SignUpLogo";
import SignUpSeparator from "components/TheSignUp/SignUpSeparator";

import Input from "components/Base/BaseAuthInput";
import Checkbox from "components/Base/BaseCheckbox";
import SignUpFieldset from "components/TheSignUp/SignUpFieldset";
import SignUpFooter from "components/TheSignUp/SignUpFormFooter";
import { AuthState } from "../Context.js";

function TheSignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");

  const navigate = useNavigate();

  const handleSignUp = async () => {
    try {
      const result = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const { user } = AuthState();
      console.log(user);
      console.log(result);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="max-w-[450px] w-full mx-auto pb-[130px] px-[24px] md:px-0">
      <SignUpLogo />

      <div className="flex flex-col items-center">
        <SignUpButton
          icon="facebook"
          bgAndTextClasses="bg-[#3b5999] text-[#fff]"
        >
          Sign up with Facebook
        </SignUpButton>
        <SignUpButton
          icon="google"
          bgAndTextClasses="bg-[#fff] text-[#535353] border-2 border-[#191919]"
        >
          Sign up with Google
        </SignUpButton>
      </div>

      <SignUpSeparator />

      {/* <SignUpForm title="Sign up" handleClick={handleSignUp} /> */}
      <form>
        <h2 className="text-lg pb-4 text-center font-bold">
          Sign up with your email address
        </h2>
        <div className="pb-6">
          <Input
            label="What's your email?"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
          />
        </div>
        <div className="pb-6">
          <Input
            label="Confirm your email"
            type="email"
            value={confirmEmail}
            onChange={(e) => setConfirmEmail(e.target.value)}
            placeholder="Enter your email"
          />
        </div>
        <div className="pb-6">
          <Input
            label="Create a password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Create a password"
          />
        </div>
        <div className="pb-6">
          <Input
            label="What should we call you?"
            type="text"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter a profile name"
          />
        </div>

        <SignUpFieldset />

        <div className="pb-6">
          <Checkbox>
            I would prefer not to receive marketing messages from Spotify
          </Checkbox>
        </div>
        <div className="pb-6">
          <Checkbox>
            Share my registration data with Spotify's content providers for
            marketing purposes.
          </Checkbox>
        </div>

        <SignUpFooter handleClick={handleSignUp} />
      </form>
    </div>
  );
}

export default TheSignUp;
