/* eslint-disable react/prop-types */
import React from "react";

const TableOfContents2 = ({ section }) => (
  <div
    className=" flex flex-col justify-center min-w-fit border-4 border-white p-4 rounded-xl cursor-pointer
    hover:shadow-black dark:hover:shadow-white  hover:shadow-xl
   bg-indigo-600 dark:bg-indigo-800
    text-black dark:text-white
  "
  >
    <h2 className="text-xl font-bold hover:bg-indigo-500 dark:hover:bg-slate-300 bg-indigo-900 text-white dark:bg-white dark:text-black w-full rounded-xl px-2 py-1 mb-2 ">
      {section.number}. {section.title}
    </h2>
    {section.subsections.length > 0 && (
      <ul className="pl-8 ">
        {section.subsections.map((subsection) => (
          <li key={subsection.number} className="p-1  ">
            {/* <TableOfContents2 section={subsection} /> */}
            <Subsection section={subsection} />
          </li>
        ))}
      </ul>
    )}
  </div>
);

const Subsection = ({ section }) => (
  <div className=" flex flex-col justify-center min-w-fit px-2 py-1 rounded-xl bg-indigo-400 text-white hover:bg-indigo-800  dark:bg-black dark:hover:bg-indigo-500     ">
    <h2 className="text-xl cursor-pointer">
      {section.number}. {section.title}
    </h2>
    {section.subsections.length > 0 && (
      <ul className="pl-8 ">
        {section.subsections.map((subsection) => (
          <li
            key={subsection.number}
            className="p-1 rounded-xl hover:bg-indigo-100 dark:hover:bg-indigo-100"
          >
            <Subsection section={subsection} />
          </li>
        ))}
      </ul>
    )}
  </div>
);

export default TableOfContents2;
