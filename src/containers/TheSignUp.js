import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { setUser } from "store/slices/userSlice";
import SignUpForm from "components/TheSignUp/SignUpForm";
import BaseLogo from "components/Base/BaseLogo";
import SignUpButton from "components/TheSignUp/SignUpButton";
import SignUpFooter from "components/TheSignUp/SignUpFooter";

function TheSignUp() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRegister = (email, password) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        updateProfile(auth.currentUser, {
          displayName: "Jane Q. User",
          photoURL: "https://example.com/jane-q-user/profile.jpg",
        });
        dispatch(
          setUser({
            email: user.email,
            id: user.uid,
            token: user.accessToken,
          })
        );
        console.log(user);
        navigate("/");
      })
      .catch((error) => alert(error));
  };

  return (
    <div className="max-w-[450px] w-full mx-auto pb-[130px] px-[24px] md:px-0">
      <div className="pt-[40px] pb-[32px] flex flex-col justify-center items-center">
        <BaseLogo
          classes="text-black inline-block"
          sizeClass="md:w-[130px] w-[90px]"
        />
        <h2 className="mt-[32px] text-center text-3xl font-bold tracking-tighter">
          Sign up for free to start listening.
        </h2>
      </div>
      <div className="flex flex-col items-center">
        <SignUpButton bgAndTextClasses="bg-[#3b5999] text-[#fff]">
          Sign up with Facebook
        </SignUpButton>
        <SignUpButton bgAndTextClasses="bg-[#fff] text-[#535353] border-2 border-[#191919]">
          Sign up with Google
        </SignUpButton>
      </div>
      <div className="flex flex-row items-center w-[85%] mt-3 mx-auto mb-4 mt-0">
        <hr className="w-[42%] ml-[12px] mr-[20px] border-t-1 border-[#eeeeef] border"></hr>
        <span className="text-center text-large text-base font-light">or</span>
        <hr className="w-[42%] ml-[20px] mr-[12px] border-t-1 border-[#eeeeef] border"></hr>
      </div>
      <SignUpForm title="Sign up" handleClick={handleRegister} />
    </div>
  );
}

export default TheSignUp;
