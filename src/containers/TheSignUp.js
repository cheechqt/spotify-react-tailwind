import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, setUser } from "utils/firebase";

import Form from "components/TheSignUp/Form";
import Button from "components/TheSignUp/Button";
import Logo from "components/TheSignUp/Logo";
import Separator from "components/TheSignUp/Separator";

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
        photoURL: "https://i.pravatar.cc/50",
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
      <Logo />

      <div className="flex flex-col items-center">
        <Button
          icon="facebook"
          bgAndTextClasses="bg-[#3b5999] text-[#fff]"
        >
          Sign up with Facebook
        </Button>
        <Button
          icon="google"
          bgAndTextClasses="bg-[#fff] text-[#535353] border-2 border-[#191919]"
        >
          Sign up with Google
        </Button>
      </div>

      <Separator />

      <Form handleClick={handleSignUp} />
    </div>
  );
}

export default TheSignUp;
