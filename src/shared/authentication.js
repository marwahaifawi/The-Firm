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
