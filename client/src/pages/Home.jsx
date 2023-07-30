import React from "react";
import Navbar from "../components/Navbar";
import CourseCard from "../components/CourseCard";
import MathCourse from "../assets/MathCourse.svg";
import ChemistryCourse from "../assets/ChemistryCourse.svg";
import PhysicsCourse from "../assets/PhysicsCourse.svg";

function Home() {
  return (
    <div>
      <Navbar />
      <section
        id="courses"
        className="flex items-center justify-center mt-20 gap-10"
      >
        <CourseCard courseName="Mathematics" courseImg={MathCourse} />
        <CourseCard courseName="Physics" courseImg={PhysicsCourse} />
        <CourseCard courseName="Chemistry" courseImg={ChemistryCourse} />
      </section>
    </div>
  );
}

export default Home;
