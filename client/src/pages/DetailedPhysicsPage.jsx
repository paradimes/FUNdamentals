/* eslint-disable react/prop-types */
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CourseTOC from "../components/CourseTOC";
import courseInfo from "../courseInfo.json";
import CourseCardDetailed from "../components/CourseCardDetailed";
import PhysicsCourse from "../assets/PhysicsCourse.svg";

const title = courseInfo["1_classicalMechanicsMIT"].title;
const description = courseInfo["1_classicalMechanicsMIT"].description;
const tableOfContents = courseInfo["1_classicalMechanicsMIT"].tableOfContents;

export default function DetailedPhysicsPage({ isAuthenticated }) {
  return (
    <section className="bg-white dark:bg-gray-900">
      <Navbar isAuthenticated={isAuthenticated} />
      <CourseCardDetailed
        courseImg={PhysicsCourse}
        heading={"MIT"}
        title={title}
        description={description}
        link={
          "https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/pages/syllabus/"
        }
      />
      <CourseTOC tableOfContents={tableOfContents} />
      <Footer />
    </section>
  );
}
