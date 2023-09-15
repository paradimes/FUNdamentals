/* eslint-disable react/prop-types */
import React from "react";

const TableOfContents2 = ({ section }) => (
  <div className=" flex flex-col w-full">
    <h2 className="text-xl">
      {section.number} {section.title}
    </h2>
    {section.subsections.length > 0 && (
      <ul className="pl-8">
        {section.subsections.map((subsection) => (
          <li key={subsection.number}>
            <TableOfContents2 section={subsection} />
          </li>
        ))}
      </ul>
    )}
  </div>
);

export default TableOfContents2;
