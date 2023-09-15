/* eslint-disable react/prop-types */
import React from "react";

const TableOfContents2 = ({ section }) => (
  <div
    className=" flex flex-col justify-center min-w-fit border-4 border-white p-4 rounded-xl cursor-pointer
   bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-600  dark:from-yellow-600 dark:via-yellow-700 dark:to-yellow-800 text-black dark:text-white
  "
  >
    <h2 className="text-xl ">
      {section.number}. {section.title}
    </h2>
    {section.subsections.length > 0 && (
      <ul className="pl-8 ">
        {section.subsections.map((subsection) => (
          <li key={subsection.number} className="p-1">
            {/* <TableOfContents2 section={subsection} /> */}
            <Subsection section={subsection} />
          </li>
        ))}
      </ul>
    )}
  </div>
);

const Subsection = ({ section }) => (
  <div className=" flex flex-col justify-center min-w-fit px-2 py-1 rounded-xl bg-yellow-200 dark:bg-black dark:hover:bg-slate-700 hover:bg-yellow-500     ">
    <h2 className="text-xl cursor-pointer">
      {section.number}. {section.title}
    </h2>
    {section.subsections.length > 0 && (
      <ul className="pl-8 ">
        {section.subsections.map((subsection) => (
          <li
            key={subsection.number}
            className="p-1 dark:hover:bg-slate-400 hover:bg-yellow-300 rounded-xl"
          >
            <Subsection section={subsection} />
          </li>
        ))}
      </ul>
    )}
  </div>
);

export default TableOfContents2;
