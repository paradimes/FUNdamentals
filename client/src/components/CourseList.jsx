import React from "react";
import MathCourse from "../assets/MathCourse.svg";
import ChemistryCourse from "../assets/ChemistryCourse.svg";
import PhysicsCourse from "../assets/PhysicsCourse.svg";
import BiologyCourse from "../assets/BiologyCourse.svg";
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
          <CourseCard
            courseImg={MathCourse}
            heading="Core Collection"
            title="Mathematics"
            description={
              "Master essential mathematical concepts and problem-solving skills in this comprehensive introductory math course covering algebra, geometry, and calculus."
            }
            to={"/courses/detailed/math"}
          />
          <CourseCard
            courseImg={PhysicsCourse}
            heading="Core Collection"
            title="Physics"
            description="Explore the fundamental principles of motion, energy, and forces in this introductory physics course."
            to={"/courses/detailed/classical-mechanics"}
          />
          <CourseCard
            courseImg={BiologyCourse}
            heading="Core Collection"
            title="Biology"
            description={
              "Embark on a fascinating journey to understand the living world, from cellular processes to ecosystems, in this foundational biology course."
            }
            to={"/courses/detailed/bio"}
          />
          <CourseCard
            courseImg={ChemistryCourse}
            heading="Core Collection"
            title="Chemistry"
            description={
              "Discover the building blocks of matter and delve into chemical reactions and properties in this foundational chemistry course."
            }
            to={"/courses/detailed/chem"}
          />
        </div>
      </div>
    </section>
  );
}
