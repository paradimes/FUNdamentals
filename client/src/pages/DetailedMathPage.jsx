/* eslint-disable react/prop-types */
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CourseTOC from "../components/CourseTOC";
import courseInfo from "../courseInfo.json";
import CourseCardDetailed from "../components/CourseCardDetailed";
import MathCourse from "../assets/MathCourse.svg";

const title = courseInfo["precalculusKhanAcademy"].title;
const description = courseInfo["precalculusKhanAcademy"].description;
const tableOfContents = courseInfo["precalculusKhanAcademy"].tableOfContents;

export default function DetailedMathPage({ isAuthenticated }) {
  return (
    <section className=" flex flex-col h-screen bg-white dark:bg-gray-900">
      <Navbar isAuthenticated={isAuthenticated} />
      <div className="flex-grow items-center justify-center flex flex-col bg-white dark:bg-gray-900">
        <CourseCardDetailed
          courseImg={MathCourse}
          heading={"Khan Academy"}
          title={title}
          description={description}
          link={"https://www.khanacademy.org/math/precalculus"}
        />
        <CourseTOC tableOfContents={tableOfContents} />
      </div>
      <Footer />
    </section>
  );
}
