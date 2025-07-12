import React, { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase.config";
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";

const AuthContext = createContext();
 


// authprovider
export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvide = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // register a user
  const registerUser = async (email, password) => {
    return await createUserWithEmailAndPassword(auth, email, password);
  };

  // login  a user
  const loginUser = async (email, password) => {
    return await signInWithEmailAndPassword(auth, email, password);

  };

   // logout the user
    const logout = () => {
        return signOut(auth)
    }

    // manage user
    useEffect(() => {
        const unsubscribe =  onAuthStateChanged(auth, (user) => {
            setCurrentUser(user);
            setLoading(false);

            if(user) {
               
                const {email, displayName, photoURL} = user;
                const userData = {
                    email, username: displayName, photo: photoURL
                } 
            }
        })

        return () => unsubscribe();
    }, [])



//   sign up with google
const googleProvider = new GoogleAuthProvider();
const signInWithGoogle =async()=>{
    return await signInWithPopup(auth,googleProvider)
}

  const value = {
    currentUser,
    registerUser,
    loginUser, signInWithGoogle ,logout
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};
