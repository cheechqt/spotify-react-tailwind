import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, setUser } from "utils/firebase";

import SignUpForm from "components/TheSignUp/SignUpForm";
import SignUpButton from "components/TheSignUp/SignUpButton";
import SignUpLogo from "components/TheSignUp/SignUpLogo";
import SignUpSeparator from "components/TheSignUp/SignUpSeparator";

function TheSignUp() {
  const navigate = useNavigate();

  const handleSignUp = async (email, password, name) => {
    try {
      const result = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      await updateProfile(auth.currentUser, {
        displayName: name,
        photoURL: "https://fakeimg.pl/50x50/000000/?text=NO%20WAR",
      });
      const { uid } = result.user;
      setUser(uid, name, email);
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

      <SignUpForm handleClick={handleSignUp} />
    </div>
  );
}

export default TheSignUp;
