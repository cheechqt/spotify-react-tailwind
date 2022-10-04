import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "utils/firebase";

import Form from "components/TheLogin/LoginForm";
import LoginLogo from "components/TheLogin/LoginLogo";
import LoginButtonsGroup from "components/TheLogin/LoginButtonsGroup";
import LoginFooter from "components/TheLogin/LoginFooter";

function TheLogin() {
  const navigate = useNavigate();

  const handleLogin = async (email, password) => {
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

        <Form handleClick={handleLogin} />

        <LoginFooter />
      </div>
    </div>
  );
}

export default TheLogin;
