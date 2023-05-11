import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../firebase/firebase.config";

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

// Create context API
export const AuthContext = createContext(null);

const AuthProviders = ({ children }) => {
  // State
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);
  const [fullLoading, setFullLoading] = useState(true);
  const [authStateHandler, setAuthStateHandler] = useState(true);

  // Registration
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // Profile Update
  const profileUpdate = (name, photo) => {
    setLoading(true);
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };

  // Login
  const loginUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // logout
  const logout = () => {
    return signOut(auth);
  };

  // State observer
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
      setFullLoading(false);

      return () => {
        return unsubscribe();
      };
    });
  }, [authStateHandler]);

  // Data sent as context API
  const authInfo = {
    loading,
    setLoading,
    fullLoading,
    setFullLoading,
    authStateHandler,
    setAuthStateHandler,
    user,
    setUser,
    createUser,
    profileUpdate,
    loginUser,
    logout,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProviders;
