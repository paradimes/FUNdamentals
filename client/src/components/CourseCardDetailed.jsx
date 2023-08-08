/* eslint-disable react/prop-types */
import React from "react";
// import { useNavigate } from "react-router-dom";

export default function CourseCardDetailed({
  courseImg,
  heading,
  title,
  description,
  link,
}) {
  return (
    <div className="max-w-md mx-auto bg-white dark:bg-slate-800 rounded-xl overflow-hidden md:max-w-2xl">
      <div className="md:shrink-0items-center justify-center flex mt-5">
        <img
          className="h-48 w-full object-contain md:h-full md:w-48 "
          src={courseImg}
          alt="Modern building architecture"
        />
      </div>
      <div className="max-w-3xl mx-auto text-center mt-6">
        <h2 className="text-4xl font-extrabold leading-tight tracking-tight text-gray-900 dark:text-white">
          About
        </h2>
      </div>
      <div className="md:flex">
        <div className="p-8 ">
          <div className="uppercase tracking-wide text-sm text-green-500 font-semibold">
            {heading}
          </div>
          <a
            href={link}
            className="block mt-1 text-lg leading-tight font-medium text-black dark:text-slate-300 hover:underline"
          >
            {title}
          </a>
          <p className="mt-2 text-slate-500 dark:text-slate-400">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
