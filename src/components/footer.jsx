import React from "react";
import { facebook, instagram, logo, pinterest, twitter } from "../assets";

function Footer() {
  const links = [
    {
      tag: "Features",
      sublinks: ["Link Shortening", "Branded Links", "Analytics"],
    },
    { tag: "Resources", sublinks: ["Blog", "Developers", "Support"] },
    { tag: "Company", sublinks: ["About", "Our Team", "Careers", "Contact"] },
  ];
  return (
    <footer className="bg-very_dark_violet py-10">
      <div className="px-4 max-w-screen-lg mx-auto">
        <div className="flex flex-col items-center justify-between md:flex-row md:items-start md:flex-wrap">
          <div className="h-8 footer-image mb-10">
            <img src={logo} alt="Shortly" />
          </div>

          <div className="grid gap-4 text-center text-grayish_violet md:grid-cols-3 md:ml-auto md:mr-6 md:gap-16 md:text-start">
            {links.map((link, index) => (
              <div key={index} className="mb-4">
                <span className="text-white font-semibold mb-3">
                  {link.tag}
                </span>
                <div className="flex flex-col">
                  {link.sublinks.map((sublink, index) => (
                    <a
                      className="py-1 hover:text-light_cyan"
                      key={index}
                      href="/"
                    >
                      {sublink}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="flex socials space-x-6 mt-4 items-center justify-between lg:mt-0 md:mx-auto lg:mx-0">
            <a href="/">
              <img src={facebook} alt="Michael Ajayi Facebook" />
            </a>
            <a href="https://twitter.com/Michaelajayi150">
              <img src={twitter} alt="Michael Ajayi Twitter" />
            </a>
            <a href="https://twitter.com/Michaelajayi150">
              <img src={pinterest} alt="Michael Ajayi Pinterest" />
            </a>
            <a href="https://www.instagram.com/the_dev.io/">
              <img src={instagram} alt="Michael Ajayi instagram" />
            </a>
          </div>
        </div>

        <div className="attribution text-white mt-4">
          Challenge by{" "}
          <a
            className="text-grayish_violet"
            href="https://www.frontendmentor.io?ref=challenge"
            target="_blank"
          >
            Frontend Mentor
          </a>
          . Coded by{" "}
          <a
            className="text-grayish_violet"
            href="https://github.com/Michaelajayi150"
          >
            Ajayi Michael
          </a>
          .
        </div>
      </div>
    </footer>
  );
}

export default Footer;
