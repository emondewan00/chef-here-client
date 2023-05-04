import React, { createContext, useEffect, useState } from "react";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  sendEmailVerification,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../../firebase/firebase.config";

export const AuthContext = createContext(null);
const auth = getAuth(app);
// eslint-disable-next-line
const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState("");
  const [registerErr, setRegisterErr] = useState("");
  const [loading, setLoading] = useState(true);

  const googleProvider = new GoogleAuthProvider();
  const GithubProvider = new GithubAuthProvider();

  const loginWithGoogle = () => {
    setLoading(true)
    return signInWithPopup(auth, googleProvider);
  };

  const githubLogin = () => {
    setLoading(true)
    return signInWithPopup(auth, GithubProvider);
  };
  const updateUser = (user, name, photo) => {
    updateProfile(user, {
      displayName: name,
      photoURL: photo,
    })
      .then(() => {
        // Profile updated!
        // ...
      })
      .catch((error) => {
        console.log(error, "updated");
      });
  };
  const emailVerification = (user) => {
    sendEmailVerification(user);
  };
  const emailAndPass = (email, password, userName, userPhoto) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password)
      .then((res) => {
        updateUser(res.user, userName, userPhoto);
        emailVerification(res.user);
        setRegisterErr(""); //Account create success
      })
      .catch((error) => {
        setRegisterErr(error.message);
      });
  };
  const resetPass = (email) => {
    return sendPasswordResetEmail(auth, email);
  };
  const logInEmailAndPass = (email, password) => {
    setLoading(true)
    signInWithEmailAndPassword(email, password);
  };
  const logOut = () => {
    setLoading(true)
    return signOut(auth);
  };
  useEffect(() => {
    const unsubscrib = onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrentUser(user);
        setLoading(false);
      }
    });
    return () => {
      unsubscrib();
    };
  }, []);
  const authInfo = {
    loginWithGoogle,
    githubLogin,
    emailAndPass,
    logInEmailAndPass,
    currentUser,
    logOut,
    resetPass,
    registerErr,
    loading,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children} </AuthContext.Provider>
  );
};

export default AuthProvider;
