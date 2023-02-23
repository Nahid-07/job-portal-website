import React, { useState } from "react";
import { createContext } from "react";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState(null);

  // create user

  const createUser = (email, pass) => {
    return createUserWithEmailAndPassword(auth, email, pass);
  };

  // sign in

  const signin = (email,pass) =>{
    return signInWithEmailAndPassword(auth,email,pass)
  }

  const authInfo = {
    createUser,
    isLoading,
    setIsLoading,
    setUser,
    user,
    signin
  };
  return (
    <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
