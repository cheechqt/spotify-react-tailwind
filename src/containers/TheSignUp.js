import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import Form from "components/Base/BaseForm";
import { setUser } from "store/slices/userSlice";

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

  return <Form title="Sign up" handleClick={handleRegister} />;
}

export default TheSignUp;
