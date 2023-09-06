import React, { useEffect, useState } from "react";
import ResourceCard from "./ResourceCard";

export default function TopicSearch() {
  const [topic, setTopic] = useState("");
  const [resources, setResources] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [resourceCards, setResourceCards] = useState([]);

  async function handleSubmit(event) {
    event.preventDefault();
    setResources("");
    setLoading(true);
    try {
      const response = await fetch(
        "http://localhost:8081/openai/generateinfo",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ topic }),
        }
      );

      const resources = await response.json();

      if (resources.data) {
        setResources(resources.data);
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
  useEffect(() => {
    try {
      if (resources) {
        const parsedResources = JSON.parse(resources);
        const newResourceCards = [];

        for (const resourceId in parsedResources) {
          const resource = parsedResources[resourceId];
          newResourceCards.push(
            <ResourceCard
              key={resourceId}
              title={resource.title}
              to={resource.link}
              number={resourceId}
            />
          );
        }
        setResourceCards(newResourceCards);
      }
    } catch (error) {
      console.log(error);
    }
  }, [resources]);

  return (
    <div
      id="topic"
      className="flex flex-col items-center justify-center gap-10"
    >
      <form
        className="flex flex-row items-center justify-center gap-5 px-8 py-24 w-full bg-gradient-to-r from-indigo-300 via-indigo-500 to-indigo-600
        dark:from-indigo-600 dark:via-indigo-800 dark:to-indigo-900
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
        <p>An error occurred: {error.errorMessage}</p>
      ) : resources.length ? (
        <div
          className="p-12 min-w-fit min-h-fit grid-cols-1 sm:grid-cols-2 grid md:grid-cols-3 lg:grid-cols-4 gap-4 bg-gradient-to-r from-indigo-300 via-indigo-400 to-indigo-600
        dark:from-indigo-600 dark:via-indigo-700 dark:to-indigo-800 m-5 rounded-xl"
        >
          {resourceCards}
        </div>
      ) : null}
    </div>
  );
}
