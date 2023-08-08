/* eslint-disable react/prop-types */
import React from "react";
import Navbar from "../components/Navbar";
import CourseCard from "../components/CourseCard";
import MathCourse from "../assets/MathCourse.svg";
import ChemistryCourse from "../assets/ChemistryCourse.svg";
import PhysicsCourse from "../assets/PhysicsCourse.svg";
import { useAuth0 } from "@auth0/auth0-react";
import Footer from "../components/Footer";
import CourseList from "../components/CourseList";

function MyAccount({ isAuthenticated, user }) {
  return (
    <>
      <Navbar isAuthenticated={isAuthenticated} />
      {isAuthenticated && (
        <div className="px-20 pt-16 text-3xl font-bold flex items-center justify-center">
          Welcome{" "}
          <p className="ml-2 mr-0.5 text-primary-600 font-black">
            {user.nickname}
          </p>{" "}
          !
        </div>
      )}
      <Footer />
    </>
  );
}

export default MyAccount;
