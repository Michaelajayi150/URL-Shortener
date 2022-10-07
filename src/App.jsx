import { useEffect, useState } from "react";
import CTA from "./components/cta";
import Footer from "./components/footer";
import Hero from "./components/hero";
import Navbar from "./components/navbar";
import Shortener from "./components/shortener";

function App() {
  const [details, setDetail] = useState([]);
  const [input, setInput] = useState("");
  const [error, setError] = useState("");
  let storedLink = JSON.parse(sessionStorage.getItem("Links") || "[]");

  const errorMessage = (err) => {
    setError(err);
    const timer = setInterval(() => {
      setError("");
    }, 3000);

    return () => {
      clearInterval(timer);
    };
  };

  useEffect(() => {
    getLinks();
  }, []);

  const getLinks = () => {
    // Set the links
    sessionStorage.setItem("Links", JSON.stringify(storedLink));
    setDetail(storedLink);
  };

  const shortenLink = (link) => {
    const found = details.some((r) => r.former === link);
    if (link === "") {
      return errorMessage("Please add a link");
    } else if (found) {
      return errorMessage("You have shortened this before");
    } else {
      fetch(`https://api.shrtco.de/v2/shorten?url=${link}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error(
              `This is an HTTP error: The status is ${response.status}`
            );
          }
          return response.json();
        })
        .then((actualData) => {
          const newLink = actualData.result.short_link;

          storedLink = [
            ...details,
            { former: link, new: newLink, copied: false },
          ];

          sessionStorage.setItem("Links", JSON.stringify(storedLink));
          setDetail(storedLink);

          setInput("");
        })
        .catch((err) => {
          console.log(err.message);
        });
    }
  };

  const copyLink = (link) => {
    setDetail((prev) =>
      prev.map((obj) => {
        if (obj.new === link.new) {
          return { ...obj, copied: true };
        }
        return { ...obj, copied: false };
      })
    );
    navigator.clipboard.writeText(link.new);
  };

  const joinClass = (...classes) => {
    return classes.filter(Boolean).join(" ");
  };

  return (
    <>
      <Navbar joinclass={joinClass} />
      <main>
        <Hero />
        <Shortener
          shorten={shortenLink}
          input={input}
          setInput={setInput}
          joinclass={joinClass}
          error={error}
        />
        <CTA data={details} joinclass={joinClass} copyLink={copyLink} />
      </main>
      <Footer />
    </>
  );
}

export default App;
