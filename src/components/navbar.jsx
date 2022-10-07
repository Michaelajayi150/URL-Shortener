import { useState } from "react";
import { logo, menu } from "../assets";

function Navbar({ joinclass }) {
  const [menuOpen, setMenu] = useState(false);

  const toggle = () => {
    setMenu((prev) => !prev);
  };
  return (
    <header className="px-4 relative max-w-screen-lg mx-auto pt-6 flex items-center md:items-end justify-between">
      <img src={logo} alt="Shortly" />

      <div onClick={toggle} className="md:hidden">
        <img src={menu} alt="Open menu" />
      </div>

      <div className="hidden md:flex w-full items-center justify-between text-grayish_violet">
        <div className="flex space-x-4 items-center justify-between px-6">
          <a href="/">Features</a>
          <a href="/">Pricing</a>
          <a href="/">Resources</a>
        </div>
        <div className="flex space-x-8 items-center justify-between px-6">
          <a href="/">Login</a>
          <span className="w-fit cursor-pointer pt-1 pb-2 px-4 text-white bg-cyan hover:bg-light_cyan rounded-full font-semibold">
            Sign Up
          </span>
        </div>
      </div>

      <div
        className={joinclass(
          menuOpen ? "flex flex-col space-y-6 absolute" : "hidden",
          "sm:hidden rounded-md mobile-menu bg-dark_violet py-8 text-white"
        )}
      >
        <div className="flex flex-col items-center justify-center space-y-4 px-6">
          <a href="/">Features</a>
          <a href="/">Pricing</a>
          <a href="/">Resources</a>
        </div>
        <div className="flex flex-col space-y-4 items-center justify-center px-6">
          <a href="/">Login</a>
          <span className="w-full text-center cursor-pointer pt-1 pb-2 px-4 text-white bg-cyan hover:bg-light_cyan rounded-full font-semibold">
            Sign Up
          </span>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
