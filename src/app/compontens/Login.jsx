'use client';


import React from "react";

import { FcGoogle  } from "react-icons/fc";

import {Auth,db, googleProvider } from '../../../config/firebase'
import {signInWithPopup} from  'firebase/auth'
import {setDoc, doc} from 'firebase/firestore'


const Login = () => {
  

  function signInWithGoogle() {
    signInWithPopup(Auth, googleProvider)
      .then(() => {
        const displayName = Auth?.currentUser?.email;
  
        if (displayName) {
          setDoc(doc(db, 'users', displayName), {
            savedShows: []
          })
          .then(() => {
            console.log("Document added for user:", displayName);
          })
          .catch((error) => {
            console.error("Error adding document:", error);
          });
        }
      })
      .catch((error) => {
        console.error("Error signing in with Google:", error);
      });
  }


  return (
    <div className="login_bg_gradient bg-cover h-screen grid place-items-center">
      {/* <Logo  style="w-52 absolute top-0 left-0 m-8" /> */}

      <div className="bg-[rgba(0,0,0,0.75)] p-10 w-80 space-y-6">
        <h2 className="text-3xl font-medium">Sign in</h2>

        <button
          className="bg-white text-black flex gap-2 items-center p-4 text-xl"
         onClick={ signInWithGoogle }
        >
         <FcGoogle className="text-1xl" />
          SignIn with Google
        </button>
      </div>
    </div>
  );
}

export default Login;