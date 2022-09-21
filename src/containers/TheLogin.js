import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import Form from "components/TheLogin/LoginForm";
import { setUser } from "store/slices/userSlice";
import LoginLogo from "components/TheLogin/LoginLogo";
import LoginButtonsGroup from "components/TheLogin/LoginButtonsGroup";
import LoginFooter from "components/TheLogin/LoginFooter";

function TheLogin() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = (email, password) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        dispatch(
          setUser({
            email: user.email,
            id: user.uid,
            token: user.accessToken,
          })
        );
        navigate("/");
      })
      .catch();
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
