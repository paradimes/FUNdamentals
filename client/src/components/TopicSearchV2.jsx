import React, { useEffect, useState } from "react";
import TableOfContents2 from "./TableOfContents2";

// const contentArray = [
//   "Table of Contents: Rankine Cycle",
//   "1. Introduction to the Rankine Cycle",
//   "   1.1 Definition and Purpose",
//   "   1.2 Importance in Power Generation",
//   "   1.3 Historical Background",
//   "2. Basic Principles of Thermodynamics",
//   "   2.1 Laws of Thermodynamics",
//   "   2.2 Energy Conversion and Heat Transfer",
//   "   2.3 Ideal vs. Real Processes",
//   "3. Components of the Rankine Cycle",
//   "   3.1 Boiler or Steam Generator",
//   "      3.1.1 Function and Types",
//   "         3.1.1.1 Jojo",
//   "         3.1.1.2 Jojo",
//   "      3.1.2 Heat Transfer Mechanisms",
//   "   3.2 Turbine",
//   "      3.2.1 Types and Working Principles",
//   "      3.2.2 Efficiency and Performance",
//   "   3.3 Condenser",
//   "      3.3.1 Purpose and Operation",
//   "      3.3.2 Cooling Methods",
//   "   3.4 Pump",
//   "      3.4.1 Function and Types",
//   "      3.4.2 Work Input and Efficiency",
//   "4. Rankine Cycle Processes",
//   "   4.1 Vaporization or Boiling Process",
//   "      4.1.1 Saturation and Superheated States",
//   "      4.1.2 Heat Addition and Steam Quality",
//   "   4.2 Expansion Process",
//   "      4.2.1 Adiabatic and Isentropic Expansion",
//   "      4.2.2 Work Output and Efficiency",
//   "   4.3 Condensation Process",
//   "      4.3.1 Heat Rejection and Cooling",
//   "      4.3.2 Subcooling and Condenser Performance",
//   "   4.4 Pumping Process",
//   "      4.4.1 Compression and Work Input",
//   "      4.4.2 Pressure Increase and Efficiency",
//   "5. Rankine Cycle Analysis and Performance",
//   "   5.1 Efficiency Calculation",
//   "      5.1.1 Carnot Efficiency and Rankine Efficiency",
//   "      5.1.2 Factors Affecting Efficiency",
//   "   5.2 Heat Rate and Specific Steam Consumption",
//   "      5.2.1 Definitions and Formulas",
//   "      5.2.2 Importance in Power Plant Operation",
//   "   5.3 Improving Rankine Cycle Performance",
//   "      5.3.1 Regenerative Feed Heating",
//   "      5.3.2 Reheating and Superheating",
//   "      5.3.3 Combined Cycle Configurations",
//   "6. Applications of the Rankine Cycle",
//   "   6.1 Steam Power Plants",
//   "      6.1.1 Thermal Power Plants",
//   "      6.1.2 Nuclear Power Plants",
//   "   6.2 Geothermal Power Plants",
//   "   6.3 Waste Heat Recovery Systems",
//   "   6.4 Solar Thermal Power Plants",
//   "7. Challenges and Future Developments",
//   "   7.1 Environmental Impact and Emissions",
//   "   7.2 Integration with Renewable Energy Sources",
//   "   7.3 Advanced Rankine Cycle Technologies",
//   "      7.3.1 Supercritical and Ultra-Supercritical Cycles",
//   "      7.3.2 Organic Rankine Cycle (ORC)",
//   "      7.3.3 Combined Heat and Power (CHP) Systems",
//   "8. Conclusion",
//   "   8.1 Summary of Key Concepts",
//   "   8.2 Importance and Applications",
//   "   8.3 Future Prospects and Research Areas",
// ];

const contentArrayNoSpace = [
  "Table of Contents: Rankine Cycle",
  "1. Introduction to the Rankine Cycle",
  "1.1 Definition and Purpose",
  "1.2 Importance in Power Generation",
  "1.3 Historical Background",
  "2. Basic Principles of Thermodynamics",
  "2.1 Laws of Thermodynamics",
  "2.2 Energy Conversion and Heat Transfer",
  "2.3 Ideal vs. Real Processes",
  "3. Components of the Rankine Cycle",
  "3.1 Boiler or Steam Generator",
  "3.1.1 Function and Types",
  "3.1.1.1 Jojo",
  "3.1.1.2 Jojo",
  "3.1.2 Heat Transfer Mechanisms",
  "3.2 Turbine",
  "3.2.1 Types and Working Principles",
  "3.2.2 Efficiency and Performance",
  "3.3 Condenser",
  "3.3.1 Purpose and Operation",
  "3.3.2 Cooling Methods",
  "3.4 Pump",
  "3.4.1 Function and Types",
  "3.4.2 Work Input and Efficiency",
  "4. Rankine Cycle Processes",
  "4.1 Vaporization or Boiling Process",
  "4.1.1 Saturation and Superheated States",
  "4.1.2 Heat Addition and Steam Quality",
  "4.2 Expansion Process",
  "4.2.1 Adiabatic and Isentropic Expansion",
  "4.2.2 Work Output and Efficiency",
  "4.3 Condensation Process",
  "4.3.1 Heat Rejection and Cooling",
  "4.3.2 Subcooling and Condenser Performance",
  "4.4 Pumping Process",
  "4.4.1 Compression and Work Input",
  "4.4.2 Pressure Increase and Efficiency",
  "5. Rankine Cycle Analysis and Performance",
  "5.1 Efficiency Calculation",
  "5.1.1 Carnot Efficiency and Rankine Efficiency",
  "5.1.2 Factors Affecting Efficiency",
  "5.2 Heat Rate and Specific Steam Consumption",
  "5.2.1 Definitions and Formulas",
  "5.2.2 Importance in Power Plant Operation",
  "5.3 Improving Rankine Cycle Performance",
  "5.3.1 Regenerative Feed Heating",
  "5.3.2 Reheating and Superheating",
  "5.3.3 Combined Cycle Configurations",
  "6. Applications of the Rankine Cycle",
  "6.1 Steam Power Plants",
  "6.1.1 Thermal Power Plants",
  "6.1.2 Nuclear Power Plants",
  "6.2 Geothermal Power Plants",
  "6.3 Waste Heat Recovery Systems",
  "6.4 Solar Thermal Power Plants",
  "7. Challenges and Future Developments",
  "7.1 Environmental Impact and Emissions",
  "7.2 Integration with Renewable Energy Sources",
  "7.3 Advanced Rankine Cycle Technologies",
  "7.3.1 Supercritical and Ultra-Supercritical Cycles",
  "7.3.2 Organic Rankine Cycle (ORC)",
  "7.3.3 Combined Heat and Power (CHP) Systems",
  "8. Conclusion",
  "8.1 Summary of Key Concepts",
  "8.2 Importance and Applications",
  "8.3 Future Prospects and Research Areas",
];

// removeLeadingWhitespaces
function removeLeadingWhitespaces(contentArray) {
  return contentArray.map((item) => item.replace(/^\s+/, ""));
}
// const trimmedContentArray = removeLeadingWhitespaces(contentArray);
// console.log("trimmedContentArray = ", trimmedContentArray);

function parseContentArray(contentString) {
  const contentArray = contentString.split(/\n\n|\n/);
  const trimmedContentArray = removeLeadingWhitespaces(contentArray);

  const contentData = [];
  let currentSection = contentData;
  let stack = [contentData];

  trimmedContentArray.forEach((item) => {
    const sectionMatch = item.match(/^(\d+(?:\.\d+)*)(.*)/);
    if (sectionMatch) {
      const [_, sectionNumber, sectionTitle] = sectionMatch;
      const sectionDepth = sectionNumber.split(".").length - 1;

      const sectionObj = {
        title: sectionTitle.replace(/^\./, "").trim(),
        subsections: [],
        number: sectionNumber.trim(),
      };

      if (sectionDepth === 0) {
        contentData.push(sectionObj);
        currentSection = sectionObj;
        stack = [contentData, currentSection];
      } else {
        while (sectionDepth < stack.length - 1) {
          stack.pop();
        }
        stack[stack.length - 1].subsections.push(sectionObj);
        stack.push(sectionObj);
        currentSection = sectionObj;
      }
    }
  });

  return contentData;
}
//--------------------------------------------------------------------

export default function TopicSearchV2() {
  const [topic, setTopic] = useState("");
  const [resources, setResources] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // function handleSubmit2(event) {
  //   event.preventDefault();
  //   const parsedSections = parseContentArray(trimmedContentArray);
  //   console.log("parsedSections === ", parsedSections);
  //   setResources(parsedSections);
  // }

  async function handleSubmit(event) {
    event.preventDefault();
    setError("");
    // setResources("");
    setLoading(true);
    try {
      const response = await fetch("http://localhost:8081/openai/generateTOC", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ topic }),
      });

      const resources = await response.json();

      if (resources.data) {
        console.log("resources.data (response string) === ", resources.data);

        const parsedSections = parseContentArray(resources.data);
        console.log("parsedSections", parsedSections);
        // setResources(resources.data);
        setResources(parsedSections);
        setLoading(false);
      } else {
        setError("Unable to get topic info");
        setLoading(false);
      }
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  }

  // console.log(resources.split(/\n\n|\n/));
  // console.log("resources = ", resources);

  return (
    <div
      id="topic"
      className="flex flex-col items-center justify-center gap-10"
    >
      <form
        className="flex flex-row items-center justify-center gap-5 px-8 py-24 w-full bg-gradient-to-r from-yellow-300 via-yellow-500 to-yellow-600
        dark:from-yellow-600 dark:via-yellow-800 dark:to-yellow-900
        "
        onSubmit={handleSubmit}
      >
        <label className="flex flex-col gap-3 text-white dark:text-white">
          <strong>Enter your topic</strong>
          <div className="flex flex-row">
            <input
              onChange={(e) => setTopic(e.target.value)}
              type="text"
              placeholder="Web Development, Filmmaking, UI Design..."
              className="p-4 w-96  text-black bg-slate-200 dark:bg-slate-700 dark:text-white placeholder-slate-400 rounded-xl border-2 border-slate-400"
            />
            <button
              type="submit"
              className="bg-yellow-600 text-white p-4 mx-4 hover:bg-yellow-700 rounded-xl text-cente font-semibold "
            >
              Submit
            </button>
          </div>
        </label>
      </form>
      {loading && (
        <div className="flex items-center justify-center">
          <span className="loading loading-dots loading-lg text-indigo-500 dark:text-indigo-500 "></span>
        </div>
      )}
      {error ? (
        <span>An error occurred: {error.errorMessage}</span>
      ) : resources.length ? (
        <div
          className="p-12 min-w min-h-fit flex flex-col items-center
           m-5 rounded-xl w-full gap-10
          bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-600
        // dark:from-yellow-600 dark:via-yellow-700 dark:to-yellow-800 text-black dark:text-white"
        >
          {resources.map((section) => (
            <TableOfContents2 key={section.number} section={section} />
          ))}{" "}
        </div>
      ) : null}
    </div>
  );
}
