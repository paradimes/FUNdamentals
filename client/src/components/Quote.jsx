import React from "react";
import naval from "../assets/naval.jpg";

export default function Quote() {
  return (
    <section className="bg-slate-200 dark:bg-slate-600 rounded-3xl ">
      <div className="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6 ">
        <figure className="max-w-screen-md mx-auto">
          <svg
            className="h-12 mx-auto mb-3 text-gray-400 dark:text-gray-900"
            viewBox="0 0 24 27"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
              fill="currentColor"
            />
          </svg>
          <blockquote>
            <p className="text-xl font-normal text-gray-900 dark:text-white ">
              &quot;I’m sure 90% of you had this happen to you, when you were
              learning mathematics. At some point, you were keeping up, you were
              doing arithmetic, then you were doing geometry, then trigonometry,
              pre-calculus, and calculus.
              <br />
              <br />
              Somewhere in there, you got lost. Somewhere while building this
              massive edifice (the logical structure of mathematics) you missed
              one lesson. You missed one concept, just a few classes, or your
              brain couldn’t think the specific way something was being
              explained. It should have been explained visually, but it was
              being explained numerically. Or it should have been explained
              symbolically and it was being explained in cartography. You were
              not able to keep up.
              <br />
              <br />
              The moment you miss a rung in the ladder of mathematics, you can’t
              go to the next one. The teacher says, “We’re done with
              pre-calculus, we’re moving on to calculus.” You’re saying, “Wait,
              I didn’t understand pre-calculus. I didn’t understand how
              pre-calculus leads from trigonometry to calculus. I missed that
              whole part.”
              <br />
              <br />
              Now you get to calculus, and you don’t understand the
              fundamentals. Now, you’re reduced to memorization. You’re like,
              “DX/DY. When I see the symbol, I do this.” You’ve lost the actual
              learning. You’ve lost the connection to the underlying principles.
              <br />
              <br />
              We teach all these kids calculus and they walk out not
              understanding calculus at all.&quot;
              <br />
              <br />
              &quot;I think learning should be about learning the basics in all
              the fields and learning them really well over and over. Life is
              mostly about applying the basics and only doing the advanced work
              in the things you truly love, and where you understand the basics
              inside out. &quot;
            </p>
          </blockquote>
          <figcaption className="flex items-center justify-center mt-6 space-x-3">
            <img
              className="w-24 h-24 rounded-full object-cover "
              src={naval}
              alt="profile picture"
            />
            <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
              <div className="pr-3 font-medium text-gray-900 dark:text-white">
                Naval Ravikant
              </div>
              <div className="pl-3 text-sm font-light text-gray-500 dark:text-gray-200">
                Co-founder, Chairman, and former CEO of AngelList
              </div>
            </div>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
