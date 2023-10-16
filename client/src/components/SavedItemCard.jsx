/* eslint-disable react/prop-types */
import React from "react";
import { Link } from "react-router-dom";

export default function SavedItemCard({ item, onDelete }) {
  const handleDelete = () => {
    onDelete(item._id);
  };
  return (
    <div className="p-6 text-black flex flex-col items-center justify-center gap-5 max-w-md  bg-white dark:bg-slate-800 rounded-xl shadow-md overflow-hidden md:max-w-2xl hover:bg-gray-700 dark:hover:bg-gray-700 card-style">
      <h1 className="font-bold text-white dark:text-white text-xl">
        {item.topic}
      </h1>
      <div className="flex gap-3 items-center justify-center">
        <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-2 py-1 rounded-xl mt-5">
          <Link
            to={{
              pathname: "/saved/detailed",
            }}
            state={item}
          >
            View
          </Link>
        </button>
        <button
          onClick={handleDelete}
          className="bg-indigo-900 hover:bg-black text-white px-2 py-1 rounded-xl mt-5"
        >
          Delete
        </button>
      </div>
    </div>
  );
}
