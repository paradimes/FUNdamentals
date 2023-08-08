/* eslint-disable react/prop-types */
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CourseTOC from "../components/CourseTOC";
import { courseInfo } from "../../../scripts";
import CourseCardDetailed from "../components/CourseCardDetailed";
import ChemistryCourse from "../assets/ChemistryCourse.svg";

const title = courseInfo["chemistryKhanAcademy"].title;
const description = courseInfo["chemistryKhanAcademy"].description;
const tableOfContents = courseInfo["chemistryKhanAcademy"].tableOfContents;

export default function DetailedChemistryPage({ isAuthenticated }) {
  return (
    <section className="bg-white dark:bg-gray-900">
      <Navbar isAuthenticated={isAuthenticated} />
      <CourseCardDetailed
        courseImg={ChemistryCourse}
        heading={"Khan Academy"}
        title={title}
        description={description}
        link={"https://www.khanacademy.org/science/chemistrys/"}
      />
      <CourseTOC tableOfContents={tableOfContents} />
      <Footer />
    </section>
  );
}
