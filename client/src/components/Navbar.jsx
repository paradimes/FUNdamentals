/* eslint-disable react/prop-types */
import React from "react";
import LogoutButton from "./LogoutButton";
import LoginButtonAuth0 from "./LoginButtonAuth0";
import { Link, useLocation } from "react-router-dom";
import NavbarCollapsed from "./NavbarCollapsed";
import Sun from "../assets/Sun.svg";

const onSwitchTheme = () => {
  const htmlClassName = document.documentElement.classList;
  const isDarkActive = htmlClassName.contains("dark");

  if (isDarkActive) {
    document.documentElement.classList.remove("dark");
  } else {
    document.documentElement.classList.add("dark");
  }
};

export default function Navbar({ isAuthenticated }) {
  const location = useLocation();
  const path = location.pathname;

  // const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

  // useEffect(() => {
  //   if (prefersDark) {
  //     document.documentElement.classList.add("dark");
  //   }
  // }, [prefersDark]);

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link to="/welcome" className="flex items-center">
          {/* <img
              //   src=""
              className="h-8 mr-3"
              alt="Logo"
            /> */}
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
            FUNdamentals
          </span>
        </Link>
        <div className="md:hidden flex items-center justify-center gap-5">
          <NavbarCollapsed isAuthenticated={isAuthenticated} />
          <button
            className="p-1 rounded-full bg-white dark:bg-yellow-400 "
            onClick={onSwitchTheme}
          >
            <img src={Sun} className="w-6 h-6 " />
          </button>
        </div>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <Link
                to="/welcome"
                className={`block py-2 pl-3 pr-4 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0  md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent ${
                  path === "/welcome"
                    ? "text-blue-700 dark:text-blue-600"
                    : "text-gray-900 dark:text-white"
                }`}
                aria-current="page"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className={`block py-2 pl-3 pr-4 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0  md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent ${
                  path === "/about"
                    ? "text-blue-700 dark:text-blue-600"
                    : "text-gray-900 dark:text-white"
                }`}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/courses"
                className={`block py-2 pl-3 pr-4 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent ${
                  path === "/courses"
                    ? "text-blue-700 dark:text-blue-600"
                    : "text-gray-900 dark:text-white"
                }`}
              >
                Courses{" "}
              </Link>
            </li>
            {isAuthenticated ? (
              <>
                <li>
                  <Link
                    to="/account"
                    className={`block py-2 pl-3 pr-4 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent ${
                      path === "/account"
                        ? "text-blue-700 dark:text-blue-600"
                        : "text-gray-900 dark:text-white"
                    }`}
                  >
                    My Account
                  </Link>
                </li>
                <li>
                  <LogoutButton />
                </li>
              </>
            ) : (
              <li>
                <LoginButtonAuth0 paddingY="py-0.5" />
              </li>
            )}
            <li>
              <button
                className="p-1 rounded-full bg-white dark:bg-yellow-400 "
                onClick={onSwitchTheme}
              >
                <img src={Sun} className="w-6 h-6 " />
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
