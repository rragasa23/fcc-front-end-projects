import "./RandomQuoteMachine.css";
import twitterIcon from "./assets/twitter.svg";
import { useState, useEffect, useRef } from "react";

function RandomQuoteMachine() {
  const [quote, setQuote] = useState(null);
  const [tweet, setTweet] = useState(``);
  let quotesList = useRef([]);

  const fetchQuotes = async () => {
    try {
      const res = await fetch("/quotes.json");
      const data = await res.json();
      quotesList.current = data;
      const randomQuote =
        quotesList.current[
          Math.floor(Math.random() * quotesList.current.length - 1)
        ];
      setQuote(randomQuote);
      setTweet(
        `https://twitter.com/intent/tweet?hashtags=quotes&text="${randomQuote.q}" ${randomQuote.a}`
      );
    } catch (err) {
      console.log(err);
    }
  };

  const getRandomQuote = () => {
    const randomQuote =
      quotesList.current[
        Math.floor(Math.random() * quotesList.current.length - 1)
      ];
    setQuote(randomQuote);
    setTweet(
      `https://twitter.com/intent/tweet?hashtags=quotes&text="${randomQuote.q}" ${randomQuote.a}`
    );
  };

  useEffect(() => {
    fetchQuotes();
  }, []);

  return (
    <div className="container">
      <div id="quote-box">
        <div id="text">{quote ? '"' + quote.q : "Loading..."}</div>
        <div className="extra-actions">
          <a href={tweet} target="_blank" id="tweet-quote">
            <img src={twitterIcon} alt="twitter icon"></img>
          </a>
          <div id="author">{quote ? "- " + quote.a : ""}</div>
          <button id="new-quote" onClick={getRandomQuote}>
            New Quote
          </button>
        </div>
      </div>
    </div>
  );
}

export default RandomQuoteMachine;
