import React, { useEffect, useState } from "react";
import ResourceCard from "./ResourceCard";
import TableOfContents from "./TableOfContents";
import TableOfContents2 from "./TableOfContents2";

function parseResponseString(contentString) {
  const contentArray = contentString.split(/\n\n|\n/);
  console.log("contentArray = ", contentArray);
  const sections = [];
  let currentSection = null;
  let currentSubsection = null;

  contentArray.forEach((item) => {
    if (/^\d+\.\s/.test(item)) {
      // This is a section heading
      const sectionNumber = item.match(/^\d+/)[0];
      const sectionTitle = item.replace(/^\d+\.\s/, "");

      currentSection = {
        number: sectionNumber,
        title: sectionTitle,
        subsections: [],
      };
      sections.push(currentSection);
    } else if (/^\s+\d+\.\d+\s/.test(item)) {
      // This is a subsection heading
      const subsectionNumber = item.match(/^\s+\d+\.\d+/)[0];
      const subsectionTitle = item.replace(/^\s+\d+\.\d+\s/, "");

      currentSubsection = {
        number: subsectionNumber,
        title: subsectionTitle,
      };
      currentSection.subsections.push(currentSubsection);
    } else {
      // This is content under the subsection
      if (currentSubsection) {
        if (!currentSubsection.subsections) {
          currentSubsection.subsections = [];
        }
        currentSubsection.subsections.push(item);
      }
    }
  });

  return sections;
}

export default function TopicSearchV2() {
  const [topic, setTopic] = useState("");
  const [resources, setResources] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

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
        const parsedSections = parseResponseString(resources.data);
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
  console.log("resourcesAPICall = ", resources);

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
              className="bg-blue-600 text-white p-4 mx-4 hover:bg-blue-700 rounded-xl text-cente font-semibold "
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
        // <div
        //   className="p-12 min-w-fit min-h-fit grid-cols-1 sm:grid-cols-2 grid md:grid-cols-3 lg:grid-cols-4 gap-4 bg-gradient-to-r from-indigo-300 via-indigo-400 to-indigo-600
        // dark:from-indigo-600 dark:via-indigo-700 dark:to-indigo-800 m-5 rounded-xl"
        // >
        //   {/* <h1 className="">mylittletextbook on {topic} </h1> */}
        //   {/* {resourceCards} */}
        //   {resources}
        // </div>
        <div
          className="p-12 min-w-fit min-h-fit gap-4 bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-600
        // dark:from-yellow-600 dark:via-yellow-700 dark:to-yellow-800 m-5 rounded-xl text-black dark:text-white w-full"
        >
          {/* <TableOfContents parsedSections={resources} /> */}
          {/* {resources} */}
          <TableOfContents2 content={resources} />
        </div>
      ) : // <div>hello</div>
      null}
    </div>
  );
}
