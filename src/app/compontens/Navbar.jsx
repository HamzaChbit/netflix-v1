'use client';


import Link from "next/link";
import React from "react";

import Image from "next/image";
import {signOut} from  'firebase/auth'
import { BiSearch } from "react-icons/bi";
import { BsBellFill } from "react-icons/bs";
import { Auth } from "../../../config/firebase";


const Navbar = () => {



    
        const  SignOutInGoogle = async () => {
            await signOut( Auth);
            
            
           }
         
  return (
    <nav>
      <div className="container flex justify-between">
        <div className="flex items-center space-x-2 md:space-x-10">
        

          <ul className="hidden space-x-4 md:flex">
            <li className="headerLink cursor-pointer font-semibold text-white hover:text-white">
              Home
            </li>

            <li className="headerLink">TV Shows</li>
            <li className="headerLink">Movies</li>
            <li className="headerLink">New & Popular</li>
            <li className="headerLink">My List</li>
          </ul>
        </div>

        <div className="flex items-center space-x-4 text-sm font-light">
          <BiSearch className="sm hidden h-6 w-6 sm:inline" />
          <p className="hidden lg:inline"> Chbit</p>
          <BsBellFill className="h-6 w-6" />

          <Image
            src="/dp.png"
            alt="dp"
            width={60}
            height={60}
            className="cursor-pointer rounded w-auto h-auto"
            onClick={SignOutInGoogle}
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;