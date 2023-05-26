import React from "react";
import {onAuthStateChanged} from "firebase/auth";
import { useState, createContext  , useEffect} from "react";
import ReactDOM from "react-dom/client";
import HeaderApp from "./header";
import {auth} from "../firebase";
const UserContext = createContext();

const Authentication = () => {
  const [UserAuthentication, setUserAuthentication] = useState(null);
 useEffect(()=>{
  const listen = onAuthStateChanged(auth , (user)=>{
    if(user){
      setUserAuthentication(user);
    }else{
      setUserAuthentication(null);
    }
  });
  return()=>{
    listen();
  }
 }, []);
  return (
    <UserContext.Provider value={UserAuthentication}>
      <HeaderApp/>
    </UserContext.Provider>
  );
};

export default Authentication;
