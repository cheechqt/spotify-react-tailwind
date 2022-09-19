import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import Form from "components/TheLogin/LoginForm";
import { setUser } from "store/slices/userSlice";
import BaseLogo from "components/Base/BaseLogo";
import LoginButton from "components/TheLogin/LoginButton";

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
    <div className="flex flex-col justify-center items-center">
      <div className="my-6 w-full text-center after:border-b-0  after:border after:border-[#dadadb] after:block">
        <BaseLogo
          classes="text-black inline-block pb-4"
          sizeClass="md:w-[184px] w-[140px]"
        />
      </div>
      <div className="max-w-[466px] px-2 text-center">
        <p className="text-sm font-bold block pt-4 pb-1">
          To continue, log in to Spotify.
        </p>

        <LoginButton bgAndTextClasses="bg-[#3b5999] text-[#fff]">
          Continue with Facebook
        </LoginButton>
        <LoginButton bgAndTextClasses="bg-[#191919] text-[#fff]">
          Continue with Apple
        </LoginButton>
        <LoginButton bgAndTextClasses="bg-[#fff] text-[#6a6a6a]">
          Continue with Google
        </LoginButton>

        <div className="flex flex-row mt-3">
          <hr className="flex-1 ml-[12px] mr-[20px] border-t-1 border-[#eeeeef] border"></hr>
          <span className="text-center text-xs font-bold">OR</span>
          <hr className="flex-1 ml-[20px] mr-[12px] border-t-1 border-[#eeeeef] border"></hr>
        </div>
      </div>

      <Form handleClick={handleLogin} />

      <div className="max-w-[466px] px-2 w-full">
        <hr className="border-[1px] mb-5"></hr>
        <div className="flex flex-col text-center justify-center items-center pb-2">
          <p className="font-bold text-lg mb-4">Don't have an account?</p>
          <LoginButton bgAndTextClasses="bg-[#fff] text-[#6a6a6a]">
            sign up for Spotify
          </LoginButton>
        </div>
      </div>
    </div>
  );
}

export default TheLogin;
