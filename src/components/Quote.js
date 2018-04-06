import React from "react";
import "../css/quote.css";

const Quote = ({ quoteText, citeText }) => {
  return (
    <div className="quote">
      <span>{quoteText}</span>
      <cite>{citeText}</cite>
    </div>
  );
};

export default Quote;
