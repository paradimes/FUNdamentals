/* eslint-disable react/prop-types */
import React from "react";
import { Link } from "react-router-dom";

export default function SavedItemCard({ item }) {
  return (
    <div className="border-2 border-blue-600 bg-slate-400 p-6 rounded-xl text-black flex flex-col items-center justify-center gap-5">
      <h1 className="font-bold text-white text-xl">{item.topic}</h1>
      <button className="rounded-xl px-2 py-1 bg-orange-600">
        <Link
          to={{
            pathname: "/saved/detailed",
          }}
          state={item}
        >
          View
        </Link>
      </button>
    </div>
  );
}
