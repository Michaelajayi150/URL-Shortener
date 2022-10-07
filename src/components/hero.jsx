import React from "react";
import { workingIllustration } from "../assets";

function Hero() {
  return (
    <section className="px-4 max-w-screen-lg mx-auto bg-white sm:flex flex-row-reverse mt-4">
      <div>
        <img src={workingIllustration} alt="Illustartion of woman working" />
      </div>
      <div className="text-center mt-6 sm:text-start md:mr-8">
        <h1 className="text-4xl font-bold text-very_dark_blue md:text-5xl lg:text-6xl">
          More than just shorter links
        </h1>
        <p className="mt-2 mb-6 text-grayish_violet">
          Build your brand’s recognition and get detailed insights on how your
          links are performing.
        </p>
        <span className="w-fit cursor-pointer py-3 px-8 text-white bg-cyan hover:bg-light_cyan rounded-full font-semibold">
          Get Started
        </span>
      </div>
    </section>
  );
}

export default Hero;
