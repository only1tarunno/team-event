import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import auth from "../firebase/firebase.config";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  GoogleAuthProvider,
} from "firebase/auth";

export const AuthContext = createContext(null);

const AuthProviders = ({ children }) => {
  const [user, setUser] = useState(null);
  const [spiner, setSpinner] = useState(true);
  const provider = new GoogleAuthProvider();

  // Google Login
  const googleLogin = () => {
    return signInWithPopup(auth, provider);
  };

  //   register user
  const register = (email, pass) => {
    setSpinner(true);
    return createUserWithEmailAndPassword(auth, email, pass);
  };

  // sing in
  const logIn = (email, pass) => {
    setSpinner(true);
    return signInWithEmailAndPassword(auth, email, pass);
  };

  //   log out
  const logOut = () => {
    setSpinner(true);
    return signOut(auth);
  };

  //   auth observe
  useEffect(() => {
    const subscribe = onAuthStateChanged(auth, (currentuser) => {
      setUser(currentuser);
      setSpinner(false);
    });

    return () => {
      subscribe();
    };
  }, []);

  const authInfo = {
    user,
    spiner,
    register,
    logIn,
    logOut,
    googleLogin,
    setUser,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProviders;

AuthProviders.propTypes = {
  children: PropTypes.node.isRequired,
};
