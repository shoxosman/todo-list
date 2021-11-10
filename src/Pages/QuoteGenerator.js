import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

const Contact = () => {
  const [quote, setQuote] = useState({});
  /* const [color, setColor] = useState({});

  const randomColor = () => {
    Math.floor(Math.random() * 16777215).toString(16);
    setColor;
  }; */

  useEffect(() => {
    getquote();
  }, []);

  const getquote = () => {
    axios.get(`https://api.quotable.io/random`).then((response) => {
      setQuote(response.data);
    });
  };
  if (!quote) return "No Quote!";
  return (
    <div className="quote">
      <h1>Quote Generator</h1>
      <div className="container">
        <div className="box">
          <span></span>
          <div className="content">
            <h2>{quote.author}</h2>
            <br />
            <p>{quote.content}</p>
            <br />
            <br />

            <button onClick={getquote}>New Quote</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
