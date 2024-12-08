import React from 'react';
import PropTypes from "prop-types";
export default function Header(props) {
  return (
    <nav className="bg-gray-100">
  <div className="container mx-auto flex flex-wrap items-center justify-between py-3">
    <a className="text-lg font-bold" href="#">
      {props.title}
    </a>
    <button
      className="text-gray-800 block lg:hidden"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
      onClick={() => document.getElementById('navbarSupportedContent').classList.toggle('hidden')}
    >
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
      </svg>
    </button>
    <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto " id="navbarSupportedContent">
      <ul className="lg:flex lg:justify-start lg:space-x-4 lg:items-center text-gray-700">
        <li className="nav-item">
          <a className="block py-2 px-4 text-gray-700 hover:text-gray-900" aria-current="page" href="#">
            Home
          </a>
        </li>
        <li className="nav-item">
          <a className="block py-2 px-4 text-gray-700 hover:text-gray-900" aria-current="page" href="#">
            About
          </a>
        </li>
      </ul>
      {props.searchBar ? (
        <form className="flex items-center mt-4 lg:mt-0" role="search">
          <input
            className="form-input px-4 py-2 rounded-md border border-gray-300"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button className="ml-2 px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600" type="submit">
            Search
          </button>
        </form>
      ) : (
        <span className="mt-4 lg:mt-0">No search results found!</span>
      )}
    </div>
  </div>
</nav>

  );
}

Header.defaultProps = {
  title: "Your Titile Here",
  searchBar: false
}

Header.propTypes ={
title:PropTypes.string,
searchBar:PropTypes.bool.isRequired //if i am not giving a default prop for searchBar as it "isRequired" , compiler will throw error 
}