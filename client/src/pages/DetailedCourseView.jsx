/* eslint-disable react/prop-types */
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function DetailedCourseView({ isAuthenticated }) {
  return (
    <>
      <Navbar isAuthenticated={isAuthenticated} />
      <Footer />
    </>
  );
}
