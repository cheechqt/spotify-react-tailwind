import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { setUser } from "store/slices/userSlice";
import SignUpForm from "components/TheSignUp/SignUpForm";
import SignUpButton from "components/TheSignUp/SignUpButton";
import SignUpLogo from "components/TheSignUp/SignUpLogo";
import SignUpSeparator from "components/TheSignUp/SignUpSeparator";

function TheSignUp() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRegister = (email, password, name) => {
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
      
      <SignUpForm title="Sign up" handleClick={handleRegister} />
    </div>
  );
}

export default TheSignUp;
