import React from "react";
import { Link } from "react-router-dom";
import Person from "../assets/Person.svg";
import Person2 from "../assets/Person2.svg";

export default function HomePageHero() {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 overflow-hidden">
        <div className="mr-auto place-self-center lg:col-span-7">
          <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-slate-500 dark:text-white">
            Our only goal is for you to learn.
          </h1>
          <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
            A curated set of resources to help you build your understanding from
            the ground up.
          </p>
          <Link
            to={"/courses"}
            className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
          >
            Get started
            <svg
              className="w-5 h-5 ml-2 -mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </Link>
        </div>
        <div className=" lg:mt-0 lg:col-span-5 lg:flex flex flex-row my-5 items-center justify-center w-72 border-8 border-green-400 ml-20 rounded-xl object-contain ">
          <img src={Person} alt="mockup" />
          <img src={Person2} alt="mockup" />
        </div>
      </div>
    </section>
  );
}