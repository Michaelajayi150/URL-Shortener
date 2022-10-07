import { desktopShorten, mobileShorten } from "../assets";

function Shortener({ joinclass, error, shorten, input, setInput }) {
  return (
    <div className="px-4 max-w-screen-lg mx-auto">
      <div className="relative z-10 h-24 pt-8 mt-16">
        <div className="p-6 w-full bg-dark_violet absolute rounded-lg overflow-hidden">
          <picture>
            <source srcSet={desktopShorten} media="(min-width: 768px)" />
            <img
              className="absolute top-0 right-0 z-0"
              src={mobileShorten}
              alt="background of the shorten tab"
            />
          </picture>
          <div className="flex sm:items-start flex-col space-y-3 relative sm:flex-row sm:space-y-0 sm:space-x-4 lg:w-10/12 sm:w-full sm:mx-auto">
            <div className="sm:w-9/12">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className={joinclass(
                  error ? "border-red" : "outline-0 border-transparent",
                  "py-2 px-3 rounded-md w-full border-solid border-2"
                )}
                placeholder="Shorten a link here..."
              />
              <small className="text-red">{error ? error : null}</small>
            </div>

            <span
              onClick={() => shorten(input)}
              className="py-2 px-3 rounded-md text-center text-white bg-cyan hover:bg-light_cyan sm:w-3/12 cursor-pointer"
            >
              Shorten It!
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Shortener;
