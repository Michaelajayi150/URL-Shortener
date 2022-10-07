import React from "react";
import { brand, custom, desktopBoost, detail, mobileBoost } from "../assets";

function CTA({ data, copyLink, joinclass }) {
  const ctas = [
    {
      h1: "Brand Recognition",
      p: "Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content.",
      image: brand,
    },
    {
      h1: "Detailed Records",
      p: "Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.",
      image: detail,
    },
    {
      h1: "Fully Customizable",
      p: "Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.",
      image: custom,
    },
  ];

  return (
    <section className="relative z-1 bg-gray gray-background text-grayish_violet text-center">
      <div className="px-4 max-w-screen-lg mx-auto">
        <div className="my-16 pt-8 sm:my-12 sm:pt-0 grid grid-cols-1 relative gap-4">
          {data.map((link, index) => (
            <div
              key={index}
              className="bg-white w-full rounded-md flex flex-col text-start xs:items-center xs:flex-row xs:space-x-6 px-6 py-4 xs:justify-between"
            >
              <div className="link-shortened text-very_dark_blue border-b border-solid border-very_dark_blue xs:border-b-0 pb-3 mb-2 xs:pb-0 xs:mb-0">
                {link.former}
              </div>
              <div className="shortened-link flex flex-col space-y-3 xs:space-y-0 xs:items-center xs:flex-row xs:space-x-4">
                <span>{link.new}</span>
                <span
                  onClick={() => copyLink(link)}
                  className={joinclass(
                    link.copied
                      ? "bg-very_dark_violet"
                      : "bg-cyan hover:bg-light_cyan",
                    "w-full text-center xs:w-fit cursor-pointer py-2 px-6 rounded-lg font-semibold text-white"
                  )}
                >
                  {link.copied ? "Copied" : "Copy"}
                </span>
              </div>
            </div>
          ))}
        </div>

        <h2 className="pt-6 text-2xl mb-3 font-bold text-very_dark_blue md:text-3xl">
          Advanced Statistics
        </h2>
        <p className="max-w-lg mx-auto">
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </p>

        <div className="grid gap-16 my-16 sm:grid-cols-2 sm:grid-row-5 md:grid-row-1 md:grid-cols-3 md:gap-4 md:items-start">
          {ctas.map((cta, index) => (
            <div key={index} className={`type-${index + 1} relative`}>
              <div className="bg-white p-6 pt-0 rounded-md md:text-start relative z-10">
                <div className="mx-auto md:mx-0 cta-card bg-dark_violet w-16 h-16 flex items-center justify-center rounded-full">
                  <img className="w-8" src={cta.image} alt={cta.h1} />
                </div>
                <h3 className="text-xl mb-3 font-bold text-very_dark_blue">
                  {cta.h1}
                </h3>
                <p>{cta.p}</p>
              </div>
              {index < ctas.length - 1 ? <div className="line"></div> : null}
            </div>
          ))}
        </div>
      </div>

      <div className="relative bg-dark_violet py-16 mt-16 overflow-hidden">
        <picture>
          <source srcSet={desktopBoost} media="(min-width: 768px)" />
          <img
            className="absolute top-0 right-0 z-0 h-full w-full"
            src={mobileBoost}
            alt="background of the boost tab"
          />
        </picture>
        <div className="relative text-white">
          <h2 className="text-2xl font-semibold mb-6">
            Boost your links today
          </h2>
          <span className="w-fit cursor-pointer py-3 px-10 bg-cyan hover:bg-light_cyan rounded-full font-semibold">
            Get Started
          </span>
        </div>
      </div>
    </section>
  );
}

export default CTA;
