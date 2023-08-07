/* eslint-disable react/prop-types */
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CourseTOC from "../components/CourseTOC";

export default function DetailedCourseView({ isAuthenticated }) {
  return (
    <>
      <Navbar isAuthenticated={isAuthenticated} />
      <CourseTOC />
      <Footer />
    </>
  );
}
