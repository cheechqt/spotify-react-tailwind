import { createContext, useContext, useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./utils/firebase";

const Spotify = createContext();

const SpotifyContext = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) setUser(user);
      else setUser(null);
    });
  }, []);

  return (
    <Spotify.Provider
      value={{
        user,
      }}
    >
      {children}
    </Spotify.Provider>
  );
};

export default SpotifyContext;

export const AuthState = () => {
  return useContext(Spotify);
};
