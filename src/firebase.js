// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getAuth} from "firebase/auth"
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCIlfajwAhX_7sSx9yDP0Zv-nPhO9cL9pY",
  authDomain: "thefirm-770ab.firebaseapp.com",
  projectId: "thefirm-770ab",
  storageBucket: "thefirm-770ab.appspot.com",
  messagingSenderId: "543981469240",
  appId: "1:543981469240:web:47e755f7aa8ac3bfcd30cd",
  measurementId: "G-56NRPLXVHL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);