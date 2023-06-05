import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import { auth, signInWithEmailAndPassword} from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);
  const signup = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // User creation successful
        const user = userCredential.user;
        console.log('User created:', user);
      })
      .catch((error) => {
        // Handle error
        console.error('Error creating user:', error);
      });
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {

      setCurrentUser(user);
      setLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);
  return (
    <AuthContext.Provider value={{ currentUser, signup }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
export default AuthProvider;
export const useAuth = () => {
  return useContext(AuthContext);
};
