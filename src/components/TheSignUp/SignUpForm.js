import { useState } from "react";

import Input from "components/Base/BaseAuthInput";
import Checkbox from "components/Base/BaseCheckbox";
import SignUpFieldset from "./SignUpFieldset";
import SignUpFormFooter from "./SignUpFormFooter";

function SignUpForm({ handleClick }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");
  const [name, setName] = useState("");

  return (
    <div>
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
            value={name}
            onChange={(e) => setName(e.target.value)}
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
      </form>
      <SignUpFormFooter handleClick={() => handleClick(email, password)} />
    </div>
  );
}

export default SignUpForm;
