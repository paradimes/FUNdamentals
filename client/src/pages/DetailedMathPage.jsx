/* eslint-disable react/prop-types */
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CourseTOC from "../components/CourseTOC";
import { courseInfo } from "../../../scripts";
import CourseCardDetailed from "../components/CourseCardDetailed";
import MathCourse from "../assets/MathCourse.svg";

const title = courseInfo["precalculusKhanAcademy"].title;
const description = courseInfo["precalculusKhanAcademy"].description;
const tableOfContents = courseInfo["precalculusKhanAcademy"].tableOfContents;

export default function DetailedMathPage({ isAuthenticated }) {
  return (
    <section className="bg-white dark:bg-gray-900">
      <Navbar isAuthenticated={isAuthenticated} />
      <CourseCardDetailed
        courseImg={MathCourse}
        heading={"Khan Academy"}
        title={title}
        description={description}
        link={"https://www.khanacademy.org/math/precalculus"}
      />
      <CourseTOC tableOfContents={tableOfContents} />
      <Footer />
    </section>
  );
}
