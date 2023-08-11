/* eslint-disable react/prop-types */
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CourseTOC from "../components/CourseTOC";
import courseInfo from "../courseInfo.json";
import CourseCardDetailed from "../components/CourseCardDetailed";
import BiologyCourse from "../assets/BiologyCourse.svg";

const title = courseInfo["biologyKhanAcademy"].title;
const description = courseInfo["biologyKhanAcademy"].description;
const tableOfContents = courseInfo["biologyKhanAcademy"].tableOfContents;

export default function DetailedBiologyPage({ isAuthenticated }) {
  return (
    <section className=" flex flex-col h-screen bg-white dark:bg-gray-900">
      <Navbar isAuthenticated={isAuthenticated} />
      <div className="flex-grow items-center justify-center flex flex-col bg-white dark:bg-gray-900">
        <CourseCardDetailed
          courseImg={BiologyCourse}
          heading={"Khan Academy"}
          title={title}
          description={description}
          link={"https://www.khanacademy.org/science/biology"}
        />
        <CourseTOC tableOfContents={tableOfContents} />
      </div>
      <Footer />
    </section>
  );
}
