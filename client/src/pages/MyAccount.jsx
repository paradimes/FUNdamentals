/* eslint-disable react/prop-types */
import React from "react";
import Navbar from "../components/Navbar";
import MathCourse from "../assets/MathCourse.svg";
import Footer from "../components/Footer";
import UserProfileCard from "../components/userProfileCard";

function MyAccount({ isAuthenticated, user }) {
  return (
    <div className="flex flex-col h-screen">
      <Navbar isAuthenticated={isAuthenticated} />
      {isAuthenticated && (
        // <>
        <div className="flex-grow ">
          <h1 className="px-20 pt-16 text-3xl font-bold flex items-center justify-center mb-10">
            Welcome{" "}
            <p className="ml-2 mr-0.5 text-primary-600 font-black">
              {user.nickname}
            </p>{" "}
            !
          </h1>
          <UserProfileCard courseImg={MathCourse} />
        </div>
        // </>
      )}
      <Footer />
    </div>
  );
}

export default MyAccount;
