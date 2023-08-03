import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CourseList from "../components/CourseList";

export default function AllCourses() {
  return (
    <>
      <Navbar />
      <CourseList />
      <Footer />
    </>
  );
}
