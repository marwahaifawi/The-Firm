import React from "react";
import { onAuthStateChanged } from "firebase/auth";
import { useState, createContext, useEffect } from "react";
import HeaderApp from "./header";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";

const UserContext = createContext();

const Authentication = () => {
  const [userAuthentication, setUserAuthentication] = useState(null);
  
  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserAuthentication(user);
      } else {
        setUserAuthentication(null);
      }
    });
    return () => {
      listen();
    };
  }, []);


  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        setUserAuthentication(null);
        console.log("Successfully signed out");
      })
      .catch((error) => {
        console.log("Error signing out:", error);
      });
  };
  return (
    <UserContext.Provider value={userAuthentication}>
      <HeaderApp handleSignOut={handleSignOut} />
    </UserContext.Provider>
  );
};

export default Authentication;
// import React, { useState, createContext, useEffect, useContext } from "react";
// import { auth } from "../firebase";
// import {
//   createUserWithEmailAndPassword,
//   signInWithEmailAndPassword,
//   onAuthStateChanged,
// } from "firebase/auth";

// const userContext = createContext();

// export function Authentication({ children }) {
//   const [user, setUser] = useState({});
//   function signUp(email, password) {
//     console.log("signup")
//     return createUserWithEmailAndPassword(auth, email, password);
//   }
//   function logIn(email, password) {
//     return signInWithEmailAndPassword(auth, email, password);
//   }
//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
//       setUser(currentUser);
//     });
//     return () => {
//       unsubscribe();
//     };
//   }, []);
//   return (
//     <userContext.Provider value={{ signUp, user }}>
//       {children}
//     </userContext.Provider>
//   );
// }
// export function useUserAuth() {
//   return useContext(userContext);
// }
