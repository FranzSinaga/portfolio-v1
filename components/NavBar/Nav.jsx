import React from "react";
import Link from "next/link";

import dynamic from "next/dynamic";
const Toggle = dynamic(() => import("../ToogleTheme/ThemeToggle"), {
  ssr: false,
});

const Nav = () => {
  return (
    <nav className="p-3 fixed z-20 border-b-2 dark:border-b-0 drop-shadow-md bg-white dark:bg-black w-full">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <a href="#" className="flex items-center">
          <img
            className="mr-3 h-6 sm:h-10 invisible"
            alt="Franz Simaga"
          />
          <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white"></span>
        </a>
        <div className="flex gap-4">
          <button className="block md:hidden text-gray-700 rounded mt-2 md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 ">
            <Toggle />
          </button>
          <button
            data-collapse-toggle="navbar-solid-bg"
            type="button"
            className="inline-flex justify-center items-center md:ml-3 text-gray-400 rounded-lg md:hidden hover:text-gray-900   focus:ring-blue-300 dark:text-gray-400 dark:hover:text-blue-400 dark:focus:ring-gray-500"
            aria-controls="navbar-solid-bg"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
        <div className="hidden font-mono w-full md:block md:w-auto" id="navbar-solid-bg">
          <ul className="flex flex-col mt-4 bg-white rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-transparent dark:bg-black md:dark:bg-transparent dark:border-gray-700">
            <li>
              <Link href={"/"}>
                <a
                  className="block text-md py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-blue-400 dark:hover:bg-gray-700 dark:hover:text-blue-400 md:dark:hover:bg-transparent"
                  aria-current="page"
                >
                  Home
                </a>
              </Link>
            </li>
            <li>
              {/* <Link href={'/about'}> */}
              <a
                href="#about"
                className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-blue-400 dark:hover:bg-gray-700 dark:hover:text-blue-400 md:dark:hover:bg-transparent"
              >
                About
              </a>
              {/* </Link> */}
            </li>
            <li>
              <a
                href="#projects"
                className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-blue-400 dark:hover:bg-gray-700 dark:hover:text-blue-400 md:dark:hover:bg-transparent"
              >
                Project
              </a>
            </li>
            <li>
              <a
                href="#experience"
                className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-blue-400 dark:hover:bg-gray-700 dark:hover:text-blue-400 md:dark:hover:bg-transparent"
              >
                Experience
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-blue-400 dark:hover:bg-gray-700 dark:hover:text-blue-400 md:dark:hover:bg-transparent"
              >
                Contact
              </a>
            </li>
            <li className="hidden md:block">
              <button className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-blue-400 dark:hover:bg-gray-700 dark:hover:text-blue-400 md:dark:hover:bg-transparent">
                <Toggle />
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
