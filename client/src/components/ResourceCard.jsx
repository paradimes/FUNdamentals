/* eslint-disable react/prop-types */
import React from "react";
import { useNavigate } from "react-router-dom";

export default function ResourceCard({
  //   courseImg,
  //   heading,
  title,
  //   description,
  to,
}) {
  const navigate = useNavigate();

  const handleButtonClicked = () => {
    navigate(to);
  };

  return (
    <div className="max-w-md mx-auto bg-white dark:bg-slate-800 rounded-xl shadow-md overflow-hidden md:max-w-2xl">
      <div className="md:flex md:flex-col lg:flex-row">
        {/* <div className="md:shrink-0 mt-5 md:flex md:items-center md:justify-center">
          <img
            className="h-48 w-full object-contain md:h-full md:w-48  "
            src={courseImg}
            alt="Course Image"
          />
        </div> */}
        <div className="p-8 ">
          {/* <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
            {heading}
          </div> */}
          <a
            href="#"
            className="block mt-1 text-lg leading-tight font-medium text-black dark:text-white hover:underline"
          >
            {title}
          </a>
          {/* <p className="mt-2 text-slate-500 dark:text-slate-400">
            {description}
          </p> */}
          <button
            onClick={handleButtonClicked}
            className="bg-indigo-600 text-white px-2 py-1 rounded-xl mt-5"
          >
            Details
          </button>
        </div>
      </div>
    </div>
  );
}
