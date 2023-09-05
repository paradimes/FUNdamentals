import React, { useState } from "react";

export default function TopicSearch() {
  const [topic, setTopic] = useState("");
  const [resources, setResources] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

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
        console.log(resources);
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

  if (resources.length) {
    let resourceListJSON = JSON.parse(resources);
    console.log(resourceListJSON);

    // let resourceList = resourceListJSON.map((resource) => {
    //   console.log(resource);
    // });
  }

  return (
    <div
      id="topic"
      className="flex flex-col items-center justify-center bg-blue-200 p-24 gap-10"
    >
      <form
        className="flex flex-col items-center justify-center gap-5"
        onSubmit={handleSubmit}
      >
        <label className="flex flex-col">
          Enter your topic...
          <input
            onChange={(e) => setTopic(e.target.value)}
            type="text"
            placeholder="piano, java, leonardo da vinci..."
            className="p-4 w-96"
          />
        </label>
        <button
          type="submit"
          className="bg-blue-300 p-4 mx-4 hover:bg-blue-500"
        >
          Submit
        </button>
      </form>
      <div
        id="output"
        className="border-4 border-green-600 p-12 min-w-fit min-h-fit"
      >
        {loading && <div> Loading....</div>}
        {error ? (
          <p>An error occurred: {error.errorMessage}</p>
        ) : resources ? (
          resources
        ) : null}
      </div>
    </div>
  );
}
