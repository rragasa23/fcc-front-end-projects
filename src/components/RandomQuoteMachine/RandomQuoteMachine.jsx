import { useState, useEffect, useRef } from "react";
import styles from "./RandomQuoteMachine.module.css"; // Importing the CSS Module
import twitterIcon from "./assets/twitter.svg";

function RandomQuoteMachine() {
  const [quote, setQuote] = useState(null);
  const [tweet, setTweet] = useState("");
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
    <div className={styles.container}>
      <div id={styles.quoteBox}>
        <div className={styles.text}>
          {quote ? '"' + quote.q : "Loading..."}
        </div>
        <div className={styles.extraActions}>
          <a href={tweet} target="_blank" id={styles.tweetQuote}>
            <img src={twitterIcon} alt="twitter icon"></img>
          </a>
          <div className={styles.author}>{quote ? "- " + quote.a : ""}</div>
          <button className={styles.newQuote} onClick={getRandomQuote}>
            New Quote
          </button>
        </div>
      </div>
    </div>
  );
}

export default RandomQuoteMachine;
