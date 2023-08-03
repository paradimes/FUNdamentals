/* eslint-disable react/prop-types */
import React from "react";
import { useNavigate } from "react-router-dom";

export default function CourseCard({ courseImg, heading, title, description }) {
  const navigate = useNavigate();

  const handleButtonClicked = () => {
    navigate("/courses/detailed");
  };

  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
      <div className="md:flex">
        <div className="md:shrink-0">
          <img
            className="h-48 w-full object-contain md:h-full md:w-48 "
            src={courseImg}
            alt="Modern building architecture"
          />
        </div>
        <div className="p-8 ">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
            {heading}
          </div>
          <a
            href="#"
            className="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
          >
            {title}
          </a>
          <p className="mt-2 text-slate-500">{description}</p>
          <button
            onClick={handleButtonClicked}
            className="bg-indigo-600 text-white px-2 py-1 rounded-xl mt-2"
          >
            Details
          </button>
        </div>
      </div>
    </div>
  );
}
