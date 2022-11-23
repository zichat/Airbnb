import Image from "next/image";
import React from "react";
import { logo } from "../assets";
import {FaSearch,  } from 'react-icons/fa'
import { GlobeAltIcon, UserCircleIcon, UsersIcon } from "@heroicons/react/24/solid";
import { MdMenu } from "react-icons/md";
function Header() {
  return (
    <nav className="sticky top-0 z-50 grid grid-cols-3 bg-white  shadow-md p-5 md:px-10">

      {/* logo */}
      <div className="relative flex items-center h-10 cursor-pointer my-auto">
        <Image
          src ={logo}
          alt="logo"
          fill
          className="object-contain object-left"
        />
      </div>

      {/* middle search */}
      <div className="flex items-center md:border-2 rounded-full py-2 md:shadow-sm">

        <input type="text" className="flex-grow pl-5 bg-transparent outline-none text-sm text-gray-600 placeholder-slate-400" placeholder="start your search"/>

        <FaSearch className = "hidden lg:inline-flex  w-8 h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer md:mx-2"/>
      </div>

      {/* right */}
      <div className="flex items-center space-x-4 justify-end text-gray-500">

        <p className="hidden md:inline-block cursor-pointer">Become a host</p>
        <GlobeAltIcon className="h-6 cursor-pointer"/>

        <div className="flex items-center space-x-2 border-2 p-2 rounded-full">
          <MdMenu className="h-6 cursor-pointer"/>
          <UserCircleIcon className="h-6 cursor-pointer"/>

        </div>
      </div>
    </nav>
  );
}

export default Header;
