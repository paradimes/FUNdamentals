/* eslint-disable react/prop-types */
import React from "react";

function Section({ section }) {
  return (
    <div className="border-4 border-green-600 p-4">
      <h2>
        {section.number} - {section.title}
      </h2>
      {section.subsections.map((subsection) => (
        <Subsection key={subsection.number} subsection={subsection} />
      ))}
    </div>
  );
}

function Subsection({ subsection }) {
  return (
    <div className="border-4 border-blue-600 p-4 ml-4">
      <h3>
        {subsection.number} - {subsection.title}
      </h3>
      {subsection.content && (
        <ul>
          {subsection.content.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

// function Subsection({ subsection, level }) {
//   // Calculate the left margin based on the level of nesting
//   const marginLeft = `${level * 20}px`; // You can adjust the indentation level as needed

//   return (
//     <div style={{ marginLeft }} className="border-4 border-blue-600 p-4">
//       <h3>
//         {subsection.number} - {subsection.title}
//       </h3>
//       {subsection.content && (
//         <ul>
//           {subsection.content.map((item, index) => (
//             <li key={index}>{item}</li>
//           ))}
//         </ul>
//       )}
//       {subsection.subsections.map((subsubsection) => (
//         <Subsection
//           key={subsubsection.number}
//           subsection={subsubsection}
//           level={level + 1}
//         />
//       ))}
//     </div>
//   );
// }

function TableOfContents2({ content }) {
  return (
    <div className="border-4 border-red-600 p-4">
      <h1>Table of Contents: Rankine Cycle</h1>
      {content.map((section, index) => (
        <Section key={index} section={section} />
      ))}
    </div>
  );
}

export default TableOfContents2;
