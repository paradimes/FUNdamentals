/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import TableOfContents2 from "./TableOfContents2";
import { resourcesDataString } from "../constants";
import { toTitleCase } from "../utils/stringUtils";

function removeLeadingWhitespaces(contentArray) {
  return contentArray.map((item) => item.replace(/^\s+/, ""));
}

function parseContentString(contentString) {
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

export default function TopicSearchV2({ isAuthenticated, user = {} }) {
  const [topic, setTopic] = useState("");
  const [resources, setResources] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [formattedTopic, setFormattedTopic] = useState(toTitleCase(topic));
  console.log(user);

  useEffect(() => {
    setFormattedTopic(toTitleCase(topic));
  }, [topic]);

  const handleSaveButtonClick = async () => {
    // Send a request to your backend to save the resources
    const response = await fetch("http://localhost:8081/api/saveResources", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userEmail: user.email,
        resources,
        formattedTopic,
      }),
    });

    // Handle the response...
    if (response.ok) {
      alert("Resources saved successfully");
    } else {
      alert("Failed to save resources");
    }
  };

  function handleSubmit2(event) {
    event.preventDefault();
    const parsedSections = parseContentString(resourcesDataString);
    console.log("parsedSections === ", parsedSections);
    setResources(parsedSections);
  }

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
        console.log("resources (response string) === ", resources);

        const parsedSections = parseContentString(resources.data);
        console.log("parsedSections", parsedSections);
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

  return (
    <div
      id="topic"
      className="flex flex-col items-center justify-center gap-10 "
    >
      <div className=" w-full ">
        <form
          className="flex flex-row items-center justify-center gap-5 px-8 py-24 w-full
        bg-gradient-to-r from-indigo-300 via-indigo-500 to-indigo-600
        dark:from-indigo-600 dark:via-indigo-800 dark:to-indigo-900
        "
          onSubmit={handleSubmit}
        >
          <label
            htmlFor="topic"
            className="flex flex-col gap-3 text-white dark:text-white"
          >
            <strong>Enter your topic</strong>
            <div className="flex flex-col md:flex-row gap-5">
              <input
                onChange={(e) => setTopic(e.target.value)}
                type="text"
                id="topic"
                placeholder="Web Development, Filmmaking, UI Design..."
                className="p-4 flex-grow rounded-xl md:w-full md:max-w-sm
                 text-black bg-slate-200 dark:bg-slate-700 dark:text-white placeholder-slate-400 border-2 border-slate-400"
              />
              <button
                type="submit"
                className="bg-indigo-600 text-white p-4 hover:bg-indigo-700 rounded-xl text-center font-semibold"
              >
                Submit
              </button>
            </div>
          </label>
        </form>
      </div>
      {loading && (
        <div className="flex items-center justify-center">
          <span className="loading loading-dots loading-lg text-indigo-500 dark:text-indigo-500 "></span>
        </div>
      )}
      {error ? (
        <span>An error occurred: {error.errorMessage}</span>
      ) : resources.length ? (
        <div
          className="p-12 min-h-fit flex flex-col items-center
            rounded-xl w-full gap-10 
          bg-indigo-500 dark:bg-indigo-600 text-black dark:text-white"
        >
          {topic && (
            <h1
              className=" text-3xl font-bold bg-indigo-600 text-white dark:bg-indigo-800 px-8 py-2 rounded-xl flex text-center w-fit items-center justify-center
            dark:hover:bg-indigo-400 hover:bg-indigo-300
            "
            >
              Table of Contents:{" " + formattedTopic}
            </h1>
          )}
          {isAuthenticated && (
            <button
              onClick={handleSaveButtonClick}
              className="bg-indigo-200 text-black dark:bg-black dark:text-white p-4 hover:bg-indigo-300 dark:hover:bg-indigo-900 rounded-xl text-center font-semibold"
            >
              Save
            </button>
          )}
          {resources.map((section) => (
            <TableOfContents2 key={section.number} section={section} />
          ))}{" "}
        </div>
      ) : null}
    </div>
  );
}
