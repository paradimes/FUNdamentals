/* eslint-disable react/prop-types */
import React from "react";

export default function ResourceCard({ title, to, number }) {
  return (
    <div className=" mx-auto bg-indigo-500 dark:bg-indigo-800 rounded-xl shadow-md overflow-hidden flex flex-col items-center justify-center p-4 gap-2 w-56 h-56 min-h-fit min-w-fit ">
      <p className="block text-lg leading-tight font-medium text-white dark:text-white text-center ">
        {number}. {title}
      </p>
      <a
        href={to}
        target="_blank"
        className="bg-indigo-600 text-white px-2 py-1 rounded-xl mt-5 hover:underline"
        rel="noreferrer"
      >
        Open
      </a>
    </div>
  );
}
