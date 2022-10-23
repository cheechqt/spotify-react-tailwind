import useInput from "hooks/useInput";
import Input from "components/Base/BaseAuthInput";
import Checkbox from "components/Base/BaseCheckbox";
import Fieldset from "./Fieldset";
import FormFooter from "./FormFooter";

function Form({ handleClick }) {
  const email = useInput("", { isEmpty: true, isEmail: true });
  const password = useInput("", { isEmpty: true, minLength: 7 });
  const confirmEmail = useInput("", {
    isEmpty: true,
    isConfirmEmail: email.value,
  });
  const name = useInput("", { isEmpty: true });

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
            value={email.value}
            onChange={(e) => email.onChange(e)}
            onBlur={(e) => email.onBlur(e)}
            placeholder="Enter your email."
            errorMessage={
              email.isDirty && email.isEmpty
                ? "You need to enter your email."
                : email.isDirty &&
                  email.emailError &&
                  "This email is invalid. Make sure it's written like example@email.com"
            }
          />
        </div>
        <div className="pb-6">
          <Input
            label="Confirm your email"
            type="email"
            value={confirmEmail.value}
            onChange={(e) => confirmEmail.onChange(e)}
            onBlur={(e) => confirmEmail.onBlur(e)}
            placeholder="Enter your email again."
            errorMessage={
              confirmEmail.isDirty && confirmEmail.isEmpty
                ? "You need to confirm your email."
                : confirmEmail.isDirty &&
                  confirmEmail.confirmEmailError &&
                  "The email addresses don't match."
            }
          />
        </div>
        <div className="pb-6">
          <Input
            label="Create a password"
            type="password"
            value={password.value}
            onChange={(e) => password.onChange(e)}
            onBlur={(e) => password.onBlur(e)}
            placeholder="Create a password."
            errorMessage={
              password.isDirty && password.isEmpty
                ? "You need to enter a password."
                : password.isDirty &&
                  password.minLengthError &&
                  "Your password is too short."
            }
          />
        </div>
        <div className="pb-6">
          <Input
            label="What should we call you?"
            type="text"
            value={name.value}
            onChange={(e) => name.onChange(e)}
            onBlur={(e) => name.onBlur(e)}
            placeholder="Enter a profile name."
            errorMessage={
              name.isDirty && name.isEmpty && "Enter a name for your profile."
            }
          />
        </div>

        <Fieldset />

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
      <FormFooter
        disableSubmit={!email.inputValid || !password.inputValid}
        handleClick={() => handleClick(email.value, password.value, name.value)}
      />
    </div>
  );
}

export default Form;
