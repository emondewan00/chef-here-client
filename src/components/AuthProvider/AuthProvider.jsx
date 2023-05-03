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

  const googleProvider = new GoogleAuthProvider();
  const GithubProvider = new GithubAuthProvider();

  const loginWithGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };

  const githubLogin = () => {
    return signInWithPopup(auth, GithubProvider);
  };
  const updateUser = (user, name) => {
    updateProfile(user, {
      displayName: name,
      photoURL: "https://example.com/jane-q-user/profile.jpg",
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
  const emailAndPass = (email, password, userName) => {
    return createUserWithEmailAndPassword(auth, email, password)
      .then((res) => {
        updateUser(res.user, userName);
        emailVerification(res.user);
      })
      .catch((err) => console.log(err));
  };

  const resetPass=(email)=>{
    return sendPasswordResetEmail(auth,email)
  }
  const logInEmailAndPass = (email, password) => {
    signInWithEmailAndPassword(email, password);
  };
  const logOut = () => {
    return signOut(auth);
  };
  useEffect(() => {
    const unsubscrib = onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrentUser(user);
        // console.log(user);
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
    resetPass
  };
  return (
    <AuthContext.Provider value={authInfo}>{children} </AuthContext.Provider>
  );
};

export default AuthProvider;
