/* eslint-disable react/prop-types */
import React from "react";
import { Link } from "react-router-dom";
import LogoutButton from "./LogoutButton";
import LoginButtonAuth0 from "./LoginButtonAuth0";

export default function NavbarCollapsed({ isAuthenticated }) {
  return (
    <div className="dropdown dropdown-end md:hidden">
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
              <Link to="/account">My Account</Link>
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
