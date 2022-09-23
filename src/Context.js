import { createContext, useContext, useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./utils/firebase";

const Auth = createContext();

const AuthContext = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) setUser(user);
      else setUser(null);
    });
  }, []);

  return (
    <Auth.Provider
      value={{
        user,
      }}
    >
      {children}
    </Auth.Provider>
  );
};

export default AuthContext;

export const AuthState = () => {
  return useContext(Auth);
};
