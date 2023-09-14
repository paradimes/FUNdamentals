/* eslint-disable react/prop-types */
import React from "react";

export default function TableOfContents({ parsedSections }) {
  return (
    <div className="table-of-contents">
      {parsedSections.map((section, index) => (
        <div key={index} className="section">
          <h1 className="text-3xl font-bold text-yellow-500">
            {section.title}
          </h1>
          <ul className="mb-10 list-none ">
            {section.content.map((item, i) => (
              <li key={i} className="whitespace-pre-wrap">
                {/* {console.log(item)} */}
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
