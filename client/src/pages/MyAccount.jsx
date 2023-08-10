/* eslint-disable react/prop-types */
import React from "react";
import Navbar from "../components/Navbar";
import MathCourse from "../assets/MathCourse.svg";
import Footer from "../components/Footer";
import UserProfileCard from "../components/userProfileCard";
import Construction from "../assets/Construction.svg";

function MyAccount({ isAuthenticated, user }) {
  return (
    <div className="flex flex-col h-screen bg-white dark:bg-gray-900">
      <Navbar isAuthenticated={isAuthenticated} />
      {isAuthenticated && (
        <div className="shrink:0 flex-grow items-center justify-center flex flex-col md:flex-row gap-10 mx-40 md:mr-10">
          <h1 className="text-5xl font-extrabold flex items-center justify-center text-slate-500 dark:text-white">
            This page is under construction.
          </h1>
          <img
            src={Construction}
            className="h-48 w-full object-contain md:h-full md:w-9/12 "
          />
        </div>
      )}
      <Footer />
    </div>
  );
}

export default MyAccount;
