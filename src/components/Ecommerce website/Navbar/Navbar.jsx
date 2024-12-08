import React from "react";
import Logo from "../../Ecommerce website/assets/logo_ecommerce.png";
import { IoMdSearch } from "react-icons/io"; //>> npm i react-icons
import { FaCartShopping } from "react-icons/fa6";
import DarkMode  from "./DarkMode";

export const Navbar = () => {
  return (
    <div className="shadow-md bg-white dark:bg-gray-900 dark:text-white  dyration-200 relative z-40">
      {/* Upper Navbar */}
      <div className=" py-3 ">
        <div className="container flex justify-between items-center">
          <div>
            <a href="#" className="font-bold text-2xl sm:text-3xl flex gap-2">
              <img src={Logo} alt="Logo" className="w-10 " />
              <span className="bg-gradient-to-r from-blue-500 via-green-400 to-teal-500 bg-clip-text text-transparent">
                DotScripters
              </span>
            </a>
          </div>
          {/* search bar  */}
          <div className="flex justify-between items-center gap-4 ">
            <div className="relative group hiddensm:block">
              <input
                type="text"
                placeholder="search"
                className="w-[200px] sm:w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-full border border-gray-300 px-2 py-1 
                focus:outline-none focus:border-1  focus:border-gray-300 "
              />
              <IoMdSearch
                className="text-gray-500 group-hover:text-gray-400 absolute 
              top-1/2 -translate-y-1/2 right-3"
              />
            </div>
            {/* order button */}
            <button
              onClick={() => alert("Already Registered ?")}
              className="bg-white border-1 rounded-full border border-gray-300 
          transition-all  text-gray-500 font-bold hover:text-white 
          hover:bg-gradient-to-r from-blue-500 via-green-400 to-teal-500
          py-1 px-4 flex items-center gap-3 group "
            >
              <span
                className="group:hover:block
            hidden transition-all duration-200"
              >
                Order
              </span>
              {/* <FaCartShopping/> */}
              Log In
            </button>

            {/* Darkmode Switch*/}
            <div>
              <DarkMode/>
            </div>

          </div>
        </div>
      </div>
      {/* Lower Navbar */}
      <div></div>
    </div>
  );
};
