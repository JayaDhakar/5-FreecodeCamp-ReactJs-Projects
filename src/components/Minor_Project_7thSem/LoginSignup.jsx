import React, { useState } from "react";
import { IoMdMail, IoMdPerson, IoMdLock } from "react-icons/io"; // Import the icons
import { FaGoogle, FaLinkedin } from "react-icons/fa"; // Import Google and LinkedIn icons

function LoginSignup() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className=" flex items-center justify-center min-h-screen bg-gray-100">
      <div className="  bg-white p-8 rounded-lg shadow-lg max-w-lg w-full ">
        <h2 className="text-4xl font-bold mb-2 text-center">
          {isLogin ? "Sign in" : "Sign up"}
        </h2>
        {isLogin && (
          <div className="text-center mb-6 text-black">
            Need an account?{" "}
            <button
              onClick={() => setIsLogin(false)}
              className="text-[#3f6dcd] hover:underline focus:outline-none"
            >
              Sign up
            </button>
          </div>
        )}
        {!isLogin && (
          <div className="mb-6 text-center text-black">
            Have an account?{" "}
            <button
              onClick={() => setIsLogin(true)}
              className="text-[#3f6dcd]  hover:underline focus:outline-none"
            >
              Sign in
            </button>
          </div>
        )}
        <form>
          {!isLogin && (
            <div className="mb-4 relative">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                {/* Username */}
              </label>
              <input
                type="text"
                placeholder="Username"
                className="w-full p-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-gray-100 pr-10"
              />
              <IoMdPerson className="absolute right-3 top-2/4 transform -translate-y-2/4 text-gray-500" />
            </div>
          )}
          <div className="mb-4 relative">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              {/* Email */}
            </label>
            <input
              type="email"
              placeholder="Email"
              className="w-full p-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-gray-100 pr-10"
            />
            <IoMdMail className="absolute right-3 top-2/4 transform -translate-y-2/4 text-gray-500" />
          </div>
          <div className="mb-6 relative">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              {/* Password */}
            </label>
            <input
              type="password"
              placeholder="Password"
              className="w-full p-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-gray-100 pr-10"
            />
            <IoMdLock className="absolute right-3 top-2/4 transform -translate-y-2/4 text-gray-500" />
          </div>

          <button
            type="submit"
            className="w-2/3 block mx-auto bg-[#156c59] text-white font-bold border py-2 px-4 rounded-full hover:bg-[#105445] hover:text-white transition duration-300"
          >
            {isLogin ? "Sign in" : "Sign up with email"}
          </button>
        </form>

        {/* Sign in with Google and LinkedIn */}
        {isLogin && (
          <div className="mt-4 text-center">
            <div className="flex items-center justify-center mb-4">
              <div className="border-t border-gray-400 flex-grow mr-2"></div>
              <p className="text-gray-700 text-lg mb-1">or</p>
              <div className="border-t border-gray-400 flex-grow ml-2"></div>
            </div>
            <div className="flex flex-col items-center space-y-4">
              <button className="flex items-center bg-gray-400 text-white font-bold py-2 px-4 rounded-full hover:bg-gray-500 transition duration-300 ">
                {/*  hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-[#4285F4] via-[#EA4335] to-[#34A853] */}
                <FaGoogle className="mr-2 mt-1 " />
                {/* <span className=" "> */}
                | Sign in with Google
              {/* </span> */}
                
              </button>
              <button className="flex items-center bg-[#0077b5] text-white font-bold py-2 px-4 rounded-full hover:bg-[#005f91] transition duration-300">
                <FaLinkedin className="mr-2 mt-1" />| Sign in with LinkedIn
              </button>
            </div>
          </div>
        )}
         {/* Remember Me and Forgot Password Section */}
         {isLogin && (
            <div className="flex items-center justify-center mt-4 ">
              {/* <label className="flex items-center text-gray-700 text-sm">
                <input type="checkbox" className="mr-2 rounded" />
                Remember Me
              </label> */}
              <a
                href="#"
                className=" text-[#3f6dcd] hover:underline text focus:outline-none"
              >
                Forgot Password?
              </a>
            </div>
          )}

          {/* Sign up with google and linked in */}
          {!isLogin && (
          <div className="mt-4 text-center">
            <div className="flex items-center justify-center mb-4">
              <div className="border-t border-gray-400 flex-grow mr-2"></div>
              <p className="text-gray-700 text-lg mb-1">or</p>
              <div className="border-t border-gray-400 flex-grow ml-2"></div>
            </div>
            <div className="flex flex-col items-center space-y-4">
              <button className="flex items-center bg-gray-400 text-white font-bold py-2 px-4 rounded-full hover:bg-gray-500 transition duration-300 ">
                {/*  hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-[#4285F4] via-[#EA4335] to-[#34A853] */}
                <FaGoogle className="mr-2 mt-1 " />
                {/* <span className=" "> */}
                | Sign in with Google
              {/* </span> */}
                
              </button>
              <button className="flex items-center bg-[#0077b5] text-white font-bold py-2 px-4 rounded-full hover:bg-[#005f91] transition duration-300">
                <FaLinkedin className="mr-2 mt-1" />| Sign in with LinkedIn
              </button>
            </div>
          </div>
        )}
         {/* Remember Me and Forgot Password Section */}
         {!isLogin && (
            <div className="flex items-center justify-center mt-4 ">
              {/* <label className="flex items-center text-gray-700 text-sm">
                <input type="checkbox" className="mr-2 rounded" />
                Remember Me
              </label> */}
              <a
                href="#"
                className=" text-[#3f6dcd] hover:underline text focus:outline-none"
              >
                Forgot Password?
              </a>
            </div>
          )}
      </div>
    </div>
  );
}

export default LoginSignup;
