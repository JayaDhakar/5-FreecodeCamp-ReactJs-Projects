import React, { useState } from "react";
import { FaGoogle } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

const LoginMinor = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.includes("@")) {
      setError("Please use your work email to login.");
    } else {
      setError("");
      // Proceed with login
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-center text-2xl font-bold text-[#4b3424]  mb-6">
          Access your free account
        </h2>

        <button className="flex items-center justify-center w-full py-2 px-4 mb-6 border border-gray-500 rounded-lg text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          <FaGoogle className="mr-2 mt-1 " />
          Continue with Google
        </button>

        <div className="flex items-center justify-center mb-4">
          <div className="border-t border-gray-400 flex-grow mr-2"></div>
          <p className="text-gray-500 text mb-1">OR</p>
          <div className="border-t border-gray-400 flex-grow ml-2"></div>
        </div>

        <form onSubmit={handleSubmit}>
          {error && (
            <div className="text-red-500 font-semibold bg-red-100 py-5  text-sm mb-4 flex items-center">
              <span className="ml-3">{error}</span>
              <button
                type="button"
                className="ml-auto"
                onClick={() => setError("")}
              >
                <svg
                  className="h-5 w-5 text-gray-400 hover:text-gray-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M6.293 4.293a1 1 0 011.414 0L10 6.586l2.293-2.293a1 1 0 111.414 1.414L11.414 8l2.293 2.293a1 1 0 01-1.414 1.414L10 9.414l-2.293 2.293a1 1 0 01-1.414-1.414L8.586 8 6.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          )}

          <div className="mb-4">
            <label htmlFor="email" className="sr-only">
              Email
            </label>
            <div className="flex items-center border border-gray-300 rounded-lg">
              <IoMdMail className="absolute mt-4 ml-2 transform -translate-y-2/4 text-gray-500" />

              <input
                type="email"
                id="email"
                className="flex-1 py-2 px-8 text-gray-800 bg-transparent focus:outline-none"
                placeholder=""
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-2 px-4 bg-[#4b3424] text-white font-semibold rounded-lg hover:bg-[#4b3424] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#4b3424] "
          >
            Register / Login
          </button>
        </form>

        <p className="mt-6 text-xs text-gray-500 text-center">
          By creating an account, you agree to our{" "}
          <a href="#" className="text-brown-700 hover:underline">
            Terms of Service
          </a>{" "}
          and{" "}
          <a href="#" className="text-brown-700 hover:underline">
            Privacy & Cookie Statement
          </a>
          .
        </p>
      </div>
    </div>
  );
};

export default LoginMinor;
