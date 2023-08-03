import React from "react";
import MathCourse from "../assets/MathCourse.svg";
import ChemistryCourse from "../assets/ChemistryCourse.svg";
import PhysicsCourse from "../assets/PhysicsCourse.svg";
import CourseCard from "./CourseCard";

export default function CourseList() {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 ">
        <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            Available courses
          </h2>
          <p className="font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400">
            Take a look at our current catalogue of fundamentals.
          </p>
        </div>
        <div className="grid gap-8 mb-6 lg:mb-16 md:grid-cols-2">
          <CourseCard courseImg="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png" />
          <CourseCard courseImg={MathCourse} />
          <CourseCard courseImg={ChemistryCourse} />
          <CourseCard courseImg={PhysicsCourse} />
        </div>
      </div>
    </section>
  );
}
