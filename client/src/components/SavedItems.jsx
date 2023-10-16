/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import SavedItemCard from "./SavedItemCard";
import axios from "axios";

export default function SavedItems({ userEmail }) {
  const [savedItems, setSavedItems] = useState([]);

  const fetchSavedItems = async () => {
    const response = await fetch(
      `http://localhost:8081/api/getSavedItems?userEmail=${userEmail}`
    );
    const data = await response.json();
    setSavedItems(data);
  };

  useEffect(() => {
    fetchSavedItems();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userEmail]);

  const handleDelete = async (id) => {
    await axios.delete("http://localhost:8081/api/deleteSavedItem", {
      data: { savedItemId: id, userEmail },
    });
    fetchSavedItems();
  };

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 ">
        <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            Saved Items
          </h2>
          <p className="font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400">
            Here are your saved topics.
          </p>
        </div>
        <div className="grid gap-8 mb-6 lg:mb-16 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {savedItems &&
            savedItems.map((item) => (
              <SavedItemCard
                key={item._id}
                item={item}
                onDelete={handleDelete}
              />
            ))}
        </div>
      </div>
    </section>
  );
}
