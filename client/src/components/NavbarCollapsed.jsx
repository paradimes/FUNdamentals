/* eslint-disable react/prop-types */
import React from "react";
import { Link } from "react-router-dom";
import LogoutButton from "./LogoutButton";
import LoginButtonAuth0 from "./LoginButtonAuth0";

export default function NavbarCollapsed({ isAuthenticated }) {
  return (
    <div className="dropdown md:hidden">
      <label tabIndex={0} className="btn m-1">
        Menu
      </label>
      <ul
        tabIndex={0}
        className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
      >
        <li>
          <Link to="/welcome">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/courses">Courses </Link>
        </li>
        {isAuthenticated ? (
          <>
            <li>
              <Link
                to="/"
                className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
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
      </ul>
    </div>
  );
}
