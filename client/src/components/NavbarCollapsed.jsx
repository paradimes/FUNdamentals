/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import LogoutButton from "./LogoutButton";
import LoginButtonAuth0 from "./LoginButtonAuth0";

export default function NavbarCollapsed({ isAuthenticated }) {
  return (
    <div className="dropdown dropdown-end md:hidden">
      <label
        tabIndex={0}
        className="btn m-1 text-black bg-slate-200 dark:bg-slate-400 border-slate-200  dark:border-slate-400 hover:border-slate-300  hover:bg-slate-300 dark:hover:bg-slate-500 dark:hover:border-slate-500  "
      >
        Menu
      </label>
      <ul
        tabIndex={0}
        className="dropdown-content z-[1] menu p-2 shadow text-black  dark:hover:text-black bg-white dark:bg-slate-400 rounded-box w-52"
      >
        <li>
          <Link
            to="/welcome"
            className=" hover:text-black dark:hover:text-gray-100 dark:hover:bg-slate-500"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            className="dark:hover:text-gray-100 dark:hover:bg-slate-500 hover:text-black"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="/searchv2"
            className="dark:hover:text-gray-100 dark:hover:bg-slate-500 hover:text-black"
          >
            Search{" "}
          </Link>
        </li>
        <li>
          <Link
            to="/courses"
            className="dark:hover:text-gray-100 dark:hover:bg-slate-500 hover:text-black"
          >
            Courses{" "}
          </Link>
        </li>
        {isAuthenticated ? (
          <>
            <li>
              <Link
                to="/account"
                className="dark:hover:text-gray-100 dark:hover:bg-slate-500 hover:text-black"
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
