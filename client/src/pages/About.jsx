/* eslint-disable react/prop-types */
import React from "react";
import FeatureList from "../components/FeatureList";
import Navbar from "../components/Navbar";
import PricingCards from "../components/PricingCards";
import Footer from "../components/Footer";

export default function About({ isAuthenticated }) {
  return (
    <div className="bg-white dark:bg-slate-900">
      <Navbar isAuthenticated={isAuthenticated} />
      <section className="h-screen flex flex-col items-center justify-center">
        <div className="mx-20 px-32 py-16 rounded-xl dark:bg-slate-800 font-black">
          Hello. Welcome to FUNdamentals. The aim of this website is to help you
          learn the most important concepts, from the ground up. We understand
          that not everyone learns at the same rate, and that if you missed even
          one chain in the link, you might have a gap in your understanding.
          <br />
          This is partly inspired by Naval Ravikant&apos;s quote: &quot;I think
          learning should be about learning the basics in all the fields and
          learning them really well over and over. Life is mostly about applying
          the basics and only doing the advanced work in the things you truly
          love, and where you understand the basics inside out.&quot;
          <br />
          <br />
          &quot;I’m sure 90% of you had this happen to you, when you were
          learning mathematics. At some point, you were keeping up, you were
          doing arithmetic, then you were doing geometry, then trigonometry,
          pre-calculus, and calculus. <br />
          Somewhere in there, you got lost. Somewhere while building this
          massive edifice (the logical structure of mathematics) you missed one
          lesson. You missed one concept, just a few classes, or your brain
          couldn’t think the specific way something was being explained. It
          should have been explained visually, but it was being explained
          numerically. Or it should have been explained symbolically and it was
          being explained in cartography. You were not able to keep up. <br />
          The moment you miss a rung in the ladder of mathematics, you can’t go
          to the next one. The teacher says, “We’re done with pre-calculus,
          we’re moving on to calculus.” You’re saying, “Wait, I didn’t
          understand pre-calculus. I didn’t understand how pre-calculus leads
          from trigonometry to calculus. I missed that whole part.” <br />
          Now you get to calculus, and you don’t understand the fundamentals.
          Now, you’re reduced to memorization. You’re like, “DX/DY. When I see
          the symbol, I do this.” You’ve lost the actual learning. You’ve lost
          the connection to the underlying principles. <br />
          We teach all these kids calculus and they walk out not understanding
          calculus at all.&quot;
        </div>
      </section>
      <Footer />
    </div>
  );
}
