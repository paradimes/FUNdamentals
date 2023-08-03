import React from "react";
import Navbar from "../components/Navbar";
import CourseCard from "../components/CourseCard";
import MathCourse from "../assets/MathCourse.svg";
import ChemistryCourse from "../assets/ChemistryCourse.svg";
import PhysicsCourse from "../assets/PhysicsCourse.svg";
import { useAuth0 } from "@auth0/auth0-react";

function Home() {
  const { user, isAuthenticated } = useAuth0();

  return (
    <>
      <Navbar />
      {isAuthenticated && (
        <div className="px-20 pt-16 text-3xl font-bold flex">
          Welcome{" "}
          <p className="ml-2 mr-0.5 text-primary-600 font-black">
            {user.nickname}
          </p>{" "}
          !
        </div>
      )}
      <section
        id="courses"
        className="flex flex-wrap items-center justify-center mt-20 gap-10"
      >
        <CourseCard courseName="Mathematics" courseImg={MathCourse} />
        <CourseCard courseName="Physics" courseImg={PhysicsCourse} />
        <CourseCard courseName="Chemistry" courseImg={ChemistryCourse} />
      </section>
    </>
  );
}

export default Home;
