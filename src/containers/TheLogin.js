import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "utils/firebase";

import Form from "components/TheLogin/Form";
import Logo from "components/TheLogin/Logo";
import ButtonsGroup from "components/TheLogin/ButtonsGroup";
import Footer from "components/TheLogin/Footer";

function TheLogin() {
  
  const navigate = useNavigate();

  const handleLogin = async (email, password) => {
    try {
      const result = await signInWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col h-screen overflow-x-hidden">
      <Logo />

      <div className="max-w-[450px] w-full mx-auto p-3 md:px-0">
        <ButtonsGroup />

        <Form handleClick={handleLogin} />

        <Footer />
      </div>
    </div>
  );
}

export default TheLogin;
