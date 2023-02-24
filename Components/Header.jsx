import React, { useState } from "react";
import {
  GlobeAltIcon,
  Bars3Icon,
  UserCircleIcon,
  UsersIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/solid";


const Header = () => {
  const [searchInput, setSearchInput] = useState("");



  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10">
      <div className="flex justify-evenly items-center">
        <p>Logo</p>
      </div>
      <div className="flex justify-evenly items-center">
        <input
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          type="text"
          //placeholder={placeholder || "Start your Search..."}
          placeholder="Search PON"
          className="flex-grow pl-5 bg-transparent outline-none text-sm text-gray-600 placeholder-gray-400"
        />
        <MagnifyingGlassIcon className="hidden md:inline-flex h-8 bg-red-600 text-white rounded-full p-2 cursor-pointer md:mx-2" />
      </div>
      <div className="flex justify-evenly items-center">
        <p>Menu</p>
      </div>
    </header>
  );
};

export default Header;
