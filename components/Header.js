import Image from "next/image";
import React from "react";
import { useState } from "react";
import { useRouter } from "next/router";
import { logo } from "../assets";
import { FaSearch } from "react-icons/fa";
import {
  GlobeAltIcon,
  UserCircleIcon,
  UserIcon,
  UsersIcon,
} from "@heroicons/react/24/solid";
import { MdMenu } from "react-icons/md";

import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file

import { DateRangePicker } from "react-date-range";

function Header({placeholder}) {
  const [searchText, setSearchText] = useState("");

  const [startDate, setStartDate] = useState(new Date());

  const [endDate, setEndDate] = useState(new Date());

  const [noOfGuest, setNoOfGuest] = useState(1);

  const router = useRouter()

  const handleSelect = (ranges) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };

  const resetInput = () => {
    setSearchText("");
  }

  const search = () => {
    router.push({
      pathname: "/search",
      query: {
        location: searchText,
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString(),
        noOfGuest: noOfGuest, 
      },
    });
  }

  return (
    <nav className="sticky top-0 z-50 grid grid-cols-3 bg-white  shadow-md p-5 md:px-10">
      {/* logo */}
      <div onClick = {() => router.push("/")} className="relative flex items-center h-10 cursor-pointer my-auto">
        <Image
          src={logo}
          alt="logo"
          fill
          className="object-contain object-left"
        />
      </div>

      {/* middle search */}
      <div className="flex items-center md:border-2 rounded-full py-2 md:shadow-sm">
        <input
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          type="text"
          className="flex-grow pl-5 bg-transparent outline-none text-sm text-gray-600 placeholder-slate-400"
          placeholder={ placeholder || "start your search"}
        />

        <FaSearch className="hidden lg:inline-flex  w-8 h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer md:mx-2" />
      </div>

      {/* right */}
      <div className="flex items-center space-x-4 justify-end text-gray-500">
        <p className="hidden md:inline-block cursor-pointer">Become a host</p>
        <GlobeAltIcon className="h-6 cursor-pointer" />

        <div className="flex items-center space-x-2 border-2 p-2 rounded-full">
          <MdMenu className="h-6 cursor-pointer" />
          <UserCircleIcon className="h-6 cursor-pointer" />
        </div>
      </div>

      {searchText && (
        <div className="flex flex-col col-span-3 mx-auto">
          <DateRangePicker
            ranges={[selectionRange]}
            minDate={new Date()}
            rangeColors={["#FD5B61"]}
            onChange={handleSelect}
          />

          <div className="flex items-center border-b mb-4">
            <h2 className="text-2xl flex-grow font-semibold">
              Number of Guests
            </h2>

            <UserIcon className="h-5" />

            <input
              value={noOfGuest}
              onChange={e => setNoOfGuest(e.target.value)}
              type="number"
              min={1}
              className="w-12 pl-2 text-lg outline-none text-red-400"
            />
          </div>

          <div className="flex">
            <button className="flex-grow text-gray-500" onClick={resetInput}>Cancel</button>
            <button className="flex-grow text-red-400" onClick={search}>Search</button>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Header;
