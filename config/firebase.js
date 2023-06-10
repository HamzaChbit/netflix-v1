// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from 'firebase/auth'
import {getFirestore} from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAcKwbYD4TO_DHn2LEUzG9WFGeOSAEVWJE",
  authDomain: "netflix-c44fe.firebaseapp.com",
  projectId: "netflix-c44fe",
  storageBucket: "netflix-c44fe.appspot.com",
  messagingSenderId: "688458694936",
  appId: "1:688458694936:web:83b8ce4199f6e6600c1e6d",
  measurementId: "G-EEN6H60VC2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const googleProvider = new GoogleAuthProvider(app)
export const Auth = getAuth(app);
export const db = getFirestore(app)
