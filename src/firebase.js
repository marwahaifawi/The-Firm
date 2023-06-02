// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD5wEWpMOmTNehXfFnVREXuZNTTStuVJsU",
  authDomain: "thefirm-3eb3f.firebaseapp.com",
  projectId: "thefirm-3eb3f",
  storageBucket: "thefirm-3eb3f.appspot.com",
  messagingSenderId: "661539521930",
  appId: "1:661539521930:web:a8500fd32d02e080b4f473",
  measurementId: "G-DDMC03L8QG",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
