import useInput from "hooks/useInput";
import Input from "components/Base/BaseAuthInput";
import FormFooter from "./FormFooter";

function Form({ handleClick }) {
  const email = useInput("", { isEmpty: true, isEmail: true });
  const password = useInput("", { isEmpty: true, minLength: 7 });

  return (
    <div className="flex flex-col items-start w-full max-w-[466px]">
      <form className="flex flex-col items-start w-full max-w-[466px]">
        <div className="pb-4 w-full">
          <Input
            label="Email address or username"
            type="email"
            value={email.value}
            onChange={(e) => email.onChange(e)}
            onBlur={(e) => email.onBlur(e)}
            placeholder="Email address or username"
            errorMessage={
              email.isDirty && email.isEmpty
                ? "You need to enter your email."
                : email.isDirty &&
                  email.emailError &&
                  "This email is invalid. Make sure it's written like example@email.com"
            }
          />
        </div>
        <div className="pb-4 w-full">
          <Input
            label="Password"
            type="password"
            value={password.value}
            onChange={(e) => password.onChange(e)}
            onBlur={(e) => password.onBlur(e)}
            placeholder="Password"
            errorMessage={
              password.isDirty && password.isEmpty
                ? "You need to enter a password."
                : password.isDirty &&
                  password.minLengthError &&
                  "Your password is too short."
            }
          />
        </div>
      </form>

      <a href="/" className="hover:underline text-base cursor-text">
        Forgot your password?
      </a>

      <FormFooter handleClick={() => handleClick(email.value, password.value)} />
    </div>
  );
}

export default Form;
